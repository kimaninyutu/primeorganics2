'use client'

import { useRouter } from "next/navigation"

export function CartSummary() {
  const router = useRouter()

  return (
    <div className="border rounded-sm p-6">
      <h2 className="text-lg font-medium mb-4">Cart Total</h2>
      <div className="space-y-4">
        <div className="flex justify-between border-b pb-4">
          <span>Subtotal</span>
          <span>$1750</span>
        </div>
        <div className="flex justify-between border-b pb-4">
          <span>Shipping</span>
          <span className="text-green-500">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Total</span>
          <span className="font-medium">$1750</span>
        </div>
        <button
          onClick={() => router.push('/checkout')}
          className="w-full py-3 bg-red-500 text-white rounded-sm"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  )
}

