import { getMoneySpent } from "./electronics-shop";

describe("getMoneySpent", () => {
  it("test1", () => {
    const result = getMoneySpent(10, [3, 1], [5, 2, 8]);

    expect(result).toEqual(9);
  });
  it("test2", () => {
    const result = getMoneySpent(5, [4], [5]);

    expect(result).toEqual(-1);
  });
  it("test3", () => {
    const result = getMoneySpent(60, [40, 50, 60], [5, 8, 12]);

    expect(result).toEqual(58);
  });
});
