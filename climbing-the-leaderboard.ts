export function climbingLeaderboard(
  ranked: number[],
  player: number[]
): number[] {
  const uniqueRank = [...new Set(ranked)];

  let scores: number[] = [];

  let i = uniqueRank.length - 1;

  for (let score of player) {
    while (score >= uniqueRank[i]) {
      i--;
    }

    scores.push(i + 2);
  }
  return scores;
}
