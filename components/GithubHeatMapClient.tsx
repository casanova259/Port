"use client";

import { useState } from "react";
import { HeatmapDay } from "./GIthubHeatMap";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getFallback(): HeatmapDay[] {
    const days: HeatmapDay[] = [];
    let seed = 1337;
    const start = new Date();
    start.setFullYear(start.getFullYear() - 1);
    start.setDate(start.getDate() - start.getDay());
    for (let i = 0; i < 371; i++) {
        seed = (seed * 9301 + 49297) % 233280;
        const r = seed / 233280;
        const level = (r < 0.45 ? 0 : r < 0.7 ? 1 : r < 0.86 ? 2 : r < 0.96 ? 3 : 4) as HeatmapDay["level"];
        const d = new Date(start);
        d.setDate(d.getDate() + i);
        days.push({ date: d.toISOString().slice(0, 10), count: level * 3, level });
    }
    return days;
}

export function GitHubHeatmapClient({
    data,
    accentClass,
}: {
    data: { days: HeatmapDay[]; total: number } | null;
    accentClass: string;
}) {
    const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

    const days = data?.days ?? getFallback();
    const total = data?.total ?? null;

    const levelClasses = [
        "bg-zinc-800",
        `${accentClass} opacity-25`,
        `${accentClass} opacity-45`,
        `${accentClass} opacity-70`,
        accentClass,
    ];

    const weeks: HeatmapDay[][] = [];
    for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

    const monthLabels: { label: string; col: number }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
        const m = new Date(week[0].date).getMonth();
        if (m !== lastMonth) { monthLabels.push({ label: MONTHS[m], col: wi }); lastMonth = m; }
    });

    return (
        <div className="relative">
            {tooltip && (
                <div
                    className="pointer-events-none absolute z-50 -translate-y-full rounded border border-zinc-700 bg-zinc-900 px-2 py-1 font-mono text-xs text-zinc-200 shadow"
                    style={{ left: tooltip.x, top: tooltip.y - 4 }}
                >
                    {tooltip.text}
                </div>
            )}

            <div className="w-full overflow-hidden">
                <div className="w-full">
                    <div className="relative mb-1 h-4">
                        {monthLabels.map((m, i) => (
                            <span
                                key={i}
                                className="absolute font-mono text-[10px] text-zinc-500"
                                style={{ left: m.col * 13 }}
                            >
                                {m.label}
                            </span>
                        ))}
                    </div>

                    <div
                        className="grid gap-[3px]"
                        style={{
                            gridTemplateColumns: `repeat(${weeks.length}, 10px)`,
                            gridTemplateRows: "repeat(7, 10px)",
                            gridAutoFlow: "column",
                        }}
                    >
                        {days.map((day) => (
                            <span
                                key={day.date}
                                className={`h-[10px] w-[10px] cursor-default rounded-[2px] transition-opacity hover:opacity-60 ${levelClasses[day.level]}`}
                                onMouseEnter={(e) => {
                                    const cell = e.currentTarget.getBoundingClientRect();
                                    const wrap = e.currentTarget.closest(".relative")!.getBoundingClientRect();
                                    setTooltip({
                                        text: `${day.count} contribution${day.count !== 1 ? "s" : ""} · ${day.date}`,
                                        x: cell.left - wrap.left,
                                        y: cell.top - wrap.top,
                                    });
                                }}
                                onMouseLeave={() => setTooltip(null)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-zinc-500">
                <span>
                    {total !== null
                        ? `${total} contributions in the last year`
                        : "add GITHUB_TOKEN to .env.local for real data"}
                </span>
                <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    {levelClasses.map((cls, i) => (
                        <span key={i} className={`h-[10px] w-[10px] rounded-[2px] ${cls}`} />
                    ))}
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}