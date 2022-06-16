import { bonAppetit } from "./bon-appetit";

describe("", () => {
  it("test1", () => {
    const result = bonAppetit([3, 10, 2, 9], 1, 12);

    expect(result).toBe(5);
  });

  it("test2", () => {
    const result = bonAppetit([3, 10, 2, 9], 1, 7);

    expect(result).toEqual("Bon Appetit");
  });
});
