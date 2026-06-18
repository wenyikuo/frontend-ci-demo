export interface CartItem {
  price: number
  quantity: number
}

// Sum price * quantity across every item in the cart.
export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

// Total number of units across all cart items.
export function cartItemCount(items: CartItem[]): number {
  return items.reduce((n, item) => n + item.quantity, 0)
}
