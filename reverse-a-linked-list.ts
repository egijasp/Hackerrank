import { SinglyLinkedListNode } from "./insert-a-node-at-a-specific-position-in-a-linked-list";

export function reverse(
  head: SinglyLinkedListNode | null
): SinglyLinkedListNode | null {
  if (head!.next === null) {
    return head;
  }

  const tail = reverse(head!.next);

  head!.next!.next = head;
  head!.next = null;

  return tail;
}

/*
 
1 -> 2 -> null
                    1    2    n     1      1   2       n
1. reverse(1) --> head.next.next = head; head.next = null;
2. reverse(2) -- if (head.next === null) return


1 -> 2 -> 3 -X
1 -> 2 -X <- 3
1 -X <- 2 <- 3
null <- 1 <- 2 <- [3]

 */
