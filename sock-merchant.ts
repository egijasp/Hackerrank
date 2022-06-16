export function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  const filteredArr = [...new Set(ar)];

  let count = 0;

  filteredArr.forEach((num) => {
    count += Math.floor(ar.filter((item) => item === num).length / 2);
  });

  return count;
}
