import { RegisterForm } from "@/components/register-form"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-10 w-10 rounded bg-primary"></div>
              <span className="text-2xl font-bold text-primary">Cosmer</span>
            </div>
          </Link>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
