import { experience } from "@/lib/data";
import { Panel } from "./Panel";

export function Experience() {
  return (
    <Panel title="Experience" id="experience">
      <ol className="relative space-y-6 border-l border-edge pl-5">
        {experience.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute top-1.5 -left-[23px] h-2 w-2 rounded-full border border-accent bg-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-medium text-fg">
                {item.role}{" "}
                <span className="text-muted">
                  ·{" "}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:text-accent hover:underline"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </span>
              </h3>
              <span className="font-mono text-xs text-muted">
                {item.start} — {item.end}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">{item.type}</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-edge bg-panel px-1.5 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Panel>
  );
}
