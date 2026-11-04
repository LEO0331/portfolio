# Civic Explorer audit archive

This archive centralizes the durable results and manual verification workflow for seven independent Git repositories. Portfolio hosts the consolidated record; each project retains its own code, source-data custody, operating instructions and release responsibility.

## Timeline

| Record | Meaning |
| --- | --- |
| [November 2 seven-repository audit](./2026-11-02-seven-repository-audit.md) | Historical baseline and first remediation register. Its failed release and pending-PR statements describe that assessment. |
| [November 3 production closure](./2026-11-03-production-closure.md) | Historical hosted verification. Final conclusion was **NOT_READY** because five workers deleted sibling caches and two civic datasets were missing; it also recorded layout and notice gaps. Crash was corrected externally during that assessment. |
| [November 4 correction register](./2026-11-04-remediation.md) | The subsequent source corrections and actual verification evidence, linked to immutable implementation commits. A pushed correction is not automatically merged or deployed. |
| [Verification workflow](./workflow.md) | Repeatable read-only closure, evidence boundaries, remediation isolation and freeze criteria. This is a manual workflow, not a scheduled job. |

Historical reports are retained as dated records, including their limitations and corrections. Read the correction register before treating a historical finding as still present in source. Repeat production acceptance against the actual deployed SHA before declaring it closed in production.

## What belongs here

Keep concise findings, severity/disposition, full SHAs, immutable GitHub links, verification commands/results, approved data exceptions and accepted limitations. Important evidence must have a durable summary even if a CI artifact later expires.

The imported historical reports refer to the original external evidence archive by filenames. Their raw logs, screenshots, browser traces, dependency folders, builds and downloaded datasets are not copied here. This archive does not replace source custody or operational handoffs inside the individual repositories.

For each new assessment, add a dated report and update this index. For each correction, record the source commit and distinguish local/CI verification, merge, deployment and actual hosted acceptance. Preserve prior reports rather than rewriting a failed historical result into a passing one.

The machine-readable [correction registry](./remediation-registry.json) carries full commit SHAs and verification limitations. Its status is a dated evidence snapshot, not a live monitor.
