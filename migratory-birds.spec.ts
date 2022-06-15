import { migratoryBirds } from "./migratory-birds";

describe("migratoryBirds", () => {
  it("test case 1", () => {
    const result = migratoryBirds([1, 4, 4, 4, 5, 3]);
    expect(result).toBe(4);
  });

  it("test case 1", () => {
    const result = migratoryBirds([1, 1, 2, 2, 3]);
    expect(result).toBe(1);
  });
});
