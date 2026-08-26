# LEO0331 工程作品集

[English](./README.md) | **繁體中文**

[![E2E Smoke Tests](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml)
[![Deploy Portfolio to GitHub Pages](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml)
[![Lighthouse Audit](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml)

這是 LEO0331 的正式工程作品集，著重於招募者能快速瀏覽與理解的內容呈現。網站由經過整理的專案資料驅動，支援英文與繁體中文路由，並以靜態網站形式部署至 GitHub Pages。

## 架構與技術棧

- React 18 與 TypeScript
- React Router 7，搭配適用於 GitHub Pages 的 `HashRouter`
- Vite 8 與 Tailwind CSS
- Playwright E2E 測試與功能覆蓋率門檻
- GitHub Actions 自動執行建置、Lighthouse、E2E 與 Pages 部署

## 為什麼採用此結構

- 方便招募者快速掃讀：清楚的區塊、聚焦的專案卡片，以及直接的 Demo／原始碼連結
- 資料驅動內容：在資料檔更新作品集資訊，不需修改 JSX
- 雙語就緒：支援英文與繁體中文介面及專案內容
- 靜態部署：以 `HashRouter` 最佳化 GitHub Pages 相容性
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

1. 執行 `npm run sync:projects` 預覽 GitHub 中繼資料變更。在使用 `npm run sync:projects -- --write` 前，先檢查 dry-run 輸出。
2. 在 `src/data/projects.ts` 整理正式專案資料；不要保留自動產生的佔位文字。
3. 需要繁體中文內容時，在 `src/data/projects.zh.ts` 新增或更新翻譯。沒有對應資料時，系統會回退至標準英文專案資料。
4. 將線上 Demo 預覽存放於 `src/assets/images/projects/<id>.png`（或 `.webp`），並目視確認資料量較大的頁面已完成載入。
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

## 文件

- 英文 README：[README.md](./README.md)
- 儲存庫 Agent 規則：[AGENTS.md](./AGENTS.md)
- 功能狀態：[feature_list.json](./feature_list.json)
- 可續接進度紀錄：[progress.md](./progress.md)
- 目前工作階段交接：[session-handoff.md](./session-handoff.md)
- Git Bash／CI 完整驗證入口：[init.sh](./init.sh)
- 工作流程技能範本：[skill.md](./skill.md)
- 範本使用指南：[wiki.md](./wiki.md)
