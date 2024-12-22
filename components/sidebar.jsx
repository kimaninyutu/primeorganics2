import Link from "next/link"
import { ChevronRight } from 'lucide-react'

const categories = [
  "All Pure Skincare Products",
  "Organic Powders",
  "Acne Treatment Solutions",
  "Pigmentation Correction",
  "Natural Beauty Essentials",
]

export default function Sidebar() {
  return (
    <div className="w-64 border-r p-4">
      <nav className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            className="flex items-center justify-between py-2 text-sm hover:text-primary"
          >
            {category}
            <ChevronRight className="h-4 w-4" />
          </Link>
        ))}
      </nav>
    </div>
  )
}

