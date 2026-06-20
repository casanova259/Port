import { links } from "@/lib/data";
import { Panel } from "./Panel";

export function Connect() {
  return (
    <Panel title="Connect" id="connect">
      <div className="flex flex-wrap gap-2.5">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-edge bg-panel px-3 py-1.5 text-xs text-fg/90 transition-colors hover:border-accent hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Panel>
  );
}
