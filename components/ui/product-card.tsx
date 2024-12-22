import Image from "next/image"
import { Heart, Eye, Star } from 'lucide-react'
import { Button } from "./button"
import { Card, CardContent } from "./card"

interface ProductCardProps {
  name: string
  price: number
  originalPrice?: number | null
  rating: number
  reviews: number
  image: string
  discount?: number
  actionButton?: React.ReactNode
}

export function ProductCard({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  discount,
  actionButton
}: ProductCardProps) {
  // @ts-ignore
  return (
    <Card className="group relative">
      <CardContent className="p-4">
        <div className="relative">
          {discount && (
            <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-sm">
              -{discount}%
            </div>
          )}
          <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
            <Button variant="outline"  className="rounded-full bg-white">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline"  className="rounded-full bg-white">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative h-[200px] w-full mb-4">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-base">{name}</h4>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-semibold">${price}</span>
              {originalPrice && (
                <span className="text-gray-500 line-through">${originalPrice}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">({reviews})</span>
            </div>
            {actionButton}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

