import { queensAttack } from './queens-attack-2'

describe('queensAttack', () => {
  it('board size 1', () => {
    const result = queensAttack(1, 0, 1, 1, [])

    expect(result).toEqual(0)
  })
  it('board size 2', () => {
    const result = queensAttack(2, 0, 2, 2, [])

    expect(result).toEqual(3)
  })
  it('board size 2, one obstacle', () => {
    const result = queensAttack(2, 1, 2, 2, [[1, 1]])

    expect(result).toEqual(2)
  })
  it('board size 5, three obstacles', () => {
    const result = queensAttack(5, 3, 4, 3, [
      [5, 5],
      [4, 2],
      [2, 3],
    ])

    expect(result).toEqual(10)
  })
})
