import type { GovTechCase } from "../types/govtechCase";

export const wifiAllocationCaseZh: GovTechCase = {
  "id": "wifi-allocation",
  "slug": "wifi-allocation",
  "displayNumber": "008",
  "projectId": "taipei-free-wifi-map",
  "policyDomain": "數位近用與資料治理",
  "sourceRepository": "https://github.com/LEO0331/taipei-free-wifi-map",
  "sourceVersion": "8e01a2bd8d762b51fae979d32fd477e378d1876b",
  "snapshotVersion": "wifi-geo-da9f69f501af4d6e1d3f9122",
  "title": "臺北市公共 Wi-Fi 資源配置與數位近用決策支援",
  "summary": "從官方名冊對帳到可追溯查核情境、座標證據驗證與具有明確限制的實驗幾何研究。",
  "maturity": "decision-support-poc",
  "maturityLabel": "已完成證據查核與實驗 GIS 研究 POC",
  "reviewNote": "模式 B 沒有非自身增益，最佳化不可用；模式 C 仍欠缺實際服務與數位近用證據。",
  "intendedUsers": "市政資料管理者、公民科技工程師與公共設施研究者。",
  "implementedCapabilities": [
    "來源擷取與版本對帳",
    "確定性查核分級與名額情境",
    "官方界線轉換與點位歸屬",
    "設施座標假設測試",
    "實驗近鄰、自身貢獻防護與可追溯匯出"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "政策問題與決策範圍",
      "paragraphs": [
        "當查核名額有限，且公開 Wi-Fi 點位不能證明實際服務時，市府團隊應先調查哪些來源紀錄？本案先揭露證據、假設與入選身分，再比較情境，避免以點位數量替代政策問題。",
        "公開設施、實驗性幾何近鄰、實際服務可及性及實測數位近用是四個不同問題。使用對象為市政資料管理者、公民科技工程師及公共設施研究者；任何模式都不授權設備設置。"
      ]
    },
    {
      "id": "evolution",
      "title": "從熱點探索工具演進為證據感知決策支援",
      "paragraphs": [
        "既有雙語探索工具保留 3,297 筆紀錄、群聚地圖、附近搜尋、篩選及目錄。Policy #8 v1.0 另建來源擷取、版本對帳、版本綁定身分及有限名額的模式 A 證據查核，不會暗中遷移探索工具的資料版本。",
        "Policy #8 v1.1 在同一專案加入官方界線轉換、設施座標證據分類及模式 B 實驗研究。本單一 Case 008 整合兩階段；PR #4、語系 PR #5 與地理 PR #6 均已合併，後者於 2026-10-22 合併。上游交付文件中仍稱 PR 未合併的內容屬歷史紀錄。"
      ]
    },
    {
      "id": "sources",
      "title": "官方來源、版本與追溯",
      "paragraphs": [
        "保留官方來源為 A：現行 Wi-Fi CSV（2026-07-01）；B：圖書館 CSV（2026-06-10）；C：社區活動中心 ODS（2025-12-18）；D：運動中心 CSV（2026-03-02）；E：行政區 SHP 壓縮檔（2024-09-16）。B／C／D 原始筆數為 70／9／12，解讀匯出資料時不可交換 C 與 D。",
        "有限範圍的離線擷取將原始位元組、目錄／指引證據與 SHA-256 分別保存，再產生 JSON。發布日、取得日、Git commit、來源雜湊與快照 ID 是不同識別。保留版本不是即時市政名冊，重建也不會更新來源日期。",
        "舊版原始名冊 SHA-256 為 c230610998a33309677fa235ec11b05d047bf3c9379dc6a7683ff3645a422c15；檔名 1141218 不是權威發布日期，原始取得及發布時間未知。"
      ]
    },
    {
      "id": "reconciliation",
      "title": "v1.0 名冊對帳與正規化",
      "paragraphs": [
        "舊版 3,297 與現版 3,305 筆來源紀錄，共有 3,286 組完全相同識別對、19 組僅現版及 11 組僅舊版。來源標示臺北市的筆數為 3,285 與 3,293，現版另有 12 筆標為市外。淨增八筆是發布名冊差異，不是新增八座實體基地台。",
        "座標文字差異為 596 組，正規化後真正數值不同只有 33 組；另有 1 組類別變更、75 組其他中繼資料變更，現版模糊配對為 0。變更類型可能重疊；格式差異不等於搬遷，數值不同也應查核而非直接認定實體移動。"
      ]
    },
    {
      "id": "mode-a",
      "title": "模式 A 身分、資格與查核分級",
      "paragraphs": [
        "3,316 個來源查核候選以來源版本雜湊、SITE_ID、HOTSPOT_ID、標準紀錄雜湊及重複次序尾碼建立身分。A 級 63 個為主要身分／證據調查，B 級 57 個為文件調查，C 級 3,196 個為例行文件追蹤；不是網路效能或居民受害評分。",
        "嚴格／僅現版規則納入 3,293、排除 23。證據缺口優先依分級確定性排序；設施類別均衡查核交錯不同來源類別。5／10／全部是查核名額，不是設備數。固定版本 JSON／CSV 保留原始欄位與完整版本綁定 ID。"
      ],
      "content": "methodology"
    },
    {
      "id": "mode-a-scenarios",
      "title": "模式 A 名額與來源範圍敏感度",
      "paragraphs": [
        "名額 5 時，缺口／均衡各代表 3／5 類、2／3 個來源標示行政區，共有 1 個 ID；名額 10 時為 3／10 類、2／6 區，共有 2 個 ID。全部名額兩者均為 3,293 個成員、13 類；行政欄位分組不能證明地理公平。",
        "嚴格僅現版、較寬僅現版、嚴格含舊版及較寬含舊版分別納入 3,293／3,305／3,304／3,316。缺口優先前五個站點縮寫均為 TPEE002338、TPEE002354、TPEE002595、TPEE002596、TPEE002597；穩定性只適用本版本與已測設定。"
      ]
    },
    {
      "id": "geometry",
      "title": "官方界線轉換與 GIS 驗證",
      "paragraphs": [
        "保留 ZIP 具有同檔幹的 SHP／SHX／DBF／PRJ／CPG。PRJ 的 TWD_1997_TM_Taiwan 符合 EPSG:3826（GRS80、中央經線 121°、尺度 0.9999、東向假位移 250,000 公尺）。pyproj 3.7.2／PROJ 9.5.1 使用 always_xy=True、allow_ballpark=False，輸出 EPSG:4326 經度／緯度，保留多重多邊形及內環。",
        "12 區均通過元件／索引／屬性、有限座標、閉環、拓樸、軸序及往返檢查，未修復或排除行政區。最大往返誤差 0.000074 公尺；保留 11 組原始重疊，最大 0.407474 平方公尺，低於明訂 1 平方公尺准入容差。[250000,0] → [121,0] 是投影定義控制，不是設施實測控制點；約 1 公尺的轉換操作精度不能證明原始點位精度。"
      ]
    },
    {
      "id": "spatial",
      "title": "點位多邊形歸屬與邊界不確定性",
      "paragraphs": [
        "歸屬判定使用原投影多邊形。0.001 公尺的共邊數值容差與 10／25／50 公尺研究旗標分開。距界線超過 10 公尺且唯一命中為內部，較近者為鄰界；外部、多重命中及無效各自保留。嚴格 H 排除鄰界，旗標 H 納入合格的唯一命中並保留警示。",
        "A 有 3,234 筆內部、59 筆鄰界、12 筆外部，64 筆來源／多邊形行政區不同，200 組重複座標，SITE_ID 無重複。嚴格邊界篩選前有 3,229 筆合格。重複座標只有相同距離效果，不能證明額外設備。91 筆設施雖在假設下均位於區內，仍有四筆不符行政／身分證據契約。"
      ]
    },
    {
      "id": "coordinates",
      "title": "設施座標契約與證據層級",
      "paragraphs": [
        "「已驗證」須具權威 CRS 證據、有效轉換、合格身分及幾何；本版沒有設施達標。「假設經測試」在明示假設與行政區一致下納入 B69／C9／D9；「尚未釐清」B1／D3 保留但不進模型。未建立獨立實測數值位置控制或權威設施基準宣告。",
        "B／D 的「經度／緯度」假設為 EPSG:4326，行政區從發布地址解析，不是獨立行政欄位。C 的「座標X／座標Y」假設為 EPSG:3826 後轉換；九筆均符合行政區。替代 EPSG:3825 轉至臺北市外，EPSG:3828 在固定離線環境無可接受的非概略操作。這是測試假設，不能證明發布者原意。"
      ]
    },
    {
      "id": "identity",
      "title": "設施身分、排除與准入限制",
      "paragraphs": [
        "身分鍵結合來源 ID、版本 SHA 前綴與名稱／地址複合值 SHA-256。C 的「編號」保留為列標籤，不升格為穩定發布者身分。未發現複合鍵重複、衝突座標、同址、跨來源同址、發布列衝突或設施重複座標；未建立模糊配對、跨期或實體設施唯一性。",
        "士林分館發布地址缺少明確行政區字樣；中山、南港、中正運動中心在假設座標下分別落於大同、信義、大安，與來源地址矛盾。四筆均排除，不暗中改正座標。保留圖書館名冊仍列已閉館設施，也說明准入不等於目前營運。"
      ]
    },
    {
      "id": "model",
      "title": "模式 B 候選粒度與幾何近鄰",
      "paragraphs": [
        "H 是合格的發布熱點座標參考集合；合併假設群體的 R 與 C 均為相同的 87 個設施紀錄複合身分。紀錄、不同座標、參考身分、假設查核候選與實際基地台是不同單位。僅已驗證模式 R=C=0，91 筆受查設施全部排除。",
        "離線 Haversine 採平均地球半徑 6,371,008.8 公尺，含端點的 100／250／500 公尺為研究門檻。預先計算最近 H 與設施鄰接，React 僅篩選小型清單。基準是 min distance(R,H) ≤ 半徑，新增參考點排除基準及先前計入者，每個只算一次；這些距離都不是無線訊號範圍。"
      ]
    },
    {
      "id": "self-count",
      "title": "自身參考防護與負面研究結果",
      "paragraphs": [
        "引擎分開候選自身零距離貢獻、其他新增參考點及總邊際關聯。僅自身、鄰接完全相同或全體已近鄰時停用最佳化。本版所有門檻的非自身新增關聯均為 0，optimizationAvailable 為 false。",
        "100／250／500 公尺下，87 個參考點的基準為 69／85／87。5 與 10 名額清單新增皆 0；全部名額為 18／2／0，而且全是必然的自身貢獻。這是描述性幾何記帳，不是配置改善。本群體未產生有效的非平凡地理最佳化排序。"
      ]
    },
    {
      "id": "mode-b-scenarios",
      "title": "模式 A 與實驗模式 B 的實際情境表",
      "paragraphs": [
        "邊際參考近鄰策略逐步重算未計入鄰接；最佳化停用時以描述性字典 ID 排序。地理／設施代表策略先選使用最少的「判定行政區｜類別」群組，再依邊際與 ID。名額 5 兩者共有五個 ID、5 區／1 類；名額 10 共有五個、各增減五個，代表 5 對 10 區但仍只有 1 類。全部共有 87 個、12 區／3 類。",
        "實例 B:82f4e1aedafd3b68:0474263c1a583f5e740291b4 為中崙分館，來源 B 版本 2026-06-10，以 EPSG:4326 假設經測試，歸屬松山區。在 100 公尺、名額 5 匯出中因描述性字典 ID 最前而入選，自身＝0、其他＝0、總計＝0；不是未滿足需求的證據。下表列完整 5／10 名額 ID，固定匯出保留全部 288 種設定的完整身分。"
      ],
      "content": "scenarios"
    },
    {
      "id": "sensitivity",
      "title": "證據、群體、半徑與邊界敏感度",
      "paragraphs": [
        "實際矩陣有 288 種設定：2 證據模式 × 3 半徑 × 2 地理規則 × 4 群體 × 3 名額 × 2 策略。僅已驗證群體確實為空；假設圖書館／活動中心／運動中心分母為 69／9／9，不是可比的居民需求權重；合併 87、排除 4。",
        "圖書館基準為 61／67／69，活動中心 8／9／9，運動中心 0／9／9。嚴格與旗標准入改變熱點範圍，但本版已測基準與選取不變。跨半徑穩定及邊界結果相同不能認證座標基準或未來優先序；10／25／50 公尺是研究不確定性診斷，不是來源實測精度。"
      ]
    },
    {
      "id": "architecture",
      "title": "靜態 ETL、完整性與可重現發布",
      "paragraphs": [
        "v1.0 合併 fc3fe9340c460418b4255d04cf8a0150dbcf669b、方法 wifi-allocation-evidence-review-v1 與快照 wifi-policy-c250791e7736ed5bca2882ea 分開保留。最新來源合併 8e01a2bd8d762b51fae979d32fd477e378d1876b 提供方法 wifi-geographic-proximity-experiment-v1、schema 1.1 與地理版本 wifi-geo-da9f69f501af4d6e1d3f9122。快照 SHA-256 為 0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f，幾何為 de9fcacdd831d0d5c608bf3f8e5de2559c0a03cffa2014faf94bf92617899a1c。",
        "先發布不可變版本檔，最後原子替換 manifest 指標。瀏覽器解析前核對路徑、精確位元組、SHA-256、schema、來源及版本。匯出保留設定、入選／排除身分、版本、假設與不可用指標；CSV 公式前綴防護及文字跳脫維護呈現安全。雜湊一致僅證明位元組相符，不是官方認證。",
        "原始 v1.0 快照 SHA-256：91b28d7b375e7fb14ee42bfbe179d792c9e0ed0992f273582dd1e03e6bac8a82。語系修正後的模式 A 指標另指向 wifi-policy-e08d28277549c88787dea209（SHA-256 cd675db75af4b65220692dc59916c7e5b88920b42613d4b82c7affcb43e0dfaa），不能替代原始 v1.0 或 v1.1 地理版本。"
      ],
      "content": "architecture"
    },
    {
      "id": "decisions",
      "title": "實作挑戰與工程決策",
      "paragraphs": [
        "採已建立的 pyproj／PROJ 與 Shapely／GEOS，而非未驗證的手寫投影。幾何建構前檢查原環閉合，限制壓縮展開、路徑穿越及 ODS 重複儲存格溢位。原始重疊與矛盾座標保留可稽核，不以修復美化結果。",
        "離線最近點／鄰接預處理避免每次畫面重算成對 GIS；模式 A、B、C 各自維持資格語意。上游重用雙語延遲 React 外殼、Leaflet 及匯出模式，未新增正式後端或 npm 套件。作品集重用既有案例渲染器，僅載入撰寫摘要。"
      ]
    },
    {
      "id": "verification",
      "title": "測試、效能與獨立重現",
      "paragraphs": [
        "上游 v1.0 歷史紀錄為 23 個 Node 測試通過，快照 1,707,558 位元組／gzip 162,570，延遲政策 JS 28,424、CSS 3,511。v1.1 記錄地理測試、確定性輸出、桌面／行動雙語 QA、真實匯出及進入前零政策／GIS 載入；上游紀錄與作品集重跑明確分開。",
        "v1.1 快照 158,672 位元組／gzip 17,567，可選幾何 437,741／140,735；獨立的 288 情境研究匯出 3,154,696／55,597。上游 100 次暖機本機執行中位數 0.0947ms、p95 0.1494ms，未含網路／裝置因素；新增延遲模式 B JS 約 32kB／gzip 11.5kB。這些不是訪客延遲或 Wi-Fi 效能。",
        "作品集獨立核對保留產物雜湊，以原始純 TypeScript 函式重跑模式 A／B，不新增依賴。未獨立重跑投影 ETL、官方新資料擷取及完整上游測試。來源截圖經檢視，屬本機研究畫面而非公網驗收；原探索工具預覽保留於所屬專案。"
      ],
      "content": "evidence",
      "links": [
        {
          "label": "已檢視本機研究截圖：探索工具",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/evidence/explorer-desktop.png"
        },
        {
          "label": "已檢視本機研究截圖：模式 A",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/evidence/policy-desktop.png"
        },
        {
          "label": "上游本機研究：英文桌面",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/en-desktop.png"
        },
        {
          "label": "上游本機研究：中文桌面",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/zh-desktop.png"
        },
        {
          "label": "上游本機研究：英文行動",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/en-mobile.png"
        },
        {
          "label": "上游本機研究：中文行動",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/zh-mobile.png"
        }
      ]
    },
    {
      "id": "limitations",
      "title": "模式 C 證據閘門與未來研究",
      "paragraphs": [
        "模式 C 仍不可用：欠缺目前營運、正常運作時間、實測訊號、連線品質、真實使用、可比期間、站點身分延續、人口／需求分母及數位排除成果。地理准入不能證明任何一項；不宣稱設置可行性、RF 覆蓋、服務人口或已改善數位公平。",
        "下一步須發布者釐清 CRS、獨立實測控制點、穩定設施 ID、目前營運／公共進入證據，以及能區分非自身關聯的參考模型。幾何驗證與透明負面結果是已完成工程；投資優先序及市府採用仍未成立。"
      ],
      "content": "future"
    }
  ],
  "architecture": [
    "官方來源資料集",
    "有限範圍離線擷取",
    "原始位元組 SHA-256",
    "結構與身分稽核",
    "歷史／現版對帳",
    "CRS 與多邊形驗證",
    "點位歸屬准入",
    "設施證據分類",
    "不可變快照",
    "模式 A／實驗模式 B",
    "延遲雙語 React 介面",
    "可稽核 JSON／CSV 匯出"
  ],
  "architectureNote": "上游實際離線管線的簡化圖；作品集僅呈現靜態摘要，不執行 GIS 或下載政策快照。",
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "wifi-geographic-proximity-experiment-v1",
    "explanation": "模式 A 使用 wifi-allocation-evidence-review-v1；模式 B 為 schema 1.1 的假設性研究，最佳化停用。",
    "thresholds": {
      "caption": "資格契約",
      "columns": [
        {
          "key": "mode",
          "label": "模式"
        },
        {
          "key": "rule",
          "label": "准入"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "mode": "A",
            "rule": "嚴格現版 3,293，排除 23"
          }
        },
        {
          "id": "1",
          "cells": {
            "mode": "B",
            "rule": "已驗證 0；假設經測試 87，排除 4"
          }
        },
        {
          "id": "2",
          "cells": {
            "mode": "C",
            "rule": "欠缺營運、需求與結果證據"
          }
        }
      ]
    },
    "tiers": {
      "caption": "證據層級不是網路評分",
      "columns": [
        {
          "key": "tier",
          "label": "層級"
        },
        {
          "key": "rule",
          "label": "意義"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "tier": "Verified",
            "rule": "權威 CRS、合格身分與有效幾何；本版 0"
          }
        },
        {
          "id": "1",
          "cells": {
            "tier": "Assumption-tested",
            "rule": "明示假設與可重現幾何／行政檢查；87"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "Unresolved",
            "rule": "契約未通過，保留但排除；4"
          }
        }
      ]
    },
    "notes": [
      "100／250／500 公尺是研究假設，不是 RF 半徑。",
      "0.001 公尺數值容差與 10／25／50 公尺研究旗標分開。",
      "所有其他參考點新增為 0；全部名額的 18／2／0 僅是自身貢獻。"
    ]
  },
  "scenarioTables": [
    {
      "caption": "v1.0 名冊對帳",
      "columns": [
        {
          "key": "metric",
          "label": "指標"
        },
        {
          "key": "count",
          "label": "數值"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "metric": "舊版",
            "count": "3297"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "現版",
            "count": "3305"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "共同識別對",
            "count": "3286"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "僅現版",
            "count": "19"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "僅舊版",
            "count": "11"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "座標文字差異",
            "count": "596"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "數值座標變更",
            "count": "33"
          }
        },
        {
          "id": "7",
          "cells": {
            "metric": "類別變更",
            "count": "1"
          }
        },
        {
          "id": "8",
          "cells": {
            "metric": "其他中繼資料",
            "count": "75"
          }
        },
        {
          "id": "9",
          "cells": {
            "metric": "模糊現版配對",
            "count": "0"
          }
        }
      ]
    },
    {
      "caption": "v1.0 查核分級",
      "columns": [
        {
          "key": "tier",
          "label": "分級"
        },
        {
          "key": "count",
          "label": "候選數"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "tier": "A",
            "count": "63"
          }
        },
        {
          "id": "1",
          "cells": {
            "tier": "B",
            "count": "57"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "C",
            "count": "3196"
          }
        }
      ]
    },
    {
      "caption": "v1.0 相同範圍名額比較",
      "columns": [
        {
          "key": "capacity",
          "label": "名額"
        },
        {
          "key": "gapsCategories",
          "label": "缺口類別"
        },
        {
          "key": "balancedCategories",
          "label": "均衡類別"
        },
        {
          "key": "gapsDistricts",
          "label": "缺口區數"
        },
        {
          "key": "balancedDistricts",
          "label": "均衡區數"
        },
        {
          "key": "shared",
          "label": "共有 ID"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "capacity": "5",
            "gapsCategories": "3",
            "balancedCategories": "5",
            "gapsDistricts": "2",
            "balancedDistricts": "3",
            "shared": "1"
          }
        },
        {
          "id": "1",
          "cells": {
            "capacity": "10",
            "gapsCategories": "3",
            "balancedCategories": "10",
            "gapsDistricts": "2",
            "balancedDistricts": "6",
            "shared": "2"
          }
        },
        {
          "id": "2",
          "cells": {
            "capacity": "全部",
            "gapsCategories": "13",
            "balancedCategories": "13",
            "gapsDistricts": "12",
            "balancedDistricts": "12",
            "shared": "3293"
          }
        }
      ]
    },
    {
      "caption": "v1.0 資格敏感度",
      "columns": [
        {
          "key": "scope",
          "label": "範圍"
        },
        {
          "key": "eligible",
          "label": "合格"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "scope": "嚴格／現版",
            "eligible": "3293"
          }
        },
        {
          "id": "1",
          "cells": {
            "scope": "較寬／現版",
            "eligible": "3305"
          }
        },
        {
          "id": "2",
          "cells": {
            "scope": "嚴格／含舊版",
            "eligible": "3304"
          }
        },
        {
          "id": "3",
          "cells": {
            "scope": "較寬／含舊版",
            "eligible": "3316"
          }
        }
      ]
    },
    {
      "caption": "v1.0 前五站點縮寫：完整身分見固定匯出",
      "columns": [
        {
          "key": "rank",
          "label": "序位"
        },
        {
          "key": "gaps",
          "label": "缺口優先"
        },
        {
          "key": "balanced",
          "label": "均衡查核"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "rank": "1",
            "gaps": "TPEE002338",
            "balanced": "TPEE000752"
          }
        },
        {
          "id": "1",
          "cells": {
            "rank": "2",
            "gaps": "TPEE002354",
            "balanced": "TPEE002596"
          }
        },
        {
          "id": "2",
          "cells": {
            "rank": "3",
            "gaps": "TPEE002595",
            "balanced": "TPEE000046"
          }
        },
        {
          "id": "3",
          "cells": {
            "rank": "4",
            "gaps": "TPEE002596",
            "balanced": "TPEE002887"
          }
        },
        {
          "id": "4",
          "cells": {
            "rank": "5",
            "gaps": "TPEE002597",
            "balanced": "TPEE004335"
          }
        }
      ]
    },
    {
      "caption": "v1.1 設施座標證據：不是已認證位置",
      "columns": [
        {
          "key": "source",
          "label": "來源"
        },
        {
          "key": "audited",
          "label": "受查"
        },
        {
          "key": "verified",
          "label": "已驗證"
        },
        {
          "key": "assumed",
          "label": "假設經測試"
        },
        {
          "key": "unresolved",
          "label": "尚未釐清"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "source": "B 圖書館",
            "audited": "70",
            "verified": "0",
            "assumed": "69",
            "unresolved": "1"
          }
        },
        {
          "id": "1",
          "cells": {
            "source": "C 活動中心",
            "audited": "9",
            "verified": "0",
            "assumed": "9",
            "unresolved": "0"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "D 運動中心",
            "audited": "12",
            "verified": "0",
            "assumed": "9",
            "unresolved": "3"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "合計",
            "audited": "91",
            "verified": "0",
            "assumed": "87",
            "unresolved": "4"
          }
        }
      ]
    },
    {
      "caption": "v1.1 實驗模式 B：合併假設群體、嚴格地理規則；無非自身增益",
      "columns": [
        {
          "key": "radius",
          "label": "公尺"
        },
        {
          "key": "capacity",
          "label": "名額"
        },
        {
          "key": "strategy",
          "label": "策略"
        },
        {
          "key": "denominator",
          "label": "分母"
        },
        {
          "key": "baseline",
          "label": "基準"
        },
        {
          "key": "increment",
          "label": "新增"
        },
        {
          "key": "own",
          "label": "自身"
        },
        {
          "key": "other",
          "label": "其他"
        },
        {
          "key": "districts",
          "label": "區數"
        },
        {
          "key": "categories",
          "label": "類別"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "radius": "100",
            "capacity": "5",
            "strategy": "描述性近鄰",
            "denominator": "87",
            "baseline": "69",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "5",
            "categories": "1"
          }
        },
        {
          "id": "1",
          "cells": {
            "radius": "100",
            "capacity": "5",
            "strategy": "群組代表",
            "denominator": "87",
            "baseline": "69",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "5",
            "categories": "1"
          }
        },
        {
          "id": "2",
          "cells": {
            "radius": "100",
            "capacity": "10",
            "strategy": "描述性近鄰",
            "denominator": "87",
            "baseline": "69",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "5",
            "categories": "1"
          }
        },
        {
          "id": "3",
          "cells": {
            "radius": "100",
            "capacity": "10",
            "strategy": "群組代表",
            "denominator": "87",
            "baseline": "69",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "10",
            "categories": "1"
          }
        },
        {
          "id": "4",
          "cells": {
            "radius": "100",
            "capacity": "全部",
            "strategy": "描述性近鄰",
            "denominator": "87",
            "baseline": "69",
            "increment": "18",
            "own": "18",
            "other": "0",
            "districts": "12",
            "categories": "3"
          }
        },
        {
          "id": "5",
          "cells": {
            "radius": "100",
            "capacity": "全部",
            "strategy": "群組代表",
            "denominator": "87",
            "baseline": "69",
            "increment": "18",
            "own": "18",
            "other": "0",
            "districts": "12",
            "categories": "3"
          }
        },
        {
          "id": "6",
          "cells": {
            "radius": "250",
            "capacity": "5",
            "strategy": "描述性近鄰",
            "denominator": "87",
            "baseline": "85",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "5",
            "categories": "1"
          }
        },
        {
          "id": "7",
          "cells": {
            "radius": "250",
            "capacity": "5",
            "strategy": "群組代表",
            "denominator": "87",
            "baseline": "85",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "5",
            "categories": "1"
          }
        },
        {
          "id": "8",
          "cells": {
            "radius": "250",
            "capacity": "10",
            "strategy": "描述性近鄰",
            "denominator": "87",
            "baseline": "85",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "5",
            "categories": "1"
          }
        },
        {
          "id": "9",
          "cells": {
            "radius": "250",
            "capacity": "10",
            "strategy": "群組代表",
            "denominator": "87",
            "baseline": "85",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "10",
            "categories": "1"
          }
        },
        {
          "id": "10",
          "cells": {
            "radius": "250",
            "capacity": "全部",
            "strategy": "描述性近鄰",
            "denominator": "87",
            "baseline": "85",
            "increment": "2",
            "own": "2",
            "other": "0",
            "districts": "12",
            "categories": "3"
          }
        },
        {
          "id": "11",
          "cells": {
            "radius": "250",
            "capacity": "全部",
            "strategy": "群組代表",
            "denominator": "87",
            "baseline": "85",
            "increment": "2",
            "own": "2",
            "other": "0",
            "districts": "12",
            "categories": "3"
          }
        },
        {
          "id": "12",
          "cells": {
            "radius": "500",
            "capacity": "5",
            "strategy": "描述性近鄰",
            "denominator": "87",
            "baseline": "87",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "5",
            "categories": "1"
          }
        },
        {
          "id": "13",
          "cells": {
            "radius": "500",
            "capacity": "5",
            "strategy": "群組代表",
            "denominator": "87",
            "baseline": "87",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "5",
            "categories": "1"
          }
        },
        {
          "id": "14",
          "cells": {
            "radius": "500",
            "capacity": "10",
            "strategy": "描述性近鄰",
            "denominator": "87",
            "baseline": "87",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "5",
            "categories": "1"
          }
        },
        {
          "id": "15",
          "cells": {
            "radius": "500",
            "capacity": "10",
            "strategy": "群組代表",
            "denominator": "87",
            "baseline": "87",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "10",
            "categories": "1"
          }
        },
        {
          "id": "16",
          "cells": {
            "radius": "500",
            "capacity": "全部",
            "strategy": "描述性近鄰",
            "denominator": "87",
            "baseline": "87",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "12",
            "categories": "3"
          }
        },
        {
          "id": "17",
          "cells": {
            "radius": "500",
            "capacity": "全部",
            "strategy": "群組代表",
            "denominator": "87",
            "baseline": "87",
            "increment": "0",
            "own": "0",
            "other": "0",
            "districts": "12",
            "categories": "3"
          }
        }
      ]
    },
    {
      "caption": "v1.1 實際完整 ID：前五列為名額 5，十列為名額 10",
      "columns": [
        {
          "key": "rank",
          "label": "序位"
        },
        {
          "key": "marginal",
          "label": "描述性近鄰"
        },
        {
          "key": "representation",
          "label": "地理／設施代表"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "rank": "1",
            "marginal": "B:82f4e1aedafd3b68:0474263c1a583f5e740291b4",
            "representation": "B:82f4e1aedafd3b68:0474263c1a583f5e740291b4"
          }
        },
        {
          "id": "1",
          "cells": {
            "rank": "2",
            "marginal": "B:82f4e1aedafd3b68:0618bc4da62bf725bcd1b044",
            "representation": "B:82f4e1aedafd3b68:0618bc4da62bf725bcd1b044"
          }
        },
        {
          "id": "2",
          "cells": {
            "rank": "3",
            "marginal": "B:82f4e1aedafd3b68:0c6bf31fcf62e994dda560b8",
            "representation": "B:82f4e1aedafd3b68:0c6bf31fcf62e994dda560b8"
          }
        },
        {
          "id": "3",
          "cells": {
            "rank": "4",
            "marginal": "B:82f4e1aedafd3b68:0c81b5793b02eabf72a1cabc",
            "representation": "B:82f4e1aedafd3b68:0c81b5793b02eabf72a1cabc"
          }
        },
        {
          "id": "4",
          "cells": {
            "rank": "5",
            "marginal": "B:82f4e1aedafd3b68:0ddc0f40988599653e595253",
            "representation": "B:82f4e1aedafd3b68:0ddc0f40988599653e595253"
          }
        },
        {
          "id": "5",
          "cells": {
            "rank": "6",
            "marginal": "B:82f4e1aedafd3b68:1384387bd295736c72203e15",
            "representation": "B:82f4e1aedafd3b68:291eb4162a85360baa94ce4a"
          }
        },
        {
          "id": "6",
          "cells": {
            "rank": "7",
            "marginal": "B:82f4e1aedafd3b68:15c88f87513a3a68dfb97a00",
            "representation": "B:82f4e1aedafd3b68:3ecdd0d155f98ff02a9fe4c1"
          }
        },
        {
          "id": "7",
          "cells": {
            "rank": "8",
            "marginal": "B:82f4e1aedafd3b68:1b924ab7fa1f2ac4f2bf8c3c",
            "representation": "B:82f4e1aedafd3b68:40e48e1c3fa3ef8e7b1a8372"
          }
        },
        {
          "id": "8",
          "cells": {
            "rank": "9",
            "marginal": "B:82f4e1aedafd3b68:1c7fa1f43d123072cf07a3ce",
            "representation": "B:82f4e1aedafd3b68:41e923b45c1585be6646ab0a"
          }
        },
        {
          "id": "9",
          "cells": {
            "rank": "10",
            "marginal": "B:82f4e1aedafd3b68:2603d8eef7c4c3ed3073ea3d",
            "representation": "B:82f4e1aedafd3b68:58da26f70a96527967241f40"
          }
        }
      ]
    },
    {
      "caption": "v1.1 群體敏感度：假設經測試、全部名額",
      "columns": [
        {
          "key": "cohort",
          "label": "群體"
        },
        {
          "key": "denominator",
          "label": "分母"
        },
        {
          "key": "r100",
          "label": "100m 基準"
        },
        {
          "key": "r250",
          "label": "250m 基準"
        },
        {
          "key": "r500",
          "label": "500m 基準"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "cohort": "B",
            "denominator": "69",
            "r100": "61",
            "r250": "67",
            "r500": "69"
          }
        },
        {
          "id": "1",
          "cells": {
            "cohort": "C",
            "denominator": "9",
            "r100": "8",
            "r250": "9",
            "r500": "9"
          }
        },
        {
          "id": "2",
          "cells": {
            "cohort": "D",
            "denominator": "9",
            "r100": "0",
            "r250": "9",
            "r500": "9"
          }
        },
        {
          "id": "3",
          "cells": {
            "cohort": "全部",
            "denominator": "87",
            "r100": "69",
            "r250": "85",
            "r500": "87"
          }
        },
        {
          "id": "4",
          "cells": {
            "cohort": "僅已驗證",
            "denominator": "0",
            "r100": "0",
            "r250": "0",
            "r500": "0"
          }
        }
      ]
    },
    {
      "caption": "原始來源版本雜湊",
      "columns": [
        {
          "key": "edition",
          "label": "來源版本"
        },
        {
          "key": "sha256",
          "label": "SHA-256"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "edition": "A-2026-07-01.csv",
            "sha256": "09c150e7b8a75e1477413ddcc37059fe97b3c2353ac9f8799069e65d8f81cc55"
          }
        },
        {
          "id": "1",
          "cells": {
            "edition": "B-2026-06-10.csv",
            "sha256": "82f4e1aedafd3b68a9b6adc619fdd5e00e4871c3c94100201eefdb12070e0847"
          }
        },
        {
          "id": "2",
          "cells": {
            "edition": "C-2025-12-18.ods",
            "sha256": "368778b0c649f24b05cc0383172afb0e1b804c332541e2d33a2117d7d83834a0"
          }
        },
        {
          "id": "3",
          "cells": {
            "edition": "D-2026-03-02.csv",
            "sha256": "23c5ce0906358d8f95b2f1a8e1b019487cd7fa564b2cf188681648d23c89b11c"
          }
        },
        {
          "id": "4",
          "cells": {
            "edition": "E-2024-09-16.zip",
            "sha256": "77bcc347b503b8ff8a43f7e1afaaedb18877a6222282587b145adaba69afd2d9"
          }
        },
        {
          "id": "legacy",
          "cells": {
            "edition": "A-legacy · filename1141218",
            "sha256": "c230610998a33309677fa235ec11b05d047bf3c9379dc6a7683ff3645a422c15"
          }
        }
      ]
    },
    {
      "caption": "衍生地理產物：雜湊不等於官方認證",
      "columns": [
        {
          "key": "artifact",
          "label": "產物"
        },
        {
          "key": "bytes",
          "label": "位元組"
        },
        {
          "key": "sha256",
          "label": "SHA-256"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "artifact": "boundaries.geojson",
            "bytes": "437741",
            "sha256": "de9fcacdd831d0d5c608bf3f8e5de2559c0a03cffa2014faf94bf92617899a1c"
          }
        },
        {
          "id": "1",
          "cells": {
            "artifact": "coordinate-audit.json",
            "bytes": "153937",
            "sha256": "df804c49ee6d086261b235ae82ea05d2390e65abc041d5284af36a73e022a113"
          }
        },
        {
          "id": "2",
          "cells": {
            "artifact": "excluded.json",
            "bytes": "6434",
            "sha256": "674f26e06a7bbf1d38c0826f08f9859e3388741bce06eb8c42cabef1a79fab0b"
          }
        },
        {
          "id": "3",
          "cells": {
            "artifact": "hotspot-audit.json",
            "bytes": "1626904",
            "sha256": "61dcfd21c402ee7d21c7da4cc5443b561d2f24e012292c0cef58a92552236515"
          }
        },
        {
          "id": "4",
          "cells": {
            "artifact": "references.json",
            "bytes": "4004",
            "sha256": "2e3407d846692a80befb65b67857090bbddfa7c81ed00f9eb482d9a5ce3227ff"
          }
        },
        {
          "id": "5",
          "cells": {
            "artifact": "snapshot.json",
            "bytes": "158672",
            "sha256": "0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f"
          }
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": "已合併 v1.0 PR #4",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/pull/4"
    },
    {
      "label": "已合併 v1.1 PR #6",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/pull/6"
    },
    {
      "label": "v1.0 · 來源稽核",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-source-audit.md"
    },
    {
      "label": "v1.0 · 模式 A 方法",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-methodology.md"
    },
    {
      "label": "v1.0 · 歷史結果",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-delivery.md"
    },
    {
      "label": "v1.0 · 擷取清單",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/data/raw/wifi-policy/acquisition-manifest.json"
    },
    {
      "label": "v1.0 · 對帳觀察",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/data/raw/wifi-policy/reconciliation-observations.json"
    },
    {
      "label": "v1.0 · 歷史決策匯出",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/evidence/sample-decision.json"
    },
    {
      "label": "v1.0 · 模式 A 情境",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/src/lib/wifiPolicyScenarios.ts"
    },
    {
      "label": "v1.0 · 模式 A 測試",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/tests/wifiPolicy.test.ts"
    },
    {
      "label": "v1.1 · 來源驗證",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-source-validation.md"
    },
    {
      "label": "v1.1 · 座標契約",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-coordinate-contract.md"
    },
    {
      "label": "v1.1 · 實驗方法",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-methodology.md"
    },
    {
      "label": "v1.1 · 中文技術規格",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-decision-mvp.zh-TW.md"
    },
    {
      "label": "v1.1 · 交付與已記錄驗證",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-delivery.md"
    },
    {
      "label": "v1.1 · 實際結果與入選身分",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/results.md"
    },
    {
      "label": "v1.1 · GIS 建置程式",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/buildWifiGeographic.py"
    },
    {
      "label": "v1.1 · 情境引擎",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/lib/wifiGeographicScenarios.ts"
    },
    {
      "label": "v1.1 · 地理測試",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/tests/wifiGeographic.test.ts"
    },
    {
      "label": "v1.1 · 產物清單",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/public/data/wifi-policy/geographic-v1.1/manifest.json"
    },
    {
      "label": "v1.1 · 288 情境指標",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/public/data/wifi-policy/geographic-v1.1/scenarios-manifest.json"
    },
    {
      "label": "v1.1 · 本機量測",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/measurements.json"
    },
    {
      "label": "v1.1 · 瀏覽器證據",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/browser-checks.json"
    },
    {
      "label": "v1.1 · 驗證紀錄",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/verification.log"
    },
    {
      "label": "v1.1 · Python GIS 測試",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/tests/geographic_test.py"
    },
    {
      "label": "v1.1 · 地理型別與結構",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/types/wifiGeographicPolicy.ts"
    },
    {
      "label": "v1.1 · 地理准入、完整性與匯出",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/lib/wifiGeographicPolicy.ts"
    },
    {
      "label": "v1.1 · 發布情境產生",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/buildWifiGeographicScenarios.ts"
    },
    {
      "label": "v1.1 · 可重現驗證器",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/verifyWifiGeographic.ts"
    },
    {
      "label": "官方資料目錄 A",
      "url": "https://data.taipei/dataset/detail?id=6aa6532d-652f-4c1b-814a-4646b75407af"
    },
    {
      "label": "官方資料目錄 B",
      "url": "https://data.taipei/dataset/detail?id=43772803-6504-469c-894d-35904342a53b"
    },
    {
      "label": "官方資料目錄 C",
      "url": "https://data.taipei/dataset/detail?id=5ed70753-73a4-4fc1-b78c-df09f7499594"
    },
    {
      "label": "官方資料目錄 D",
      "url": "https://data.taipei/dataset/detail?id=80be7612-593f-4795-9935-a10ce0f7b75b"
    },
    {
      "label": "官方資料目錄 E",
      "url": "https://data.taipei/dataset/detail?id=1601ef3a-c253-4988-b047-943d9e786143"
    },
    {
      "label": "v1.1 · 原始來源擷取清單",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/data/raw/wifi-policy/acquisition-manifest.json"
    }
  ],
  "previewAssets": [
    {
      "label": "上游本機研究：英文桌面",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/en-desktop.png"
    },
    {
      "label": "上游本機研究：中文桌面",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/zh-desktop.png"
    },
    {
      "label": "上游本機研究：英文行動",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/en-mobile.png"
    },
    {
      "label": "上游本機研究：中文行動",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/zh-mobile.png"
    }
  ],
  "futureExtensions": [
    "釐清設施 CRS、實測位置、穩定身分與目前公共進入條件後，再改進非自身參考模型。",
    "模式 C 須營運、訊號、使用、可比期間及人口／需求分母；不得以近鄰替代。"
  ]
};
