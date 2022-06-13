import { getTotal } from "./between-two-sets";

describe("getTotal", () => {
  it("test 1", () => {
    const number = getTotal([2, 6], [24, 36]);

    expect(number).toBe(2);
  });

  it("test 2", () => {
    const number = getTotal([2, 4], [16, 32, 96]);

    expect(number).toBe(3);
  });
});
