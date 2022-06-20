interface Color {
  [key: number]: number;
}

export function sockMerchant(ar: number[]): number {
  const colorsCount = ar.reduce((allColors: Color, color) => {
    if (allColors[color]) {
      allColors[color]++;
      return allColors;
    }
    allColors[color] = 1;
    return allColors;
  }, {});

  return Object.values(colorsCount).reduce((count, value) => {
    return count + Math.floor(value / 2);
  }, 0);
}
