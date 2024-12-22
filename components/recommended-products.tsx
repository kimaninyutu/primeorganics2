'use client'

import Link from "next/link"
import { ProductCard } from "./ui/product-card"
import { Button } from "./ui/button"

const recommendedProducts = [
  {
    id: 1,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: "/placeholder.svg?height=200&width=200",
    discount: 15
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 4.8,
    reviews: 99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    price: 160,
    originalPrice: 180,
    rating: 5,
    reviews: 65,
    image: "/placeholder.svg?height=200&width=200",
    discount: 40
  },
  {
    id: 4,
    name: "AK-900 Wired Keyboard",
    price: 200,
    originalPrice: null,
    rating: 4.5,
    reviews: 75,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function RecommendedProducts() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <h2 className="text-xl font-medium">Just For You</h2>
          </div>
        </div>
        <Link href="/products" className="text-sm text-red-500 hover:underline">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendedProducts.map(product => (
          <ProductCard
            key={product.id}
            {...product}
            actionButton={
              <Button className="w-full" variant="outline">
                Add To Cart
              </Button>
            }
          />
        ))}
      </div>
    </div>
  )
}

