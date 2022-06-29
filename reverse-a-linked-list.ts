import { SinglyLinkedListNode } from './insert-a-node-at-a-specific-position-in-a-linked-list'

export function reverse(
  head: SinglyLinkedListNode | undefined
): SinglyLinkedListNode | undefined {
  if (head?.next === undefined) {
    return head
  }

  const tail = reverse(head?.next)

  head.next.next = head
  head.next = undefined

  return tail
}

/*
 
1 -> 2 -> undefined
                    1    2    n     1      1   2       n
1. reverse(1) --> head.next.next = head; head.next = undefined;
2. reverse(2) -- if (head.next === undefined) return


1 -> 2 -> 3 -X
1 -> 2 -X <- 3
1 -X <- 2 <- 3
undefined <- 1 <- 2 <- [3]

 */
