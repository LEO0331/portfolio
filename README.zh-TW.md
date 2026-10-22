# LEO0331 工程作品集

[English](./README.md) | **繁體中文**

[![E2E Smoke Tests](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml)
[![Deploy Portfolio to GitHub Pages](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml)
[![Lighthouse Audit](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml)

這是 LEO0331 的正式工程作品集，著重於招募者能快速瀏覽與理解的內容呈現。網站由經過整理的專案資料驅動，支援英文與繁體中文路由，並以靜態網站形式部署至 GitHub Pages。

## 架構與技術棧

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

既有 Tailwind 3 工具鏈透過 npm override 使用 `postcss-selector-parser` **7.1.6**，修復 [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf)，不需遷移至 Tailwind 4。請保留 override，直到上游相依套件本身要求已修補版本；變更時重新產生 lockfile 並執行完整驗證。子程序回歸測試涵蓋惡意平面選擇器的 CPU 耗盡案例。

```bash
npm run validate:harness
npm ci
npm audit
npm run test:unit
npm run build
npm run test:e2e
git diff --check
```

截至2026-10-22，已合併 PR #24 的 Vite 8.3.5 基準仍回報五個既有 Tailwind／braces 鏈 high 套件問題。案例007未變更相依，也不宣稱修復先前 Vite 公告。實際 Git Bash init.sh 通過 harness／安裝後在 npm audit 停止，後續單元／建置／E2E 分別執行，詳 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。功能完成不代表安全稽核無問題。

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

首頁依照 `src/data/github-pins.json` 儲存的公開 GitHub 置頂順序，使用穩定的專案 ID，讓中英文顯示相同專案及順序，儲存庫改名也能保留對應。只顯示已收錄且唯一對應的專案。未收錄項目（包含此作品集）及有多筆對應的 monorepo 會列入報告，不自動補入其他專案或佔位卡片；清空置頂清單時不顯示精選卡片。

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

Crash Map 現以既有 normalizer 設 `govtechCaseIds: ['neihu-congestion', 'bus-service']`，保留事故探索與兩條在地化 drawer 連結；Bin Map 001／005 及首頁置頂順序不變，七案例不需七根專案。獨立稽核用原 source pure functions 驗 pinned manifest、四份 index／reports 及兩份代表 route details，不宣稱重跑上游全套測試、抓全部 416 details 或另做官方 ETL。

案例 006 呈現已合併的 [Crash Map PR #7](https://github.com/LEO0331/taipei-crash-map/pull/7)，合併時間 `2026-10-21T02:12:06Z`，固定 commit [`deb28d5d5b4e608eb04d89743bc3fea632d74c8a`](https://github.com/LEO0331/taipei-crash-map/commit/deb28d5d5b4e608eb04d89743bc3fea632d74c8a)，取代來源文件合併前 pending 狀態。Snapshot `neihu-readiness-49f28aaa55758ffe`、方法 `neihu-traffic-observation-review-v1`、設定 `1.0.0`、生成 `2026-10-21T01:43:13.322Z`。見[案例 006 規格](./docs/govtech-case-study-006.zh-TW.md)、[來源稽核](./docs/govtech-neihu-congestion-source-audit.md)、[v1.5 歷史驗證](./docs/govtech-v1.5-verification.md) 及 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。

保留六份官方檔案、1,710,095 原始 bytes；604 個全市 VD 經七道路名過濾成 58 個研究設備，全部研究地理未驗證，其中 31 個明確單 link、27 個多 link 未解。品質候選 58（27 urgent／31 review／0 ready）；容量 5 選五設備／三道路，容量 10 保留並增加到十設備／五道路。歷史表現兩容量都零合格：2,195 legacy lane 列排除，未納入可比歷史。null 期間／cadence／完整率仍未知。這是 metadata 調查，不是最塞熱點、量測車速趨勢或交通改善成效；品質與表現目標分開，本機 benchmark 也非公網／行動 latency 保證。

**Portfolio GovTech Showcase v1.6** 延伸已隨 [PR #16](https://github.com/LEO0331/portfolio/pull/16) 合併的展示。案例 002 [PR #18](https://github.com/LEO0331/portfolio/pull/18)、案例 003 [PR #19](https://github.com/LEO0331/portfolio/pull/19)、案例 004 [PR #20](https://github.com/LEO0331/portfolio/pull/20)、案例 005 [PR #21](https://github.com/LEO0331/portfolio/pull/21) 及案例 006 [PR #22](https://github.com/LEO0331/portfolio/pull/22) 均已合併，本版以 main `7c7ace1b97a334e0b618b78f7f018dc0c0a150bd` 為基準，已包含 [PR #24](https://github.com/LEO0331/portfolio/pull/24) 的 Vite 8.3.5；本案例不宣稱完成該先前依賴更新。

個人[市政資料治理與決策支援系統](https://leo0331.github.io/portfolio/zh/govtech) 依序呈現七個已完成工程 POC：[001 — 臺北市清潔箱配置決策支援](https://leo0331.github.io/portfolio/zh/govtech/bin-policy) 展示空間配置及政策加權參考涵蓋；[002 — 臺北市 1999 民生通報與環境治理決策支援](https://leo0331.github.io/portfolio/zh/govtech/civic-1999) 展示歷史派工與調查查核；[003 — 豪雨防汛整備與設施查核決策支援](https://leo0331.github.io/portfolio/zh/govtech/heavy-rain-preparedness) 展示設施證據缺口及 GIS 驗證；[004 — 臺北市老舊建築與都市更新決策支援](https://leo0331.github.io/portfolio/zh/govtech/urban-renewal) 展示行政核對及法律階段語義；[005 — 樹蔭公平與都市熱環境整備決策支援](https://leo0331.github.io/portfolio/zh/govtech/shade-equity) 已完成 GIS 盤點及證據就緒原型，排序現勘能力仍受資格閘門限制；[006 — 內湖交通壅塞與觀測資料就緒度決策支援](https://leo0331.github.io/portfolio/zh/govtech/neihu-congestion) 完成設備／來源品質查核，歷史壅塞排名仍待合格觀測；[007 — 臺北市公車路網與服務涵蓋決策支援](https://leo0331.github.io/portfolio/zh/govtech/bus-service) 完成路網／公告文件查核，方向服務比較與歷史實際表現仍不可用。這些是個人工程 POC，不由臺北市政府營運或背書，未進行官方營運整備認證。

案例 005 呈現已合併的 [Bin Map PR #19](https://github.com/LEO0331/taipei-bin-map/pull/19)，合併時間 `2026-10-20T07:14:40Z`，固定 commit [`612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9`](https://github.com/LEO0331/taipei-bin-map/commit/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9)；此 metadata 取代舊來源交接「無法建立 PR」的歷史狀態。Source snapshot `shade-source-v1-078b91443dc33e45` 與 derived snapshot `shade-equity-v1-8e4cfb4029d0831d` 為不同識別；方法 `shade-equity-evidence-review-v1`、設定 `1.0.0`、凍結生成 `2026-10-20T00:41:41.554Z`。見[案例 005 規格](./docs/govtech-case-study-005.zh-TW.md)、[來源稽核](./docs/govtech-shade-equity-source-audit.md)、[v1.4 歷史驗證](./docs/govtech-v1.4-verification.md)、[v1.5 歷史驗證](./docs/govtech-v1.5-verification.md) 及 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。

真實 GIS 納入 89,860 筆樹木觀測、14,896 個人行道單元及 50,730 個樹穴。2 公尺下樹木匹配／未匹配／歧義為 45,559／44,274／27，樹穴為 46,109／480／4,141；但**合格排序候選為零**，因 `SW_LENG_ItemValue` 測量語義未驗證，正規化密度及現勘排序仍不可用。容量 5／10 或行政區均衡不能修復閘門；零合格不是零需求。0／2／5 公尺比較改變關聯證據範圍，不是樹蔭、樹冠或降溫改善。完整轉換 15.5–16.1 秒與額外 join 約 2 秒為上游離線記錄，非瀏覽器延遲；13,723 bytes 只計 metadata，非整頁流量。不宣稱量測 canopy、行人熱暴露或可種性。

案例 001 與 005 共用唯一 `taipei-bin-map` 根專案，Drawer 以在地化案例 records 提供兩條連結，不能用不同 project ID 數量取代案例數。`govtechCaseIds` 新陣列有定義時優先（含空陣列）、去重／驗證所屬 project，未定義才回退舊單值；外部 URL 及首頁 GitHub 置頂順序保留。

案例 004 呈現已合併的[不動產來源 PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5)，固定 commit 為 [`e3f37ff91816b4d51223ab686097a6cef542ca31`](https://github.com/LEO0331/taipei-real-estate-dashboard/commit/e3f37ff91816b4d51223ab686097a6cef542ca31)、快照 `ure-c81e4ef44e6c9868`、方法 `urban-renewal-evidence-review-v1`、設定 `1.0.0`、分析日 2026-10-19。已完成行政證據查核模組；原有房市及住宅資料仍保留探索定位。見[案例 004 規格](./docs/govtech-case-study-004.zh-TW.md)、[來源稽核](./docs/govtech-urban-renewal-source-audit.md)、[v1.3 歷史驗證](./docs/govtech-v1.3-verification.md)、[v1.4 歷史驗證](./docs/govtech-v1.4-verification.md)、[v1.5 歷史驗證](./docs/govtech-v1.5-verification.md) 及 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。

實際母體為 11 個 A 級行政區問題：容量 5 選中正、大同、中山、松山、大安；容量 10 再加萬華、士林、北投、內湖、南港，文山因容量未選；不限則全選 11。每區一題且主要資格相同，因此缺口優先、區別均衡、來源核對結果及順序相同。選入問題共涉及兩個不同面向、一種已驗證來源，不把各候選面向相加。信義缺列是涵蓋未知而非零案件。全市建物存量、使照流量、獎勵單位及法律階段不混合；858 天是資源版本年齡，不是案件停滯。老屋不等於危樓，劃定核准不等於更新完成，未建立安全、法律資格或投資推薦。

案例 003 呈現已合併的 [Feitsui PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5)，固定來源為 [`195e63111d32ad564291545ff9d8b230b025b055`](https://github.com/LEO0331/taipei-feitsui-water-map/commit/195e63111d32ad564291545ff9d8b230b025b055)、快照 `sha256-d67edc57254ee273`、方法 `heavy-rain-preparedness-review-v1`、設定 `1.0.0`，來源查核日 2026-10-19。水質／生態等模組仍為探索功能，已完成的豪雨整備模組提供此專案的決策支援 POC 能力。

相同嚴格證據範圍與容量 5 下，缺口優先選入 2 區、5 個 A 候選及 12 個候選層級問題；地理均衡選入 5 區、2 A／3 B 及 15 個問題。兩者皆選北投／士林機具候選。來源共通問題可跨候選重複，不代表淹水風險、防護效果或政策績效。嚴格模式不採計帶限制的歷史來源；695 筆為轉換納入觀測數，並非嚴格情境貢獻。因缺少已驗證排水服務關係而採行政區 × 類別查核；官方參考地理部分涵蓋、歷史日期矛盾及沉砂池面積單位仍是限制。本案例不是警報或預報，不確立排水能力、機具目前可用性、實際整備或防淹保障。

保留 v1.2 文件：[案例 003 規格](./docs/govtech-case-study-003.zh-TW.md)、[豪雨固定來源稽核](./docs/govtech-heavy-rain-source-audit.md) 及 [Portfolio v1.2 驗證](./docs/govtech-v1.2-verification.md)。[上游驗證紀錄](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/verification.md) 為另行引用的既有結果，不宣稱本次 Portfolio 完整重跑上游應用。

Showcase v1.1 新增 [案例 002 規格](./docs/govtech-case-study-002.zh-TW.md)、[1999 固定來源稽核](./docs/govtech-civic-1999-source-audit.md) 及 [v1.1 驗證](./docs/govtech-v1.1-verification.md)。來源固定為 352dbebe0057f62817e4ee08572e1a4d207a5b5a；作品集呈現凍結彙總情境，不即時請求民生資料。

v1.0–v1.5 歷史驗證報告保持不變；[v1.0 規格](./docs/govtech-case-study-v1.0.zh-TW.md)及[清潔箱來源查核](./docs/govtech-source-audit.md) 保留歷史證據並明示目前狀態補充。參閱[新增案例 008 模板](./docs/govtech-case-study-template.md)：先核對固定來源與能力，引用既有 project ID（可為已被其他案例使用的 project）、補齊雙語資料／路由／metadata，再驗證刷新、語言／base、多案例連結、限制及行動版。保留既有 baseline fixtures 與首頁精選順序，以實際結果更新 feature ledger／交接；一般專案同步及人工策展維持不變。

新頁沿用 SEO hook 與靜態入口產生器，包含各頁標題／描述、Open Graph 與 sitemap。同步提供[英文首頁](https://leo0331.github.io/portfolio/govtech)、[清潔箱案例](https://leo0331.github.io/portfolio/govtech/bin-policy)、[1999 案例](https://leo0331.github.io/portfolio/govtech/civic-1999)、[豪雨案例](https://leo0331.github.io/portfolio/govtech/heavy-rain-preparedness)、[都市更新案例](https://leo0331.github.io/portfolio/govtech/urban-renewal)、[樹蔭案例](https://leo0331.github.io/portfolio/govtech/shade-equity)、[內湖案例](https://leo0331.github.io/portfolio/govtech/neihu-congestion) 及[公車案例](https://leo0331.github.io/portfolio/govtech/bus-service)。

Policy #5 已完成為案例 007 的路網／公告文件查核，歷史實際表現仍受證據閘門限制。下一題可建議既有規劃 **公共 Wi-Fi 服務配置**先做來源可行性稽核，並非新核准實作。原路線圖保留鼠患專項及 `taipei-safety-map` 擴充；交通模組維持 `taipei-crash-map`，內湖歷史壅塞比較仍受閘門限制。Bin Map v1.3 政府作業流程無限期延後。

E2E 會自動建置並啟動 production preview，在正式 CSP 下檢查響應式樣式與深層靜態入口；請保留 4175 port。結果與截圖見 [v1.0 歷史紀錄](./docs/govtech-verification.md)、[v1.1 歷史紀錄](./docs/govtech-v1.1-verification.md)、[v1.2 歷史驗證](./docs/govtech-v1.2-verification.md)、[v1.3 歷史驗證](./docs/govtech-v1.3-verification.md)、[v1.4 歷史驗證](./docs/govtech-v1.4-verification.md)、[v1.5 歷史驗證](./docs/govtech-v1.5-verification.md) 及 [v1.6 驗證](./docs/govtech-v1.6-verification.md)。
