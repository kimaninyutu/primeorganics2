'use client'

import Link from "next/link"
import { Search, Heart, ShoppingCart, Bell } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function HeaderAuth() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link href="#" className="underline">ShopNow</Link></p>
      </div>
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Exclusive
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium">
                Contact
              </Link>
              <Link href="#" className="text-sm font-medium">
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
                  className="w-full pr-8"
                />
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline"  className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                      225
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    New order received
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Your order has been shipped
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline"  className="relative">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline"  className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                  3
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" >
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="User"
                      className="h-8 w-8 rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile" className="flex items-center">
                      Manage My Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/orders" className="flex items-center">
                      My Orders
                      <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        203
                      </span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/wishlist" className="flex items-center">
                      My Wishlist
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/logout" className="flex items-center text-red-500">
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

