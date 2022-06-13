import { SinglyLinkedListNode } from "./insert-a-node-at-a-specific-position-in-a-linked-list";

export function makeList(array: number[]): SinglyLinkedListNode | null {
  if (array.length === 0) {
    return null;
  }

  let head: SinglyLinkedListNode | null = null;
  let tail: SinglyLinkedListNode | null = null;

  for (let i = 0; i < array.length; i++) {
    const node: SinglyLinkedListNode = { data: array[i], next: null };

    if (head === null) {
      head = node;
    }

    if (tail !== null) {
      tail.next = node;
    }

    tail = node;
  }

  return head;
}

export function listAsArray(head: SinglyLinkedListNode | null): number[] {
  if (head === null) {
    return [];
  }

  let current: SinglyLinkedListNode | null = head;

  const newArray = [];

  do {
    newArray.push(current!.data);
    current = current!.next;
  } while (current !== null);

  return newArray;
}
