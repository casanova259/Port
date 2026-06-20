/**
 * <GitHubHeatmap username="casanova259" />
 * Self-contained. Drop anywhere.
 * Needs GITHUB_TOKEN in env for real data, otherwise shows fallback.
 */

import { GitHubHeatmapClient } from "./GithubHeatMapClient";

const GITHUB_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const LEVEL_MAP: Record<string, 0 | 1 | 2 | 3 | 4> = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
};

export type HeatmapDay = {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
};

async function fetchContributions(
    username: string
): Promise<{ days: HeatmapDay[]; total: number } | null> {
    try {
        const token = process.env.GITHUB_TOKEN;
        if (!token) return null;

        const to = new Date();
        const from = new Date();
        from.setFullYear(from.getFullYear() - 1);

        const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: GITHUB_QUERY,
                variables: { username, from: from.toISOString(), to: to.toISOString() },
            }),
            next: { revalidate: 3600 },
        });

        const json = await res.json();
        const calendar = json.data?.user?.contributionsCollection?.contributionCalendar;
        if (!calendar) return null;

        const days: HeatmapDay[] = calendar.weeks.flatMap(
            (week: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) =>
                week.contributionDays.map((d) => ({
                    date: d.date,
                    count: d.contributionCount,
                    level: LEVEL_MAP[d.contributionLevel] ?? 0,
                }))
        );

        return { days, total: calendar.totalContributions };
    } catch {
        return null;
    }
}

type Props = {
    username: string;
    title?: string;
    showPanel?: boolean;
    accentClass?: string;
};

export async function GitHubHeatmap({
    username,
    title = "Activity",
    showPanel = true,
    accentClass = "bg-amber-400",
}: Props) {
    const data = await fetchContributions(username);
    const inner = <GitHubHeatmapClient data={data} accentClass={accentClass} />;

    if (!showPanel) return inner;

    return (
        <section className="border border-zinc-800">
            <header className="border-b border-zinc-800 px-5 py-3">
                <h2 className="font-mono text-sm uppercase tracking-widest text-zinc-400">
                    {title}
                </h2>
            </header>
            <div className="p-5">{inner}</div>
        </section>
    );
}