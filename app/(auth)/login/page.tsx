"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  // Verifica se usuário já está logado
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" })
        if (res.status === 200) {
          // Usuário logado → manda pro dashboard
          router.replace("/dashboard/guia-inicial")
        } else {
          setLoading(false) // libera tela de login
        }
      } catch {
        setLoading(false)
      }
    }
    checkSession()
  }, [router])

  // Faz o login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        router.replace("/dashboard/guia-inicial")
      } else {
        const data = await res.json()
        setError(data.error || "Erro ao logar")
      }
    } catch {
      setError("Erro de conexão com o servidor")
    }
  }

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-700 text-lg">Carregando...</p>
      </div>
    )

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-10 w-10 rounded bg-primary"></div>
              <span className="text-2xl font-bold text-primary">Cosmer</span>
            </div>
          </Link>
        </div>

        {/* Formulário */}
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            Entrar na sua conta
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary sm:text-sm"
              />
              <p className="mt-1 text-xs text-gray-500">Use credenciais de teste:</p>
              <p className="text-xs">admin@mercos.com / admin123</p>
              <p className="text-xs">user@mercos.com / user123</p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
