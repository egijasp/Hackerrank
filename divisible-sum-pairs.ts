export function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here

  let numOfPairs = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        numOfPairs++;
      }
    }
  }
  return numOfPairs;
}
