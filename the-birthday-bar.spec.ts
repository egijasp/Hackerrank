import { birthday } from "./the-birthday-bar";

describe("birthday", () => {
  it("test1", () => {
    const result = birthday([1, 2, 1, 3, 2], 3, 2);
    expect(result).toBe(2);
  });
});
