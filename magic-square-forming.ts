export function formingMagicSquare(s: number[][]): number {
  const patterns = [
    "816357492",
    "618753294",
    "492357816",
    "294753618",
    "834159672",
    "438951276",
    "672159834",
    "276951438",
  ];

  return patterns.reduce((lowest, pattern) => {
    const cost = pattern
      .split("")
      .map((el) => Number(el))
      .reduce((sum, num, index) => {
        const row = Math.trunc(index / 3);
        const col = index % 3;
        return sum + Math.abs(s[row][col] - num);
      }, 0);
    return Math.min(lowest, cost);
  }, 100);
}
