# Reusable React Explorer interface

Entry point: `src/components/explorer/index.ts`. Runtime dependency: React. The component imports its own scoped CSS; it does not require React Router, a locale provider, Tailwind, GovTech records, a backend or a renderer library. Typography is inherited; `.dark` on an ancestor activates the existing dark palette. The `civic-*` class namespace is retained for visual compatibility, not data coupling.

## Data contracts

`ExplorerNode` has a unique `id`, owning `groupId`, localized `label`, native navigation `target.href`, optional `description`, predefined `icon` motif (0–5), `category`, `caption`, `indexLabel`, derived `searchText` and presentation-only `visualState` (`default`, `selected`, `inactive`). Selection behavior comes from the controlled `selectedNodeId`; visual state alone does not open details.

`ExplorerGroup` has a unique `id`, localized `label`, optional explanatory `description`, ordered `nodeIds` and `visual` configuration: color, optional motif/short visual label, desktop percentage position and mobile percentage position. Positions are deterministic presentation coordinates, never geographic or relationship evidence. Missing positions use a deterministic layout. Multi-row automatic group overviews cap tile width so painted labels/captions remain reachable; reviewed explicitly positioned civic groups keep their existing composition. Larger groups expand the row-height budget instead of overflowing a three-node arrangement.

`validateExplorerModel(nodes, groups)` reports duplicate identities/memberships, unknown/mismatched ownership, missing labels/targets and malformed coordinate pairs and non-finite/out-of-range coordinates. A supplied position must be a plain two-value array; empty, short, long, sparse and nonnumeric pairs are rejected for desktop and mobile layouts. Omit the property to use automatic placement. Run it in the host's adapter tests or initialization. Each node must belong to exactly its declared group. Independent nodes may share a repository or navigation target; those are not identity keys. This validates a constructed typed model, not arbitrary unknown JSON; parse untrusted input before creating the model. The helper does not certify safe URLs or scientifically meaningful geometry: supply reviewed URLs and host-appropriate presentation coordinates.

`filterExplorerNodes` supports literal multi-word search across labels, descriptions, categories, captions and derived metadata, with a group filter. A custom `search.match(node, query)` can replace the default matching rule. `orderedGroupNodes` preserves declared group order without mutating caller arrays or copying the content records.

## Controlled interaction props

```tsx
<InteractiveExplorer
  nodes={nodes}
  groups={groups}
  labels={localizedLabels}
  view={view}
  selectedGroupId={groupId}
  selectedNodeId={nodeId}
  search={{ value: query, onChange: setQuery }}
  onSelectGroup={selectGroup}
  onSelectNode={selectNode}
  onViewChange={setView}
  onReset={reset}
  onNavigate={node => navigateToReviewedTarget(node.target.href)}
  renderDetail={(node, { onClose }) => (
    <ResourceDetails resourceId={node.id} onClose={onClose} />
  )}
/>
```

The host owns state. `onSelectGroup(undefined)` returns to overview; `onSelectNode(undefined)` dismisses details. `onReset` lets the host decide whether to retain the view. `ExplorerLabels` supplies all visible/control/status text and count formatters, including search/filter/view/empty/reset/full-link/detail/close labels. The generic components do not assume a locale, six groups, thirteen nodes or a policy vocabulary.

`renderDetail` is optional. The Explorer owns its aside, unique heading ID, native close button and selected-label heading, then renders the slot. The slot receives `headingId` and `onClose`; return a component when hooks or async IO are needed. `renderOverview` optionally supplies host-specific guidance when there is no rendered detail. Omitting both yields a single-column browser. No generic component fetches data.

`onNavigate` is optional and intercepts only an unmodified primary activation of an explicit list/full-navigation anchor. Scene selection invokes `onSelectNode`; it does not imply navigation. Modified clicks retain the real anchor URL and normal browser behavior. If omitted, native navigation remains fully usable. Supply URLs containing the host's deployment base; do not rely on click interception to repair a wrong URL. The independent fixture demonstrates native hash navigation without a router.

The component handles keyboard, native buttons, semantic HTML list/details, live match/group announcements, unique instance IDs, visible focus, Escape and semantic focus restoration. Return targets are found by node ID in the current view, including history-driven deselection. Search/filter controls retain focus when they intentionally dismiss details. When a selected node is filtered out, dismissal returns to the clear action. The host should update controlled state synchronously and keep stable IDs across views/locales.

## Portfolio adapter boundary

`src/data/govtechExplorerAdapter.ts` derives nodes and six groups from the existing case registry/summaries/overview tuples. It adds no long-form copy or policy claims. It supplies reviewed case-to-domain IDs, localized labels, derived search metadata and root/Pages-safe full-case targets. Feitsui's heavy-rain and river studies remain separate nodes; the same applies to other shared repositories.

`GovTechExplorerPage` owns URL parse/serialize, query-free canonical metadata, locale and router navigation. `ExplorerDetailPanel` owns selected-case evidence IO and original overview/maturity/source content. The generic folder imports none of these. The former civic scene/list/control implementations and duplicate civic search implementation are removed rather than retained alongside the generic renderer.

## Verified reuse and second-repository integration

As of 2026-10-29, Dashboard PRs #6–8 are merged. That host reused the MIT-attributed hexagonal geometry with its own React 19 catalogue/tab interface; it did not adopt this complete controlled React 18 API. Both adapters remain independent. The following steps still describe an integration trial for the full component folder, not an assertion that Dashboard runs it. See the [maintenance handoff](./civic-explorer-maintenance.md) for current ownership and release limits.

1. Bring the `src/components/explorer` folder into the other React + TypeScript build with CSS import support. Do not publish a package yet.
2. Define a host adapter producing reviewed `ExplorerNode[]`, `ExplorerGroup[]` and `ExplorerLabels`. Preserve the host's own IDs and content references; run model validation in its tests.
3. Connect controlled state to the host's router or local state. Resolve real deployment-base URLs before rendering anchors. Keep canonical routes independent of transient query state where applicable.
4. Supply a host-specific detail component and optional navigation callback. Keep IO, authorization and data refresh outside the generic component.
5. Retain the HTML list, keyboard/focus, reduced-motion and label/caption hit-target tests. Verify long labels, larger groups, multiple instances, narrow widths and the actual host theme. Review any explicitly supplied positions.

The test-only `tests/fixtures/explorer-host` is a separate plain React entry point: no Portfolio router, locale provider, civic registry or Tailwind. Its real production build exercises five nodes, thirteen nodes with a twelve-node selected group, and twelve independent automatic groups, ordered groups, optional detail/native navigation, callback navigation, multiple instances and mobile/desktop layouts. It is not included in the Portfolio build or sitemap and is not an integration into another repository.

Status: suitable for a second host's integration trial, backed by the independent fixture and documented contract. The target dashboard's real data, styling, routing, security and browser acceptance still require its own review; they have not been implemented or certified by this PR.

## Current acceptance scope

Completed2026-10-29 against merged v3.0 main 7743cf6. The current gate passes43Node unit tests and 281Playwright tests, including generic model/adapter boundaries and the independent host. Both deployment bases pass80Explorer states plus44route outcomes. The six-domain desktop overview remains byte-identical under the paired local capture conditions. See [stabilization evidence](./portfolio-v3.0.1-stabilization.md). React18 and the repository TypeScript/Vite setup were exercised; another React version, bundler, theme or real dashboard still needs its own integration acceptance. No package or second-repository modification is delivered.
