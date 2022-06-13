import { SinglyLinkedListNode } from "./insert-a-node-at-a-specific-position-in-a-linked-list";

export function mergeLists(
  headA: SinglyLinkedListNode | null,
  headB: SinglyLinkedListNode | null
): SinglyLinkedListNode | null {
  if (!headA) return headB;

  if (!headB) return headA;

  if (headA.data < headB.data) {
    headA.next = mergeLists(headA.next, headB);
    return headA;
  }
  headB.next = mergeLists(headB.next, headA);
  return headB;
}
