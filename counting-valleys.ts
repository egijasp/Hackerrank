export function countingValleys(path: string): number {
  const result = path.split("").reduce(
    (acc, step) => {
      if (step === "U") {
        acc.level++;
        if (acc.level === 0) {
          acc.valleys++;
        }
        return acc;
      }
      acc.level--;
      return acc;
    },
    { level: 0, valleys: 0 }
  );

  return result.valleys;
}
