import type { GovTechCase } from "../types/govtechCase";

export const FOOD_HYGIENE_SOURCE_SHA = "ebed7962b8ced05afea285865f95f2bb7e991f1e";
export const FOOD_HYGIENE_METHOD_ID = "selectReviewRecords";
export const FOOD_HYGIENE_SCHEMA_VERSION = 1;
export const FOOD_HYGIENE_GENERATED_AT = "2026-10-24T02:40:52.637Z";
export const FOOD_HYGIENE_SNAPSHOT_ID = "policy-11-1916319270a865f57805f618267c58be38e7b2f39b8ef6af2f8dfd0ac40ecefd";
export const FOOD_HYGIENE_SNAPSHOT_SHA256 = "8ef73119f62c4ca9594a2077cbee3cca8aaf6d360173217f982ad91370e6eeb3";
export const FOOD_HYGIENE_SNAPSHOT_BYTES = 17021022;
export const FOOD_HYGIENE_SNAPSHOT_GZIP_BYTES = 1428866;
export const FOOD_HYGIENE_SOURCE_HASHES = {
  "failed-113.csv": "e0441def7ae06c65c75b21a2d40129fca8891a9152858e4b93a6b50f33a20465",
  "failed-112.csv": "a27addae0386ed05ee28c898e0178230e7c77acbde63cde92660520481e07a95",
  "failed-111.csv": "2f0dcfb68e45872d11f6e027c2e0ff7fbed68a2c6657ba1c7f5ae3de6a972da2",
  "grading.csv": "2d1e1cc7c9535204a708304efc00a666fafc09a0c32a41a814e7256a50bcaf25",
  "registry.csv": "19e248533854a0ff407fb19ca354b9bb44291ef7c720ac0c3ae30449d252aafe",
  "failed-catalogue.html": "0670e98c5f5dc886017f362e42a6789bb2f27ad1f9797dcbb3b11528a58ad2b3",
  "grading-catalogue.html": "b5883a9a35830b975d8f6258bba1f77615d0e041fd4ebdeab3526cbbaac7a8c5",
  "registry-catalogue.html": "c13648ce79f63cd99960af86da94cf453a492cfa9378d4cee7790eeffba01f6b",
  "retained/failed.json": "955ce047cc495f4e018ab85a1692dabadd49fa00beda56e91906c8ce1ee2e853",
  "retained/grading.json": "d9d42de117792b1b31f44ba678a3009f93b84ffc29ea6131395d4a801ba93a80",
  "retained/registry.json": "d23b14a2ca1794f8d96976f9200cc8693e620e481224df2ecc8e5113db63ced3"
};
export const foodHygienePolicySource = (path: string): string => `https://github.com/LEO0331/taipei-friendly-food-map/blob/${FOOD_HYGIENE_SOURCE_SHA}/${path}`;

export const foodHygieneInspectionCase: GovTechCase = {
  "id": "food-hygiene-inspection",
  "slug": "food-hygiene-inspection",
  "displayNumber": "011",
  "policyDomain": "Citizen Services & Public Health",
  "projectId": "taipei-friendly-food-map",
  "sourceRepository": "https://github.com/LEO0331/taipei-friendly-food-map",
  "sourceVersion": "ebed7962b8ced05afea285865f95f2bb7e991f1e",
  "snapshotVersion": "policy-11-1916319270a865f57805f618267c58be38e7b2f39b8ef6af2f8dfd0ac40ecefd",
  "title": "Food Hygiene & Inspection Evidence Review",
  "summary": "From heterogeneous food records to reproducible source-edition comparisons and explainable documentation review, with establishment and current-safety evidence gates.",
  "maturity": "decision-support-poc",
  "maturityLabel": "Completed source and documentation-review proof of concept; establishment comparison gated",
  "reviewNote": "22,645 current documentary records; 35 unvalidated name/address candidate pairs, zero validated establishment associations. Historical samples do not establish present business safety.",
  "intendedUsers": "Public-health data stewards, administrative investigation teams, public-data engineers and source-governance researchers.",
  "implementedCapabilities": [
    "Sealed official CSV/HTML provenance and retained-edition separation",
    "Sample, event, grading and registration identity contracts",
    "Conservative establishment validation and explicit exclusions",
    "Deterministic T1/T2/T3 queues with actual capacity/strategy sensitivity",
    "Versioned snapshots and provenance-preserving JSON/CSV briefings"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "Policy Question and Decision Scope",
      "paragraphs": [
        "How can municipal analysts use published hygiene, sampling and business-registration records to identify documentation issues and build reproducible investigation lists without implying current business safety?",
        "The intended users are public-health data stewards, administrative review teams, public-data engineers and researchers. Selected records represent follow-up documentation work; the system provides no consumer safety certification or enforcement decision."
      ]
    },
    {
      "id": "evolution",
      "title": "Extending the Existing Food-data Explorer",
      "paragraphs": [
        "The existing explorer retains friendly-store and water-refill maps, restaurant directories, food traceability, commercial districts, green stores, hygiene grading, historical sampling and agricultural/market modules. The review module is an additional lazy view, not a replacement for those source contracts.",
        "Three historical transformed-JSON editions remain separate from five newly retained official CSV resources. The module compares those editions before producing administrative review queues; Portfolio explains verified outputs without implementing that engine again."
      ]
    },
    {
      "id": "sources",
      "title": "Official Sources and Accepted Editions",
      "paragraphs": [
        "The accepted resources contain 673 published noncompliant-sample rows from ROC 111–113 (2022–2024), 1,686 published passing-grading rows and 20,286 business-registration rows. These form 22,645 administrative records with three statistical units, not a count of operating restaurants.",
        "The captured failed-sample catalogue lists exactly three annual resources. Dataset identifiers identify catalogues; each annual CSV has a separate resource UUID. Publishers, exact resource links, schemas, update dates and retrieval timestamps remain available in the technical evidence. The captured publisher labels are the health authority (衛生局) for samples/grading and the commerce authority (商業處) for registrations."
      ]
    },
    {
      "id": "units",
      "title": "Sample, Event, Assessment and Establishment Units",
      "paragraphs": [
        "A source row is not necessarily a unique sample. A sampled product, batch/lot and inspection event require different identifiers; multiple analyte findings can occupy one row. A sampling location may identify a seller, distributor, manufacturer, supplier or another source-defined party.",
        "A grading row documents inclusion in a passing list, not a dated assessment event when no date field is published. Company/business registration, food-business registration, legal operator, physical establishment and currently operating restaurant are distinct entities. No universal establishment key is invented."
      ]
    },
    {
      "id": "historical",
      "title": "Historical Failed-only Publication Semantics",
      "paragraphs": [
        "Actual sampling dates run from 2022-01-04 to 2024-11-20, with no missing sampling dates. The catalogue advertises 2022-03-26 to 2026-07-14; neither endpoint replaces the observation range. A recent catalogue update does not make the inspections recent.",
        "The 673 occurrences contain 672 normalized documentary keys and one duplicate publication. Date + published location + project forms 600 candidate event bundles, 64 with multiple rows. Unique sample, verified event and batch counts remain unavailable. Failed-only publication has no comparable all-inspection denominator, so no citywide failure rate or present business-risk estimate follows."
      ]
    },
    {
      "id": "grading",
      "title": "Passing Grades and Registration Boundaries",
      "paragraphs": [
        "All 1,686 current passing-list rows match the retained grading edition on food-business ID, trade name, address and grade. Published labels 優 and 良 are both passing values; absence is unobserved here, not failed grading. The resource has no assessment-date field.",
        "The registry includes activity F501060; its official catalogue qualifies actual operation as dependent on on-site conditions. Company/business IDs remain source strings in their own namespace. Food-business ID digits are not converted to company numbers, and coordinates are not transferred to unverified establishment associations."
      ]
    },
    {
      "id": "provenance",
      "title": "Source Integrity, Encoding and Custody",
      "paragraphs": [
        "Eight official response bodies are sealed: five UTF-8 CSV resources and three catalogue HTML pages. Acquisition records original-byte hashes, lengths, requested URLs, actual retrieval times and HTTP metadata. Historical JSON hashes identify transformed project editions only; their original CSV bytes and historical retrieval timestamps are unavailable.",
        "Exact accepted file identities: failed-113.csv e0441def7ae06c65c75b21a2d40129fca8891a9152858e4b93a6b50f33a20465; failed-112.csv a27addae0386ed05ee28c898e0178230e7c77acbde63cde92660520481e07a95; failed-111.csv 2f0dcfb68e45872d11f6e027c2e0ff7fbed68a2c6657ba1c7f5ae3de6a972da2; grading.csv 2d1e1cc7c9535204a708304efc00a666fafc09a0c32a41a814e7256a50bcaf25; registry.csv 19e248533854a0ff407fb19ca354b9bb44291ef7c720ac0c3ae30449d252aafe; failed-catalogue.html 0670e98c5f5dc886017f362e42a6789bb2f27ad1f9797dcbb3b11528a58ad2b3; grading-catalogue.html b5883a9a35830b975d8f6258bba1f77615d0e041fd4ebdeab3526cbbaac7a8c5; registry-catalogue.html c13648ce79f63cd99960af86da94cf453a492cfa9378d4cee7790eeffba01f6b; retained/failed.json 955ce047cc495f4e018ab85a1692dabadd49fa00beda56e91906c8ce1ee2e853; retained/grading.json d9d42de117792b1b31f44ba678a3009f93b84ffc29ea6131395d4a801ba93a80; retained/registry.json d23b14a2ca1794f8d96976f9200cc8693e620e481224df2ecc8e5113db63ced3.",
        "Fatal UTF-8 decoding rejects invalid text. Expected CSV headers reject missing and additional fields; additive schema changes also require admission review. Complete catalogue resource inventories must match the acquired CSV set. Git attributes prevent cross-platform evidence line-ending conversion."
      ]
    },
    {
      "id": "identity",
      "title": "Source-row and Identifier Contracts",
      "paragraphs": [
        "The failed-row comparison key is sampling date + product label + sampling location + result + reason, with whitespace normalized. Matching older keys retain original project IDs; new rows use a source-specific key digest. Repeated IDs receive a stable published-occurrence suffix instead of disappearing.",
        "This is source-row identity, not an official sample, event, batch or establishment identifier. Name/address reconciliation applies NFKC, whitespace removal and lowercasing to generate documentary candidates only. Similarity, co-location or a shared identifier cannot assign responsibility for a historical product finding."
      ]
    },
    {
      "id": "reconciliation",
      "title": "Current and Retained Edition Reconciliation",
      "paragraphs": [
        "All 672 retained failed-row keys remain in the 673 current occurrences; the older converter deduplicated one repeated publication. Grading preserves 1,686 unchanged keys. Registry comparison uses identifier + registered name + address and deliberately excludes coordinate changes.",
        "The registry changes from 20,182 retained rows to 20,286 current rows: 19,258 unchanged keys, 924 retained-only and 1,028 current-only. The set differences reconcile each edition separately; they do not prove openings, closures or changed hygiene. Cross-edition comparison is not cross-source physical-establishment validation."
      ]
    },
    {
      "id": "eligibility",
      "title": "Admission, Exclusions and Unresolved Evidence",
      "paragraphs": [
        "All 22,645 current rows are eligible for Mode A documentary review. Missing event/batch identity and duplicate publication remain review flags, not silent row exclusions. Unknown assessment and operating dates remain null rather than borrowing catalogue timestamps.",
        "For establishment use, 673 sample rows are excluded from automatic matching. All 22,645 records remain unresolved without independent validation, including those samples. These overlapping diagnostics are not a disjoint partition and cannot be summed into an exclusion total."
      ]
    },
    {
      "id": "mode-a",
      "title": "Mode A: Deterministic Documentation Review",
      "paragraphs": [
        "The actual selector is selectReviewRecords. No separately versioned method ID is published; this case identifies the source function without inventing a version. Source-edition changes take T1 precedence; missing bytes, dates or identifier namespaces form T2; other flags or routine checks form T3.",
        "Actual populations are T1 1,028, T2 20,944 and T3 673. Within each tier, evidence-first orders source ID and record ID. Balanced selection round-robins source queues within that same tier, not districts. These rules allocate documentation workload, not food-safety risk."
      ],
      "content": "methodology"
    },
    {
      "id": "scenarios",
      "title": "Actual Capacity and Strategy Results",
      "paragraphs": [
        "Six Mode A runs combine capacities 5, 10 and all with evidence-first or balanced selection. Both strategies have the same ordered first 5 and first 10 records: only current-only registry rows in T1. Used capacity is 5, 10 or all 22,645; paired strategy intersections are 5, 10 and 22,645.",
        "All-capacity membership is the same, but ordering differs when T2 has multiple source queues: the first different zero-based position is 1,029. Source balancing changes ordering without changing this edition’s bounded selections or all-capacity membership. No extra identity-threshold or source-scope scenarios are claimed."
      ],
      "content": "scenarios"
    },
    {
      "id": "mode-b",
      "title": "Mode B: Establishment Validation Remains Gated",
      "paragraphs": [
        "Exact normalized name/address equality produces 35 unvalidated cross-source candidate pairs and zero ambiguous pairs in this edition. There are zero independently validated associations and zero matched records out of 22,645; establishment comparison remains unavailable.",
        "Admission requires known edition-bound nonsample records from different sources, an official evidence URL/reference/date, explicit physical-establishment confirmation and one-to-one nonambiguous validation. No such independent validations were supplied. Candidate equality is not accepted linkage, and historical sample findings are not transferred through it."
      ]
    },
    {
      "id": "sensitivity",
      "title": "Sensitivity to Capacity and Source-queue Strategy",
      "paragraphs": [
        "The engine compares six actual capacity/strategy settings against the current selection. Relative to evidence-first capacity 5, capacity 10 shares 5 IDs and adds 5; all shares 5 and adds 22,640. Neither removes a baseline ID. Eligibility remains 22,645 throughout.",
        "Paired strategies add/remove no members at the same capacity in this edition. Identical membership is a valid result, not optimized inspection coverage. Ordered and set digests remain in verification evidence; Portfolio does not duplicate all 22,645 IDs."
      ]
    },
    {
      "id": "examples",
      "title": "Neutral Source-derived Engineering Examples",
      "paragraphs": [
        "A sample dated 2024-01-02 illustrates missing official event/batch identity. A duplicate occurrence dated 2022-06-21 demonstrates publication preservation rather than silent deduplication. A passing-grading row with a null assessment date shows why publication time cannot replace observation time.",
        "A current-only registry row illustrates a T1 edition question; an unvalidated grading/registry pair illustrates the establishment gate. Exact IDs remain inspectable in secondary evidence. Business names, addresses and product allegations are unnecessary for these examples and are not republished as current warnings."
      ]
    },
    {
      "id": "architecture",
      "title": "Implemented Architecture and Tradeoffs",
      "paragraphs": [
        "Offline acquisition and deterministic reproduction are separate. Exact CSV/HTML retention enables byte and schema checks; preserving older JSON separately prevents new official acquisition from silently rewriting the explorer’s evidence history.",
        "The source application lazily opens a bilingual module, fetches a local manifest/snapshot, checks byte length and SHA-256, validates provenance and computes review scenarios in-browser. It has no regulatory backend, transactional database, machine-learning model or live official API dependency. Portfolio renders authored evidence instead of downloading the 17 MB source snapshot."
      ],
      "content": "architecture"
    },
    {
      "id": "verification",
      "title": "Verification and Performance Boundaries",
      "paragraphs": [
        "The source record reports an eight-test baseline, 20 passing automated tests, TypeScript, production build and offline byte/snapshot reproduction. Recorded browser checks cover EN/ZH, 5/10/all, balancing, pagination reset, CSV and desktop/mobile layouts; no separate timed browser-suite pass count is published.",
        "All-capacity CSV preserves 22,645 selected IDs and is approximately 31 MB; the policy snapshot is exactly 17,021,022 bytes. The original application’s greater-than-500 kB bundle warning remains. These are source-project measurements and recorded checks, not Portfolio latency guarantees or a hosted performance score. Independent artifact/scenario checks are documented separately."
      ]
    },
    {
      "id": "governance",
      "title": "Deterministic Publication and Safe Briefings",
      "paragraphs": [
        "The builder verifies sealed bodies, retained editions, the full resource inventory and exact headers before rebuilding rows. Generation time is the latest retained acquisition timestamp, not build time. A write-once content file is collision-checked before manifest writing; no atomic-pointer-swap guarantee is claimed.",
        "Snapshot ID policy-11-1916319270a865f57805f618267c58be38e7b2f39b8ef6af2f8dfd0ac40ecefd hashes the compact body before adding the ID. File SHA-256 8ef73119f62c4ca9594a2077cbee3cca8aaf6d360173217f982ad91370e6eeb3 hashes the formatted file including its ID and final newline; the filename uses the first 20 digest characters. Schema 1; 17021022 bytes; generatedAt 2026-10-24T02:40:52.637Z. These identities are different objects.",
        "JSON preserves snapshot, parameters, selected IDs, sensitivity and exclusions. CSV uses one UTF-8 BOM, quotes every cell and neutralizes formula prefixes including leading whitespace/control characters. Each row retains full record evidence; the first row stores complete snapshot metadata once and later rows reference its ID. Sealed evidence is not refreshed in place."
      ],
      "content": "evidence"
    },
    {
      "id": "mode-c",
      "title": "Mode C: Current Safety Evidence Is Unavailable",
      "paragraphs": [
        "Current-risk or business-hazard assessment remains unavailable. These publications do not establish comparable inspection coverage, sampling selection, current operation, authoritative establishment responsibility, comparable time windows or official rectification/follow-up evidence.",
        "A historical noncompliant sample is not a finding about every product, the present business or unresolved legal responsibility. Registration totals and passing-grading rows cannot repair the missing inspection denominator. No hazard score, predicted violation probability or establishment safety certification is provided."
      ]
    },
    {
      "id": "future",
      "title": "Future Evidence and Responsible Use",
      "paragraphs": [
        "Future work needs separately retained editions, renewed field-definition review, authoritative sample/event/batch IDs and documented one-to-one establishment confirmations. Current-safety research additionally requires compatible denominators, observation windows, operation and official follow-up evidence.",
        "The demonstrated result is reproducible administrative evidence review with explicit unknowns and excluded relationships. Municipal adoption, enforcement integration, health improvement or current consumer warning has not been established."
      ],
      "content": "future"
    }
  ],
  "architecture": [
    "Separate official acquisition and sealed original response bodies",
    "Fatal UTF-8 decoding, exact schemas and resource inventory",
    "Retained-project edition comparisons and source-bound rows",
    "Evidence tiers, deterministic review and establishment validation gates",
    "Content-addressed snapshot plus integrity manifest",
    "Lazy bilingual source module with safe JSON/CSV briefings"
  ],
  "architectureNote": "Actual source pipeline and client-side review module. Portfolio presents static authored evidence; it performs no live reconciliation, government download or policy-snapshot fetch.",
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "selectReviewRecords",
    "explanation": "Actual upstream selector function; no separately versioned method ID is published. Global tier order precedes source balancing within a tier.",
    "thresholds": {
      "caption": "Implemented documentary rule precedence",
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
          "id": "T1",
          "cells": {
            "tier": "T1",
            "rule": "source-edition-changed takes precedence"
          }
        },
        {
          "id": "T2",
          "cells": {
            "tier": "T2",
            "rule": "Original-byte, event/assessment-date or namespace verification"
          }
        },
        {
          "id": "T3",
          "cells": {
            "tier": "T3",
            "rule": "Other documentary flags or routine verification"
          }
        }
      ]
    },
    "tiers": {
      "caption": "Recorded tier populations for this edition",
      "columns": [
        {
          "key": "tier",
          "label": "Tier"
        },
        {
          "key": "count",
          "label": "Records"
        }
      ],
      "rows": [
        {
          "id": "T1",
          "cells": {
            "tier": "T1",
            "count": "1028"
          }
        },
        {
          "id": "T2",
          "cells": {
            "tier": "T2",
            "count": "20944"
          }
        },
        {
          "id": "T3",
          "cells": {
            "tier": "T3",
            "count": "673"
          }
        }
      ]
    },
    "notes": [
      "22,645 current records are documentary tasks, not establishments or hazard scores.",
      "Both strategies share ordered first 5/10 IDs; all-capacity membership agrees but ordering differs.",
      "No identity-threshold or district-balancing scenarios are invented."
    ]
  },
  "scenarioTables": [
    {
      "caption": "Accepted current and retained populations",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "official",
          "label": "Official rows"
        },
        {
          "key": "retained",
          "label": "Retained rows"
        },
        {
          "key": "unit",
          "label": "Unit / boundary"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "source": "Historical sample publication",
            "official": "673",
            "retained": "672",
            "unit": "Published sample occurrences; not unique events"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "Passing hygiene-grading list",
            "official": "1686",
            "retained": "1686",
            "unit": "Passing-list rows; assessment dates absent"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "Business registrations",
            "official": "20286",
            "retained": "20182",
            "unit": "Registration rows; not operating restaurants"
          }
        }
      ]
    },
    {
      "caption": "Observation time and publication metadata",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "observation",
          "label": "Observation range"
        },
        {
          "key": "catalogue",
          "label": "Catalogue updated"
        },
        {
          "key": "resource",
          "label": "Resource updated"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "source": "Historical sample publication",
            "observation": "2022-01-04 → 2024-11-20",
            "catalogue": "2026-07-14 10:44:49 +08:00",
            "resource": "ROC113/112/111: 2025-12-16 10:22:17 / 10:22:01 / 10:21:49 +08:00"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "Passing hygiene-grading list",
            "observation": "Unavailable; no assessment-date field",
            "catalogue": "2026-07-15 09:33:57 +08:00",
            "resource": "2025-12-19 13:53:20 +08:00"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "Business registrations",
            "observation": "Operating/inspection dates unavailable",
            "catalogue": "2026-09-23 16:00:04 +08:00",
            "resource": "2026-09-23 15:59:54 +08:00"
          }
        }
      ]
    },
    {
      "caption": "Exact source custody and resource identities",
      "columns": [
        {
          "key": "file",
          "label": "Retained file"
        },
        {
          "key": "identity",
          "label": "Resource / catalogue identity"
        },
        {
          "key": "sha256",
          "label": "SHA-256"
        },
        {
          "key": "bytes",
          "label": "Bytes"
        },
        {
          "key": "retrieved",
          "label": "Retrieved"
        },
        {
          "key": "meaning",
          "label": "Custody class"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "file": "failed-113.csv",
            "identity": "3fc106cb-c8aa-4f74-8dbc-3272c7ffcae0",
            "sha256": "e0441def7ae06c65c75b21a2d40129fca8891a9152858e4b93a6b50f33a20465",
            "bytes": "73050",
            "retrieved": "2026-10-24T02:40:47.508Z",
            "meaning": "Acquired original response bytes"
          }
        },
        {
          "id": "2",
          "cells": {
            "file": "failed-112.csv",
            "identity": "bb347e3d-626a-46e5-bb96-9061e8d08c26",
            "sha256": "a27addae0386ed05ee28c898e0178230e7c77acbde63cde92660520481e07a95",
            "bytes": "66166",
            "retrieved": "2026-10-24T02:40:47.920Z",
            "meaning": "Acquired original response bytes"
          }
        },
        {
          "id": "3",
          "cells": {
            "file": "failed-111.csv",
            "identity": "bc24a40f-5687-4338-8f9a-449de248ab93",
            "sha256": "2f0dcfb68e45872d11f6e027c2e0ff7fbed68a2c6657ba1c7f5ae3de6a972da2",
            "bytes": "39069",
            "retrieved": "2026-10-24T02:40:48.211Z",
            "meaning": "Acquired original response bytes"
          }
        },
        {
          "id": "4",
          "cells": {
            "file": "grading.csv",
            "identity": "c5646d80-9118-4439-b924-075f96371d75",
            "sha256": "2d1e1cc7c9535204a708304efc00a666fafc09a0c32a41a814e7256a50bcaf25",
            "bytes": "169383",
            "retrieved": "2026-10-24T02:40:49.058Z",
            "meaning": "Acquired original response bytes"
          }
        },
        {
          "id": "5",
          "cells": {
            "file": "registry.csv",
            "identity": "e94a712a-be5b-4d8b-89c9-30a5ee21f25d",
            "sha256": "19e248533854a0ff407fb19ca354b9bb44291ef7c720ac0c3ae30449d252aafe",
            "bytes": "1956190",
            "retrieved": "2026-10-24T02:40:52.034Z",
            "meaning": "Acquired original response bytes"
          }
        },
        {
          "id": "6",
          "cells": {
            "file": "failed-catalogue.html",
            "identity": "09a917a0-0fb5-47e1-957c-5f1268fba517",
            "sha256": "0670e98c5f5dc886017f362e42a6789bb2f27ad1f9797dcbb3b11528a58ad2b3",
            "bytes": "89251",
            "retrieved": "2026-10-24T02:40:52.246Z",
            "meaning": "Acquired original response bytes"
          }
        },
        {
          "id": "7",
          "cells": {
            "file": "grading-catalogue.html",
            "identity": "59579c19-a561-4564-8c0f-545bfb32c0f6",
            "sha256": "b5883a9a35830b975d8f6258bba1f77615d0e041fd4ebdeab3526cbbaac7a8c5",
            "bytes": "83989",
            "retrieved": "2026-10-24T02:40:52.445Z",
            "meaning": "Acquired original response bytes"
          }
        },
        {
          "id": "8",
          "cells": {
            "file": "registry-catalogue.html",
            "identity": "178abc4e-fe32-4fc9-af3a-7baf1c15082c",
            "sha256": "c13648ce79f63cd99960af86da94cf453a492cfa9378d4cee7790eeffba01f6b",
            "bytes": "83932",
            "retrieved": "2026-10-24T02:40:52.637Z",
            "meaning": "Acquired original response bytes"
          }
        },
        {
          "id": "9",
          "cells": {
            "file": "retained/failed.json",
            "identity": "failed",
            "sha256": "955ce047cc495f4e018ab85a1692dabadd49fa00beda56e91906c8ce1ee2e853",
            "bytes": "1016021",
            "retrieved": "Unknown historical retrieval",
            "meaning": "Transformed project JSON only; original CSV unavailable"
          }
        },
        {
          "id": "10",
          "cells": {
            "file": "retained/grading.json",
            "identity": "grading",
            "sha256": "d9d42de117792b1b31f44ba678a3009f93b84ffc29ea6131395d4a801ba93a80",
            "bytes": "2054965",
            "retrieved": "Unknown historical retrieval",
            "meaning": "Transformed project JSON only; original CSV unavailable"
          }
        },
        {
          "id": "11",
          "cells": {
            "file": "retained/registry.json",
            "identity": "registry",
            "sha256": "d23b14a2ca1794f8d96976f9200cc8693e620e481224df2ecc8e5113db63ced3",
            "bytes": "9419875",
            "retrieved": "Unknown historical retrieval",
            "meaning": "Transformed project JSON only; original CSV unavailable"
          }
        }
      ]
    },
    {
      "caption": "Statistical units that must remain distinct",
      "columns": [
        {
          "key": "unit",
          "label": "Unit"
        },
        {
          "key": "meaning",
          "label": "Meaning and limit"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "unit": "Source row",
            "meaning": "Published occurrence; duplicates can persist"
          }
        },
        {
          "id": "2",
          "cells": {
            "unit": "Grading row / assessment event",
            "meaning": "Passing-list inclusion does not supply an assessment date"
          }
        },
        {
          "id": "3",
          "cells": {
            "unit": "Sample / product / batch",
            "meaning": "A label is not a unique sample or batch identity"
          }
        },
        {
          "id": "4",
          "cells": {
            "unit": "Inspection event / candidate bundle",
            "meaning": "600 bundles are not validated unique inspections"
          }
        },
        {
          "id": "5",
          "cells": {
            "unit": "Sampling location",
            "meaning": "Source-defined party; responsibility not automatically transferred"
          }
        },
        {
          "id": "6",
          "cells": {
            "unit": "Company/business registration",
            "meaning": "Own namespace, original source string"
          }
        },
        {
          "id": "7",
          "cells": {
            "unit": "Food-business registration",
            "meaning": "Separate namespace; embedded digits are not company IDs"
          }
        },
        {
          "id": "8",
          "cells": {
            "unit": "Legal operator / physical establishment / operating restaurant",
            "meaning": "Neither co-location nor registration certifies current operation"
          }
        }
      ]
    },
    {
      "caption": "Edition comparison keys and set differences",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "retainedKeys",
          "label": "Retained keys"
        },
        {
          "key": "officialKeys",
          "label": "Official keys"
        },
        {
          "key": "unchanged",
          "label": "Unchanged"
        },
        {
          "key": "onlyRetained",
          "label": "Retained only"
        },
        {
          "key": "onlyOfficial",
          "label": "Official only"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "source": "Historical sample publication",
            "retainedKeys": "672",
            "officialKeys": "672",
            "unchanged": "672",
            "onlyRetained": "0",
            "onlyOfficial": "0"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "Passing hygiene-grading list",
            "retainedKeys": "1686",
            "officialKeys": "1686",
            "unchanged": "1686",
            "onlyRetained": "0",
            "onlyOfficial": "0"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "Business registrations",
            "retainedKeys": "20182",
            "officialKeys": "20286",
            "unchanged": "19258",
            "onlyRetained": "924",
            "onlyOfficial": "1028"
          }
        }
      ]
    },
    {
      "caption": "Sampling validation and unavailable quantities",
      "columns": [
        {
          "key": "metric",
          "label": "Metric"
        },
        {
          "key": "value",
          "label": "Actual result"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "metric": "Published sample occurrences",
            "value": "673"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "Distinct documentary row keys",
            "value": "672"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "Duplicate publication rows",
            "value": "1"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "Candidate event bundles",
            "value": "600"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "Bundles with multiple rows",
            "value": "64"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "Missing sampling dates",
            "value": "0"
          }
        },
        {
          "id": "7",
          "cells": {
            "metric": "Validated unique samples",
            "value": "Unavailable"
          }
        },
        {
          "id": "8",
          "cells": {
            "metric": "Validated inspection events",
            "value": "Unavailable"
          }
        },
        {
          "id": "9",
          "cells": {
            "metric": "Validated batches",
            "value": "Unavailable"
          }
        },
        {
          "id": "10",
          "cells": {
            "metric": "Comparable all-inspection denominator",
            "value": "Unavailable"
          }
        }
      ]
    },
    {
      "caption": "Actual Mode A documentary tiers",
      "columns": [
        {
          "key": "tier",
          "label": "Tier"
        },
        {
          "key": "count",
          "label": "Records"
        },
        {
          "key": "meaning",
          "label": "Documentary meaning"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "tier": "T1",
            "count": "1028",
            "meaning": "Source-edition change; precedence over other flags"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "T2",
            "count": "20944",
            "meaning": "Original-byte/date/identifier-namespace verification"
          }
        },
        {
          "id": "3",
          "cells": {
            "tier": "T3",
            "count": "673",
            "meaning": "Other documentary flags or routine checks"
          }
        }
      ]
    },
    {
      "caption": "Six implemented Mode A capacity runs",
      "columns": [
        {
          "key": "strategy",
          "label": "Strategy"
        },
        {
          "key": "capacity",
          "label": "Capacity"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "used",
          "label": "Used"
        },
        {
          "key": "sources",
          "label": "Source cohorts"
        },
        {
          "key": "t1",
          "label": "T1"
        },
        {
          "key": "t2",
          "label": "T2"
        },
        {
          "key": "t3",
          "label": "T3"
        },
        {
          "key": "shared",
          "label": "Paired strategy shared IDs"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "strategy": "Evidence first",
            "capacity": "5",
            "eligible": "22645",
            "used": "5",
            "sources": "1",
            "t1": "5",
            "t2": "0",
            "t3": "0",
            "shared": "5"
          }
        },
        {
          "id": "2",
          "cells": {
            "strategy": "Source-balanced within tier",
            "capacity": "5",
            "eligible": "22645",
            "used": "5",
            "sources": "1",
            "t1": "5",
            "t2": "0",
            "t3": "0",
            "shared": "5"
          }
        },
        {
          "id": "3",
          "cells": {
            "strategy": "Evidence first",
            "capacity": "10",
            "eligible": "22645",
            "used": "10",
            "sources": "1",
            "t1": "10",
            "t2": "0",
            "t3": "0",
            "shared": "10"
          }
        },
        {
          "id": "4",
          "cells": {
            "strategy": "Source-balanced within tier",
            "capacity": "10",
            "eligible": "22645",
            "used": "10",
            "sources": "1",
            "t1": "10",
            "t2": "0",
            "t3": "0",
            "shared": "10"
          }
        },
        {
          "id": "5",
          "cells": {
            "strategy": "Evidence first",
            "capacity": "All",
            "eligible": "22645",
            "used": "22645",
            "sources": "3",
            "t1": "1028",
            "t2": "20944",
            "t3": "673",
            "shared": "22645"
          }
        },
        {
          "id": "6",
          "cells": {
            "strategy": "Source-balanced within tier",
            "capacity": "All",
            "eligible": "22645",
            "used": "22645",
            "sources": "3",
            "t1": "1028",
            "t2": "20944",
            "t3": "673",
            "shared": "22645"
          }
        }
      ]
    },
    {
      "caption": "Sensitivity relative to evidence-first capacity 5",
      "columns": [
        {
          "key": "strategy",
          "label": "Strategy"
        },
        {
          "key": "capacity",
          "label": "Capacity"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "used",
          "label": "Selected"
        },
        {
          "key": "shared",
          "label": "Shared IDs"
        },
        {
          "key": "added",
          "label": "Added"
        },
        {
          "key": "removed",
          "label": "Removed"
        },
        {
          "key": "populationChange",
          "label": "Population change"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "strategy": "Evidence first",
            "capacity": "5",
            "eligible": "22645",
            "used": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "populationChange": "0"
          }
        },
        {
          "id": "2",
          "cells": {
            "strategy": "Evidence first",
            "capacity": "10",
            "eligible": "22645",
            "used": "10",
            "shared": "5",
            "added": "5",
            "removed": "0",
            "populationChange": "0"
          }
        },
        {
          "id": "3",
          "cells": {
            "strategy": "Evidence first",
            "capacity": "All",
            "eligible": "22645",
            "used": "22645",
            "shared": "5",
            "added": "22640",
            "removed": "0",
            "populationChange": "0"
          }
        },
        {
          "id": "4",
          "cells": {
            "strategy": "Source-balanced within tier",
            "capacity": "5",
            "eligible": "22645",
            "used": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "populationChange": "0"
          }
        },
        {
          "id": "5",
          "cells": {
            "strategy": "Source-balanced within tier",
            "capacity": "10",
            "eligible": "22645",
            "used": "10",
            "shared": "5",
            "added": "5",
            "removed": "0",
            "populationChange": "0"
          }
        },
        {
          "id": "6",
          "cells": {
            "strategy": "Source-balanced within tier",
            "capacity": "All",
            "eligible": "22645",
            "used": "22645",
            "shared": "5",
            "added": "22640",
            "removed": "0",
            "populationChange": "0"
          }
        }
      ]
    },
    {
      "caption": "Mode B diagnostics: overlapping counts, not a partition",
      "columns": [
        {
          "key": "metric",
          "label": "Metric"
        },
        {
          "key": "count",
          "label": "Count"
        },
        {
          "key": "meaning",
          "label": "Evidence meaning"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "metric": "Unvalidated candidate pairs",
            "count": "35",
            "meaning": "Name/address equality only; not admitted associations"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "Ambiguous candidate pairs",
            "count": "0",
            "meaning": "No such pairs in this edition"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "Validated associations",
            "count": "0",
            "meaning": "Independent establishment confirmations absent"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "Matched records",
            "count": "0",
            "meaning": "No validated establishment coverage"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "Unresolved records",
            "count": "22645",
            "meaning": "Includes sample exclusions below"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "Samples excluded from automatic joins",
            "count": "673",
            "meaning": "Subset of unresolved records, not additional exclusions"
          }
        }
      ]
    },
    {
      "caption": "Neutral source-derived review examples",
      "columns": [
        {
          "key": "example",
          "label": "Example"
        },
        {
          "key": "date",
          "label": "Observation date"
        },
        {
          "key": "issue",
          "label": "Engineering question"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "example": "Historical sample",
            "date": "2024-01-02",
            "issue": "Event and batch identity unavailable"
          }
        },
        {
          "id": "2",
          "cells": {
            "example": "Duplicate published occurrence",
            "date": "2022-06-21",
            "issue": "Preserve occurrence; not an extra validated sample"
          }
        },
        {
          "id": "3",
          "cells": {
            "example": "Passing grading record",
            "date": "Unavailable",
            "issue": "Assessment date unavailable; passing-list scope only"
          }
        },
        {
          "id": "4",
          "cells": {
            "example": "Current-only registry row",
            "date": "Unavailable",
            "issue": "Edition question; not a new-opening finding"
          }
        }
      ]
    },
    {
      "caption": "Exact first 10 IDs: both strategies share this order",
      "columns": [
        {
          "key": "rank",
          "label": "Rank"
        },
        {
          "key": "recordId",
          "label": "Record ID"
        },
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "tier",
          "label": "Tier"
        },
        {
          "key": "capacity5",
          "label": "Selected at 5"
        },
        {
          "key": "capacity10",
          "label": "Selected at 10"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "rank": "1",
            "recordId": "policy11_registry_0020b1397906c16c",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "Yes",
            "capacity10": "Yes"
          }
        },
        {
          "id": "2",
          "cells": {
            "rank": "2",
            "recordId": "policy11_registry_005d1a9c6dac82d6",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "Yes",
            "capacity10": "Yes"
          }
        },
        {
          "id": "3",
          "cells": {
            "rank": "3",
            "recordId": "policy11_registry_00c14f043303754a",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "Yes",
            "capacity10": "Yes"
          }
        },
        {
          "id": "4",
          "cells": {
            "rank": "4",
            "recordId": "policy11_registry_00e3d8cdfd66d7d7",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "Yes",
            "capacity10": "Yes"
          }
        },
        {
          "id": "5",
          "cells": {
            "rank": "5",
            "recordId": "policy11_registry_00f01e8c60840089",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "Yes",
            "capacity10": "Yes"
          }
        },
        {
          "id": "6",
          "cells": {
            "rank": "6",
            "recordId": "policy11_registry_012301b7655c927e",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "No",
            "capacity10": "Yes"
          }
        },
        {
          "id": "7",
          "cells": {
            "rank": "7",
            "recordId": "policy11_registry_01303f6e8cf5d670",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "No",
            "capacity10": "Yes"
          }
        },
        {
          "id": "8",
          "cells": {
            "rank": "8",
            "recordId": "policy11_registry_016237177b8ad375",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "No",
            "capacity10": "Yes"
          }
        },
        {
          "id": "9",
          "cells": {
            "rank": "9",
            "recordId": "policy11_registry_017fc897832ab0af",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "No",
            "capacity10": "Yes"
          }
        },
        {
          "id": "10",
          "cells": {
            "rank": "10",
            "recordId": "policy11_registry_01913b22756f09ae",
            "source": "Registry",
            "tier": "T1",
            "capacity5": "No",
            "capacity10": "Yes"
          }
        }
      ]
    },
    {
      "caption": "Exact neutral example and candidate-pair identifiers",
      "columns": [
        {
          "key": "example",
          "label": "Example"
        },
        {
          "key": "recordId",
          "label": "Record ID"
        },
        {
          "key": "counterpart",
          "label": "Other record ID"
        },
        {
          "key": "status",
          "label": "Evidence status"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "example": "Historical sample",
            "recordId": "failed_food_inspection_a24f5da5af94",
            "counterpart": "Not used",
            "status": "Event and batch identity unavailable"
          }
        },
        {
          "id": "2",
          "cells": {
            "example": "Duplicate published occurrence",
            "recordId": "failed_food_inspection_97d6b8b223f4_published_duplicate_554",
            "counterpart": "Not used",
            "status": "Preserve occurrence; not an extra validated sample"
          }
        },
        {
          "id": "3",
          "cells": {
            "example": "Passing grading record",
            "recordId": "restaurant_hygiene_grading_67d0d3962f24",
            "counterpart": "Not used",
            "status": "Assessment date unavailable; passing-list scope only"
          }
        },
        {
          "id": "4",
          "cells": {
            "example": "Current-only registry row",
            "recordId": "policy11_registry_0020b1397906c16c",
            "counterpart": "Not used",
            "status": "Edition question; not a new-opening finding"
          }
        },
        {
          "id": "5",
          "cells": {
            "example": "Candidate name/address pair",
            "recordId": "restaurant_hygiene_grading_1f87734e8fa8",
            "counterpart": "restaurant_6fbebbbc8b40",
            "status": "Unvalidated; no responsibility transfer"
          }
        }
      ]
    },
    {
      "caption": "Implemented export controls and recorded source checks",
      "columns": [
        {
          "key": "item",
          "label": "Control / check"
        },
        {
          "key": "result",
          "label": "Implemented or recorded result"
        },
        {
          "key": "boundary",
          "label": "Scope"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "item": "CSV encoding and quoting",
            "result": "One UTF-8 BOM; every cell quoted",
            "boundary": "Actual export code and focused tests"
          }
        },
        {
          "id": "2",
          "cells": {
            "item": "Spreadsheet formulas",
            "result": "Prefixes neutralized, including leading whitespace/control characters",
            "boundary": "No universal security certification"
          }
        },
        {
          "id": "3",
          "cells": {
            "item": "Complete provenance",
            "result": "First-row metadata once; later rows reference snapshot ID",
            "boundary": "Record evidence remains per selected row"
          }
        },
        {
          "id": "4",
          "cells": {
            "item": "All-capacity export",
            "result": "22,645 IDs; approximately 31 MB CSV",
            "boundary": "Recorded source result, not Portfolio payload"
          }
        },
        {
          "id": "5",
          "cells": {
            "item": "Automated source tests",
            "result": "20 passing; baseline 8",
            "boundary": "Attributed source record, not full-suite rerun claim"
          }
        },
        {
          "id": "6",
          "cells": {
            "item": "Browser and layout checks",
            "result": "EN/ZH, 5/10/all, balancing, pagination, CSV;1440/390px",
            "boundary": "Recorded checks; no timed browser-suite count"
          }
        },
        {
          "id": "7",
          "cells": {
            "item": "Source reproduction",
            "result": "Offline byte/snapshot checks and TypeScript/build pass",
            "boundary": "Separate from fresh acquisition"
          }
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": "Official failed-sample catalogue",
      "url": "https://data.taipei/dataset/detail?id=09a917a0-0fb5-47e1-957c-5f1268fba517"
    },
    {
      "label": "Official passing hygiene-grading catalogue",
      "url": "https://data.taipei/dataset/detail?id=59579c19-a561-4564-8c0f-545bfb32c0f6"
    },
    {
      "label": "Official business-registration catalogue",
      "url": "https://data.taipei/dataset/detail?id=178abc4e-fe32-4fc9-af3a-7baf1c15082c"
    },
    {
      "label": "Source feasibility, custody and identity audit",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/doc/POLICY_11_SOURCE_AUDIT.md"
    },
    {
      "label": "Recorded source verification and authentic images",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/doc/POLICY_11_VERIFICATION.md"
    },
    {
      "label": "Original-response acquisition manifest",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/public/data/policy-11/evidence/acquisition.json"
    },
    {
      "label": "Sealed historical transformed-JSON manifest",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/public/data/policy-11/retained-manifest.json"
    },
    {
      "label": "Published snapshot integrity manifest",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/public/data/policy-11/manifest.json"
    },
    {
      "label": "Immutable source snapshot — approximately 17 MB",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/public/data/policy-11/snapshot-8ef73119f62c4ca9594a.json"
    },
    {
      "label": "Offline evidence builder and exact replay",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/scripts/buildPolicy11Evidence.ts"
    },
    {
      "label": "Source acquisition and sealed-edition guard",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/scripts/fetchPolicy11Evidence.mjs"
    },
    {
      "label": "Additive and missing schema rejection",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/scripts/policy11EvidenceValidation.ts"
    },
    {
      "label": "Actual selector, identity validation and exports",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/src/lib/policy11.ts"
    },
    {
      "label": "Selector, identity and export regression tests",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/src/lib/policy11.test.ts"
    },
    {
      "label": "Source byte and schema regression tests",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/src/lib/policy11SourceAudit.test.ts"
    },
    {
      "label": "Bilingual lazy review interface and integrity loader",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/src/components/Policy11Module.tsx"
    },
    {
      "label": "Reviewed upstream English desktop capture — personal research interface",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/doc/policy-11/desktop-en.png"
    },
    {
      "label": "Reviewed upstream Chinese mobile capture — personal research interface",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/doc/policy-11/mobile-zh.png"
    }
  ],
  "previewAssets": [
    {
      "label": "Reviewed upstream English desktop capture — personal research interface",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/doc/policy-11/desktop-en.png"
    },
    {
      "label": "Reviewed upstream Chinese mobile capture — personal research interface",
      "url": "https://github.com/LEO0331/taipei-friendly-food-map/blob/ebed7962b8ced05afea285865f95f2bb7e991f1e/doc/policy-11/mobile-zh.png"
    }
  ],
  "futureExtensions": [
    "Acquire a separate retained edition with renewed schema and source-date review.",
    "Require authoritative event/batch IDs and one-to-one establishment evidence before linking findings.",
    "Current-risk research needs compatible inspection denominators, sampling design, operating and follow-up evidence."
  ]
};
