import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../components/ui/button'

const categories = [
  {
    name: 'Powders',
    icon: '/placeholder.svg?height=50&width=50',
    href: '#',
  },
  {
    name: 'Pure Skincare',
    icon: '/placeholder.svg?height=50&width=50',
    href: '#',
  },
  {
    name: 'Acne Treatments',
    icon: '/placeholder.svg?height=50&width=50',
    href: '#',
  },
  {
    name: 'Pigmentation Correction',
    icon: '/placeholder.svg?height=50&width=50',
    href: '#',
  },
  {
    name: 'Natural Beauty Essentials',
    icon: '/placeholder.svg?height=50&width=50',
    href: '#',
  },
]

export function BrowseCategories() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded-sm" />
          <div>
            <h2 className="text-red-500 font-medium">Categories</h2>
            <h3 className="text-2xl font-semibold">Browse By Category</h3>
          </div>
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map(category => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center justify-center p-8 border rounded-md hover:border-red-500 transition-colors"
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={40}
              height={40}
              className="mb-4"
            />
            <span className="text-sm font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

