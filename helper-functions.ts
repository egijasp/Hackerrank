import { SinglyLinkedListNode } from './insert-a-node-at-a-specific-position-in-a-linked-list'

export function makeList(array: number[]): SinglyLinkedListNode | undefined {
  if (array.length === 0) {
    return undefined
  }

  let head: SinglyLinkedListNode | undefined
  let tail: SinglyLinkedListNode | undefined

  for (let i = 0; i < array.length; i++) {
    const node: SinglyLinkedListNode = { data: array[i] }

    if (head === undefined) {
      head = node
    }

    if (tail !== undefined) {
      tail.next = node
    }

    tail = node
  }

  return head
}

export function listAsArray(head: SinglyLinkedListNode | undefined): number[] {
  if (head === undefined) {
    return []
  }

  let current: SinglyLinkedListNode | undefined = head

  const newArray = []

  do {
    newArray.push(current?.data)
    current = current?.next
  } while (current !== undefined)

  return newArray
}
