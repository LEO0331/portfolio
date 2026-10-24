import type { GovTechCase } from "../types/govtechCase";

// E identifies retained Git LF text; A/B/C identify acquired-original bytes.
export const SENIOR_COMMUNITY_CARE_SOURCE_SHA = "a1c98e4aef59bf15f7e5f76e52cd871525c1517e";
export const SENIOR_COMMUNITY_CARE_METHOD_ID = "senior-community-care-evidence-review-v1";
export const SENIOR_COMMUNITY_CARE_SCHEMA_VERSION = 1;
export const SENIOR_COMMUNITY_CARE_ANALYSIS_DATE = "2026-10-23";
export const SENIOR_COMMUNITY_CARE_REFERENCE_PERIOD = "2026-08";
export const SENIOR_COMMUNITY_CARE_SNAPSHOT_ID = "senior-care-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c";
export const SENIOR_COMMUNITY_CARE_SNAPSHOT_SHA256 = "f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c";
export const SENIOR_COMMUNITY_CARE_SNAPSHOT_BYTES = 771155;
export const SENIOR_COMMUNITY_CARE_SNAPSHOT_GZIP_BYTES = 119539;
export const SENIOR_COMMUNITY_CARE_A_SHA256 = "26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2";
export const SENIOR_COMMUNITY_CARE_B_SHA256 = "c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7";
export const SENIOR_COMMUNITY_CARE_C_SHA256 = "2e598f8d48b46a9b832dd3a661f900badb33f0ef79cc84ada48893af369b5336";
export const SENIOR_COMMUNITY_CARE_E_CANONICAL_LF_SHA256 = "db5873afbb0e5edd376f90ebb02fca975e0844cf786e09407d022be03567772f";
export const seniorCarePolicySource = (path: string): string => `https://github.com/LEO0331/taipei-civic-groups-map/blob/${SENIOR_COMMUNITY_CARE_SOURCE_SHA}/${path}`;

export const seniorCommunityCareCase: GovTechCase = {
  "id": "senior-community-care",
  "slug": "senior-community-care",
  "displayNumber": "010",
  "policyDomain": "Citizen Services & Public Health",
  "projectId": "taipei-civic-groups-map",
  "sourceRepository": "https://github.com/LEO0331/taipei-civic-groups-map",
  "sourceVersion": "a1c98e4aef59bf15f7e5f76e52cd871525c1517e",
  "snapshotVersion": "senior-care-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c",
  "title": "Senior Community Care Coverage & Service Readiness",
  "summary": "From official care-site PDFs to traceable source reconciliation, explainable administrative follow-up and privacy-aware public-data engineering.",
  "maturity": "decision-support-poc",
  "maturityLabel": "Completed evidence review and administrative follow-up proof of concept",
  "reviewNote": "520 site rows, 88 verified documentary village entries and 493 accepted historical associations; no verified capacity, accessibility, unmet demand or welfare outcomes.",
  "intendedUsers": "Municipal social-welfare data stewards, community-care programme administrators, public-service researchers, civic technology engineers and administrative documentation teams.",
  "implementedCapabilities": [
    "Deterministic official PDF extraction with independent page controls",
    "Source-bound site/village identity and conservative cross-edition reconciliation",
    "Explainable tiers and 5/10/all administrative review scenarios",
    "Privacy-minimized immutable snapshots and reproducible JSON/CSV briefings",
    "Explicit unavailable service-capacity and welfare-outcome evidence gate"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "Policy Question and Decision Scope",
      "paragraphs": [
        "How can municipal teams identify which published community-care site records and officially listed unbuilt villages require further documentation review when investigation capacity is limited?",
        "Published records, site identity, village identity, programme deployment, operating service, capacity, resident access and welfare outcomes are separate evidence claims. This proof of concept supports documentary investigation; selected candidates are follow-up questions, not instructions to construct facilities or allocate welfare funding."
      ]
    },
    {
      "id": "evolution",
      "title": "From Public Records to Administrative Review",
      "paragraphs": [
        "The existing public-records explorer serves many independently updated directories. It already retains 510 community-care service-site records (E) and 292 community-integrated care Level-C units (F). F belongs to a separate programme; these populations cannot be added to the 520 current PDF rows as a total site count.",
        "The new module adds official PDF admission, conservative cross-edition associations, verified documentary village keys, deterministic review scenarios and reproducible JSON/CSV briefings. The older explorer, directory files and their source-date contracts remain intact."
      ]
    },
    {
      "id": "sources",
      "title": "Official Documents and Source Editions",
      "paragraphs": [
        "Source A is the Social Welfare Department’s August 2026 care-site list: 14 pages, 520 published rows and 467,284 original bytes. Source B is its August 2026 officially unbuilt-village list: 2 pages, 88 rows, 104,821 bytes and all twelve Taipei districts. These are documentary rows, not a certified count of operating facilities or a measured shortage of care.",
        "Source C, the community-care subsidy implementation plan, was revised 2025-12-17 and became effective 2026-01-01. Its categories and exceptions provide context; the system does not determine grant qualification, legal eligibility or venue compliance. A/B page metadata updates on 2026-09-10 are distinct from their August preparation period and the fixed 2026-10-23 analysis date.",
        "Acquired-original SHA-256 values: A 26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2; B c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7; C 2e598f8d48b46a9b832dd3a661f900badb33f0ef79cc84ada48893af369b5336. E db5873afbb0e5edd376f90ebb02fca975e0844cf786e09407d022be03567772f identifies the retained Git LF text edition, not independently acquired original HTTP bytes. Accepted A/B acquisition timestamps are 2026-10-23T13:21:31.049788+00:00 and 2026-10-23T13:21:31.461064+00:00, separate from preparation, page update and analysis."
      ]
    },
    {
      "id": "pdf-extraction",
      "title": "Deterministic PDF Extraction",
      "paragraphs": [
        "A pinned pdfplumber==0.11.9 ruled-table parser handles multiline names, long and multiple addresses, repeated venues, page breaks and district transitions. It verifies the PDF signature, page count, visible preparation header, schema, required cells and complete serial sequence before accepting rows. No OCR or generative-AI extraction supplies production data. A’s original fields cover serial, district, village, site name/type, address and telephone; the latter two follow transformation-stage restrictions rather than becoming public candidate fields.",
        "The accepted attachment label, encoded filename and visible header agree on 115.08. Legacy XLSX-style internal PDF title metadata is retained as a warning, not used as edition proof. The previously suspected 115.04/115.08 attachment discrepancy was not observed. A changed layout or date requires renewed admission even when totals match."
      ]
    },
    {
      "id": "page-controls",
      "title": "The Cross-page District Trap",
      "paragraphs": [
        "Source B records 47–58 belong to Neihu. Records 47–48 are on page 1, while the visible Neihu district label continues on page 2. Blindly forward-filling the preceding Zhongzheng cell would misassign the span. The parser checks open district-cell geometry, the next-page label and the independently reviewed serial range.",
        "All A page endpoints, district transitions and selected multiline examples were compared with rendered PDF strips upstream; the complete B village sequence was checked. B69 retains the extracted glyph ㇐德里; explicitly reviewed normalization maps it to 一德里 for comparisons while preserving source text. Repeated venues remain separate rows."
      ]
    },
    {
      "id": "identity",
      "title": "Source-bound Identity and Statistical Units",
      "paragraphs": [
        "A candidates are published site rows; B candidates are published village rows. IDs bind the original source hash, zero-padded serial, canonical row hash and occurrence suffix. Page numbers locate evidence but do not define identity. Neither an operator nor a shared venue becomes a permanent government facility identifier.",
        "Bounded formatting normalization covers NFKC, whitespace, 台/臺, recognized parentheses and the reviewed stroke glyph. Village keys come from explicit district/village columns, never organization names or inferred address geography. No authoritative all-village registry, government village-code crosswalk or GIS polygon layer was admitted."
      ]
    },
    {
      "id": "reconciliation",
      "title": "Conservative Historical-directory Reconciliation",
      "paragraphs": [
        "Name, address and district must agree exactly or through a unique normalized match, with one-to-one consistency across A and E. Actual outcomes are 427 exact + 66 normalized = 493 accepted research associations, 1 ambiguous, 9 rejected and 17 PDF-only rows; these categories sum to 520. Another 17 of E’s 510 rows have no accepted association.",
        "A #114, the Da’an Xinlong Community Development Association (臺北市大安區大安新龍社區發展協會), is the one ambiguous record. Accepted research association is not government-certified operating-site identity. A-only/E-only presence does not prove opening or closure; type differences may reflect publication or programme definitions."
      ]
    },
    {
      "id": "villages",
      "title": "A Zero-overlap Documentary Finding",
      "paragraphs": [
        "A contains 368 distinct published district/village keys; B contains 88 unique accepted keys. Normalized overlap is 0. Neither accepted document has missing district/village fields or duplicate source serials. The finding supports consistency of this bounded documentary comparison.",
        "B means officially listed villages without a community-care point under this programme and edition. It does not establish absence of other senior services, nearby access or care received. Zero overlap does not establish citywide coverage, error-free publication or unmet need; no compatible complete denominator supports an adequate-care percentage."
      ]
    },
    {
      "id": "tiers",
      "title": "Explainable Documentation Evidence Tiers",
      "paragraphs": [
        "The broad-review A population has Tier A 1, Tier B 61 and Tier C 458. First-match rules identify primary identity/material association conflicts, other documentary questions, then routine verification. These tiers do not measure care quality, safety, vulnerability, availability or resident demand.",
        "Evidence Gaps First orders by tier then stable candidate ID. Balanced Administrative Review cycles through district labels in deterministic Unicode order, retaining tier/ID precedence within each queue. There are no care-need weights or weighted welfare scores."
      ],
      "content": "methodology"
    },
    {
      "id": "mode-a",
      "title": "Mode A: Site Documentation Review",
      "paragraphs": [
        "Completed Mode A retains 520 official PDF rows under the broad all-category configuration. Source scope, category, issue scope, district, capacity and strategy are explicit settings. Filters apply before selection; capacities 5, 10 and all represent documentation slots, not funding or service places.",
        "The first five evidence-first rows are A #114, #1, #59, #60 and #66: an ambiguous Xinlong association, two unspecified session-band questions and two source-edition type differences. Readable source rows and official names appear in the example table; complete source-bound IDs remain in technical evidence. English name readings are explanatory translations; official Chinese names are retained where needed for source matching."
      ]
    },
    {
      "id": "mode-a-results",
      "title": "Mode A: Capacity Changes List Composition",
      "paragraphs": [
        "At capacity 5, evidence-first represents 3 districts and balanced review 5, sharing 0 IDs. At capacity 10, they represent 3 versus 10 districts and share 3 IDs. At all capacity, both select the same 520 members across 12 districts; order may differ.",
        "Changing selection rules changes the mix of follow-up questions under a fixed population. District representation is not measured care equity, service accessibility or improved welfare."
      ]
    },
    {
      "id": "mode-b",
      "title": "Mode B: Official Unbuilt-village Follow-up",
      "paragraphs": [
        "Completed Mode B admits all 88 verified within-edition documentary village rows. Without a differentiating documentary issue, evidence-first uses stable source order rather than invented demographic or care-demand scores. Balanced District Review cycles through the twelve represented districts.",
        "Evidence-first begins B #1–5, all in Shilin: Fu’an, Dehua, Shezi, Lanya and Tianhe. Balanced capacity 5 selects B #33 Zhongzhuang, #41 Xia’an, #75 Li’an, #47 Ziyang and #65 Yongxin, in Zhongshan, Zhongzheng, Xinyi, Neihu and Beitou respectively. These are follow-up lists, not construction or high-need rankings."
      ]
    },
    {
      "id": "mode-b-results",
      "title": "Mode B: Representation and Stable Full-population Results",
      "paragraphs": [
        "At capacity 5, evidence-first represents 1 district and balanced review 5, with 0 shared IDs. At capacity 10, representation is 1 versus 10 districts with 1 shared ID. All capacity selects the same 88 members across 12 districts under either strategy.",
        "The immutable results retain all twelve runs: two modes × three capacities × two strategies. Same-set results at full capacity are valid findings; selection order and district composition explain administrative choices, not resident need."
      ],
      "content": "scenarios"
    },
    {
      "id": "sensitivity",
      "title": "Source and Category Sensitivity",
      "paragraphs": [
        "The recorded grid fixes Mode A, capacity 5, evidence-first and all issue levels. It compares PDF-only, accepted-association and broad scopes against all, care-point-text and learning-school-text categories. PDF-only removes E-related questions before tier assignment; accepted-association scope admits 493 rows and never imports E-only rows as current PDF sites.",
        "PDF-only care-point text admits 463 rows, represents 5 districts and shares 2 default IDs, adding/removing 3 each. Broad care-point text admits 463 but retains all 5 default IDs across 3 districts. Learning-text subsets admit 57 PDF/broad rows or 52 associated rows. These are source-text classes, not certified standard operating sites.",
        "Nine recorded comparisons retain eligible populations, selected source rows, districts, shared/added/removed IDs and population changes. Stable selections are valid. Primary-conflict and broader-question issue filters are implemented; no extra analytical run is invented here. Geographic eligibility and actual capacity/access/outcome comparisons remain unsupported."
      ]
    },
    {
      "id": "privacy",
      "title": "Privacy Built into the Transformation",
      "paragraphs": [
        "Source B’s official PDF contains a village elderly-alone count field. The transformation discards it before privacy-minimized extraction, public snapshots, selection and standard JSON/CSV briefings. It is never a vulnerability or demand-ranking input. The official original still contains the published field; this case does not reproduce its values.",
        "Telephones are discarded during PDF extraction. Full venue addresses are used offline for associations and row hashing, then omitted from public candidates and briefings along with individual/household information and resident geolocation. This is upstream minimization, not a UI-only filter.",
        "The CSV exporter quotes every cell, escapes embedded quotes and guards formula prefixes even after leading whitespace/control characters. Populated and empty briefings retain method, dates, settings, source lineage, exclusions and limitations. No resident geocoding or vulnerability model is implemented."
      ]
    },
    {
      "id": "architecture",
      "title": "Offline Evidence, Lazy Local Delivery",
      "paragraphs": [
        "Bounded acquisition → original-byte manifests → pinned Python parsing and independent page controls → offline TypeScript reconciliation → source-bound identities → evidence tiers/scenarios → immutable JSON → atomic current pointer → integrity-checked lazy React module → bilingual review and JSON/CSV briefings.",
        "Acquisition/PDF parsing stay outside the browser, decoupling reviewed admission from live government endpoints and user devices. The module reuses catalogue, language/navigation state and the local JSON loader. No production API backend, database, machine-learning model or new Node runtime dependency was introduced.",
        "The policy publishes under public/policy/senior-care-policy/ rather than replacing public/data/. Its August PDFs, retained directory and legal context require separate editions. Existing 117-directory Data Trust/freshness contracts stay unchanged; one analysis date cannot refresh all historical sources."
      ],
      "content": "architecture"
    },
    {
      "id": "governance",
      "title": "Edition Admission and Snapshot Integrity",
      "paragraphs": [
        "Document preparation, page update, acquisition, parser version, extraction, analysis date, Git source and immutable publication remain distinct. Default verification is offline. Explicit refresh stages bounded downloads and records new hashes; unreviewed documents never overwrite accepted originals.",
        "Publication writes the immutable file before atomic pointer replacement. The browser validates pointer schema/name conventions and exact SHA-256 before accepting snapshot structure, with error/retry on failure. Unchanged rebuilds retain acquisition metadata; rebuilding is not new acquisition.",
        "Source commit a1c98e4aef59bf15f7e5f76e52cd871525c1517e; schema 1; method senior-community-care-evidence-review-v1; snapshot ID senior-care-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c; exact-file SHA-256 f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c. This implementation derives filename and snapshot ID from the same exact published bytes, 771155 bytes / 119539 gzip. That equality is specific to this format, not a general definition of snapshot IDs."
      ],
      "content": "evidence"
    },
    {
      "id": "verification",
      "title": "Recorded Verification and Local Performance",
      "paragraphs": [
        "The source records passing typecheck, 208 Node tests, build, 20 Python parser/acquisition tests and 24 policy browser checks. Its Linux full browser run records 177 passes and 1 expected skip with original baselines retained. The Windows full attempt records 165 passes, 1 expected skip and 12 platform-specific visual-baseline failures; it was not wholly green.",
        "Recorded entry is 400.12 KB raw / 116.05 KB gzip against unchanged 450 / 130 KB budgets. Lazy dashboard: approximately 27 KB / 10.4 KB gzip; snapshot: 771,155 / 119,539 gzip bytes; local scenario mean: approximately 0.356 ms; browser capacity change: 35.1 ms. These source-project measurements are not public-host latency guarantees.",
        "The explorer shell did not eagerly request the snapshot. Successful policy flows fetched a local pointer and immutable JSON, not government APIs/PDFs. The source recorded one pre-existing high-severity npm advisory, unresolved by this work. Portfolio checks are separate; this case does not claim to have rerun the upstream full suite.",
        "Portfolio separately checked original A/B/C bytes, the retained E Git LF edition and exact snapshot hash, reproduced all twelve baselines with the pinned scenario engine, and recomputed overlaps and nine sensitivity differences from actual selected IDs. This does not constitute a fresh Python PDF extraction, upstream full-browser rerun or upstream performance benchmark."
      ]
    },
    {
      "id": "mode-c",
      "title": "Mode C: Actual Service Evidence Is Unavailable",
      "paragraphs": [
        "Mode C is unavailable. Current operation, actual hours, staffing/capacity, utilization, waiting lists, inter-village use, travel barriers, compatible demographic denominators and measured welfare outcomes require separate evidence. The 292 Level-C directory rows do not supply these facts for this population.",
        "No geographic accessibility model was admitted: no travel times, service radii, elderly-coverage percentages, care-demand weights or welfare estimates. Published session bands are text categories, not verified appointments/hours. Unknown remains unknown; no site, subsidy or individual-eligibility recommendation follows."
      ]
    },
    {
      "id": "future",
      "title": "Future Evidence and Public-sector Use",
      "paragraphs": [
        "Next steps require reviewed document refresh, steward confirmation of ambiguous associations/programme categories and a compatible authoritative village registry. Service-capacity or accessibility research needs operating evidence, denominators, privacy review and validated geographic relationships.",
        "The demonstrated capability is traceable document admission, conservative identity, explainable investigation batches and privacy-aware publication. Municipal adoption or improved care outcomes have not been established. This proof of concept helps examine evidence and ask more precise administrative questions."
      ],
      "content": "future"
    }
  ],
  "architecture": [
    "Official pages and bounded attachment acquisition",
    "Original-byte manifests and pinned Python PDF parser",
    "Independent page controls and privacy-minimized extraction",
    "Offline reconciliation and source-bound identities",
    "Evidence tiers and deterministic review scenarios",
    "Immutable JSON and atomic current pointer",
    "Integrity-checked lazy bilingual module and safe briefings"
  ],
  "architectureNote": "The source application performs offline admission and integrity-checked local delivery. Portfolio renders authored evidence only; it does not fetch PDFs, run the engine or download the upstream snapshot at runtime.",
  "scenarioTables": [
    {
      "caption": "Separate official and retained source editions",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "edition",
          "label": "Edition / role"
        },
        {
          "key": "count",
          "label": "Published unit"
        },
        {
          "key": "boundary",
          "label": "Interpretation boundary"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "source": "A",
            "edition": "August 2026 official site PDF",
            "count": "520",
            "boundary": "Published rows; not certified operating facilities"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "B",
            "edition": "August 2026 official unbuilt-village PDF",
            "count": "88",
            "boundary": "Programme-specific documentary villages"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "C",
            "edition": "Revised 2025-12-17; effective 2026-01-01",
            "count": "Legal context",
            "boundary": "No grant or legal-eligibility determination"
          }
        },
        {
          "id": "4",
          "cells": {
            "source": "E",
            "edition": "Retained historical community-care CSV",
            "count": "510",
            "boundary": "Separate reconciliation edition; canonical Git LF"
          }
        },
        {
          "id": "5",
          "cells": {
            "source": "F",
            "edition": "Separate community-integrated care Level-C directory",
            "count": "292",
            "boundary": "Separate programme; never pooled into A/E"
          }
        }
      ]
    },
    {
      "caption": "Accepted PDF extraction summary",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "pages",
          "label": "Pages"
        },
        {
          "key": "rows",
          "label": "Rows"
        },
        {
          "key": "bytes",
          "label": "Original bytes"
        },
        {
          "key": "parser",
          "label": "Parser"
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
      "caption": "Detailed page-boundary admission controls",
      "columns": [
        {
          "key": "source",
          "label": "Source"
        },
        {
          "key": "page",
          "label": "Page"
        },
        {
          "key": "serials",
          "label": "First–last serial"
        },
        {
          "key": "control",
          "label": "Control"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "source": "A",
            "page": "1",
            "serials": "1–36",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "2",
          "cells": {
            "source": "A",
            "page": "2",
            "serials": "37–74",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "3",
          "cells": {
            "source": "A",
            "page": "3",
            "serials": "75–112",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "4",
          "cells": {
            "source": "A",
            "page": "4",
            "serials": "113–149",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "5",
          "cells": {
            "source": "A",
            "page": "5",
            "serials": "150–187",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "6",
          "cells": {
            "source": "A",
            "page": "6",
            "serials": "188–225",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "7",
          "cells": {
            "source": "A",
            "page": "7",
            "serials": "226–262",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "8",
          "cells": {
            "source": "A",
            "page": "8",
            "serials": "263–298",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "9",
          "cells": {
            "source": "A",
            "page": "9",
            "serials": "299–335",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "10",
          "cells": {
            "source": "A",
            "page": "10",
            "serials": "336–373",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "11",
          "cells": {
            "source": "A",
            "page": "11",
            "serials": "374–412",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "12",
          "cells": {
            "source": "A",
            "page": "12",
            "serials": "413–451",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "13",
          "cells": {
            "source": "A",
            "page": "13",
            "serials": "452–489",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "14",
          "cells": {
            "source": "A",
            "page": "14",
            "serials": "490–520",
            "control": "Rendered endpoints and serial continuity"
          }
        },
        {
          "id": "15",
          "cells": {
            "source": "B",
            "page": "1",
            "serials": "1–48",
            "control": "Rows 47–48 belong to Neihu"
          }
        },
        {
          "id": "16",
          "cells": {
            "source": "B",
            "page": "2",
            "serials": "49–88",
            "control": "Neihu label validates 47–58; B69 stroke preserved"
          }
        }
      ]
    },
    {
      "caption": "Statistical units remain distinct",
      "columns": [
        {
          "key": "unit",
          "label": "Unit"
        },
        {
          "key": "meaning",
          "label": "Meaning"
        },
        {
          "key": "notEstablished",
          "label": "Not established"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "unit": "A site row",
            "meaning": "One published PDF record",
            "notEstablished": "Unique operating physical facility"
          }
        },
        {
          "id": "2",
          "cells": {
            "unit": "B village row / key",
            "meaning": "Within-edition district/village identity",
            "notEstablished": "Permanent government village code / GIS polygon"
          }
        },
        {
          "id": "3",
          "cells": {
            "unit": "A/E association",
            "meaning": "Conservative one-to-one research relationship",
            "notEstablished": "Certified site identity or opening/closure"
          }
        },
        {
          "id": "4",
          "cells": {
            "unit": "Session band",
            "meaning": "Published category text",
            "notEstablished": "Actual hours, staffing, capacity or people served"
          }
        }
      ]
    },
    {
      "caption": "A/E reconciliation of all 520 current PDF rows",
      "columns": [
        {
          "key": "relationship",
          "label": "Relationship"
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
          "id": "1",
          "cells": {
            "relationship": "Exact accepted",
            "count": "427",
            "meaning": "Research association"
          }
        },
        {
          "id": "2",
          "cells": {
            "relationship": "Normalized accepted",
            "count": "66",
            "meaning": "Research association"
          }
        },
        {
          "id": "3",
          "cells": {
            "relationship": "Total accepted",
            "count": "493",
            "meaning": "427 + 66; not an extra population category"
          }
        },
        {
          "id": "4",
          "cells": {
            "relationship": "Ambiguous",
            "count": "1",
            "meaning": "A #114; clarification required"
          }
        },
        {
          "id": "5",
          "cells": {
            "relationship": "Rejected",
            "count": "9",
            "meaning": "No accepted identity"
          }
        },
        {
          "id": "6",
          "cells": {
            "relationship": "PDF-only",
            "count": "17",
            "meaning": "No opening/closure inference"
          }
        },
        {
          "id": "7",
          "cells": {
            "relationship": "E without accepted association",
            "count": "17",
            "meaning": "Separate E edition; not added to A"
          }
        }
      ]
    },
    {
      "caption": "Bounded A/B village-key comparison",
      "columns": [
        {
          "key": "measure",
          "label": "Measure"
        },
        {
          "key": "value",
          "label": "Value"
        },
        {
          "key": "qualification",
          "label": "Qualification"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "measure": "Distinct A district/village keys",
            "value": "368",
            "qualification": "Published source columns"
          }
        },
        {
          "id": "2",
          "cells": {
            "measure": "Unique accepted B keys",
            "value": "88",
            "qualification": "Within-edition documentary identity"
          }
        },
        {
          "id": "3",
          "cells": {
            "measure": "Normalized A/B overlap",
            "value": "0",
            "qualification": "Not proof of care coverage"
          }
        },
        {
          "id": "4",
          "cells": {
            "measure": "Missing accepted district/village cells",
            "value": "0",
            "qualification": "Accepted A and B documents"
          }
        },
        {
          "id": "5",
          "cells": {
            "measure": "Duplicate accepted serials",
            "value": "0",
            "qualification": "Within each source"
          }
        }
      ]
    },
    {
      "caption": "Mode A broad-review evidence tiers",
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
          "key": "question",
          "label": "Review question"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "tier": "A",
            "count": "1",
            "question": "Primary identity / material association conflict"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "B",
            "count": "61",
            "question": "Other documentary, type, session or edition questions"
          }
        },
        {
          "id": "3",
          "cells": {
            "tier": "C",
            "count": "458",
            "question": "Routine documentation verification"
          }
        }
      ]
    },
    {
      "caption": "Mode A: actual capacity and strategy comparison",
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
          "key": "used",
          "label": "Used per strategy"
        },
        {
          "key": "evidenceDistricts",
          "label": "Evidence-first districts"
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
            "capacity": "All",
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
      "caption": "Mode B: actual capacity and strategy comparison",
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
          "key": "used",
          "label": "Used per strategy"
        },
        {
          "key": "evidenceDistricts",
          "label": "Evidence-first districts"
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
            "capacity": "All",
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
      "caption": "Verified capacity-5 source-row examples",
      "columns": [
        {
          "key": "mode",
          "label": "Mode"
        },
        {
          "key": "strategy",
          "label": "Strategy"
        },
        {
          "key": "row",
          "label": "Source row"
        },
        {
          "key": "district",
          "label": "District"
        },
        {
          "key": "village",
          "label": "Village / official name"
        },
        {
          "key": "name",
          "label": "Site / entry"
        },
        {
          "key": "question",
          "label": "Documentary question"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #114",
            "district": "Da’an",
            "village": "Xinlong (新龍里)",
            "name": "Da’an Xinlong Community Development Association (臺北市大安區大安新龍社區發展協會)",
            "question": "Ambiguous A/E association"
          }
        },
        {
          "id": "2",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #1",
            "district": "Shilin",
            "village": "Sanyu (三玉里)",
            "name": "Shilin Senior Service Center (士林老人服務中心)",
            "question": "Session band unspecified"
          }
        },
        {
          "id": "3",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #59",
            "district": "Datong",
            "village": "Bao’an (保安里)",
            "name": "Chinese Ageless Living Association (社團法人中華無齡酷活協會)",
            "question": "Source-edition type differs"
          }
        },
        {
          "id": "4",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #60",
            "district": "Datong",
            "village": "Nanfang (南芳里)",
            "name": "Chinese International Care Development Association (社團法人中華國際照顧發展協會)",
            "question": "Source-edition type differs"
          }
        },
        {
          "id": "5",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #66",
            "district": "Datong",
            "village": "Chongqing (重慶里)",
            "name": "Datong Senior Service and Day-care Center (大同老人服務暨日間照顧中心)",
            "question": "Session band unspecified"
          }
        },
        {
          "id": "6",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #1",
            "district": "Shilin",
            "village": "Fu’an (福安里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        },
        {
          "id": "7",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #2",
            "district": "Shilin",
            "village": "Dehua (德華里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        },
        {
          "id": "8",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #3",
            "district": "Shilin",
            "village": "Shezi (社子里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        },
        {
          "id": "9",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #4",
            "district": "Shilin",
            "village": "Lanya (蘭雅里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        },
        {
          "id": "10",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #5",
            "district": "Shilin",
            "village": "Tianhe (天和里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        },
        {
          "id": "11",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #33",
            "district": "Zhongshan",
            "village": "Zhongzhuang (中庄里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        },
        {
          "id": "12",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #41",
            "district": "Zhongzheng",
            "village": "Xia’an (廈安里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        },
        {
          "id": "13",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #75",
            "district": "Xinyi",
            "village": "Li’an (黎安里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        },
        {
          "id": "14",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #47",
            "district": "Neihu",
            "village": "Ziyang (紫陽里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        },
        {
          "id": "15",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #65",
            "district": "Beitou",
            "village": "Yongxin (永欣里)",
            "name": "Official village entry",
            "question": "Stable source-order baseline"
          }
        }
      ]
    },
    {
      "caption": "Recorded Mode A capacity-5 sensitivity; differences from broad/all baseline",
      "columns": [
        {
          "key": "scope",
          "label": "Source scope"
        },
        {
          "key": "category",
          "label": "Category text"
        },
        {
          "key": "eligible",
          "label": "Eligible"
        },
        {
          "key": "districts",
          "label": "Districts"
        },
        {
          "key": "selectedRows",
          "label": "Selected source rows"
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
          "key": "populationChange",
          "label": "Population change"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "scope": "PDF-only",
            "category": "All text categories",
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
            "scope": "PDF-only",
            "category": "Care-point text",
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
            "scope": "PDF-only",
            "category": "Learning-school text",
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
            "scope": "Accepted A/E",
            "category": "All text categories",
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
            "scope": "Accepted A/E",
            "category": "Care-point text",
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
            "scope": "Accepted A/E",
            "category": "Learning-school text",
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
            "scope": "Broad review",
            "category": "All text categories",
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
            "scope": "Broad review",
            "category": "Care-point text",
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
            "scope": "Broad review",
            "category": "Learning-school text",
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
      "caption": "Privacy and publication boundaries",
      "columns": [
        {
          "key": "field",
          "label": "Field / evidence"
        },
        {
          "key": "use",
          "label": "Implemented use"
        },
        {
          "key": "public",
          "label": "Public candidate / briefing"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "field": "Village elderly-alone count",
            "use": "Official source PDF retained only",
            "public": "Excluded before extraction; never ranked"
          }
        },
        {
          "id": "2",
          "cells": {
            "field": "Telephone",
            "use": "Original source only",
            "public": "Excluded during extraction"
          }
        },
        {
          "id": "3",
          "cells": {
            "field": "Full venue address",
            "use": "Offline association and row hash",
            "public": "Omitted; no full-address publication"
          }
        },
        {
          "id": "4",
          "cells": {
            "field": "Source row / district / village",
            "use": "Documentary identity and representation",
            "public": "Retained with source-bound ID"
          }
        },
        {
          "id": "5",
          "cells": {
            "field": "Resident / household / coordinates",
            "use": "No resident data model",
            "public": "Absent"
          }
        }
      ]
    },
    {
      "caption": "Recorded source-project checks and local measurements",
      "columns": [
        {
          "key": "check",
          "label": "Check / metric"
        },
        {
          "key": "result",
          "label": "Recorded result"
        },
        {
          "key": "boundary",
          "label": "Qualification"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "check": "Typecheck / production build",
            "result": "Passed",
            "boundary": "Recorded source evidence"
          }
        },
        {
          "id": "2",
          "cells": {
            "check": "Node / Python / policy browser tests",
            "result": "208 / 20 / 24",
            "boundary": "Passed; not rerun by this case"
          }
        },
        {
          "id": "3",
          "cells": {
            "check": "Linux full browser suite",
            "result": "177 passes / 1 expected skip",
            "boundary": "Original visual baselines retained"
          }
        },
        {
          "id": "4",
          "cells": {
            "check": "Windows full browser attempt",
            "result": "165 passes / 1 skip / 12 visual failures",
            "boundary": "Platform baseline limitation"
          }
        },
        {
          "id": "5",
          "cells": {
            "check": "Entry raw / gzip KB",
            "result": "400.12 / 116.05",
            "boundary": "Budget 450 / 130 KB"
          }
        },
        {
          "id": "6",
          "cells": {
            "check": "Lazy dashboard raw / gzip KB",
            "result": "≈27 / ≈10.4",
            "boundary": "Source application only"
          }
        },
        {
          "id": "7",
          "cells": {
            "check": "Snapshot bytes / gzip bytes",
            "result": "771155 / 119539",
            "boundary": "Immutable source publication"
          }
        },
        {
          "id": "8",
          "cells": {
            "check": "Scenario mean / browser capacity change",
            "result": "≈0.356 ms / 35.1 ms",
            "boundary": "Local, not hosting guarantees"
          }
        },
        {
          "id": "9",
          "cells": {
            "check": "Source npm audit",
            "result": "1 pre-existing high advisory",
            "boundary": "Unresolved here; Portfolio audited separately"
          }
        }
      ]
    },
    {
      "caption": "Exact source-bound IDs for both capacity-5 strategies",
      "columns": [
        {
          "key": "mode",
          "label": "Mode"
        },
        {
          "key": "strategy",
          "label": "Strategy"
        },
        {
          "key": "row",
          "label": "Source row"
        },
        {
          "key": "district",
          "label": "District"
        },
        {
          "key": "village",
          "label": "Village"
        },
        {
          "key": "candidateId",
          "label": "Exact candidate ID"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #114",
            "district": "Da’an",
            "village": "Xinlong (新龍里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1"
          }
        },
        {
          "id": "2",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #1",
            "district": "Shilin",
            "village": "Sanyu (三玉里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1"
          }
        },
        {
          "id": "3",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #59",
            "district": "Datong",
            "village": "Bao’an (保安里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1"
          }
        },
        {
          "id": "4",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #60",
            "district": "Datong",
            "village": "Nanfang (南芳里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1"
          }
        },
        {
          "id": "5",
          "cells": {
            "mode": "A",
            "strategy": "Evidence-first",
            "row": "A #66",
            "district": "Datong",
            "village": "Chongqing (重慶里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1"
          }
        },
        {
          "id": "6",
          "cells": {
            "mode": "A",
            "strategy": "Balanced",
            "row": "A #147",
            "district": "Zhongshan",
            "village": "Xiapi (下埤里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0147:ff2f1ecb38171f7e34b0f9e211d0821a0c9598ecc933952ef0696e98bb3a6023:1"
          }
        },
        {
          "id": "7",
          "cells": {
            "mode": "A",
            "strategy": "Balanced",
            "row": "A #190",
            "district": "Zhongzheng",
            "village": "Wenbei (文北里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0190:924f47d87572beefc9ee16e6a76b8e55ad2eb91232b60b9f0a07f961f37be6d3:1"
          }
        },
        {
          "id": "8",
          "cells": {
            "mode": "A",
            "strategy": "Balanced",
            "row": "A #431",
            "district": "Xinyi",
            "village": "Taihe (泰和里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0431:8491dfc6e35b16d647ac2a80ba68a8499185f9cf7b87cf9d5b0aebb89dd2472e:1"
          }
        },
        {
          "id": "9",
          "cells": {
            "mode": "A",
            "strategy": "Balanced",
            "row": "A #226",
            "district": "Neihu",
            "village": "Anhu (安湖里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0226:7bff6c57fdaad70fe074887970a1c90f00c59376b4134649b1ac4fedf8042e2c:1"
          }
        },
        {
          "id": "10",
          "cells": {
            "mode": "A",
            "strategy": "Balanced",
            "row": "A #319",
            "district": "Beitou",
            "village": "Yonghe (永和里)",
            "candidateId": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0319:34cd86bda144e93a76e8d245606fb6f3081bfe7ddcbf0b247b5b024f2e8fac35:1"
          }
        },
        {
          "id": "11",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #1",
            "district": "Shilin",
            "village": "Fu’an (福安里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0001:54e6eeb5ea7c9c2081182d81f6e9cc468919a972592b3fa6b85bc10b2e9a7c87:1"
          }
        },
        {
          "id": "12",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #2",
            "district": "Shilin",
            "village": "Dehua (德華里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0002:8b1baca7f1aaeb0c5e02a59359595f0ffc8a2766b1abae6c2a374594814b3f2e:1"
          }
        },
        {
          "id": "13",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #3",
            "district": "Shilin",
            "village": "Shezi (社子里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0003:3adbd77d18421da522e6a7d1dfab02dd9ed42fe20472aa5bacf808da454d3d6e:1"
          }
        },
        {
          "id": "14",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #4",
            "district": "Shilin",
            "village": "Lanya (蘭雅里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0004:b8fb2a9431ca506fcb24cfb6f46af9ae64ba18203d88f3efa708d4b08e352f71:1"
          }
        },
        {
          "id": "15",
          "cells": {
            "mode": "B",
            "strategy": "Evidence-first",
            "row": "B #5",
            "district": "Shilin",
            "village": "Tianhe (天和里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0005:336024b3b87346ad440c8b71c2b73598baa34141152c87e8d08f140e91b02103:1"
          }
        },
        {
          "id": "16",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #33",
            "district": "Zhongshan",
            "village": "Zhongzhuang (中庄里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0033:ec4ef1b1960bdc0a3f7c8c3ff7f98e8e7a205984e6fbd0553969cf58dabc11a6:1"
          }
        },
        {
          "id": "17",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #41",
            "district": "Zhongzheng",
            "village": "Xia’an (廈安里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0041:ed2743952676a1450225ab4a093dcf4bb0929a0eb63a293747a60564ae1be162:1"
          }
        },
        {
          "id": "18",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #75",
            "district": "Xinyi",
            "village": "Li’an (黎安里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0075:89b3bc99e4ba63f1d813f2f7a4ff71665cf3341391529498670c17b590ade727:1"
          }
        },
        {
          "id": "19",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #47",
            "district": "Neihu",
            "village": "Ziyang (紫陽里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0047:833cf3122c1f21f86fb96c634932b8969c3f50d4ee6e777c99eff9fb3c63f98b:1"
          }
        },
        {
          "id": "20",
          "cells": {
            "mode": "B",
            "strategy": "Balanced",
            "row": "B #65",
            "district": "Beitou",
            "village": "Yongxin (永欣里)",
            "candidateId": "B:c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7:0065:32e0a80a438d88cf934f1811b88db86f4db9400c6755f260b844817cf587acd5:1"
          }
        }
      ]
    },
    {
      "caption": "Exact IDs behind the nine recorded sensitivity comparisons",
      "columns": [
        {
          "key": "scope",
          "label": "Source scope"
        },
        {
          "key": "category",
          "label": "Category text"
        },
        {
          "key": "selectedIds",
          "label": "Selected IDs"
        },
        {
          "key": "sharedIds",
          "label": "Shared IDs"
        },
        {
          "key": "addedIds",
          "label": "Added IDs"
        },
        {
          "key": "removedIds",
          "label": "Removed IDs"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "scope": "PDF-only",
            "category": "All text categories",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0208:060c8b2b0bb06d0a64b4cab725e0db14deeb2591bba13d0c03becf1d46ff4754:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0229:4da94742b203ae757541860c2a98c7ca93ca4b5022e1555b04c5340e2a3ae742:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0332:c22cd356a25479c4975d0d6c17dd72164c0a3309503d90e93023696be6c44447:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0208:060c8b2b0bb06d0a64b4cab725e0db14deeb2591bba13d0c03becf1d46ff4754:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0229:4da94742b203ae757541860c2a98c7ca93ca4b5022e1555b04c5340e2a3ae742:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0332:c22cd356a25479c4975d0d6c17dd72164c0a3309503d90e93023696be6c44447:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1"
          }
        },
        {
          "id": "2",
          "cells": {
            "scope": "PDF-only",
            "category": "Care-point text",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0208:060c8b2b0bb06d0a64b4cab725e0db14deeb2591bba13d0c03becf1d46ff4754:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0229:4da94742b203ae757541860c2a98c7ca93ca4b5022e1555b04c5340e2a3ae742:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0332:c22cd356a25479c4975d0d6c17dd72164c0a3309503d90e93023696be6c44447:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0208:060c8b2b0bb06d0a64b4cab725e0db14deeb2591bba13d0c03becf1d46ff4754:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0229:4da94742b203ae757541860c2a98c7ca93ca4b5022e1555b04c5340e2a3ae742:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0332:c22cd356a25479c4975d0d6c17dd72164c0a3309503d90e93023696be6c44447:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1"
          }
        },
        {
          "id": "3",
          "cells": {
            "scope": "PDF-only",
            "category": "Learning-school text",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0012:8616f5afca584c0adf81a2f5355b024556256458898357d9607b4dd97d52ec07:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0013:f21acbd5aa0a4c9628b02ffcbc4b4802eff736d629403cfb097a41ac67443b7c:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0016:1f86652b47ab56c1385285b63a7ef1be2ab5de271139be9093b6776be2058b04:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0024:5935be152d572520133b39b7c8ed2a408a64bf068d98217f3ac27c69710eaa17:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0030:c846fbec74243965bbcd21e9353b607a0366bd62bab32d46bd0e82ef4fd8a336:1",
            "sharedIds": "None",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0012:8616f5afca584c0adf81a2f5355b024556256458898357d9607b4dd97d52ec07:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0013:f21acbd5aa0a4c9628b02ffcbc4b4802eff736d629403cfb097a41ac67443b7c:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0016:1f86652b47ab56c1385285b63a7ef1be2ab5de271139be9093b6776be2058b04:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0024:5935be152d572520133b39b7c8ed2a408a64bf068d98217f3ac27c69710eaa17:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0030:c846fbec74243965bbcd21e9353b607a0366bd62bab32d46bd0e82ef4fd8a336:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1"
          }
        },
        {
          "id": "4",
          "cells": {
            "scope": "Accepted A/E",
            "category": "All text categories",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0072:8296d6596378603b882cab852ed95d3b666ad9dafd4230d01c95aafabeac5fd1:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0072:8296d6596378603b882cab852ed95d3b666ad9dafd4230d01c95aafabeac5fd1:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1"
          }
        },
        {
          "id": "5",
          "cells": {
            "scope": "Accepted A/E",
            "category": "Care-point text",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0072:8296d6596378603b882cab852ed95d3b666ad9dafd4230d01c95aafabeac5fd1:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0072:8296d6596378603b882cab852ed95d3b666ad9dafd4230d01c95aafabeac5fd1:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1"
          }
        },
        {
          "id": "6",
          "cells": {
            "scope": "Accepted A/E",
            "category": "Learning-school text",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0012:8616f5afca584c0adf81a2f5355b024556256458898357d9607b4dd97d52ec07:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0013:f21acbd5aa0a4c9628b02ffcbc4b4802eff736d629403cfb097a41ac67443b7c:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0016:1f86652b47ab56c1385285b63a7ef1be2ab5de271139be9093b6776be2058b04:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0024:5935be152d572520133b39b7c8ed2a408a64bf068d98217f3ac27c69710eaa17:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0030:c846fbec74243965bbcd21e9353b607a0366bd62bab32d46bd0e82ef4fd8a336:1",
            "sharedIds": "None",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0012:8616f5afca584c0adf81a2f5355b024556256458898357d9607b4dd97d52ec07:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0013:f21acbd5aa0a4c9628b02ffcbc4b4802eff736d629403cfb097a41ac67443b7c:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0016:1f86652b47ab56c1385285b63a7ef1be2ab5de271139be9093b6776be2058b04:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0024:5935be152d572520133b39b7c8ed2a408a64bf068d98217f3ac27c69710eaa17:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0030:c846fbec74243965bbcd21e9353b607a0366bd62bab32d46bd0e82ef4fd8a336:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1"
          }
        },
        {
          "id": "7",
          "cells": {
            "scope": "Broad review",
            "category": "All text categories",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "None",
            "removedIds": "None"
          }
        },
        {
          "id": "8",
          "cells": {
            "scope": "Broad review",
            "category": "Care-point text",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "sharedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1",
            "addedIds": "None",
            "removedIds": "None"
          }
        },
        {
          "id": "9",
          "cells": {
            "scope": "Broad review",
            "category": "Learning-school text",
            "selectedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0096:20f236a5ff60353e06f76ea5766860f9fe213e77a948f434ea3abdf0f1cc3d85:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0140:88a3bcd33dbef4218bf664fc3ed9f48c65aa65ba758a61d0a5695b390ddf556a:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0147:ff2f1ecb38171f7e34b0f9e211d0821a0c9598ecc933952ef0696e98bb3a6023:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0209:75327893b27e35ca16fc99305096559ca6ac34dfe230a648748a4799a45d7943:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0263:5745f9dcfbd686430223b62fa008594b6613562947e8b8b91853d10239080734:1",
            "sharedIds": "None",
            "addedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0096:20f236a5ff60353e06f76ea5766860f9fe213e77a948f434ea3abdf0f1cc3d85:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0140:88a3bcd33dbef4218bf664fc3ed9f48c65aa65ba758a61d0a5695b390ddf556a:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0147:ff2f1ecb38171f7e34b0f9e211d0821a0c9598ecc933952ef0696e98bb3a6023:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0209:75327893b27e35ca16fc99305096559ca6ac34dfe230a648748a4799a45d7943:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0263:5745f9dcfbd686430223b62fa008594b6613562947e8b8b91853d10239080734:1",
            "removedIds": "A:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0114:a382ed6d906c5c313e3bfcb4bc359db10a17ea7b4c837087184399e37e46d2fb:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0001:93d6c283a994775d7332a327149b50dd82ddf03c0a4c4f4386de11803bda6a27:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0059:a003356dfe0a02d1e43a6dfe2fa334f0cf62e80fc5842caa8e45c3cc30a93180:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0060:c48ef6c5ca6a0d8102e6d531ed75abc8629162f4c964eaa159c1e6f7d3bb5433:1\nA:26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2:0066:c3c0cad58a6b5d482bf48262b13020204b2c3a3e8036c577699cdeebb96d6568:1"
          }
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": "Official care-site source page",
      "url": "https://dosw.gov.taipei/News_Content.aspx?n=222C9779823FA161&s=0CE286F6AA2F930F&sms=E2A8B6B533500CB0"
    },
    {
      "label": "Official unbuilt-village source page",
      "url": "https://dosw.gov.taipei/News_Content.aspx?n=63FBD779B8854D69&s=207B5C83CE31EEAE"
    },
    {
      "label": "Official programme implementation plan",
      "url": "https://laws.gov.taipei/Law/LawSearch/LawArticleContent/FL078396"
    },
    {
      "label": "Source feasibility and edition audit",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-source-feasibility.md"
    },
    {
      "label": "PDF extraction controls",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-pdf-extraction-audit.md"
    },
    {
      "label": "Source-bound identity contract",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-identity-contract.md"
    },
    {
      "label": "Review methodology",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-methodology.md"
    },
    {
      "label": "Traditional Chinese implementation study",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-decision-mvp.zh-TW.md"
    },
    {
      "label": "All baseline results and selected IDs",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-results.json"
    },
    {
      "label": "Recorded performance and sensitivity",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-performance.json"
    },
    {
      "label": "Accepted original-source manifest",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/data/raw/senior-care-policy/manifest.json"
    },
    {
      "label": "Hash-bound extraction audit",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/data/raw/senior-care-policy/extraction-audit.json"
    },
    {
      "label": "Immutable publication pointer",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/public/policy/senior-care-policy/current.json"
    },
    {
      "label": "Immutable policy snapshot",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/public/policy/senior-care-policy/snapshot-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c.json"
    },
    {
      "label": "Deterministic Python parser",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/scripts/seniorCarePolicyPdf.py"
    },
    {
      "label": "Offline reconciliation and publication",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/scripts/buildSeniorCarePolicySnapshot.ts"
    },
    {
      "label": "Scenario and safe-export implementation",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/lib/seniorCarePolicy.ts"
    },
    {
      "label": "Integrity-checked local loader",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/lib/loadSeniorCarePolicy.ts"
    },
    {
      "label": "Bilingual review dashboard",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/SeniorCarePolicyDashboard.tsx"
    },
    {
      "label": "Parser/acquisition regression tests",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/scripts/seniorCarePolicyPdf.test.py"
    },
    {
      "label": "Identity, scenario and export tests",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/lib/seniorCarePolicy.test.ts"
    },
    {
      "label": "Policy browser regression checks",
      "url": "https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/tests/e2e/senior-care-policy.spec.ts"
    },
    {
      "label": "Reviewed English desktop capture — local pinned research interface",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-en-1440.png"
    },
    {
      "label": "Reviewed Chinese desktop capture — local pinned research interface",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-zh-1440.png"
    },
    {
      "label": "Reviewed Chinese mobile capture — local pinned research interface",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-zh-390.png"
    }
  ],
  "previewAssets": [
    {
      "label": "Reviewed English desktop capture — local pinned research interface",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-en-1440.png"
    },
    {
      "label": "Reviewed Chinese desktop capture — local pinned research interface",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-zh-1440.png"
    },
    {
      "label": "Reviewed Chinese mobile capture — local pinned research interface",
      "url": "https://github.com/LEO0331/portfolio/blob/d91640f77d9880cf01c552356e322324d8916dd0/src/assets/images/govtech/senior-care-zh-390.png"
    }
  ],
  "futureExtensions": [
    "Reviewed source refresh and steward confirmation of association/category questions",
    "Compatible authoritative village registry and separately validated geography",
    "Privacy-reviewed operating, capacity, utilization and access evidence before Mode C"
  ],
  "methodology": {
    "kind": "rule-based-priority",
    "methodId": "senior-community-care-evidence-review-v1",
    "explanation": "First-match documentary tiers, explicit eligibility filters, then evidence-first or district round-robin. No weighted allocation, vulnerability score or resident-demand model.",
    "thresholds": {
      "caption": "Eligibility and strategy rules",
      "columns": [
        {
          "key": "rule",
          "label": "Rule"
        },
        {
          "key": "behavior",
          "label": "Implemented behavior"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "rule": "Mode A",
            "behavior": "520 A rows; filter scope before selection"
          }
        },
        {
          "id": "2",
          "cells": {
            "rule": "Mode B",
            "behavior": "88 verified unique documentary keys"
          }
        },
        {
          "id": "3",
          "cells": {
            "rule": "Evidence-first",
            "behavior": "Tier then stable ID; B baseline source order"
          }
        },
        {
          "id": "4",
          "cells": {
            "rule": "Balanced",
            "behavior": "District round-robin; tier/ID order inside district"
          }
        },
        {
          "id": "5",
          "cells": {
            "rule": "Capacity",
            "behavior": "5 / 10 / all; bounded by eligible count"
          }
        },
        {
          "id": "6",
          "cells": {
            "rule": "Mode C",
            "behavior": "Unavailable: operating, capacity, access and outcome evidence missing"
          }
        }
      ]
    },
    "tiers": {
      "caption": "Mode A broad-review evidence tiers",
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
          "key": "question",
          "label": "Review question"
        }
      ],
      "rows": [
        {
          "id": "1",
          "cells": {
            "tier": "A",
            "count": "1",
            "question": "Primary identity / material association conflict"
          }
        },
        {
          "id": "2",
          "cells": {
            "tier": "B",
            "count": "61",
            "question": "Other documentary, type, session or edition questions"
          }
        },
        {
          "id": "3",
          "cells": {
            "tier": "C",
            "count": "458",
            "question": "Routine documentation verification"
          }
        }
      ]
    },
    "notes": [
      "A 1 / B 61 / C 458 are documentary questions, not care quality.",
      "Changing source scope can change tiers as well as eligibility; retain exact settings.",
      "No complete village denominator, geographic access model or demographic scoring."
    ]
  }
};
