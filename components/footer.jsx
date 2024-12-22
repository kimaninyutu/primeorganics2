import Image from "next/image"
import Link from "next/link"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Exclusive</h3>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-white"
              />
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Support</h3>
            <p>111 Bijoy sarani, Dhaka, Bangladesh</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Account</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/account" className="hover:underline">My Account</Link>
              <Link href="/login" className="hover:underline">Login / Register</Link>
              <Link href="/cart" className="hover:underline">Cart</Link>
              <Link href="/wishlist" className="hover:underline">Wishlist</Link>
              <Link href="/shop" className="hover:underline">Shop</Link>
            </nav>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Link</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms Of Use</Link>
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Download App</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Save $3 with App New User Only</p>
              <div className="flex gap-4">
                <div className="relative h-24 w-24">
                  <Image
                    src="/placeholder.svg"
                    alt="QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Play Store"
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                  <Image
                    src="/placeholder.svg"
                    alt="App Store"
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© Copyright Rimel 2023. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

