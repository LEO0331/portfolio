/** Shared audit logic only; never imported by the public application. */
export function isPullRequestHref(href, base = 'https://github.com/') {
  let url;
  try { url = new URL(href, base); } catch { return false; }
  if (!['github.com', 'www.github.com'].includes(url.hostname.toLowerCase().replace(/\.$/, ''))) return false;
  let path = url.pathname;
  for (let i = 0; i < 3; i++) { try { const next = decodeURIComponent(path); if (next === path) break; path = next; } catch { break; } }
  return /\/(?:pull|pulls)\/\d+(?:\/|$)/i.test(path);
}

export const workflowPattern = /\bGit\s+merge\b|\bv\d+\.\d+\s+merge\b|\b(?:latest\s+)?source\s+merge\b|\bmerged\s+(?:milestones|module|decision-support)\b|\bPR\s*#\s*\d+|\bpull[ -]requests?\b|\b(?:merged|open|blocked|source|historical)\s+(?:\w+\s+){0,3}PR\b|\bPR\s*#?\s*\d+.{0,80}\b(?:merged|blocked|open)\b|\b(?:pinned\s+)?(?:source\s+)?merge\s+commit\b|\b(?:Codex|coding[ -]agent)\b|codex\/|(?:agent|PR|previous|historical).{0,30}handoff|GitHub\s+(?:merge\s+)?metadata\s+confirm|已合併(?:的)?(?:來源|版本|實作|決策|政策|來源)?|(?:來源|固定來源|Git)\s*合併|PR.{0,30}(?:建立受阻|已合併|未合併|交接)|來源合併提交|固定已合併|來源\s*commit\s*合併/i;

const internalKeys = new Set(['id','slug','projectId','displayNumber','sourceVersion','snapshotVersion','methodId','kind','sourceRepository']);
export function visibleFields(value, path = []) {
  if (typeof value === 'string') return [{path:path.join('/'), value}];
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, child]) => internalKeys.has(key) ? [] : visibleFields(child,[...path,key]));
}
export function auditPublicRecords(records) {
  const findings=[];
  for (const [locale,cases] of Object.entries(records)) for(const study of cases) for(const field of visibleFields(study)) {
    if (isPullRequestHref(field.value) || (!/^(?:https?:|\/\/)/i.test(field.value) && workflowPattern.test(field.value))) findings.push({locale,caseId:study.id,...field});
  }
  return findings;
}
export function isResearchPayloadRequest(href) {
  let url;
  try { url = new URL(href); } catch { return false; }
  return /(?:^|\.)(?:data\.taipei|dosw\.gov|laws\.gov|www-ws\.gov|raw\.githubusercontent\.com|api\.github\.com)/i.test(url.hostname)
    || /\/policy\/senior-care-policy|\/data\/(?:fire-rescue-access-policy|policy-11|wifi|bridge|bus|neihu|shade|river-water-policy|dashboard-(?:snapshot|overview))|\/api\/(?:observations|provenance|scores|ingest|scenario|backtest)(?:\/|$)/i.test(url.pathname);
}
