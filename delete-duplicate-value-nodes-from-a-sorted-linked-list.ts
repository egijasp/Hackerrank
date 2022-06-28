import { SinglyLinkedListNode } from './insert-a-node-at-a-specific-position-in-a-linked-list'

export function removeDuplicates(
  llist: SinglyLinkedListNode | undefined
): SinglyLinkedListNode | undefined {
  if (!llist) return llist

  let node = llist

  while (node?.next) {
    if (node.data === node.next.data) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }

  return llist
}
