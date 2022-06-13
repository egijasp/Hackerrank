export function getTotal(a: number[], b: number[]): number {
  let count = 0;

  for (let i = a[0]; i <= b[0]; i++) {
    if (a.every((num) => i % num === 0) && b.every((num) => num % i === 0)) {
      count++;
    }
  }

  return count;
}
