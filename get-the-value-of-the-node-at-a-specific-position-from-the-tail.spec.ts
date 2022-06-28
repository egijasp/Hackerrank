import { getNode } from "./get-the-value-of-the-node-at-a-specific-position-from-the-tail";
import { makeList } from "./helper-functions";

describe("getNode", () => {
  it("get value", () => {
    const list = makeList([3, 2, 1, 6, 9]);
    const number = getNode(list, 2);

    expect(number).toBe(1);
  });
});
