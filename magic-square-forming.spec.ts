import { formingMagicSquare } from "./magic-square-forming";

describe("formingMagicSquare", () => {
  it("test1", () => {
    const result = formingMagicSquare([
      [4, 8, 2],
      [4, 5, 7],
      [6, 1, 6],
    ]);

    expect(result).toEqual(4);
  });
  it("test perfect square", () => {
    const result = formingMagicSquare([
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ]);

    expect(result).toEqual(0);
  });

  it("test2", () => {
    const result = formingMagicSquare([
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 5],
    ]);

    expect(result).toEqual(1);
  });
});
