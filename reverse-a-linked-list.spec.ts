import { listAsArray, makeList } from "./helper-functions";
import { reverse } from "./reverse-a-linked-list";

describe("reverse", () => {
  it("reverse linked list", () => {
    // 1;
    // 2;
    // 3;
    // 4;
    // 5;

    let list = makeList([1, 2, 3, 4, 5]);
    list = reverse(list);

    expect(listAsArray(list)).toEqual([5, 4, 3, 2, 1]);
  });
});
