import { listAsArray, makeList } from "./helper-functions";
import { mergeLists } from "./merge-two-sorted-linked-lists";

describe("mergeList", () => {
  it("return list1 if list 2 is null", () => {
    let list1 = makeList([1, 2, 3]);
    let list2 = makeList([]);
    const newList = mergeLists(list1, list2);
    expect(listAsArray(newList)).toEqual([1, 2, 3]);
  });
  it("return empty array if both lists are empty", () => {
    let list1 = makeList([]);
    let list2 = makeList([]);
    const newList = mergeLists(list1, list2);
    expect(listAsArray(newList)).toEqual([]);
  });
  it("merge two sorted linked lists", () => {
    let list1 = makeList([1, 2, 3]);
    let list2 = makeList([3, 4]);

    const newList = mergeLists(list1, list2);

    expect(listAsArray(newList)).toEqual([1, 2, 3, 3, 4]);
  });
});
