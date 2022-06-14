import { breakingRecords } from "./breaking-best-and-worst-records";

describe("breakingRecords", () => {
  it("sample 1", () => {
    const [max, min] = breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);

    expect(max).toBe(4);
    expect(min).toBe(0);
  });
});
