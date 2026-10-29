# LEO0331 工程作品集

## 維護狀態 — 2026-10-29

Civic Explorer 進入功能凍結。[最新維護交接](./docs/civic-explorer-maintenance.md)記錄已合併版本、獨立的 Dashboard adapter、單一 Draft PR 與作品集配套分支、來源連結複查，以及仍待正式部署後執行的驗收。歷史報告保留原始日期與驗證範圍。

[English](./README.md) | **繁體中文**

[![E2E Smoke Tests](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml)
[![Deploy Portfolio to GitHub Pages](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml)
[![Lighthouse Audit](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml)

這是 LEO0331 的正式工程作品集，著重於招募者能快速瀏覽與理解的內容呈現。網站由經過整理的專案資料驅動，支援英文與繁體中文路由，並以靜態網站形式部署至 GitHub Pages。

## 架構與技術棧

[v3.0.1 穩定化報告](./docs/portfolio-v3.0.1-stabilization.md)記錄實際焦點、閱讀順序、觸控目標修正及前後瀏覽器量測；[可重用元件介面](./docs/explorer-component-api.md)說明受控 React API、市政資料 adapter 與獨立純 React 測試宿主。正式建置後以 `node tools/measure-explorer-stability.mjs baseline` 或 `final` 量測；加上 `--production` 則另行記錄正式站檢查，不混用本機與正式站的效能數值。

v3.0 在 `/zh/govtech/explore` 與 `/govtech/explore` 提供原創分層島嶼與完整 HTML 清單，以六個領域探索十三個既有案例；領域、案例、搜尋及檢視選擇可透過網址分享。原始案例與證據維持既有來源。[實作與驗證報告](./docs/portfolio-v3-implementation.md)說明領域映射、原生 SVG／HTML 互動、網址狀態、未來儀表板重用邊界及實際瀏覽器／資源量測。正式建置後執行 `node tools/verify-civic-explorer.mjs`，可檢查雙語、雙主題、五種寬度、四種狀態與所有註冊路由；只有根目錄版本建置後才設定 `QUALITY_BASE=/`。

v2.3 新增英文 `/engineering/gridline` 與繁中 `/zh/engineering/gridline` 獨立工程案例，由既有 Gridline 卡片與詳細抽屜連入。內容依固定來源版本說明原生 HTTP API、六表 SQLite 模型、觀測識別、來源降級恢復及靜態發布邊界；保留十二個 GovTech 案例，不新增依賴或即時資料請求。[來源審核](./docs/engineering-gridline-source-audit.md)與[驗證報告](./docs/portfolio-v2.3-gridline-verification.md)記錄實際部分來源測試、上游套件阻擋項、真實介面截圖及瀏覽器／資源量測。

- React 18 與 TypeScript
- React Router 7，搭配自動產生的 GitHub Pages 靜態路由入口
- Vite 8 與 Tailwind CSS
- Playwright E2E 測試與功能覆蓋率門檻
- GitHub Actions 自動執行建置、Lighthouse、E2E 與 Pages 部署

## 為什麼採用此結構

- 方便招募者快速掃讀：清楚的區塊、聚焦的專案卡片，以及直接的 Demo／原始碼連結
- 資料驅動內容：在資料檔更新作品集資訊，不需修改 JSX
- 雙語就緒：支援英文與繁體中文介面及專案內容
- 靜態部署：以可索引路徑與自動產生的 GitHub Pages 路由入口維持相容性
- 品質防線：Playwright E2E 與 CI 工作流程

## 訪客可以做什麼

- 查看個人介紹與工程專長
- 依類別、技術與狀態篩選專案
- 在頁面內開啟專案詳細資料，同時保留篩選條件與捲動位置
- 切換英文與繁體中文
- 直接開啟線上 Demo 與原始碼儲存庫

## 快速開始

```bash
npm ci
npm run build
npm run preview
```

Preview 在 `/portfolio/` 提供建置後的網站。開發時仍可使用 `npm run dev`，但目前 CSP 會阻擋 Vite 注入的樣式；目視驗證請使用 production preview。首次執行 E2E 前先執行 `npx playwright install chromium`。

## 建置與測試

建置使用 Tailwind CSS4.3.3／Vite plugin，移除原 Tailwind3／braces 鏈、PostCSS 設定、selector-parser override 及不再適用的 parser 測試；保留既有色盤、響應標題與 class 暗色樣式。瀏覽器支援依 Tailwind4：Safari16.4+、Chrome111+、Firefox128+。詳見[強化驗證](./docs/poc-hardening-verification.md)。

```bash
npm run validate:harness
npm ci
npm audit
npm run test:unit
npm run build
npm run test:e2e
git diff --check
```

2026-10-23 強化變更的完整及 production npm audit 均為零漏洞；較早日期的驗證報告保留當時公告結果。案例009現已獨立重播完整上游測試及兩次本機快照發布，並以條件式官方多邊形檢查補充原有母體。

## 部署至 GitHub Pages

1. 確認 `vite.config.ts` 中的 `base` 與部署儲存庫路徑一致。
2. 使用公開網站網址執行建置，以正確產生 sitemap 與 robots 中繼資料：
   - `SITE_URL=https://<username>.github.io/<repo> npm run build`
   - 建置會自動產生 `public/sitemap.xml` 與 `public/robots.txt`
   - 基於安全考量，`SITE_URL` 僅接受 `http`／`https` 網址
3. 推送至 `main` 分支。
4. 在儲存庫設定中，啟用以 GitHub Actions 部署的 GitHub Pages。

## SEO（輕量且自動化）

- 路由層級的中繼資料由 `src/utils/seo.ts` 中的 `usePageSeo` 處理。
- `public/sitemap.xml` 會在建置期間，依 `src/routes/routeConfig.json` 自動產生。
- `public/robots.txt` 會在建置期間，依 `SITE_URL` 自動產生。
- 部署後請提交：
  - `https://<username>.github.io/<repo>/sitemap.xml` 至 Google Search Console
  - 同一網址至 Bing Webmaster Tools

## 更新作品集內容

### 個人資料與技能

- `src/data/profile.ts`
- `src/data/skills.ts`

### 專案（英文＋繁體中文）

1. 執行 `npm run sync:projects` 預覽 GitHub 中繼資料變更。新儲存庫只會列為待審查候選項目，不會自動寫入。`npm run sync:projects -- --write` 僅用於將已審查的 Demo 網址更新套用至既有項目；已整理的專案描述永遠不會被覆寫。
2. 在 `src/data/projects.ts` 整理正式專案資料；不要保留自動產生的佔位文字。
3. 在 `src/data/projects.zh.ts` 新增或更新繁體中文描述、角色、分類、功能，以及挑戰與成果。可用選填的 `name` 欄位設定中文顯示名稱。目前所有專案皆已提供中文內容；未來新增的專案若缺少翻譯，系統會回退至標準英文專案資料。
4. 將線上 Demo 預覽存放於 `src/assets/images/projects/<id>.png`（或 `.webp`），並目視確認資料量較大的頁面已完成載入。
   - 擷取工具只會造訪 `tools/public-demo-url.mjs` 核准的公開主機；自訂部署網域必須先審查再明確加入。
5. 在 PowerShell 擷取指定專案的預覽：

```bash
$env:TARGET_IDS="project-id,another-id"
node tools/capture-project-previews.mjs
```

6. 在同一變更中更新 `progress.md`，記錄新增 ID、檢查來源、變更檔案、驗證證據、阻礙與下一步。
7. 執行上方完整驗證流程，並加上 `git diff --check`。

注意事項：

- 缺少 `demoUrl` 時，不顯示 Live Demo 按鈕。
- 缺少 `repoUrl` 時，不顯示 GitHub Repo 按鈕。
- 缺少圖片時，專案卡片會顯示安全的預設佔位內容。

## 首頁精選專案

首頁以 `src/data/featuredProjects.ts` 明確設定 Gridline、Book QA Library、CraftFocus 的順序，另以精簡 GovTech 集合入口連至十三案例總覽。目錄先依相同策展順序，再沿用置頂／狀態／名稱排序。`src/data/github-pins.json` 與 `featured` 旗標仍代表實際 GitHub 置頂，獨立同步。全部專案、搜尋、篩選與專案查詢連結持續可用。

Gridline 保留舊 `robotfriends` ID、slug 與預覽檔名，維持查詢深連結、置頂對應與外部參照。可見內容分別說明 Node.js／SQLite API 模式及公開靜態 Demo。詳見 [v2.2 證據與驗證](./docs/portfolio-v2.2-recruiter-refinement.md)。

設定 `GITHUB_TOKEN` 後執行 `npm run sync:pins`，透過 GraphQL 同步公開置頂儲存庫、對應 ID 與既有 `featured` 旗標。每月掃描也會執行同步，使用正式儲存庫網址處理改名。API 錯誤會保留上次成功快照並使工作失敗；頁面不需即時 API 或 token。初始快照已於 2026-10-06 核對公開個人頁面：六個置頂中有五個專案，`LEO0331/portfolio` 不列為卡片。

## 每月專案維護

[Monthly Project Maintenance](./.github/workflows/project-maintenance.yml) 於每月 1 日 **台北時間 09:17** 執行，也可在 Actions → Monthly Project Maintenance → Run workflow 手動啟動。推送至預設分支後排程才會生效；請在 Settings → Actions → General 啟用 **Allow GitHub Actions to create and approve pull requests**，不需要額外 API 金鑰。

掃描會比較儲存庫推送時間、正式網址、描述、首頁、預設分支、封存狀態與根目錄 README 雜湊，支援儲存庫轉址及 monorepo 連結，並分頁查詢未收錄的公開儲存庫。首次執行會建立基準並開啟草稿 PR；後續有變更時才建立或更新 PR。現有維護分支會保留人工整理的內容，不強制推送；合併衝突會停止工作供人工處理。

既有根儲存庫專案的核准 Demo 網址可自動提出更新。名稱、改名後的儲存庫連結、中英文描述、新專案與預覽圖仍須在草稿 PR 中核對整理。沒有 GitHub 推送或中繼資料變更的線上畫面變動不會被偵測。整理完成後合併至 `main`，既有 Pages 工作流程會發布更新。

推送前執行 harness、單元測試、TypeScript／建置、E2E 及 diff 檢查。相依套件 audit 結果會附在 PR／工作紀錄供審查，避免安全公告阻擋專案變更報告；發布前仍須處理公告。API 錯誤會使掃描失敗且不寫入不完整基準。報告及 audit 輸出會上傳為 artifacts。GitHub 排程可能延遲，公開儲存庫 60 天無活動時會停用排程，屆時需在 Actions 重新啟用。內建 token 觸發的其他工作流程可能需要核准，因此驗證直接在此工作中執行。

本機執行 `node tools/scan-project-changes.mjs` 時須設定 `GITHUB_TOKEN` 供 GraphQL 取得置頂項目。工具會寫入 `.github/project-scan-state.json`、`.github/project-scan-report.md`、`src/data/github-pins.json` 及建議的 Demo 網址／精選旗標，接受基準前請一起審查。置頂選擇也會包含在草稿 PR 中。

## 文件

- 英文 README：[README.md](./README.md)
- 儲存庫 Agent 規則：[AGENTS.md](./AGENTS.md)
- 功能狀態：[feature_list.json](./feature_list.json)
- 可續接進度紀錄：[progress.md](./progress.md)
- 目前工作階段交接：[session-handoff.md](./session-handoff.md)
- Git Bash／CI 完整驗證入口（`bash init.sh`）：[init.sh](./init.sh)
- 工作流程技能範本：[skill.md](./skill.md)
- 範本使用指南：[wiki.md](./wiki.md)

## GovTech 案例展示

案例 007 呈現已合併的 [Crash Map PR #9](https://github.com/LEO0331/taipei-crash-map/pull/9)，合併 `2026-10-22T00:57:41Z`，固定 commit [`e01b651d66cedfb5106c263088dc99fbc5d5e3b8`](https://github.com/LEO0331/taipei-crash-map/commit/e01b651d66cedfb5106c263088dc99fbc5d5e3b8)，取代來源合併前 pending 文字。Snapshot `pto-bus-0b70f80504e5b952`、方法 `bus-network-service-evidence-review-v1`、schema／設定 `1.0.0`；root manifest SHA256 `00c1f33198ef811a46bddc784119063b2ce3174c5dbe3224ba0b662098d02b7b` 為不同識別。八份 PTO feed 的 5,586,935 原始壓縮 bytes 於 10 月 21 日取得，22 日重建不冒稱重新抓取。見[案例 007 規格](./docs/govtech-case-study-007.zh-TW.md)、[有界獨立來源稽核](./docs/govtech-bus-service-source-audit.md) 及 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。

盤點區分 416 主路線、731 附屬路線、28,826 路線站牌、5,376 實體站位及 43,447 站次。1,241 品質候選為 A163／B927／C151；公告方向比較及歷史實際表現皆零合格，不是零服務。容量 5 缺口優先涵蓋二主路線、均衡五；容量 10 為五／十；不限全選 1,241、416 主路線。策略選取差異是容量 5 每邊新增／移除各三、容量 10 各五。Strict／broader 不改母體或選入，卻仍屬不同證據範圍。這是身分／站序／文件調查，非減班、短缺、需求或運輸公平評等。

Crash Map 現以既有 normalizer 設 `govtechCaseIds: ['neihu-congestion', 'bus-service']`，保留事故探索與兩條在地化 drawer 連結；Bin Map 001／005 及首頁置頂順序不變，九個案例不需要九個根專案。獨立稽核用原 source pure functions 驗 pinned manifest、四份 index／reports 及兩份代表 route details，不宣稱重跑上游全套測試、抓全部 416 details 或另做官方 ETL。

案例 006 呈現已合併的 [Crash Map PR #7](https://github.com/LEO0331/taipei-crash-map/pull/7)，合併時間 `2026-10-21T02:12:06Z`，固定 commit [`deb28d5d5b4e608eb04d89743bc3fea632d74c8a`](https://github.com/LEO0331/taipei-crash-map/commit/deb28d5d5b4e608eb04d89743bc3fea632d74c8a)，取代來源文件合併前 pending 狀態。Snapshot `neihu-readiness-49f28aaa55758ffe`、方法 `neihu-traffic-observation-review-v1`、設定 `1.0.0`、生成 `2026-10-21T01:43:13.322Z`。見[案例 006 規格](./docs/govtech-case-study-006.zh-TW.md)、[來源稽核](./docs/govtech-neihu-congestion-source-audit.md)、[v1.5 歷史驗證](./docs/govtech-v1.5-verification.md) 及 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。

保留六份官方檔案、1,710,095 原始 bytes；604 個全市 VD 經七道路名過濾成 58 個研究設備，全部研究地理未驗證，其中 31 個明確單 link、27 個多 link 未解。品質候選 58（27 urgent／31 review／0 ready）；容量 5 選五設備／三道路，容量 10 保留並增加到十設備／五道路。歷史表現兩容量都零合格：2,195 legacy lane 列排除，未納入可比歷史。null 期間／cadence／完整率仍未知。這是 metadata 調查，不是最塞熱點、量測車速趨勢或交通改善成效；品質與表現目標分開，本機 benchmark 也非公網／行動 latency 保證。

**Portfolio GovTech Showcase v1.6（歷史基準）** 延伸已隨 [PR #16](https://github.com/LEO0331/portfolio/pull/16) 合併的展示。案例 002 [PR #18](https://github.com/LEO0331/portfolio/pull/18)、案例 003 [PR #19](https://github.com/LEO0331/portfolio/pull/19)、案例 004 [PR #20](https://github.com/LEO0331/portfolio/pull/20)、案例 005 [PR #21](https://github.com/LEO0331/portfolio/pull/21) 及案例 006 [PR #22](https://github.com/LEO0331/portfolio/pull/22) 均已合併，本版以 main `7c7ace1b97a334e0b618b78f7f018dc0c0a150bd` 為基準，已包含 [PR #24](https://github.com/LEO0331/portfolio/pull/24) 的 Vite 8.3.5；本案例不宣稱完成該先前依賴更新。

個人[市政資料治理與決策支援系統](https://leo0331.github.io/portfolio/zh/govtech) 依序呈現六個政策領域的十三個已完成工程 POC：[001 — 臺北市清潔箱配置決策支援](https://leo0331.github.io/portfolio/zh/govtech/bin-policy) 展示空間配置及政策加權參考涵蓋；[002 — 臺北市 1999 民生通報與環境治理決策支援](https://leo0331.github.io/portfolio/zh/govtech/civic-1999) 展示歷史派工與調查查核；[003 — 豪雨防汛整備與設施查核決策支援](https://leo0331.github.io/portfolio/zh/govtech/heavy-rain-preparedness) 展示設施證據缺口及 GIS 驗證；[004 — 臺北市老舊建築與都市更新決策支援](https://leo0331.github.io/portfolio/zh/govtech/urban-renewal) 展示行政核對及法律階段語義；[005 — 樹蔭公平與都市熱環境整備決策支援](https://leo0331.github.io/portfolio/zh/govtech/shade-equity) 已完成 GIS 盤點及證據就緒原型，排序現勘能力仍受資格閘門限制；[006 — 內湖交通壅塞與觀測資料就緒度決策支援](https://leo0331.github.io/portfolio/zh/govtech/neihu-congestion) 完成設備／來源品質查核，歷史壅塞排名仍待合格觀測；[007 — 臺北市公車路網與服務涵蓋決策支援](https://leo0331.github.io/portfolio/zh/govtech/bus-service) 完成路網／公告文件查核，方向服務比較與歷史實際表現仍不可用。[008 — 公共 Wi-Fi 資源配置與數位近用](https://leo0331.github.io/portfolio/zh/govtech/wifi-allocation) 呈現來源對帳及非自身增益為零的實驗地理研究；[009 — 橋梁檢測與維護](https://leo0331.github.io/portfolio/zh/govtech/bridge-inspection) 呈現保守資產對帳及受限行政調查。[010 — 高齡社區照顧據點涵蓋與服務整備](https://leo0331.github.io/portfolio/zh/govtech/senior-community-care) 呈現官方 PDF 擷取、保守跨版本對應與隱私最小化行政追蹤。[011 — 食品衛生與抽驗紀錄證據查核](https://leo0331.github.io/portfolio/zh/govtech/food-hygiene-inspection) 呈現歷史檢體語義、官方來源保全及保守場所證據門檻。[012 — 消防通道與狹小巷道救災整備證據查核](https://leo0331.github.io/portfolio/zh/govtech/fire-rescue-access) 呈現保守文件關聯與尚不可判定的實際救災整備。[013 — 臺北市河川水質監測與長期趨勢證據查核](https://leo0331.github.io/portfolio/zh/govtech/river-water-quality) 區分公告列與實際觀測，保存偵測極限，並分開呈現文件查核、受限描述性比較與不可用的 RPI／因果結論。這些是個人工程 POC，不由臺北市政府營運或背書，未進行官方營運整備認證。

案例 005 呈現已合併的 [Bin Map PR #19](https://github.com/LEO0331/taipei-bin-map/pull/19)，合併時間 `2026-10-20T07:14:40Z`，固定 commit [`612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9`](https://github.com/LEO0331/taipei-bin-map/commit/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9)；此 metadata 取代舊來源交接「無法建立 PR」的歷史狀態。Source snapshot `shade-source-v1-078b91443dc33e45` 與 derived snapshot `shade-equity-v1-8e4cfb4029d0831d` 為不同識別；方法 `shade-equity-evidence-review-v1`、設定 `1.0.0`、凍結生成 `2026-10-20T00:41:41.554Z`。見[案例 005 規格](./docs/govtech-case-study-005.zh-TW.md)、[來源稽核](./docs/govtech-shade-equity-source-audit.md)、[v1.4 歷史驗證](./docs/govtech-v1.4-verification.md)、[v1.5 歷史驗證](./docs/govtech-v1.5-verification.md) 及 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。

真實 GIS 納入 89,860 筆樹木觀測、14,896 個人行道單元及 50,730 個樹穴。2 公尺下樹木匹配／未匹配／歧義為 45,559／44,274／27，樹穴為 46,109／480／4,141；但**合格排序候選為零**，因 `SW_LENG_ItemValue` 測量語義未驗證，正規化密度及現勘排序仍不可用。容量 5／10 或行政區均衡不能修復閘門；零合格不是零需求。0／2／5 公尺比較改變關聯證據範圍，不是樹蔭、樹冠或降溫改善。完整轉換 15.5–16.1 秒與額外 join 約 2 秒為上游離線記錄，非瀏覽器延遲；13,723 bytes 只計 metadata，非整頁流量。不宣稱量測 canopy、行人熱暴露或可種性。

案例 001 與 005 共用唯一 `taipei-bin-map` 根專案，Drawer 以在地化案例 records 提供兩條連結，不能用不同 project ID 數量取代案例數。`govtechCaseIds` 新陣列有定義時優先（含空陣列）、去重／驗證所屬 project，未定義才回退舊單值；外部 URL 及首頁 GitHub 置頂順序保留。

案例 004 呈現已合併的[不動產來源 PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5)，固定 commit 為 [`e3f37ff91816b4d51223ab686097a6cef542ca31`](https://github.com/LEO0331/taipei-real-estate-dashboard/commit/e3f37ff91816b4d51223ab686097a6cef542ca31)、快照 `ure-c81e4ef44e6c9868`、方法 `urban-renewal-evidence-review-v1`、設定 `1.0.0`、分析日 2026-10-19。已完成行政證據查核模組；原有房市及住宅資料仍保留探索定位。見[案例 004 規格](./docs/govtech-case-study-004.zh-TW.md)、[來源稽核](./docs/govtech-urban-renewal-source-audit.md)、[v1.3 歷史驗證](./docs/govtech-v1.3-verification.md)、[v1.4 歷史驗證](./docs/govtech-v1.4-verification.md)、[v1.5 歷史驗證](./docs/govtech-v1.5-verification.md) 及 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。

實際母體為 11 個 A 級行政區問題：容量 5 選中正、大同、中山、松山、大安；容量 10 再加萬華、士林、北投、內湖、南港，文山因容量未選；不限則全選 11。每區一題且主要資格相同，因此缺口優先、區別均衡、來源核對結果及順序相同。選入問題共涉及兩個不同面向、一種已驗證來源，不把各候選面向相加。信義缺列是涵蓋未知而非零案件。全市建物存量、使照流量、獎勵單位及法律階段不混合；858 天是資源版本年齡，不是案件停滯。老屋不等於危樓，劃定核准不等於更新完成，未建立安全、法律資格或投資推薦。

案例 003 呈現已合併的 [Feitsui PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5)，固定來源為 [`195e63111d32ad564291545ff9d8b230b025b055`](https://github.com/LEO0331/taipei-feitsui-water-map/commit/195e63111d32ad564291545ff9d8b230b025b055)、快照 `sha256-d67edc57254ee273`、方法 `heavy-rain-preparedness-review-v1`、設定 `1.0.0`，來源查核日 2026-10-19。在案例 003 的固定來源版本，河川水質與生態等模組為探索功能；目前獨立案例 013 已以另一固定版本加入河川監測證據查核，水庫／生態探索仍分開保留。兩案不合成防汛與污染分數。

相同嚴格證據範圍與容量 5 下，缺口優先選入 2 區、5 個 A 候選及 12 個候選層級問題；地理均衡選入 5 區、2 A／3 B 及 15 個問題。兩者皆選北投／士林機具候選。來源共通問題可跨候選重複，不代表淹水風險、防護效果或政策績效。嚴格模式不採計帶限制的歷史來源；695 筆為轉換納入觀測數，並非嚴格情境貢獻。因缺少已驗證排水服務關係而採行政區 × 類別查核；官方參考地理部分涵蓋、歷史日期矛盾及沉砂池面積單位仍是限制。本案例不是警報或預報，不確立排水能力、機具目前可用性、實際整備或防淹保障。

保留 v1.2 文件：[案例 003 規格](./docs/govtech-case-study-003.zh-TW.md)、[豪雨固定來源稽核](./docs/govtech-heavy-rain-source-audit.md) 及 [Portfolio v1.2 驗證](./docs/govtech-v1.2-verification.md)。[上游驗證紀錄](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/verification.md) 為另行引用的既有結果，不宣稱本次 Portfolio 完整重跑上游應用。

Showcase v1.1 新增 [案例 002 規格](./docs/govtech-case-study-002.zh-TW.md)、[1999 固定來源稽核](./docs/govtech-civic-1999-source-audit.md) 及 [v1.1 驗證](./docs/govtech-v1.1-verification.md)。來源固定為 352dbebe0057f62817e4ee08572e1a4d207a5b5a；作品集呈現凍結彙總情境，不即時請求民生資料。

v1.0–v1.5 歷史驗證報告保持不變；[v1.0 規格](./docs/govtech-case-study-v1.0.zh-TW.md)及[清潔箱來源查核](./docs/govtech-source-audit.md) 保留歷史證據並明示目前狀態補充。[歷史可重用案例指南](./docs/govtech-case-study-template.md)保留整合模式：先核對固定來源與能力，引用既有 project ID（可為已被其他案例使用的 project）、補齊雙語資料／路由／metadata，再驗證刷新、語言／base、多案例連結、限制及行動版。保留既有 baseline fixtures 與首頁精選順序，以實際結果更新 feature ledger／交接；一般專案同步及人工策展維持不變。

新頁沿用 SEO hook 與靜態入口產生器，包含各頁標題／描述、Open Graph 與 sitemap。同步提供[英文首頁](https://leo0331.github.io/portfolio/govtech)、[清潔箱案例](https://leo0331.github.io/portfolio/govtech/bin-policy)、[1999 案例](https://leo0331.github.io/portfolio/govtech/civic-1999)、[豪雨案例](https://leo0331.github.io/portfolio/govtech/heavy-rain-preparedness)、[都市更新案例](https://leo0331.github.io/portfolio/govtech/urban-renewal)、[樹蔭案例](https://leo0331.github.io/portfolio/govtech/shade-equity)、[內湖案例](https://leo0331.github.io/portfolio/govtech/neihu-congestion) 及[公車案例](https://leo0331.github.io/portfolio/govtech/bus-service)。

Policy #5 已完成為案例 007 的路網／公告文件查核，歷史實際表現仍受證據閘門限制。下一題可建議既有規劃 **公共 Wi-Fi 服務配置**先做來源可行性稽核，並非新核准實作。原路線圖保留鼠患專項及 `taipei-safety-map` 擴充；交通模組維持 `taipei-crash-map`，內湖歷史壅塞比較仍受閘門限制。Bin Map v1.3 政府作業流程無限期延後。

E2E 會自動建置並啟動 production preview，在正式 CSP 下檢查響應式樣式與深層靜態入口；請保留 4175 port。結果與截圖見 [v1.0 歷史紀錄](./docs/govtech-verification.md)、[v1.1 歷史紀錄](./docs/govtech-v1.1-verification.md)、[v1.2 歷史驗證](./docs/govtech-v1.2-verification.md)、[v1.3 歷史驗證](./docs/govtech-v1.3-verification.md)、[v1.4 歷史驗證](./docs/govtech-v1.4-verification.md)、[v1.5 歷史驗證](./docs/govtech-v1.5-verification.md) 及 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。

## GovTech Showcase v1.7 — 案例 008

單一雙語 Wi-Fi 案例整合已合併 Policy #8 v1.0 來源對帳及 v1.1 地理研究。91 筆設施中已驗證0／假設經測試87／尚未釐清4；非自身增益皆0，最佳化仍不可用。模式C 仍缺營運與需求證據，保留原探索工具身分及既有案例。

[Case008](./docs/govtech-case-study-008.zh-TW.md) · [Source audit](./docs/govtech-wifi-allocation-source-audit.md) · [Verification](./docs/govtech-v1.7-verification.md).

## GovTech Showcase v1.8 — Case009

九個完整雙語案例。新增橋梁檢測與維護文件查核，416來源列／415分組、612清冊列，接受216研究對應，其中194地理准入；分級23／393／0。公開紀錄不能認證橋梁安全或確定逾期。保留既有安全探索工具、前八案、專案關聯與依賴。

[Case009](./docs/govtech-case-study-009.zh-TW.md) · [Source audit](./docs/govtech-bridge-inspection-source-audit.md) · [Verification](./docs/govtech-v1.8-verification.md).

## 離線驗證案例009

使用位於其他專案之外的獨立暫存 checkout，避免父專案建置設定影響來源驗證：

```bash
git clone https://github.com/LEO0331/taipei-safety-map.git <standalone-checkout>
git -C <standalone-checkout> -c core.autocrlf=false checkout deb812b3472c078b5879727953e85d2850f0a82c
```

先在該 checkout 執行 `npm ci`，再從 Portfolio 執行：

```bash
npm run verify:bridge-replay -- <standalone-checkout>
npm run verify:bridge-geography -- <standalone-checkout>
```

第一個命令執行原始完整建置／測試與兩次本機不可變發布；第二個使用保留的官方區界 ZIP 及上游 lockfile 的 proj4 做條件式離線落區檢查，不變更遠端來源或原始政策母體。詳見[範圍、命令、證據及限制](./docs/poc-hardening-verification.md)。

## 市政案例 v1.8 展示品質整理

GovTech 列表與專案連結使用輕量雙語摘要；詳細頁保留完整研究紀錄。原生折疊區提供精確來源識別，實際結果與限制維持可見。以 `node tools/govtech-link-audit.mjs` 執行有界來源路徑／HTTP 檢查（需 Node.js 24 以上）；正式建置後可用 `node tools/verify-govtech-quality.mjs` 檢查螢幕寬度、主題與路由。請見 [v1.8 跨案例檢視](docs/govtech-v1.8-cross-case-quality-review.md) 與 [驗證記錄](docs/govtech-v1.8-hardening-verification.md)。

## 市政案例 v1.9 — 高齡社區照顧

第010案以既有公共資料探索工具為基礎，新增獨立文件查核案例：520筆公告據點列、88筆官方列示尚未布建里別、493筆接受的研究對應，以及可重現的據點／里別追蹤比較。這些母體與舊目錄510筆及C級單位292筆分開，不能合計為實際服務據點數；亦未證實目前營運、居民近用、照顧量能或福利成效。

沿用輕量摘要、四欄案例重點與可展開技術證據，現共有十個案例。來源保全、跨頁合併儲存格、保守身分核對、實際情境／敏感度與隱私排除詳見[來源稽核](./docs/govtech-senior-community-care-source-audit.md)、[中文案例](./docs/govtech-case-study-010.zh-TW.md)及[v1.9驗證](./docs/govtech-v1.9-verification.md)。執行 `node tools/verify-senior-care-evidence.mjs --refresh`（Node24以上）可獨立核對固定版本檔案並重播原始純情境函式；不代表重跑Python擷取或來源完整測試。原始PDF只存於忽略的快取，作品集不在執行時下載。

## 市政案例 v2.0 — 食品衛生證據查核

第 011 案保存官方餐飲資料回應位元組，區分檢體、衛生評核與業者登記，並重現 22,645 筆文件查核候選。673 筆歷史不合格抽驗公告列對應 672 個文件鍵；35 筆名稱／地址候選仍未驗證。僅有不合格公告不能建立全部抽驗分母，也不能判定目前業者安全。

十一個雙語案例沿用四欄摘要與可展開技術證據。詳細頁改為直接載入所選案例，避免首次進入時下載其他研究內容；資料工具仍可使用同步完整目錄。原十案以完整紀錄雜湊及歷史測試資料保護。詳見[中文案例](./docs/govtech-case-study-011.zh-TW.md)、[來源稽核](./docs/govtech-food-hygiene-source-audit.md)及[v2.0 驗證](./docs/govtech-v2.0-verification.md)。`node tools/verify-food-hygiene-evidence.mjs --refresh`（Node 24 以上）下載固定來源版本至忽略快取，核對原始離線建置器、情境函式及精簡驗證資料；不代表重新向政府取得資料或進行食品安全評估。

## GovTech v2.1

GovTech Showcase v2.1新增第十二個雙語案例「臺北市消防通道與狹小巷道救災整備證據查核」。三份官方版本共869筆文件紀錄，層級477／392／0，僅一筆接受關聯；目前淨空與實際救災整備仍不可判定。保留既有探索功能與前十一案。參見[案例012](./docs/govtech-case-study-012.zh-TW.md)、[來源稽核](./docs/govtech-fire-rescue-access-source-audit.md)及[驗證紀錄](./docs/govtech-v2.1-verification.md)。

## Portfolio v2.5 — 最後一個規劃中的市政案例

本集合已完成 **六個政策領域、十三個雙語 GovTech 案例，以及獨立的 Gridline 工程深度案例**。案例 013 完成既定市政案例集合，不新增其他政策或空白未來案例卡片。

既有翡翠水庫水環境專案以同一筆專案紀錄提供案例 003 與 013。案例 003 維持「防災整備與公共安全」的防汛設施文件查核；案例 013 屬於「都市服務與環境」，使用接受的 2023–2026 年官方河川監測版本。768 筆公告日曆列中，720 筆含有效精確或設限觀測，16 筆為當月待發布、32 筆為未來月份占位。720 筆觀測列在完整 27 欄清單下皆為部分量測，不代表每個已採樣指標都無效。

模式 A 有 736 個文件查核候選（A46／B690／C0）。嚴格長期比較為零；另行標示的同名測站受限描述性檢視有 823 個視窗、7,239 個精確指標月份配對，並非獨立樣本或經驗證趨勢。460 列具備四項潛在精確 RPI 輸入，但尚無接受的研究重現 RPI 輸出。模式 C 的因果、法規及公共健康結論維持不可用，不推定污染嚴重度、飲用水安全或目前監測完整性。

詳見[案例 013 中文規格](./docs/govtech-case-study-013.zh-TW.md)、[獨立來源稽核](./docs/govtech-river-water-source-audit.md)及[v2.5 驗證紀錄](./docs/portfolio-v2.5-verification.md)，其中記錄接受版本、原始雜湊、不可變快照、實際選取識別及測試／瀏覽器證據。前十二案技術紀錄與 Gridline 工程證據維持不變。Portfolio 靜態呈現已驗證發現，不在閱讀時擷取官方監測資料或完整政策快照。

## 最終版本維護範圍

既定 GovTech 集合固定為六個政策領域、十三個雙語案例，並保留獨立 Gridline 工程案例與完整專案目錄。後續以安全與依賴維護、失效連結、相容性、重大事實更正及實際招募回饋為主，不新增政策案例。實際檢查及部署界線見 [v2.6 最終稽核](./docs/portfolio-v2.6-final-audit.md) 與 [發布整備報告](./docs/portfolio-v2.6-release-readiness.md)。
