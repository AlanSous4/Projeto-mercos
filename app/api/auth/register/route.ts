// app/api/auth/register/route.ts
import { type NextRequest, NextResponse } from "next/server"
import { register, encrypt, type MyPayload } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  const { email, password, name } = await request.json()

  // Registrar usuário
  const user = await register(email, password, name)
  if (!user) {
    return NextResponse.json({ error: "Registration failed" }, { status: 400 })
  }

  // Criar payload do JWT com userId
  const payload: MyPayload = {
    userId: user.id,             // ⚠ aqui deve ser userId
    email: user.email,
    name: user.name,
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24h de validade
  }

  // Criar sessão criptografada
  const session = await encrypt(payload)

  // Configurar cookie
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
  cookies().set("session", session, { expires, httpOnly: true, path: "/" })

  return NextResponse.json(user)
}
