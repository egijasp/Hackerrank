export function countingValleys(path: string): number {
  let count = 0;
  let valleys = 0;

  path.split("").forEach((x) => {
    if (x === "U") {
      count += 1;
      if (count === 0) {
        valleys += 1;
      }
    } else {
      count -= 1;
    }
  });

  return valleys;
}
