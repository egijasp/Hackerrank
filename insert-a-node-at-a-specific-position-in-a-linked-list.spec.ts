import { listAsArray, makeList } from './helper-functions'
import { insertNodeAtPosition } from './insert-a-node-at-a-specific-position-in-a-linked-list'

/*

1. helper makeList(array: number[]): SinglyLinkedListNode | null

2. helper listAsArray(head: SinglyLinkedListNode | null): number[]

startArray = [1,2,3]
linkedList = makeList(startArray)
linkedList = insertNodeAtPosition(linkedList, 42, 2)
expected = [1,2,42,3]

expect(listAsArray(linkedList)).toEqual(expected)

*/

describe('insertNodeAtPosition', () => {
  it('adds new element at specific position in a linked list', () => {
    let list = makeList([16, 13, 7])
    list = insertNodeAtPosition(list, 1, 2)

    expect(listAsArray(list)).toEqual([16, 13, 1, 7])
  })

  it('add element to empty list', () => {
    const list = insertNodeAtPosition(undefined, 1, 0)

    expect(listAsArray(list)).toEqual([1])
  })
})

describe('helper functions', () => {
  describe('makeList', () => {
    it('return null on empty array', () => {
      expect(makeList([])).toBeUndefined()
    })
    it('makes list of one node', () => {
      const list = makeList([1])
      expect(list?.data).toEqual(1)
      expect(list?.next).toBeUndefined()
    })

    it('makes list of two nodes', () => {
      const list = makeList([1, 2])
      expect(list?.data).toEqual(1)
      expect(list?.next).not.toBeUndefined()
      expect(list?.next?.data).toEqual(2)
    })
  })

  describe('listAsArray', () => {
    it('return empty array from null', () => {
      expect(listAsArray(undefined)).toEqual([])
    })
    it('return expected array', () => {
      const array = [1, 2, 3]
      const list = makeList(array)

      expect(listAsArray(list)).toEqual(array)
    })
  })
})
