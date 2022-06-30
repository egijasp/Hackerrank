import { extraLongFactorials } from './extra-long-factorials'

describe('extraLongFactorials', () => {
  it('test1', () => {
    console.log = jest.fn()

    extraLongFactorials(25)
    const mock = (<jest.Mock>console.log).mock

    expect(mock.calls[0][0]).toBe('15511210043330985984000000')
  }),
    it('test2', () => {
      console.log = jest.fn()

      extraLongFactorials(45)
      const mock = (<jest.Mock>console.log).mock

      expect(mock.calls[0][0]).toBe(
        '119622220865480194561963161495657715064383733760000000000'
      )
    })
})
