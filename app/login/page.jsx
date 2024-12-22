import Image from "next/image"
import { AuthLayout } from "../../components/auth-layout"
import { LoginForm } from "../../components/login-form"

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-medium mb-2">Log in to Exclusive</h1>
        <p className="text-sm text-gray-500">Enter your details below</p>
      </div>
      <LoginForm />
    </AuthLayout>
  )
}

