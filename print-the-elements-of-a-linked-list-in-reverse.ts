import { SinglyLinkedListNode } from "./insert-a-node-at-a-specific-position-in-a-linked-list";

export function reversePrint(head: SinglyLinkedListNode | null): void {
  if (head === null) return;

  reversePrint(head.next);

  console.log(head.data);
}
