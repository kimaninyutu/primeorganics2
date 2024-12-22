'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { ProductCard } from './ui/product-card'


// FetchEvent
const products = [
  {
    id: 1,
    name: 'SOURSOP POWDER',
    price: 10,
    originalPrice: 15,
    rating: 5,
    reviews: 88,
    image: '/2.jpeg',
    discount: 40
  },
  {
    id: 2,
    name: 'ASHWAGANDHA POWDER',
    price: 350,
    originalPrice: 450,
    rating: 4,
    reviews: 75,
    image: '/placeholder.svg?height=200&width=200',
    discount: 40
  },
  {
    id: 3,
    name: 'ASHWAGANDHA POWDER',
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    image: '/placeholder.svg?height=200&width=200',
    discount: 40
  },
  {
    id: 4,
    name: 'ASHWAGANDHA POWDER',
    price: 375,
    originalPrice: 400,
    rating: 4.5,
    reviews: 99,
    image: '/placeholder.svg?height=200&width=200',
    discount: 40
  },
]

export function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds }

        const newMinutes = prev.minutes - 1
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 }

        const newHours = prev.hours - 1
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 }

        const newDays = prev.days - 1
        if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="container mx-auto px-4 py-12 bg-white">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded-sm" />
          <div>
            <h2 className="text-red-500 font-medium">Today's</h2>
            <h3 className="text-2xl font-semibold text-black">Flash Sales</h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="text-center">
                <span className="text-lg font-semibold text-black">
                  {value.toString().padStart(2, '0')}
                </span>
                <p className="text-sm text-gray-500 capitalize">{key}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button variant="outline">View All Products</Button>
      </div>
    </section>
  )
}

