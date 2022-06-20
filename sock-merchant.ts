export function sockMerchant(ar: number[]) {
  const colorsCount = ar.reduce((allColors, color) => {
    if (allColors[color]) {
      allColors[color]++;
      return allColors;
    }
    allColors[color] = 1;
    return allColors;
  }, {} as Record<string, number>);

  return Object.values(colorsCount).reduce(
    (count, value) => count + Math.floor(value / 2),
    0
  );
}
