export function compareTriplets(a: number[], b: number[]): [number, number] {
  let aliceScore = 0;
  let bobScore = 0;

  a.forEach((v, i) => {
    if (v > b[i]) {
      aliceScore++;
    } else if (v < b[i]) {
      bobScore++;
    }
  });

  return [aliceScore, bobScore];
}
