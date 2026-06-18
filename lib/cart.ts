export interface CartItem {
  price: number
  quantity: number
}

// Sum price * quantity across every item in the cart.
export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}
