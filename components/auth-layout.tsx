import Image from "next/image"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex md:w-1/2 bg-[#F4F6F8] items-center justify-center p-8">
        <div className="relative w-full max-w-md aspect-square">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Shopping cart with smartphone and shopping bags"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  )
}

