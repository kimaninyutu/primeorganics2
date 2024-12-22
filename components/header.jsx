import Link from "next/link"
import { Search, Heart, ShoppingCart, ChevronDown } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Header() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link href="#" className="underline">ShopNow</Link></p>
      </div>
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Prime Organics
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>
              <Link href="/signup" className="text-sm font-medium">
                Sign Up
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative w-72">
                <Input
                  type="search"
                  placeholder="What are you looking for?"
                  className="w-full"
                />
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                English
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

