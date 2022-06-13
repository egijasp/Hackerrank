import { insertNodeAtTail } from "./insert-a-node-at-the-tail-of-a-linked-list";

describe("insertNodeAtTail ", () => {
  it("Sample 1", () => {
    let linkedList = insertNodeAtTail(null, 141);
    expect(linkedList.data).toEqual(141);

    linkedList = insertNodeAtTail(linkedList, 302);
    expect(linkedList.next?.data).toEqual(302);

    linkedList = insertNodeAtTail(linkedList, 164);
    expect(linkedList.next?.next?.data).toEqual(164);

    linkedList = insertNodeAtTail(linkedList, 530);
    expect(linkedList.next?.next?.next?.data).toEqual(530);

    linkedList = insertNodeAtTail(linkedList, 474);
    expect(linkedList.next?.next?.next?.next?.data).toEqual(474);
  });
});
