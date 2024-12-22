'use client'

import { ProductCard } from "./ui/product-card"
import { Button } from "./ui/button"

const wishlistProducts = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: "/placeholder.svg?height=200&width=200",
    discount: 20
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 65,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Xbox Wireless Controller",
    price: 350,
    originalPrice: null,
    rating: 5,
    reviews: 75,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    originalPrice: null,
    rating: 4.5,
    reviews: 55,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function WishlistProducts() {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Wishlist ({wishlistProducts.length})</h2>
        <Button variant="outline">Move All To Bag</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistProducts.map(product => (
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

