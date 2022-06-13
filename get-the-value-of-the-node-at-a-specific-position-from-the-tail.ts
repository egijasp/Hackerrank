import { SinglyLinkedListNode } from "./insert-a-node-at-a-specific-position-in-a-linked-list";

export function getNode(
  list: SinglyLinkedListNode | null,
  positionFromTail: number
): number {
  let head1 = list;
  let head2 = list;

  for (let i = 0; i <= positionFromTail; i++) {
    head1 = head1?.next!;
  }

  while (head1 !== null) {
    head1 = head1.next;
    head2 = head2?.next!;
  }

  return head2?.data!;
}
