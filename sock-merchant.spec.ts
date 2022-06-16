import { sockMerchant } from "./sock-merchant";

describe("sockMerchant", () => {
  it("test1", () => {
    const result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

    expect(result).toBe(3);
  });
});
