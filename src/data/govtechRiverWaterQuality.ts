import type { GovTechCase } from "../types/govtechCase";

export const RIVER_WATER_SOURCE_SHA = "beedd7eef3592c12bb66c21937add068f82ce5fa";
export const RIVER_WATER_METHOD_ID = "river-water-longitudinal-evidence-review-v1";
export const RIVER_WATER_SNAPSHOT_SHA256 = "212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81";
export const RIVER_WATER_SNAPSHOT_ID = "sha256-212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81";
export const riverWaterSource = (path: string): string => `https://github.com/LEO0331/taipei-feitsui-water-map/blob/${RIVER_WATER_SOURCE_SHA}/${path}`;

export const riverWaterQualityCase: GovTechCase = {
  "id": "river-water-quality",
  "slug": "river-water-quality",
  "displayNumber": "013",
  "projectId": "taipei-feitsui-water-map",
  "sourceRepository": "https://github.com/LEO0331/taipei-feitsui-water-map",
  "sourceVersion": "beedd7eef3592c12bb66c21937add068f82ce5fa",
  "snapshotVersion": "sha256-212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81",
  "maturity": "decision-support-poc",
  "policyDomain": "Urban Services & Environment",
  "title": "River Water Quality Monitoring & Longitudinal Evidence Review",
  "summary": "From published river records to reproducible monitoring review: 720 observation-bearing rows, 736 documentary candidates and a limited descriptive view; strict longitudinal comparisons, RPI and causal or regulatory conclusions remain unavailable.",
  "maturityLabel": "Completed monitoring-evidence decision-support proof of concept; strict trend, RPI and causal conclusions remain gated",
  "reviewNote": "At the fixed 2026-10-27 cutoff, 768 published rows contain 720 partial observation-bearing rows, 16 current-month pending rows and 32 future placeholders. Limited same-label differences are not validated trends. Historical physical station continuity, admitted RPI and causal/regulatory conclusions remain unestablished.",
  "intendedUsers": "Environmental data stewards, municipal monitoring analysts and public-data engineers.",
  "implementedCapabilities": [
    "Original-byte annual edition reconciliation and deterministic time-series ETL",
    "Station-period identity, observation coverage and detection-limit preservation",
    "Separate documentary, limited-comparison, RPI and causal evidence gates",
    "Deterministic capacity/strategy/scope review and provenance-bound JSON/CSV briefings"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "Policy Problem and Monitoring Evidence",
      "paragraphs": [
        "Which published river-monitoring records need documentation review, and which measurements can be compared without disguising absent or censored evidence? This decision question concerns the reliability and meaning of retained public records, not the identification of a polluter.",
        "The completed proof of concept distinguishes 736 administrative review candidates from zero strict longitudinal comparisons and zero admitted research RPI observations. Mode C causal and regulatory conclusions remain unavailable. These visible limits govern every result."
      ]
    },
    {
      "id": "evolution",
      "title": "Extending the Existing River Water Explorer",
      "paragraphs": [
        "The original explorer displays four annual files with 768 calendar rows, nine rivers and sixteen station labels. Those are published-record counts. Its retained editions contain 656 observation-bearing rows, including only 80 in the older 2026 file.",
        "A separately accepted 2026 edition contains 144 observed rows, raising the accepted total to 720 while the published total remains 768. The 64 added station-month observations are June–September records, not additional monitoring locations or proof of environmental improvement. Existing water, ecology and heavy-rain modules remain separate."
      ]
    },
    {
      "id": "sources",
      "title": "Official Source Editions and Provenance",
      "paragraphs": [
        "The Taipei Department of Environmental Protection catalogue admits ROC years 112–115, corresponding to 2023–2026. Four original Big5/CP950 CSVs total 109,553 bytes; each retains its resource identity, original-byte SHA-256, exact header sequence and publication/retrieval times. Four contextual HTML resources independently support catalogue, station and RPI interpretation.",
        "The accepted 2026 resource was updated on 2026-10-16 at 09:00:48 catalogue local time; acquisition was 2026-10-27T00:13:36.437Z. Monthly measurement periods are neither file publication dates nor acquisition timestamps. Named-column conversion handles reordered metal columns instead of assuming a fixed position."
      ]
    },
    {
      "id": "identity",
      "title": "Statistical Units and Station Identity",
      "paragraphs": [
        "A river, a source station label, a physical sampling location, a station-month opportunity, a CSV row, one indicator cell and one matched pair are different units. River name alone never joins stations, and a sequence number alone never identifies a source record.",
        "Fifteen source labels match the current official roster. The CSV label 青礜溪 and official 菁礐溪 remain unmatched rather than becoming an inferred alias. All sixteen historical physical-continuity statuses remain unverified. No historical coordinates or monitoring pins are admitted.",
        "Station IDs hash exact river and raw station labels with a separator. Row lineage additionally retains the accepted source edition, full source hash, original CSV row number and year/month. Stable source-label identity does not certify an unchanged physical site, equipment or laboratory method."
      ]
    },
    {
      "id": "completeness",
      "title": "Published Rows and Actual Measurements",
      "paragraphs": [
        "Of 768 published station-month rows, 720 contain at least one valid exact or censored measurement. All 720 are partial across the complete 27-indicator inventory because optional fields contain not-measured markers. That classification does not imply every scheduled analyte failed or every sample is invalid.",
        "Forty-eight entirely empty rows have no observation-bearing indicators: sixteen current-month pending rows and thirty-two future placeholders. None is replaced by zero. No duplicate station-period group or unparseable row occurs in these accepted editions."
      ]
    },
    {
      "id": "placeholders",
      "title": "Current-period Pending Rows and Future Placeholders",
      "paragraphs": [
        "At the 2026-10-27 cutoff, the sixteen empty October rows describe opportunities in a month still in progress. They are not overdue historical observations. The thirty-two empty November–December rows are future placeholders and are excluded from review eligibility and observed-period denominators.",
        "Classification uses admitted source values, year/month and the fixed cutoff. A later accepted edition can replace placeholders with results; merely changing the viewing date cannot rewrite this immutable analysis. Historical missing observations and not-yet-published current results remain separate states."
      ]
    },
    {
      "id": "qualifiers",
      "title": "Indicators, Detection Limits and Missing Values",
      "paragraphs": [
        "Across 20,736 published cells, the accepted editions retain 10,684 exact measured values, 1,571 censored values, 7,185 not-measured markers and 1,296 blank cells, with zero unparsed or invalid exact values. Every cell preserves raw text, unit, qualifier and any detection limit.",
        "ND<0.02 is a bound below 0.02 mg/L, not an exact ammonia value. <10 is a censored coliform bound; --- means not measured; blank means missing. Scientific notation remains numeric. No zero, half-limit or limit-value substitution is applied, and an ordinary mean never mixes exact and censored observations.",
        "Ammonia detection limits vary: 98 censored cells at 0.02, 12 at 0.07 and 150 at 0.08 mg/L. Coliform retains two bounds at <1 and forty-three at <10 CFU/100mL. A changed detection limit changes interpretation; it does not establish a measured concentration change."
      ]
    },
    {
      "id": "coverage",
      "title": "Monitoring Coverage and Denominator Choices",
      "paragraphs": [
        "Sixteen label identities across forty-eight published months produce 768 calendar opportunities. The assumed monthly schedule through October 2026 contains 736 opportunities and 720 observation-bearing periods. The sixteen remaining opportunities are current-month pending rows; prior-month missing opportunities are zero within this retained schedule.",
        "Each label has 48 published rows, 45 observation-bearing periods, 46 through-cutoff opportunities, one current-month empty row and two future placeholders. The observed span is January 2023–September 2026. Coverage of 720/736 is 97.83%, while fully elapsed opportunities are 720/720. Neither denominator certifies laboratory completeness or uninterrupted operation; commissioning and discontinuation dates are unknown."
      ]
    },
    {
      "id": "longitudinal",
      "title": "Longitudinal Comparability Before Trend Claims",
      "paragraphs": [
        "The comparison grain is station identity × indicator × adjacent-year window: 2023–2024, 2024–2025 and 2025–2026. A pair joins the same calendar month, same indicator and compatible unit, requiring one unique observed row and a valid exact value on each side.",
        "The 1,296 investigated windows yield zero strict comparisons because historical physical continuity and sampling-method compatibility are unverified. A separately labeled limited same-label descriptive view admits 823 windows containing 7,239 exact indicator-month pairs; 473 windows remain excluded. Pairs can reuse station-month rows across indicators and are not 7,239 independent samples.",
        "Limited eligibility needs a current official label match and at least one exact pair, not a complete year. The 2025–2026 window cannot exceed nine observed 2026 months. Matched and excluded counts remain visible. Pairwise changes establish neither statistical significance, an intervention effect, seasonal adjustment nor a causal explanation."
      ]
    },
    {
      "id": "rpi",
      "title": "RPI Method Evidence and the Unavailable Result",
      "paragraphs": [
        "The official River Pollution Index uses DO, BOD5, suspended solids and ammonia nitrogen in mg/L. Each maps to literal category points 1/3/6/10, then the four points are averaged. Raw concentrations are not averaged together. The source helper reproduces only unambiguous published table boundaries.",
        "There are 460 potential rows with four valid exact inputs, but zero admitted research-reproduced RPI observations; all 768 published rows are excluded from RPI output. The other observed rows include 260 censored ammonia values, while 48 empty rows lack measured inputs.",
        "Literal precision gaps, the applicable significant-digit/rounding convention and a verified common sampling event remain unresolved; no official published RPI value was matched to a retained row. Values in DO (4.5,4.6), BOD5 (4.9,5.0), SS (49.9,50.0) or NH3-N (0.99,1.00) are not silently assigned categories. Potential input completeness cannot override method and event-lineage gates."
      ]
    },
    {
      "id": "mode-a",
      "title": "Mode A: Deterministic Administrative Review",
      "paragraphs": [
        "Mode A groups admitted rows by source station identity × month, preserving every linked row ID if duplicates appear. Of 768 candidates, 736 are eligible and 32 future placeholders are excluded. Eligible tiers are A46/B690/C0; all forty-six Tier A months belong to the unmatched label.",
        "Evidence Gaps First and Balanced Monitoring Review both preserve A→B→C and leading issue precedence. Gaps First then uses stable IDs; balancing chooses the least represented river and station within the current tier and issue group. Small capacities select the same higher-tier identity question, so no geographic diversity is invented.",
        "At capacities 5 and 10, both strategies select only Tier A months from one river and one label. All-eligible capacity selects 736 candidates across nine rivers and sixteen labels with A46/B690/C0. These are administrative investigation priorities, never pollution-severity ranks."
      ],
      "content": "methodology"
    },
    {
      "id": "mode-b",
      "title": "Mode B: Limited Descriptive Evidence",
      "paragraphs": [
        "Strict Mode B selects zero candidates and leaves five or ten requested slots unused. Explicitly switching to limited evidence changes the evidence contract and eligibility to 823 indicator windows; it does not repair historical station or method continuity.",
        "For the 雙溪取水口 label, water-temperature 2023–2024 has twelve exact same-month pairs, while 2025–2026 has nine and three excluded month opportunities. Ammonia 2023–2024 has zero exact pairs and is excluded. The January water-temperature pair 18.8→15.1 °C is a descriptive difference of −3.7 °C, not an annual trend or environmental improvement.",
        "The recorded balanced capacity-5 limited scenario selects five air-temperature windows from 2023–2024. Actual IDs and source-linked examples are retained in technical tables. Paired cells and nonpaired published-cell qualifiers are reported separately rather than fabricating missing measurements."
      ]
    },
    {
      "id": "mode-c",
      "title": "Mode C: Causal and Regulatory Evidence Remains Unavailable",
      "paragraphs": [
        "Monthly monitoring records do not identify a pollution source, a responsible company, a regulatory violation or an intervention effect. Mode C is unavailable rather than an empty ranking presented as a successful causal model.",
        "Historical station and sampling records, hydrologic and seasonal context, applicable permits and standards, and conclusion-specific official determinations are required. This personal proof of concept does not certify drinking-water suitability, swimming safety, current public-health risk or official environmental compliance."
      ]
    },
    {
      "id": "sensitivity",
      "title": "Actual Capacity, Strategy and Scope Findings",
      "paragraphs": [
        "Default capacity-5 strategies share all five selected IDs, with zero added or removed candidates. Capacity 10 extends the same ordered shortlist by June–October 2023, adding five and removing none. All-capacity strategies select the same 736-ID set, although order may differ.",
        "Restricting Mode A to 2026 changes eligibility to 160 candidates, A10/B150/C0, a decrease of 576. Its capacity-5 selection contains January–May 2026 rather than January–May 2023: zero shared, five added and five removed IDs. This is a population change, not a same-population strategy effect or improved river conditions.",
        "Year, source, river, station and indicator filters disclose scope. Exact-value comparability, limited-evidence admission and unavailable RPI rules remain explicit. No strategy difference or environmental outcome is manufactured to make a comparison appear more interesting."
      ],
      "content": "scenarios"
    },
    {
      "id": "architecture",
      "title": "Engineering Architecture and Reproducibility",
      "paragraphs": [
        "Offline acquisition stages original annual and contextual bytes; source audit checks hashes, schemas and station labels before deterministic conversion. Pure parsing, coverage, comparison and scenario functions build a fixed-date snapshot. Validation completes before an immutable file is created and the current pointer is atomically replaced.",
        "The source dashboard is a lazy bilingual React module reading two local static URLs: pointer and immutable snapshot. Safe JSON/CSV briefings retain scope, lineage, snapshot identity, selected IDs, qualifiers and exclusions, with deterministic ordering, bounded sizes and formula-prefix protection. Failure cannot promote an unvalidated source edition.",
        "The snapshot identifier and exact-file digest identify the retained immutable JSON; annual hashes identify separate original CSV bodies. Their matching hex in this publication is not a rule for other projects. Portfolio presents fixed verified findings through its shared renderer and fetches neither government records nor the full research snapshot at runtime."
      ],
      "content": "architecture"
    },
    {
      "id": "evidence",
      "title": "Testing, Performance and Next Evidence",
      "paragraphs": [
        "The source delivery records a full 92-test suite with TypeScript, ordinary/Pages builds, repeated exact-byte rebuilds, safe downloads and both-language browser checks at five widths. Those are upstream recorded results, not a claim that Portfolio reran the entire source application. Portfolio independently checks admitted artifacts and a bounded set of original-function invariants.",
        "Recorded source measurements are a 7,016,489-byte snapshot, 310,227 bytes gzip, a 19,683-byte gzip lazy policy script and a balanced capacity-10 median of 0.1885 ms over fifty local Node repetitions. The recorded 125.76 ms content/hash check is also local. These are not internet/mobile latency, availability, Lighthouse or portable hardware benchmarks.",
        "Authentic source screenshots show monitoring-evidence provenance/export safeguards and the mobile overview, not an official compliance system. No station pins are shown without admitted coordinate lineage. The separate heavy-rain case keeps its original data, snapshot and conclusions; river monitoring is not combined with flood preparedness into a score.",
        "Future evidence must resolve the unmatched label, historical physical station and laboratory continuity, commissioning history, RPI reporting precision and common-sampling identity. Causal or regulatory conclusions require independent, conclusion-specific evidence. No additional policy initiative or operational outcome is implied."
      ],
      "content": "evidence",
      "links": [
        {
          "label": "Authentic desktop provenance and export safeguards",
          "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-en-desktop.png"
        },
        {
          "label": "Authentic monitoring-evidence dashboard · Traditional Chinese mobile",
          "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-zh-mobile.png"
        }
      ]
    }
  ],
  "architecture": [
    "Official catalogue and accepted annual/context editions",
    "Original-byte custody, schema and station-label validation",
    "Named-column Big5/CP950 conversion and qualified parsing",
    "Station-month coverage and exact matched-period eligibility",
    "Separate monitoring review, limited comparison and unavailable RPI/causal gates",
    "Deterministic capacity/scope scenarios and safe JSON/CSV exports",
    "Validated immutable snapshot and atomic pointer",
    "Lazy bilingual source dashboard; static Portfolio case"
  ],
  "architectureNote": "Accepted source bytes, a fixed cutoff and deterministic functions make results replayable. Original CSV hashes, source-label identities, snapshot identity and exact-file hashes remain distinct. No live Portfolio data pipeline or inferred station geography is added.",
  "scenarioTables": [
    {
      "caption": "Accepted official annual editions · publication is not observation",
      "columns": [
        {
          "key": "year",
          "label": "ROC / Gregorian year"
        },
        {
          "key": "resource",
          "label": "Official resource ID"
        },
        {
          "key": "updated",
          "label": "Official update (catalogue local time)"
        },
        {
          "key": "bytes",
          "label": "Original bytes"
        },
        {
          "key": "published",
          "label": "Published rows"
        },
        {
          "key": "observed",
          "label": "Observation-bearing rows"
        },
        {
          "key": "future",
          "label": "Future empty rows"
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
      "caption": "Published records, observation states and coverage denominators",
      "columns": [
        {
          "key": "state",
          "label": "Statistical unit / state"
        },
        {
          "key": "count",
          "label": "Count"
        },
        {
          "key": "meaning",
          "label": "Interpretation"
        }
      ],
      "rows": [
        {
          "id": "published",
          "cells": {
            "state": "Published station-month rows",
            "count": "768",
            "meaning": "192 per accepted annual edition"
          }
        },
        {
          "id": "observed",
          "cells": {
            "state": "Observation-bearing rows",
            "count": "720",
            "meaning": "At least one valid exact or censored indicator"
          }
        },
        {
          "id": "partial",
          "cells": {
            "state": "Partial across 27 fields",
            "count": "720",
            "meaning": "Optional not-measured fields prevent full-field completeness"
          }
        },
        {
          "id": "fully-observed",
          "cells": {
            "state": "Fully observed across 27 fields",
            "count": "0",
            "meaning": "Not a claim that all scheduled laboratory work failed"
          }
        },
        {
          "id": "pending",
          "cells": {
            "state": "Current-month empty rows",
            "count": "16",
            "meaning": "October 2026 still in progress; not overdue"
          }
        },
        {
          "id": "future",
          "cells": {
            "state": "Future placeholders",
            "count": "32",
            "meaning": "November–December; excluded from observed/review counts"
          }
        },
        {
          "id": "through-cutoff",
          "cells": {
            "state": "Through-cutoff opportunities",
            "count": "736",
            "meaning": "Includes current month under the disclosed monthly schedule"
          }
        },
        {
          "id": "prior-missing",
          "cells": {
            "state": "Prior-month missing opportunities",
            "count": "0",
            "meaning": "720 observed among 720 elapsed opportunities; station-history assumptions remain"
          }
        }
      ]
    },
    {
      "caption": "Indicator qualifiers preserve measurement meaning",
      "columns": [
        {
          "key": "kind",
          "label": "Qualifier"
        },
        {
          "key": "count",
          "label": "Published cells"
        },
        {
          "key": "example",
          "label": "Original representation"
        },
        {
          "key": "meaning",
          "label": "Treatment"
        }
      ],
      "rows": [
        {
          "id": "measured",
          "cells": {
            "kind": "Exact measured",
            "count": "10684",
            "example": "1.70E+05 → 170000",
            "meaning": "Scientific notation stays numeric"
          }
        },
        {
          "id": "censored",
          "cells": {
            "kind": "Censored bound",
            "count": "1571",
            "example": "ND<0.02; <10",
            "meaning": "Preserve limit; never exact zero or imputed value"
          }
        },
        {
          "id": "not-measured",
          "cells": {
            "kind": "Not measured",
            "count": "7185",
            "example": "---",
            "meaning": "Distinct from missing and failed sampling"
          }
        },
        {
          "id": "missing",
          "cells": {
            "kind": "Missing",
            "count": "1296",
            "example": "Blank",
            "meaning": "48 wholly empty rows × 27 fields"
          }
        },
        {
          "id": "unparsed",
          "cells": {
            "kind": "Unparsed / invalid exact",
            "count": "0 / 0",
            "example": "Unrecognized / out-of-range input",
            "meaning": "Unavailable for exact comparison; none in accepted edition"
          }
        }
      ]
    },
    {
      "caption": "Indicator-specific completeness · 768 published cells per field",
      "columns": [
        {
          "key": "indicator",
          "label": "Indicator / unit"
        },
        {
          "key": "exact",
          "label": "Exact measured"
        },
        {
          "key": "censored",
          "label": "Censored"
        },
        {
          "key": "notMeasured",
          "label": "Not measured"
        },
        {
          "key": "missing",
          "label": "Missing"
        }
      ],
      "rows": [
        {
          "id": "do",
          "cells": {
            "indicator": "Dissolved oxygen / mg/L",
            "exact": "720",
            "censored": "0",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "bod",
          "cells": {
            "indicator": "BOD5 / mg/L",
            "exact": "720",
            "censored": "0",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "ss",
          "cells": {
            "indicator": "Suspended solids / mg/L",
            "exact": "720",
            "censored": "0",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "nh3",
          "cells": {
            "indicator": "Ammonia nitrogen / mg/L",
            "exact": "460",
            "censored": "260",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "cod",
          "cells": {
            "indicator": "Chemical oxygen demand / mg/L",
            "exact": "714",
            "censored": "6",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "coliform",
          "cells": {
            "indicator": "Coliform / CFU/100mL",
            "exact": "675",
            "censored": "45",
            "notMeasured": "0",
            "missing": "48"
          }
        },
        {
          "id": "iron",
          "cells": {
            "indicator": "Iron / μg/L",
            "exact": "0",
            "censored": "0",
            "notMeasured": "720",
            "missing": "48"
          }
        }
      ]
    },
    {
      "caption": "Official literal RPI category points · mg/L inputs; not admitted RPI results",
      "columns": [
        {
          "key": "indicator",
          "label": "Constituent"
        },
        {
          "key": "one",
          "label": "1 point"
        },
        {
          "key": "three",
          "label": "3 points"
        },
        {
          "key": "six",
          "label": "6 points"
        },
        {
          "key": "ten",
          "label": "10 points"
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
      "caption": "Separate analytical modes and admission gates",
      "columns": [
        {
          "key": "mode",
          "label": "Mode / output"
        },
        {
          "key": "grain",
          "label": "Candidate or output grain"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "excluded",
          "label": "Excluded / unavailable"
        },
        {
          "key": "meaning",
          "label": "Interpretation"
        }
      ],
      "rows": [
        {
          "id": "a",
          "cells": {
            "mode": "A · Monitoring evidence review",
            "grain": "Source station identity × month",
            "eligible": "736",
            "excluded": "32 future candidates",
            "meaning": "A46/B690/C0; review priority, not pollution severity"
          }
        },
        {
          "id": "b-strict",
          "cells": {
            "mode": "B · Strict longitudinal",
            "grain": "Station × indicator × adjacent-year window",
            "eligible": "0",
            "excluded": "1296",
            "meaning": "Historical physical identity and method continuity unverified"
          }
        },
        {
          "id": "b-limited",
          "cells": {
            "mode": "B · Limited descriptive",
            "grain": "Station × indicator × adjacent-year window; exact same-month pairs",
            "eligible": "823 windows",
            "excluded": "473 windows",
            "meaning": "7239 indicator-month pairs; not independent samples or validated trends"
          }
        },
        {
          "id": "rpi",
          "cells": {
            "mode": "Research-reproduced RPI",
            "grain": "Four constituents / station-month",
            "eligible": "0",
            "excluded": "768 rows",
            "meaning": "460 potential exact-input sets do not establish method eligibility"
          }
        },
        {
          "id": "c",
          "cells": {
            "mode": "C · Causal / regulatory",
            "grain": "Conclusion-specific independent evidence",
            "eligible": "0",
            "excluded": "Unavailable",
            "meaning": "No causal, compliance or public-health determination"
          }
        }
      ]
    },
    {
      "caption": "Mode A actual strategies and review capacities",
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
          "label": "Eligible / excluded"
        },
        {
          "key": "selected",
          "label": "Selected"
        },
        {
          "key": "tiers",
          "label": "Selected A/B/C"
        },
        {
          "key": "rivers",
          "label": "Rivers"
        },
        {
          "key": "stations",
          "label": "Station labels"
        }
      ],
      "rows": [
        {
          "id": "gaps-5",
          "cells": {
            "strategy": "Evidence Gaps First",
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
            "strategy": "Balanced Monitoring Review",
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
            "strategy": "Evidence Gaps First",
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
            "strategy": "Balanced Monitoring Review",
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
            "strategy": "Evidence Gaps First",
            "capacity": "All eligible",
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
            "strategy": "Balanced Monitoring Review",
            "capacity": "All eligible",
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
      "caption": "Actual ordered Mode A shortlist · both strategies; first five form capacity 5",
      "columns": [
        {
          "key": "rank",
          "label": "Rank"
        },
        {
          "key": "id",
          "label": "Source-bound candidate ID"
        },
        {
          "key": "question",
          "label": "Review question"
        }
      ],
      "rows": [
        {
          "id": "rank-1",
          "cells": {
            "rank": "1",
            "id": "A:station-b304f8239c8754ee:2023-01",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        },
        {
          "id": "rank-2",
          "cells": {
            "rank": "2",
            "id": "A:station-b304f8239c8754ee:2023-02",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        },
        {
          "id": "rank-3",
          "cells": {
            "rank": "3",
            "id": "A:station-b304f8239c8754ee:2023-03",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        },
        {
          "id": "rank-4",
          "cells": {
            "rank": "4",
            "id": "A:station-b304f8239c8754ee:2023-04",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        },
        {
          "id": "rank-5",
          "cells": {
            "rank": "5",
            "id": "A:station-b304f8239c8754ee:2023-05",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        },
        {
          "id": "rank-6",
          "cells": {
            "rank": "6",
            "id": "A:station-b304f8239c8754ee:2023-06",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        },
        {
          "id": "rank-7",
          "cells": {
            "rank": "7",
            "id": "A:station-b304f8239c8754ee:2023-07",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        },
        {
          "id": "rank-8",
          "cells": {
            "rank": "8",
            "id": "A:station-b304f8239c8754ee:2023-08",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        },
        {
          "id": "rank-9",
          "cells": {
            "rank": "9",
            "id": "A:station-b304f8239c8754ee:2023-09",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        },
        {
          "id": "rank-10",
          "cells": {
            "rank": "10",
            "id": "A:station-b304f8239c8754ee:2023-10",
            "question": "Verify unmatched 青礜溪 / 菁礐溪 label relationship; do not infer an alias"
          }
        }
      ]
    },
    {
      "caption": "Actual limited Mode B selection and contrasting comparison windows",
      "columns": [
        {
          "key": "kind",
          "label": "Recorded example"
        },
        {
          "key": "id",
          "label": "Candidate / comparison ID"
        },
        {
          "key": "matched",
          "label": "Matched / excluded months"
        },
        {
          "key": "meaning",
          "label": "Evidence interpretation"
        }
      ],
      "rows": [
        {
          "id": "limited-1",
          "cells": {
            "kind": "Balanced limited capacity 5 · 1",
            "id": "B:station-0bfbba8dbe62861a:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "Air temperature 2023–2024; limited same-label description only"
          }
        },
        {
          "id": "limited-2",
          "cells": {
            "kind": "Balanced limited capacity 5 · 2",
            "id": "B:station-164608853a0baa99:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "Air temperature 2023–2024; limited same-label description only"
          }
        },
        {
          "id": "limited-3",
          "cells": {
            "kind": "Balanced limited capacity 5 · 3",
            "id": "B:station-20cb206dfed95a06:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "Air temperature 2023–2024; limited same-label description only"
          }
        },
        {
          "id": "limited-4",
          "cells": {
            "kind": "Balanced limited capacity 5 · 4",
            "id": "B:station-2644cd708b3d0597:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "Air temperature 2023–2024; limited same-label description only"
          }
        },
        {
          "id": "limited-5",
          "cells": {
            "kind": "Balanced limited capacity 5 · 5",
            "id": "B:station-80f33b2a0eb541a5:airTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "Air temperature 2023–2024; limited same-label description only"
          }
        },
        {
          "id": "comparison-0",
          "cells": {
            "kind": "Water temperature · 2023–2024",
            "id": "B:station-0bfbba8dbe62861a:waterTemperatureC:2023-2024",
            "matched": "12 / 0",
            "meaning": "Limited descriptive eligibility; strict remains unavailable"
          }
        },
        {
          "id": "comparison-1",
          "cells": {
            "kind": "Ammonia · 2023–2024",
            "id": "B:station-0bfbba8dbe62861a:ammoniaNitrogenMgL:2023-2024",
            "matched": "0 / 12",
            "meaning": "Excluded: no exact pairs; no substitution for censored values"
          }
        },
        {
          "id": "comparison-2",
          "cells": {
            "kind": "Water temperature · 2025–2026",
            "id": "B:station-0bfbba8dbe62861a:waterTemperatureC:2025-2026",
            "matched": "9 / 3",
            "meaning": "Limited descriptive eligibility; strict remains unavailable"
          }
        }
      ]
    },
    {
      "caption": "Real source rows retain edition and original row identity",
      "columns": [
        {
          "key": "kind",
          "label": "Example"
        },
        {
          "key": "id",
          "label": "Exact accepted row ID"
        },
        {
          "key": "meaning",
          "label": "Retained interpretation"
        }
      ],
      "rows": [
        {
          "id": "observed",
          "cells": {
            "kind": "臺北橋 · 2023-01",
            "id": "river-2023:6ccd7907164ab593ad60c123d764fb473420015f88afaeebb7d25459c1627fb6:6:2023-01:%E6%B7%A1%E6%B0%B4%E6%B2%B3:%E8%87%BA%E5%8C%97%E6%A9%8B",
            "meaning": "Partial across 27 fields; DO4.2/BOD5 2.4/SS20.2/NH3-N1.58 mg/L are potential exact inputs, not admitted RPI"
          }
        },
        {
          "id": "censored",
          "cells": {
            "kind": "雙溪取水口 · 2025-01",
            "id": "river-2025:b5114013df50d2e1fecb2ad446b8134c23858ad408af88f803a58d837664c8e3:10:2025-01:%E9%9B%99%E6%BA%AA:%E9%9B%99%E6%BA%AA%E5%8F%96%E6%B0%B4%E5%8F%A3",
            "meaning": "NH3-N ND<0.02 mg/L; no exact value or RPI substitution"
          }
        },
        {
          "id": "pending",
          "cells": {
            "kind": "雙溪取水口 · 2026-10",
            "id": "river-2026:39ca05ac221eab632fde2b5d2e359b633d5ffa5fcb2a7ed40a70c8d3b0177f34:154:2026-10:%E9%9B%99%E6%BA%AA:%E9%9B%99%E6%BA%AA%E5%8F%96%E6%B0%B4%E5%8F%A3",
            "meaning": "Current-month pending publication; not overdue historical data"
          }
        },
        {
          "id": "future",
          "cells": {
            "kind": "雙溪取水口 · 2026-11",
            "id": "river-2026:39ca05ac221eab632fde2b5d2e359b633d5ffa5fcb2a7ed40a70c8d3b0177f34:170:2026-11:%E9%9B%99%E6%BA%AA:%E9%9B%99%E6%BA%AA%E5%8F%96%E6%B0%B4%E5%8F%A3",
            "meaning": "Future placeholder; no observed values and excluded from Mode A"
          }
        }
      ]
    },
    {
      "caption": "Sensitivity separates selection from evidence-scope changes",
      "columns": [
        {
          "key": "comparison",
          "label": "Comparison"
        },
        {
          "key": "population",
          "label": "Eligible population"
        },
        {
          "key": "shared",
          "label": "Shared IDs"
        },
        {
          "key": "added",
          "label": "Added IDs"
        },
        {
          "key": "removed",
          "label": "Removed IDs"
        },
        {
          "key": "meaning",
          "label": "Meaning"
        }
      ],
      "rows": [
        {
          "id": "strategy-5",
          "cells": {
            "comparison": "Gaps → balanced, capacity 5",
            "population": "736 → 736",
            "shared": "5",
            "added": "0",
            "removed": "0",
            "meaning": "Same population; no strategy selection effect"
          }
        },
        {
          "id": "capacity",
          "cells": {
            "comparison": "Gaps capacity 5 → 10",
            "population": "736 → 736",
            "shared": "5",
            "added": "5",
            "removed": "0",
            "meaning": "June–October 2023 appended; capacity effect"
          }
        },
        {
          "id": "strategy-all",
          "cells": {
            "comparison": "Gaps → balanced, all",
            "population": "736 → 736",
            "shared": "736",
            "added": "0",
            "removed": "0",
            "meaning": "Same selected set; order may differ"
          }
        },
        {
          "id": "year-scope",
          "cells": {
            "comparison": "All years → 2026 only, capacity 5",
            "population": "736 → 160 (−576)",
            "shared": "0",
            "added": "5",
            "removed": "5",
            "meaning": "Different population: A10/B150; not a strategy or environmental effect"
          }
        },
        {
          "id": "b-evidence",
          "cells": {
            "comparison": "B strict → limited evidence",
            "population": "0 → 823",
            "shared": "0",
            "added": "Evidence-contract change",
            "removed": "0",
            "meaning": "Limited description does not verify strict trends"
          }
        }
      ]
    },
    {
      "caption": "Actual year-scope sensitivity · capacity 5; zero shared IDs",
      "columns": [
        {
          "key": "rank",
          "label": "Rank"
        },
        {
          "key": "removed",
          "label": "Removed all-year ID"
        },
        {
          "key": "added",
          "label": "Added 2026-only ID"
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
      "label": "Official Taipei river-water dataset",
      "url": "https://data.taipei/dataset/detail?id=759db528-77b5-4aa3-b6fa-2b857890214e"
    },
    {
      "label": "Official RPI method",
      "url": "https://wq.moenv.gov.tw/EWQP/zh/Encyclopedia/NounDefinition/Pedia_37.aspx"
    },
    {
      "label": "Accepted source editions and original-byte hashes",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/source-manifest.json"
    },
    {
      "label": "Official source feasibility",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-source-feasibility.md"
    },
    {
      "label": "Annual reconciliation and historical comparison",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-source-audit.md"
    },
    {
      "label": "Station identity contract",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-station-identity.md"
    },
    {
      "label": "Observation coverage and qualifiers",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-observation-coverage.md"
    },
    {
      "label": "Longitudinal and review methodology",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-longitudinal-methodology.md"
    },
    {
      "label": "RPI literal ranges and admission blockers",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-rpi-methodology.md"
    },
    {
      "label": "Geographic evidence admission",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-geographic-evidence.md"
    },
    {
      "label": "Machine-readable results and complete selected IDs",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-results.json"
    },
    {
      "label": "Exact immutable-snapshot pointer",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/public/data/river-water-policy/current.json"
    },
    {
      "label": "Immutable snapshot · 7,016,489 bytes",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/public/data/river-water-policy/snapshots/212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81.json"
    },
    {
      "label": "Source acquisition implementation",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/fetchRiverWaterPolicySources.ts"
    },
    {
      "label": "Source-byte and identity audit",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/auditRiverWaterPolicySources.ts"
    },
    {
      "label": "Deterministic offline snapshot builder",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/buildRiverWaterPolicySnapshot.ts"
    },
    {
      "label": "Repeated exact-byte rebuild verifier",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/verifyRiverWaterPolicy.ts"
    },
    {
      "label": "Raw indicator and qualifier parsing",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/utils/riverWaterQuality.ts"
    },
    {
      "label": "Completeness, RPI boundaries and validation",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/utils/riverWaterPolicy.ts"
    },
    {
      "label": "Strategies, scope comparison and safe exports",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/utils/riverWaterPolicyScenarios.ts"
    },
    {
      "label": "Lazy bilingual dashboard",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/RiverWaterPolicyDashboard.tsx"
    },
    {
      "label": "Qualifier, eligibility and RPI regressions",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/tests/riverWaterPolicy.test.ts"
    },
    {
      "label": "Source and publication regressions",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/tests/riverWaterPolicySources.test.ts"
    },
    {
      "label": "Scenario and export regressions",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/tests/riverWaterPolicyScenarios.test.ts"
    },
    {
      "label": "Recorded source browser checks",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/browser-qa.json"
    },
    {
      "label": "Recorded local performance",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/performance.json"
    },
    {
      "label": "Retained original 112 / 2023 CSV",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/river-2023-6ccd7907164ab593ad60c123d764fb473420015f88afaeebb7d25459c1627fb6.csv"
    },
    {
      "label": "Retained original 113 / 2024 CSV",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/river-2024-e71033568e29b1cffbc0babefd94ca66f653effd1488611d0b34028e03f04907.csv"
    },
    {
      "label": "Retained original 114 / 2025 CSV",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/river-2025-b5114013df50d2e1fecb2ad446b8134c23858ad408af88f803a58d837664c8e3.csv"
    },
    {
      "label": "Retained original 115 / 2026 CSV",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/river-2026-39ca05ac221eab632fde2b5d2e359b633d5ffa5fcb2a7ed40a70c8d3b0177f34.csv"
    },
    {
      "label": "Authentic desktop provenance and export safeguards",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-en-desktop.png"
    },
    {
      "label": "Authentic monitoring-evidence dashboard · Traditional Chinese mobile",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-zh-mobile.png"
    }
  ],
  "previewAssets": [
    {
      "label": "Authentic desktop provenance and export safeguards",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-en-desktop.png"
    },
    {
      "label": "Authentic monitoring-evidence dashboard · Traditional Chinese mobile",
      "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-zh-mobile.png"
    }
  ],
  "futureExtensions": [
    "Acquire authoritative aliases, historical station locations and laboratory-method continuity before strict longitudinal comparison.",
    "Admit official RPI precision, rounding and common-sampling rules with independently matched examples before research-reproduced RPI output.",
    "Obtain conclusion-specific causal, regulatory, hydrologic and public-health evidence before operational determinations."
  ],
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "river-water-longitudinal-evidence-review-v1",
    "explanation": "Administrative review starts with source/station identity and observation eligibility. Tier and leading issue precedence come before stable-ID or within-group river/station balancing; water-quality severity is not a selection weight.",
    "thresholds": {
      "caption": "Evidence gates before selection",
      "columns": [
        {
          "key": "gate",
          "label": "Gate"
        },
        {
          "key": "rule",
          "label": "Required rule"
        },
        {
          "key": "result",
          "label": "Accepted-edition result"
        }
      ],
      "rows": [
        {
          "id": "identity",
          "cells": {
            "gate": "Source and identity",
            "rule": "Accepted edition and valid station-period; unresolved labels stay explicit",
            "result": "15 current label matches; 1 unmatched; 16 physical histories unverified"
          }
        },
        {
          "id": "future",
          "cells": {
            "gate": "Observation period",
            "rule": "Future empty months excluded; current empty month stays pending",
            "result": "736 review-eligible; 32 future placeholders excluded"
          }
        },
        {
          "id": "exact",
          "cells": {
            "gate": "Exact comparison cells",
            "rule": "Unique observed rows, same month/indicator/unit, valid exact values on both sides",
            "result": "Censored, missing, duplicate, invalid and unparsed values excluded"
          }
        },
        {
          "id": "strict",
          "cells": {
            "gate": "Strict longitudinal evidence",
            "rule": "Historical physical continuity and method compatibility",
            "result": "0 admitted strict comparisons"
          }
        },
        {
          "id": "rpi",
          "cells": {
            "gate": "Research RPI",
            "rule": "Admitted precision/rounding and common sampling, not only four inputs",
            "result": "460 potential sets; 0 admitted outputs"
          }
        }
      ]
    },
    "tiers": {
      "caption": "Mode A documentary tier precedence",
      "columns": [
        {
          "key": "tier",
          "label": "Tier"
        },
        {
          "key": "question",
          "label": "Primary review question"
        },
        {
          "key": "count",
          "label": "Eligible population"
        }
      ],
      "rows": [
        {
          "id": "a",
          "cells": {
            "tier": "A",
            "question": "Identity/source questions precede measurement or coverage questions",
            "count": "46"
          }
        },
        {
          "id": "b",
          "cells": {
            "tier": "B",
            "question": "Completeness, censoring, unknown methods or pending publication",
            "count": "690"
          }
        },
        {
          "id": "c",
          "cells": {
            "tier": "C",
            "question": "Routine follow-up with no material unresolved issue",
            "count": "0"
          }
        }
      ]
    },
    "notes": [
      "Primary issues include duplicate/invalid periods, ambiguous or unmatched identity, contradictory river assignment, unparseable essential identity, incompatible schema and future measured values.",
      "The selected Tier A station leads with identity_unmatched. Lower-priority partial_measurement, missing_rpi_inputs, censored_value and sampling_method_unknown cannot displace it.",
      "Evidence Gaps First uses stable IDs after tier/issue order. Balanced Monitoring Review considers river then station representation only within the same tier and leading-issue group.",
      "Strict Mode B and research RPI remain unavailable under independent eligibility rules; limited same-label comparisons do not become validated trends."
    ]
  }
};
