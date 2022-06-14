import { divisibleSumPairs } from "./divisible-sum-pairs";

describe("divisibleSumPairs", () => {
  it("test1", () => {
    const numOfPairs = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

    expect(numOfPairs).toBe(5);
  });
});
