import { SinglyLinkedListNode } from "./insert-a-node-at-a-specific-position-in-a-linked-list";

export function deleteNode(
  head: SinglyLinkedListNode | null,
  position: number
): SinglyLinkedListNode {
  if (position === 0) {
    return head?.next!;
  }

  let curr: SinglyLinkedListNode | null = head;

  for (let i = 0; i < position - 1; i++) {
    curr = curr!.next;
  }

  let next = curr?.next!.next;

  curr!.next = next!;

  curr = head;

  return head!;
}
