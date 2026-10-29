import { useState } from "react";
import { createRoot } from "react-dom/client";
import { InteractiveExplorer, type ExplorerGroup, type ExplorerLabels, type ExplorerNode, type ExplorerView } from "../../../src/components/explorer";

// This fixture deliberately has no router, locale provider, Tailwind or civic data.
const extras: ExplorerNode[] = new URLSearchParams(location.search).has("many") ? Array.from({ length: 8 }, (_, index) => ({ id: `extra-${index}`, groupId: "tools", label: `Additional resource ${index + 1}`, target: { href: `#extra-${index}` } })) : [];
const defaultNodes: ExplorerNode[] = [
  { id: "inspect", groupId: "tools", label: "Inspect inputs", description: "Inspect a retained fixture.", target: { href: "#inspect" } },
  { id: "extract", groupId: "tools", label: "Extract records", target: { href: "#extract" } },
  { id: "alerts", groupId: "tools", label: "Review alerts", category: "warnings", target: { href: "#alerts" } },
  { id: "run-log", groupId: "tools", label: "Run log", target: { href: "#run-log" } },
  { id: "tasks", groupId: "operations", label: "Tasks", target: { href: "#tasks" } }, ...extras
];
const defaultGroups: ExplorerGroup[] = [
  { id: "tools", label: "Review tools", nodeIds: ["run-log", "inspect", "extract", "alerts", ...extras.map(node => node.id)], visual: { color: "#39756b", motif: 0 } },
  { id: "operations", label: "Operations", nodeIds: ["tasks"], visual: { color: "#426e96", motif: 2 } }
];
const manyGroups = new URLSearchParams(location.search).has("many-groups");
const nodes: ExplorerNode[] = manyGroups ? Array.from({ length: 12 }, (_, index) => ({ id: `resource-${index}`, groupId: `group-${index}`, label: `Resource ${index + 1}`, target: { href: `#resource-${index}` } })) : defaultNodes;
const groups: ExplorerGroup[] = manyGroups ? nodes.map((node, index) => ({ id: node.groupId, label: `Resource group ${index + 1}`, nodeIds: [node.id], visual: { color: index % 2 ? "#426e96" : "#39756b" } })) : defaultGroups;

const labels: ExplorerLabels = {
  viewMode: "View", scene: "Islands", list: "List", listTitle: "All resources", search: "Find resources", searchPlaceholder: "Search", filter: "Group", all: "All groups",
  reset: "Reset", back: "Overview", overview: "Resource overview", instructions: "Choose a group", selectedGroup: "Selected group", next: "Choose a resource",
  empty: "No resources", clear: "Clear", full: "Open resource", detail: "Resource details", close: "Close resource",
  formatCount: (count, total) => `${count} of ${total} resources`, formatGroupCount: (count, total) => `${count} of ${total}`
};
function Host({ name }: { name: string }) {
  const [group, setGroup] = useState<string>();
  const [selected, setSelected] = useState<string>();
  const [view, setView] = useState<ExplorerView>("scene");
  const [query, setQuery] = useState("");
  const [navigated, setNavigated] = useState("");
  const params = new URLSearchParams(location.search);
  return <section aria-label={name}>
    <InteractiveExplorer nodes={nodes} groups={groups} labels={labels} view={view} selectedGroupId={group} selectedNodeId={selected}
      search={{ value: query, onChange: value => { setQuery(value); setSelected(undefined); } }}
      onSelectGroup={id => { setGroup(id); setSelected(undefined); }} onSelectNode={id => { setSelected(id); if (id) setGroup(nodes.find(node => node.id === id)!.groupId); }}
      onViewChange={setView} onReset={() => { setGroup(undefined); setSelected(undefined); setQuery(""); }}
      onNavigate={params.has("native") ? undefined : node => setNavigated(node.id)}
      renderDetail={params.has("no-detail") ? undefined : (node, { onClose }) => <div><p>{node.description ?? node.label}</p><button type="button" onClick={onClose}>Finish reviewing</button></div>}
    />
    <output aria-label="Navigation callback">{navigated}</output>
  </section>;
}
createRoot(document.getElementById("root")!).render(<><Host name="Primary host" />{new URLSearchParams(location.search).has("second") && <Host name="Second host" />}</>);
