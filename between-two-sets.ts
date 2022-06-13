export function getTotal(a: number[], b: number[]): number {
  let numbers = 0;

  for (let i = 0; i <= 100; i++) {
    if (a.every((num) => i % num === 0) && b.every((num) => num % i === 0)) {
      numbers++;
    }
  }

  return numbers;
}
