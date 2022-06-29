import { SinglyLinkedListNode } from './insert-a-node-at-a-specific-position-in-a-linked-list'

export function reversePrint(head: SinglyLinkedListNode | undefined): void {
  if (head === undefined) return

  reversePrint(head.next)

  console.log(head.data)
}
