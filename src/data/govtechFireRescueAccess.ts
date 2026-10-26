import type { GovTechCase } from "../types/govtechCase";

export const FIRE_RESCUE_SOURCE_SHA = "4e532d697eafb274530d0a1e524f027903a4c4d1";
export const FIRE_RESCUE_METHOD_ID = "fire-rescue-access-evidence-review-v1";
export const fireRescueSource = (path: string): string => `https://github.com/LEO0331/taipei-safety-map/blob/${FIRE_RESCUE_SOURCE_SHA}/${path}`;

export const fireRescueAccessCase: GovTechCase = {
  "id": "fire-rescue-access",
  "slug": "fire-rescue-access",
  "displayNumber": "012",
  "policyDomain": "Disaster Preparedness & Public Safety",
  "projectId": "taipei-safety-map",
  "sourceRepository": "https://github.com/LEO0331/taipei-safety-map",
  "sourceVersion": "4e532d697eafb274530d0a1e524f027903a4c4d1",
  "snapshotVersion": "fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524",
  "title": "Fire Rescue Access & Narrow Alley Evidence Readiness",
  "summary": "From mixed-edition fire-service listings to reproducible administrative review, with conservative road identity and explicit operational evidence gates.",
  "maturity": "decision-support-poc",
  "maturityLabel": "Completed documentary decision-support proof of concept; operational readiness unavailable",
  "reviewNote": "869 documentary rows; one accepted mixed-edition association. Width semantics, current clearance, geometry and rescue performance remain unverified.",
  "intendedUsers": "Public-safety data stewards, municipal analysts and public-data engineers.",
  "implementedCapabilities": [
    "Original-byte source custody and mixed-edition reconciliation",
    "Road, alley and place identity contracts",
    "Explainable tiers and capacity/strategy sensitivity",
    "Conservative association gates and provenance-bound JSON/CSV briefings"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "Policy Problem and Administrative Scope",
      "paragraphs": [
        "Which published fire-access, alley and difficult-rescue records need further documentation review when staff capacity is limited? This personal engineering proof of concept serves municipal data stewards, public-safety analysts and public-data engineers.",
        "The decision unit is a documentary follow-up question. Review priority does not rank building fire risk, certify vehicle clearance or recommend an emergency route."
      ]
    },
    {
      "id": "evolution",
      "title": "Extending the Existing Public Safety Explorer",
      "paragraphs": [
        "The existing Taipei Safety Map retains its explorer modules and separate bridge-documentation review. An additional lazy dashboard admits three fire-service source editions and applies explicit identity and evidence gates before selection.",
        "Portfolio presents the verified engineering decisions and fixed results through the shared case renderer. It neither duplicates the selection engine nor downloads the upstream research snapshot during normal reading."
      ]
    },
    {
      "id": "sources",
      "title": "Official Source Editions and Data Governance",
      "paragraphs": [
        "The Fire Department publications admit A:185 fire-access listings, B:273 narrow-alley listings and C:411 difficult-rescue place descriptions. The sum 869 counts documentary rows, not distinct physical roads, buildings or rescue locations. Historical explorer populations remain 185/274/446.",
        "A resource was updated 2024-08-01; B/C resources 2026-08-03. Acquisition occurred 2026-10-25, which is also the fixed analysis date. Catalogue updates, resource updates, acquisition and analysis dates are distinct; all effective reference times and survey dates remain unknown."
      ]
    },
    {
      "id": "identity",
      "title": "Road, Alley and Place Identity Contract",
      "paragraphs": [
        "Source row, named road, complete section/lane/alley, address range, village, station label, physical segment and operational rescue path are different units. Preserve sections, lanes, alleys, house subnumbers, ranges and side qualifiers rather than collapsing them to a road name or guessed point.",
        "Only limited text normalization is allowed. A/B acceptance requires the same valid district and exact complete label without residual extent qualifiers, plus an unambiguous one-to-one interpretation. Fuzzy names, shared station/village and proximity never establish a join.",
        "Row IDs bind source key, edition-hash prefix, original sequence, full-row-hash prefix and occurrence. Full source hashes and uniqueness checks remain necessary; a short prefix alone is not provenance."
      ]
    },
    {
      "id": "reconciliation",
      "title": "Mixed-edition Reconciliation",
      "paragraphs": [
        "Whole parsed-row comparison preserves 185 A rows unchanged; B has 164 unchanged, 109 incoming-only and 110 retained-only; C has 9 unchanged, 402 incoming-only and 437 retained-only. Source sequence renumbering contributes to these differences.",
        "Publication differences are documentary set differences. They do not establish new roads, closed places, improvements or a trend. B historical acquisition is unknown; historical working-copy and Git byte hashes are labelled separately from newly retained HTTP bytes."
      ]
    },
    {
      "id": "classification",
      "title": "Classification and Width Evidence",
      "paragraphs": [
        "B retains 196 red-zone and 77 yellow-zone entries as published categories. A listing conditions and C rating/recognition codes remain original documentary vocabulary; lexical validation is not an edition-bound severity dictionary or a hazard weight.",
        "The CSV width field does not establish its unit or measurement method. A separate official PDF uses metres, but its compatibility with these rows is unproven. Numerical width research is disabled; neither a raw width string nor a zone label certifies current vehicle clearance."
      ]
    },
    {
      "id": "matching",
      "title": "Actual Cross-source Association Results",
      "paragraphs": [
        "Accepted/ambiguous/rejected attempted pairs are A/B 1/49/231, A/C 0/355/238 and B/C 0/350/274. Unmatched or unsupported left rows are separately audited; pair counts are not an additive partition of 869 source records.",
        "Only A6/B116 is accepted: the original published label 武昌街1段16巷 in Zhongzheng District (中正區). This is a conservative mixed-edition documentary association, not certified connectivity, overlap, adjacency or an official road crosswalk."
      ]
    },
    {
      "id": "methodology",
      "title": "Mode A: Explainable Administrative Review",
      "paragraphs": [
        "All 869 admitted rows are eligible, with zero source-row exclusions. First matching documentary tier wins: A 477, B 392, C 0. Routine Tier C remains valid but none of these editions has all required dictionary and geographic evidence.",
        "Evidence Gaps First orders tier, primary issue precedence and source-bound ID lexically. Balanced Administrative Review keeps global tier precedence, then cycles sources and districts. Source, issue, district, original-category and text filters run before the same capacity selection."
      ],
      "content": "methodology"
    },
    {
      "id": "mode-b",
      "title": "Mode B: One Accepted Documentary Relationship",
      "paragraphs": [
        "Only the A6/B116 relationship is eligible. Both strategies and capacities 5/10/all select that same single Tier B association. Unused slots stay unused; ambiguous and rejected audit pairs never enlarge the eligible population.",
        "The follow-up question concerns cross-edition documentary comparability. A relationship tier is distinct from its endpoints' other questions; no artificial matching success or strategy difference is introduced."
      ]
    },
    {
      "id": "scenarios",
      "title": "Actual Scenarios, Sensitivity and Candidate Examples",
      "paragraphs": [
        "At capacity 10, balanced review selects A 4/B 3/C 3 across four districts; evidence-first selects A 10 across two. Strategy intersections are 2/2/869 at 5/10/all. These measure administrative representation, not rescue performance, funding fairness or population coverage.",
        "Source-A-only sensitivity retains the same default five selected IDs but changes eligibility 869→185; equal selections do not make different source populations equivalent. Width and geometry sensitivity remain unavailable. Original names are retained only as documentary examples."
      ],
      "content": "scenarios"
    },
    {
      "id": "geography",
      "title": "Geographic and Operational Evidence Gates",
      "paragraphs": [
        "No Policy 12 GIS geometry is admitted. District grouping uses published codes without polygon validation. The policy dashboard intentionally provides no invented map, route, geocoder result or travel-time visualization. Explorer geometry from other modules is not transferred into this policy.",
        "Mode C operational rescue readiness is unavailable: current vehicle clearance, obstructions, operational connectivity, response times, station deployment availability and building fire risk lack validated evidence. Missing values remain unknown rather than zero."
      ]
    },
    {
      "id": "governance",
      "title": "Immutable Snapshots, Exports and Testing",
      "paragraphs": [
        "The upstream pipeline validates retained bytes, schemas and identity contracts before building immutable content-addressed snapshots. Complete validation precedes an atomic pointer rename. Failure retains the previous accepted pointer; contact phone fields are omitted from public snapshots and briefings.",
        "Source SHA-256 identifies original CSV bytes; the snapshot ID hashes the compact deterministic payload excluding snapshotId; the exact-file SHA-256 binds the formatted JSON bytes. They identify different objects. Snapshot: fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524; exact file: 704b4c9f72a3746b4216aa96a283794c16fc40ae1013a99d9016d96948f6844d; 3,353,150 bytes.",
        "JSON/CSV exports rerun the source-bound scenario and verify the exact snapshot hash. CSV quotes cells, neutralizes formula prefixes and keeps provenance even for an empty selection. The source suite reports 134 tests in 10 files; this case independently replays 12 scenarios,12 sensitivities, byte integrity and export guards, without claiming a full upstream test-suite replay."
      ]
    },
    {
      "id": "architecture",
      "title": "Architecture and Engineering Tradeoffs",
      "paragraphs": [
        "Separate acquisition, admission, identity, selection and presentation so a failed source cannot silently become an operational recommendation. Small briefing pages explain results while the source dashboard loads its pointer and snapshot only on demand.",
        "The upstream snapshot is 3,353,150 bytes, with 163,305 gzip bytes. Its recorded local Node scenario medians of 1.64–1.96 ms are CPU measurements, not browser latency or response-time improvements. The source application retains an approximately 892 KB shell warning; lazy policy loading does not eliminate unrelated explorer costs."
      ],
      "content": "architecture"
    },
    {
      "id": "limitations",
      "title": "Limitations and Future Research",
      "paragraphs": [
        "This is documentary evidence readiness, not operational emergency readiness. Mixed source dates, incomplete dictionaries, unbound width semantics and one conservative association limit inference. No current road is labelled safe, unsafe, passable or impassable."
      ],
      "content": "future"
    },
    {
      "id": "evidence",
      "title": "Source Evidence and Authentic Interface Captures",
      "paragraphs": [
        "Commit-pinned source documents, retained CSVs, deterministic results and genuine desktop/mobile captures support review. The source interfaces are personal research tools and do not represent an official dispatch system."
      ],
      "content": "evidence"
    }
  ],
  "architecture": [
    "Retain official CSV and catalogue bytes",
    "Validate source schemas and mixed-edition custody",
    "Normalize complete identities and audit relationships",
    "Apply documentary tiers, filters and capacity strategies",
    "Validate immutable snapshot and atomically publish pointer",
    "Lazy dashboard and provenance-bound briefings"
  ],
  "architectureNote": "The source pipeline owns computation; Portfolio uses one shared renderer and per-case data imports. No operational GIS geometry or live government API is admitted.",
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "fire-rescue-access-evidence-review-v1",
    "explanation": "Documentary tier precedence first, then deterministic issue/ID ordering or source/district rotation; no numerical hazard weights.",
    "thresholds": {
      "caption": "Documentary rule precedence",
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
            "rule": "Primary identity/classification/district conflict or ambiguous association; first matching issue wins."
          }
        },
        {
          "id": "1",
          "cells": {
            "tier": "B",
            "rule": "Other documentary gaps: extent, multiple villages, dictionary, source comparability, absent geometry or unmatched association."
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "C",
            "rule": "No identified material issue; no current row qualifies."
          }
        }
      ]
    },
    "tiers": {
      "caption": "Actual documentary tier populations",
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
      "All 869 admitted source rows are eligible; zero source-row exclusions.",
      "Tier C zero is an observed result, not an enforced quota.",
      "Mode B has one accepted relationship; Mode C unavailable."
    ]
  },
  "scenarioTables": [
    {
      "caption": "Accepted source populations and historical explorer counts",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "accepted",
          "label": "Accepted rows"
        },
        {
          "key": "retained",
          "label": "Historical rows"
        },
        {
          "key": "updated",
          "label": "Resource update"
        },
        {
          "key": "encoding",
          "label": "Encoding"
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
      "caption": "Whole parsed-row edition comparison",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "same",
          "label": "Unchanged"
        },
        {
          "key": "incoming",
          "label": "Accepted-only"
        },
        {
          "key": "retained",
          "label": "Retained-only"
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
      "caption": "Attempted pair results, separate from unmatched rows",
      "columns": [
        {
          "key": "pair",
          "label": "Pair"
        },
        {
          "key": "accepted",
          "label": "Accepted"
        },
        {
          "key": "ambiguous",
          "label": "Ambiguous"
        },
        {
          "key": "rejected",
          "label": "Rejected"
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
      "caption": "Mode A actual capacity and strategy scenarios",
      "columns": [
        {
          "key": "capacity",
          "label": "Capacity"
        },
        {
          "key": "strategy",
          "label": "Strategy"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "selected",
          "label": "Selected"
        },
        {
          "key": "sources",
          "label": "Source composition"
        },
        {
          "key": "districts",
          "label": "District labels"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "capacity": "5",
            "strategy": "Evidence Gaps First",
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
            "strategy": "Balanced Administrative Review",
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
            "strategy": "Evidence Gaps First",
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
            "strategy": "Balanced Administrative Review",
            "eligible": "869",
            "selected": "10",
            "sources": "A:4 / B:3 / C:3",
            "districts": "4"
          }
        },
        {
          "id": "4",
          "cells": {
            "capacity": "all",
            "strategy": "Evidence Gaps First",
            "eligible": "869",
            "selected": "869",
            "sources": "A:185 / B:273 / C:411",
            "districts": "12"
          }
        },
        {
          "id": "5",
          "cells": {
            "capacity": "all",
            "strategy": "Balanced Administrative Review",
            "eligible": "869",
            "selected": "869",
            "sources": "A:185 / B:273 / C:411",
            "districts": "12"
          }
        }
      ]
    },
    {
      "caption": "Mode B actual capacity and strategy scenarios",
      "columns": [
        {
          "key": "capacity",
          "label": "Capacity"
        },
        {
          "key": "strategy",
          "label": "Strategy"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "selected",
          "label": "Selected"
        },
        {
          "key": "sources",
          "label": "Source composition"
        },
        {
          "key": "districts",
          "label": "District labels"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "capacity": "5",
            "strategy": "Evidence Gaps First",
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
            "strategy": "Balanced Administrative Review",
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
            "strategy": "Evidence Gaps First",
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
            "strategy": "Balanced Administrative Review",
            "eligible": "1",
            "selected": "1",
            "sources": "A/B:1",
            "districts": "1"
          }
        },
        {
          "id": "4",
          "cells": {
            "capacity": "all",
            "strategy": "Evidence Gaps First",
            "eligible": "1",
            "selected": "1",
            "sources": "A/B:1",
            "districts": "1"
          }
        },
        {
          "id": "5",
          "cells": {
            "capacity": "all",
            "strategy": "Balanced Administrative Review",
            "eligible": "1",
            "selected": "1",
            "sources": "A/B:1",
            "districts": "1"
          }
        }
      ]
    },
    {
      "caption": "Mode A strategy intersections",
      "columns": [
        {
          "key": "capacity",
          "label": "Capacity"
        },
        {
          "key": "shared",
          "label": "Shared"
        },
        {
          "key": "added",
          "label": "Added by balanced"
        },
        {
          "key": "removed",
          "label": "Removed by balanced"
        },
        {
          "key": "equivalent",
          "label": "Equivalent population"
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
            "equivalent": "Yes"
          }
        },
        {
          "id": "1",
          "cells": {
            "capacity": "10",
            "shared": "2",
            "added": "8",
            "removed": "8",
            "equivalent": "Yes"
          }
        },
        {
          "id": "2",
          "cells": {
            "capacity": "all",
            "shared": "869",
            "added": "0",
            "removed": "0",
            "equivalent": "Yes"
          }
        }
      ]
    },
    {
      "caption": "Actual sensitivity relative to default evidence-first five",
      "columns": [
        {
          "key": "scope",
          "label": "Changed scope"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "selected",
          "label": "Selected"
        },
        {
          "key": "shared",
          "label": "Shared"
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
          "key": "equivalent",
          "label": "Equivalent population"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "scope": "All sources",
            "eligible": "869",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "Yes"
          }
        },
        {
          "id": "1",
          "cells": {
            "scope": "Source A",
            "eligible": "185",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "No"
          }
        },
        {
          "id": "2",
          "cells": {
            "scope": "Source B",
            "eligible": "273",
            "selected": "5",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "equivalent": "No"
          }
        },
        {
          "id": "3",
          "cells": {
            "scope": "Source C",
            "eligible": "411",
            "selected": "5",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "equivalent": "No"
          }
        },
        {
          "id": "4",
          "cells": {
            "scope": "All issue tiers",
            "eligible": "869",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "Yes"
          }
        },
        {
          "id": "5",
          "cells": {
            "scope": "Primary issues",
            "eligible": "477",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "No"
          }
        },
        {
          "id": "6",
          "cells": {
            "scope": "Documentation issues",
            "eligible": "392",
            "selected": "5",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "equivalent": "No"
          }
        },
        {
          "id": "7",
          "cells": {
            "scope": "Capacity 5",
            "eligible": "869",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "Yes"
          }
        },
        {
          "id": "8",
          "cells": {
            "scope": "Capacity 10",
            "eligible": "869",
            "selected": "10",
            "shared": "5",
            "added": "5",
            "removed": "0",
            "equivalent": "Yes"
          }
        },
        {
          "id": "9",
          "cells": {
            "scope": "All capacity",
            "eligible": "869",
            "selected": "869",
            "shared": "5",
            "added": "864",
            "removed": "0",
            "equivalent": "Yes"
          }
        },
        {
          "id": "10",
          "cells": {
            "scope": "Evidence Gaps First",
            "eligible": "869",
            "selected": "5",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "equivalent": "Yes"
          }
        },
        {
          "id": "11",
          "cells": {
            "scope": "Balanced Administrative Review",
            "eligible": "869",
            "selected": "5",
            "shared": "2",
            "added": "3",
            "removed": "3",
            "equivalent": "Yes"
          }
        }
      ]
    },
    {
      "caption": "Original documentary examples, not field conditions",
      "columns": [
        {
          "key": "source",
          "label": "Source sequence"
        },
        {
          "key": "name",
          "label": "Original published name"
        },
        {
          "key": "meaning",
          "label": "Review boundary"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "source": "A1",
            "name": "永春街",
            "meaning": "Original name; documentary only"
          }
        },
        {
          "id": "1",
          "cells": {
            "source": "B1",
            "name": "齊東街82巷",
            "meaning": "Original name; documentary only"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "C1",
            "name": "喜來登大飯店",
            "meaning": "Original name; documentary only"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "A7",
            "name": "臨沂街（52號至信義路口）",
            "meaning": "Original name; documentary only"
          }
        },
        {
          "id": "4",
          "cells": {
            "source": "C19",
            "name": "城中市場",
            "meaning": "Original name; documentary only"
          }
        }
      ]
    },
    {
      "caption": "Exact ordered selected IDs at capacity 10",
      "columns": [
        {
          "key": "strategy",
          "label": "Strategy"
        },
        {
          "key": "rank",
          "label": "Position"
        },
        {
          "key": "id",
          "label": "Source-bound ID"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "1",
            "id": "A-873c138fbc367b31-s1-14ef98c124eb-o1"
          }
        },
        {
          "id": "1",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "2",
            "id": "A-873c138fbc367b31-s10-253ac0e3b7d5-o1"
          }
        },
        {
          "id": "2",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "3",
            "id": "A-873c138fbc367b31-s100-50472be412f2-o1"
          }
        },
        {
          "id": "3",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "4",
            "id": "A-873c138fbc367b31-s101-9e3818800fc1-o1"
          }
        },
        {
          "id": "4",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "5",
            "id": "A-873c138fbc367b31-s102-2bf1009b036d-o1"
          }
        },
        {
          "id": "5",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "6",
            "id": "A-873c138fbc367b31-s103-3ccd81eb28f3-o1"
          }
        },
        {
          "id": "6",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "7",
            "id": "A-873c138fbc367b31-s104-4571612beec2-o1"
          }
        },
        {
          "id": "7",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "8",
            "id": "A-873c138fbc367b31-s105-3ab375746429-o1"
          }
        },
        {
          "id": "8",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "9",
            "id": "A-873c138fbc367b31-s106-ff74c3215e57-o1"
          }
        },
        {
          "id": "9",
          "cells": {
            "strategy": "Evidence Gaps First",
            "rank": "10",
            "id": "A-873c138fbc367b31-s109-bd5c8d6a37fc-o1"
          }
        },
        {
          "id": "10",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "1",
            "id": "A-873c138fbc367b31-s100-50472be412f2-o1"
          }
        },
        {
          "id": "11",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "2",
            "id": "B-d1882db87b8d0bc3-s134-ff5183b93eea-o1"
          }
        },
        {
          "id": "12",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "3",
            "id": "C-a8ff6929d2f53438-s294-ee8091906b65-o1"
          }
        },
        {
          "id": "13",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "4",
            "id": "A-873c138fbc367b31-s1-14ef98c124eb-o1"
          }
        },
        {
          "id": "14",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "5",
            "id": "B-d1882db87b8d0bc3-s1-753fc6fbad13-o1"
          }
        },
        {
          "id": "15",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "6",
            "id": "C-a8ff6929d2f53438-s1-d9b9ed039087-o1"
          }
        },
        {
          "id": "16",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "7",
            "id": "A-873c138fbc367b31-s48-e63aca60e176-o1"
          }
        },
        {
          "id": "17",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "8",
            "id": "B-d1882db87b8d0bc3-s209-b362c57f5742-o1"
          }
        },
        {
          "id": "18",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "9",
            "id": "C-a8ff6929d2f53438-s107-70159f003281-o1"
          }
        },
        {
          "id": "19",
          "cells": {
            "strategy": "Balanced Administrative Review",
            "rank": "10",
            "id": "A-873c138fbc367b31-s68-a79060a55b0d-o1"
          }
        }
      ]
    },
    {
      "caption": "Original source integrity and acquisition",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "hash",
          "label": "Original CSV SHA-256"
        },
        {
          "key": "bytes",
          "label": "Bytes"
        },
        {
          "key": "acquired",
          "label": "Acquired at"
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
      "caption": "Snapshot identity and accepted relationship IDs",
      "columns": [
        {
          "key": "object",
          "label": "Object"
        },
        {
          "key": "value",
          "label": "Exact value"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": {
            "object": "Snapshot ID",
            "value": "fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524"
          }
        },
        {
          "id": "1",
          "cells": {
            "object": "Exact-file SHA-256",
            "value": "704b4c9f72a3746b4216aa96a283794c16fc40ae1013a99d9016d96948f6844d"
          }
        },
        {
          "id": "2",
          "cells": {
            "object": "Exact bytes",
            "value": "3353150"
          }
        },
        {
          "id": "3",
          "cells": {
            "object": "Method",
            "value": "fire-rescue-access-evidence-review-v1"
          }
        },
        {
          "id": "4",
          "cells": {
            "object": "Accepted relationship",
            "value": "AB:A-873c138fbc367b31-s6-689c86c8f283-o1:B-d1882db87b8d0bc3-s116-aa2526288a45-o1"
          }
        },
        {
          "id": "5",
          "cells": {
            "object": "Left source ID",
            "value": "A-873c138fbc367b31-s6-689c86c8f283-o1"
          }
        },
        {
          "id": "6",
          "cells": {
            "object": "Right source ID",
            "value": "B-d1882db87b8d0bc3-s116-aa2526288a45-o1"
          }
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": "Official source custody audit",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-source-audit.md"
    },
    {
      "label": "Identity and conservative matching contract",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-identity-contract.md"
    },
    {
      "label": "Classification and width evidence gates",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-classification-and-width.md"
    },
    {
      "label": "Geographic and operational evidence gates",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-geographic-evidence.md"
    },
    {
      "label": "Deterministic review methodology",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-methodology.md"
    },
    {
      "label": "Actual JSON results and selected IDs",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-results.json"
    },
    {
      "label": "Recorded upstream Node performance, not browser timings",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-performance.json"
    },
    {
      "label": "Original Traditional Chinese engineering study",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-decision-mvp.zh-TW.md"
    },
    {
      "label": "Accepted source manifest",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/sources.json"
    },
    {
      "label": "Exact-file snapshot pointer",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/public/data/fire-rescue-access-policy/current.json"
    },
    {
      "label": "Immutable source snapshot, approximately3.35MB",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/public/data/fire-rescue-access-policy/fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524.json"
    },
    {
      "label": "Identity normalization and association implementation",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/src/lib/fireRescueAccessIdentity.ts"
    },
    {
      "label": "Actual selection engine and JSON/CSV exports",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/src/lib/fireRescueAccessScenarios.ts"
    },
    {
      "label": "Lazy bilingual source dashboard",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/src/FireRescueAccessPolicyDashboard.tsx"
    },
    {
      "label": "Retained original CSV A",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/pending/2026-10-25-01-20-08-515-/A.csv"
    },
    {
      "label": "Retained original CSV B",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/pending/2026-10-25-01-20-08-515-/B.csv"
    },
    {
      "label": "Retained original CSV C",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/pending/2026-10-25-01-20-08-515-/C.csv"
    },
    {
      "label": "Official source A catalogue",
      "url": "https://data.taipei/dataset/detail?id=7a800e92-eb22-461f-b29d-8def2127a1bc"
    },
    {
      "label": "Official source B catalogue",
      "url": "https://data.taipei/dataset/detail?id=95c2eed3-8253-4dce-bf8e-1d6a01517514"
    },
    {
      "label": "Official source C catalogue",
      "url": "https://data.taipei/dataset/detail?id=0f322478-e09b-46af-8019-caeaa79678d7"
    },
    {
      "label": "Authentic upstream English desktop research interface",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-desktop.png"
    },
    {
      "label": "Authentic upstream Chinese mobile research interface",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-mobile.png"
    }
  ],
  "previewAssets": [
    {
      "label": "Authentic upstream English desktop research interface",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-desktop.png"
    },
    {
      "label": "Authentic upstream Chinese mobile research interface",
      "url": "https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/docs/fire-rescue-access-policy-mobile.png"
    }
  ],
  "futureExtensions": [
    "Obtain edition-bound classification dictionaries and documented width measurement semantics before numerical research.",
    "Require authoritative segment identities, compatible geometry, current surveys and obstructions before route research.",
    "Operational readiness additionally needs vehicle/staff availability, dispatch history and official validation."
  ]
};
