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
npm install
npm run dev
```

## 建置與測試

```bash
npm run validate:harness
npm ci
npm audit
npm run build
npm run test:e2e
```

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

## 每月專案維護

[Monthly Project Maintenance](./.github/workflows/project-maintenance.yml) 於每月 1 日 **台北時間 09:17** 執行，也可在 Actions → Monthly Project Maintenance → Run workflow 手動啟動。推送至預設分支後排程才會生效；請在 Settings → Actions → General 啟用 **Allow GitHub Actions to create and approve pull requests**，不需要額外 API 金鑰。

掃描會比較儲存庫推送時間、正式網址、描述、首頁、預設分支、封存狀態與根目錄 README 雜湊，支援儲存庫轉址及 monorepo 連結，並分頁查詢未收錄的公開儲存庫。首次執行會建立基準並開啟草稿 PR；後續有變更時才建立或更新 PR。現有維護分支會保留人工整理的內容，不強制推送；合併衝突會停止工作供人工處理。

既有根儲存庫專案的核准 Demo 網址可自動提出更新。名稱、改名後的儲存庫連結、中英文描述、新專案與預覽圖仍須在草稿 PR 中核對整理。沒有 GitHub 推送或中繼資料變更的線上畫面變動不會被偵測。整理完成後合併至 `main`，既有 Pages 工作流程會發布更新。

推送前執行 harness、單元測試、TypeScript／建置、E2E 及 diff 檢查。相依套件 audit 結果會附在 PR／工作紀錄供審查，避免安全公告阻擋專案變更報告；發布前仍須處理公告。API 錯誤會使掃描失敗且不寫入不完整基準。報告及 audit 輸出會上傳為 artifacts。GitHub 排程可能延遲，公開儲存庫 60 天無活動時會停用排程，屆時需在 Actions 重新啟用。內建 token 觸發的其他工作流程可能需要核准，因此驗證直接在此工作中執行。

本機可執行 `node tools/scan-project-changes.mjs`，並選擇設定 `GITHUB_TOKEN` 避免公開 API 限流。工具會寫入 `.github/project-scan-state.json`、`.github/project-scan-report.md` 及建議的 Demo 網址，接受基準前請一起審查。

## 文件

- 英文 README：[README.md](./README.md)
- 儲存庫 Agent 規則：[AGENTS.md](./AGENTS.md)
- 功能狀態：[feature_list.json](./feature_list.json)
- 可續接進度紀錄：[progress.md](./progress.md)
- 目前工作階段交接：[session-handoff.md](./session-handoff.md)
- Git Bash／CI 完整驗證入口（`bash init.sh`）：[init.sh](./init.sh)
- 工作流程技能範本：[skill.md](./skill.md)
- 範本使用指南：[wiki.md](./wiki.md)
