"use client";

import { useEffect, useState } from "react";

export function TypingTagline({ lines }: { lines: string[] }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const current = lines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 900);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else {
        setLineIndex((i) => (i + 1) % lines.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, lineIndex, lines]);

  return (
    <span className="inline-flex items-center text-sm text-muted">
      <span>{text}</span>
      <span className="cursor-blink ml-0.5 inline-block h-3.5 w-2 bg-accent" />
    </span>
  );
}
