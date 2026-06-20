import { projects } from "@/lib/data";
import { Panel } from "./Panel";

export function Projects() {
  return (
    <Panel title="Projects" id="projects">
      <div className="space-y-8">
        {projects.map((project) => (
          <article key={project.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-medium text-fg">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:text-accent hover:underline"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className="font-mono text-xs text-muted">{project.year}</span>
            </div>

            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-fg/90">
              {project.description.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 text-accent">›</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-edge bg-panel px-1.5 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Panel>
  );
}
