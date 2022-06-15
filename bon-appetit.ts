export function bonAppetit(
  bill: number[],
  k: number,
  b: number
): number | string {
  // Write your code here
  const fairlySumm = (bill.reduce((a, b) => a + b) - bill[k]) / 2;

  return b > fairlySumm ? b - fairlySumm : "Bon Appetit";
}
