import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "@/lib/auth"

const protectedRoutes = ["/dashboard", "/profile", "/admin"]
const authRoutes = ["/auth/login", "/auth/register"]

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))
  const isAuthRoute = authRoutes.includes(path)

  const cookie = req.cookies.get("session")?.value
  let session = null

  if (cookie) {
    try {
      session = await decrypt(cookie)
    } catch (err) {
      // Cookie inválido ou corrompido → remove
      session = null
    }
  }

  const isLoggedIn = !!session?.userId

  // Rotas protegidas → redireciona para login se não estiver logado
  if (isProtectedRoute && !isLoggedIn) {
    const res = NextResponse.redirect(new URL("/auth/login", req.nextUrl))
    res.cookies.delete("session") // limpa cookie inválido
    return res
  }

  // Rotas de auth → redireciona para dashboard se já estiver logado
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard/guia-inicial", req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
