import Image from "next/image"
import { AuthLayout } from "../../components/auth-layout"
import { SignUpForm } from "../../components/sign-up-form"

export default function SignUpPage() {
  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-medium mb-2">Create an account</h1>
        <p className="text-sm text-gray-500">Enter your details below</p>
      </div>
      <SignUpForm />
    </AuthLayout>
  )
}

