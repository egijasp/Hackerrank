import { countingValleys } from "./counting-valleys";

describe("countingValleys", () => {
  it("test1", () => {
    const result = countingValleys("UDDDUDUU");

    expect(result).toEqual(1);
  });
});
