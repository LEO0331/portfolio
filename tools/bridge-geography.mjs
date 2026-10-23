import assert from 'node:assert/strict';
import {inflateRawSync} from 'node:zlib';

/** Read the retained official ZIP in memory; no file extraction or network access. */
export function readDistrictArchive(zip) {
  assert.ok(zip.length < 2_000_000, 'Boundary archive exceeds admitted size');
  let end = zip.length - 22;
  while (end >= Math.max(0, zip.length - 65557) && zip.readUInt32LE(end) !== 0x06054b50) end--;
  assert.ok(end >= 0 && zip.readUInt32LE(end) === 0x06054b50, 'Missing ZIP directory');
  assert.equal(zip.readUInt16LE(end + 4), 0, 'Multi-disk ZIP unsupported');
  const files = new Map();
  let offset = zip.readUInt32LE(end + 16);
  for (let i = 0; i < zip.readUInt16LE(end + 10); i++) {
    assert.equal(zip.readUInt32LE(offset), 0x02014b50);
    const method = zip.readUInt16LE(offset + 10);
    const size = zip.readUInt32LE(offset + 20), expanded = zip.readUInt32LE(offset + 24);
    const nameLength = zip.readUInt16LE(offset + 28);
    const name = zip.toString('utf8', offset + 46, offset + 46 + nameLength);
    assert.match(name, /^G97_A_CADIST_P\.(cpg|dbf|prj|shp|shx)$/);
    assert.ok(!files.has(name), 'Duplicate archive member');
    assert.ok(expanded < 1_000_000, 'Boundary member exceeds admitted size');
    const local = zip.readUInt32LE(offset + 42);
    assert.equal(zip.readUInt32LE(local), 0x04034b50);
    const start = local + 30 + zip.readUInt16LE(local + 26) + zip.readUInt16LE(local + 28);
    const packed = zip.subarray(start, start + size);
    assert.equal(packed.length, size);
    assert.ok(method === 0 || method === 8, 'Unsupported ZIP compression');
    const body = method === 8 ? inflateRawSync(packed, {maxOutputLength: 1_000_000}) : packed;
    assert.equal(body.length, expanded);
    files.set(name, body);
    offset += 46 + nameLength + zip.readUInt16LE(offset + 30) + zip.readUInt16LE(offset + 32);
  }
  assert.equal(files.size, 5);
  const get = ext => files.get('G97_A_CADIST_P.' + ext);
  assert.equal(get('cpg').toString('utf8').trim(), 'UTF-8');
  const prj = get('prj').toString('utf8');
  // Pin the actual definition instead of inferring a CRS from coordinate magnitudes.
  assert.equal(prj, 'PROJCS["TWD_1997_TM_Taiwan",GEOGCS["GCS_TWD_1997",DATUM["D_TWD_1997",SPHEROID["GRS_1980",6378137.0,298.257222101]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",250000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",121.0],PARAMETER["Scale_Factor",0.9999],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]');
  return {districts: readShapes(get('shp'), readDbf(get('dbf'))), prj};
}

function readDbf(dbf) {
  const count = dbf.readUInt32LE(4), header = dbf.readUInt16LE(8), length = dbf.readUInt16LE(10);
  assert.equal(count, 12);
  assert.ok(header + count * length <= dbf.length);
  const fields = [];
  let fieldOffset = 1;
  for (let i = 32; dbf[i] !== 13 && i < header; i += 32) {
    const name = dbf.toString('ascii', i, i + 11).replace(/\0.*$/, '');
    const size = dbf[i + 16]; fields.push({name, size, offset: fieldOffset}); fieldOffset += size;
  }
  assert.equal(fieldOffset, length);
  return Array.from({length: count}, (_, i) => {
    const row = dbf.subarray(header + i * length, header + (i + 1) * length);
    assert.equal(row[0], 32, 'Deleted DBF records are not admitted');
    return Object.fromEntries(fields.map(f => [f.name, new TextDecoder('utf-8', {fatal: true}).decode(row.subarray(f.offset, f.offset + f.size)).trim()]));
  });
}

function readShapes(shp, rows) {
  assert.equal(shp.readInt32BE(0), 9994); assert.equal(shp.readInt32LE(28), 1000);
  assert.equal(shp.readInt32BE(24) * 2, shp.length); assert.equal(shp.readInt32LE(32), 5);
  const result = [];
  for (let pos = 100; pos < shp.length;) {
    assert.equal(shp.readInt32BE(pos), result.length + 1);
    const bytes = shp.readInt32BE(pos + 4) * 2;
    const body = shp.subarray(pos + 8, pos + 8 + bytes);
    assert.equal(body.length, bytes); assert.equal(body.readInt32LE(0), 5);
    const parts = body.readInt32LE(36), points = body.readInt32LE(40);
    assert.ok(parts > 0 && points >= 4 && parts < points);
    assert.equal(body.length, 44 + parts * 4 + points * 16);
    const starts = Array.from({length: parts}, (_, i) => body.readInt32LE(44 + i * 4));
    assert.equal(starts[0], 0); starts.push(points);
    const rings = starts.slice(0, -1).map((start, i) => {
      assert.ok(starts[i + 1] > start && starts[i + 1] - start >= 4);
      const ring = Array.from({length: starts[i + 1] - start}, (_, j) => {
        const offset = 44 + parts * 4 + (start + j) * 16;
        const p = [body.readDoubleLE(offset), body.readDoubleLE(offset + 8)];
        assert.ok(p.every(Number.isFinite)); return p;
      });
      assert.deepEqual(ring[0], ring.at(-1), 'Open polygon ring');
      assert.ok(Math.abs(ring.slice(1).reduce((sum, p, j) => sum + ring[j][0] * p[1] - p[0] * ring[j][1], 0)) > 0, 'Zero-area ring');
      return ring;
    });
    const row = rows[result.length];
    assert.match(row.CPTID, /^630\d{4}$/);
    assert.ok(row.TNAME.endsWith('區'));
    result.push({code: row.CPTID, name: row.TNAME, rings});
    pos += 8 + bytes;
  }
  assert.equal(result.length, rows.length);
  assert.equal(new Set(result.map(d => d.code)).size, 12);
  return result;
}

export function segmentDistance(point, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], squared = dx * dx + dy * dy;
  const t = squared ? Math.max(0, Math.min(1, ((point[0] - a[0]) * dx + (point[1] - a[1]) * dy) / squared)) : 0;
  return Math.hypot(point[0] - a[0] - t * dx, point[1] - a[1] - t * dy);
}

/** Even/odd fill retains holes and disconnected parts; an edge is reported separately. */
export function polygonRelation(point, rings, tolerance = 1e-7) {
  assert.ok(Array.isArray(point) && point.length === 2 && point.every(Number.isFinite), 'Invalid point');
  assert.ok(Number.isFinite(tolerance) && tolerance >= 0);
  let inside = false, distance = Infinity;
  for (const ring of rings) {
    for (let i = 1; i < ring.length; i++) {
      const a = ring[i - 1], b = ring[i];
      distance = Math.min(distance, segmentDistance(point, a, b));
      if ((a[1] > point[1]) !== (b[1] > point[1]) && point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
    }
  }
  return {relation: distance <= tolerance ? 'boundary' : inside ? 'inside' : 'outside', distance};
}

export function classifyPoint(point, districts) {
  const relations = districts.map(d => ({code: d.code, ...polygonRelation(point, d.rings)}));
  const interiors = relations.filter(r => r.relation === 'inside').map(r => r.code).sort();
  const boundaries = relations.filter(r => r.relation === 'boundary').map(r => r.code).sort();
  return {status: boundaries.length ? 'boundary' : interiors.length > 1 ? 'multiple' : interiors.length ? 'inside' : 'outside', interiors, boundaries, nearestBoundaryMetres: Math.min(...relations.map(r => r.distance))};
}
