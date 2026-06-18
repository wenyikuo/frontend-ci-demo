import { add, multiply, isEven } from '@/lib/calc'

describe('calc', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
  })

  it('multiplies two numbers', () => {
    expect(multiply(4, 5)).toBe(20)
    expect(multiply(0, 99)).toBe(0)
  })

  it('detects even numbers', () => {
    expect(isEven(4)).toBe(true)
    expect(isEven(7)).toBe(false)
  })
})
