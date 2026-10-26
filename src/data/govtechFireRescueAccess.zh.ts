import type { GovTechCase } from "../types/govtechCase";

export const fireRescueAccessCaseZh: GovTechCase = {
  "id": "fire-rescue-access",
  "slug": "fire-rescue-access",
  "displayNumber": "012",
  "policyDomain": "防災整備與公共安全",
  "projectId": "taipei-safety-map",
  "sourceRepository": "https://github.com/LEO0331/taipei-safety-map",
  "sourceVersion": "4e532d697eafb274530d0a1e524f027903a4c4d1",
  "snapshotVersion": "fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524",
  "title": "臺北市消防通道與狹小巷道救災整備證據查核",
  "summary": "從混合版本消防清冊建立可重現行政查核，以保守道路身分契約及明確實際救災證據門檻約束推論。",
  "maturity": "decision-support-poc",
  "maturityLabel": "文件決策支援概念驗證已完成，實際救災整備不可判定",
  "reviewNote": "869筆文件紀錄，僅一筆接受的混合版本關聯；寬度語意、目前淨空、幾何及救災表現仍未驗證。",
  "intendedUsers": "公共安全資料管理者、市政分析人員及開放資料工程師。",
  "implementedCapabilities": [
    "原始位元組來源保存與混合版本對帳",
    "道路、巷道與場所身分契約",
    "可解釋層級與名額／策略敏感度",
    "保守關聯門檻與來源綁定JSON／CSV摘要"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "政策問題與行政查核範圍",
      "paragraphs": [
        "當查核人力有限時，哪些消防通道、狹小巷道與搶救困難場所公告紀錄需要補充文件？本個人工程概念驗證面向市政資料管理者、公共安全分析人員及開放資料工程師。",
        "決策單位是需要追查的文件問題。查核優先次序不代表建物火災風險、車輛淨空認證或緊急救災路線建議。"
      ]
    },
    {
      "id": "evolution",
      "title": "延伸既有公共安全資料探索架構",
      "paragraphs": [
        "既有臺北市公共安全地圖保留資料探索模組與獨立的橋梁文件查核；新增的延遲載入儀表板接受三份消防資料版本，先套用明確身分與證據門檻，再產生查核清單。",
        "作品集透過共用案例元件呈現已驗證的工程決策與固定結果，不重做選擇引擎；一般閱讀也不下載上游研究快照。"
      ]
    },
    {
      "id": "sources",
      "title": "官方來源版本與資料治理",
      "paragraphs": [
        "消防局公告接受來源 A 的185筆消防通道、B的273筆狹小巷道及C的411筆搶救困難場所描述；合計869筆文件紀錄，不是相異實體道路、建物或救災地點數。既有探索版本的185／274／446筆另外保留。",
        "A資源更新於2024-08-01，B／C於2026-08-03；取得日期及固定分析日期為2026-10-25。目錄更新、資源更新、取得與分析日期是不同事實，三者的實際有效基準時間及調查日期均未知。"
      ]
    },
    {
      "id": "identity",
      "title": "道路、巷道與場所身分契約",
      "paragraphs": [
        "來源列、道路名稱、完整路段／巷／弄、門牌範圍、里別、分隊標籤、實體路段與救災動線是不同單位；保留段、巷、弄、附號、範圍與側別，不能壓成道路名稱或猜測座標。",
        "僅允許有限文字正規化。A／B接受條件是有效且相同的行政區、完整名稱完全一致、沒有殘留範圍限定，並具無歧義的一對一解釋；近似名稱、相同分隊／里別或距離接近都不能建立關聯。",
        "資料列識別綁定來源代號、版本雜湊前綴、原始項次、完整列雜湊前綴及出現次序；仍須完整來源雜湊與唯一性檢查，短前綴本身不是完整追溯證據。"
      ]
    },
    {
      "id": "reconciliation",
      "title": "混合版本對帳",
      "paragraphs": [
        "完整解析列比較顯示A有185筆相同；B為164筆相同、109筆僅見於接受版本、110筆僅見於保留版本；C為9／402／437筆。來源項次重編也會造成差異。",
        "公告差異是文件集合差異，不能據此判定新增道路、場所關閉、改善或趨勢。B歷史取得時間未知；歷史工作副本與版本庫位元組雜湊，和新保存的HTTP原始位元組分開標示。"
      ]
    },
    {
      "id": "classification",
      "title": "分類與寬度證據",
      "paragraphs": [
        "B保留公告的196筆紅區與77筆黃區；A列管要件及C評分／認定代碼保留原始文件詞彙。字面代碼驗證不等於有版本依據的嚴重度字典，也不產生危險權重。",
        "CSV寬度欄位未確立單位與量測方法；另一官方PDF雖使用公尺，仍未證實與本版資料列相容。因此數值寬度研究停用；原始寬度文字及紅黃分類均不能認證目前車輛通行淨空。"
      ]
    },
    {
      "id": "matching",
      "title": "實際跨來源關聯結果",
      "paragraphs": [
        "嘗試配對的接受／歧義／拒絕數為A／B的1／49／231、A／C的0／355／238及B／C的0／350／274。沒有候選或不支援的左側資料列另行稽核；配對數不是869筆來源紀錄的可加總分組。",
        "唯一接受的是A6／B116：中正區武昌街1段16巷。這是保守的混合版本文件對應，不是經認證的道路連通、重疊、鄰接關係或官方路段對照。"
      ]
    },
    {
      "id": "methodology",
      "title": "模式A：可解釋行政文件查核",
      "paragraphs": [
        "全部869筆接受資料列均有資格，來源列排除為零；採第一個符合的文件問題層級：A級477筆、B級392筆、C級0筆。例行C級仍是有效分類，但本版沒有資料列同時具備所需字典與地理證據。",
        "證據缺口優先依層級、主要問題先後與來源識別字面順序排列；行政查核均衡保留全域層級順序，再輪流處理來源與行政區。來源、問題、行政區、原始分類與文字篩選先於同一名額選擇。"
      ],
      "content": "methodology"
    },
    {
      "id": "mode-b",
      "title": "模式B：僅一筆接受的文件關聯",
      "paragraphs": [
        "僅A6／B116關聯有資格；兩策略在名額5／10／全部均選出同一筆B級關聯。多餘名額保持未用，歧義及拒絕配對不會擴大可選母體。",
        "追查問題是跨版本文件可比性；關聯層級與端點資料列的其他問題不同，不虛構額外配對成果或策略差異。"
      ]
    },
    {
      "id": "scenarios",
      "title": "實際情境、敏感度與候選範例",
      "paragraphs": [
        "名額10時，均衡查核為A4／B3／C3、涵蓋四區；缺口優先為A10、涵蓋兩區。名額5／10／全部的策略交集為2／2／869筆；這些是行政代表性結果，不是救災表現、經費公平或人口涵蓋成效。",
        "僅來源A的敏感度保留預設五筆識別，卻把資格母體由869改為185；選取相同不代表不同來源母體等價。寬度與幾何敏感度仍不可用，原始名稱僅作文件範例。"
      ],
      "content": "scenarios"
    },
    {
      "id": "geography",
      "title": "地理與實際救災證據門檻",
      "paragraphs": [
        "本案未接受任何GIS幾何；行政區分組只依公告代碼，沒有行政區多邊形驗證。政策儀表板刻意不提供虛構地圖、路線、地理編碼或旅行時間圖；其他探索模組的幾何不挪用於本政策。",
        "模式C實際救災整備不可用：目前車輛淨空、障礙物、實際路網連通、反應時間、分隊派遣可用性及建物火災風險均無已驗證證據；缺值保持未知，不轉成零。"
      ]
    },
    {
      "id": "governance",
      "title": "不可變快照、匯出與測試",
      "paragraphs": [
        "上游流程先驗證保存位元組、欄位與身分契約，再產生內容定址的不可變快照；完整驗證後才以原子重新命名切換指標。失敗時保留先前接受指標，公開快照及摘要省略聯絡電話。",
        "來源SHA-256識別原始CSV；快照識別對不含snapshotId的確定性精簡內容取雜湊；精確檔案SHA-256綁定排版JSON位元組，三者識別不同物件。快照：fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524；精確檔案：704b4c9f72a3746b4216aa96a283794c16fc40ae1013a99d9016d96948f6844d；3353150位元組。",
        "JSON／CSV匯出重跑來源綁定情境並驗證精確快照雜湊；CSV以引號包覆儲存格、中和公式前綴，即使未選資料也保留追溯資訊。來源測試報告為10檔134項；本案例獨立重播12組情境、12組敏感度、位元組完整性與匯出防護，不宣稱已重跑全部上游測試。"
      ]
    },
    {
      "id": "architecture",
      "title": "架構與工程取捨",
      "paragraphs": [
        "將取得、接受、身分、選擇與呈現分層，避免來源失敗被默默轉成實際操作建議；精簡案例頁解釋結果，上游儀表板才按需載入指標與快照。",
        "上游快照3353150位元組，gzip為163305位元組；已記錄的本機Node情境中位數1.64–1.96毫秒是CPU量測，不是瀏覽器延遲或救災反應時間改善。來源應用仍有約892KB主程式警示，政策延遲載入不會消除其他探索模組成本。"
      ],
      "content": "architecture"
    },
    {
      "id": "limitations",
      "title": "限制與後續研究",
      "paragraphs": [
        "本案是文件證據整備，不是實際緊急應變整備；混合來源日期、不完整字典、未綁定寬度語意與僅一筆保守關聯限制推論，不將任何目前道路標為安全、危險、可通行或不可通行。"
      ],
      "content": "future"
    },
    {
      "id": "evidence",
      "title": "來源證據與真實介面截圖",
      "paragraphs": [
        "固定來源版本的文件、保存CSV、確定性結果與真實桌機／手機截圖供查核；來源介面是個人研究工具，不代表官方派遣系統。"
      ],
      "content": "evidence"
    }
  ],
  "architecture": [
    "保存官方CSV與目錄位元組",
    "驗證欄位與混合版本保存鏈",
    "完整身分正規化與關聯稽核",
    "套用文件層級、篩選及名額策略",
    "驗證不可變快照並原子發布指標",
    "延遲儀表板與來源綁定摘要"
  ],
  "architectureNote": "來源流程負責計算，作品集使用單一共用案例元件與逐案資料載入；不接受實際救災GIS幾何或即時政府API。",
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "fire-rescue-access-evidence-review-v1",
    "explanation": "先採文件層級順序，再採確定性問題／識別排序或來源／行政區輪替，不使用數值危險權重。",
    "thresholds": {
      "caption": "文件規則先後順序",
      "columns": [
        {
          "key": "tier",
          "label": "層級"
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
            "rule": "主要身分、分類、行政區衝突或歧義關聯，採第一個符合的問題。"
          }
        },
        {
          "id": "1",
          "cells": {
            "tier": "B",
            "rule": "其他文件缺口：範圍、多里、字典、來源可比性、缺乏幾何或未配對。"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "C",
            "rule": "未發現重大問題，本版沒有資料列符合。"
          }
        }
      ]
    },
    "tiers": {
      "caption": "實際文件層級母體",
      "columns": [
        {
          "key": "tier",
          "label": "層級"
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
            "count": "477"
          }
        },
        {
          "id": "1",
          "cells": {
            "tier": "B",
            "count": "392"
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
    "notes": [
      "全部869筆接受來源列具資格，來源列排除零筆。",
      "C級零筆是觀察結果，不是強制配額。",
      "模式B僅一筆接受關聯，模式C不可用。"
    ]
  },
  "scenarioTables": [
    {
      "caption": "接受來源母體與歷史探索筆數",
      "columns": [
        {
          "key": "source",
          "label": "來源"
        },
        {
          "key": "accepted",
          "label": "接受列數"
        },
        {
          "key": "retained",
          "label": "歷史列數"
        },
        {
          "key": "updated",
          "label": "資源更新"
        },
        {
          "key": "encoding",
          "label": "編碼"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "source": "A",
            "accepted": "185",
            "retained": "185",
            "updated": "2024-08-01T10:22:27+08:00",
            "encoding": "utf-8"
          }
        },
        {
          "id": "1",
          "cells": {
            "source": "B",
            "accepted": "273",
            "retained": "274",
            "updated": "2026-08-03T09:26:14+08:00",
            "encoding": "big5"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "C",
            "accepted": "411",
            "retained": "446",
            "updated": "2026-08-03T09:32:19+08:00",
            "encoding": "utf-8"
          }
        }
      ]
    },
    {
      "caption": "完整解析列版本比較",
      "columns": [
        {
          "key": "source",
          "label": "來源"
        },
        {
          "key": "same",
          "label": "相同"
        },
        {
          "key": "incoming",
          "label": "僅接受版本"
        },
        {
          "key": "retained",
          "label": "僅保留版本"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "source": "A",
            "same": "185",
            "incoming": "0",
            "retained": "0"
          }
        },
        {
          "id": "1",
          "cells": {
            "source": "B",
            "same": "164",
            "incoming": "109",
            "retained": "110"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "C",
            "same": "9",
            "incoming": "402",
            "retained": "437"
          }
        }
      ]
    },
    {
      "caption": "嘗試配對結果，與未配對列分開",
      "columns": [
        {
          "key": "pair",
          "label": "來源對"
        },
        {
          "key": "accepted",
          "label": "接受"
        },
        {
          "key": "ambiguous",
          "label": "歧義"
        },
        {
          "key": "rejected",
          "label": "拒絕"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "pair": "A/B",
            "accepted": "1",
            "ambiguous": "49",
            "rejected": "231"
          }
        },
        {
          "id": "1",
          "cells": {
            "pair": "A/C",
            "accepted": "0",
            "ambiguous": "355",
            "rejected": "238"
          }
        },
        {
          "id": "2",
          "cells": {
            "pair": "B/C",
            "accepted": "0",
            "ambiguous": "350",
            "rejected": "274"
          }
        }
      ]
    },
    {
      "caption": "模式A實際名額與策略情境",
      "columns": [
        {
          "key": "capacity",
          "label": "名額"
        },
        {
          "key": "strategy",
          "label": "策略"
        },
        {
          "key": "eligible",
          "label": "資格母體"
        },
        {
          "key": "selected",
          "label": "選取"
        },
        {
          "key": "sources",
          "label": "來源組成"
        },
        {
          "key": "districts",
          "label": "行政區標籤"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "capacity": "5",
            "strategy": "證據缺口優先",
            "eligible": "869",
            "selected": "5",
            "sources": "A:5",
            "districts": "2"
          }
        },
        {
          "id": "1",
          "cells": {
            "capacity": "5",
            "strategy": "行政查核均衡",
            "eligible": "869",
            "selected": "5",
            "sources": "A:2 / B:2 / C:1",
            "districts": "2"
          }
        },
        {
          "id": "2",
          "cells": {
            "capacity": "10",
            "strategy": "證據缺口優先",
            "eligible": "869",
            "selected": "10",
            "sources": "A:10",
            "districts": "2"
          }
        },
        {
          "id": "3",
          "cells": {
            "capacity": "10",
            "strategy": "行政查核均衡",
            "eligible": "869",
            "selected": "10",
            "sources": "A:4 / B:3 / C:3",
            "districts": "4"
          }
        },
        {
          "id": "4",
          "cells": {
            "capacity": "全部",
            "strategy": "證據缺口優先",
            "eligible": "869",
            "selected": "869",
            "sources": "A:185 / B:273 / C:411",
            "districts": "12"
          }
        },
        {
          "id": "5",
          "cells": {
            "capacity": "全部",
            "strategy": "行政查核均衡",
            "eligible": "869",
            "selected": "869",
            "sources": "A:185 / B:273 / C:411",
            "districts": "12"
          }
        }
      ]
    },
    {
      "caption": "模式B實際名額與策略情境",
      "columns": [
        {
          "key": "capacity",
          "label": "名額"
        },
        {
          "key": "strategy",
          "label": "策略"
        },
        {
          "key": "eligible",
          "label": "資格母體"
        },
        {
          "key": "selected",
          "label": "選取"
        },
        {
          "key": "sources",
          "label": "來源組成"
        },
        {
          "key": "districts",
          "label": "行政區標籤"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "capacity": "5",
            "strategy": "證據缺口優先",
            "eligible": "1",
            "selected": "1",
            "sources": "A/B:1",
            "districts": "1"
          }
        },
        {
          "id": "1",
          "cells": {
            "capacity": "5",
            "strategy": "行政查核均衡",
            "eligible": "1",
            "selected": "1",
            "sources": "A/B:1",
            "districts": "1"
          }
        },
        {
          "id": "2",
          "cells": {
            "capacity": "10",
            "strategy": "證據缺口優先",
            "eligible": "1",
            "selected": "1",
            "sources": "A/B:1",
            "districts": "1"
          }
        },
        {
          "id": "3",
          "cells": {
            "capacity": "10",
            "strategy": "行政查核均衡",
            "eligible": "1",
            "selected": "1",
            "sources": "A/B:1",
            "districts": "1"
          }
        },
        {
          "id": "4",
          "cells": {
            "capacity": "全部",
            "strategy": "證據缺口優先",
            "eligible": "1",
            "selected": "1",
            "sources": "A/B:1",
            "districts": "1"
          }
        },
        {
          "id": "5",
          "cells": {
            "capacity": "全部",
            "strategy": "行政查核均衡",
            "eligible": "1",
            "selected": "1",
            "sources": "A/B:1",
            "districts": "1"
          }
        }
      ]
    },
    {
      "caption": "模式A策略交集",
      "columns": [
        {
          "key": "capacity",
          "label": "名額"
        },
        {
          "key": "shared",
          "label": "共同"
        },
        {
          "key": "added",
          "label": "均衡新增"
        },
        {
          "key": "removed",
          "label": "均衡移除"
        },
        {
          "key": "equivalent",
          "label": "母體等價"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "capacity": "5",
            "shared": "2",
            "added": "3",
            "removed": "3",
            "equivalent": "是"
          }
        },
        {
          "id": "1",
          "cells": {
            "capacity": "10",
            "shared": "2",
            "added": "8",
            "removed": "8",
            "equivalent": "是"
          }
        },
        {
          "id": "2",
          "cells": {
            "capacity": "全部",
            "shared": "869",
            "added": "0",
            "removed": "0",
            "equivalent": "是"
          }
        }
      ]
    },
    {
      "caption": "相對預設缺口優先五筆的實際敏感度",
      "columns": [
        {
          "key": "scope",
          "label": "變更範圍"
        },
        {
          "key": "eligible",
          "label": "資格母體"
        },
        {
          "key": "selected",
          "label": "選取"
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
          "key": "equivalent",
          "label": "母體等價"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "scope": "全部來源",
            "eligible": "869",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "是"
          }
        },
        {
          "id": "1",
          "cells": {
            "scope": "來源A",
            "eligible": "185",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "否"
          }
        },
        {
          "id": "2",
          "cells": {
            "scope": "來源B",
            "eligible": "273",
            "selected": "5",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "equivalent": "否"
          }
        },
        {
          "id": "3",
          "cells": {
            "scope": "來源C",
            "eligible": "411",
            "selected": "5",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "equivalent": "否"
          }
        },
        {
          "id": "4",
          "cells": {
            "scope": "全部問題層級",
            "eligible": "869",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "是"
          }
        },
        {
          "id": "5",
          "cells": {
            "scope": "主要問題",
            "eligible": "477",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "否"
          }
        },
        {
          "id": "6",
          "cells": {
            "scope": "文件問題",
            "eligible": "392",
            "selected": "5",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "equivalent": "否"
          }
        },
        {
          "id": "7",
          "cells": {
            "scope": "名額5",
            "eligible": "869",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "是"
          }
        },
        {
          "id": "8",
          "cells": {
            "scope": "名額10",
            "eligible": "869",
            "selected": "10",
            "shared": "5",
            "added": "5",
            "removed": "0",
            "equivalent": "是"
          }
        },
        {
          "id": "9",
          "cells": {
            "scope": "全部名額",
            "eligible": "869",
            "selected": "869",
            "shared": "5",
            "added": "864",
            "removed": "0",
            "equivalent": "是"
          }
        },
        {
          "id": "10",
          "cells": {
            "scope": "證據缺口優先",
            "eligible": "869",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "是"
          }
        },
        {
          "id": "11",
          "cells": {
            "scope": "行政查核均衡",
            "eligible": "869",
            "selected": "5",
            "shared": "2",
            "added": "3",
            "removed": "3",
            "equivalent": "是"
          }
        }
      ]
    },
    {
      "caption": "原始文件範例，非現場狀態",
      "columns": [
        {
          "key": "source",
          "label": "來源項次"
        },
        {
          "key": "name",
          "label": "公告原始名稱"
        },
        {
          "key": "meaning",
          "label": "查核界線"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "source": "A1",
            "name": "永春街",
            "meaning": "原始名稱，僅文件紀錄"
          }
        },
        {
          "id": "1",
          "cells": {
            "source": "B1",
            "name": "齊東街82巷",
            "meaning": "原始名稱，僅文件紀錄"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "C1",
            "name": "喜來登大飯店",
            "meaning": "原始名稱，僅文件紀錄"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "A7",
            "name": "臨沂街（52號至信義路口）",
            "meaning": "原始名稱，僅文件紀錄"
          }
        },
        {
          "id": "4",
          "cells": {
            "source": "C19",
            "name": "城中市場",
            "meaning": "原始名稱，僅文件紀錄"
          }
        }
      ]
    },
    {
      "caption": "名額10的精確選取順序與識別",
      "columns": [
        {
          "key": "strategy",
          "label": "策略"
        },
        {
          "key": "rank",
          "label": "順序"
        },
        {
          "key": "id",
          "label": "來源綁定識別"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "1",
            "id": "A-873c138fbc367b31-s1-14ef98c124eb-o1"
          }
        },
        {
          "id": "1",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "2",
            "id": "A-873c138fbc367b31-s10-253ac0e3b7d5-o1"
          }
        },
        {
          "id": "2",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "3",
            "id": "A-873c138fbc367b31-s100-50472be412f2-o1"
          }
        },
        {
          "id": "3",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "4",
            "id": "A-873c138fbc367b31-s101-9e3818800fc1-o1"
          }
        },
        {
          "id": "4",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "5",
            "id": "A-873c138fbc367b31-s102-2bf1009b036d-o1"
          }
        },
        {
          "id": "5",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "6",
            "id": "A-873c138fbc367b31-s103-3ccd81eb28f3-o1"
          }
        },
        {
          "id": "6",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "7",
            "id": "A-873c138fbc367b31-s104-4571612beec2-o1"
          }
        },
        {
          "id": "7",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "8",
            "id": "A-873c138fbc367b31-s105-3ab375746429-o1"
          }
        },
        {
          "id": "8",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "9",
            "id": "A-873c138fbc367b31-s106-ff74c3215e57-o1"
          }
        },
        {
          "id": "9",
          "cells": {
            "strategy": "證據缺口優先",
            "rank": "10",
            "id": "A-873c138fbc367b31-s109-bd5c8d6a37fc-o1"
          }
        },
        {
          "id": "10",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "1",
            "id": "A-873c138fbc367b31-s100-50472be412f2-o1"
          }
        },
        {
          "id": "11",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "2",
            "id": "B-d1882db87b8d0bc3-s134-ff5183b93eea-o1"
          }
        },
        {
          "id": "12",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "3",
            "id": "C-a8ff6929d2f53438-s294-ee8091906b65-o1"
          }
        },
        {
          "id": "13",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "4",
            "id": "A-873c138fbc367b31-s1-14ef98c124eb-o1"
          }
        },
        {
          "id": "14",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "5",
            "id": "B-d1882db87b8d0bc3-s1-753fc6fbad13-o1"
          }
        },
        {
          "id": "15",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "6",
            "id": "C-a8ff6929d2f53438-s1-d9b9ed039087-o1"
          }
        },
        {
          "id": "16",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "7",
            "id": "A-873c138fbc367b31-s48-e63aca60e176-o1"
          }
        },
        {
          "id": "17",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "8",
            "id": "B-d1882db87b8d0bc3-s209-b362c57f5742-o1"
          }
        },
        {
          "id": "18",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "9",
            "id": "C-a8ff6929d2f53438-s107-70159f003281-o1"
          }
        },
        {
          "id": "19",
          "cells": {
            "strategy": "行政查核均衡",
            "rank": "10",
            "id": "A-873c138fbc367b31-s68-a79060a55b0d-o1"
          }
        }
      ]
    },
    {
      "caption": "原始來源完整性與取得",
      "columns": [
        {
          "key": "source",
          "label": "來源"
        },
        {
          "key": "hash",
          "label": "原始CSV SHA-256"
        },
        {
          "key": "bytes",
          "label": "位元組"
        },
        {
          "key": "acquired",
          "label": "取得時間"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "source": "A",
            "hash": "873c138fbc367b3123412785c2d1492fa7f4b2d1f73b4788f40587ce77145797",
            "bytes": "20055",
            "acquired": "2026-10-25T01:20:09.125Z"
          }
        },
        {
          "id": "1",
          "cells": {
            "source": "B",
            "hash": "d1882db87b8d0bc3e27f3bb74ec7c604446becc80d2f0f3e1e90d817e4eccb00",
            "bytes": "13191",
            "acquired": "2026-10-25T01:20:09.577Z"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "C",
            "hash": "a8ff6929d2f53438e50a94b7d0abbdc983f0300ef54b6e87b82596c349287049",
            "bytes": "27013",
            "acquired": "2026-10-25T01:20:10.072Z"
          }
        }
      ]
    },
    {
      "caption": "快照身分與接受關聯識別",
      "columns": [
        {
          "key": "object",
          "label": "物件"
        },
        {
          "key": "value",
          "label": "精確值"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "object": "快照識別",
            "value": "fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524"
          }
        },
        {
          "id": "1",
          "cells": {
            "object": "精確檔案SHA-256",
            "value": "704b4c9f72a3746b4216aa96a283794c16fc40ae1013a99d9016d96948f6844d"
          }
        },
        {
          "id": "2",
          "cells": {
            "object": "精確位元組",
            "value": "3353150"
          }
        },
        {
          "id": "3",
          "cells": {
            "object": "方法",
            "value": "fire-rescue-access-evidence-review-v1"
          }
        },
        {
          "id": "4",
          "cells": {
            "object": "接受關聯",
            "value": "AB:A-873c138fbc367b31-s6-689c86c8f283-o1:B-d1882db87b8d0bc3-s116-aa2526288a45-o1"
          }
        },
        {
          "id": "5",
          "cells": {
            "object": "左側來源識別",
            "value": "A-873c138fbc367b31-s6-689c86c8f283-o1"
          }
        },
        {
          "id": "6",
          "cells": {
            "object": "右側來源識別",
            "value": "B-d1882db87b8d0bc3-s116-aa2526288a45-o1"
          }
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": "官方來源保存稽核",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-source-audit.md"
    },
    {
      "label": "身分與保守配對契約",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-identity-contract.md"
    },
    {
      "label": "分類與寬度證據門檻",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-classification-and-width.md"
    },
    {
      "label": "地理與實際救災證據門檻",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-geographic-evidence.md"
    },
    {
      "label": "確定性查核方法",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-methodology.md"
    },
    {
      "label": "實際JSON結果與選取識別",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-results.json"
    },
    {
      "label": "上游Node效能紀錄，非瀏覽器時間",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-performance.json"
    },
    {
      "label": "原始繁體中文工程研究",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-decision-mvp.zh-TW.md"
    },
    {
      "label": "接受來源清單",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/sources.json"
    },
    {
      "label": "精確檔案快照指標",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/public/data/fire-rescue-access-policy/current.json"
    },
    {
      "label": "不可變來源快照，約3.35MB",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/public/data/fire-rescue-access-policy/fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524.json"
    },
    {
      "label": "身分正規化與關聯實作",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/src/lib/fireRescueAccessIdentity.ts"
    },
    {
      "label": "實際選擇引擎與JSON／CSV匯出",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/src/lib/fireRescueAccessScenarios.ts"
    },
    {
      "label": "延遲載入雙語來源儀表板",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/src/FireRescueAccessPolicyDashboard.tsx"
    },
    {
      "label": "保存原始CSV A",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/pending/2026-10-25-01-20-08-515-/A.csv"
    },
    {
      "label": "保存原始CSV B",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/pending/2026-10-25-01-20-08-515-/B.csv"
    },
    {
      "label": "保存原始CSV C",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/pending/2026-10-25-01-20-08-515-/C.csv"
    },
    {
      "label": "官方來源A目錄",
      "url": "https://data.taipei/dataset/detail?id=7a800e92-eb22-461f-b29d-8def2127a1bc"
    },
    {
      "label": "官方來源B目錄",
      "url": "https://data.taipei/dataset/detail?id=95c2eed3-8253-4dce-bf8e-1d6a01517514"
    },
    {
      "label": "官方來源C目錄",
      "url": "https://data.taipei/dataset/detail?id=0f322478-e09b-46af-8019-caeaa79678d7"
    },
    {
      "label": "上游真實英文桌機研究介面",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-desktop.png"
    },
    {
      "label": "上游真實中文手機研究介面",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-mobile.png"
    }
  ],
  "previewAssets": [
    {
      "label": "上游真實英文桌機研究介面",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-desktop.png"
    },
    {
      "label": "上游真實中文手機研究介面",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-mobile.png"
    }
  ],
  "futureExtensions": [
    "取得有版本依據的分類字典及寬度量測語意，才進行數值研究。",
    "路線研究須具權威路段身分、相容幾何、現況測量與障礙物證據。",
    "實際救災整備另須車輛／人員可用性、派遣歷史與官方驗證。"
  ]
};
