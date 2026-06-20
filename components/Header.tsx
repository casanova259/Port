import { profile } from "@/lib/data";
import { TypingTagline } from "./TypingTagline";

export function Header() {
  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="border-x border-edge">
      {/* decorative dot-grid band */}
      <div className="dot-grid h-16 border-b border-edge sm:h-24" />

      <div className="flex items-start gap-4 p-5 sm:gap-6 sm:p-6">
        {/* avatar */}
        <div className="dot-grid flex aspect-square w-20 shrink-0 items-center justify-center rounded-md border border-edge bg-panel sm:w-28">
          <span className="font-display text-2xl text-accent sm:text-3xl">
            {initials}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1">
          {profile.badge && (
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-edge px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
              <span aria-hidden="true">✕</span>
              {profile.badge}
            </span>
          )}

          <div className="flex items-center justify-between gap-3">
            <h1 className="font-display text-xl leading-none sm:text-2xl">
              {profile.name}
            </h1>
            <span className="font-mono text-xs text-muted">
              {profile.views.toLocaleString()} views
            </span>
          </div>

          {profile.role && <p className="text-sm text-muted">{profile.role}</p>}

          <TypingTagline lines={profile.taglines} />

          <div className="mt-1 flex items-center gap-2 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>{profile.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
