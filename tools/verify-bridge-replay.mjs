/** Executes the unmodified pinned upstream commands in a disposable standalone checkout. */
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {spawnSync, execFileSync} from 'node:child_process';
import {readFileSync,writeFileSync,mkdirSync,existsSync,realpathSync} from 'node:fs';
import {resolve,dirname} from 'node:path';

assert.ok(process.argv[2], 'Usage: node tools/verify-bridge-replay.mjs DISPOSABLE_PINNED_CHECKOUT [EVIDENCE_DIRECTORY]; run npm ci in that checkout first');
const checkout=resolve(process.argv[2]);
const output=resolve(process.argv[3]??'docs/evidence/poc-hardening');mkdirSync(output,{recursive:true});
const sha='deb812b3472c078b5879727953e85d2850f0a82c';
const git=(...args)=>execFileSync('git',args,{cwd:checkout,encoding:'utf8'}).trim();
assert.equal(git('rev-parse','HEAD'),sha);assert.equal(git('status','--porcelain'),'','Start with a clean disposable source checkout');
const read=p=>readFileSync(resolve(checkout,p));const hash=b=>createHash('sha256').update(b).digest('hex');
const beforePointer=read('public/data/bridge-policy/current.json');
const pointer=JSON.parse(beforePointer);
const beforeSnapshot=read('public/data/bridge-policy/'+pointer.filename);
assert.equal(hash(beforeSnapshot),'a580fb3356a84fc86fe4c4f4a811f115f490769ff15700bec5b69f88008b7782');
const originalResults=read('docs/bridge-policy-results.json');
const commands=[];
const npmPath=process.env.npm_execpath ?? (process.platform==='win32'
  ? resolve(dirname(execFileSync('where.exe',['npm.cmd'],{encoding:'utf8'}).trim().split(/\r?\n/)[0]),'node_modules/npm/bin/npm-cli.js')
  : realpathSync(execFileSync('which',['npm'],{encoding:'utf8'}).trim()));
assert.ok(existsSync(npmPath),'Cannot resolve installed npm CLI');
try {
  for(const args of [['run','build'],['test'],['run','data:fetch:bridge-policy'],['run','data:audit:bridge-policy'],['run','data:verify:bridge-policy']]){
    const result=spawnSync(process.execPath,[npmPath,...args],{cwd:checkout,encoding:'utf8',maxBuffer:10_000_000});
    // Normalize insignificant console whitespace so retained logs pass repository diff checks.
    const log=((result.stdout??'')+(result.stderr??'')).split('\n').map(line=>line.trimEnd()).join('\n').trimEnd()+'\n';
    const filename='upstream-'+args.at(-1).replaceAll(':','-')+'.log';
    writeFileSync(resolve(output,filename),log);
    commands.push({command:'npm '+args.join(' '),exitCode:result.status,log:filename});
    assert.equal(result.status,0,'Upstream command failed: npm '+args.join(' '));
    if(args[0]==='test')assert.match(log,/88 passed/,'Expected the complete pinned suite');
  }
  const results=JSON.parse(read('docs/bridge-policy-results.json'));
  assert.equal(results.deterministicRebuilds,2);
  assert.deepEqual(read('public/data/bridge-policy/current.json'),beforePointer);
  assert.deepEqual(read('public/data/bridge-policy/'+pointer.filename),beforeSnapshot);
  const sources=JSON.parse(read('data/raw/bridge-policy/sources.json'));
  for(const s of sources)assert.equal(hash(read(s.filename)),s.sha256);
  writeFileSync(resolve(output,'upstream-replay-results.json'),JSON.stringify(results,null,2)+'\n');
  const report={verifiedAt:'2026-10-23',upstreamSha:sha,node:process.version,commands,testFiles:7,tests:88,
    sourceInputs:sources.map(s=>({key:s.key,filename:s.filename,bytes:read(s.filename).length,sha256:hash(read(s.filename))})),
    snapshotId:pointer.snapshotId,snapshotSha256:hash(beforeSnapshot),pointerSha256:hash(beforePointer),snapshotBytes:beforeSnapshot.length,
    deterministicRebuilds:2,exactPointerUnchanged:true,exactSnapshotUnchanged:true,
    publication:'Original immutable snapshot write/read/atomic-pointer publication executed twice locally by original verifier. No remote publish or Pages deployment.',
    restored:'Original verifier benchmark/report file restored byte-for-byte after retaining its generated results; source and policy files unmodified.'};
  writeFileSync(resolve(output,'upstream-replay-verification.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report,null,2));
} finally {
  // Restore only the report that the invoked original verifier owns; never reset the checkout.
  writeFileSync(resolve(checkout,'docs/bridge-policy-results.json'),originalResults);
}
assert.equal(git('status','--porcelain'),'','Pinned upstream checkout must remain clean');
