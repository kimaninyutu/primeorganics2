'use client'

import Image from "next/image"
import { useState } from "react"

const initialItems = [
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "H-Gamepad",
    price: 550,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100"
  }
]

export function CartItems() {
  const [items, setItems] = useState(initialItems)

  const updateQuantity = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-4">Product</th>
            <th className="text-left py-4">Price</th>
            <th className="text-left py-4">Quantity</th>
            <th className="text-left py-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className="border-b">
              <td className="py-4">
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
              </td>
              <td className="py-4">${item.price}</td>
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-4">${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

