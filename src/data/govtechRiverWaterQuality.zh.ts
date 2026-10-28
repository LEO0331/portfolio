import type { GovTechCase } from "../types/govtechCase";

export const riverWaterQualityCaseZh: GovTechCase = {
  "id": "river-water-quality",
  "slug": "river-water-quality",
  "displayNumber": "013",
  "projectId": "taipei-feitsui-water-map",
  "sourceRepository": "https://github.com/LEO0331/taipei-feitsui-water-map",
  "sourceVersion": "beedd7eef3592c12bb66c21937add068f82ce5fa",
  "snapshotVersion": "sha256-212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81",
  "maturity": "decision-support-poc",
  "policyDomain": "都市服務與環境",
  "title": "臺北市河川水質監測與長期趨勢證據查核",
  "summary": "從公開河川紀錄建立可重現監測查核：720 筆具量測紀錄、736 個文件查核候選及受限描述性比較；嚴格長期比較、RPI 與因果／法規結論仍不可用。",
  "maturityLabel": "監測證據決策支援概念驗證已完成，嚴格趨勢、RPI 與因果結論仍受證據限制",
  "reviewNote": "固定分析日為 2026-10-27：768 筆公告包含 720 筆部分量測紀錄、16 筆本月待公布與 32 筆未來占位。受限同名差值並非已驗證趨勢；尚未確立歷史實體站位連續性、可接受 RPI 結果或因果／法規結論。",
  "intendedUsers": "環境資料管理者、市政監測分析人員及開放資料工程師。",
  "implementedCapabilities": [
    "年度原始位元組版本對帳與確定性時間序列 ETL",
    "監測站月份身分、觀測涵蓋與偵測極限保存",
    "分離文件查核、受限比較、RPI 與因果證據門檻",
    "具來源綁定 JSON／CSV 摘要的名額、策略與範圍情境"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "政策問題與監測證據的意義",
      "paragraphs": [
        "哪些已公告河川監測紀錄需要補充文件？哪些量測可以比較，而不掩蓋缺值或低於偵測極限的證據？本案例處理保留公開紀錄的可靠性與解讀，不辨識污染責任人。",
        "已完成的概念驗證明確區分 736 個行政查核候選、零個嚴格長期比較與零筆接受的研究重現 RPI。模式 C 的因果與法規結論仍不可用；這些可見限制約束全部結果。"
      ]
    },
    {
      "id": "evolution",
      "title": "從既有河川水質探索器延伸",
      "paragraphs": [
        "原探索器呈現四份年度檔案、768 個日曆列、九條河川與十六個監測站標籤。這些是公告紀錄數，並非全部完成量測；原保留版本共有 656 筆具量測紀錄，其中舊 2026 檔僅 80 筆。",
        "另行接受的 2026 版本含 144 筆具量測紀錄，使接受總數增至 720，但公告總數仍為 768。新增的 64 個站月份是六月至九月紀錄，不代表新增監測地點或環境改善。原有水資源、生態與豪雨模組各自保留。"
      ]
    },
    {
      "id": "sources",
      "title": "官方來源版本與可追溯性",
      "paragraphs": [
        "臺北市環境保護局目錄接受民國 112–115 年，即 2023–2026 年。四份原始 Big5／CP950 CSV 共 109,553 位元組，各自保留資源身分、原始位元組 SHA-256、完整欄名順序及發布／取得時間；另有四份脈絡 HTML 支持目錄、站名與 RPI 解讀。",
        "接受的 2026 資源於目錄當地時間 2026-10-16 09:00:48 更新，取得時間為 2026-10-27T00:13:36.437Z。量測月份並非檔案發布或取得時間。轉換按具名欄位對應，處理金屬欄位重新排序，不假設固定欄位位置。"
      ]
    },
    {
      "id": "identity",
      "title": "統計單位與監測站身分",
      "paragraphs": [
        "河川、來源站名標籤、實體採樣地點、站月份機會、CSV 列、單一指標欄及配對量測是不同單位。不能僅用河名串接站位，也不能只用流水號識別來源紀錄。",
        "十五個來源標籤符合目前官方名冊；CSV 的「青礜溪」與官方「菁礐溪」保持未配對，不自行推定別名。十六站的歷史實體連續性均未驗證；未接受歷史座標，也不建立監測政策地圖標記。",
        "站位識別對原始河名、分隔符號與原始站名雜湊。列追溯另保留接受來源版本、完整來源雜湊、原始 CSV 列號及年月。穩定的來源標籤身分不認證實體地點、設備或實驗室方法歷年未變。"
      ]
    },
    {
      "id": "completeness",
      "title": "公告列與實際量測",
      "paragraphs": [
        "768 筆公告站月份中，720 筆至少含一個有效精確值或受偵測極限限制的值。720 筆在完整 27 指標清單下均屬部分量測，因選用欄位存在未測標記；這不表示每項排定檢測失敗或整筆採樣無效。",
        "48 個完全空白列沒有具量測指標，分為 16 個本月待公布與 32 個未來占位，不以零取代。接受版本沒有重複站期群組或無法解析的列。"
      ]
    },
    {
      "id": "placeholders",
      "title": "本期待公布與未來占位",
      "paragraphs": [
        "於 2026-10-27 截止日，十月的 16 個空白列屬尚在進行月份的觀測機會，並非逾期歷史觀測。十一、十二月共 32 個空白列是未來占位，排除於查核資格及已觀測期間分母。",
        "分類依接受來源值、年月與固定截止日決定。後續接受版本可以用結果取代占位；僅改變瀏覽日期，不會重寫此不可變分析。歷史缺測與本期尚未公布保持不同狀態。"
      ]
    },
    {
      "id": "qualifiers",
      "title": "指標、偵測極限與缺值",
      "paragraphs": [
        "20,736 個公告指標欄保留 10,684 個精確量測值、1,571 個受限值、7,185 個未測標記與 1,296 個空白，無法解析及無效精確值均為零。各欄保留原始文字、單位、限定狀態與偵測極限。",
        "ND<0.02 是低於 0.02 mg/L 的界限，並非精確氨氮值；<10 是大腸桿菌群受限界限；--- 代表未測，空白代表缺值。科學記號仍解析為數值。不以零、半偵測極限或極限值代入，也不將精確與受限值混入一般平均。",
        "氨氮偵測極限有 98 欄為 0.02、12 欄為 0.07、150 欄為 0.08 mg/L；大腸桿菌群有兩欄 <1、四十三欄 <10 CFU/100mL。極限改變會影響解讀，不建立實際濃度改變的結論。"
      ]
    },
    {
      "id": "coverage",
      "title": "監測涵蓋與分母選擇",
      "paragraphs": [
        "十六個標籤身分乘四十八個公告月份形成 768 個日曆機會。假設按月排程至 2026 年十月，分母為 736 個機會，其中 720 個具量測；其餘 16 個均為本月待公布。保留排程下，已過月份缺測機會為零。",
        "每個標籤有 48 筆公告、45 個具量測期間、46 個截至本月機會、一個本月空白及兩個未來占位。實際觀測跨度為 2023 年一月至 2026 年九月；720/736 為 97.83%，已過月份則為 720/720。兩種分母都不認證實驗室完整度或站位持續營運；啟用、停用日期仍未知。"
      ]
    },
    {
      "id": "longitudinal",
      "title": "先驗證可比性，再談長期趨勢",
      "paragraphs": [
        "比較粒度為站位身分 × 指標 × 相鄰年度視窗，涵蓋 2023–2024、2024–2025、2025–2026。配對需同日曆月份、同指標與相容單位，兩側各只有一筆具量測來源列，且為有效精確值。",
        "1,296 個調查視窗沒有任何嚴格比較通過，因歷史實體站位與採樣方法連續性未驗證。另行標示的受限同名描述檢視接受 823 個視窗、7,239 個精確指標月份配對，排除 473 個視窗。不同指標可重複使用同一站月份列，因此不是 7,239 個獨立樣本。",
        "受限資格只要求目前官方標籤配對及至少一個精確配對，不代表完整年度。2025–2026 視窗至多含九個已觀測的 2026 月份，配對與排除數均明示。逐月差值不建立統計顯著性、介入成效、季節校正或因果解釋。"
      ]
    },
    {
      "id": "rpi",
      "title": "RPI 方法證據與不可用結果",
      "paragraphs": [
        "官方河川污染指數使用 mg/L 的溶氧量、BOD5、懸浮固體及氨氮，先各自轉為 1／3／6／10 類別點數，再平均四個點數，不是直接平均四項濃度。來源輔助函式僅重現官方表格無歧義的字面邊界。",
        "460 筆具四個有效精確潛在輸入，但接受的研究重現 RPI 為零，全部 768 筆公告均排除於 RPI 輸出。其餘具量測列含 260 個氨氮受限值，另有 48 個空白列缺乏量測輸入。",
        "字面精度缺口、適用有效位數／四捨五入規則與共同採樣事件仍未解決，亦未將官方已公布 RPI 對應至保留列。DO (4.5,4.6)、BOD5 (4.9,5.0)、SS (49.9,50.0)、NH3-N (0.99,1.00) 不自行補類別。潛在輸入完整不能越過方法與事件追溯門檻。"
      ]
    },
    {
      "id": "mode-a",
      "title": "模式 A：確定性的行政查核",
      "paragraphs": [
        "模式 A 按接受來源站位身分 × 月份分組，若出現重複，保留全部連結列識別。768 個候選中，736 個具資格，32 個未來占位排除；資格層級為 A46／B690／C0。46 個 A 級月份均屬未配對站名。",
        "證據缺口優先與監測均衡查核均保留 A→B→C 及主要問題優先次序。缺口策略再按穩定識別排序；均衡策略在同一層級與主要問題群組內，選擇代表較少的河川與站位。小名額先處理同一高層級身分問題，不捏造地理多樣性。",
        "名額 5 與 10 下，兩策略均從同一河川、同一標籤選出 A 級月份；全體名額選出 736 個候選，涵蓋九條河川與十六個標籤，A46／B690／C0。這些是行政追查次序，不是污染嚴重度排名。"
      ],
      "content": "methodology"
    },
    {
      "id": "mode-b",
      "title": "模式 B：受限描述性證據",
      "paragraphs": [
        "嚴格模式 B 入選為零，要求五或十名額時均保留未用名額。明確切換至受限證據後，證據契約改變，資格增至 823 個指標視窗，但不修復歷史站位或方法連續性。",
        "「雙溪取水口」水溫 2023–2024 有十二個精確同月配對，2025–2026 有九個、另排除三個月份機會；氨氮 2023–2024 沒有精確配對而排除。一月水溫 18.8→15.1 °C 的 −3.7 °C 是描述差值，不是年度趨勢或環境改善。",
        "既有受限均衡名額五情境選出五個 2023–2024 氣溫視窗；實際識別與來源連結比較例子保留於技術表。配對指標欄與未配對公告欄限定值分別回報，不合成缺失量測。"
      ]
    },
    {
      "id": "mode-c",
      "title": "模式 C：因果與法規證據仍不可用",
      "paragraphs": [
        "按月監測紀錄不辨識污染源、責任企業、法規違反或介入效果。模式 C 明示不可用，而不將空白排名包裝為成功因果模型。",
        "必須補充歷史站位與採樣紀錄、水文及季節脈絡、適用許可與標準，以及各結論所需官方判定。本個人概念驗證不認證飲用水適用性、游泳安全、目前公共健康風險或官方環境合規。"
      ]
    },
    {
      "id": "sensitivity",
      "title": "實際名額、策略與範圍結果",
      "paragraphs": [
        "預設名額五的兩策略共享全部五個識別，新增與移除均為零。名額十在相同排序清單追加 2023 年六月至十月，新增五個、不移除；全體名額兩策略選出相同的 736 識別集合，順序可不同。",
        "將模式 A 限制為 2026 年後，資格改為 160 個，A10／B150／C0，比原範圍少 576 個。名額五改選 2026 年一月至五月，取代 2023 年一月至五月：共享零、新增五、移除五。這是母體改變，不是同母體策略效果或河川狀況改善。",
        "年份、來源、河川、站位及指標篩選明示範圍；精確值可比性、受限證據接受與 RPI 不可用規則持續明確。不為了讓比較更有趣而製造策略差異或環境成果。"
      ],
      "content": "scenarios"
    },
    {
      "id": "architecture",
      "title": "工程架構與可重現性",
      "paragraphs": [
        "離線取得保留原始年度與脈絡位元組，來源稽核先檢查雜湊、結構與站名，再確定性轉換。純解析、涵蓋、比較與情境函式建構固定日期快照；驗證完成後才建立不可變檔案，並原子替換目前指標。",
        "來源儀表板為延遲載入的雙語 React 模組，只讀取兩個本機靜態網址：指標與不可變快照。安全 JSON／CSV 摘要保留範圍、追溯、快照身分、入選識別、限定值與排除，並確保順序確定、大小上限與公式前綴防護。失敗不會提升未驗證來源版本。",
        "快照識別與精確檔案摘要辨識保留的不可變 JSON，年度雜湊則辨識不同原始 CSV。本發布兩種快照識別使用相同摘要，不代表其他專案皆如此。Portfolio 透過共用呈現器展示固定查核結果，執行期不取得政府資料或完整研究快照。"
      ],
      "content": "architecture"
    },
    {
      "id": "evidence",
      "title": "測試、效能與下一步證據",
      "paragraphs": [
        "來源交付紀錄包含完整 92 項測試與 TypeScript、一般／Pages 建置、精確位元組重複重建、安全下載與兩語言五寬度瀏覽器查核。這是上游既有結果，不宣稱 Portfolio 重跑完整來源應用；Portfolio 獨立查核接受檔案及受限原始函式不變量。",
        "來源既有量測為快照 7,016,489 位元組、gzip 310,227 位元組，延遲政策程式 gzip 19,683 位元組；均衡名額十在五十次本機 Node 重複下中位數 0.1885 ms。既有內容／雜湊驗證 125.76 ms 也屬本機量測，不是網際網路／行動延遲、可用率、Lighthouse 或可攜硬體基準。",
        "真實來源截圖呈現監測證據的來源追溯／匯出防護及行動總覽，並非官方合規系統。未接受座標追溯便不呈現站位標記。獨立豪雨案例保留原資料、快照與結論；河川監測不與防汛整備合成分數。",
        "未來證據需解決未配對站名、歷史實體站位及實驗室連續性、啟用歷史、RPI 報告精度與共同採樣身分。因果或法規結論需獨立且針對該結論的證據；不暗示其他政策計畫或實際營運成果。"
      ],
      "content": "evidence",
      "links": [
        {
          "label": "真實桌機來源追溯與匯出防護",
          "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-en-desktop.png"
        },
        {
          "label": "真實監測證據儀表板・繁中行動版",
          "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-zh-mobile.png"
        }
      ]
    }
  ],
  "architecture": [
    "官方目錄與接受的年度／脈絡版本",
    "原始位元組保存、結構與站名驗證",
    "具名欄位 Big5／CP950 轉換與限定值解析",
    "站月份涵蓋與精確配對期間資格",
    "分離監測查核、受限比較與不可用 RPI／因果門檻",
    "確定性名額／範圍情境與安全 JSON／CSV 匯出",
    "驗證後不可變快照與原子指標",
    "延遲雙語來源儀表板；靜態 Portfolio 案例"
  ],
  "architectureNote": "接受來源位元組、固定截止日與確定性函式使結果可重播。原始 CSV 雜湊、來源標籤身分、快照身分及精確檔案雜湊各自辨識不同物件；不新增 Portfolio 即時管線或推測站位地理。",
  "scenarioTables": [
    {
      "caption": "接受的官方年度版本・公告不等於觀測",
      "columns": [
        {
          "key": "year",
          "label": "民國／西元"
        },
        {
          "key": "resource",
          "label": "官方資源識別"
        },
        {
          "key": "updated",
          "label": "官方更新（目錄當地時間）"
        },
        {
          "key": "bytes",
          "label": "原始位元組"
        },
        {
          "key": "published",
          "label": "公告列"
        },
        {
          "key": "observed",
          "label": "具量測列"
        },
        {
          "key": "future",
          "label": "未來空白列"
        }
      ],
      "rows": [
        {
          "id": "source-2023",
          "cells": {
            "year": "112 / 2023",
            "resource": "0e488a9c-7e44-4c30-bd07-049779218a76",
            "updated": "2024-05-31 16:34:13",
            "bytes": "28176",
            "published": "192",
            "observed": "192",
            "future": "0"
          }
        },
        {
          "id": "source-2024",
          "cells": {
            "year": "113 / 2024",
            "resource": "44524259-d419-4c95-aa6f-16d58f03d1c1",
            "updated": "2025-01-10 11:35:14",
            "bytes": "28731",
            "published": "192",
            "observed": "192",
            "future": "0"
          }
        },
        {
          "id": "source-2025",
          "cells": {
            "year": "114 / 2025",
            "resource": "4f2bf5d2-9561-471a-a53c-7da82dfac0e2",
            "updated": "2026-01-02 17:30:37",
            "bytes": "28788",
            "published": "192",
            "observed": "192",
            "future": "0"
          }
        },
        {
          "id": "source-2026",
          "cells": {
            "year": "115 / 2026",
            "resource": "a66f7820-35c0-42f4-af31-87c2401f3c12",
            "updated": "2026-10-16 09:00:48",
            "bytes": "23858",
            "published": "192",
            "observed": "144",
            "future": "32"
          }
        }
      ]
    },
    {
      "caption": "公告紀錄、量測狀態與涵蓋分母",
      "columns": [
        {
          "key": "state",
          "label": "統計單位／狀態"
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
          "id": "published",
          "cells": {
            "state": "公告站月份列",
            "count": "768",
            "meaning": "各接受年度版本 192 筆"
          }
        },
        {
          "id": "observed",
          "cells": {
            "state": "具量測紀錄",
            "count": "720",
            "meaning": "至少一項有效精確或受限值"
          }
        },
        {
          "id": "partial",
          "cells": {
            "state": "27 欄下部分量測",
            "count": "720",
            "meaning": "選用未測欄使全欄完整度不成立"
          }
        },
        {
          "id": "fully-observed",
          "cells": {
            "state": "27 欄全部具量測",
            "count": "0",
            "meaning": "不代表全部排定實驗室工作失敗"
          }
        },
        {
          "id": "pending",
          "cells": {
            "state": "本月空白列",
            "count": "16",
            "meaning": "2026 年十月仍進行中，並非逾期"
          }
        },
        {
          "id": "future",
          "cells": {
            "state": "未來占位",
            "count": "32",
            "meaning": "十一至十二月；排除觀測與查核計數"
          }
        },
        {
          "id": "through-cutoff",
          "cells": {
            "state": "截至本月機會",
            "count": "736",
            "meaning": "依明示按月排程含本月"
          }
        },
        {
          "id": "prior-missing",
          "cells": {
            "state": "已過月份缺測機會",
            "count": "0",
            "meaning": "720 已過機會皆具量測；站史假設仍在"
          }
        }
      ]
    },
    {
      "caption": "指標限定狀態保留量測意義",
      "columns": [
        {
          "key": "kind",
          "label": "限定狀態"
        },
        {
          "key": "count",
          "label": "公告指標欄"
        },
        {
          "key": "example",
          "label": "原始表示"
        },
        {
          "key": "meaning",
          "label": "處理方式"
        }
      ],
      "rows": [
        {
          "id": "measured",
          "cells": {
            "kind": "精確量測",
            "count": "10684",
            "example": "1.70E+05 → 170000",
            "meaning": "科學記號仍為數值"
          }
        },
        {
          "id": "censored",
          "cells": {
            "kind": "受限界限",
            "count": "1571",
            "example": "ND<0.02；<10",
            "meaning": "保留極限；不當成精確零或插補值"
          }
        },
        {
          "id": "not-measured",
          "cells": {
            "kind": "未測",
            "count": "7185",
            "example": "---",
            "meaning": "不同於缺值或採樣失敗"
          }
        },
        {
          "id": "missing",
          "cells": {
            "kind": "缺值",
            "count": "1296",
            "example": "空白",
            "meaning": "48 個完全空白列 × 27 欄"
          }
        },
        {
          "id": "unparsed",
          "cells": {
            "kind": "無法解析／無效精確",
            "count": "0 / 0",
            "example": "未辨識／超範圍輸入",
            "meaning": "精確比較不可用；接受版本無此值"
          }
        }
      ]
    },
    {
      "caption": "指標個別完整度・每欄 768 個公告值",
      "columns": [
        {
          "key": "indicator",
          "label": "指標／單位"
        },
        {
          "key": "exact",
          "label": "精確量測"
        },
        {
          "key": "censored",
          "label": "受限"
        },
        {
          "key": "notMeasured",
          "label": "未測"
        },
        {
          "key": "missing",
          "label": "缺值"
        }
      ],
      "rows": [
        {
          "id": "do",
          "cells": {
            "indicator": "溶氧量／mg/L",
            "exact": "720",
            "censored": "0",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "bod",
          "cells": {
            "indicator": "BOD5／mg/L",
            "exact": "720",
            "censored": "0",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "ss",
          "cells": {
            "indicator": "懸浮固體／mg/L",
            "exact": "720",
            "censored": "0",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "nh3",
          "cells": {
            "indicator": "氨氮／mg/L",
            "exact": "460",
            "censored": "260",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "cod",
          "cells": {
            "indicator": "化學需氧量／mg/L",
            "exact": "714",
            "censored": "6",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "coliform",
          "cells": {
            "indicator": "大腸桿菌群／CFU/100mL",
            "exact": "675",
            "censored": "45",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "iron",
          "cells": {
            "indicator": "鐵／μg/L",
            "exact": "0",
            "censored": "0",
            "notMeasured": "720",
            "missing": "48"
          }
        }
      ]
    },
    {
      "caption": "官方 RPI 字面類別點數・輸入均 mg/L，非接受 RPI 結果",
      "columns": [
        {
          "key": "indicator",
          "label": "組成指標"
        },
        {
          "key": "one",
          "label": "1 點"
        },
        {
          "key": "three",
          "label": "3 點"
        },
        {
          "key": "six",
          "label": "6 點"
        },
        {
          "key": "ten",
          "label": "10 點"
        }
      ],
      "rows": [
        {
          "id": "do",
          "cells": {
            "indicator": "DO",
            "one": "≥6.5",
            "three": "4.6≤DO<6.5",
            "six": "2.0≤DO≤4.5",
            "ten": "<2.0"
          }
        },
        {
          "id": "bod",
          "cells": {
            "indicator": "BOD5",
            "one": "≤3.0",
            "three": "3.0<BOD5≤4.9",
            "six": "5.0≤BOD5≤15.0",
            "ten": ">15.0"
          }
        },
        {
          "id": "ss",
          "cells": {
            "indicator": "SS",
            "one": "≤20.0",
            "three": "20.0<SS≤49.9",
            "six": "50.0≤SS≤100",
            "ten": ">100"
          }
        },
        {
          "id": "nh3",
          "cells": {
            "indicator": "NH3-N",
            "one": "≤0.50",
            "three": "0.50<NH3-N≤0.99",
            "six": "1.00≤NH3-N≤3.00",
            "ten": ">3.00"
          }
        }
      ]
    },
    {
      "caption": "分離分析模式與接受門檻",
      "columns": [
        {
          "key": "mode",
          "label": "模式／輸出"
        },
        {
          "key": "grain",
          "label": "候選或輸出粒度"
        },
        {
          "key": "eligible",
          "label": "具資格"
        },
        {
          "key": "excluded",
          "label": "排除／不可用"
        },
        {
          "key": "meaning",
          "label": "解讀"
        }
      ],
      "rows": [
        {
          "id": "a",
          "cells": {
            "mode": "A・監測證據查核",
            "grain": "來源站位身分 × 月份",
            "eligible": "736",
            "excluded": "32 個未來候選",
            "meaning": "A46／B690／C0；查核優先，非污染嚴重度"
          }
        },
        {
          "id": "b-strict",
          "cells": {
            "mode": "B・嚴格長期",
            "grain": "站位 × 指標 × 相鄰年度視窗",
            "eligible": "0",
            "excluded": "1296",
            "meaning": "歷史實體身分與方法連續性未驗證"
          }
        },
        {
          "id": "b-limited",
          "cells": {
            "mode": "B・受限描述",
            "grain": "站位 × 指標 × 相鄰年度視窗；精確同月配對",
            "eligible": "823 個視窗",
            "excluded": "473 個視窗",
            "meaning": "7239 個指標月份配對；非獨立樣本或已驗證趨勢"
          }
        },
        {
          "id": "rpi",
          "cells": {
            "mode": "研究重現 RPI",
            "grain": "四組成指標／站月份",
            "eligible": "0",
            "excluded": "768 列",
            "meaning": "460 個潛在精確輸入組合不建立方法資格"
          }
        },
        {
          "id": "c",
          "cells": {
            "mode": "C・因果／法規",
            "grain": "結論專屬獨立證據",
            "eligible": "0",
            "excluded": "不可用",
            "meaning": "無因果、合規或公共健康判定"
          }
        }
      ]
    },
    {
      "caption": "模式 A 實際策略與查核名額",
      "columns": [
        {
          "key": "strategy",
          "label": "策略"
        },
        {
          "key": "capacity",
          "label": "名額"
        },
        {
          "key": "eligible",
          "label": "具資格／排除"
        },
        {
          "key": "selected",
          "label": "入選"
        },
        {
          "key": "tiers",
          "label": "入選 A/B/C"
        },
        {
          "key": "rivers",
          "label": "河川"
        },
        {
          "key": "stations",
          "label": "站名標籤"
        }
      ],
      "rows": [
        {
          "id": "gaps-5",
          "cells": {
            "strategy": "證據缺口優先",
            "capacity": "5",
            "eligible": "736 / 32",
            "selected": "5",
            "tiers": "5/0/0",
            "rivers": "1",
            "stations": "1"
          }
        },
        {
          "id": "balanced-5",
          "cells": {
            "strategy": "監測均衡查核",
            "capacity": "5",
            "eligible": "736 / 32",
            "selected": "5",
            "tiers": "5/0/0",
            "rivers": "1",
            "stations": "1"
          }
        },
        {
          "id": "gaps-10",
          "cells": {
            "strategy": "證據缺口優先",
            "capacity": "10",
            "eligible": "736 / 32",
            "selected": "10",
            "tiers": "10/0/0",
            "rivers": "1",
            "stations": "1"
          }
        },
        {
          "id": "balanced-10",
          "cells": {
            "strategy": "監測均衡查核",
            "capacity": "10",
            "eligible": "736 / 32",
            "selected": "10",
            "tiers": "10/0/0",
            "rivers": "1",
            "stations": "1"
          }
        },
        {
          "id": "gaps-all",
          "cells": {
            "strategy": "證據缺口優先",
            "capacity": "全部具資格",
            "eligible": "736 / 32",
            "selected": "736",
            "tiers": "46/690/0",
            "rivers": "9",
            "stations": "16"
          }
        },
        {
          "id": "balanced-all",
          "cells": {
            "strategy": "監測均衡查核",
            "capacity": "全部具資格",
            "eligible": "736 / 32",
            "selected": "736",
            "tiers": "46/690/0",
            "rivers": "9",
            "stations": "16"
          }
        }
      ]
    },
    {
      "caption": "模式 A 實際排序清單・兩策略相同，前五筆為名額五",
      "columns": [
        {
          "key": "rank",
          "label": "順序"
        },
        {
          "key": "id",
          "label": "來源綁定候選識別"
        },
        {
          "key": "question",
          "label": "查核問題"
        }
      ],
      "rows": [
        {
          "id": "rank-1",
          "cells": {
            "rank": "1",
            "id": "A:station-b304f8239c8754ee:2023-01",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        },
        {
          "id": "rank-2",
          "cells": {
            "rank": "2",
            "id": "A:station-b304f8239c8754ee:2023-02",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        },
        {
          "id": "rank-3",
          "cells": {
            "rank": "3",
            "id": "A:station-b304f8239c8754ee:2023-03",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        },
        {
          "id": "rank-4",
          "cells": {
            "rank": "4",
            "id": "A:station-b304f8239c8754ee:2023-04",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        },
        {
          "id": "rank-5",
          "cells": {
            "rank": "5",
            "id": "A:station-b304f8239c8754ee:2023-05",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        },
        {
          "id": "rank-6",
          "cells": {
            "rank": "6",
            "id": "A:station-b304f8239c8754ee:2023-06",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        },
        {
          "id": "rank-7",
          "cells": {
            "rank": "7",
            "id": "A:station-b304f8239c8754ee:2023-07",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        },
        {
          "id": "rank-8",
          "cells": {
            "rank": "8",
            "id": "A:station-b304f8239c8754ee:2023-08",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        },
        {
          "id": "rank-9",
          "cells": {
            "rank": "9",
            "id": "A:station-b304f8239c8754ee:2023-09",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        },
        {
          "id": "rank-10",
          "cells": {
            "rank": "10",
            "id": "A:station-b304f8239c8754ee:2023-10",
            "question": "驗證未配對「青礜溪／菁礐溪」關係，不推定別名"
          }
        }
      ]
    },
    {
      "caption": "受限模式 B 實際選擇與對照視窗",
      "columns": [
        {
          "key": "kind",
          "label": "既有例子"
        },
        {
          "key": "id",
          "label": "候選／比較識別"
        },
        {
          "key": "matched",
          "label": "配對／排除月份"
        },
        {
          "key": "meaning",
          "label": "證據解讀"
        }
      ],
      "rows": [
        {
          "id": "limited-1",
          "cells": {
            "kind": "受限均衡名額五・1",
            "id": "B:station-0bfbba8dbe62861a:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "2023–2024 氣溫；僅受限同名描述"
          }
        },
        {
          "id": "limited-2",
          "cells": {
            "kind": "受限均衡名額五・2",
            "id": "B:station-164608853a0baa99:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "2023–2024 氣溫；僅受限同名描述"
          }
        },
        {
          "id": "limited-3",
          "cells": {
            "kind": "受限均衡名額五・3",
            "id": "B:station-20cb206dfed95a06:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "2023–2024 氣溫；僅受限同名描述"
          }
        },
        {
          "id": "limited-4",
          "cells": {
            "kind": "受限均衡名額五・4",
            "id": "B:station-2644cd708b3d0597:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "2023–2024 氣溫；僅受限同名描述"
          }
        },
        {
          "id": "limited-5",
          "cells": {
            "kind": "受限均衡名額五・5",
            "id": "B:station-80f33b2a0eb541a5:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "2023–2024 氣溫；僅受限同名描述"
          }
        },
        {
          "id": "comparison-0",
          "cells": {
            "kind": "水溫・2023–2024",
            "id": "B:station-0bfbba8dbe62861a:waterTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "受限描述資格；嚴格仍不可用"
          }
        },
        {
          "id": "comparison-1",
          "cells": {
            "kind": "氨氮・2023–2024",
            "id": "B:station-0bfbba8dbe62861a:ammoniaNitrogenMgL:2023-2024",
            "matched": "0 / 12",
            "meaning": "排除：無精確配對，不替代受限值"
          }
        },
        {
          "id": "comparison-2",
          "cells": {
            "kind": "水溫・2025–2026",
            "id": "B:station-0bfbba8dbe62861a:waterTemperatureC:2025-2026",
            "matched": "9 / 3",
            "meaning": "受限描述資格；嚴格仍不可用"
          }
        }
      ]
    },
    {
      "caption": "真實來源列保留版本與原列身分",
      "columns": [
        {
          "key": "kind",
          "label": "例子"
        },
        {
          "key": "id",
          "label": "精確接受列識別"
        },
        {
          "key": "meaning",
          "label": "保留解讀"
        }
      ],
      "rows": [
        {
          "id": "observed",
          "cells": {
            "kind": "臺北橋・2023-01",
            "id": "river-2023:6ccd7907164ab593ad60c123d764fb473420015f88afaeebb7d25459c1627fb6:6:2023-01:%E6%B7%A1%E6%B0%B4%E6%B2%B3:%E8%87%BA%E5%8C%97%E6%A9%8B",
            "meaning": "27 欄下部分量測；DO4.2／BOD5 2.4／SS20.2／NH3-N1.58 mg/L 為潛在精確輸入，非接受 RPI"
          }
        },
        {
          "id": "censored",
          "cells": {
            "kind": "雙溪取水口・2025-01",
            "id": "river-2025:b5114013df50d2e1fecb2ad446b8134c23858ad408af88f803a58d837664c8e3:10:2025-01:%E9%9B%99%E6%BA%AA:%E9%9B%99%E6%BA%AA%E5%8F%96%E6%B0%B4%E5%8F%A3",
            "meaning": "NH3-N ND<0.02 mg/L；不插補精確值或 RPI"
          }
        },
        {
          "id": "pending",
          "cells": {
            "kind": "雙溪取水口・2026-10",
            "id": "river-2026:39ca05ac221eab632fde2b5d2e359b633d5ffa5fcb2a7ed40a70c8d3b0177f34:154:2026-10:%E9%9B%99%E6%BA%AA:%E9%9B%99%E6%BA%AA%E5%8F%96%E6%B0%B4%E5%8F%A3",
            "meaning": "本月待公布，不是逾期歷史資料"
          }
        },
        {
          "id": "future",
          "cells": {
            "kind": "雙溪取水口・2026-11",
            "id": "river-2026:39ca05ac221eab632fde2b5d2e359b633d5ffa5fcb2a7ed40a70c8d3b0177f34:170:2026-11:%E9%9B%99%E6%BA%AA:%E9%9B%99%E6%BA%AA%E5%8F%96%E6%B0%B4%E5%8F%A3",
            "meaning": "未來占位；無觀測值，排除模式 A"
          }
        }
      ]
    },
    {
      "caption": "敏感度區分選擇與證據範圍改變",
      "columns": [
        {
          "key": "comparison",
          "label": "比較"
        },
        {
          "key": "population",
          "label": "具資格母體"
        },
        {
          "key": "shared",
          "label": "共享識別"
        },
        {
          "key": "added",
          "label": "新增識別"
        },
        {
          "key": "removed",
          "label": "移除識別"
        },
        {
          "key": "meaning",
          "label": "意義"
        }
      ],
      "rows": [
        {
          "id": "strategy-5",
          "cells": {
            "comparison": "缺口 → 均衡，名額五",
            "population": "736 → 736",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "meaning": "相同母體；沒有策略入選效果"
          }
        },
        {
          "id": "capacity",
          "cells": {
            "comparison": "缺口名額五 → 十",
            "population": "736 → 736",
            "shared": "5",
            "added": "5",
            "removed": "0",
            "meaning": "追加 2023 年六月至十月，屬名額效果"
          }
        },
        {
          "id": "strategy-all",
          "cells": {
            "comparison": "缺口 → 均衡，全部",
            "population": "736 → 736",
            "shared": "736",
            "added": "0",
            "removed": "0",
            "meaning": "相同入選集合，順序可不同"
          }
        },
        {
          "id": "year-scope",
          "cells": {
            "comparison": "全部年度 → 僅 2026，名額五",
            "population": "736 → 160 (−576)",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "meaning": "不同母體 A10／B150，非策略或環境效果"
          }
        },
        {
          "id": "b-evidence",
          "cells": {
            "comparison": "B 嚴格 → 受限證據",
            "population": "0 → 823",
            "shared": "0",
            "added": "證據契約改變",
            "removed": "0",
            "meaning": "受限描述不驗證嚴格趨勢"
          }
        }
      ]
    },
    {
      "caption": "實際年度範圍敏感度・名額五，共享零個識別",
      "columns": [
        {
          "key": "rank",
          "label": "順序"
        },
        {
          "key": "removed",
          "label": "移除的全部年度識別"
        },
        {
          "key": "added",
          "label": "新增的僅 2026 識別"
        }
      ],
      "rows": [
        {
          "id": "change-1",
          "cells": {
            "rank": "1",
            "removed": "A:station-b304f8239c8754ee:2023-01",
            "added": "A:station-b304f8239c8754ee:2026-01"
          }
        },
        {
          "id": "change-2",
          "cells": {
            "rank": "2",
            "removed": "A:station-b304f8239c8754ee:2023-02",
            "added": "A:station-b304f8239c8754ee:2026-02"
          }
        },
        {
          "id": "change-3",
          "cells": {
            "rank": "3",
            "removed": "A:station-b304f8239c8754ee:2023-03",
            "added": "A:station-b304f8239c8754ee:2026-03"
          }
        },
        {
          "id": "change-4",
          "cells": {
            "rank": "4",
            "removed": "A:station-b304f8239c8754ee:2023-04",
            "added": "A:station-b304f8239c8754ee:2026-04"
          }
        },
        {
          "id": "change-5",
          "cells": {
            "rank": "5",
            "removed": "A:station-b304f8239c8754ee:2023-05",
            "added": "A:station-b304f8239c8754ee:2026-05"
          }
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": "臺北官方河川水質資料集",
      "url": "https://data.taipei/dataset/detail?id=759db528-77b5-4aa3-b6fa-2b857890214e"
    },
    {
      "label": "官方 RPI 方法",
      "url": "https://wq.moenv.gov.tw/EWQP/zh/Encyclopedia/NounDefinition/Pedia_37.aspx"
    },
    {
      "label": "接受來源版本與原始雜湊",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/source-manifest.json"
    },
    {
      "label": "官方來源可行性",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-source-feasibility.md"
    },
    {
      "label": "年度對帳與歷史比較",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-source-audit.md"
    },
    {
      "label": "監測站身分契約",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-station-identity.md"
    },
    {
      "label": "觀測涵蓋與限定值",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-observation-coverage.md"
    },
    {
      "label": "長期比較與查核方法",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-longitudinal-methodology.md"
    },
    {
      "label": "RPI 字面範圍與接受阻擋條件",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-rpi-methodology.md"
    },
    {
      "label": "地理證據接受",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-geographic-evidence.md"
    },
    {
      "label": "機器可讀結果與完整入選識別",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-results.json"
    },
    {
      "label": "精確不可變快照指標",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/public/data/river-water-policy/current.json"
    },
    {
      "label": "不可變快照・7,016,489 位元組",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/public/data/river-water-policy/snapshots/212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81.json"
    },
    {
      "label": "來源擷取實作",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/fetchRiverWaterPolicySources.ts"
    },
    {
      "label": "來源位元組與身分稽核",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/auditRiverWaterPolicySources.ts"
    },
    {
      "label": "確定性離線快照建置",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/buildRiverWaterPolicySnapshot.ts"
    },
    {
      "label": "重複精確位元組重建驗證",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/verifyRiverWaterPolicy.ts"
    },
    {
      "label": "原始指標與限定值解析",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/utils/riverWaterQuality.ts"
    },
    {
      "label": "完整度、RPI 邊界與驗證",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/utils/riverWaterPolicy.ts"
    },
    {
      "label": "策略、範圍比較與安全匯出",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/utils/riverWaterPolicyScenarios.ts"
    },
    {
      "label": "延遲雙語儀表板",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/RiverWaterPolicyDashboard.tsx"
    },
    {
      "label": "限定值、資格與 RPI 回歸",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/tests/riverWaterPolicy.test.ts"
    },
    {
      "label": "來源與發布回歸",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/tests/riverWaterPolicySources.test.ts"
    },
    {
      "label": "情境與匯出回歸",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/tests/riverWaterPolicyScenarios.test.ts"
    },
    {
      "label": "來源既有瀏覽器查核",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/browser-qa.json"
    },
    {
      "label": "來源既有本機效能",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/performance.json"
    },
    {
      "label": "保留原始民國 112／西元 2023 CSV",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/river-2023-6ccd7907164ab593ad60c123d764fb473420015f88afaeebb7d25459c1627fb6.csv"
    },
    {
      "label": "保留原始民國 113／西元 2024 CSV",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/river-2024-e71033568e29b1cffbc0babefd94ca66f653effd1488611d0b34028e03f04907.csv"
    },
    {
      "label": "保留原始民國 114／西元 2025 CSV",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/river-2025-b5114013df50d2e1fecb2ad446b8134c23858ad408af88f803a58d837664c8e3.csv"
    },
    {
      "label": "保留原始民國 115／西元 2026 CSV",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/river-2026-39ca05ac221eab632fde2b5d2e359b633d5ffa5fcb2a7ed40a70c8d3b0177f34.csv"
    },
    {
      "label": "真實桌機來源追溯與匯出防護",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-en-desktop.png"
    },
    {
      "label": "真實監測證據儀表板・繁中行動版",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-zh-mobile.png"
    }
  ],
  "previewAssets": [
    {
      "label": "真實桌機來源追溯與匯出防護",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-en-desktop.png"
    },
    {
      "label": "真實監測證據儀表板・繁中行動版",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-zh-mobile.png"
    }
  ],
  "futureExtensions": [
    "取得權威別名、歷史站位與實驗室方法連續性紀錄，再進行嚴格長期比較。",
    "接受官方 RPI 精度、四捨五入、共同採樣規則及獨立配對例子後，才產生研究重現 RPI。",
    "實際判定前取得結論專屬的因果、法規、水文與公共健康證據。"
  ],
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "river-water-longitudinal-evidence-review-v1",
    "explanation": "行政查核先處理來源／站位身分與觀測資格。層級及主要問題優先次序，先於穩定識別或群組內河川／站位均衡；水質嚴重度不是選擇權重。",
    "thresholds": {
      "caption": "選擇前的證據門檻",
      "columns": [
        {
          "key": "gate",
          "label": "門檻"
        },
        {
          "key": "rule",
          "label": "必要規則"
        },
        {
          "key": "result",
          "label": "接受版本結果"
        }
      ],
      "rows": [
        {
          "id": "identity",
          "cells": {
            "gate": "來源與身分",
            "rule": "接受版本與有效站期；未解站名保持明示",
            "result": "目前標籤配對 15、未配對 1；歷史實體 16 站未驗證"
          }
        },
        {
          "id": "future",
          "cells": {
            "gate": "觀測期間",
            "rule": "未來空白月份排除；本月空白保持待公布",
            "result": "736 個查核資格；32 個未來占位排除"
          }
        },
        {
          "id": "exact",
          "cells": {
            "gate": "精確比較欄",
            "rule": "唯一具量測列、同月／指標／單位，兩側有效精確值",
            "result": "受限、缺失、重複、無效及無法解析值排除"
          }
        },
        {
          "id": "strict",
          "cells": {
            "gate": "嚴格長期證據",
            "rule": "歷史實體連續性與方法相容性",
            "result": "0 個嚴格比較接受"
          }
        },
        {
          "id": "rpi",
          "cells": {
            "gate": "研究 RPI",
            "rule": "接受精度／四捨五入與共同採樣，不只四項輸入",
            "result": "460 個潛在組合；0 筆接受輸出"
          }
        }
      ]
    },
    "tiers": {
      "caption": "模式 A 文件層級優先次序",
      "columns": [
        {
          "key": "tier",
          "label": "層級"
        },
        {
          "key": "question",
          "label": "主要查核問題"
        },
        {
          "key": "count",
          "label": "具資格母體"
        }
      ],
      "rows": [
        {
          "id": "a",
          "cells": {
            "tier": "A",
            "question": "身分／來源問題優先於量測或涵蓋問題",
            "count": "46"
          }
        },
        {
          "id": "b",
          "cells": {
            "tier": "B",
            "question": "完整度、受限值、未知方法或本期待公布",
            "count": "690"
          }
        },
        {
          "id": "c",
          "cells": {
            "tier": "C",
            "question": "無重大未解問題的例行追查",
            "count": "0"
          }
        }
      ]
    },
    "notes": [
      "主要問題包括重複／無效期間、模糊或未配對身分、河川矛盾、必要身分無法解析、結構不相容及未來量測。",
      "入選 A 級站位首先處理 identity_unmatched；partial_measurement、missing_rpi_inputs、censored_value 與 sampling_method_unknown 等較低優先問題不取代它。",
      "證據缺口優先在層級／問題後按穩定識別排序；監測均衡查核僅在相同層級及主要問題群組內，依河川再依站位代表度考量。",
      "嚴格模式 B 與研究 RPI 各自受獨立資格門檻限制；受限同名比較不會變成已驗證趨勢。"
    ]
  }
};
