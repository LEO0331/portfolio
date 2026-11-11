# Accessibility Evidence & Manual Review Card

**Scope:** the Portfolio Civic Explorer as a catalogue and the separately integrated Public Amenities optional Explorer. **Not:** a formal accessibility compliance certificate or a review of every screen in every linked dashboard.

## Implemented behavior evidenced by source / Phase 2 report

| Behavior | Source of evidence | Acceptance demonstration |
| --- | --- | --- |
| Explorer opens as an optional dialog, while original map remains available | [Phase 2 report](https://github.com/LEO0331/taipei-bin-map/blob/main/docs/civic-explorer-phase-2.md) | Open from header; close by button or Escape |
| HTML list is the default; Scene is an alternative | Same report and [component code](https://github.com/LEO0331/taipei-bin-map/tree/main/src/components/explorer) | Activate every link without relying on graphic geometry |
| Native controls, search/status announcements and bilingual labels | Same report | Inspect keyboard focus and announced names |
| Dialog focus entry/return, in-tab navigation focus to shared heading | Same report | Observe the relevant focus state before and after navigation |
| Reduced-motion, 320/390/768/1280px layouts and touch interaction | Same report | Open local evidence and repeat a compact keyboard check |

## Required presenter-side manual check (not automatically certified)

1. Navigate to the original Public Amenities Map using a keyboard.
2. Tab to **Explore Public Services**; activate with Enter or Space.
3. Confirm focus enters the dialog; reach topic selector, search, list and Close without mouse.
4. Use the HTML list's native **Open module** link and verify the destination is meaningful. Repeat with the visual Scene.
5. Reopen Explorer, press Escape, and ensure focus returns to the launch control.
6. Confirm a chosen facility filter and map zoom/pan did not reset merely because Explorer opened or closed.
7. Switch Chinese/English and verify heading, topic, instruction, result and close labels.
8. Repeat at 320px and 390px with browser zoom; verify no obstructed controls.
9. Turn on reduced motion and review the transition behavior.
10. If a screen reader is available, perform separate NVDA/Chrome and VoiceOver/Safari sessions, noting observed outcomes; **do not invent a result** if not done.

## Limitations to disclose

Phase 2's dated report explicitly says dedicated NVDA/VoiceOver testing and Safari/Firefox testing were **not run**. Its browser observations were local Chromium evidence; it does not claim formal compliance with a Taiwan government accessibility mark or certify every module downstream from the Explorer. Document new manual results with date, OS, browser, assistive-technology version, path and observed issue.

## Review record template

| Field | Fill at presentation / future review |
| --- | --- |
| Date, code/release identity | _Not yet recorded_ |
| Browser and version | _Not yet recorded_ |
| Device / viewport | _Not yet recorded_ |
| Keyboard flows checked | _Not yet recorded_ |
| NVDA/VoiceOver or other assistive technology | _Not yet performed in this package_ |
| Issues and severity | _Record actual observed issues only_ |
| Evidence screenshot/video/log | _Attach only genuine captures_ |

## Project boundary

Accessibility is an active quality requirement for a future real project. Client-specific hosting, security and operational compliance requirements are intentionally outside this **sample demo package** until an actual engagement exists.
