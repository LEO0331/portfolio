import type { GovTechCase } from "../types/govtechCase";

export const bridgeInspectionCaseZh: GovTechCase = {
  "id": "bridge-inspection",
  "slug": "bridge-inspection",
  "displayNumber": "009",
  "projectId": "taipei-safety-map",
  "policyDomain": "防災整備與公共安全",
  "sourceRepository": "https://github.com/LEO0331/taipei-safety-map",
  "sourceVersion": "deb812b3472c078b5879727953e85d2850f0a82c",
  "snapshotVersion": "bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a",
  "title": "臺北市橋梁檢測與維護決策支援",
  "summary": "從官方橋梁紀錄到保守資產對帳、受限地理准入與可重現文件查核情境。",
  "maturity": "decision-support-poc",
  "maturityLabel": "已完成證據查核及受限地理研究 POC",
  "reviewNote": "216 筆本版研究對應，194 筆通過地理准入；沒有官方 A↔B 對照，模式 C 結構評估仍不可用。",
  "intendedUsers": "基礎設施資料管理者、工務分析人員、資產管理者、檢測文件團隊與公民工程研究者。",
  "implementedCapabilities": [
    "兩個官方來源與原始位元組追溯",
    "保守本版身分對帳",
    "獨立座標／類型准入",
    "確定性分級、名額與行政均衡",
    "資格敏感度與可稽核 JSON／CSV 匯出"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "政策問題與決策範圍",
      "paragraphs": [
        "當市政調查量能有限，應先查核哪些公開橋梁檢測與維護紀錄的身分衝突、文件缺漏或來源差異？可搜尋表格本身不能解決紀錄的語意、身分與證據資格。",
        "本 POC 為基礎設施資料管理者、工務分析人員、資產清冊管理者、檢測文件團隊與公民工程研究者分配行政查核名額。發布紀錄、清冊列、研究對應、地理准入與查核優先序是不同證據單位；結構安全評估需要另一組工程證據。"
      ]
    },
    {
      "id": "evolution",
      "title": "從公共安全探索工具演進至 Policy #9",
      "paragraphs": [
        "既有雙語 taipei-safety-map 整理緊急應變／資源、基礎設施與歷史公共安全資料，不產生綜合安全分數。獨立橋梁透明目錄含 416 筆發布列、415 個來源內分組，原本沒有已驗證的檢測紀錄地理連結。",
        "Policy #9 新增雙來源擷取、原始位元組治理、保守資產對帳、地理篩查、確定性證據分級、5／10／全部情境及可稽核匯出。歷史探索工具與資料版本維持分開。PR #6 已於固定來源 commit 合併；交付文件中「PR 建立受阻」的合併前文字屬歷史。"
      ]
    },
    {
      "id": "sources",
      "title": "官方檢測與資產清冊版本",
      "paragraphs": [
        "來源 A「臺北市橋梁檢測及維修資料」，dataset 27135efa-d43e-406d-a3e4-fcb07efb3982、resource 9a1f7632-67e1-4d81-bcb0-6a6b4c721868，為 416 列 CSV、47,974 位元組，資源更新 2025-06-23T15:55:02+08:00。來源 B「臺北市橋梁資訊」，dataset 866a9982-0a63-421f-b120-9144fc6ce732、resource 68d6c971-d077-4578-a52e-e42db765f861，為 612 列 JSON、561,387 位元組，資源更新 2025-12-16T09:41:34+08:00。",
        "兩目錄均列臺北市政府工務局新建工程處、UTF-8、不定期更新及政府資料開放授權條款第 1 版。目錄中繼資料更新為 A 的 2026-09-22T19:09:08+08:00 與 B 的 19:13:04+08:00，並非檢測事件日。實際接受擷取完成於 2026-10-23T04:03:31.388Z 與 04:03:32.360Z；分析日另固定為 2026-10-23。"
      ]
    },
    {
      "id": "lineage",
      "title": "原始位元組、換行譜系與來源准入",
      "paragraphs": [
        "接受的原始位元組 SHA-256 為 A：3b6d39373759036e725412474636ea328828297902990ca319452893e05121ee；B：f9626b5f21bc392fbb3199962749d14daf73aa7840057346b648999c8cb49910。Git 中歷史 A 為 LF 正規化的 47,557 位元組表示，雜湊 ee4afe5592522651403d2d6173f59620884857b1d5129b83498b4eab0e3701fc。接受下載使用 CRLF，解析後原始欄位相同，不能據此宣稱檢測資料修訂。",
        "歷史原始取得時間未知，不能從 checkout 換行或檔案時間還原。政策原始檔／輸出停用 Git 換行正規化。預設離線驗證；明確刷新才分階段發出四個目錄／資源請求，限定 HTTPS 主機、拒絕轉址、30 秒逾時與 5 MB 上限，失敗不得升格接受。A 版本改變須另行審查，保留歷史探索工具。"
      ]
    },
    {
      "id": "units",
      "title": "統計單位與檢測資料品質",
      "paragraphs": [
        "A 有 416 來源列，但歷史及保守複合分組均為 415。一個表面相同的分組內有兩列文件值衝突，兩列仍分別追溯。列身分包含原始來源雜湊前綴、解析 CSV 紀錄列號與標準原始欄位雜湊；來源序號與 CSV 列號分開保留。",
        "缺漏為檢測年度 1、維護年度 314、維護經費 317；416 列均發布檢測結果，未發現格式錯誤年度或經費。未公開維護年度不能證明未維護，經費缺漏為 null，不是零支出。來源列或名稱／區／機關複合分組都不認證實體橋梁總數。"
      ]
    },
    {
      "id": "inventory",
      "title": "清冊識別碼、碰撞與範圍",
      "paragraphs": [
        "B 有 612 列及 612 個不同來源 ID。455 列 bridge_id 非空，包含 413 個不同值；404 列具有唯一非空 ID，51 列共用 9 個重複 ID，157 列空白。來源 ID、版本綁定清冊列及 bridge_id 適用不同契約；僅 bridge_id 空白不會排除其他條件唯一的研究對應。",
        "清冊管理單位為新建工程處 427、大地工程處 31、水利工程處 153、公園路燈工程管理處 1；類型為橋梁 580、箱涵 28、其他 4。inspect_rate 的 12 個月有 57 列、24 個月有 555 列。這不代表入選查核均衡四機關，也不證明每個週期適用於檢測事件。三組各兩列的重複物件座標仍保留不同紀錄。"
      ]
    },
    {
      "id": "identity",
      "title": "保守跨來源身分對帳",
      "paragraphs": [
        "未建立官方權威 A↔B 對照表。完全名稱研究比對僅正規化全形 ASCII、空白與臺／台；括號、方向、編號及後綴仍有辨識作用，例如橋①不會正規化成橋1。名稱還須與發布行政區及主管機關相容，機關別名僅移除完整市府工務局前綴。",
        "准入須唯一相容候選、有效且唯一來源 ID，且無不合格的重複 bridge_id。多候選、錯誤 ID 及被重複使用的清冊候選保留歧義；同名但區／機關衝突則拒絕連結。不採無限制模糊或距離比對；名稱複合值不能建立跨期或實體身分。"
      ]
    },
    {
      "id": "associations",
      "title": "已接受、歧義、未通過及無對應",
      "paragraphs": [
        "A 的實際結果為 216 筆本版研究用途對應、5 筆歧義、18 筆行政區／機關不相容、177 筆無正規化名稱對應，合計 416。接受對應涉及 216 列 B；396 列 B 沒有接受對應，其中 374 列在 A 無正規化名稱對應。",
        "兩列 A 有多個同名候選，另有一列原可相容者因多對一衝突受阻。這些診斷可能重疊，不是額外母體分類。未接受者不能繼承清冊 ID、週期或座標；文件連結接受後仍須獨立通過地理／類型閘門，任何對應都不是政府認證。"
      ]
    },
    {
      "id": "geography",
      "title": "地理證據篩查與准入",
      "paragraphs": [
        "B 分別發布 Obj_Longitude／Obj_Latitude、Longitude_start／Latitude_start、Longitude_end／Latitude_end。有限純量數值須在臺灣東經119–123／北緯21–26，物件點另限臺北粗範圍東經121.4–121.7／北緯24.9–25.3，且 CountyCode63000 與 AreaCode 須可辨識。軸向反置、空字串、陣列與布林不能轉成座標。",
        "可用物件／端點各自檢查粗略矛盾：物件至端點超過12公里或兩端點超過15公里即排除。端點缺漏保留限制，不自動排除其他條件合理的物件點。本版612組座標均合理；排除32筆非橋梁類型（28箱涵／4其他）後為580清冊參考點。接受216減22筆類型／地理排除，得194筆可繪圖文件紀錄；416筆 A 中222筆沒有准入檢測地理。",
        "Portfolio 於2026-10-23補做獨立地理檢查：保存民政局官方12區界ZIP（20220915版本）的原始位元組與實際PRJ；區界為TWD97／TM2中央經線121°E（EPSG:3826）。明示假設橋梁經緯度為EPSG:4326，離線分別檢查物件點、起點及終點，保留孔洞、多部件、邊界及多重命中狀態。",
        "原194筆模式B文件紀錄中，192個物件點落在保留版市界內、2個在外；內部點180個與來源行政區一致、12個落在不同區。起／終點在市界內分別192／187個；24個物件點距區界20m內。這些是補充查核旗標，不自動更正來源或新增排除；原boundaryValidated:false及194筆母體維持不變。橋梁目錄未宣告datum，條件式落區檢查不能認證橋梁座標基準、測量線形、現行區界或行政責任。"
      ]
    },
    {
      "id": "tiers",
      "title": "模式 A 證據分級",
      "paragraphs": [
        "方法 bridge-inspection-evidence-review-v1 採第一個符合的定性規則。A 級為錯誤／未來年度、缺名、分組衝突、重複序號、歧義或未通過身分。B 級為其他文件問題，包括缺漏、無對應、週期或結果術語未驗證與地理排除。C 級才是無待釐清問題的例行追蹤。",
        "正式資料 A23／B393／C0。每列都保留 result-terminology-unverified，因此 C 為零有明確原因。模式 A 的416列不需地理准入仍可查核。不設加權危險分數；缺漏、經費、年代及尺寸不能量化結構狀況或居民風險。"
      ],
      "content": "methodology"
    },
    {
      "id": "mode-a",
      "title": "模式 A 名額與行政分組代表性",
      "paragraphs": [
        "證據缺口優先先依 A／B／C，再依來源綁定 ID 的字碼序；字典 ID 刻意不等於數值列號排序。行政分組均衡查核依行政區字串 Unicode 順序輪流取各佇列，區內保留分級／ID 優先。先篩選再取名額；5／10／全部是文件工作量，不是修繕預算。",
        "名額5：缺口5A／2組，均衡2A+3B／5組，共有0ID。名額10：10A／5組對4A+6B／10組，共有1ID。全部為相同416成員、23A+393B、28個發布行政標籤，順序可不同。跨區字串不被合併，28標籤不是28個認證地理區。所有入選集合只有 A 的新建工程處，並非均衡 B 的四個管理單位。"
      ]
    },
    {
      "id": "mode-b",
      "title": "模式 B 地理文件群體",
      "paragraphs": [
        "模式 B 已完成，可用於194筆具有本版接受對應且 B 參考點准入的 A 文件列，另222筆排除。獨立清冊圖層有580個合格參考列，兩群體不能互換。文件資格放寬不會讓歧義或拒絕列自動取得座標。",
        "官方標籤與合理度數支持顯示，但未完成權威 CRS／基準認證、投影轉換或行政區多邊形歸屬驗證；boundaryValidated 仍為 false。物件點不必然為橋梁中心、入口或測量線形，端點也不能認證橋軸。藍色標記須接受身分與篩查後才附檢測原文；灰色清冊標記不附檢測結果。"
      ]
    },
    {
      "id": "scenarios",
      "title": "模式 A 與模式 B 實際情境",
      "paragraphs": [
        "地理子集全部為194筆 B 級。名額5代表1對5個發布分組，共有0ID；名額10代表2對10組，共有2ID；全部194成員在兩策略均代表12來源分組。這些是受限行政研究清單，代表性或近鄰都不證明資金公平或安全。",
        "上游地圖最多顯示200點，候選卡每頁20筆，前200個清冊點另有每頁20列文字等價資訊。顯示上限不是612來源列或580合格清冊點的完整母體。下表僅列有意義的前五個完整來源綁定 ID；固定結果匯出保留全部10名額及全選清單。"
      ],
      "content": "scenarios"
    },
    {
      "id": "sensitivity",
      "title": "證據資格敏感度與來源文字差異",
      "paragraphs": [
        "預設模式 A 缺口優先、名額5納入416；僅接受216、接受或歧義文件221、接受且地理合格194、僅重大衝突23。比較精確 ID 與第一命中排除理由，不能把母體改變當政策成效。文件准入放寬不授予地理資格。",
        "執行程式及發布結果優先於不一致文字：僅接受與地理合格的前五筆相同（r102–r106）；接受或歧義則選出五筆歧義 A 級。三種身分／地理限制都替換預設五筆；僅重大衝突雖縮為23列，仍保留預設五筆。如實揭露穩定與差異，不製造敏感度效果。"
      ]
    },
    {
      "id": "examples",
      "title": "真實紀錄與保守排除",
      "paragraphs": [
        "安泰橋（A第24列、序號23）接受對應並地理准入，為 B 級，問題是檢測術語與維護完整度。康樂橋（第23列、序號22）有歧義，沒有檢測連結標記。社教館人行地下道（第2列）無同名對應，不虛構清冊關係；中正橋（第311列）缺發布檢測年度，應釐清而非判定逾期。",
        "康忠橋（A第63列）文件對應接受，但未通過橋梁類型地理閘門。水源高架匝道C（B第1列、ID45551、bridge_idD021）為僅清冊範例，有重複橋梁 ID 旗標且未附檢測結果。青礐橋（B第25列、ID28769）座標數值合理但屬箱涵，刻意排除橋梁地圖。類型排除不代表疏於維護或不安全；固定結果保留完整 ID 與原始欄位。"
      ]
    },
    {
      "id": "time",
      "title": "年度檢測與維護經費語意",
      "paragraphs": [
        "最近一期檢測年度、最近一期維護年度保守解析民國或西元年，月／日維持 null。與固定分析日的曆年差不是實際現勘後經過的已驗證期間。B inspect_rate 是月／次，但適用義務、豁免、來源版本一致性及真實事件日期未驗證。",
        "引擎不計算確定逾期率或法規符合性。經費空白為 null，只有明示零才是零；解析值旁保留來源原文。年度缺漏、支出及發布結果術語不能決定修繕急迫性、封橋或結構狀況。"
      ]
    },
    {
      "id": "architecture",
      "title": "靜態架構、完整性與匯出",
      "paragraphs": [
        "離線擷取與嚴格 CSV／JSON 驗證先保存原始欄位，建立版本綁定列身分，再保守對帳及篩查座標／類型，產生快照。瀏覽器情境僅篩選及排序保留候選。重用既有 React 導航、語系型別、Leaflet、CSV 解析器與探索工具契約，不新增依賴或正式後端。",
        "快照內容 ID 雜湊不含自我參照的標準 payload；精確檔案 SHA-256 另雜湊排版後位元組。先寫不可變檔，再原子更名指標。模組進入才載入 current.json 與指定檔，瀏覽器驗證版本／名稱、SHA-256、policyId、snapshotId，錯誤時提供重試。PWA 隨需取得政策資產，以網路優先指標搭配不可變檔快取。",
        "JSON／CSV 保留來源雜湊、方法、設定、排除及實際選取；CSV 引號與公式前綴防護涵蓋前導控制／空白字元。完整追溯僅放第一資料列，空選取也保留，避免中繼資料平方膨脹。來源及選取範圍上限10000，下載上限20MB。作品集僅呈現撰寫摘要與連結，不執行情境引擎或擷取政策快照。"
      ],
      "content": "architecture"
    },
    {
      "id": "verification",
      "title": "驗證、效能與可重現性",
      "paragraphs": [
        "Portfolio 後續實際執行固定版本的完整上游原始測試：7檔／88項通過、TypeScript production build通過；原始發布驗證器重建兩次，Snapshot與current pointer位元組完全一致，A／B接受版原始位元組亦重新核對。這是本機不可變快照／原子指標發布，未遠端發布或更換政策版本。測試涵蓋來源與原子失敗、識別衝突、年度語意、地理閘門、情境與CSV安全；上游既有約891kB主bundle警告仍保留。",
        "記錄快照為1912829位元組／gzip142453；延遲政策儀表板約34kB壓縮前／gzip11.9kB。100次本機 Node 均衡情境平均約0.202ms，全選 JSON245553位元組、CSV107549。這些是上游量測，不是作品集重新量測或公網延遲保證。初始本機預覽零政策請求，首次進入四個，保留歷史目錄與篩選狀態。",
        "獨立重播保留實際命令、日誌、重建結果與可攜驗證器。原始程式產生的效能報告另行保存後，還原該報告使上游checkout保持乾淨，未修改政策輸入或原始程式。原桌機／手機瀏覽器及網路觀察仍屬上游紀錄；Portfolio另驗證依賴稽核、路由、響應主題與官方多邊形補充統計，未宣稱重跑上游瀏覽器或遠端部署。"
      ],
      "content": "evidence",
      "links": [
        {
          "label": "上游本機預覽：桌面證據查核控制",
          "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-desktop.png"
        },
        {
          "label": "上游本機預覽：行動證據模式",
          "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-mobile.png"
        }
      ]
    },
    {
      "id": "mode-c",
      "title": "模式 C 結構安全證據閘門",
      "paragraphs": [
        "模式 C 仍不可用。欠缺正式工程檢測報告、構件缺陷、載重評等、設計容量、劣化歷程、工程完成、適用豁免、現行限制與實際現況；發布結果文字也沒有獨立接受的工程術語契約。",
        "行政證據分級、接受研究名稱、合理點位、較舊發布年度及經費缺漏，都不能認證安全、預測失效、建立逾期義務或授權修繕、封橋及維護排程。地理資格只改變研究顯示群體。"
      ]
    },
    {
      "id": "future",
      "title": "後續證據與負責任使用",
      "paragraphs": [
        "擴大推論前先取得官方 A↔B 對照、識別碼範圍、完整事件日、工程術語與報告語意。測量幾何、官方 CRS／界線契約可支援更精確地理研究；完全名稱規則可能漏掉真實關係，但保留追溯而不虛構涵蓋。",
        "此獨立 POC 展示擷取治理、保守連結、靜態完整性、確定性行政查核及明確證據閘門；未建立政府合作或已採用檢測／維護決策。新來源版本須經審查准入及方法版本管理，保留不變與負面結果以供重現。"
      ],
      "content": "future"
    }
  ],
  "architecture": [
    "臺北官方 A／B",
    "有限離線擷取",
    "原始位元組與 SHA-256",
    "結構與中繼資料稽核",
    "來源列身分",
    "保守 A↔B 研究對應",
    "座標／類型准入",
    "不可變證據快照",
    "模式 A／地理模式 B 子集",
    "確定性 5／10／全部情境",
    "延遲雙語 React 儀表板",
    "可稽核 JSON／CSV 匯出"
  ],
  "architectureNote": "上游實際管線的簡化圖；作品集僅呈現靜態摘要與連結，不執行橋梁擷取、對帳或 GIS。",
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "bridge-inspection-evidence-review-v1",
    "explanation": "版本1，分析日固定2026-10-23。證據問題採第一命中定性規則，不是加權結構危險分數。",
    "thresholds": {
      "caption": "獨立證據閘門",
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
            "rule": "416來源列，不需地理"
          }
        },
        {
          "id": "1",
          "cells": {
            "mode": "B",
            "rule": "194接受且地理准入，排除222"
          }
        },
        {
          "id": "2",
          "cells": {
            "mode": "C",
            "rule": "缺工程報告、缺陷與適用義務，不可用"
          }
        }
      ]
    },
    "tiers": {
      "caption": "文件優先序",
      "columns": [
        {
          "key": "tier",
          "label": "分級"
        },
        {
          "key": "rule",
          "label": "規則"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "tier": "A",
            "rule": "主要身分／文件衝突：23"
          }
        },
        {
          "id": "1",
          "cells": {
            "tier": "B",
            "rule": "其他文件問題：393"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "C",
            "rule": "無待釐清問題的例行查核：0"
          }
        }
      ]
    },
    "notes": [
      "缺口優先：分級後依來源綁定 ID 字典序。",
      "均衡：Unicode 行政分組佇列，組內依分級／ID。",
      "文件准入放寬不授予座標。",
      "名額是調查工作量，不是安全或支出分數。"
    ]
  },
  "scenarioTables": [
    {
      "caption": "官方來源版本",
      "columns": [
        {
          "key": "source",
          "label": "來源"
        },
        {
          "key": "dataset",
          "label": "資料集"
        },
        {
          "key": "updated",
          "label": "資源更新"
        },
        {
          "key": "rows",
          "label": "列數"
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
            "source": "A",
            "dataset": "27135efa-d43e-406d-a3e4-fcb07efb3982",
            "updated": "2025-06-23T15:55:02+08:00",
            "rows": "416",
            "bytes": "47974",
            "sha256": "3b6d39373759036e725412474636ea328828297902990ca319452893e05121ee"
          }
        },
        {
          "id": "1",
          "cells": {
            "source": "B",
            "dataset": "866a9982-0a63-421f-b120-9144fc6ce732",
            "updated": "2025-12-16T09:41:34+08:00",
            "rows": "612",
            "bytes": "561387",
            "sha256": "f9626b5f21bc392fbb3199962749d14daf73aa7840057346b648999c8cb49910"
          }
        }
      ]
    },
    {
      "caption": "A 來源品質：紀錄不是實體橋梁",
      "columns": [
        {
          "key": "metric",
          "label": "指標"
        },
        {
          "key": "count",
          "label": "數量"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "metric": "來源列",
            "count": "416"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "來源內分組",
            "count": "415"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "缺檢測年度",
            "count": "1"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "缺維護年度",
            "count": "314"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "缺維護經費",
            "count": "317"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "已發布檢測結果",
            "count": "416"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "錯誤年度",
            "count": "0"
          }
        },
        {
          "id": "7",
          "cells": {
            "metric": "錯誤經費",
            "count": "0"
          }
        }
      ]
    },
    {
      "caption": "B 來源身分：識別碼語意分開",
      "columns": [
        {
          "key": "metric",
          "label": "指標"
        },
        {
          "key": "count",
          "label": "數量"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "metric": "清冊列",
            "count": "612"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "不同來源 ID",
            "count": "612"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "非空 bridge_id 列",
            "count": "455"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "不同非空 bridge_id",
            "count": "413"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "唯一非空 ID 列",
            "count": "404"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "重複 ID 所在列",
            "count": "51"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "重複 ID 值",
            "count": "9"
          }
        },
        {
          "id": "7",
          "cells": {
            "metric": "空白 bridge_id 列",
            "count": "157"
          }
        }
      ]
    },
    {
      "caption": "跨來源研究對應：無官方權威對照",
      "columns": [
        {
          "key": "status",
          "label": "結果"
        },
        {
          "key": "rows",
          "label": "A 列"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "status": "接受研究對應",
            "rows": "216"
          }
        },
        {
          "id": "1",
          "cells": {
            "status": "歧義",
            "rows": "5"
          }
        },
        {
          "id": "2",
          "cells": {
            "status": "行政區／機關拒絕",
            "rows": "18"
          }
        },
        {
          "id": "3",
          "cells": {
            "status": "無同名對應",
            "rows": "177"
          }
        }
      ]
    },
    {
      "caption": "獨立地理／類型准入",
      "columns": [
        {
          "key": "metric",
          "label": "指標"
        },
        {
          "key": "count",
          "label": "數量"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "metric": "B 合理座標組",
            "count": "612"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "非橋梁排除",
            "count": "32"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "橋梁清冊參考點",
            "count": "580"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "接受 A↔B 研究對應",
            "count": "216"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "接受但地理／類型排除",
            "count": "22"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "模式 B 合格文件",
            "count": "194"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "A 無准入檢測地理",
            "count": "222"
          }
        }
      ]
    },
    {
      "caption": "文件分級：不是狀況評等",
      "columns": [
        {
          "key": "tier",
          "label": "分級"
        },
        {
          "key": "count",
          "label": "列數"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "tier": "A",
            "count": "23"
          }
        },
        {
          "id": "1",
          "cells": {
            "tier": "B",
            "count": "393"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "C",
            "count": "0"
          }
        }
      ]
    },
    {
      "caption": "模式 A：相同範圍名額與策略比較",
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
          "key": "evidenceTiers",
          "label": "缺口分級"
        },
        {
          "key": "evidenceGroups",
          "label": "缺口分組"
        },
        {
          "key": "balancedTiers",
          "label": "均衡分級"
        },
        {
          "key": "balancedGroups",
          "label": "均衡分組"
        },
        {
          "key": "shared",
          "label": "共有"
        },
        {
          "key": "added",
          "label": "均衡獨有"
        },
        {
          "key": "removed",
          "label": "缺口獨有"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "capacity": "5",
            "eligible": "416",
            "evidenceTiers": "5 A / 0 B / 0 C",
            "evidenceGroups": "2",
            "balancedTiers": "2 A / 3 B / 0 C",
            "balancedGroups": "5",
            "shared": "0",
            "added": "5",
            "removed": "5"
          }
        },
        {
          "id": "1",
          "cells": {
            "capacity": "10",
            "eligible": "416",
            "evidenceTiers": "10 A / 0 B / 0 C",
            "evidenceGroups": "5",
            "balancedTiers": "4 A / 6 B / 0 C",
            "balancedGroups": "10",
            "shared": "1",
            "added": "9",
            "removed": "9"
          }
        },
        {
          "id": "2",
          "cells": {
            "capacity": "全部",
            "eligible": "416",
            "evidenceTiers": "23 A / 393 B / 0 C",
            "evidenceGroups": "28",
            "balancedTiers": "23 A / 393 B / 0 C",
            "balancedGroups": "28",
            "shared": "416",
            "added": "0",
            "removed": "0"
          }
        }
      ]
    },
    {
      "caption": "模式 B：相同範圍名額與策略比較",
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
          "key": "evidenceTiers",
          "label": "缺口分級"
        },
        {
          "key": "evidenceGroups",
          "label": "缺口分組"
        },
        {
          "key": "balancedTiers",
          "label": "均衡分級"
        },
        {
          "key": "balancedGroups",
          "label": "均衡分組"
        },
        {
          "key": "shared",
          "label": "共有"
        },
        {
          "key": "added",
          "label": "均衡獨有"
        },
        {
          "key": "removed",
          "label": "缺口獨有"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "capacity": "5",
            "eligible": "194",
            "evidenceTiers": "0 A / 5 B / 0 C",
            "evidenceGroups": "1",
            "balancedTiers": "0 A / 5 B / 0 C",
            "balancedGroups": "5",
            "shared": "0",
            "added": "5",
            "removed": "5"
          }
        },
        {
          "id": "1",
          "cells": {
            "capacity": "10",
            "eligible": "194",
            "evidenceTiers": "0 A / 10 B / 0 C",
            "evidenceGroups": "2",
            "balancedTiers": "0 A / 10 B / 0 C",
            "balancedGroups": "10",
            "shared": "2",
            "added": "8",
            "removed": "8"
          }
        },
        {
          "id": "2",
          "cells": {
            "capacity": "全部",
            "eligible": "194",
            "evidenceTiers": "0 A / 194 B / 0 C",
            "evidenceGroups": "12",
            "balancedTiers": "0 A / 194 B / 0 C",
            "balancedGroups": "12",
            "shared": "194",
            "added": "0",
            "removed": "0"
          }
        }
      ]
    },
    {
      "caption": "資格敏感度：模式 A、缺口優先、名額 5",
      "columns": [
        {
          "key": "scope",
          "label": "範圍"
        },
        {
          "key": "eligible",
          "label": "合格"
        },
        {
          "key": "shared",
          "label": "與預設共有"
        },
        {
          "key": "added",
          "label": "新增"
        },
        {
          "key": "removed",
          "label": "移除"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "scope": "全部 A 列",
            "eligible": "416",
            "shared": "5",
            "added": "0",
            "removed": "0"
          }
        },
        {
          "id": "1",
          "cells": {
            "scope": "僅接受",
            "eligible": "216",
            "shared": "0",
            "added": "5",
            "removed": "5"
          }
        },
        {
          "id": "2",
          "cells": {
            "scope": "接受或歧義：僅文件",
            "eligible": "221",
            "shared": "0",
            "added": "5",
            "removed": "5"
          }
        },
        {
          "id": "3",
          "cells": {
            "scope": "接受且地理合格",
            "eligible": "194",
            "shared": "0",
            "added": "5",
            "removed": "5"
          }
        },
        {
          "id": "4",
          "cells": {
            "scope": "僅重大衝突",
            "eligible": "23",
            "shared": "5",
            "added": "0",
            "removed": "0"
          }
        }
      ]
    },
    {
      "caption": "不可變來源／方法追溯",
      "columns": [
        {
          "key": "identity",
          "label": "識別"
        },
        {
          "key": "value",
          "label": "值"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "identity": "Git merge",
            "value": "deb812b3472c078b5879727953e85d2850f0a82c"
          }
        },
        {
          "id": "1",
          "cells": {
            "identity": "Method",
            "value": "bridge-inspection-evidence-review-v1"
          }
        },
        {
          "id": "2",
          "cells": {
            "identity": "Analysis date",
            "value": "2026-10-23"
          }
        },
        {
          "id": "3",
          "cells": {
            "identity": "Snapshot ID",
            "value": "bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a"
          }
        },
        {
          "id": "4",
          "cells": {
            "identity": "Snapshot exact-file SHA-256",
            "value": "a580fb3356a84fc86fe4c4f4a811f115f490769ff15700bec5b69f88008b7782"
          }
        },
        {
          "id": "5",
          "cells": {
            "identity": "Historical LF SHA-256",
            "value": "ee4afe5592522651403d2d6173f59620884857b1d5129b83498b4eab0e3701fc"
          }
        }
      ]
    },
    {
      "caption": "上游已記錄驗證：非作品集重跑",
      "columns": [
        {
          "key": "metric",
          "label": "量測"
        },
        {
          "key": "value",
          "label": "記錄結果"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "metric": "測試檔／通過測試",
            "value": "7 / 88"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "確定性重建",
            "value": "2"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "快照位元組／gzip",
            "value": "1912829 / 142453"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "延遲 JS／gzip",
            "value": "~34 kB / ~11.9 kB"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "本機平均 ms：100 次",
            "value": "0.20218399999999975"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "全選 JSON／CSV 位元組",
            "value": "245553 / 107549"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "初始／首次進入政策請求",
            "value": "0 / 4"
          }
        }
      ]
    },
    {
      "caption": "實際前五來源綁定 ID：完整紀錄見固定匯出",
      "columns": [
        {
          "key": "rank",
          "label": "序位"
        },
        {
          "key": "aEvidence",
          "label": "A · 缺口"
        },
        {
          "key": "aBalanced",
          "label": "A · 均衡"
        },
        {
          "key": "bEvidence",
          "label": "B · 缺口"
        },
        {
          "key": "bBalanced",
          "label": "B · 均衡"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "rank": "1",
            "aEvidence": "A-3b6d39373759036e-r101-1f0b10f02644",
            "aBalanced": "A-3b6d39373759036e-r325-d91a5c850dff",
            "bEvidence": "A-3b6d39373759036e-r102-f9ec0a66cfb0",
            "bBalanced": "A-3b6d39373759036e-r315-ec956f1e85c4"
          }
        },
        {
          "id": "1",
          "cells": {
            "rank": "2",
            "aEvidence": "A-3b6d39373759036e-r117-5f0a6c57cfd7",
            "aBalanced": "A-3b6d39373759036e-r299-9cf20080e8e9",
            "bEvidence": "A-3b6d39373759036e-r103-1bd753b6b771",
            "bBalanced": "A-3b6d39373759036e-r311-52c915771af8"
          }
        },
        {
          "id": "2",
          "cells": {
            "rank": "3",
            "aEvidence": "A-3b6d39373759036e-r119-406aec856765",
            "aBalanced": "A-3b6d39373759036e-r317-ecd7954835c2",
            "bEvidence": "A-3b6d39373759036e-r104-5feabf74e299",
            "bBalanced": "A-3b6d39373759036e-r413-30ad4fc6b42c"
          }
        },
        {
          "id": "3",
          "cells": {
            "rank": "4",
            "aEvidence": "A-3b6d39373759036e-r120-cd1d69285dce",
            "aBalanced": "A-3b6d39373759036e-r259-4e0c7a5db45a",
            "bEvidence": "A-3b6d39373759036e-r105-35db99ca1e56",
            "bBalanced": "A-3b6d39373759036e-r24-f1f96df831e2"
          }
        },
        {
          "id": "4",
          "cells": {
            "rank": "5",
            "aEvidence": "A-3b6d39373759036e-r198-2d1d73d2ce7b",
            "aBalanced": "A-3b6d39373759036e-r287-3bc609c15725",
            "bEvidence": "A-3b6d39373759036e-r106-21ec0258ded7",
            "bBalanced": "A-3b6d39373759036e-r109-35a8af3f3499"
          }
        }
      ]
    },
    {
      "caption": "真實檢測紀錄：保留來源名稱",
      "columns": [
        {
          "key": "name",
          "label": "原名"
        },
        {
          "key": "id",
          "label": "ID"
        },
        {
          "key": "tier",
          "label": "分級"
        },
        {
          "key": "association",
          "label": "研究對應"
        },
        {
          "key": "geography",
          "label": "地理"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "name": "安泰橋",
            "id": "A-3b6d39373759036e-r24-f1f96df831e2",
            "tier": "B",
            "association": "接受研究對應",
            "geography": "准入"
          }
        },
        {
          "id": "1",
          "cells": {
            "name": "康樂橋",
            "id": "A-3b6d39373759036e-r23-55ef191cfb27",
            "tier": "A",
            "association": "歧義",
            "geography": "未准入"
          }
        },
        {
          "id": "2",
          "cells": {
            "name": "社教館人行地下道",
            "id": "A-3b6d39373759036e-r2-36df6d8a6a09",
            "tier": "B",
            "association": "無同名對應",
            "geography": "未准入"
          }
        },
        {
          "id": "3",
          "cells": {
            "name": "中正橋",
            "id": "A-3b6d39373759036e-r311-52c915771af8",
            "tier": "B",
            "association": "接受研究對應",
            "geography": "准入"
          }
        },
        {
          "id": "4",
          "cells": {
            "name": "康忠橋",
            "id": "A-3b6d39373759036e-r63-0bad12bad031",
            "tier": "B",
            "association": "接受研究對應",
            "geography": "未准入"
          }
        }
      ]
    },
    {
      "caption": "官方多邊形補充檢查 · 具明示座標假設",
      "columns": [
        {
          "key": "population",
          "label": "母體"
        },
        {
          "key": "point",
          "label": "點位"
        },
        {
          "key": "records",
          "label": "紀錄"
        },
        {
          "key": "inside",
          "label": "界內"
        },
        {
          "key": "outside",
          "label": "界外"
        },
        {
          "key": "agrees",
          "label": "來源區一致"
        },
        {
          "key": "differs",
          "label": "來源區不同"
        },
        {
          "key": "near",
          "label": "距區界20m內"
        }
      ],
      "rows": [
        {
          "id": "allInventory-object",
          "cells": {
            "population": "全部名冊",
            "point": "物件點",
            "records": "612",
            "inside": "607",
            "outside": "5",
            "agrees": "543",
            "differs": "64",
            "near": "60"
          }
        },
        {
          "id": "allInventory-start",
          "cells": {
            "population": "全部名冊",
            "point": "起點",
            "records": "612",
            "inside": "608",
            "outside": "4",
            "agrees": "554",
            "differs": "54",
            "near": "43"
          }
        },
        {
          "id": "allInventory-end",
          "cells": {
            "population": "全部名冊",
            "point": "終點",
            "records": "612",
            "inside": "602",
            "outside": "10",
            "agrees": "542",
            "differs": "60",
            "near": "46"
          }
        },
        {
          "id": "admittedInventory-object",
          "cells": {
            "population": "原地理准入名冊",
            "point": "物件點",
            "records": "580",
            "inside": "576",
            "outside": "4",
            "agrees": "513",
            "differs": "63",
            "near": "56"
          }
        },
        {
          "id": "admittedInventory-start",
          "cells": {
            "population": "原地理准入名冊",
            "point": "起點",
            "records": "580",
            "inside": "576",
            "outside": "4",
            "agrees": "522",
            "differs": "54",
            "near": "41"
          }
        },
        {
          "id": "admittedInventory-end",
          "cells": {
            "population": "原地理准入名冊",
            "point": "終點",
            "records": "580",
            "inside": "571",
            "outside": "9",
            "agrees": "512",
            "differs": "59",
            "near": "43"
          }
        },
        {
          "id": "linkedModeB-object",
          "cells": {
            "population": "原關聯模式B",
            "point": "物件點",
            "records": "194",
            "inside": "192",
            "outside": "2",
            "agrees": "180",
            "differs": "12",
            "near": "24"
          }
        },
        {
          "id": "linkedModeB-start",
          "cells": {
            "population": "原關聯模式B",
            "point": "起點",
            "records": "194",
            "inside": "192",
            "outside": "2",
            "agrees": "182",
            "differs": "10",
            "near": "18"
          }
        },
        {
          "id": "linkedModeB-end",
          "cells": {
            "population": "原關聯模式B",
            "point": "終點",
            "records": "194",
            "inside": "187",
            "outside": "7",
            "agrees": "178",
            "differs": "9",
            "near": "20"
          }
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": "已合併 Policy #9 PR #6",
      "url": "https://github.com/LEO0331/taipei-safety-map/pull/6"
    },
    {
      "label": "官方資料目錄 A",
      "url": "https://data.taipei/dataset/detail?id=27135efa-d43e-406d-a3e4-fcb07efb3982"
    },
    {
      "label": "官方資料目錄 B",
      "url": "https://data.taipei/dataset/detail?id=866a9982-0a63-421f-b120-9144fc6ce732"
    },
    {
      "label": "來源稽核",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-source-audit.md"
    },
    {
      "label": "身分契約",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-identity-contract.md"
    },
    {
      "label": "地理契約",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-geographic-evidence.md"
    },
    {
      "label": "方法",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-methodology.md"
    },
    {
      "label": "中文決策規格",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-decision-mvp.zh-TW.md"
    },
    {
      "label": "交付與記錄檢查",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-delivery.md"
    },
    {
      "label": "實際結果與完整排序 ID",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-results.json"
    },
    {
      "label": "接受來源清單",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/data/raw/bridge-policy/sources.json"
    },
    {
      "label": "快照指標",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/public/data/bridge-policy/current.json"
    },
    {
      "label": "不可變快照",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/public/data/bridge-policy/bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a.json"
    },
    {
      "label": "來源解析與准入",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/bridgePolicySources.ts"
    },
    {
      "label": "有限分階段擷取",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/fetchBridgePolicySources.ts"
    },
    {
      "label": "來源完整性稽核",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/auditBridgePolicySources.ts"
    },
    {
      "label": "快照發布",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/buildBridgePolicySnapshot.ts"
    },
    {
      "label": "確定性驗證與量測",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/verifyBridgePolicy.ts"
    },
    {
      "label": "來源型別契約",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/types/bridgePolicy.ts"
    },
    {
      "label": "身分實作",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyIdentity.ts"
    },
    {
      "label": "地理篩查",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyGeography.ts"
    },
    {
      "label": "分級與時間規則",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicy.ts"
    },
    {
      "label": "情境與匯出防護",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyScenarios.ts"
    },
    {
      "label": "瀏覽器完整性載入",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/loadBridgePolicy.ts"
    },
    {
      "label": "雙語儀表板",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/BridgePolicyDashboard.tsx"
    },
    {
      "label": "受限研究地圖",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/BridgePolicyMap.tsx"
    },
    {
      "label": "來源測試",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/bridgePolicySources.test.ts"
    },
    {
      "label": "身分測試",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyIdentity.test.ts"
    },
    {
      "label": "地理測試",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyGeography.test.ts"
    },
    {
      "label": "情境測試",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyScenarios.test.ts"
    },
    {
      "label": "瀏覽器網路證據",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-browser-network.json"
    },
    {
      "label": "民政局官方區界版本",
      "url": "https://data.taipei/dataset/detail?id=1601ef3a-c253-4988-b047-943d9e786143"
    }
  ],
  "previewAssets": [
    {
      "label": "上游本機預覽：桌面證據查核控制",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-desktop.png"
    },
    {
      "label": "上游本機預覽：行動證據模式",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-mobile.png"
    }
  ],
  "futureExtensions": [
    "擴大解讀前取得官方對照、穩定資產識別、完整檢測事件與權威工程術語。",
    "任何結構或逾期評估之前，須測量幾何、現況及適用週期／豁免契約。"
  ]
};
