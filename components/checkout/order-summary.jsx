'use client'

import Image from "next/image"

const orderItems = [
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 2,
    name: "H Gamepad",
    price: 1100,
    image: "/placeholder.svg?height=80&width=80"
  }
]

export function OrderSummary() {
  return (
    <div>
      <div className="space-y-4">
        {orderItems.map(item => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="object-contain"
              />
              <span>{item.name}</span>
            </div>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$1750</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-500">Free</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>$1750</span>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-4">
          <input type="radio" id="bank" name="payment" />
          <label htmlFor="bank">Bank</label>
        </div>
        <div className="flex items-center gap-4">
          <input type="radio" id="cash" name="payment" defaultChecked />
          <label htmlFor="cash">Cash on delivery</label>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 px-4 py-2 border rounded-sm"
          />
          <button className="px-6 py-2 bg-red-500 text-white rounded-sm">
            Apply Coupon
          </button>
        </div>
        <button className="w-full py-3 bg-red-500 text-white rounded-sm">
          Place Order
        </button>
      </div>
    </div>
  )
}


