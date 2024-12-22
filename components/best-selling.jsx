import Image from 'next/image'
import { Heart, Star } from 'lucide-react'
import {Button} from "./ui/button"
import { Card, CardContent } from './ui/card'

const products = [
  {
    id: 1,
    name: 'The north coat',
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 2,
    name: 'Gucci duffle bag',
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 3,
    name: 'RGB liquid CPU Cooler',
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 65,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 4,
    name: 'Small BookShelf',
    price: 360,
    originalPrice: null,
    rating: 5,
    reviews: 65,
    image: '/placeholder.svg?height=200&width=200',
  },
]

export function BestSelling() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded-sm" />
          <div>
            <h2 className="text-red-500 font-medium">This Month</h2>
            <h3 className="text-2xl font-semibold">Best Selling Products</h3>
          </div>
        </div>
        <Button variant="outline">View All</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Card key={product.id} className="group relative">
            <CardContent className="p-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0 z-10"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full object-cover aspect-square rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h4 className="font-medium">{product.name}</h4>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-red-500 font-semibold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

