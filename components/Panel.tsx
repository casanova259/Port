import { ReactNode } from "react";

export function Panel({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-x border-edge">
      <header className="border-b border-edge px-5 py-3">
        <h2 className="font-display text-lg uppercase tracking-wide text-fg sm:text-xl">
          {title}
        </h2>
      </header>
      <div className="p-5">{children}</div>
    </section>
  );
}
