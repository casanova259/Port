import { education } from "@/lib/data";
import { Panel } from "./Panel";

export function Education() {
  return (
    <Panel title="Education" id="education">
      <ol className="relative space-y-6 border-l border-edge pl-5">
        {education.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute top-1.5 -left-[23px] h-2 w-2 rounded-full border border-accent bg-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-medium text-fg">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:text-accent hover:underline"
                  >
                    {item.school}
                  </a>
                ) : (
                  item.school
                )}
              </h3>
              <span className="font-mono text-xs text-muted">
                {item.start} — {item.end}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">
              {item.degree} · {item.field}
            </p>
            {item.note && (
              <p className="mt-1 font-mono text-xs text-muted">{item.note}</p>
            )}
          </li>
        ))}
      </ol>
    </Panel>
  );
}
