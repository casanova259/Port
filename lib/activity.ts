// Deterministic pseudo-random levels (0-4) for a 52-week x 7-day grid.
// TODO: replace with real GitHub contribution data (e.g. via the GitHub
// GraphQL API or a contributions endpoint) when ready.

export function getActivityLevels(): number[] {
  const total = 52 * 7;
  const levels: number[] = [];
  let seed = 1337;

  for (let i = 0; i < total; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    if (rand < 0.45) levels.push(0);
    else if (rand < 0.7) levels.push(1);
    else if (rand < 0.86) levels.push(2);
    else if (rand < 0.96) levels.push(3);
    else levels.push(4);
  }

  return levels;
}
