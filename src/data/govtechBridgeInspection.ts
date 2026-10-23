import type { GovTechCase } from "../types/govtechCase";

export const BRIDGE_INSPECTION_SOURCE_SHA = "deb812b3472c078b5879727953e85d2850f0a82c";
export const BRIDGE_INSPECTION_METHOD_ID = "bridge-inspection-evidence-review-v1";
export const BRIDGE_INSPECTION_ANALYSIS_DATE = "2026-10-23";
export const BRIDGE_INSPECTION_SNAPSHOT_ID = "bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a";
export const BRIDGE_INSPECTION_SNAPSHOT_SHA256 = "a580fb3356a84fc86fe4c4f4a811f115f490769ff15700bec5b69f88008b7782";
export const BRIDGE_INSPECTION_A_SHA256 = "3b6d39373759036e725412474636ea328828297902990ca319452893e05121ee";
export const BRIDGE_INSPECTION_B_SHA256 = "f9626b5f21bc392fbb3199962749d14daf73aa7840057346b648999c8cb49910";
export const BRIDGE_INSPECTION_HISTORICAL_SHA256 = "ee4afe5592522651403d2d6173f59620884857b1d5129b83498b4eab0e3701fc";
export const bridgePolicySource = (path: string): string => `https://github.com/LEO0331/taipei-safety-map/blob/${BRIDGE_INSPECTION_SOURCE_SHA}/${path}`;

export const bridgeInspectionCase: GovTechCase = {
  "id": "bridge-inspection",
  "slug": "bridge-inspection",
  "displayNumber": "009",
  "projectId": "taipei-safety-map",
  "policyDomain": "Disaster Preparedness & Public Safety",
  "sourceRepository": "https://github.com/LEO0331/taipei-safety-map",
  "sourceVersion": "deb812b3472c078b5879727953e85d2850f0a82c",
  "snapshotVersion": "bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a",
  "title": "Bridge Inspection & Maintenance Decision Support",
  "summary": "From official bridge records to conservative asset reconciliation, bounded geographic admission and reproducible documentation-review scenarios.",
  "maturity": "decision-support-poc",
  "maturityLabel": "Completed evidence-review and bounded geographic investigation POC",
  "reviewNote": "216 within-edition research associations; 194 pass geographic admission. No official A↔B crosswalk; Mode C structural assessment remains unavailable.",
  "intendedUsers": "Infrastructure data stewards, public works analysts, asset administrators, inspection documentation teams and civic engineering researchers.",
  "implementedCapabilities": [
    "Two official sources with retained original-byte provenance",
    "Conservative within-edition identity reconciliation",
    "Independent coordinate/category admission",
    "Deterministic tiers, capacities and administrative balancing",
    "Eligibility sensitivity and auditable JSON/CSV exports"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "Policy Problem and Decision Scope",
      "paragraphs": [
        "When municipal investigation capacity is limited, which published bridge inspection and maintenance records should be checked first for identity conflicts, missing documentation or source discrepancies? A searchable table cannot resolve the meaning, identity and admissibility of its own records.",
        "The POC allocates administrative investigation slots for infrastructure data stewards, public works analysts, asset-inventory administrators, inspection documentation teams and civic engineering researchers. Published records, inventory entries, research associations, geographic eligibility and review priorities are distinct evidence units; structural-safety assessment requires a different evidence base."
      ]
    },
    {
      "id": "evolution",
      "title": "From Public-Safety Explorer to Policy #9",
      "paragraphs": [
        "The existing bilingual taipei-safety-map organizes emergency/resource, infrastructure and historical public-safety datasets without a combined safety score. Its independent bridge transparency directory has 416 published rows and 415 within-source groups, without validated inspection-linked geography.",
        "Policy #9 adds two-source acquisition, original-byte governance, conservative asset reconciliation, geographic screening, deterministic evidence tiers, 5/10/all scenarios and auditable exports. The historical explorer and its source edition remain separate. PR #6 is merged at the pinned source commit; pre-merge delivery wording about blocked PR creation is historical."
      ]
    },
    {
      "id": "sources",
      "title": "Official Inspection and Inventory Editions",
      "paragraphs": [
        "Source A is 臺北市橋梁檢測及維修資料, dataset 27135efa-d43e-406d-a3e4-fcb07efb3982, resource 9a1f7632-67e1-4d81-bcb0-6a6b4c721868: 416 CSV rows, 47,974 bytes, resource updated 2025-06-23T15:55:02+08:00. Source B is 臺北市橋梁資訊, dataset 866a9982-0a63-421f-b120-9144fc6ce732, resource 68d6c971-d077-4578-a52e-e42db765f861: 612 JSON rows, 561,387 bytes, resource updated 2025-12-16T09:41:34+08:00.",
        "Both catalogues name 臺北市政府工務局新建工程處, UTF-8 resources, irregular refresh and Government Open Data License v1. Catalogue metadata updates are 2026-09-22T19:09:08+08:00 for A and 19:13:04+08:00 for B. These are not inspection event dates. Actual accepted acquisitions completed 2026-10-23T04:03:31.388Z and 04:03:32.360Z respectively; analysis is separately fixed at 2026-10-23."
      ]
    },
    {
      "id": "lineage",
      "title": "Original Bytes, Newline Lineage and Admission",
      "paragraphs": [
        "Accepted original-byte SHA-256 values are A 3b6d39373759036e725412474636ea328828297902990ca319452893e05121ee and B f9626b5f21bc392fbb3199962749d14daf73aa7840057346b648999c8cb49910. Historical A in Git is an LF-normalized 47,557-byte representation, hash ee4afe5592522651403d2d6173f59620884857b1d5129b83498b4eab0e3701fc. The accepted download has CRLF; parsed original fields are equivalent, so this is not a demonstrated inspection-data revision.",
        "Original historical acquisition remains unknown; checkout line endings or filesystem timestamps cannot recover it. Policy raw/output files disable Git newline normalization. Offline verification is the default. Explicit refresh stages four bounded catalogue/resource requests with exact HTTPS host checks, redirect rejection, 30-second timeout and 5 MB ceiling; failure cannot promote the edition. Changed A requires a separate source-version review, preserving the historical explorer."
      ]
    },
    {
      "id": "units",
      "title": "Statistical Units and Inspection Data Quality",
      "paragraphs": [
        "A contains 416 source rows but 415 historical and conservative composite groups. Two rows in one apparent group have conflicting documentary values; both remain separately traceable. Row identities bind source-byte hash prefix, original parsed CSV record number and canonical raw-field hash. Source sequence and CSV row number are retained separately.",
        "Missing values: inspection year 1, maintenance year 314 and maintenance cost 317. All 416 rows publish inspection results; no malformed years or costs were found. Missing maintenance year does not establish that work never happened; missing cost is null, not zero expenditure. Neither rows nor name/district/authority composites certify a physical bridge count."
      ]
    },
    {
      "id": "inventory",
      "title": "Inventory IDs, Collisions and Scope",
      "paragraphs": [
        "B has 612 rows and 612 distinct source ID values. Nonblank bridge_id appears on 455 rows, comprising 413 distinct values: 404 rows have a unique nonblank ID, while 51 rows share 9 repeated IDs; 157 rows are blank. A source ID, an edition-bound inventory row and bridge_id serve different contracts. A blank bridge_id alone does not reject an otherwise unique research association.",
        "Inventory sections are 新建工程處427, 大地工程處31, 水利工程處153 and 公園路燈工程管理處1; categories are 橋梁580, 箱涵28, 其他4. Published inspect_rate is 12 months on57 rows and24 months on555. These inventory distributions do not mean selected investigations balance four agencies or that every listed interval applies to an inspection event. Three duplicate object-coordinate groups of two rows each remain distinct records."
      ]
    },
    {
      "id": "identity",
      "title": "Conservative Cross-source Reconciliation",
      "paragraphs": [
        "No authoritative government A↔B crosswalk was established. Exact-name research matching normalizes full-width ASCII, whitespace and 臺/台 only; parentheses, directions, numbering and suffixes remain significant. For example 橋① is not normalized to 橋1. Names must agree with published district and compatible responsible authority; only the full municipal public-works prefix is removed as an authority alias.",
        "Admission requires a unique compatible candidate, valid unique source ID and no disqualifying duplicate bridge_id. Multiple candidates, malformed IDs and reused inventory candidates remain ambiguous; same name with conflicting district/authority is rejected. No unrestricted fuzzy or point-distance matching is used. Name-based composites do not establish longitudinal or physical-site identity."
      ]
    },
    {
      "id": "associations",
      "title": "Accepted, Ambiguous, Rejected and Unmatched",
      "paragraphs": [
        "Actual A outcomes are 216 accepted within-edition research associations, 5 ambiguous, 18 rejected district/authority associations and177 without a normalized-name counterpart, summing to416. The216 accepted links involve216 B rows;396 B rows have no accepted association, including374 with no normalized-name counterpart in A.",
        "Two A rows have multiple named candidates and one otherwise compatible row is blocked by a many-to-one conflict. These diagnostics may overlap; they are not extra population bins. Unaccepted rows cannot inherit inventory ID, interval or coordinates. An accepted documentary link still needs the independent geographic/category gate; none is government-certified correspondence."
      ]
    },
    {
      "id": "geography",
      "title": "Geographic Evidence Screening and Admission",
      "paragraphs": [
        "B exposes Obj_Longitude/Obj_Latitude separately from Longitude_start/Latitude_start and Longitude_end/Latitude_end. Finite scalar numeric pairs are screened against Taiwan119–123°E/21–26°N and the object against broad Taipei121.4–121.7°E/24.9–25.3°N; CountyCode63000 and recognized AreaCode labels are required. Reversed axes, empty strings, arrays and booleans cannot become coordinates.",
        "Available object/endpoints are checked independently for gross contradictions: object-to-endpoint over12km or endpoint separation over15km excludes the record. Missing endpoints remain limitations without automatically rejecting a coherent object point. All612 B coordinate sets are plausible in this edition;32 non-bridge categories (28culverts/4other) leave580 inventory reference points. Accepted216 minus22 category/geographic exclusions yields194 mapped documentation records;222 of416 A rows lack admitted inspection geography."
      ]
    },
    {
      "id": "tiers",
      "title": "Mode A Evidence Tiers",
      "paragraphs": [
        "Method bridge-inspection-evidence-review-v1 uses first-matching qualitative rules. Tier A covers malformed/future years, missing names, conflicting groups, duplicate sequence, ambiguous or rejected identities. Tier B covers other documentary questions, including missing fields, unmatched identity, unverified interval or result terminology and geographic exclusion. Tier C would be routine follow-up with no outstanding issue.",
        "Production counts are A23/B393/C0. Every row retains result-terminology-unverified, so zero C is intentional. All416 records remain available for Mode A regardless of geographic admission. There is no weighted danger score: missingness, cost, age and dimensions do not quantify structural condition or resident risk."
      ],
      "content": "methodology"
    },
    {
      "id": "mode-a",
      "title": "Mode A Capacity and Administrative Representation",
      "paragraphs": [
        "Evidence Gaps First orders A/B/C and then source-bound ID in code-point order; lexical IDs deliberately differ from numerical row ordering. Balanced Administrative Review cycles through district-label queues in Unicode order, preserving tier/ID precedence within each queue. Filters apply before selection;5/10/all are documentation slots, not maintenance budgets.",
        "Capacity5: evidence-first5A/2groups versus balanced2A+3B/5groups, sharing0IDs. Capacity10:10A/5groups versus4A+6B/10groups, sharing1ID. All selects the same416 members,23A+393B,across28 published administrative labels; order may differ. Cross-district strings are preserved, so28 labels are not28 certified geographic districts. Every selected set represents the one A authority 新建工程處, not the four B inventory sections."
      ]
    },
    {
      "id": "mode-b",
      "title": "Mode B Geographic Documentation Cohort",
      "paragraphs": [
        "Mode B is completed for the194 A documentation records with accepted within-edition association and admitted B reference point. Its eligibility excludes222 A records; the distinct independent inventory layer has580 eligible reference rows. These cohorts are not interchangeable. Broader documentary eligibility never assigns coordinates to ambiguous or rejected records.",
        "Official labels and plausible degrees support display, but no authoritative CRS/datum certification, projection transformation or district polygon containment was performed. boundaryValidated remains false. The object is not necessarily a bridge center, entrance or surveyed alignment; endpoints do not certify a bridge axis. Blue markers carry inspection text only after accepted linkage and screening; grey inventory markers carry no attached inspection result."
      ]
    },
    {
      "id": "scenarios",
      "title": "Actual Mode A and Mode B Scenarios",
      "paragraphs": [
        "The geographic subset contains194 Tier B records. Capacity5 represents1 versus5 published groups and shares0IDs; capacity10 represents2 versus10 groups and shares2IDs. All194 members represent12 source groups under both strategies. These are bounded administrative research lists; neither representation nor proximity demonstrates funding fairness or safety.",
        "The upstream map caps display at200 points, while candidate cards paginate20 and the first200 inventory points also have a20-row text equivalent. This cap is not the complete612-row source or580-point admitted inventory. The tables below use bounded first-five examples with exact source-bound IDs; the pinned results export preserves all capacity10 and all-selected lists."
      ],
      "content": "scenarios"
    },
    {
      "id": "sensitivity",
      "title": "Eligibility Sensitivity and Source-Prose Discrepancies",
      "paragraphs": [
        "Default Mode A evidence-first capacity5 admits416. Accepted-only admits216; accepted-or-ambiguous documentation admits221; accepted/geographic admits194; critical-conflicts-only admits23. Compare exact IDs and first-match exclusion counts rather than treating population changes as policy benefit. Wider documentary admission does not grant geography.",
        "The executable source and published results take precedence over inconsistent prose: accepted-only and geographic have the same top five (r102–r106); accepted-or-ambiguous instead selects five ambiguous Tier A rows. All three identity/geography restrictions replace all five default IDs. Critical-only retains the default five IDs despite its smaller23-row population. Stable results are reported as such; no forced sensitivity difference is invented."
      ]
    },
    {
      "id": "examples",
      "title": "Real Records and Conservative Exclusions",
      "paragraphs": [
        "安泰橋 (A row24, sequence23) is accepted and geographically admitted, Tier B; questions concern inspection terminology and maintenance completeness. 康樂橋 (row23, sequence22) is ambiguous and receives no inspection-linked marker. 社教館人行地下道 (row2) has no name counterpart; no inventory relationship is invented. 中正橋 (row311) lacks a published inspection year, requiring clarification rather than a definitive overdue finding.",
        "康忠橋 (A row63) has an accepted documentary association but fails the bridge-category geography gate. 水源高架匝道C (B row1, ID45551,bridge_idD021) is inventory-only with a duplicate bridge-ID flag and no attached inspection result. 青礐橋 (B row25,ID28769) is a numerically plausible 箱涵 record intentionally excluded from the bridge map. Category exclusions do not imply neglect or unsafe condition. Exact IDs and original fields remain in pinned results."
      ]
    },
    {
      "id": "time",
      "title": "Year-only Inspection and Maintenance-cost Semantics",
      "paragraphs": [
        "最近一期檢測年度 and 最近一期維護年度 conservatively parse ROC or Gregorian years. Month/day remain null; a calendar-year difference from the fixed analysis date is not a verified interval since actual field work. B inspect_rate is months per inspection, but applicable obligations, exceptions, edition alignment and actual event dates are unverified.",
        "The engine does not calculate definitive overdue percentages or compliance. Empty cost remains null, while only an explicit published zero becomes zero. Original text is retained alongside parsed values. Missing years, spending and published result terminology cannot determine repair urgency, closure or structural condition."
      ]
    },
    {
      "id": "architecture",
      "title": "Static Architecture, Integrity and Exports",
      "paragraphs": [
        "Offline acquisition and strict CSV/JSON validation retain original fields before edition-bound row identities, conservative reconciliation and coordinate/category screening produce the snapshot. Deterministic browser scenarios only filter and order retained candidates. Existing React navigation, language type, Leaflet, CSV parser and source explorer contract are reused; no new dependency or production backend is introduced.",
        "Snapshot content ID hashes the canonical payload excluding its self-reference; exact-file SHA-256 separately hashes pretty-printed bytes. Immutable file publication precedes atomic pointer rename. Module entry loads current.json and its named file; browser validates version/name, SHA-256,policyId and snapshotId, failing with retry on mismatch. PWA acquires policy assets on demand, using a network-first pointer and immutable-file cache.",
        "JSON/CSV exports preserve source hashes, method, settings, exclusions and actual selections. CSV quoting and formula-prefix guards cover leading control/whitespace characters; complete provenance appears once in the first data row, including empty selection, avoiding quadratic metadata repetition. Source and selected scopes are bounded at10000,download size at20MB. Portfolio itself renders static authored summaries and links; it never runs this engine or fetches the policy snapshot."
      ],
      "content": "architecture"
    },
    {
      "id": "verification",
      "title": "Verification, Performance and Reproducibility",
      "paragraphs": [
        "Upstream records7test files/88passing tests, TypeScript production build, no added dependencies and two deterministic rebuilds. Coverage includes schema/hash failures, refresh/atomic publication failure, identity collisions, unaccepted joins without coordinates, year-only semantics, geographic screening, tiers, capacity/balancing, sensitivity, incompatible comparisons and CSV formula safety. The existing approximately891kB main-bundle warning remains.",
        "Recorded snapshot is1912829bytes/142453gzip; lazy policy dashboard approximately34kB minified/11.9kB gzip. A100-iteration local Node balanced benchmark is approximately0.202ms mean; all-selected JSON245553bytes andCSV107549bytes. These are upstream measurements, not independently rerun timing or public-host latency guarantees. Initial local preview had zero policy requests; first entry had four, and the historical directory/filter state was preserved.",
        "Portfolio independently hashes pinned raw/derived artifacts and reruns original pure functions against published results, separately from upstream recorded tests, rebuilds and browser QA. Source screenshots were inspected desktop/mobile research captures; they show bilingual mode controls and evidence review, not engineering acceptance. Portfolio’s own routes, regressions, responsive/theme behavior and bundle changes are measured separately."
      ],
      "content": "evidence",
      "links": [
        {
          "label": "Upstream local preview · desktop evidence-review controls",
          "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-desktop.png"
        },
        {
          "label": "Upstream local preview · mobile evidence modes",
          "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-mobile.png"
        }
      ]
    },
    {
      "id": "mode-c",
      "title": "Mode C Structural-safety Evidence Gate",
      "paragraphs": [
        "Mode C remains unavailable. Missing evidence includes formal engineering inspection reports, component defects, load ratings, design capacity, deterioration history, work completion, applicable exemptions, current restrictions and actual field status. Published result strings have no independently accepted engineering terminology contract.",
        "Administrative evidence tiers, accepted research names, plausible points, older published years and missing expenditure cannot certify safety, predict failure, establish overdue obligations or authorize repair, closure or a maintenance schedule. Geographic eligibility changes the research display cohort only."
      ]
    },
    {
      "id": "future",
      "title": "Future Evidence and Responsible Use",
      "paragraphs": [
        "Seek an authoritative A↔B crosswalk, identifier scope, complete event dates, engineering terminology and report semantics before expanding inference. Surveyed geometry and official CRS/boundary contracts would support more precise geographic research; exact-name rejection may miss real correspondences but preserves traceability rather than inventing coverage.",
        "This independent POC demonstrates ingestion governance, conservative joins, static integrity, deterministic administrative review and explicit evidence gates. It establishes neither a government partnership nor adopted inspection/maintenance decisions. New source editions require reviewed admission and versioned methods, with unchanged findings and negative results retained for reproduction."
      ],
      "content": "future"
    }
  ],
  "architecture": [
    "Official Taipei A/B",
    "Bounded offline acquisition",
    "Original bytes and SHA-256",
    "Schema and metadata audit",
    "Source-row identities",
    "Conservative A↔B research association",
    "Coordinate/category admission",
    "Immutable evidence snapshot",
    "Mode A / geographic Mode B subset",
    "Deterministic 5/10/all scenarios",
    "Lazy bilingual React dashboard",
    "Auditable JSON/CSV exports"
  ],
  "architectureNote": "Simplified actual upstream chain; Portfolio presents static summaries and links without bridge data acquisition, matching or GIS execution.",
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "bridge-inspection-evidence-review-v1",
    "explanation": "Version1, fixed analysis2026-10-23. Evidence questions use first-matching qualitative rules, not weighted structural-danger scores.",
    "thresholds": {
      "caption": "Independent evidence gates",
      "columns": [
        {
          "key": "mode",
          "label": "Mode"
        },
        {
          "key": "rule",
          "label": "Admission"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "mode": "A",
            "rule": "416 source records; geography not required"
          }
        },
        {
          "id": "1",
          "cells": {
            "mode": "B",
            "rule": "194 accepted and geographically admitted records;222excluded"
          }
        },
        {
          "id": "2",
          "cells": {
            "mode": "C",
            "rule": "Unavailable without engineering reports, defects and applicable obligations"
          }
        }
      ]
    },
    "tiers": {
      "caption": "Documentation priorities",
      "columns": [
        {
          "key": "tier",
          "label": "Tier"
        },
        {
          "key": "rule",
          "label": "Rule"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "tier": "A",
            "rule": "Primary identity/document conflicts:23"
          }
        },
        {
          "id": "1",
          "cells": {
            "tier": "B",
            "rule": "Other documentary questions:393"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "C",
            "rule": "Routine with no outstanding issue:0"
          }
        }
      ]
    },
    "notes": [
      "Evidence-first: tier then lexical source-bound ID.",
      "Balanced: Unicode district queues, tier/ID order within each.",
      "Broader documentary admission never grants coordinates.",
      "Capacity is investigation workload; no safety or spending score."
    ]
  },
  "scenarioTables": [
    {
      "caption": "Official source editions",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "dataset",
          "label": "Dataset"
        },
        {
          "key": "updated",
          "label": "Resource update"
        },
        {
          "key": "rows",
          "label": "Rows"
        },
        {
          "key": "bytes",
          "label": "Bytes"
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
      "caption": "A source quality · records are not physical bridges",
      "columns": [
        {
          "key": "metric",
          "label": "Metric"
        },
        {
          "key": "count",
          "label": "Count"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "metric": "Source rows",
            "count": "416"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "Within-source groups",
            "count": "415"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "Missing inspection year",
            "count": "1"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "Missing maintenance year",
            "count": "314"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "Missing maintenance cost",
            "count": "317"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "Published inspection result",
            "count": "416"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "Malformed years",
            "count": "0"
          }
        },
        {
          "id": "7",
          "cells": {
            "metric": "Malformed costs",
            "count": "0"
          }
        }
      ]
    },
    {
      "caption": "B source identity · distinct identifier semantics",
      "columns": [
        {
          "key": "metric",
          "label": "Metric"
        },
        {
          "key": "count",
          "label": "Count"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "metric": "Inventory rows",
            "count": "612"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "Distinct source ID",
            "count": "612"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "Rows with nonblank bridge_id",
            "count": "455"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "Distinct nonblank bridge_id",
            "count": "413"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "Rows with unique nonblank ID",
            "count": "404"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "Rows sharing repeated IDs",
            "count": "51"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "Repeated ID values",
            "count": "9"
          }
        },
        {
          "id": "7",
          "cells": {
            "metric": "Blank bridge_id rows",
            "count": "157"
          }
        }
      ]
    },
    {
      "caption": "Cross-source research associations · no official crosswalk",
      "columns": [
        {
          "key": "status",
          "label": "Outcome"
        },
        {
          "key": "rows",
          "label": "A rows"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "status": "Accepted research association",
            "rows": "216"
          }
        },
        {
          "id": "1",
          "cells": {
            "status": "Ambiguous",
            "rows": "5"
          }
        },
        {
          "id": "2",
          "cells": {
            "status": "Rejected district/authority",
            "rows": "18"
          }
        },
        {
          "id": "3",
          "cells": {
            "status": "No name counterpart",
            "rows": "177"
          }
        }
      ]
    },
    {
      "caption": "Independent geographic/category admission",
      "columns": [
        {
          "key": "metric",
          "label": "Metric"
        },
        {
          "key": "count",
          "label": "Count"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "metric": "B plausible coordinate sets",
            "count": "612"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "Non-bridge exclusions",
            "count": "32"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "Bridge inventory reference points",
            "count": "580"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "Accepted A↔B research associations",
            "count": "216"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "Accepted but geography/category excluded",
            "count": "22"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "Mode B eligible documentation",
            "count": "194"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "A without admitted inspection geography",
            "count": "222"
          }
        }
      ]
    },
    {
      "caption": "Documentation tiers · not condition grades",
      "columns": [
        {
          "key": "tier",
          "label": "Tier"
        },
        {
          "key": "count",
          "label": "Rows"
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
      "caption": "Mode A · same-scope capacity and strategy comparison",
      "columns": [
        {
          "key": "capacity",
          "label": "Capacity"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "evidenceTiers",
          "label": "Evidence-first tiers"
        },
        {
          "key": "evidenceGroups",
          "label": "Evidence groups"
        },
        {
          "key": "balancedTiers",
          "label": "Balanced tiers"
        },
        {
          "key": "balancedGroups",
          "label": "Balanced groups"
        },
        {
          "key": "shared",
          "label": "Shared"
        },
        {
          "key": "added",
          "label": "Balanced-only"
        },
        {
          "key": "removed",
          "label": "Evidence-only"
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
            "capacity": "All",
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
      "caption": "Mode B · same-scope capacity and strategy comparison",
      "columns": [
        {
          "key": "capacity",
          "label": "Capacity"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "evidenceTiers",
          "label": "Evidence-first tiers"
        },
        {
          "key": "evidenceGroups",
          "label": "Evidence groups"
        },
        {
          "key": "balancedTiers",
          "label": "Balanced tiers"
        },
        {
          "key": "balancedGroups",
          "label": "Balanced groups"
        },
        {
          "key": "shared",
          "label": "Shared"
        },
        {
          "key": "added",
          "label": "Balanced-only"
        },
        {
          "key": "removed",
          "label": "Evidence-only"
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
            "capacity": "All",
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
      "caption": "Eligibility sensitivity · Mode A, evidence-first, capacity 5",
      "columns": [
        {
          "key": "scope",
          "label": "Scope"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "shared",
          "label": "Shared with default"
        },
        {
          "key": "added",
          "label": "Added"
        },
        {
          "key": "removed",
          "label": "Removed"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "scope": "All A rows",
            "eligible": "416",
            "shared": "5",
            "added": "0",
            "removed": "0"
          }
        },
        {
          "id": "1",
          "cells": {
            "scope": "Accepted only",
            "eligible": "216",
            "shared": "0",
            "added": "5",
            "removed": "5"
          }
        },
        {
          "id": "2",
          "cells": {
            "scope": "Accepted or ambiguous · documents only",
            "eligible": "221",
            "shared": "0",
            "added": "5",
            "removed": "5"
          }
        },
        {
          "id": "3",
          "cells": {
            "scope": "Accepted and geographic",
            "eligible": "194",
            "shared": "0",
            "added": "5",
            "removed": "5"
          }
        },
        {
          "id": "4",
          "cells": {
            "scope": "Critical conflicts only",
            "eligible": "23",
            "shared": "5",
            "added": "0",
            "removed": "0"
          }
        }
      ]
    },
    {
      "caption": "Immutable source/method provenance",
      "columns": [
        {
          "key": "identity",
          "label": "Identity"
        },
        {
          "key": "value",
          "label": "Value"
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
      "caption": "Recorded upstream verification · not Portfolio reruns",
      "columns": [
        {
          "key": "metric",
          "label": "Measurement"
        },
        {
          "key": "value",
          "label": "Recorded result"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "metric": "Test files / passing tests",
            "value": "7 / 88"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "Deterministic rebuilds",
            "value": "2"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "Snapshot bytes / gzip",
            "value": "1912829 / 142453"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "Lazy JS / gzip",
            "value": "~34 kB / ~11.9 kB"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "Local mean ms · 100 iterations",
            "value": "0.20218399999999975"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "All JSON / CSV bytes",
            "value": "245553 / 107549"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "Initial / first-entry policy requests",
            "value": "0 / 4"
          }
        }
      ]
    },
    {
      "caption": "Actual first-five source-bound IDs · all records in pinned export",
      "columns": [
        {
          "key": "rank",
          "label": "Rank"
        },
        {
          "key": "aEvidence",
          "label": "A · Evidence"
        },
        {
          "key": "aBalanced",
          "label": "A · Balanced"
        },
        {
          "key": "bEvidence",
          "label": "B · Evidence"
        },
        {
          "key": "bBalanced",
          "label": "B · Balanced"
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
      "caption": "Real inspection records · source names retained",
      "columns": [
        {
          "key": "name",
          "label": "Original name"
        },
        {
          "key": "id",
          "label": "ID"
        },
        {
          "key": "tier",
          "label": "Tier"
        },
        {
          "key": "association",
          "label": "Research association"
        },
        {
          "key": "geography",
          "label": "Geography"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "name": "安泰橋",
            "id": "A-3b6d39373759036e-r24-f1f96df831e2",
            "tier": "B",
            "association": "accepted research",
            "geography": "admitted"
          }
        },
        {
          "id": "1",
          "cells": {
            "name": "康樂橋",
            "id": "A-3b6d39373759036e-r23-55ef191cfb27",
            "tier": "A",
            "association": "ambiguous",
            "geography": "not admitted"
          }
        },
        {
          "id": "2",
          "cells": {
            "name": "社教館人行地下道",
            "id": "A-3b6d39373759036e-r2-36df6d8a6a09",
            "tier": "B",
            "association": "no name counterpart",
            "geography": "not admitted"
          }
        },
        {
          "id": "3",
          "cells": {
            "name": "中正橋",
            "id": "A-3b6d39373759036e-r311-52c915771af8",
            "tier": "B",
            "association": "accepted research",
            "geography": "admitted"
          }
        },
        {
          "id": "4",
          "cells": {
            "name": "康忠橋",
            "id": "A-3b6d39373759036e-r63-0bad12bad031",
            "tier": "B",
            "association": "accepted research",
            "geography": "not admitted"
          }
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": "Merged Policy #9 PR #6",
      "url": "https://github.com/LEO0331/taipei-safety-map/pull/6"
    },
    {
      "label": "Official catalogue A",
      "url": "https://data.taipei/dataset/detail?id=27135efa-d43e-406d-a3e4-fcb07efb3982"
    },
    {
      "label": "Official catalogue B",
      "url": "https://data.taipei/dataset/detail?id=866a9982-0a63-421f-b120-9144fc6ce732"
    },
    {
      "label": "Source audit",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-source-audit.md"
    },
    {
      "label": "Identity contract",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-identity-contract.md"
    },
    {
      "label": "Geographic contract",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-geographic-evidence.md"
    },
    {
      "label": "Methodology",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-methodology.md"
    },
    {
      "label": "Chinese decision specification",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-decision-mvp.zh-TW.md"
    },
    {
      "label": "Delivery and recorded checks",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-delivery.md"
    },
    {
      "label": "Actual results and full ordered IDs",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-results.json"
    },
    {
      "label": "Accepted source manifest",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/data/raw/bridge-policy/sources.json"
    },
    {
      "label": "Snapshot pointer",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/public/data/bridge-policy/current.json"
    },
    {
      "label": "Immutable snapshot",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/public/data/bridge-policy/bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a.json"
    },
    {
      "label": "Source parsing and admission",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/bridgePolicySources.ts"
    },
    {
      "label": "Bounded staged acquisition",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/fetchBridgePolicySources.ts"
    },
    {
      "label": "Source integrity audit",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/auditBridgePolicySources.ts"
    },
    {
      "label": "Snapshot publication",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/buildBridgePolicySnapshot.ts"
    },
    {
      "label": "Deterministic verification and measurements",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/verifyBridgePolicy.ts"
    },
    {
      "label": "Typed source contracts",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/types/bridgePolicy.ts"
    },
    {
      "label": "Identity implementation",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyIdentity.ts"
    },
    {
      "label": "Geographic screening",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyGeography.ts"
    },
    {
      "label": "Tier and temporal rules",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicy.ts"
    },
    {
      "label": "Scenarios and export safeguards",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyScenarios.ts"
    },
    {
      "label": "Browser integrity loader",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/loadBridgePolicy.ts"
    },
    {
      "label": "Bilingual dashboard",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/BridgePolicyDashboard.tsx"
    },
    {
      "label": "Bounded research map",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/BridgePolicyMap.tsx"
    },
    {
      "label": "Source tests",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/bridgePolicySources.test.ts"
    },
    {
      "label": "Identity tests",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyIdentity.test.ts"
    },
    {
      "label": "Geographic tests",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyGeography.test.ts"
    },
    {
      "label": "Scenario tests",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyScenarios.test.ts"
    },
    {
      "label": "Browser network evidence",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-browser-network.json"
    }
  ],
  "previewAssets": [
    {
      "label": "Upstream local preview · desktop evidence-review controls",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-desktop.png"
    },
    {
      "label": "Upstream local preview · mobile evidence modes",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-mobile.png"
    }
  ],
  "futureExtensions": [
    "Obtain official crosswalks, stable asset identifiers, complete inspection events and authoritative engineering terminology before extending interpretation.",
    "Surveyed geometry, current field evidence and applicable interval/exemption contracts are needed before any structural or overdue assessment."
  ]
};
