import { sockMerchant } from "./sock-merchant";

describe("sockMerchant", () => {
  it("test1", () => {
    const result = sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]);

    expect(result).toBe(3);
  });
  it("test2", () => {
    const result = sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);

    expect(result).toBe(4);
  });
});
