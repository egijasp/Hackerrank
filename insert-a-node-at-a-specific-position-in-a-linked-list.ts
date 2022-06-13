export interface SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | null;
}

export function insertNodeAtPosition(
  head: SinglyLinkedListNode | null,
  data: number,
  position: number
): SinglyLinkedListNode {
  const node: SinglyLinkedListNode = { data, next: null };

  if (position === 0) {
    node.next = head;
    return node;
  }

  let current: SinglyLinkedListNode | null = head;

  while (position > 1) {
    current = current!.next;
    position--;
  }

  node.next = current!.next;

  current!.next = node;

  return head!;
}
