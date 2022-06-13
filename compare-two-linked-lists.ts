import { SinglyLinkedListNode } from "./insert-a-node-at-a-specific-position-in-a-linked-list";

export function compareLists(
  list1: SinglyLinkedListNode | null,
  list2: SinglyLinkedListNode | null
): number {
  if (list1 === null && list2 === null) {
    return 1;
  }

  if (list1 === null || list2 === null) {
    return 0;
  }

  return list1.data === list2.data ? compareLists(list1.next, list2.next) : 0;
}
