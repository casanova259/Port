import { getActivityLevels } from "@/lib/activity";
import { Panel } from "./Panel";

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
      <div className="overflow-x-auto pb-2">
        <div
          className="grid w-max gap-[3px]"
          style={{
            gridTemplateRows: "repeat(7, 10px)",
            gridAutoFlow: "column",
            gridAutoColumns: "10px",
          }}
        >
          {levels.map((level, i) => (
            <span
              key={i}
              className={`h-[10px] w-[10px] rounded-[2px] ${LEVEL_CLASSES[level]}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
        <span>{total} sample contributions</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          {LEVEL_CLASSES.map((cls, i) => (
            <span key={i} className={`h-[10px] w-[10px] rounded-[2px] ${cls}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </Panel>
  );
}
