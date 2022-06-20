export function getMoneySpent(
  budget: number,
  keyboards: number[],
  drives: number[]
): number {
  let spentMoney = -1;
  for (let keyboard of keyboards) {
    for (let drive of drives) {
      const sum = keyboard + drive;
      sum <= budget ? (spentMoney = sum) : spentMoney;
    }
  }

  return spentMoney;
}
