import { organizingContainers } from './organizing-containers-of-balls'

describe('organizingContainers', () => {
  it('one container with one ball', () => {
    const result = organizingContainers([[1]])

    expect(result).toEqual('Possible')
  })
  it('two containers with one ball each container', () => {
    const result = organizingContainers([
      [1, 0],
      [0, 1],
    ])

    expect(result).toEqual('Possible')
  })
  it('two containers with two different balls each container', () => {
    const result = organizingContainers([
      [1, 1],
      [1, 1],
    ])

    expect(result).toEqual('Possible')
  })
  it('two containers, one container is empty and other has two different balls', () => {
    const result = organizingContainers([
      [1, 1],
      [0, 0],
    ])

    expect(result).toEqual('Impossible')
  })
  it('two containers, one container contains two balls of one type and  the other has one ball of each type', () => {
    const result = organizingContainers([
      [0, 2],
      [1, 1],
    ])

    expect(result).toEqual('Impossible')
  })
  it('three containers, with one different ball each container', () => {
    const result = organizingContainers([
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 1],
    ])

    expect(result).toEqual('Possible')
  })

  it('three containers, with three types of balls', () => {
    const result = organizingContainers([
      [0, 2, 1],
      [1, 1, 1],
      [2, 0, 0],
    ])

    expect(result).toEqual('Possible')
  })
  it('three containers, with three types of balls', () => {
    const result = organizingContainers([
      [1, 3, 1],
      [2, 1, 2],
      [3, 3, 3],
    ])

    expect(result).toEqual('Impossible')
  })
})
