export function climbingLeaderboard(
  ranked: number[],
  player: number[]
): number[] {
  const uniqueRank = [...new Set(ranked)];

  return player.reduce((rankedScore: number[], score) => {
    const scoreIndex = binarySearch(uniqueRank, score);
    rankedScore.push(scoreIndex + 1);
    return rankedScore;
  }, []);
}

const binarySearch = (searchArray: number[], score: number): number => {
  let start = 0;
  let end = searchArray.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (searchArray[mid] === score) {
      return mid;
    } else if (searchArray[mid] < score) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
