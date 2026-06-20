import { getActivityLevels } from "@/lib/activity";
import { Panel } from "./Panel";
import { GitHubHeatmap } from "./GIthubHeatMap";

const LEVEL_CLASSES = [
  "bg-edge",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

export function Activity() {
  const levels = getActivityLevels();
  const total = levels.reduce((a, b) => a + b, 0);

  return (
    <Panel title="Activity">
      <GitHubHeatmap username="casanova259" accentClass="bg-green-500" />
    </Panel>
  );
}
