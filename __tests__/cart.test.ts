import { cartTotal, cartItemCount } from '@/lib/cart'

describe('cartTotal', () => {
  it('sums price * quantity across items', () => {
    expect(
      cartTotal([
        { price: 10, quantity: 2 },
        { price: 5, quantity: 1 },
      ])
    ).toBe(25)
  })

  it('returns 0 for an empty cart', () => {
    expect(cartTotal([])).toBe(0)
  })
})

describe('cartItemCount', () => {
  it('sums quantities', () => {
    expect(cartItemCount([{ price: 1, quantity: 2 }, { price: 9, quantity: 3 }])).toBe(5)
  })
})
