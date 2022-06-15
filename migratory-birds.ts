interface Count {
  [key: number]: number;
}

export function migratoryBirds(arr: number[]): number {
  const count: Count = {};

  arr.forEach((item) => {
    if (count[item]) {
      count[item] += 1;
      return;
    }
    count[item] = 1;
  });

  const most = Math.max(...Object.values(count));

  return +Object.keys(count).find((x) => count[+x] === most)!;
}
