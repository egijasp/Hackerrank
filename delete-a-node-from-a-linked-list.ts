import { SinglyLinkedListNode } from './insert-a-node-at-a-specific-position-in-a-linked-list'

export function deleteNode(
  head: SinglyLinkedListNode | undefined,
  position: number
): SinglyLinkedListNode | undefined {
  if (position === 0) {
    return head?.next
  }

  let curr: SinglyLinkedListNode | undefined = head

  for (let i = 0; i < position - 1; i++) {
    curr = curr?.next
  }

  if (curr === undefined) {
    return head
  }

  const next = curr.next?.next

  curr.next = next

  curr = head

  return head
}
