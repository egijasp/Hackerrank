import { catAndMouse } from "./cats-and-a-mouse";

describe("catAndMouse", () => {
  it("test1", () => {
    const result = catAndMouse(1, 2, 3);

    expect(result).toEqual("cat b");
  });
  it("test2", () => {
    const result = catAndMouse(1, 3, 2);

    expect(result).toEqual("mouse c");
  });
});
