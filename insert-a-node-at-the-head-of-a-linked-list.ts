export interface LinkedListNode {
  data?: number;
  next?: LinkedListNode;
}

export function insertNodeAtHead(
  llist: LinkedListNode | null,
  data: number
): LinkedListNode {
  const node: LinkedListNode = { data };

  if (llist === null) {
    return node;
  }

  node.next = llist;
  return node;
}
