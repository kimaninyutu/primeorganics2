'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ChromeIcon as Google } from 'lucide-react'

export function LoginForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full px-4 py-3 border rounded-sm"
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-sm"
        />
      </div>
      <div className="flex items-center justify-between text-sm">
        <div></div>
        <Link href="/forgot-password" className="text-red-500 hover:underline">
          Forgot Password?
        </Link>
      </div>
      <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-sm">
        Log in
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full border-2 py-3 rounded-sm"
      >
        <Google className="mr-2 h-4 w-4" />
        Sign in with Google
      </Button>
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link href="/signup" className="text-red-500 hover:underline">
          Sign up
        </Link>
      </div>
    </form>
  )
}

