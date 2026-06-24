'use client'

import { useState } from 'react'
import { add } from '@/lib/calc'

export default function Counter({ initial = 0 }: { initial?: number }) {
  const [count, setCount] = useState(initial)

  return (
    <div className="flex flex-col items-center gap-4">
      <p data-testid="count" className="text-2xl font-semibold">
        {count}
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setCount((c) => add(c, -1))}
          className="rounded bg-gray-200 px-4 py-2"
          aria-label="decrement"
        >
          −
        </button>
        <button
          type="button"
          onClick={() => setCount((c) => add(c, 2))}
          className="rounded bg-blue-600 px-4 py-2 text-white"
          aria-label="increment"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => setCount(initial)}
          className="rounded bg-gray-200 px-4 py-2"
          aria-label="reset"
        >
          reset
        </button>
      </div>
    </div>
  )
}
