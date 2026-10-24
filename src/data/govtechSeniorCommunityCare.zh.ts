import type { GovTechCase } from "../types/govtechCase";

export const seniorCommunityCareCaseZh: GovTechCase = {
  "id": "senior-community-care",
  "slug": "senior-community-care",
  "displayNumber": "010",
  "policyDomain": "市民服務與公共衛生",
  "projectId": "taipei-civic-groups-map",
  "sourceRepository": "https://github.com/LEO0331/taipei-civic-groups-map",
  "sourceVersion": "a1c98e4aef59bf15f7e5f76e52cd871525c1517e",
  "snapshotVersion": "senior-care-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c",
  "title": "臺北市高齡社區照顧據點涵蓋與服務整備決策支援",
  "summary": "從官方照顧據點 PDF 到可追溯來源對帳、可解釋行政追蹤與隱私保護公共資料工程。",
  "maturity": "decision-support-poc",
  "maturityLabel": "已完成證據查核與行政追蹤情境概念驗證",
  "reviewNote": "520 筆據點列、88 筆核對文件里別與 493 筆接受歷史對應；未驗證量能、可近性、未滿足需求或福利成果。",
  "intendedUsers": "市政社福資料管理者、社區照顧方案承辦人、公共服務研究者、公民科技工程師與行政文件團隊。",
  "implementedCapabilities": [
    "確定性官方 PDF 擷取與獨立分頁控制",
    "來源綁定據點／里別身分與保守跨版本對帳",
    "可解釋分級與 5／10／全部行政查核情境",
    "隱私最小化不可變快照與可重現 JSON／CSV 摘要",
    "明列不可用的服務量能與福利成果證據門檻"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "政策問題與決策範圍",
      "paragraphs": [
        "當行政調查量能有限，市政團隊如何找出應進一步查核文件的社區照顧據點紀錄，以及官方列示尚未布建社區照顧關懷據點之里別？",
        "發布紀錄、據點身分、里別身分、方案布建、實際營運、服務量能、居民可近性與福利成效是不同證據主張。本概念驗證支援文件調查；入選項目代表待追問事項，不是興建設施或分配福利經費的指示。"
      ]
    },
    {
      "id": "evolution",
      "title": "從公共紀錄探索走向行政查核",
      "paragraphs": [
        "既有公共紀錄探索工具整合多個獨立更新目錄，原已保留 510 筆社區照顧關懷服務據點紀錄（E）及 292 筆社區整合照顧 C 級單位（F）。F 屬另一方案母體，不能與本版 PDF 的 520 列相加當作據點總數。",
        "新模組加入官方 PDF 准入、保守跨版本對應、已核對的文件里別鍵、確定性查核情境及可重現 JSON／CSV 摘要；原探索工具、目錄檔案與各自來源日期契約均維持不變。"
      ]
    },
    {
      "id": "sources",
      "title": "官方文件與來源版本",
      "paragraphs": [
        "來源 A 為社會局 2026 年 8 月社區照顧關懷據點名冊：14 頁、520 筆發布列、467,284 個原始位元組。來源 B 為同年 8 月官方列示尚未布建社區照顧關懷據點之里別名冊：2 頁、88 列、104,821 位元組，涵蓋臺北市十二行政區。這些是文件列數，不是經認證的營運設施數或實測照顧缺口。",
        "來源 C 為社區照顧關懷據點補助實施計畫，修訂日為 2025-12-17，生效日為 2026-01-01。其類型與例外僅供脈絡參照，系統不判定補助資格、法律資格或場所合規。A／B 網頁於 2026-09-10 更新中繼資料，不代表文件改為九月版本；製表期為八月，分析日另固定為 2026-10-23。",
        "原始取得位元組 SHA-256：A 26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2；B c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7；C 2e598f8d48b46a9b832dd3a661f900badb33f0ef79cc84ada48893af369b5336。E db5873afbb0e5edd376f90ebb02fca975e0844cf786e09407d022be03567772f 識別保留於 Git 的 LF 文字版本，不是獨立取得的原始 HTTP 回應位元組。 A／B 接受取得時間分別為 2026-10-23T13:21:31.049788+00:00 與 2026-10-23T13:21:31.461064+00:00，與製表年月、網頁更新及分析日分開。"
      ]
    },
    {
      "id": "pdf-extraction",
      "title": "確定性 PDF 表格擷取",
      "paragraphs": [
        "固定版本 pdfplumber==0.11.9 以線框表格解析多行名稱、長地址、多地址、重複場地、分頁與行政區轉換。接受資料前驗證 PDF 標頭、頁數、可見製表年月、欄位結構、必要儲存格與完整序號；正式資料不採 OCR 或生成式人工智慧擷取。 A 的原欄位為序號、行政區、里別、據點名稱、據點類型、據點地址、聯絡電話；後兩者依轉換階段處理，不直接刊入候選。",
        "接受的附件標籤、編碼檔名及可見文件標頭均為 115.08。PDF 內部保留的舊 XLSX 式標題僅列警示，不作版本依據；本版未觀察到先前懷疑的 115.04／115.08 附件差異。即使列數相同，版面或日期變更仍須重新准入。"
      ]
    },
    {
      "id": "page-controls",
      "title": "跨頁合併儲存格的行政區陷阱",
      "paragraphs": [
        "來源 B 第 47–58 列屬內湖區；第 47–48 列在第 1 頁，但內湖區可見標籤延續至第 2 頁。直接沿用前一個中正區儲存格會誤分這一段。解析器核對未封閉的行政區儲存格幾何、下一頁標籤與獨立查核的序號範圍。",
        "上游以 PDF 圖像列帶核對 A 每頁首尾、行政區轉換及指定多行案例，並逐列核對 B 的完整里別序列。B69 保留擷取字形「㇐德里」，比較時才透過經審查規則對應「一德里」，不悄悄改寫來源文字；重複場地仍保留為不同列。"
      ]
    },
    {
      "id": "identity",
      "title": "來源綁定身分與統計單位",
      "paragraphs": [
        "A 候選單位是發布據點列，B 是發布里別列；識別碼綁定原始來源雜湊、補零序號、標準列雜湊與出現次序後綴。頁碼只定位證據，不定義身分；營運組織或共用場地都不會因此成為永久政府設施識別碼。",
        "有限格式正規化處理 NFKC、空白、台／臺、已辨識括號與經查核特殊字形。里別鍵只取自明列的行政區／里別欄位，不從組織名稱或地址推論地理位置；未准入完整權威里別名冊、政府里碼對照或 GIS 邊界圖層。"
      ]
    },
    {
      "id": "reconciliation",
      "title": "保守對帳歷史據點目錄",
      "paragraphs": [
        "名稱、地址與行政區須完全一致，或存在唯一且跨兩版皆一對一的正規化配對。實際為 427 筆完全一致加 66 筆正規化對應，共 493 筆接受研究對應；另有 1 筆不明確、9 筆拒絕與 17 筆僅見 PDF，合計 520。E 的 510 列中另有 17 列沒有接受對應。",
        "唯一不明確案例為 A #114，大安區新龍里的臺北市大安區大安新龍社區發展協會。接受研究對應不等於政府認證營運據點身分；僅出現於 A 或 E 不足以證明開辦或關閉，類型差異也可能來自發布或方案定義。"
      ]
    },
    {
      "id": "villages",
      "title": "零重疊也是有效文件結果",
      "paragraphs": [
        "A 有 368 個不同發布行政區／里別鍵，B 有 88 個唯一接受鍵，正規化後重疊為 0。兩份接受文件都沒有行政區／里別缺值或重複來源序號；結果只支持此次受限文件比較的一致性。",
        "B 表示本方案、本版官方列示尚未布建社區照顧關懷據點之里別，不代表沒有其他高齡服務、鄰近設施或居民未獲照顧。零重疊不能證明全市服務涵蓋、發布完全無誤或未滿足需求；也沒有相容完整分母可計算適足照顧百分比。"
      ]
    },
    {
      "id": "tiers",
      "title": "可解釋的文件證據分級",
      "paragraphs": [
        "A 的廣義查核母體為 A 級 1 筆、B 級 61 筆、C 級 458 筆。依首個符合規則區分主要身分／實質對應衝突、其他文件疑問及例行核對；這不衡量照顧品質、安全、脆弱程度、可用性或居民需求。",
        "「證據缺口優先」先按等級，再按穩定候選識別碼；「行政區均衡查核」依確定性的 Unicode 行政區順序輪流取件，區內保留等級／識別碼順序。沒有照顧需求權重或加權福利分數。"
      ],
      "content": "methodology"
    },
    {
      "id": "mode-a",
      "title": "模式 A：據點文件查核",
      "paragraphs": [
        "已完成模式 A 在廣義、全類型設定保留 520 筆官方 PDF 列。來源範圍、類型、問題範圍、行政區、名額與策略均明列；先篩選再選取。5、10 或全部是文件查核名額，不是經費或服務名額。",
        "證據優先前五筆依序為 A #114、#1、#59、#60、#66，涉及新龍不明確對應、兩筆時段分類未明與兩筆跨版本類型差異；主要案例表使用可讀序號及官方名稱，完整來源綁定識別碼置於技術證據。 英譯名稱僅作閱讀輔助；需要對照來源時保留官方中文名稱。"
      ]
    },
    {
      "id": "mode-a-results",
      "title": "模式 A：名額如何改變查核組成",
      "paragraphs": [
        "名額 5 時，證據優先涵蓋 3 區、均衡查核涵蓋 5 區，共同識別碼 0。名額 10 時為 3 區對 10 區、共同 3 筆；全部選取時皆選入相同 520 筆、涵蓋 12 區，但次序可能不同。",
        "固定母體下改變規則，會改變待追查問題組合；行政區代表性不是實測照顧公平、服務可近性或福利改善。"
      ]
    },
    {
      "id": "mode-b",
      "title": "模式 B：官方尚未布建里別追蹤",
      "paragraphs": [
        "已完成模式 B 准入 88 筆已驗證本版文件里別列。沒有可區分文件疑問，因此證據優先採穩定來源次序，不虛構人口或照顧需求分數；行政區均衡查核輪流涵蓋十二個來源行政區。",
        "證據優先前五筆為 B #1–5，皆屬士林區福安里、德華里、社子里、蘭雅里、天和里。均衡名額 5 實際選入 B #33 中山區中庄里、#41 中正區廈安里、#75 信義區黎安里、#47 內湖區紫陽里及 #65 北投區永欣里；這是行政追蹤名單，不是興建指示或高需求排序。"
      ]
    },
    {
      "id": "mode-b-results",
      "title": "模式 B：代表性與全母體穩定結果",
      "paragraphs": [
        "名額 5 時，證據優先涵蓋 1 區，均衡涵蓋 5 區，共同識別碼 0。名額 10 時為 1 區對 10 區、共同 1 筆；全部選取時皆選入相同 88 筆、涵蓋 12 區。",
        "不可變結果保留兩模式、三種名額、兩策略共十二組基準；全部名額得到相同集合是有效結果。次序與行政區組成解釋行政選擇，而非居民需求。"
      ],
      "content": "scenarios"
    },
    {
      "id": "sensitivity",
      "title": "來源與類型敏感度",
      "paragraphs": [
        "已發布網格固定模式 A、名額 5、證據優先與全部問題等級，比較僅 PDF、接受對應、廣義範圍，以及全部、據點文字、樂齡學堂文字類型。僅 PDF 在分級前移除 E 相關問題；接受對應准入 493 列，不把僅 E 紀錄加入本版 PDF。",
        "僅 PDF 的據點文字子集有 463 列、涵蓋 5 區，與預設共同 2 筆、各增減 3 筆。廣義據點文字也有 463 列，卻保留全部預設 5 筆、涵蓋 3 區；樂齡文字在 PDF／廣義為 57 列，接受對應為 52 列。這些是來源文字分類，不認證標準營運據點。",
        "九組比較保留合格母體、入選來源列、行政區數、共同／新增／移除識別碼及母體變化；穩定選取也如實保留。系統已實作主要衝突或較廣問題篩選，本頁不另造分析情境；地理資格及實際量能／可近性／成果比較仍缺證據。"
      ]
    },
    {
      "id": "privacy",
      "title": "從轉換流程實作隱私最小化",
      "paragraphs": [
        "來源 B 官方 PDF 原本含「里內獨居老人數」。轉換流程在隱私最小化擷取、公開快照、選取及標準 JSON／CSV 摘要之前即排除此欄，從不拿它計算脆弱程度或需求排序。官方原件仍含發布欄位，本案例不重刊其數值。",
        "電話在 PDF 擷取時移除；完整場地地址僅於離線對應與列雜湊使用，之後與個人／家戶資料、居民定位一併排除於公開候選及摘要。這是上游最小化，不只是介面篩除。",
        "CSV 匯出器逐格加引號、跳脫內嵌引號，並防護前置空白或控制字元後的公式前綴。非空與空結果摘要都保留方法、日期、設定、來源譜系、排除及限制；沒有居民地理編碼或脆弱度模型。"
      ]
    },
    {
      "id": "architecture",
      "title": "離線證據與延遲載入架構",
      "paragraphs": [
        "有限擷取 → 原始位元組清單 → 固定 Python 解析與獨立分頁控制 → 離線 TypeScript 對帳 → 來源綁定身分 → 證據分級／情境 → 不可變 JSON → 原子目前指標 → 完整性驗證延遲 React 模組 → 雙語查核及 JSON／CSV 摘要。",
        "擷取及 PDF 解析置於瀏覽器外，讓審查准入不依賴即時政府端點或使用者裝置。模組重用目錄、語言／導覽狀態與本機 JSON 載入器，未新增正式 API 後端、資料庫、機器學習模型或 Node 執行期依賴。",
        "政策發布於 public/policy/senior-care-policy/，不替換 public/data/。八月 PDF、歷史目錄與法律脈絡各有版本；既有 117 目錄的資料信任／新鮮度契約維持原樣，不能用單一分析日把舊來源都標為更新。"
      ],
      "content": "architecture"
    },
    {
      "id": "governance",
      "title": "版本准入與快照完整性",
      "paragraphs": [
        "製表年月、網頁更新、取得、解析器版本、擷取、分析日、Git 來源與不可變發布分開記錄。預設離線驗證；明確刷新才暫存有限下載並記錄新雜湊，未審查文件不覆寫接受原件。",
        "先寫不可變檔再原子替換指標；瀏覽器核對指標結構、檔名規則與精確 SHA-256，通過後才接受快照結構，失敗可重試。未變更重建保留取得中繼資料；重建不是重新取得。",
        "來源提交 a1c98e4aef59bf15f7e5f76e52cd871525c1517e；結構版本 1；方法 senior-community-care-evidence-review-v1；快照識別碼 senior-care-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c；檔案精確 SHA-256 f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c。本格式以相同精確發布位元組導出檔名及快照識別碼，為 771155 位元組／119539 gzip；此相等關係不是所有快照識別碼通則。"
      ],
      "content": "evidence"
    },
    {
      "id": "verification",
      "title": "已記錄驗證與本地效能",
      "paragraphs": [
        "來源記錄型別檢查、208 項 Node 測試、建置、20 項 Python 解析／擷取測試及 24 項政策瀏覽器測試通過。Linux 完整瀏覽器為 177 通過、1 項預期略過並保留原基準；Windows 嘗試為 165 通過、1 項預期略過及 12 項平台視覺基準失敗，不能稱全數通過。",
        "記錄入口為原始 400.12 KB／gzip 116.05 KB，低於原有 450／130 KB 預算。延遲模組約 27 KB／gzip 10.4 KB；快照 771,155／gzip 119,539 位元組；本地情境平均約 0.356 毫秒，瀏覽器名額切換 35.1 毫秒。這些來源專案量測不保證公開主機延遲。",
        "探索工具入口未預先請求快照；成功流程僅讀取本機指標與不可變 JSON，不請求政府 API／PDF。來源記錄一項既有高嚴重度 npm 弱點，本次未解決。Portfolio 檢查另計，本案例不宣稱重跑完整上游測試。",
        "Portfolio 另行核對 A／B／C 原始位元組、E 的 Git LF 版本與精確快照雜湊，使用固定版本情境引擎重現十二組基準，並由完整入選識別碼重算共同集合及九組敏感度差異。這不等於重跑 Python PDF 擷取、完整上游瀏覽器測試或重新量測上游效能。"
      ]
    },
    {
      "id": "mode-c",
      "title": "模式 C：實際服務證據仍不可用",
      "paragraphs": [
        "模式 C 不可用。現況營運、實際時間、人力／量能、使用率、候補、跨里使用、交通障礙、相容人口分母與實測福利成果皆需另備證據；292 筆 C 級單位目錄不能為本母體補足事實。",
        "未准入地理可近性模型，不提供旅行時間、服務半徑、高齡涵蓋率、需求權重或福利估計。發布時段是文字分類，不是驗證預約／時間；未知仍為未知，不能導出據點、補助或個人資格建議。"
      ]
    },
    {
      "id": "future",
      "title": "後續證據與公共部門應用",
      "paragraphs": [
        "後續須審查文件刷新、由資料管理者確認不明確對應／方案類型，並取得相容權威里別名冊。服務量能或可近性研究需另備營運證據、分母、隱私審查與已驗證地理關係。",
        "本案展示可追溯文件准入、保守身分、可解釋調查批次與隱私保護發布；尚未建立市政採用或照顧成效改善證據。此概念驗證協助檢視證據、提出更精確行政問題。"
      ],
      "content": "future"
    }
  ],
  "architecture": [
    "官方網頁與有限附件擷取",
    "原始位元組清單與固定 Python PDF 解析器",
    "獨立分頁控制與隱私最小化擷取",
    "離線對帳與來源綁定身分",
    "證據分級與確定性查核情境",
    "不可變 JSON 與原子目前指標",
    "完整性驗證延遲雙語模組與安全摘要"
  ],
  "architectureNote": "來源應用採離線准入與完整性驗證本機發布；Portfolio 僅呈現編寫證據，不於執行期取得 PDF、運算引擎或下載上游快照。",
  "scenarioTables": [
    {
      "caption": "分開標示官方與歷史來源版本",
      "columns": [
        {
          "key": "source",
          "label": "來源"
        },
        {
          "key": "edition",
          "label": "版本／用途"
        },
        {
          "key": "count",
          "label": "發布單位"
        },
        {
          "key": "boundary",
          "label": "解讀限制"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "source": "A",
            "edition": "2026 年 8 月官方據點 PDF",
            "count": "520",
            "boundary": "發布列，非認證營運設施"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "B",
            "edition": "2026 年 8 月官方尚未布建里別 PDF",
            "count": "88",
            "boundary": "限定方案的文件里別"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "C",
            "edition": "2025-12-17 修訂；2026-01-01 生效",
            "count": "法律脈絡",
            "boundary": "不判定補助或法律資格"
          }
        },
        {
          "id": "4",
          "cells": {
            "source": "E",
            "edition": "保留歷史社區照顧 CSV",
            "count": "510",
            "boundary": "獨立對帳版本；Git LF 標準文字"
          }
        },
        {
          "id": "5",
          "cells": {
            "source": "F",
            "edition": "獨立社區整合照顧 C 級目錄",
            "count": "292",
            "boundary": "不同方案，不併入 A／E"
          }
        }
      ]
    },
    {
      "caption": "接受的 PDF 擷取摘要",
      "columns": [
        {
          "key": "source",
          "label": "來源"
        },
        {
          "key": "pages",
          "label": "頁數"
        },
        {
          "key": "rows",
          "label": "列數"
        },
        {
          "key": "bytes",
          "label": "原始位元組"
        },
        {
          "key": "parser",
          "label": "解析器"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "source": "A",
            "pages": "14",
            "rows": "520",
            "bytes": "467284",
            "parser": "pdfplumber 0.11.9 / table-lines-v1"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "B",
            "pages": "2",
            "rows": "88",
            "bytes": "104821",
            "parser": "pdfplumber 0.11.9 / table-lines-v1"
          }
        }
      ]
    },
    {
      "caption": "詳細分頁准入控制",
      "columns": [
        {
          "key": "source",
          "label": "來源"
        },
        {
          "key": "page",
          "label": "頁碼"
        },
        {
          "key": "serials",
          "label": "首末序號"
        },
        {
          "key": "control",
          "label": "控制"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "source": "A",
            "page": "1",
            "serials": "1–36",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "A",
            "page": "2",
            "serials": "37–74",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "A",
            "page": "3",
            "serials": "75–112",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "4",
          "cells": {
            "source": "A",
            "page": "4",
            "serials": "113–149",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "5",
          "cells": {
            "source": "A",
            "page": "5",
            "serials": "150–187",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "6",
          "cells": {
            "source": "A",
            "page": "6",
            "serials": "188–225",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "7",
          "cells": {
            "source": "A",
            "page": "7",
            "serials": "226–262",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "8",
          "cells": {
            "source": "A",
            "page": "8",
            "serials": "263–298",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "9",
          "cells": {
            "source": "A",
            "page": "9",
            "serials": "299–335",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "10",
          "cells": {
            "source": "A",
            "page": "10",
            "serials": "336–373",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "11",
          "cells": {
            "source": "A",
            "page": "11",
            "serials": "374–412",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "12",
          "cells": {
            "source": "A",
            "page": "12",
            "serials": "413–451",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "13",
          "cells": {
            "source": "A",
            "page": "13",
            "serials": "452–489",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "14",
          "cells": {
            "source": "A",
            "page": "14",
            "serials": "490–520",
            "control": "圖像首尾與序號連續性"
          }
        },
        {
          "id": "15",
          "cells": {
            "source": "B",
            "page": "1",
            "serials": "1–48",
            "control": "47–48 列屬內湖區"
          }
        },
        {
          "id": "16",
          "cells": {
            "source": "B",
            "page": "2",
            "serials": "49–88",
            "control": "內湖標籤驗證 47–58；B69 保留特殊字形"
          }
        }
      ]
    },
    {
      "caption": "統計單位維持區別",
      "columns": [
        {
          "key": "unit",
          "label": "單位"
        },
        {
          "key": "meaning",
          "label": "意義"
        },
        {
          "key": "notEstablished",
          "label": "未建立"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "unit": "A 據點列",
            "meaning": "一筆發布 PDF 紀錄",
            "notEstablished": "唯一營運實體設施"
          }
        },
        {
          "id": "2",
          "cells": {
            "unit": "B 里別列／鍵",
            "meaning": "本版行政區／里別身分",
            "notEstablished": "永久政府里碼／GIS 邊界"
          }
        },
        {
          "id": "3",
          "cells": {
            "unit": "A／E 對應",
            "meaning": "保守一對一研究關係",
            "notEstablished": "認證據點身分或開關站"
          }
        },
        {
          "id": "4",
          "cells": {
            "unit": "時段分類",
            "meaning": "發布類型文字",
            "notEstablished": "實際時間、人力、量能或服務人數"
          }
        }
      ]
    },
    {
      "caption": "520 筆本版 PDF 的 A／E 對帳",
      "columns": [
        {
          "key": "relationship",
          "label": "關係"
        },
        {
          "key": "count",
          "label": "數量"
        },
        {
          "key": "meaning",
          "label": "解讀"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "relationship": "完全一致且接受",
            "count": "427",
            "meaning": "研究對應"
          }
        },
        {
          "id": "2",
          "cells": {
            "relationship": "正規化且接受",
            "count": "66",
            "meaning": "研究對應"
          }
        },
        {
          "id": "3",
          "cells": {
            "relationship": "接受合計",
            "count": "493",
            "meaning": "427 + 66，非額外母體分類"
          }
        },
        {
          "id": "4",
          "cells": {
            "relationship": "不明確",
            "count": "1",
            "meaning": "A #114，待釐清"
          }
        },
        {
          "id": "5",
          "cells": {
            "relationship": "拒絕",
            "count": "9",
            "meaning": "未接受身分對應"
          }
        },
        {
          "id": "6",
          "cells": {
            "relationship": "僅 PDF",
            "count": "17",
            "meaning": "不推論開辦或關閉"
          }
        },
        {
          "id": "7",
          "cells": {
            "relationship": "E 沒有接受對應",
            "count": "17",
            "meaning": "獨立 E 版本，不加入 A"
          }
        }
      ]
    },
    {
      "caption": "受限 A／B 里別鍵比較",
      "columns": [
        {
          "key": "measure",
          "label": "項目"
        },
        {
          "key": "value",
          "label": "數值"
        },
        {
          "key": "qualification",
          "label": "限定"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "measure": "A 不同行政區／里別鍵",
            "value": "368",
            "qualification": "發布來源欄位"
          }
        },
        {
          "id": "2",
          "cells": {
            "measure": "B 唯一接受鍵",
            "value": "88",
            "qualification": "本版文件身分"
          }
        },
        {
          "id": "3",
          "cells": {
            "measure": "正規化 A／B 重疊",
            "value": "0",
            "qualification": "非照顧涵蓋證明"
          }
        },
        {
          "id": "4",
          "cells": {
            "measure": "接受行政區／里別缺值",
            "value": "0",
            "qualification": "接受 A 與 B 文件"
          }
        },
        {
          "id": "5",
          "cells": {
            "measure": "接受來源重複序號",
            "value": "0",
            "qualification": "各來源內"
          }
        }
      ]
    },
    {
      "caption": "模式 A 廣義查核證據分級",
      "columns": [
        {
          "key": "tier",
          "label": "等級"
        },
        {
          "key": "count",
          "label": "筆數"
        },
        {
          "key": "question",
          "label": "查核問題"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "tier": "A",
            "count": "1",
            "question": "主要身分／實質對應衝突"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "B",
            "count": "61",
            "question": "其他文件、類型、時段或版本疑問"
          }
        },
        {
          "id": "3",
          "cells": {
            "tier": "C",
            "count": "458",
            "question": "例行文件核對"
          }
        }
      ]
    },
    {
      "caption": "模式 A：實際名額與策略比較",
      "columns": [
        {
          "key": "capacity",
          "label": "名額"
        },
        {
          "key": "eligible",
          "label": "合格"
        },
        {
          "key": "used",
          "label": "各策略使用"
        },
        {
          "key": "evidenceDistricts",
          "label": "證據優先行政區"
        },
        {
          "key": "balancedDistricts",
          "label": "均衡行政區"
        },
        {
          "key": "shared",
          "label": "共同識別碼"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "capacity": "5",
            "eligible": "520",
            "used": "5",
            "evidenceDistricts": "3",
            "balancedDistricts": "5",
            "shared": "0"
          }
        },
        {
          "id": "2",
          "cells": {
            "capacity": "10",
            "eligible": "520",
            "used": "10",
            "evidenceDistricts": "3",
            "balancedDistricts": "10",
            "shared": "3"
          }
        },
        {
          "id": "3",
          "cells": {
            "capacity": "全部",
            "eligible": "520",
            "used": "520",
            "evidenceDistricts": "12",
            "balancedDistricts": "12",
            "shared": "520"
          }
        }
      ]
    },
    {
      "caption": "模式 B：實際名額與策略比較",
      "columns": [
        {
          "key": "capacity",
          "label": "名額"
        },
        {
          "key": "eligible",
          "label": "合格"
        },
        {
          "key": "used",
          "label": "各策略使用"
        },
        {
          "key": "evidenceDistricts",
          "label": "證據優先行政區"
        },
        {
          "key": "balancedDistricts",
          "label": "均衡行政區"
        },
        {
          "key": "shared",
          "label": "共同識別碼"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "capacity": "5",
            "eligible": "88",
            "used": "5",
            "evidenceDistricts": "1",
            "balancedDistricts": "5",
            "shared": "0"
          }
        },
        {
          "id": "2",
          "cells": {
            "capacity": "10",
            "eligible": "88",
            "used": "10",
            "evidenceDistricts": "1",
            "balancedDistricts": "10",
            "shared": "1"
          }
        },
        {
          "id": "3",
          "cells": {
            "capacity": "全部",
            "eligible": "88",
            "used": "88",
            "evidenceDistricts": "12",
            "balancedDistricts": "12",
            "shared": "88"
          }
        }
      ]
    },
    {
      "caption": "已核對名額 5 的來源列案例",
      "columns": [
        {
          "key": "mode",
          "label": "模式"
        },
        {
          "key": "strategy",
          "label": "策略"
        },
        {
          "key": "row",
          "label": "來源列"
        },
        {
          "key": "district",
          "label": "行政區"
        },
        {
          "key": "village",
          "label": "里別／官方名稱"
        },
        {
          "key": "name",
          "label": "據點／項目"
        },
        {
          "key": "question",
          "label": "文件疑問"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #114",
            "district": "大安區",
            "village": "新龍里",
            "name": "臺北市大安區大安新龍社區發展協會",
            "question": "A／E 對應不明確"
          }
        },
        {
          "id": "2",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #1",
            "district": "士林區",
            "village": "三玉里",
            "name": "士林老人服務中心",
            "question": "時段分類未明"
          }
        },
        {
          "id": "3",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #59",
            "district": "大同區",
            "village": "保安里",
            "name": "社團法人中華無齡酷活協會",
            "question": "跨版本類型差異"
          }
        },
        {
          "id": "4",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #60",
            "district": "大同區",
            "village": "南芳里",
            "name": "社團法人中華國際照顧發展協會",
            "question": "跨版本類型差異"
          }
        },
        {
          "id": "5",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #66",
            "district": "大同區",
            "village": "重慶里",
            "name": "大同老人服務暨日間照顧中心",
            "question": "時段分類未明"
          }
        },
        {
          "id": "6",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #1",
            "district": "士林區",
            "village": "福安里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        },
        {
          "id": "7",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #2",
            "district": "士林區",
            "village": "德華里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        },
        {
          "id": "8",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #3",
            "district": "士林區",
            "village": "社子里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        },
        {
          "id": "9",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #4",
            "district": "士林區",
            "village": "蘭雅里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        },
        {
          "id": "10",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #5",
            "district": "士林區",
            "village": "天和里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        },
        {
          "id": "11",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #33",
            "district": "中山區",
            "village": "中庄里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        },
        {
          "id": "12",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #41",
            "district": "中正區",
            "village": "廈安里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        },
        {
          "id": "13",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #75",
            "district": "信義區",
            "village": "黎安里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        },
        {
          "id": "14",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #47",
            "district": "內湖區",
            "village": "紫陽里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        },
        {
          "id": "15",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #65",
            "district": "北投區",
            "village": "永欣里",
            "name": "官方里別列",
            "question": "穩定來源次序基準"
          }
        }
      ]
    },
    {
      "caption": "已記錄模式 A 名額 5 敏感度；差異相對廣義／全部基準",
      "columns": [
        {
          "key": "scope",
          "label": "來源範圍"
        },
        {
          "key": "category",
          "label": "類型文字"
        },
        {
          "key": "eligible",
          "label": "合格"
        },
        {
          "key": "districts",
          "label": "行政區"
        },
        {
          "key": "selectedRows",
          "label": "入選來源列"
        },
        {
          "key": "shared",
          "label": "共同"
        },
        {
          "key": "added",
          "label": "新增"
        },
        {
          "key": "removed",
          "label": "移除"
        },
        {
          "key": "populationChange",
          "label": "母體變化"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "scope": "僅 PDF",
            "category": "全部文字類型",
            "eligible": "520",
            "districts": "5",
            "selectedRows": "A #1, A #66, A #208, A #229, A #332",
            "shared": "2",
            "added": "3",
            "removed": "3",
            "populationChange": "0"
          }
        },
        {
          "id": "2",
          "cells": {
            "scope": "僅 PDF",
            "category": "據點文字",
            "eligible": "463",
            "districts": "5",
            "selectedRows": "A #1, A #66, A #208, A #229, A #332",
            "shared": "2",
            "added": "3",
            "removed": "3",
            "populationChange": "-57"
          }
        },
        {
          "id": "3",
          "cells": {
            "scope": "僅 PDF",
            "category": "樂齡學堂文字",
            "eligible": "57",
            "districts": "1",
            "selectedRows": "A #12, A #13, A #16, A #24, A #30",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "populationChange": "-463"
          }
        },
        {
          "id": "4",
          "cells": {
            "scope": "接受 A／E 對應",
            "category": "全部文字類型",
            "eligible": "493",
            "districts": "2",
            "selectedRows": "A #1, A #59, A #60, A #66, A #72",
            "shared": "4",
            "added": "1",
            "removed": "1",
            "populationChange": "-27"
          }
        },
        {
          "id": "5",
          "cells": {
            "scope": "接受 A／E 對應",
            "category": "據點文字",
            "eligible": "441",
            "districts": "2",
            "selectedRows": "A #1, A #59, A #60, A #66, A #72",
            "shared": "4",
            "added": "1",
            "removed": "1",
            "populationChange": "-79"
          }
        },
        {
          "id": "6",
          "cells": {
            "scope": "接受 A／E 對應",
            "category": "樂齡學堂文字",
            "eligible": "52",
            "districts": "1",
            "selectedRows": "A #12, A #13, A #16, A #24, A #30",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "populationChange": "-468"
          }
        },
        {
          "id": "7",
          "cells": {
            "scope": "廣義查核",
            "category": "全部文字類型",
            "eligible": "520",
            "districts": "3",
            "selectedRows": "A #114, A #1, A #59, A #60, A #66",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "populationChange": "0"
          }
        },
        {
          "id": "8",
          "cells": {
            "scope": "廣義查核",
            "category": "據點文字",
            "eligible": "463",
            "districts": "3",
            "selectedRows": "A #114, A #1, A #59, A #60, A #66",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "populationChange": "-57"
          }
        },
        {
          "id": "9",
          "cells": {
            "scope": "廣義查核",
            "category": "樂齡學堂文字",
            "eligible": "57",
            "districts": "4",
            "selectedRows": "A #96, A #140, A #147, A #209, A #263",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "populationChange": "-463"
          }
        }
      ]
    },
    {
      "caption": "隱私與發布邊界",
      "columns": [
        {
          "key": "field",
          "label": "欄位／證據"
        },
        {
          "key": "use",
          "label": "實作用途"
        },
        {
          "key": "public",
          "label": "公開候選／摘要"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "field": "里內獨居老人數",
            "use": "僅保留官方來源 PDF",
            "public": "擷取前排除，不參與排序"
          }
        },
        {
          "id": "2",
          "cells": {
            "field": "電話",
            "use": "僅原始來源",
            "public": "擷取時排除"
          }
        },
        {
          "id": "3",
          "cells": {
            "field": "完整場地地址",
            "use": "離線對應與列雜湊",
            "public": "不刊載完整地址"
          }
        },
        {
          "id": "4",
          "cells": {
            "field": "來源列／行政區／里別",
            "use": "文件身分與行政代表性",
            "public": "保留及綁定來源識別碼"
          }
        },
        {
          "id": "5",
          "cells": {
            "field": "居民／家戶／座標",
            "use": "沒有居民資料模型",
            "public": "不包含"
          }
        }
      ]
    },
    {
      "caption": "來源專案記錄檢查與本地量測",
      "columns": [
        {
          "key": "check",
          "label": "檢查／量測"
        },
        {
          "key": "result",
          "label": "記錄結果"
        },
        {
          "key": "boundary",
          "label": "限定"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "check": "型別檢查／正式建置",
            "result": "通過",
            "boundary": "來源記錄證據"
          }
        },
        {
          "id": "2",
          "cells": {
            "check": "Node／Python／政策瀏覽器測試",
            "result": "208 / 20 / 24",
            "boundary": "通過；本案例未重跑"
          }
        },
        {
          "id": "3",
          "cells": {
            "check": "Linux 完整瀏覽器測試",
            "result": "177 通過／1 項預期略過",
            "boundary": "保留原視覺基準"
          }
        },
        {
          "id": "4",
          "cells": {
            "check": "Windows 完整瀏覽器嘗試",
            "result": "165 通過／1 略過／12 視覺失敗",
            "boundary": "平台基準限制"
          }
        },
        {
          "id": "5",
          "cells": {
            "check": "入口原始／gzip KB",
            "result": "400.12 / 116.05",
            "boundary": "預算 450／130 KB"
          }
        },
        {
          "id": "6",
          "cells": {
            "check": "延遲模組原始／gzip KB",
            "result": "≈27 / ≈10.4",
            "boundary": "僅來源應用"
          }
        },
        {
          "id": "7",
          "cells": {
            "check": "快照位元組／gzip 位元組",
            "result": "771155 / 119539",
            "boundary": "不可變來源發布"
          }
        },
        {
          "id": "8",
          "cells": {
            "check": "情境平均／瀏覽器名額切換",
            "result": "≈0.356 ms / 35.1 ms",
            "boundary": "本地量測，非主機保證"
          }
        },
        {
          "id": "9",
          "cells": {
            "check": "來源 npm 稽核",
            "result": "1 項既有高嚴重度弱點",
            "boundary": "本案未解決；Portfolio 另行稽核"
          }
        }
      ]
    },
    {
      "caption": "兩種策略名額 5 的完整來源綁定識別碼",
      "columns": [
        {
          "key": "mode",
          "label": "模式"
        },
        {
          "key": "strategy",
          "label": "策略"
        },
        {
          "key": "row",
          "label": "來源列"
        },
        {
          "key": "district",
          "label": "行政區"
        },
        {
          "key": "village",
          "label": "里別"
        },
        {
          "key": "candidateId",
          "label": "完整候選識別碼"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #114",
            "district": "大安區",
            "village": "新龍里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1"
          }
        },
        {
          "id": "2",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #1",
            "district": "士林區",
            "village": "三玉里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1"
          }
        },
        {
          "id": "3",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #59",
            "district": "大同區",
            "village": "保安里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1"
          }
        },
        {
          "id": "4",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #60",
            "district": "大同區",
            "village": "南芳里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1"
          }
        },
        {
          "id": "5",
          "cells": {
            "mode": "A",
            "strategy": "證據優先",
            "row": "A #66",
            "district": "大同區",
            "village": "重慶里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1"
          }
        },
        {
          "id": "6",
          "cells": {
            "mode": "A",
            "strategy": "均衡",
            "row": "A #147",
            "district": "中山區",
            "village": "下埤里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0147:ff2f1ecb38171f7e34b0f9e211d0821a0c9598ecc933952ef0696e98bb3a6023:1"
          }
        },
        {
          "id": "7",
          "cells": {
            "mode": "A",
            "strategy": "均衡",
            "row": "A #190",
            "district": "中正區",
            "village": "文北里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0190:924f47d87572beefc9ee16e6a76b8e55ad2eb91232b60b9f0a07f961f37be6d3:1"
          }
        },
        {
          "id": "8",
          "cells": {
            "mode": "A",
            "strategy": "均衡",
            "row": "A #431",
            "district": "信義區",
            "village": "泰和里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0431:8491dfc6e35b16d647ac2a80ba68a8499185f9cf7b87cf9d5b0aebb89dd2472e:1"
          }
        },
        {
          "id": "9",
          "cells": {
            "mode": "A",
            "strategy": "均衡",
            "row": "A #226",
            "district": "內湖區",
            "village": "安湖里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0226:7bff6c57fdaad70fe074887970a1c90f00c59376b4134649b1ac4fedf8042e2c:1"
          }
        },
        {
          "id": "10",
          "cells": {
            "mode": "A",
            "strategy": "均衡",
            "row": "A #319",
            "district": "北投區",
            "village": "永和里",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0319:34cd86bda144e93a76e8d245606fb6f3081bfe7ddcbf0b247b5b024f2e8fac35:1"
          }
        },
        {
          "id": "11",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #1",
            "district": "士林區",
            "village": "福安里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0001:54e6eeb5ea7c9c2081182d81f6e9cc468919a972592b3fa6b85bc10b2e9a7c87:1"
          }
        },
        {
          "id": "12",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #2",
            "district": "士林區",
            "village": "德華里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0002:8b1baca7f1aaeb0c5e02a59359595f0ffc8a2766b1abae6c2a374594814b3f2e:1"
          }
        },
        {
          "id": "13",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #3",
            "district": "士林區",
            "village": "社子里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0003:3adbd77d18421da522e6a7d1dfab02dd9ed42fe20472aa5bacf808da454d3d6e:1"
          }
        },
        {
          "id": "14",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #4",
            "district": "士林區",
            "village": "蘭雅里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0004:b8fb2a9431ca506fcb24cfb6f46af9ae64ba18203d88f3efa708d4b08e352f71:1"
          }
        },
        {
          "id": "15",
          "cells": {
            "mode": "B",
            "strategy": "證據優先",
            "row": "B #5",
            "district": "士林區",
            "village": "天和里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0005:336024b3b87346ad440c8b71c2b73598baa34141152c87e8d08f140e91b02103:1"
          }
        },
        {
          "id": "16",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #33",
            "district": "中山區",
            "village": "中庄里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0033:ec4ef1b1960bdc0a3f7c8c3ff7f98e8e7a205984e6fbd0553969cf58dabc11a6:1"
          }
        },
        {
          "id": "17",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #41",
            "district": "中正區",
            "village": "廈安里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0041:ed2743952676a1450225ab4a093dcf4bb0929a0eb63a293747a60564ae1be162:1"
          }
        },
        {
          "id": "18",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #75",
            "district": "信義區",
            "village": "黎安里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0075:89b3bc99e4ba63f1d813f2f7a4ff71665cf3341391529498670c17b590ade727:1"
          }
        },
        {
          "id": "19",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #47",
            "district": "內湖區",
            "village": "紫陽里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0047:833cf3122c1f21f86fb96c634932b8969c3f50d4ee6e777c99eff9fb3c63f98b:1"
          }
        },
        {
          "id": "20",
          "cells": {
            "mode": "B",
            "strategy": "均衡",
            "row": "B #65",
            "district": "北投區",
            "village": "永欣里",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0065:32e0a80a438d88cf934f1811b88db86f4db9400c6755f260b844817cf587acd5:1"
          }
        }
      ]
    },
    {
      "caption": "九組已記錄敏感度比較的完整識別碼",
      "columns": [
        {
          "key": "scope",
          "label": "來源範圍"
        },
        {
          "key": "category",
          "label": "類型文字"
        },
        {
          "key": "selectedIds",
          "label": "入選識別碼"
        },
        {
          "key": "sharedIds",
          "label": "共同識別碼"
        },
        {
          "key": "addedIds",
          "label": "新增識別碼"
        },
        {
          "key": "removedIds",
          "label": "移除識別碼"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "scope": "僅 PDF",
            "category": "全部文字類型",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0208:060c8b2b0bb06d0a64b4cab725e0db14deeb2591bba13d0c03becf1d46ff4754:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0229:4da94742b203ae757541860c2a98c7ca93ca4b5022e1555b04c5340e2a3ae742:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0332:c22cd356a25479c4975d0d6c17dd72164c0a3309503d90e93023696be6c44447:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0208:060c8b2b0bb06d0a64b4cab725e0db14deeb2591bba13d0c03becf1d46ff4754:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0229:4da94742b203ae757541860c2a98c7ca93ca4b5022e1555b04c5340e2a3ae742:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0332:c22cd356a25479c4975d0d6c17dd72164c0a3309503d90e93023696be6c44447:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1"
          }
        },
        {
          "id": "2",
          "cells": {
            "scope": "僅 PDF",
            "category": "據點文字",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0208:060c8b2b0bb06d0a64b4cab725e0db14deeb2591bba13d0c03becf1d46ff4754:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0229:4da94742b203ae757541860c2a98c7ca93ca4b5022e1555b04c5340e2a3ae742:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0332:c22cd356a25479c4975d0d6c17dd72164c0a3309503d90e93023696be6c44447:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0208:060c8b2b0bb06d0a64b4cab725e0db14deeb2591bba13d0c03becf1d46ff4754:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0229:4da94742b203ae757541860c2a98c7ca93ca4b5022e1555b04c5340e2a3ae742:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0332:c22cd356a25479c4975d0d6c17dd72164c0a3309503d90e93023696be6c44447:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1"
          }
        },
        {
          "id": "3",
          "cells": {
            "scope": "僅 PDF",
            "category": "樂齡學堂文字",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0012:8616f5afca584c0adf81a2f5355b024556256458898357d9607b4dd97d52ec07:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0013:f21acbd5aa0a4c9628b02ffcbc4b4802eff736d629403cfb097a41ac67443b7c:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0016:1f86652b47ab56c1385285b63a7ef1be2ab5de271139be9093b6776be2058b04:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0024:5935be152d572520133b39b7c8ed2a408a64bf068d98217f3ac27c69710eaa17:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0030:c846fbec74243965bbcd21e9353b607a0366bd62bab32d46bd0e82ef4fd8a336:1",
            "sharedIds": "無",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0012:8616f5afca584c0adf81a2f5355b024556256458898357d9607b4dd97d52ec07:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0013:f21acbd5aa0a4c9628b02ffcbc4b4802eff736d629403cfb097a41ac67443b7c:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0016:1f86652b47ab56c1385285b63a7ef1be2ab5de271139be9093b6776be2058b04:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0024:5935be152d572520133b39b7c8ed2a408a64bf068d98217f3ac27c69710eaa17:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0030:c846fbec74243965bbcd21e9353b607a0366bd62bab32d46bd0e82ef4fd8a336:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1"
          }
        },
        {
          "id": "4",
          "cells": {
            "scope": "接受 A／E 對應",
            "category": "全部文字類型",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0072:8296d6596378603b882cab852ed95d3b666ad9dafd4230d01c95aafabeac5fd1:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0072:8296d6596378603b882cab852ed95d3b666ad9dafd4230d01c95aafabeac5fd1:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1"
          }
        },
        {
          "id": "5",
          "cells": {
            "scope": "接受 A／E 對應",
            "category": "據點文字",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0072:8296d6596378603b882cab852ed95d3b666ad9dafd4230d01c95aafabeac5fd1:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0072:8296d6596378603b882cab852ed95d3b666ad9dafd4230d01c95aafabeac5fd1:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1"
          }
        },
        {
          "id": "6",
          "cells": {
            "scope": "接受 A／E 對應",
            "category": "樂齡學堂文字",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0012:8616f5afca584c0adf81a2f5355b024556256458898357d9607b4dd97d52ec07:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0013:f21acbd5aa0a4c9628b02ffcbc4b4802eff736d629403cfb097a41ac67443b7c:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0016:1f86652b47ab56c1385285b63a7ef1be2ab5de271139be9093b6776be2058b04:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0024:5935be152d572520133b39b7c8ed2a408a64bf068d98217f3ac27c69710eaa17:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0030:c846fbec74243965bbcd21e9353b607a0366bd62bab32d46bd0e82ef4fd8a336:1",
            "sharedIds": "無",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0012:8616f5afca584c0adf81a2f5355b024556256458898357d9607b4dd97d52ec07:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0013:f21acbd5aa0a4c9628b02ffcbc4b4802eff736d629403cfb097a41ac67443b7c:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0016:1f86652b47ab56c1385285b63a7ef1be2ab5de271139be9093b6776be2058b04:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0024:5935be152d572520133b39b7c8ed2a408a64bf068d98217f3ac27c69710eaa17:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0030:c846fbec74243965bbcd21e9353b607a0366bd62bab32d46bd0e82ef4fd8a336:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1"
          }
        },
        {
          "id": "7",
          "cells": {
            "scope": "廣義查核",
            "category": "全部文字類型",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "無",
            "removedIds": "無"
          }
        },
        {
          "id": "8",
          "cells": {
            "scope": "廣義查核",
            "category": "據點文字",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "無",
            "removedIds": "無"
          }
        },
        {
          "id": "9",
          "cells": {
            "scope": "廣義查核",
            "category": "樂齡學堂文字",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0096:20f236a5ff60353e06f76ea5766860f9fe213e77a948f434ea3abdf0f1cc3d85:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0140:88a3bcd33dbef4218bf664fc3ed9f48c65aa65ba758a61d0a5695b390ddf556a:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0147:ff2f1ecb38171f7e34b0f9e211d0821a0c9598ecc933952ef0696e98bb3a6023:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0209:75327893b27e35ca16fc99305096559ca6ac34dfe230a648748a4799a45d7943:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0263:5745f9dcfbd686430223b62fa008594b6613562947e8b8b91853d10239080734:1",
            "sharedIds": "無",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0096:20f236a5ff60353e06f76ea5766860f9fe213e77a948f434ea3abdf0f1cc3d85:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0140:88a3bcd33dbef4218bf664fc3ed9f48c65aa65ba758a61d0a5695b390ddf556a:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0147:ff2f1ecb38171f7e34b0f9e211d0821a0c9598ecc933952ef0696e98bb3a6023:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0209:75327893b27e35ca16fc99305096559ca6ac34dfe230a648748a4799a45d7943:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0263:5745f9dcfbd686430223b62fa008594b6613562947e8b8b91853d10239080734:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1"
          }
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": "官方據點來源頁",
      "url": "https://dosw.gov.taipei/News_Content.aspx?n=222C9779823FA161&s=0CE286F6AA2F930F&sms=E2A8B6B533500CB0"
    },
    {
      "label": "官方尚未布建里別來源頁",
      "url": "https://dosw.gov.taipei/News_Content.aspx?n=63FBD779B8854D69&s=207B5C83CE31EEAE"
    },
    {
      "label": "官方方案實施計畫",
      "url": "https://laws.gov.taipei/Law/LawSearch/LawArticleContent/FL078396"
    },
    {
      "label": "來源可行性與版本稽核",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-source-feasibility.md"
    },
    {
      "label": "PDF 擷取控制",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-pdf-extraction-audit.md"
    },
    {
      "label": "來源綁定身分契約",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-identity-contract.md"
    },
    {
      "label": "查核方法",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-methodology.md"
    },
    {
      "label": "繁體中文實作研究",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-decision-mvp.zh-TW.md"
    },
    {
      "label": "全部基準結果與入選識別碼",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-results.json"
    },
    {
      "label": "記錄效能與敏感度",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-performance.json"
    },
    {
      "label": "接受原始來源清單",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/data/raw/senior-care-policy/manifest.json"
    },
    {
      "label": "雜湊綁定擷取稽核",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/data/raw/senior-care-policy/extraction-audit.json"
    },
    {
      "label": "不可變發布指標",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/public/policy/senior-care-policy/current.json"
    },
    {
      "label": "不可變政策快照",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/public/policy/senior-care-policy/snapshot-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c.json"
    },
    {
      "label": "確定性 Python 解析器",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/scripts/seniorCarePolicyPdf.py"
    },
    {
      "label": "離線對帳與發布",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/scripts/buildSeniorCarePolicySnapshot.ts"
    },
    {
      "label": "情境與安全匯出實作",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/lib/seniorCarePolicy.ts"
    },
    {
      "label": "完整性驗證本機載入器",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/lib/loadSeniorCarePolicy.ts"
    },
    {
      "label": "雙語查核儀表板",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/SeniorCarePolicyDashboard.tsx"
    },
    {
      "label": "解析／擷取迴歸測試",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/scripts/seniorCarePolicyPdf.test.py"
    },
    {
      "label": "身分、情境與匯出測試",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/lib/seniorCarePolicy.test.ts"
    },
    {
      "label": "政策瀏覽器迴歸檢查",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/tests/e2e/senior-care-policy.spec.ts"
    },
    {
      "label": "已複核英文桌面截圖：固定版本本機研究介面",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-en-1440.png"
    },
    {
      "label": "已複核中文桌面截圖：固定版本本機研究介面",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-zh-1440.png"
    },
    {
      "label": "已複核中文行動截圖：固定版本本機研究介面",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-zh-390.png"
    }
  ],
  "previewAssets": [
    {
      "label": "已複核英文桌面截圖：固定版本本機研究介面",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-en-1440.png"
    },
    {
      "label": "已複核中文桌面截圖：固定版本本機研究介面",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-zh-1440.png"
    },
    {
      "label": "已複核中文行動截圖：固定版本本機研究介面",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-zh-390.png"
    }
  ],
  "futureExtensions": [
    "審查來源刷新，由管理者確認對應／類型疑問",
    "相容權威里別名冊與另行驗證地理證據",
    "模式 C 前備妥經隱私審查營運、量能、使用與可近性證據"
  ],
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "senior-community-care-evidence-review-v1",
    "explanation": "先匹配文件證據分級、套用明確資格篩選，再採證據優先或行政區輪流選取；沒有加權配置、脆弱度分數或居民需求模型。",
    "thresholds": {
      "caption": "資格與策略規則",
      "columns": [
        {
          "key": "rule",
          "label": "規則"
        },
        {
          "key": "behavior",
          "label": "已實作行為"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "rule": "模式 A",
            "behavior": "520 筆 A 列，選取前套用範圍"
          }
        },
        {
          "id": "2",
          "cells": {
            "rule": "模式 B",
            "behavior": "88 筆驗證唯一文件鍵"
          }
        },
        {
          "id": "3",
          "cells": {
            "rule": "證據優先",
            "behavior": "等級再穩定識別碼；B 基準為來源次序"
          }
        },
        {
          "id": "4",
          "cells": {
            "rule": "均衡",
            "behavior": "行政區輪流，區內保留等級／識別碼順序"
          }
        },
        {
          "id": "5",
          "cells": {
            "rule": "名額",
            "behavior": "5／10／全部，不超過合格數"
          }
        },
        {
          "id": "6",
          "cells": {
            "rule": "模式 C",
            "behavior": "不可用：缺營運、量能、可近性及成果證據"
          }
        }
      ]
    },
    "tiers": {
      "caption": "模式 A 廣義查核證據分級",
      "columns": [
        {
          "key": "tier",
          "label": "等級"
        },
        {
          "key": "count",
          "label": "筆數"
        },
        {
          "key": "question",
          "label": "查核問題"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "tier": "A",
            "count": "1",
            "question": "主要身分／實質對應衝突"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "B",
            "count": "61",
            "question": "其他文件、類型、時段或版本疑問"
          }
        },
        {
          "id": "3",
          "cells": {
            "tier": "C",
            "count": "458",
            "question": "例行文件核對"
          }
        }
      ]
    },
    "notes": [
      "A 1／B 61／C 458 是文件問題，不是照顧品質。",
      "來源範圍可同時改變分級及資格，須保留精確設定。",
      "沒有完整里別分母、地理可近性模型或人口評分。"
    ]
  }
};
