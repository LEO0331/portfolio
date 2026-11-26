import type { Locale } from "../i18n/LocaleContext";

export const GRIDLINE_SECURITY_SHA = "f1049eaa5b1ec2c76ab134e918906ee9346136b5";
export const GRIDLINE_SECURITY_CI = "https://github.com/LEO0331/Gridline/actions/runs/45816006429/job/139895802480";
export const gridlineSecuritySource = (path: string): string => `https://github.com/LEO0331/Gridline/blob/${GRIDLINE_SECURITY_SHA}/${path}`;

interface SecurityCase {
  heading: string;
  date: string;
  introduction: string;
  flow: [string, string][];
  features: { title: string; description: string; source: string }[];
  verification: string;
  boundary: string;
  evidenceLabel: string;
  ciLabel: string;
}

export const gridlineSecurity: Record<Locale, SecurityCase> = {
  en: {
    heading: "Independent passive security probe intelligence",
    date: "Source checked: 2026-11-26 · merged Phases 1–3",
    introduction: "I built a separate Node.js/Express sensor to study unsolicited HTTP probes without exposing the research API or instrumenting the public research site. The engineering focus is defensive observability: bounded collection, trustworthy source resolution and honest reporting of evidence gaps.",
    flow: [
      ["Independent HTTP ingress", "Exact health route; ordinary unmatched routes return 404. No decoy credentials or active scanning."],
      ["Classify and correlate", "Fixed probe categories, actual response status and client claims; short-lived HMAC correlation only for trusted sources."],
      ["Bounded aggregates", "Five-minute reporting windows; health traffic separated; raw URLs, IPs and fingerprints are not exported."],
      ["Authenticated operator view", "UTC distributions, coverage, diagnostics, investigation indicators and validated CSV/JSONL recovery."]
    ],
    features: [
      { title: "Privacy and source confidence", description: "Fail-closed direct/single-proxy source resolution; in-memory HMAC correlation is capped at 4,096 identities with a five-minute lifetime. Unresolved sources remain unknown, not inferred from arbitrary forwarded headers.", source: "security-probe-sensor/sensor.js" },
      { title: "Protected analytics", description: "Independent Basic authentication, timing-safe digest comparison, strict CSP, no-store and bounded reporting concurrency protect the operator routes. Authorized operator traffic is excluded from observation; unauthorized requests retain actual status counts.", source: "security-probe-sensor/operator.js" },
      { title: "Recovery and data quality", description: "History is limited to seven days, 2,016 windows and 4 MiB of serialized aggregate rows, whichever comes first. CSV/JSONL restoration validates counts and rejects invalid input; duplicate, overlapping or expired windows are skipped. Missing coverage is not zero traffic; older reports have a different health-count definition.", source: "security-probe-sensor/history.js" },
      { title: "Optional network enrichment", description: "A fresh operator-provided local IPv4/IPv6 prefix dataset supports country/ASN and claimed bot range matching without request-time external lookups. Missing, stale or untrusted evidence remains unknown/unverified; range matches do not prove identity or intent.", source: "security-probe-sensor/enrichment.js" },
      { title: "Independent deployment", description: "A separate non-root Docker image and Render Blueprint keep sensor runtime flags operator-owned via sync: false. No database or paid resource is required by the Blueprint; observation and enrichment fail closed when not configured.", source: "render.yaml" }
    ],
    verification: "Post-merge sensor CI on 2026-11-26: 22/22 automated tests passed, npm audit reported zero vulnerabilities, and the isolated Docker build and local container smoke tests passed. This is dated sensor-specific evidence, not a new audit of the research application.",
    boundary: "Observation-only lab, not a WAF, SIEM or incident-confirmation system. Live Render proxy topology, dataset accuracy, continuous availability and production traffic measurements were not independently verified. History is volatile; recovery is manual. The authenticated operator dashboard is intentionally not linked as a public demo. The October research audit and November 11 research-product review retain their original scope.",
    evidenceLabel: "Implementation source",
    ciLabel: "Post-merge sensor CI"
  },
  zh: {
    heading: "獨立被動式安全探測情資",
    date: "來源確認：2026-11-26 · Phase 1–3 已合併",
    introduction: "我以獨立 Node.js／Express 感測器研究非預期 HTTP 探測，不公開研究 API，也不在公開研究網站植入探測監控。工程重點為防禦性可觀測性：有界限的收集、可信來源解析及如實揭露證據缺口。",
    flow: [
      ["獨立 HTTP 入口", "精確健康檢查路徑；一般未匹配路徑回傳 404。不設置誘餌憑證或主動掃描。"],
      ["分類與關聯", "固定探測類別、實際回應狀態及用戶端聲稱身分；僅對可信來源建立短效 HMAC 關聯。"],
      ["有界限的彙總", "五分鐘報告視窗；分離健康流量；不匯出原始 URL、IP 或指紋。"],
      ["需驗證的營運介面", "UTC 分布、覆蓋診斷、調查訊號及經驗證的 CSV／JSONL 還原。"]
    ],
    features: [
      { title: "隱私與來源可信度", description: "直接連線／單一代理來源解析採 fail-closed；記憶體 HMAC 關聯最多 4,096 個識別項目，有效期五分鐘。無法解析的來源維持未知，不任意信任轉送標頭。", source: "security-probe-sensor/sensor.js" },
      { title: "受保護的分析介面", description: "獨立 Basic 驗證、固定長度雜湊的定時安全比較、嚴格 CSP、no-store 及有界限的報告並行數。已驗證的營運操作不計入觀測；未授權請求保留實際狀態碼統計。", source: "security-probe-sensor/operator.js" },
      { title: "資料品質與還原", description: "歷史資料最多七天、2,016 個視窗、4 MiB 序列化彙總列，先達上限者為準。CSV／JSONL 還原驗證計數及拒絕無效輸入，跳過重複、重疊或過期視窗。缺失覆蓋不等於零流量；舊報告健康檢查計數定義不同。", source: "security-probe-sensor/history.js" },
      { title: "可選本機網路情資", description: "營運者提供的有效本機 IPv4／IPv6 前綴資料支援國別／ASN 與聲稱 bot 網段匹配，不需於請求時連外查詢。缺少、過期或不可信資料仍為未知／未驗證；匹配不代表身分或意圖確認。", source: "security-probe-sensor/enrichment.js" },
      { title: "獨立部署", description: "非 root Docker 映像及獨立 Render Blueprint；以 sync: false 保留營運者控制的功能旗標。不要求資料庫或付費資源；未設定觀測及情資功能時預設安全停用。", source: "render.yaml" }
    ],
    verification: "2026-11-26 合併後感測器 CI：22/22 自動化測試通過、npm audit 回報零漏洞，獨立 Docker 建置及本機容器冒煙測試通過。此為具日期的感測器證據，非研究應用的新一輪稽核。",
    boundary: "僅觀測的安全實驗室，不是 WAF、SIEM 或事件確認系統。尚未獨立驗證正式 Render 代理拓樸、資料集準確度、持續可用性及實際流量量測。歷史資料為揮發性，需手動還原。受保護的營運儀表板不作為公開 Demo 連結。十月研究稽核及 11 月 11 日研究產品確認保留原有範圍。",
    evidenceLabel: "實作來源",
    ciLabel: "合併後感測器 CI"
  }
};
