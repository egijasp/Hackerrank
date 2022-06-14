export function breakingRecords(scores: number[]): number[] {
  // Write your code here
  let max = scores[0];
  let min = scores[0];
  let maxcount = 0;
  let mincount = 0;

  for (let i = 0; i <= scores.length; i++) {
    if (max < scores[i]) {
      max = scores[i];
      maxcount++;
    }
    if (min > scores[i]) {
      min = scores[i];
      mincount++;
    }
  }

  return [maxcount, mincount];
}
