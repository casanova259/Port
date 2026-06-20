import { about } from "@/lib/data";
import { Panel } from "./Panel";

export function About() {
  return (
    <Panel title="About" id="about">
      <ul className="space-y-3 text-sm leading-relaxed text-fg/90">
        {about.map((line, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 text-accent">›</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
