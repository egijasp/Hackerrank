export function birthday(s: number[], d: number, m: number): number {
  // Write your code here
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const arr = s.slice(i, i + m);
    if (arr.reduce((x, y) => x + y) === d) {
      count++;
    }
  }

  return count;
}
