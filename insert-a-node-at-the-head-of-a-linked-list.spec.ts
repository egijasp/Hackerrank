import { insertNodeAtHead } from './insert-a-node-at-the-head-of-a-linked-list'

describe('insertNodeAtHead', () => {
  it('adds new element at the beginning of the list', () => {
    let linkedList2 = insertNodeAtHead(null, 383)
    expect(linkedList2.data).toBe(383)
    linkedList2 = insertNodeAtHead(linkedList2, 484)
    expect(linkedList2.data).toBe(484)
    linkedList2 = insertNodeAtHead(linkedList2, 392)
    expect(linkedList2.data).toBe(392)
    linkedList2 = insertNodeAtHead(linkedList2, 975)
    expect(linkedList2.data).toBe(975)
    linkedList2 = insertNodeAtHead(linkedList2, 321)
    expect(linkedList2.data).toBe(321)
  })
})
