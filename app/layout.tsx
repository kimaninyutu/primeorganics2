import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Footer from "../components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prime Organics",
  description: "Your one-stop shop for all organic products",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}


