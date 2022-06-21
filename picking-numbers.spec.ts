import { pickingNumbers } from "./picking-numbers";

describe("pickingNumbers", () => {
  it("test1", () => {
    const result = pickingNumbers([4, 6, 5, 3, 3, 1]);

    expect(result).toEqual(3);
  });

  it("test2", () => {
    const result = pickingNumbers([1, 2, 2, 3, 1, 2]);

    expect(result).toEqual(5);
  });
  it("test3", () => {
    const result = pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]);

    expect(result).toEqual(5);
  });
});
