import type { Locale } from "../i18n/LocaleContext";

export const GRIDLINE_SOURCE_SHA = "e3d47a638ddb7f3192c63598596628f60c7b364d";
export const gridlineSource = (path: string): string => `https://github.com/LEO0331/Gridline/blob/${GRIDLINE_SOURCE_SHA}/${path}`;

export interface EngineeringTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface EngineeringSection {
  id: string;
  title: string;
  paragraphs: string[];
  sources: string[];
  table?: EngineeringTable;
}

interface GridlineEngineeringContent {
  title: string;
  summary: string;
  overview: [string, string][];
  architecture: string[];
  profiles: { title: string; steps: string[] }[];
  architectureNote: string;
  databaseNote: string;
  sections: EngineeringSection[];
}

export const gridlineEngineeringContent: Record<Locale, GridlineEngineeringContent> = {
  en: {
    title: "Gridline — Financial Data Engineering & Backend Reliability",
    summary: "A source-governed research system that keeps ingestion, historical observations, failure states and static publication explainable when external data is incomplete or unavailable.",
    overview: [
      ["Engineering problem", "Combine heterogeneous SEC, energy, event and market records without confusing missing data, old evidence and successful refreshes."],
      ["Implementation", "A native Node.js API, SQLite/WAL research history, deterministic observations and a separate validated static publication path."],
      ["Verified evidence", "10 JSON endpoints, 6 SQLite tables, a 20-company universe and targeted source regressions. Retained artifacts passed acceptance with two source warnings."],
      ["Current boundary", "The public demo serves snapshots. A fresh source dependency audit found an unapproved high advisory; a current upstream security-gate pass is not established."]
    ],
    architecture: ["External SEC / EIA / event / price sources", "Source-specific adapters and bounded HTTP requests", "Validation, normalization and observation provenance", "SQLite research store and retained source health"],
    profiles: [
      { title: "Local / API profile", steps: ["Historical queries and versioned domain services", "Controlled ingestion; persisted scenarios and backtests", "Local React interface or API client"] },
      { title: "Public GitHub Pages profile", steps: ["Merge fresh rows with the previous committed snapshot", "Generate full + compact JSON; check acceptance and consistency", "Publish a Git commit, dispatch Pages, render static React"] }
    ],
    architectureNote: "The exporter reads fresh local observations and previous JSON history; the public website exposes neither the Node API nor SQLite. Optional Supabase accounts/preferences are a separate store.",
    databaseNote: "These six tables share application-level source, ticker, method and lineage references. No SQL foreign-key relationships are declared. Observation batches are transactional; raw files, health updates and score writes are separate boundaries.",
    sections: [
      {
        id: "summary", title: "Executive engineering summary",
        paragraphs: [
          "Gridline investigates whether data-center buildout appears in grid demand, project decisions, company disclosures and market prices. The engineering challenge is preserving the meaning and timing of evidence across independent publishers, rather than reducing every input to a single score.",
          "The backend separates provider collection, normalization, provenance, persistence and domain services. The public demo consumes a compact static projection produced by an offline pipeline. This keeps the research interface usable without an always-running public API and makes publication an explicit validation decision."
        ], sources: ["README.md", "docs/api-ingestion.md"]
      },
      {
        id: "architecture", title: "Two execution profiles, one evidence pipeline",
        paragraphs: [
          "The API profile runs a native Node HTTP server and a synchronous SQLite connection with WAL enabled. It archives raw responses, retains normalized historical observations, tracks provider health and persists versioned calculations and user-requested runs.",
          "The static profile refreshes selected adapters offline, combines admitted results with retained history and builds full and compact artifacts. GitHub Pages serves React and JSON files. Successful snapshot publication and successful hosted deployment are separate events."
        ], sources: ["server/service.js", "server/export-static-snapshot.js", "docs/persistent-storage.md"]
      },
      {
        id: "api", title: "API design and service boundaries",
        paragraphs: [
          "Ten JSON endpoints cover research queries and controlled writes. Observation and score lists accept a positive limit capped at 500; offset is bounded at 1,000,000. Run histories default to 20 and are further capped by the store at 100. Text length, supported ticker and JSON-body guards limit the request surface.",
          "POST requests pass authorization and process-local rate checks before dispatch. Scenario and backtest inputs go to domain functions; backtests accept only the ten-session horizon. Unknown routes return 404; unexpected exceptions use a generic 500 response. These are local/API contracts, not publicly hosted endpoints."
        ], sources: ["server/index.js", "server/security.test.js", "docs/api-ingestion.md"],
        table: { caption: "Implemented local/API endpoints", columns: ["Method and path", "Behavior"], rows: [
          ["GET /api/health", "Source health and storage engine/schema, without an absolute database path"],
          ["GET /api/observations", "Source/ticker/type/region/time filters; bounded limit and offset"],
          ["GET /api/provenance", "One source-bound observation by observationId; missing record returns 404"],
          ["GET /api/scores", "Stored signals restricted to the current methodology version"],
          ["POST /api/ingest", "One supported source; optional force refresh"],
          ["POST /api/ingest/all", "Independent outcomes from all configured adapters"],
          ["POST /api/scenario", "Evaluate assumptions and persist input/output/method"],
          ["GET /api/scenario/runs", "Current-method saved assumption worksheets"],
          ["POST /api/backtest", "Supported ticker and fixed ten-session retrospective test"],
          ["GET /api/backtest/runs", "Current-method saved retrospective runs"]
        ] }
      },
      {
        id: "persistence", title: "Data model and persistence",
        paragraphs: [
          "SQLite/WAL provides a small persistent research store with a 5,000 ms busy timeout. Queries use bound parameters and fixed internal column mappings. Observation indexes support source/time and ticker/type/time queries; score snapshots have a ticker/time index and a method-aware unique key.",
          "There is no distributed transaction or banking ledger contract. Retained history is useful for inspection, but same-ID metadata and same-key score payloads can be updated. Backup, multi-process operational monitoring and a migration to a larger database remain deployment responsibilities."
        ], sources: ["server/database.js", "server/store.js", "server/database.test.js"],
        table: { caption: "Actual SQLite tables and consistency keys", columns: ["Table", "Key / role", "Write behavior"], rows: [
          ["observations", "id PRIMARY KEY; source, ticker, observed_at indexes", "Batch transaction; same ID refreshes metadata/record JSON"],
          ["source_health", "source PRIMARY KEY", "Latest status and last-success metadata upsert"],
          ["score_snapshots", "UNIQUE(ticker, as_of, methodology_version)", "Same key updates calculated time and payload"],
          ["scenario_runs", "UUID run ID; method, input_json, output_json", "A new run per execution"],
          ["backtest_runs", "UUID run ID; method, input_json, output_json", "A new run per execution"],
          ["schema_migrations", "version PRIMARY KEY", "Records schema version 1 once"]
        ] }
      },
      {
        id: "sources", title: "Source ingestion and provenance",
        paragraphs: [
          "An observation retains its source key, actual provider, origin URL, observed time, retrieval time and transformation lineage. SEC filing availability is separate from the economic period; native currency, units, taxonomy/tag and extraction classifications remain explicit. A later comparative filing must not silently replace the intended reporting period.",
          "Source availability is not a boolean substitute for data meaning. Missing, stale, not-separately-reported and reported zero are different states. The EIA adapter admits PJM actual-demand rows, not a data-center-specific load estimate. Configured event coverage is a bounded set of publishers and candidates."
        ], sources: ["server/sources.js", "server/provenance.js", "docs/data-provenance.md"],
        table: { caption: "Default publication sources and optional adapters", columns: ["Source", "Current implementation", "Boundary"], rows: [
          ["SEC", "Issuer filings/facts; period-aware extraction and official fallback", "Requires an identifying server-side User-Agent; missing fields stay unavailable"],
          ["EIA", "Keyed PJM actual-demand observations", "Regional demand is not attributable data-center demand"],
          ["prices", "Stooq first; per-ticker Yahoo Finance fallback", "Demo feeds can revise or delay history; licensing is separate"],
          ["events", "Verified Loudoun / Oracle corporate / Texas Governor records", "Paused/diagnostic publishers are not active coverage"],
          ["company-research", "Official/issuer-bound SEC release verification and retained cursors", "Partial access and original review dates remain visible"],
          ["pjm / company-ir", "Keyed generation data / configured official feeds", "Available adapters outside the default refresh set"],
          ["ferc", "Dataset catalogue request", "No selected research dataset; zero observations cannot become healthy"]
        ] }
      },
      {
        id: "identity", title: "Idempotency and data consistency",
        paragraphs: [
          "The observation ID is obs_ plus 24 hexadecimal SHA-256 characters over source, type, ticker, region, period end, observedAt and canonicalized value. Re-ingesting the same identity keeps one row. A changed value or observation time creates a different identity and preserves both records.",
          "Retrieval time and provider identity are not part of that key. ON CONFLICT updates retrieved_at, confidence, provenance_json and record_json; this is retained observation history with refreshable metadata, not byte-for-byte immutability or a collision-proof identifier. Corrections are not automatically reconciled into a formal supersession ledger.",
          "saveObservations commits or rolls back one batch. A later health write, raw-file archive or score operation is outside that transaction. Scenario and backtest execution creates a fresh run ID rather than promising request-level idempotency."
        ], sources: ["server/provenance.js", "server/store.js", "server/provenance.test.js"]
      },
      {
        id: "failures", title: "Failure recovery and degraded states",
        paragraphs: [
          "HTTP 200 is only transport success. Price, SEC and grid adapters must produce usable observations; a valid empty verified-event result is a deliberate exception. Per-ticker outcomes allow failed issuers to retain previous evidence while other issuers update.",
          "In the static merge, successful non-news records replace the relevant source/ticker population; failed tickers retain last-known-good rows. Events and company research accumulate/deduplicate history even after successful checks. A retained record's date is not advanced to make it appear newly observed."
        ], sources: ["server/service.js", "server/snapshot-merge.js", "server/export-static-snapshot.test.js"],
        table: { caption: "Failure scenarios, safeguards and remaining limits", columns: ["Failure", "Implemented safeguard", "Remaining limitation"], rows: [
          ["Timeout / provider denial", "Bounded outbound requests, degraded status and retained evidence", "Upstream access and recovery time are not guaranteed"],
          ["Empty or invalid HTTP 200", "Reject zero usable non-event results", "Validation does not prove source completeness"],
          ["Delayed or undersized price history", "Provider fallback; exact expected-session and minimum-history gate", "Both providers can fail; retention cannot create missing closes"],
          ["Partial company data", "Per-ticker health, field classifications and retained cursors", "Partial access does not establish full issuer coverage"],
          ["Duplicate observation", "Deterministic key and upsert", "Retrieval/provenance metadata is mutable; no request replay guarantee"],
          ["Invalid/inconsistent snapshot", "Readiness before writing; compact/full projection check before Git commit", "The two local file writes are not filesystem-atomic"],
          ["Concurrent main update", "Fetch, fast-forward and regenerate; at most three publication attempts", "Permission, unrelated-change or repeated contention errors stop publication"]
        ] }
      },
      {
        id: "publication", title: "Snapshot publication architecture",
        paragraphs: [
          "The exporter combines fresh local rows with the previous committed artifact, computes versioned signals and a deterministic previous-snapshot diff, then creates schema-v4 full and compact JSON. Readiness requires at least 60 positive, dated, HTTPS-sourced closes per enabled ticker through the expected NYSE session; optional partial sources can remain disclosed warnings.",
          "The acceptance helper defaults its reference to snapshot.generatedAt for price coverage. Snapshot age uses wall-clock time and warns above 96 hours. The independent review also evaluates coverage at an explicit review-time reference; a dated gate result is not a perpetual freshness guarantee.",
          "Two files are written with Promise.all after readiness succeeds. The publisher validates their exact projection, commits only those files and never force-pushes. A concurrent remote update causes regeneration against the newer baseline. The public commit is the publication boundary; a subsequent Pages dispatch/build/deploy must still succeed."
        ], sources: ["server/export-static-snapshot.js", "server/demo-readiness.js", "scripts/verify-demo-snapshot.js", "scripts/publish-snapshot.js"]
      },
      {
        id: "security", title: "Security and access control",
        paragraphs: [
          "The API binds to 127.0.0.1 by default. Allowed browser origins are exact configuration matches; reads are not bearer-authenticated. Loopback writes with no Origin or localhost:3000 can proceed; other writes require a configured timing-safe bearer-token comparison. Tokens remain server-side.",
          "Security controls are implemented and locally tested. They do not establish production TLS, shared rate limiting or deployed Supabase policy state. Optional Supabase stores accounts/preferences under owner-only RLS, separately from SQLite and public research snapshots.",
          "The source has an exact, expiring braces tooling-risk exception through 2026-11-11 00:00 Taipei, conditional on fresh matching exposure proof. A registry audit on 2026-10-27 found a different unapproved high body-parser advisory (GHSA-27r3-jxmh-p828). No current clean source audit or complete security-gate pass is claimed."
        ], sources: ["server/index.js", "server/http.js", "supabase/user-preferences.sql", "config/security-exceptions.json", "docs/security-exception-policy.md"],
        table: { caption: "Implemented safeguards and operating scope", columns: ["Control", "Bound", "Scope"], rows: [
          ["Write request limiter", "30 POSTs / client IP / 5 minutes; 10,000 client buckets", "In-memory, one API process; reset on restart"],
          ["JSON request size", "64 KiB streaming ceiling", "Reject oversized bodies before JSON parsing"],
          ["Provider HTTP", "HTTPS, public-address checks, 20-second timeout", "Credential-bearing URLs rejected; redirect targets checked"],
          ["Provider response", "25 MiB; at most 3 redirects", "Bounds collection; does not guarantee semantic accuracy"],
          ["Dependency gate", "Exact exception + matching exposure proof no older than 6 hours", "New high/critical or invalid proof blocks; current source audit has a blocker"],
          ["Optional accounts", "PKCE and owner-only preference RLS", "Public research remains usable without accounts"]
        ] }
      },
      {
        id: "automation", title: "Automation and delivery controls",
        paragraphs: [
          "The executable workflow is authoritative where older prose differs: the primary refresh runs at 12:17 UTC, with price-only recovery windows at 15:17 and 18:17 UTC. Taipei times are 20:17, 23:17 and next-day 02:17. Recovery skips an already-current snapshot; it does not keep a runner sleeping between windows.",
          "The local API scheduler is different: it checks once per minute after 16:15 New York time, remembers one run per date in process memory and skips prices on nontrading days. It is not a durable distributed scheduler.",
          "Actions are pinned to commits and permissions are separated by task. Snapshot Git commits require readiness and compact-consistency checks; regression/build and dependency/exposure checks subsequently gate Pages artifact upload and deployment. Snapshot commits explicitly dispatch Pages. Hosted deployment confirmation and Lighthouse results must be checked separately; none is inferred from these implementation controls."
        ], sources: [".github/workflows/daily-snapshot.yml", ".github/workflows/deploy-pages.yml", ".github/workflows/pr-ci.yml", "server/scheduler.js"]
      },
      {
        id: "verification", title: "Verified implementation results",
        paragraphs: [
          "The pinned artifacts contain 20 enabled companies and 5,741 retained observations. All 20 have 260 usable closes through 2026-10-26 in this artifact, identifying Yahoo Finance as the actual provider. Refresh-health record counts are not the same statistical unit as retained history.",
          "Targeted dependency-free suites exercised persistence/provenance/merge/publication (43 tests) and security/policy/exposure/account-health behavior (35 tests). The snapshot command passed with two warnings for partial events and company research. This is a bounded replay of retained artifacts and source regressions, not a complete Gridline suite, fresh collection or hosted deployment test."
        ], sources: ["server/database.test.js", "server/snapshot-artifacts.test.js", "scripts/publish-snapshot.test.js", "scripts/security-audit.test.js", "scripts/dependency-exposure.test.js"],
        table: { caption: "Observed evidence at the 2026-10-27 review", columns: ["Check", "Actual result", "Interpretation"], rows: [
          ["Configured universe / schema", "20 companies; 10 JSON endpoints; 6 SQLite tables", "Implementation inventory, not production scale"],
          ["Retained snapshot", "Generated 2026-10-26T20:34:11.996Z; 5,741 observations", "5,200 prices / 336 EIA / 155 SEC / 13 events / 37 company research"],
          ["Acceptance", "0 blockers; 2 partial-source warnings; compact projection matches", "Dated retained-artifact result, not guaranteed ongoing freshness"],
          ["Targeted regressions", "43 + 35 tests passed", "The full frontend/build suite was not rerun"],
          ["Fresh dependency audit", "1 high / 1 moderate / 6 low / 0 critical affected entries", "The high body-parser finding is outside the exact exception"],
          ["Public profile", "Read-only static snapshot presentation", "No publicly hosted Node API, availability or latency measurement asserted"]
        ] }
      },
      {
        id: "tradeoffs", title: "Engineering tradeoffs and limitations",
        paragraphs: [
          "SQLite and static publication keep the system inspectable and economical to operate, at the cost of synchronous local storage, batch freshness and separate API versus public profiles. Stable identities help repeat ingestion, while metadata updates, provider corrections and source coverage still need explicit interpretation.",
          "MA5/MA10 signals store ten cited closes and a methodology version; unsupported company scores stay null. Frontend RSI/Bollinger methods are separate calculations. Scenario worksheets preserve bounded user assumptions. Price-only backtests enter at the next observed close, exit ten observed sessions later and keep incomplete windows pending.",
          "These supporting methods do not establish predictive skill, executable prices, trading returns, financial recommendations or banking transaction processing. Data licensing, source revisions, transaction costs, slippage and production operations remain outside demonstrated outcomes. The strongest engineering evidence is visible, controlled behavior when sources degrade."
        ], sources: ["server/scoring/engine.js", "docs/scoring-methodology.md", "docs/backtesting.md", "docs/snapshot-changes.md"]
      }
    ]
  },
  zh: {
    title: "Gridline — 金融資料工程與後端可靠性",
    summary: "當外部資料不完整或無法取得時，仍能清楚說明資料介接、歷史觀測、失敗狀態與靜態發布的來源治理研究系統。",
    overview: [
      ["工程問題", "整合 SEC、能源、事件與市場資料，同時區分缺值、歷史證據及真正成功的更新。"],
      ["實作方式", "原生 Node.js API、SQLite/WAL 研究歷史、確定性觀測識別，以及獨立驗證的靜態發布流程。"],
      ["已驗證證據", "10 個 JSON 端點、6 張 SQLite 資料表、20 家企業與部分來源回歸測試；保留快照通過接受檢查，附兩項來源警告。"],
      ["目前界線", "公開 Demo 使用靜態快照；即時來源套件稽核發現未核准的高風險公告，尚未確立目前完整安全門檻通過。"]
    ],
    architecture: ["外部 SEC／EIA／事件／市場來源", "各來源介接器與有上限的 HTTP 請求", "驗證、正規化與觀測來源追溯", "SQLite 研究儲存與來源健康狀態"],
    profiles: [
      { title: "本機／API 模式", steps: ["歷史查詢與具方法版本的領域服務", "受控資料介接；保存情境與回測執行", "本機 React 介面或 API 用戶端"] },
      { title: "公開 GitHub Pages 模式", steps: ["合併新資料與先前已提交的快照", "產生完整／精簡 JSON；驗證接受條件及一致性", "發布 Git 提交、觸發 Pages、呈現靜態 React"] }
    ],
    architectureNote: "匯出器讀取本機新觀測與先前 JSON 歷史；公開網站不開放 Node API 或 SQLite。可選 Supabase 帳號與偏好設定使用獨立儲存。",
    databaseNote: "六張資料表透過應用層的來源、企業代號、方法與追溯識別建立邏輯參照，未宣告 SQL 外鍵關係。觀測批次具交易邊界；原始檔、健康狀態及訊號寫入屬不同邊界。",
    sections: [
      {
        id: "summary", title: "工程摘要",
        paragraphs: ["Gridline 研究資料中心建置是否反映於電網需求、專案決策、企業揭露與市場價格。工程重點在於保留不同發布者的證據意義及時間，而非將所有輸入壓縮成單一分數。", "後端分開處理取得、正規化、追溯、儲存與領域服務；公開 Demo 使用離線流程產生的精簡靜態投影，讓研究介面無須常駐公開 API，也讓發布成為明確的驗證決策。"],
        sources: ["README.md", "docs/api-ingestion.md"]
      },
      {
        id: "architecture", title: "兩種執行模式與同一證據流程",
        paragraphs: ["API 模式使用原生 Node HTTP 伺服器與啟用 WAL 的同步 SQLite 連線，封存原始回應、保留正規化歷史、追蹤來源健康，並保存具版本的計算與使用者執行紀錄。", "靜態模式離線更新選定來源，合併接受資料與保留歷史，產生完整及精簡檔案。GitHub Pages 提供 React 與 JSON；快照發布成功與網站部署成功是不同事件。"],
        sources: ["server/service.js", "server/export-static-snapshot.js", "docs/persistent-storage.md"]
      },
      {
        id: "api", title: "API 設計與服務邊界",
        paragraphs: ["10 個 JSON 端點提供研究查詢與受控寫入。觀測及訊號清單接受正整數 limit，上限 500；offset 上限 1,000,000。執行歷史預設 20 筆，儲存層另限制最多 100 筆；文字長度、企業代號與 JSON 本文均有檢查。", "POST 先經授權及單一程序限流，再分派至領域函式。回測僅接受固定十個交易期；未知路由回傳 404，非預期例外使用一般化 500 回應。這些是本機／API 契約，並非公開代管的端點。"],
        sources: ["server/index.js", "server/security.test.js", "docs/api-ingestion.md"],
        table: { caption: "已實作的本機／API 端點", columns: ["方法與路徑", "行為"], rows: [
          ["GET /api/health", "來源健康與儲存引擎／欄位版本，不揭露資料庫絕對路徑"],
          ["GET /api/observations", "來源、企業、類型、區域、時間篩選；有上限的 limit／offset"],
          ["GET /api/provenance", "以 observationId 取得單筆來源觀測；不存在時回傳 404"],
          ["GET /api/scores", "僅提供目前方法版本的保存訊號"],
          ["POST /api/ingest", "更新單一支援來源，可指定強制更新"],
          ["POST /api/ingest/all", "所有已設定介接器各自回報結果"],
          ["POST /api/scenario", "評估假設並保存輸入、輸出與方法"],
          ["GET /api/scenario/runs", "查詢目前方法版本的假設工作表"],
          ["POST /api/backtest", "支援企業代號與固定十交易期回溯計算"],
          ["GET /api/backtest/runs", "查詢目前方法版本的回溯執行紀錄"]
        ] }
      },
      {
        id: "persistence", title: "資料模型與持久化",
        paragraphs: ["SQLite/WAL 提供精簡持久化研究儲存，busy timeout 為 5,000 毫秒。查詢使用參數綁定及固定欄位對應；觀測索引支援來源／時間及企業／類型／時間，訊號另有企業／時間索引與方法版本唯一鍵。", "系統不提供分散式交易或銀行帳務保證。相同識別的中介資料及相同鍵的訊號內容仍可更新；備份、多程序營運監控與更大型資料庫移轉屬部署責任。"],
        sources: ["server/database.js", "server/store.js", "server/database.test.js"],
        table: { caption: "實際 SQLite 資料表與一致性鍵", columns: ["資料表", "鍵與用途", "寫入方式"], rows: [
          ["observations", "id 主鍵；來源、企業與 observed_at 索引", "批次交易；相同 ID 更新中介資料及紀錄 JSON"],
          ["source_health", "source 主鍵", "更新最新健康及上次成功資訊"],
          ["score_snapshots", "企業、基準時間、方法版本的唯一鍵", "相同鍵更新計算時間及內容"],
          ["scenario_runs", "UUID；方法、input_json、output_json", "每次執行建立新紀錄"],
          ["backtest_runs", "UUID；方法、input_json、output_json", "每次執行建立新紀錄"],
          ["schema_migrations", "version 主鍵", "一次記錄欄位版本 1"]
        ] }
      },
      {
        id: "sources", title: "來源介接與資料追溯",
        paragraphs: ["觀測保留來源代號、實際供應者、原始網址、觀測時間、取得時間及轉換追溯。SEC 申報可用時間與經濟報告期間分開，原幣別、單位、分類標籤及抽取分類持續明示，不能用較晚申報的比較數值默默取代目標期間。", "缺值、過期、未單獨揭露及已申報的零是不同狀態。EIA 介接接受 PJM 實際需求，不推定資料中心用電；事件涵蓋限於設定的發布者與候選。"],
        sources: ["server/sources.js", "server/provenance.js", "docs/data-provenance.md"],
        table: { caption: "預設發布來源與可選介接器", columns: ["來源", "目前實作", "界線"], rows: [
          ["SEC", "企業申報及財務資料；期間導向抽取與官方替代證據", "需伺服器端識別 User-Agent；缺欄位保持不可用"],
          ["EIA", "具金鑰的 PJM 實際需求", "區域需求不等於可歸因的資料中心需求"],
          ["prices", "先嘗試 Stooq，再逐企業以 Yahoo Finance 替代", "展示來源可能修訂或延遲；授權另行處理"],
          ["events", "驗證 Loudoun、Oracle 企業新聞與 Texas Governor 紀錄", "暫停或診斷發布者不算啟用涵蓋"],
          ["company-research", "官方或企業綁定 SEC 公告驗證與游標保留", "部分存取及原始審查時間持續可見"],
          ["pjm／company-ir", "具金鑰發電資料／已設定的官方消息來源", "介接器存在，但不在預設更新集合"],
          ["ferc", "資料集目錄請求", "尚未選定研究資料集；零觀測不能變成健康狀態"]
        ] }
      },
      {
        id: "identity", title: "冪等性與資料一致性",
        paragraphs: ["觀測識別為 obs_ 加上 24 個 SHA-256 十六進位字元，輸入為來源、類型、企業、區域、期間末、observedAt 與正規化值。同一身分重複介接只留一列；值或觀測時間變更則產生另一識別，保留兩者。", "取得時間與供應者身分不在識別鍵內。ON CONFLICT 會更新 retrieved_at、confidence、provenance_json 及 record_json，因此這是可更新中介資料的觀測歷史，不是逐位元組不可變或無碰撞識別。修正也不會自動成為正式取代關係帳本。", "saveObservations 對單一批次提交或回復；後續健康寫入、原始檔及訊號操作不在同一交易。情境與回測每次建立新執行 ID，不承諾請求層級重播冪等性。"],
        sources: ["server/provenance.js", "server/store.js", "server/provenance.test.js"]
      },
      {
        id: "failures", title: "失敗恢復與降級狀態",
        paragraphs: ["HTTP 200 只代表傳輸成功；價格、SEC 與電網來源仍須產生可用觀測，有效的零筆已驗證事件是明確例外。逐企業結果讓失敗企業保留原有證據，同時更新其他企業。", "靜態合併以成功非新聞結果取代對應來源／企業資料，失敗企業保留上次有效紀錄。事件及企業研究即使更新成功也累積並去重歷史；不改寫保留觀測日期來製造新鮮感。"],
        sources: ["server/service.js", "server/snapshot-merge.js", "server/export-static-snapshot.test.js"],
        table: { caption: "失敗情境、防護與剩餘限制", columns: ["失敗", "已實作防護", "剩餘限制"], rows: [
          ["逾時或供應者拒絕", "有上限的對外請求、降級與保留證據", "無法保證上游存取及恢復時間"],
          ["空白或無效 HTTP 200", "拒絕零筆可用的非事件結果", "驗證不代表來源完整"],
          ["價格延遲或歷史不足", "供應者替代；精確預期交易日與最少歷史門檻", "兩來源都可能失敗；保留不能補出缺少收盤價"],
          ["企業資料不完整", "逐企業健康、欄位分類及游標保留", "部分存取不能代表完整企業涵蓋"],
          ["重複觀測", "確定性鍵與新增或更新", "取得／追溯中介資料可變；非請求重播保證"],
          ["無效或不一致快照", "寫入前檢查接受條件；Git 提交前核對完整／精簡投影", "兩份本機檔案寫入不具檔案系統原子性"],
          ["main 同時更新", "取得、快轉並重產；最多三次發布嘗試", "權限、不相關變更或反覆競爭會停止發布"]
        ] }
      },
      {
        id: "publication", title: "快照發布架構",
        paragraphs: ["匯出器合併本機新資料與前次提交，計算具版本訊號及確定性快照差異，再產生欄位版本 4 的完整／精簡 JSON。每個啟用企業須至少 60 筆正值、有日期及 HTTPS 來源的收盤價，涵蓋預期 NYSE 交易日；可選部分來源可保留為明示警告。", "價格接受函式預設以 snapshot.generatedAt 為參考；快照年齡則使用實際時間，超過 96 小時提出警告。本次獨立審查也以明確審查時間計算涵蓋，具日期的通過結果不是永久新鮮度保證。", "通過接受條件後以 Promise.all 寫入兩檔。發布器再核對精確投影，只提交兩個快照檔，不強制推送；遠端同時更新時依新基準重產。公開 Git 提交是發布邊界，其後 Pages 觸發、建置與部署仍須成功。"],
        sources: ["server/export-static-snapshot.js", "server/demo-readiness.js", "scripts/verify-demo-snapshot.js", "scripts/publish-snapshot.js"]
      },
      {
        id: "security", title: "安全與存取控制",
        paragraphs: ["API 預設綁定 127.0.0.1；瀏覽器來源須完全符合設定，讀取端點不要求 bearer 驗證。無 Origin 或 localhost:3000 的 loopback 寫入可通過，其餘寫入需設定權杖並以固定時間比較；權杖留在伺服器端。", "控制已實作並經本機測試，但不代表生產 TLS、共用限流或已部署 Supabase 政策已驗證。可選 Supabase 以擁有者 RLS 保存帳號／偏好，與 SQLite 及公開研究快照分開。", "來源有精確且附到期日的 braces 工具鏈風險例外，至台北時間 2026-11-11 00:00，仍須新鮮且相符的暴露證據。2026-10-27 即時稽核發現不同且未核准的 body-parser 高風險公告 GHSA-27r3-jxmh-p828；不宣稱目前來源稽核無漏洞或已通過完整安全門檻。"],
        sources: ["server/index.js", "server/http.js", "supabase/user-preferences.sql", "config/security-exceptions.json", "docs/security-exception-policy.md"],
        table: { caption: "已實作防護與適用範圍", columns: ["控制", "上限", "範圍"], rows: [
          ["寫入限流", "每 IP 每五分鐘 30 次 POST；10,000 個用戶端桶", "單一程序記憶體，重啟後重置"],
          ["JSON 請求大小", "串流上限 64 KiB", "解析前拒絕過大的本文"],
          ["供應者 HTTP", "HTTPS、公網位址檢查、20 秒逾時", "拒絕帶憑證網址；重新檢查轉址目標"],
          ["供應者回應", "25 MiB；最多三次轉址", "限制取得成本，不保證語意正確"],
          ["套件門檻", "精確例外與六小時內相符暴露證據", "新高風險、嚴重風險或無效證據會阻擋；目前來源稽核有阻擋項"],
          ["可選帳號", "PKCE 與擁有者偏好 RLS", "無帳號也可使用公開研究"]
        ] }
      },
      {
        id: "automation", title: "自動化與交付控制",
        paragraphs: ["文字文件與執行設定不同時，以工作流程為準：主要更新為 UTC 12:17，逐價格恢復時段為 UTC 15:17、18:17，即台北 20:17、23:17 與隔日 02:17。已涵蓋預期交易日的快照會跳過恢復，不讓執行器在兩個時段間持續等待。", "本機 API 排程不同：紐約時間 16:15 後每分鐘檢查，以程序記憶體記住每日一次，非交易日跳過價格，並非持久化分散式排程。", "Actions 固定提交版本，按工作分配權限；快照 Git 提交須通過資料就緒與精簡版一致性檢查，後續回歸、建置及套件暴露檢查才是 Pages 產物上傳與部署的門檻。快照提交另觸發 Pages，實際網站部署與 Lighthouse 須獨立確認，不能由這些控制推定。"],
        sources: [".github/workflows/daily-snapshot.yml", ".github/workflows/deploy-pages.yml", ".github/workflows/pr-ci.yml", "server/scheduler.js"]
      },
      {
        id: "verification", title: "已驗證實作結果",
        paragraphs: ["固定版本含 20 個啟用企業、5,741 筆保留觀測；各企業有 260 筆可用收盤價至 2026-10-26，本檔實際供應者為 Yahoo Finance。最新健康狀態的紀錄數與保留歷史不是相同統計單位。", "不需安裝依賴的部分測試涵蓋持久化、追溯、合併、發布共 43 項，以及安全、政策、暴露與帳號健康共 35 項；快照命令通過，事件及企業研究各有部分來源警告。這是保留檔案及部分回歸重播，並非完整 Gridline 測試、重新取得資料或網站部署測試。"],
        sources: ["server/database.test.js", "server/snapshot-artifacts.test.js", "scripts/publish-snapshot.test.js", "scripts/security-audit.test.js", "scripts/dependency-exposure.test.js"],
        table: { caption: "2026-10-27 審查的實際證據", columns: ["檢查", "實際結果", "解讀"], rows: [
          ["企業集合及結構", "20 家企業、10 個 JSON 端點、6 張 SQLite 表", "實作盤點，非生產規模"],
          ["保留快照", "產生於 2026-10-26T20:34:11.996Z；5,741 筆", "價格 5,200／EIA 336／SEC 155／事件 13／企業研究 37"],
          ["接受檢查", "零阻擋、兩項部分來源警告；精簡投影一致", "具日期的檔案結果，非持續新鮮度保證"],
          ["部分回歸測試", "43 加 35 項通過", "未重跑完整前端／建置套件"],
          ["即時套件稽核", "受影響項目：高 1／中 1／低 6／嚴重 0", "body-parser 高風險不在精確例外內"],
          ["公開模式", "唯讀靜態快照呈現", "不宣稱公開 Node API、可用率或延遲量測"]
        ] }
      },
      {
        id: "tradeoffs", title: "工程取捨與限制",
        paragraphs: ["SQLite 與靜態發布讓系統便於查驗及操作，代價是同步本機儲存、批次新鮮度與分開的 API／公開模式。穩定識別支援重複介接，但中介資料更新、供應者修正與來源涵蓋仍須明確解讀。", "MA5／MA10 訊號保留十筆引用收盤價與方法版本，未支援的企業分數保持 null；前端 RSI／布林通道另行計算。情境工作表保存有限使用者假設；價格回測於下一觀測收盤進入、十交易期後退出，未完成視窗保持待定。", "這些輔助方法不代表預測能力、可成交價格、交易報酬、財務建議或銀行交易處理。授權、修訂、交易成本、滑價及生產營運不在已證實成果內；工程證據重點是來源降級時仍可見且受控的行為。"],
        sources: ["server/scoring/engine.js", "docs/scoring-methodology.md", "docs/backtesting.md", "docs/snapshot-changes.md"]
      }
    ]
  }
};
