interface LinkedListNode {
  data: number;
  next?: LinkedListNode;
}

function tail(node: LinkedListNode): LinkedListNode {
  return node.next ? tail(node.next) : node;
}

export function insertNodeAtTail(
  head: LinkedListNode | null,
  data: number
): LinkedListNode {
  const node = { data };

  if (head === null) {
    return node;
  }

  tail(head).next = node;
  return head;

  // let current = head;

  // while (current.next) {
  //   current = current.next;
  // }

  // current.next = node;

  // return node;
}
