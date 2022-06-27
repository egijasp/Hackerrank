export function formingMagicSquare(s: number[][]): number {
  const patterns = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
  ];

  return patterns.reduce((lowest, pattern) => {
    const cost = pattern
      .map((el) => Number(el))
      .reduce((sum, num, index) => {
        const row = Math.trunc(index / 3);
        const col = index % 3;
        return sum + Math.abs(s[row][col] - num);
      }, 0);
    return Math.min(lowest, cost);
  }, 100);
}
