import type { GovTechCase } from "../types/govtechCase";

export const WIFI_ALLOCATION_V10_SOURCE_SHA = "fc3fe9340c460418b4255d04cf8a0150dbcf669b";
export const WIFI_ALLOCATION_V11_SOURCE_SHA = "8e01a2bd8d762b51fae979d32fd477e378d1876b";
export const WIFI_ALLOCATION_V10_SNAPSHOT = "wifi-policy-c250791e7736ed5bca2882ea";
export const WIFI_ALLOCATION_V11_SNAPSHOT = "wifi-geo-da9f69f501af4d6e1d3f9122";
export const WIFI_ALLOCATION_V10_METHOD = "wifi-allocation-evidence-review-v1";
export const WIFI_ALLOCATION_V11_METHOD = "wifi-geographic-proximity-experiment-v1";
export const WIFI_ALLOCATION_V10_SHA256 = "91b28d7b375e7fb14ee42bfbe179d792c9e0ed0992f273582dd1e03e6bac8a82";
export const WIFI_ALLOCATION_V11_SHA256 = "0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f";
export const wifiAllocationV10Source = (path: string): string => `https://github.com/LEO0331/taipei-free-wifi-map/blob/${WIFI_ALLOCATION_V10_SOURCE_SHA}/${path}`;
export const wifiAllocationV11Source = (path: string): string => `https://github.com/LEO0331/taipei-free-wifi-map/blob/${WIFI_ALLOCATION_V11_SOURCE_SHA}/${path}`;

export const wifiAllocationCase: GovTechCase = {
  "id": "wifi-allocation",
  "slug": "wifi-allocation",
  "displayNumber": "008",
  "projectId": "taipei-free-wifi-map",
  "policyDomain": "Digital Inclusion & Data Governance",
  "sourceRepository": "https://github.com/LEO0331/taipei-free-wifi-map",
  "sourceVersion": "8e01a2bd8d762b51fae979d32fd477e378d1876b",
  "snapshotVersion": "wifi-geo-da9f69f501af4d6e1d3f9122",
  "title": "Public Wi-Fi Allocation & Digital Inclusion Decision Support",
  "summary": "From official inventory reconciliation to traceable review scenarios, coordinate-evidence validation and bounded experimental geographic research.",
  "maturity": "decision-support-poc",
  "maturityLabel": "Completed evidence review and experimental GIS research proof of concept",
  "reviewNote": "Mode B has no non-self gain and optimization is unavailable; Mode C still lacks operational and digital-inclusion evidence.",
  "intendedUsers": "Municipal data stewards, civic-data engineers and public-facility researchers.",
  "implementedCapabilities": [
    "Source acquisition and inventory reconciliation",
    "Deterministic investigation tiers and capacity scenarios",
    "Official boundary transformation and point attribution",
    "Facility coordinate-hypothesis testing",
    "Experimental proximity, self-reference safeguards and traceable exports"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "Policy Problem and Decision Scope",
      "paragraphs": [
        "Which source records should a municipal team investigate first when its review capacity is limited and published Wi-Fi locations do not establish actual service? This project makes the evidence, assumptions and selected investigation identities explicit before comparing scenarios.",
        "Published infrastructure, experimental geometric proximity, actual service accessibility and measured digital inclusion are four separate questions. The intended users are municipal data stewards, civic-data engineers and public-facility researchers; neither mode authorizes equipment placement."
      ]
    },
    {
      "id": "evolution",
      "title": "From Wi-Fi Explorer to Evidence-Aware Decision Support",
      "paragraphs": [
        "The existing bilingual explorer retains 3,297 records, clustered mapping, nearby search, filters and a directory. Policy #8 v1.0 adds independent source acquisition, reconciliation, edition-bound identities and capacity-constrained Mode A evidence review; it does not silently migrate the explorer edition.",
        "Policy #8 v1.1 adds official boundary transformation, facility-coordinate evidence classification and experimental Mode B research in the same project. This single Case 008 documents both phases."
      ]
    },
    {
      "id": "sources",
      "title": "Official Sources, Editions and Provenance",
      "paragraphs": [
        "Retained official sources are A: current Wi-Fi CSV (2026-07-01); B: libraries CSV (2026-06-10); C: community activity centers ODS (2025-12-18); D: sports centers CSV (2026-03-02); E: district SHP archive (2024-09-16). B/C/D contain 70/9/12 original rows. Source letters C and D must not be swapped when interpreting exports.",
        "Bounded offline acquisition preserves original bytes, catalogue/guidance evidence and SHA-256 separately from derived JSON. Publication dates, acquisition dates, commits, edition hashes and snapshot IDs identify different things. These retained editions are not a live municipal inventory; rebuilding does not refresh their source dates.",
        "Retained legacy source SHA-256 is c230610998a33309677fa235ec11b05d047bf3c9379dc6a7683ff3645a422c15; filename1141218 is not an authoritative publication date, and original acquisition/publication times remain unknown."
      ]
    },
    {
      "id": "reconciliation",
      "title": "v1.0 Inventory Reconciliation and Normalization",
      "paragraphs": [
        "Legacy 3,297 versus current 3,305 source rows yields 3,286 shared exact identity pairs, 19 current-only and 11 legacy-only pairs. Source-labelled Taipei counts are 3,285 and 3,293; 12 current rows are labelled outside Taipei. A net eight records describes publication differences, not eight new physical access points.",
        "There are 596 coordinate-text differences but only 33 numeric coordinate changes after normalization, plus 1 category change, 75 other metadata changes and 0 ambiguous current matches. Change categories can overlap. Text formatting differences are not relocations; even numeric changes need investigation rather than a physical-movement claim."
      ]
    },
    {
      "id": "mode-a",
      "title": "Mode A Identity, Eligibility and Investigation Tiers",
      "paragraphs": [
        "The 3,316 source-investigation candidates use source-edition hash, SITE_ID, HOTSPOT_ID, canonical record hash and duplicate occurrence suffix. Tier A has 63 primary identity/evidence investigations, B has 57 documentation investigations and C has 3,196 routine documentation follow-ups. These tiers do not rate network performance or resident harm.",
        "Strict/current-only eligibility admits 3,293 and excludes 23. Evidence Gaps First orders evidence tiers deterministically; Balanced Facility Review interleaves source categories. Capacity 5/10/all limits investigation slots, not installations. Original fields and full edition-bound IDs remain available in pinned JSON/CSV exports."
      ],
      "content": "methodology"
    },
    {
      "id": "mode-a-scenarios",
      "title": "Mode A Capacity and Source-Scope Sensitivity",
      "paragraphs": [
        "At capacity 5, gaps/balanced represent 3/5 categories and 2/3 source-labelled districts, sharing 1 ID; capacity 10 represents 3/10 categories and 2/6 districts, sharing 2 IDs. All admits the same 3,293 members across 13 categories. Administrative group counts are not independently verified geographic equity.",
        "Strict/current-only, broader/current-only, strict/including legacy-only and broader/including legacy-only admit 3,293/3,305/3,304/3,316 respectively. The first five Evidence Gaps First site identifiers remain TPEE002338, TPEE002354, TPEE002595, TPEE002596 and TPEE002597. This stability applies to this edition and tested settings only."
      ]
    },
    {
      "id": "geometry",
      "title": "Official Boundary Transformation and GIS Validation",
      "paragraphs": [
        "The retained ZIP contains matching SHP/SHX/DBF/PRJ/CPG components. PRJ TWD_1997_TM_Taiwan matches EPSG:3826 (GRS80, central meridian 121°, scale 0.9999, false easting 250,000m). PROJ 9.5.1 through pyproj 3.7.2 uses always_xy=True and allow_ballpark=False to emit EPSG:4326 longitude/latitude, preserving multipolygons and interior rings.",
        "All 12 districts pass component/index/attribute, finite-coordinate, closed-ring, topology, axis and round-trip checks; no repair or rejected district. Maximum round-trip error is 0.000074m. Eleven original overlap pairs remain, largest 0.407474m², below the explicit 1m² admission tolerance. The analytic [250000,0] → [121,0] control checks the projection definition, not surveyed facility position. Stated operation accuracy of about 1m does not establish original coordinate accuracy."
      ]
    },
    {
      "id": "spatial",
      "title": "Point-in-Polygon and Boundary Uncertainty",
      "paragraphs": [
        "Attribution uses original projected polygons. A 0.001m numerical shared-edge tolerance is separate from 10/25/50m research flags. Unique membership beyond 10m is interior; nearer unique membership is boundary-adjacent; exterior, multi-match and invalid results are distinct. Strict H excludes boundary-adjacent records; flagged H retains qualified unique members with warnings.",
        "A has 3,234 interior, 59 boundary-adjacent and 12 exterior rows, 64 source/polygon district disagreements, 200 duplicate-coordinate groups and no repeated SITE_ID. Pre-strict admission is 3,229 rows. Duplicate coordinates have one distance effect, not evidence of extra installations. All 91 facilities are polygon interiors under their hypotheses, yet four fail the district/identity evidence contract."
      ]
    },
    {
      "id": "coordinates",
      "title": "Facility Coordinate Contracts and Evidence Levels",
      "paragraphs": [
        "Verified requires authoritative CRS evidence, valid transformation, qualified identity and geometry. No facility meets it. Assumption-tested admits B69/C9/D9 under explicit hypotheses and district agreement; Unresolved retains B1/D3 outside the model. No independently surveyed numeric positional control or authoritative facility datum declaration was established.",
        "B/D 經度/緯度 are hypothesized EPSG:4326; their district is parsed from the published address, not an independent district field. C 座標X/座標Y are hypothesized EPSG:3826 and transformed. All nine C records pass district checks; alternative EPSG:3825 lands outside Taipei and EPSG:3828 has no accepted non-ballpark offline operation. This tests hypotheses; it does not prove the publisher intended the selected datum."
      ]
    },
    {
      "id": "identity",
      "title": "Facility Identity, Exclusions and Admission Limits",
      "paragraphs": [
        "Keys combine source ID, edition SHA prefix and SHA-256 of the name/address composite. C 編號 is a retained row label, not a stable publisher identity. No duplicate composites, conflicting composite coordinates, shared addresses, cross-source shared addresses, publisher row collisions or facility duplicate-coordinate groups were found. No fuzzy or longitudinal physical-site identity is established.",
        "士林分館 lacks an explicit district token in its published address. 中山運動中心, 南港運動中心 and 中正運動中心 fall in 大同區, 信義區 and 大安區 respectively under the tested coordinates, contradicting their source addresses. All four are excluded without silently correcting coordinates. Closed facilities appearing in the retained library edition also demonstrate why admission never proves current operation."
      ]
    },
    {
      "id": "model",
      "title": "Mode B Candidate Grain and Geometric Proximity",
      "paragraphs": [
        "H is the qualified published hotspot-coordinate reference set; R and C are the same 87 admitted facility-record composites in the combined assumed cohort. Records, distinct coordinates, reference identities, hypothetical investigation candidates and actual access points are different units. Verified-only has R=C=0 and excludes all 91 audited facility rows.",
        "Offline Haversine distances use mean Earth radius 6,371,008.8m and inclusive research thresholds 100/250/500m. Nearest-H and facility-neighbor associations are precomputed; React filters small lists. Baseline is min distance(R,H) ≤ radius. Each newly associated reference is counted once, excluding baseline and previously counted members. None of these distances measures wireless signal reach."
      ]
    },
    {
      "id": "self-count",
      "title": "Self-Reference Safeguards and the Negative Result",
      "paragraphs": [
        "The engine separates own-reference contribution (zero distance), additional other references and total marginal association. It disables optimization for self-only, identical-neighborhood or all-baseline-proximate models. Actual non-self incremental association is 0 at every supported threshold; optimizationAvailable is false.",
        "Combined baselines are 69/85/87 of 87 at 100/250/500m. Capacity 5 and 10 lists add 0 references. All adds 18/2/0, exclusively guaranteed own-reference contributions. These are descriptive geometric accounting results, not an allocation improvement. No valid nontrivial geographic optimization ranking was delivered for this cohort."
      ]
    },
    {
      "id": "mode-b-scenarios",
      "title": "Recorded Mode A and Experimental Mode B Scenario Tables",
      "paragraphs": [
        "Marginal Reference Proximity recomputes uncounted neighborhoods; with optimization disabled it reports descriptive lexical ID order. Geographic/Facility Representation chooses the least-used validated district | category group, then marginal/ID order. At 5 both lists share all five IDs and represent 5 districts/1 category. At 10 they share 5, add/remove 5 each: 5 versus 10 districts, still only 1 category. All shares 87 members across 12 districts/3 categories.",
        "Example B:82f4e1aedafd3b68:0474263c1a583f5e740291b4 is 中崙分館 (Zhonglun Branch), source B edition 2026-06-10, assumption-tested under EPSG:4326, attributed to 松山區. It is first by descriptive lexical ID, with own=0, other=0 and total=0 in the 100m capacity-5 export. Its selection is not evidence of unmet need. Full ordered 5/10 IDs appear below; all 288 configurations retain complete IDs in the pinned export."
      ],
      "content": "scenarios"
    },
    {
      "id": "sensitivity",
      "title": "Evidence, Cohort, Radius and Boundary Sensitivity",
      "paragraphs": [
        "The actual matrix has 288 configurations: 2 evidence modes × 3 radii × 2 geographic rules × 4 cohorts × 3 capacities × 2 strategies. Verified-only honestly remains empty. Assumed libraries/activity/sports cohorts have denominators 69/9/9, not comparable resident-demand weights; combined is 87 with 4 exclusions.",
        "Library baseline counts are 61/67/69, activity centers 8/9/9 and sports centers 0/9/9. Strict versus flagged geographic admission changes hotspot scope but not this edition’s tested baseline or selection results. Cross-radius membership stability and unchanged boundaries do not certify facility datum or future priorities. The 10/25/50m flags are research uncertainty diagnostics, not measured source precision."
      ]
    },
    {
      "id": "architecture",
      "title": "Static ETL, Integrity and Reproducible Publication",
      "paragraphs": [
        "v1.0 source revision fc3fe9340c460418b4255d04cf8a0150dbcf669b, method wifi-allocation-evidence-review-v1 and snapshot wifi-policy-c250791e7736ed5bca2882ea are retained independently. Latest source revision 8e01a2bd8d762b51fae979d32fd477e378d1876b supplies method wifi-geographic-proximity-experiment-v1, schema 1.1 and geographic generation wifi-geo-da9f69f501af4d6e1d3f9122. Snapshot SHA-256 is 0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f; geometry SHA-256 is de9fcacdd831d0d5c608bf3f8e5de2559c0a03cffa2014faf94bf92617899a1c.",
        "Immutable generation files publish before the atomic manifest pointer. Browser checks bind paths, exact bytes, SHA-256, schema, source and version before parsing. Exports retain settings, selected/excluded identities, source editions, assumptions and unavailable metrics; CSV formula-prefix defenses and escaped labels protect presentation. A matching digest establishes byte agreement, not official certification.",
        "Original v1.0 snapshot SHA-256: 91b28d7b375e7fb14ee42bfbe179d792c9e0ed0992f273582dd1e03e6bac8a82. The localized Mode A pointer separately identifies wifi-policy-e08d28277549c88787dea209 (SHA-256 cd675db75af4b65220692dc59916c7e5b88920b42613d4b82c7affcb43e0dfaa); it does not replace historical v1.0 or the v1.1 geographic generation."
      ],
      "content": "architecture"
    },
    {
      "id": "decisions",
      "title": "Implementation Challenges and Engineering Decisions",
      "paragraphs": [
        "Established pyproj/PROJ and Shapely/GEOS replace an unvalidated handwritten projection. Raw ring closure is checked before geometry construction; archive expansion, traversal and ODS repeated-cell overflow are bounded. The original overlaps and contradictory coordinates remain auditable instead of being repaired to improve results.",
        "Offline nearest/neighbor preprocessing avoids pairwise GIS work per render. Mode A, Mode B and Mode C retain separate eligibility semantics. The existing bilingual lazy React shell, Leaflet and export patterns are reused; no production backend or new npm dependency was added upstream. Portfolio reuses its shared case renderer and ships authored summaries only."
      ]
    },
    {
      "id": "verification",
      "title": "Testing, Performance and Independent Reproduction",
      "paragraphs": [
        "Historical upstream v1.0 records 23 passing Node tests, snapshot 1,707,558 bytes / 162,570 gzip, lazy policy JS 28,424 bytes and CSS 3,511 bytes. v1.1 records geographic tests, deterministic output, desktop/mobile bilingual QA, real exports and zero policy/GIS payload before entry. Recorded upstream checks are distinct from Portfolio reruns.",
        "v1.1 snapshot is 158,672 bytes / 17,567 gzip; optional geometry 437,741 / 140,735; separate 288-scenario research export 3,154,696 / 55,597. Upstream 100 warmed local runs measured median 0.0947ms and p95 0.1494ms, excluding network/device effects. Incremental lazy Mode B JS is about 32kB / 11.5kB gzip. These are upstream local measurements, not visitor latency or Wi-Fi performance.",
        "Portfolio independently hashes retained artifacts and reruns original pure TypeScript Mode A/B functions without adding dependencies. Projection/ETL, fresh official acquisition and the upstream full suite are not independently replayed. Source screenshots are inspected local research captures, not public-host acceptance; the original explorer preview remains attached to its owning project."
      ],
      "content": "evidence",
      "links": [
        {
          "label": "Inspected local research screenshot: explorer",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/evidence/explorer-desktop.png"
        },
        {
          "label": "Inspected local research screenshot: Mode A",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/evidence/policy-desktop.png"
        },
        {
          "label": "Upstream local research · English desktop",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/en-desktop.png"
        },
        {
          "label": "Upstream local research · Chinese desktop",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/zh-desktop.png"
        },
        {
          "label": "Upstream local research · English mobile",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/en-mobile.png"
        },
        {
          "label": "Upstream local research · Chinese mobile",
          "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/zh-mobile.png"
        }
      ]
    },
    {
      "id": "limitations",
      "title": "Mode C Evidence Gate and Future Research",
      "paragraphs": [
        "Mode C remains unavailable: current operating status, uptime, measured signal, connection quality, actual usage, comparable periods, continuous site identity, population/demand denominators and digital-exclusion outcomes are missing. Geographic admission cannot establish any of them. No deployment feasibility, RF coverage, people served or demonstrated digital-equity improvement is claimed.",
        "Next research requires publisher CRS clarification, independent surveyed controls, stable facility IDs, current operation/access evidence and a reference model capable of non-self distinctions. Geometry validation and transparent negative findings are completed engineering work; investment priorities and municipal adoption remain unestablished."
      ],
      "content": "future"
    }
  ],
  "architecture": [
    "Official source datasets",
    "Bounded offline acquisition",
    "Original-byte SHA-256",
    "Schema and identity audit",
    "Historical/current reconciliation",
    "CRS and polygon validation",
    "Point-in-polygon admission",
    "Facility evidence classification",
    "Immutable snapshots",
    "Mode A / experimental Mode B",
    "Lazy bilingual React interface",
    "Auditable JSON/CSV exports"
  ],
  "architectureNote": "Simplified explanatory view of the actual upstream offline pipeline; Portfolio presents static summaries without GIS execution or policy snapshot downloads.",
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "wifi-geographic-proximity-experiment-v1",
    "explanation": "Mode A retains wifi-allocation-evidence-review-v1; Mode B uses schema 1.1 and explicit research assumptions, with optimization disabled.",
    "thresholds": {
      "caption": "Eligibility contracts",
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
            "rule": "Strict current: 3,293 eligible, 23 excluded"
          }
        },
        {
          "id": "1",
          "cells": {
            "mode": "B",
            "rule": "Verified 0; assumption-tested 87, excluded 4"
          }
        },
        {
          "id": "2",
          "cells": {
            "mode": "C",
            "rule": "Operational, demand and outcome evidence unavailable"
          }
        }
      ]
    },
    "tiers": {
      "caption": "Evidence tiers are not network scores",
      "columns": [
        {
          "key": "tier",
          "label": "Tier"
        },
        {
          "key": "rule",
          "label": "Meaning"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "tier": "Verified",
            "rule": "Authoritative CRS, qualified identity and valid geometry; actual 0"
          }
        },
        {
          "id": "1",
          "cells": {
            "tier": "Assumption-tested",
            "rule": "Explicit hypothesis and reproducible geometry/district tests; 87"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "Unresolved",
            "rule": "Contract not met; retained but excluded; 4"
          }
        }
      ]
    },
    "notes": [
      "100/250/500 meters are research assumptions, not RF radii.",
      "0.001m numerical tolerance differs from 10/25/50m research flags.",
      "All additional-reference gains are 0; all-slots 18/2/0 are own contributions only."
    ]
  },
  "scenarioTables": [
    {
      "caption": "v1.0 inventory reconciliation",
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
            "metric": "Legacy",
            "count": "3297"
          }
        },
        {
          "id": "1",
          "cells": {
            "metric": "Current",
            "count": "3305"
          }
        },
        {
          "id": "2",
          "cells": {
            "metric": "Shared pairs",
            "count": "3286"
          }
        },
        {
          "id": "3",
          "cells": {
            "metric": "Current only",
            "count": "19"
          }
        },
        {
          "id": "4",
          "cells": {
            "metric": "Legacy only",
            "count": "11"
          }
        },
        {
          "id": "5",
          "cells": {
            "metric": "Coordinate text differences",
            "count": "596"
          }
        },
        {
          "id": "6",
          "cells": {
            "metric": "Numeric coordinate changes",
            "count": "33"
          }
        },
        {
          "id": "7",
          "cells": {
            "metric": "Category changes",
            "count": "1"
          }
        },
        {
          "id": "8",
          "cells": {
            "metric": "Other metadata",
            "count": "75"
          }
        },
        {
          "id": "9",
          "cells": {
            "metric": "Ambiguous current matches",
            "count": "0"
          }
        }
      ]
    },
    {
      "caption": "v1.0 investigation tiers",
      "columns": [
        {
          "key": "tier",
          "label": "Tier"
        },
        {
          "key": "count",
          "label": "Candidates"
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
      "caption": "v1.0 same-scope capacity comparison",
      "columns": [
        {
          "key": "capacity",
          "label": "Capacity"
        },
        {
          "key": "gapsCategories",
          "label": "Gaps categories"
        },
        {
          "key": "balancedCategories",
          "label": "Balanced categories"
        },
        {
          "key": "gapsDistricts",
          "label": "Gaps districts"
        },
        {
          "key": "balancedDistricts",
          "label": "Balanced districts"
        },
        {
          "key": "shared",
          "label": "Shared IDs"
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
            "capacity": "All",
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
      "caption": "v1.0 eligibility sensitivity",
      "columns": [
        {
          "key": "scope",
          "label": "Scope"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "scope": "Strict/current",
            "eligible": "3293"
          }
        },
        {
          "id": "1",
          "cells": {
            "scope": "Broader/current",
            "eligible": "3305"
          }
        },
        {
          "id": "2",
          "cells": {
            "scope": "Strict/include legacy",
            "eligible": "3304"
          }
        },
        {
          "id": "3",
          "cells": {
            "scope": "Broader/include legacy",
            "eligible": "3316"
          }
        }
      ]
    },
    {
      "caption": "v1.0 first five abbreviated site IDs · full identities in pinned export",
      "columns": [
        {
          "key": "rank",
          "label": "Rank"
        },
        {
          "key": "gaps",
          "label": "Evidence Gaps First"
        },
        {
          "key": "balanced",
          "label": "Balanced Facility Review"
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
      "caption": "v1.1 facility coordinate evidence · not certified locations",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "audited",
          "label": "Audited"
        },
        {
          "key": "verified",
          "label": "Verified"
        },
        {
          "key": "assumed",
          "label": "Assumption-tested"
        },
        {
          "key": "unresolved",
          "label": "Unresolved"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "source": "B Libraries",
            "audited": "70",
            "verified": "0",
            "assumed": "69",
            "unresolved": "1"
          }
        },
        {
          "id": "1",
          "cells": {
            "source": "C Activity centers",
            "audited": "9",
            "verified": "0",
            "assumed": "9",
            "unresolved": "0"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "D Sports centers",
            "audited": "12",
            "verified": "0",
            "assumed": "9",
            "unresolved": "3"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "Total",
            "audited": "91",
            "verified": "0",
            "assumed": "87",
            "unresolved": "4"
          }
        }
      ]
    },
    {
      "caption": "v1.1 experimental Mode B · combined assumed cohort, strict geography · no non-self gain",
      "columns": [
        {
          "key": "radius",
          "label": "Meters"
        },
        {
          "key": "capacity",
          "label": "Capacity"
        },
        {
          "key": "strategy",
          "label": "Strategy"
        },
        {
          "key": "denominator",
          "label": "Denominator"
        },
        {
          "key": "baseline",
          "label": "Baseline"
        },
        {
          "key": "increment",
          "label": "New"
        },
        {
          "key": "own",
          "label": "Own"
        },
        {
          "key": "other",
          "label": "Other"
        },
        {
          "key": "districts",
          "label": "Districts"
        },
        {
          "key": "categories",
          "label": "Categories"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "radius": "100",
            "capacity": "5",
            "strategy": "marginal",
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
            "strategy": "representation",
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
            "strategy": "marginal",
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
            "strategy": "representation",
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
            "capacity": "All",
            "strategy": "marginal",
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
            "capacity": "All",
            "strategy": "representation",
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
            "strategy": "marginal",
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
            "strategy": "representation",
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
            "strategy": "marginal",
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
            "strategy": "representation",
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
            "capacity": "All",
            "strategy": "marginal",
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
            "capacity": "All",
            "strategy": "representation",
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
            "strategy": "marginal",
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
            "strategy": "representation",
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
            "strategy": "marginal",
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
            "strategy": "representation",
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
            "capacity": "All",
            "strategy": "marginal",
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
            "capacity": "All",
            "strategy": "representation",
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
      "caption": "v1.1 actual full IDs · first five rows: capacity 5 · ten rows: capacity 10",
      "columns": [
        {
          "key": "rank",
          "label": "Rank"
        },
        {
          "key": "marginal",
          "label": "Descriptive marginal"
        },
        {
          "key": "representation",
          "label": "Geographic/facility representation"
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
      "caption": "v1.1 cohort sensitivity · assumption-tested, all slots",
      "columns": [
        {
          "key": "cohort",
          "label": "Cohort"
        },
        {
          "key": "denominator",
          "label": "Denominator"
        },
        {
          "key": "r100",
          "label": "100m baseline"
        },
        {
          "key": "r250",
          "label": "250m baseline"
        },
        {
          "key": "r500",
          "label": "500m baseline"
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
            "cohort": "All",
            "denominator": "87",
            "r100": "69",
            "r250": "85",
            "r500": "87"
          }
        },
        {
          "id": "4",
          "cells": {
            "cohort": "Verified-only",
            "denominator": "0",
            "r100": "0",
            "r250": "0",
            "r500": "0"
          }
        }
      ]
    },
    {
      "caption": "Original source-edition SHA-256",
      "columns": [
        {
          "key": "edition",
          "label": "Source edition"
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
      "caption": "Derived geographic artifacts · hashes do not imply official certification",
      "columns": [
        {
          "key": "artifact",
          "label": "Artifact"
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
    "label": "v1.0 · Source audit",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-source-audit.md"
  },
  {
    "label": "v1.0 · Mode A methodology",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-methodology.md"
  },
  {
    "label": "v1.0 · Acquisition manifest",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/data/raw/wifi-policy/acquisition-manifest.json"
  },
  {
    "label": "v1.0 · Reconciliation observations",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/data/raw/wifi-policy/reconciliation-observations.json"
  },
  {
    "label": "v1.0 · Historical decision export",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/evidence/sample-decision.json"
  },
  {
    "label": "v1.0 · Mode A scenarios",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/src/lib/wifiPolicyScenarios.ts"
  },
  {
    "label": "v1.0 · Mode A tests",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/tests/wifiPolicy.test.ts"
  },
  {
    "label": "v1.1 · Source validation",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-source-validation.md"
  },
  {
    "label": "v1.1 · Coordinate contract",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-coordinate-contract.md"
  },
  {
    "label": "v1.1 · Experimental methodology",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-methodology.md"
  },
  {
    "label": "v1.1 · Chinese MVP",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-decision-mvp.zh-TW.md"
  },
  {
    "label": "v1.1 · Actual results and selected IDs",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/results.md"
  },
  {
    "label": "v1.1 · GIS builder",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/buildWifiGeographic.py"
  },
  {
    "label": "v1.1 · Scenario engine",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/lib/wifiGeographicScenarios.ts"
  },
  {
    "label": "v1.1 · Geographic tests",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/tests/wifiGeographic.test.ts"
  },
  {
    "label": "v1.1 · Artifact manifest",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/public/data/wifi-policy/geographic-v1.1/manifest.json"
  },
  {
    "label": "v1.1 · 288 scenario pointer",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/public/data/wifi-policy/geographic-v1.1/scenarios-manifest.json"
  },
  {
    "label": "v1.1 · Local measurements",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/measurements.json"
  },
  {
    "label": "v1.1 · Browser evidence",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/browser-checks.json"
  },
  {
    "label": "v1.1 · Verification log",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/verification.log"
  },
  {
    "label": "v1.1 · Python GIS tests",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/tests/geographic_test.py"
  },
  {
    "label": "v1.1 · Geographic types and schema",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/types/wifiGeographicPolicy.ts"
  },
  {
    "label": "v1.1 · Geographic admission, integrity and exports",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/lib/wifiGeographicPolicy.ts"
  },
  {
    "label": "v1.1 · Published scenario generation",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/buildWifiGeographicScenarios.ts"
  },
  {
    "label": "v1.1 · Reproducibility verifier",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/verifyWifiGeographic.ts"
  },
  {
    "label": "Official source catalogue A",
    "url": "https://data.taipei/dataset/detail?id=6aa6532d-652f-4c1b-814a-4646b75407af"
  },
  {
    "label": "Official source catalogue B",
    "url": "https://data.taipei/dataset/detail?id=43772803-6504-469c-894d-35904342a53b"
  },
  {
    "label": "Official source catalogue C",
    "url": "https://data.taipei/dataset/detail?id=5ed70753-73a4-4fc1-b78c-df09f7499594"
  },
  {
    "label": "Official source catalogue D",
    "url": "https://data.taipei/dataset/detail?id=80be7612-593f-4795-9935-a10ce0f7b75b"
  },
  {
    "label": "Official source catalogue E",
    "url": "https://data.taipei/dataset/detail?id=1601ef3a-c253-4988-b047-943d9e786143"
  },
  {
    "label": "v1.1 · Retained acquisition manifest",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/data/raw/wifi-policy/acquisition-manifest.json"
  },
  {
    "label": "v1.0 · Recorded local measurements",
    "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/evidence/policy-measurements.json"
  }
],
  "previewAssets": [
    {
      "label": "Upstream local research · English desktop",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/en-desktop.png"
    },
    {
      "label": "Upstream local research · Chinese desktop",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/zh-desktop.png"
    },
    {
      "label": "Upstream local research · English mobile",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/en-mobile.png"
    },
    {
      "label": "Upstream local research · Chinese mobile",
      "url": "https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/zh-mobile.png"
    }
  ],
  "futureExtensions": [
    "Clarify facility CRS, surveyed position, stable identity and current public access before improving the non-self reference model.",
    "Mode C needs operations, signals, usage, comparable periods and population/demand denominators; proximity cannot substitute."
  ]
};
