import { helloWorld } from '.'

describe('helloWorld', () => {
  it('should return "Hello World"', () => {
    expect(helloWorld()).toBe('Hello World')
  })
})
