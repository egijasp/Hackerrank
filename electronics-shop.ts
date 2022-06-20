export function getMoneySpent(
  budget: number,
  keyboards: number[],
  drives: number[]
): number {
  let spentMoney = -1;
  for (const keyboard of keyboards) {
    for (const drive of drives) {
      const sum = keyboard + drive;
      sum <= budget ? (spentMoney = sum) : spentMoney;
    }
  }

  return spentMoney;
}
