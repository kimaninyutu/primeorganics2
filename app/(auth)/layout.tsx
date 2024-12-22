import { HeaderAuth } from "../../components/header-auth"
import Sidebar from "../../components/sidebar"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAuth />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

