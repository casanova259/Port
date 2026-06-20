import { quote } from "@/lib/data";

export function Quote() {
  return (
    <div className="border-x border-t border-edge px-6 py-12 text-center">
      <p className="mx-auto max-w-xl text-balance text-base italic text-fg/90 sm:text-lg">
        “{quote.text}”
      </p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-edge" />
        <span className="font-display text-xs uppercase tracking-widest text-muted">
          {quote.author}
        </span>
        <span className="h-px w-8 bg-edge" />
      </div>
    </div>
  );
}
