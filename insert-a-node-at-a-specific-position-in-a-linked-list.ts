export interface SinglyLinkedListNode {
  data: number
  next?: SinglyLinkedListNode
}

export function insertNodeAtPosition(
  head: SinglyLinkedListNode | undefined,
  data: number,
  position: number
): SinglyLinkedListNode {
  const node: SinglyLinkedListNode = { data }

  if (position === 0) {
    node.next = head
    return node
  }

  if (head === undefined) {
    return node
  }

  let current: SinglyLinkedListNode | undefined = head

  while (position > 1) {
    current = current?.next
    position--
  }

  if (current === undefined) {
    return head
  }

  node.next = current.next

  current.next = node

  return head
}
