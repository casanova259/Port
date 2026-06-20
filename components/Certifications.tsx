import { certifications } from "@/lib/data";
import { Panel } from "./Panel";

export function Certifications() {
  return (
    <Panel title="Certifications" id="certifications">
      <ul className="space-y-2 text-sm text-fg/90">
        {certifications.map((cert) => (
          <li key={cert} className="flex gap-3">
            <span className="mt-0.5 text-accent">›</span>
            <span>{cert}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
