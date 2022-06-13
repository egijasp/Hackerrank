import { deleteNode } from "./delete-a-node-from-a-linked-list";
import { listAsArray, makeList } from "./helper-functions";

describe("deleteNode", () => {
  it("delete head node", () => {
    let list = makeList([20, 6, 2, 19, 7, 4, 15, 9]);
    list = deleteNode(list, 0);

    expect(listAsArray(list)).toEqual([6, 2, 19, 7, 4, 15, 9]);
  });

  it("delete node", () => {
    let list = makeList([20, 6, 2, 19, 7, 4, 15, 9]);
    list = deleteNode(list, 3);

    expect(listAsArray(list)).toEqual([20, 6, 2, 7, 4, 15, 9]);
  });
});
