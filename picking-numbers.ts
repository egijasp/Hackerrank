export function pickingNumbers(a: number[]): number {
  return a.reduce((acc, curr) => {
    const subarray = a.filter(
      (item) => item === curr || item === curr + 1
    ).length;

    return subarray > acc ? subarray : acc;
  }, 0);
}
