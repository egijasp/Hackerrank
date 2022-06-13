import { compareLists } from "./compare-two-linked-lists";
import { listAsArray, makeList } from "./helper-functions";

describe("compareLists", () => {
  it("compare lists", () => {
    let list1 = makeList([1, 2, 3]);
    let list2 = makeList([1, 2, 3]);
    let list3 = makeList([1, 2, 3, 4]);

    expect(listAsArray(list1).length).toEqual(listAsArray(list2).length);
    expect(listAsArray(list1).length).not.toEqual(listAsArray(list3).length);
  });
});
