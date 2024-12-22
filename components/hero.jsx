'use client'

import { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"


// FetchEvent
const slides = [
  {
    id: 1,
    title: "Sea Moss Gell",
    discount: "Up to 10%",
    image: "/21.jpeg",
  },
    {
    id: 2,
    title: "Bee Prospolis",
    discount: "Up to 10%",
    image: "/6.jpeg",
  },
  // Add more slides as needed
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Apple Logo"
              width={50}
              height={50}
              className="invert"
            />
            <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
            <p className="text-6xl font-bold">
              {slides[currentSlide].discount} off Voucher
            </p>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Shop Now
            </Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={slides[currentSlide].image}
              alt="iPhone"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


