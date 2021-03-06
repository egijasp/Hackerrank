import { removeDuplicates } from "./delete-duplicate-value-nodes-from-a-sorted-linked-list";
import { listAsArray, makeList } from "./helper-functions";

describe("removeDuplicate", () => {
  it("remove dublicate", () => {
    let list = makeList([1, 2, 2, 3, 4]);
    list = removeDuplicates(list);
    expect(listAsArray(list)).toEqual([1, 2, 3, 4]);
  });
});
