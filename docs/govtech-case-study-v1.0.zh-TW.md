# GovTech Case Study & Decision Support Showcase v1.0

> 目前狀態（2026-10-20）：Showcase v1.5 已有六個案例，包含排序受測量定義限制的樹蔭 GIS 證據整備，以及歷史交通表現仍受觀測資格限制的交通資料就緒度 POC；[案例004都市更新](./govtech-case-study-004.zh-TW.md) 已完成行政證據查核展示，[案例005樹蔭公平](./govtech-case-study-005.zh-TW.md) 已完成 GIS 盤點，但未發布實測遮蔭或排序植樹候選。[目前案例模板](./govtech-case-study-template.md) 維護新增流程。下列 v1.0 範圍、來源表與路線圖保留當時脈絡，不代表後續模組仍未完成；不新增政府營運或建物安全認證主張。

狀態：已於 2026-10-16 透過 [PR #16](https://github.com/LEO0331/portfolio/pull/16) 合併至 main；實作驗證與文件複查見 [驗證報告](./govtech-verification.md)。

v1.1 更新（2026-10-19）：目前已加入第二個完整案例 [1999 民生通報與環境治理](./govtech-case-study-002.zh-TW.md)。本文件保留案例 001 的原始來源、方法與數據；v1.0 啟用時僅一例的描述屬歷史範圍。新增兩條路由 `/govtech/civic-1999` 與 `/zh/govtech/civic-1999`，現有完整案例共兩個，詳見 [v1.1 驗證](./govtech-v1.1-verification.md)。

## 1. 專案目標與定位

本功能是個人 GovTech 作品集與 POC 展示，不是政府正式專案、委託案、合作關係或核可系統。核心主張：「我不只是將政府開放資料視覺化，而是將公共政策問題轉化為可分析、可比較、可追溯、可驗證的決策支援原型。」

第一個已完成的決策支援 POC 是 taipei-bin-map #2 清潔箱配置；v1.0、v1.1、v1.2 已合併。展示不需要額外正式營運驗收。v1.3 政府作業流程無限期延後，不屬於本功能。本次只修改 portfolio，不新增後端、資料庫、其他 repository 或政策演算法。

## 2. 現有 Repository 與政策議題對應

透過既有穩定 project ID 連結，不複製整份專案目錄。以下能力來自 2026-10-16 查閱的各 repository README；逐一固定版本連結見 [來源查核](./govtech-source-audit.md)。公開部署狀態與政策成熟度分開。

| Repository／既有 ID | 目前能力 | 規劃方向／界線 |
| --- | --- | --- |
| taipei-bin-map | 公共設施探索與 #2 清潔箱配置決策 POC | #1 已完成樹蔭 GIS 證據整備；排序現勘仍受長度測量定義限制，詳 Case005 |
| taipei-1999-map | 既有去識別化探索及 v1.1 已展示的一般民生決策支援 POC | 歷史派工調查優先順序已完成；鼠患專項仍為未來且取決於適切證據 |
| taipei-friendly-food-map | 友善商家、補水、商業與市場來源探索 | 支援商業／飲食環境脈絡，不保證營業現況 |
| taipei-feitsui-water-map | 水質、水庫、水文及防災設備資料 | #7 水與災害準備情境尚未實作，非即時預警 |
| taipei-safety-map | 緊急資源目錄與歷史公共安全資料 | 支援探索，非派遣或綜合安全分數 |
| taipei-real-estate-dashboard | 房價、租金、土地、建照、人口脈絡 | #6 老屋／都市更新決策尚未實作 |
| taipei-crash-map | 歷史事故、路口熱點、因素圖表 | #4 交通觀測就緒度已完成 Case006，歷史壅塞仍受證據限制；#5 公車服務維持同 repo 規劃，不新增 repo |
| taipei-free-wifi-map | 熱點、附近與來源篩選 | 數位包容配置仍為未來案例，非即時連線品質 |
| taipei-civic-groups-map | 雙語目錄、來源日期、CSV、資料信任提示 | 公共資源規劃與可重用資料治理參考 |
| publicsafetydashboard | PDF 擷取、篩選、CSV、解析複核 | 文件工程與人工複核治理參考，非個人風險評分 |
| Gridline／robotfriends | 版本化觀察、來源追溯及受限情境假設 | 僅架構設計參考，不是政府系統 |

政策領域為都市服務與環境、公民服務與公共衛生、交通與移動、住宅與都市韌性、防災與公共安全、數位包容與資料治理。

## 3. Decision Support 與 Data Explorer 的區別

`public-data-explorer` 呈現資料、查詢、篩選與描述性統計；不因此具備政策評估能力。`decision-support-poc` 將政策問題、明確假設、可重現方法與候選解釋連結起來，仍需現地查核。`planned-decision-support` 明確表示尚未實作的延伸。`Project.status = live` 僅表示部署狀態，不等於政策成熟度或政府認證。

## 4. Portfolio 資訊架構與雙語路由

| 路由 | 頁面 |
| --- | --- |
| /govtech | GovTech & Civic Decision Systems |
| /zh/govtech | 市政資料治理與決策支援系統 |
| /govtech/bin-policy | Public Bin Allocation Decision Support |
| /zh/govtech/bin-policy | 臺北市清潔箱配置決策支援 |

沿用 React Router、LocaleProvider、Section、Tailwind 與 usePageSeo。routeConfig.json 是靜態入口與 sitemap 的路由清單；新路由亦提供靜態 title／description／Open Graph／Twitter 及語言資訊。Link 經 toLocalePath 與 Router basename 處理 Vite base，不硬編碼部署網址。未知案例沿用 404。Navbar、首頁 CTA、Bin Map 抽屜提供入口，GitHub pins 資料與排序邏輯不變。

## 5. Case Study 001：清潔箱配置決策

v1.0 啟用時僅有一筆完整案例；v1.1 已加入案例 002，現有共兩筆。公共設施「存在」與活動「參考點」可協助辨識潛在服務缺口，不能直接證明設置可行性或政策效果。有限預算下的候選位置是供規劃人員、工程／資料團隊與現地勘查討論的材料，不是自動設置批准。

案例分為政策問題、演進、架構、資料治理、方法、情境比較、工程挑戰、證據、限制、能力展示十部分。保留原本公共設施查找、附近排序與匯出能力；以型別化 govtechCaseId 導向站內案例，原本外部 caseStudyUrl 行為保留。

## 6. v1.0、v1.1、v1.2 實際成果與工程證據

- [v1.0 PR #11](https://github.com/LEO0331/taipei-bin-map/pull/11)：空間覆蓋、貪婪配置、半徑／預算情境、現地候選、JSON／CSV。
- [v1.1 PR #14](https://github.com/LEO0331/taipei-bin-map/pull/14)：來源對帳、資料品質、新舊公車來源比較、監測與審查後發布分離。
- [v1.2 PR #15](https://github.com/LEO0331/taipei-bin-map/pull/15)：版本化權重、類別平衡、可調假設、敏感度、候選證據與原模式並存。

所有查核以 main 的 `1280011b086f498404abf138c29f64041963e14c` 固定版本為準。來源 audit 記載 308 測試／23 檔、142 桌面與行動 Playwright 通過、4 production-preview 快取／離線通過；這是上游紀錄，本次未獨立重跑上游測試。來源與方法、實作檔、報表及上游研究介面截圖連結見 [來源查核](./govtech-source-audit.md)。作品集採文字證據呈現，未製造儀表板圖片。

## 7. 資料治理與決策方法

流程：官方開放資料 → Node.js ETL → Schema／GIS／品質驗證 → 版本化 JSON 快照 → 決策演算法 → React／Leaflet → 情境比較／簡報匯出。這條清潔箱流程沒有新增線上後端服務或資料庫。來源監測只回報異動／失敗；資料發布需針對確切 hash 複核，另開分支／PR，不自動合併。

來源身分、取得時間、公開更新時間（未知即標未知）、SHA256、資料版本與方法版本分別記錄。無效／缺漏座標排除並留痕；坐標系不能僅相信 metadata：公車 SHP 實際為經緯度，MRT GeoJSON 需 EPSG:3826 轉換。固定快照、穩定 ID 同分排序與可測試純函式支援重現。

1,197 是舊 pedestrian-bins.json 的歷史資料列（原來源日期未知，轉換記錄為 2026-06-11）；679 是較新主 CSV 681 列排除 1 筆無效經度與 1 個重複座標後接受的座標位置（來源資源日期 2026-09-30）。兩者單位／涵蓋範圍不同，不是實體箱數盤點，不可把差值描述成移除箱數。

Mode A：`greedy-equal-reference-coverage-v1`，以新增等權運輸參考覆蓋貪婪選擇，不保證全域最優。距離採含邊界的 Haversine 直線距離，不是步行路網。

Mode B：`policy-balanced-coverage-v1`，每一步使用概念式：

`gain(c) = Σ_k [w_k × newlyCovered(k,c) / N_k]`

N_k 是選定區域該類別固定有效母體，包含原本已覆蓋的參考點。已覆蓋 ID 不再計入後續新增收益；N_k=0 類別標示不可用且不分攤其權重。類別正規化避免數千公車點僅因筆數多而主導排序。候選錨點與受評分 POI 分開，預設候選來源為公車／MRT。選定區域外既有箱仍可能覆蓋區內參考點。

## 8. 政策權重與敏感度分析

預設假設：觀光 4、攤販／夜市相關參考地點 4、傳統市場 3、商圈 3、MRT 2、公車 1。它們是分析假設，不是政府正式係數。可用固定母體為攤販 42、市場 47、MRT 73、公車 3,395；觀光及商圈不可用。攤販不全等於夜市，MRT 為站中心而非出入口，公車非人流。

[已提交範例報告](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/reports/bin-policy-v1.2/example-analysis.json)：全市、半徑 300m、新增上限 10、與既有箱最小距離 0m、無單價／預算約束。相同 679 既有座標、3,557 參考實體、3,468 候選錨點，原覆蓋 1,211。等類別與預設政策權重皆新增 125（總覆蓋 1,336），bus-1210 由第 7 變第 3；分數尺度不同，不比較政策效果。

11 個敏感度情境涵蓋等權、預設、啟用權重，以及四個可用類別各別 ±25%。此固定範例均新增 125；bus-1210 排名 3–7、11/11 被選。這只是該範例的假設反應，不是普遍穩健性或政策成效證明。作品集讀取已提交報告，沒有即時計算或獨立重跑上游引擎。另於隔離的固定版本 checkout 執行 `npm ci` 與 `npm run data:example:policy-priority` 可重現。

## 9. 已知資料限制與未完成項目

- 原公車基準是 2021 年舊資料；較新 StopLocation 僅凍結比較，未自動採用。
- 觀光 API 取得時 HTTP 403；商圈無足夠驗證的空間幾何，皆不參與評分。
- v1.2 研究快照 `priority-v1-113edf6ed5e09ada` 保持 `review_required`；基準 `v1-14c24bcdbade` 的資料接受不等於政府核准。
- 參考覆蓋不測量垃圾量、人流、減少亂丟或政策效果。
- 位置須現地確認設施、使用權、通行寬度、障礙、社區影響與清運能力，不是政府背書的設置決策。
- 顯示部署連結不保證即時可用。其他政策模組僅依實際能力呈現。v1.3 無限期延後。

## 10. 共用案例模板與資料契約

`src/types/govtechCase.ts` 定義穩定 ID、slug、政策領域、來源 repo、既有 project ID、成熟度、政策問題、使用者、已實作能力、方法、情境、工程亮點、限制、證據、資產與未來延伸。`src/data/govtechCases.ts` 與 `.zh.ts` 分離展示文案與 JSX。領域與目錄引用既有 project ID，不複製全目錄；只在有足夠完整證據時新增完整案例。

新增下一案例：先用 [文件模板](./govtech-case-study-template.md) 固定來源與界線；核對既有 project ID；補中英文型別化資料與證據；新增路由、AppRouter 頁面映射與靜態 metadata；v1.1 共用案例頁以路由傳入的 slug 查詢資料，新增案例時只須新增資料與路由映射；更新 drawer 關係及執行期檢查（有需要才擴充型別）；測試兩語直接載入／刷新／切換、base path、sitemap、限制與行動版；更新 feature_list、progress、handoff。一般專案同步與人工策展流程維持不變。

## 11. 後續市政 Dashboard Roadmap

這是規劃順序，不是本次實作要求；不要求全部完成才能發布 Portfolio v1.0。

1. taipei-bin-map #2：已完成清潔箱決策 POC。
2. portfolio：本次 GovTech 展示。
3. taipei-1999-map #3：一般民生通報與環境治理調查優先順序 POC 已完成，於 Showcase v1.1 展示；鼠患專項維持未來方向。
4. taipei-feitsui-water-map #7：水與災害準備。
5. taipei-real-estate-dashboard #6：老屋與都市更新。
6. taipei-bin-map #1：樹蔭 GIS 盤點與證據整備已完成為 Case005；排序現勘與植樹可行性須另有驗證，同一 repo。
7. taipei-crash-map #4：觀測資料就緒度已完成為 Case006；歷史壅塞表現仍待可比較觀測。
8. taipei-crash-map #5：大眾運輸／公車，同一 repo，無需新增 repository。
9. taipei-free-wifi-map：數位包容。
10. taipei-civic-groups-map：公共資源與資料治理。
11. publicsafetydashboard：文件擷取與人工複核。

支援整合：taipei-friendly-food-map、taipei-safety-map；Gridline 僅供版本與情境模式參考。

## 12. 測試、驗收與維護方式

執行 `npm run validate:harness`、`npm ci`、`npm audit`、`npm run test:unit`、`npm run build`、`npm run test:e2e`、`git diff --check`。沒有 lint script；TypeScript 靜態檢查由 build 執行。實際次數、結果、限制與截圖見 [progress.md](../progress.md) 與 [session-handoff.md](../session-handoff.md)，不可將上游測試冒充作品集測試。

驗收涵蓋四條路由、深層刷新與 locale 保留、Navbar／首頁／drawer 入口、來源 PR／限制、行動版鍵盤與無水平溢出、暗色可讀性、既有 filters／pin order、sitemap／canonical／靜態 metadata；根路徑與 /portfolio/ 基底皆須可產生有效入口。來源證據變更時固定新 commit，逐筆檢查數據定義、研究狀態與假設，不透過同步自動覆寫策展內容。

E2E 會自動建置並啟動 production preview，保留正式 CSP；4175 port 須空閒，首次執行先安裝 Chromium。目視檢查請使用 `npm run build` 與 `npm run preview`，因既有 CSP 會阻擋開發伺服器注入的樣式。`bash init.sh` 採失敗即停止，目前會因已記錄的五項 high audit 問題中止；不能把分別通過的測試稱為完整 script 通過。

已知安全風險獨立記錄，不隱藏 audit。原交付為可審查的 draft PR；PR #16 現已合併。後續變更仍透過 PR 審查，不由 agent 自動合併。
