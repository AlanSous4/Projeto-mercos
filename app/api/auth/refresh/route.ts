import { NextRequest, NextResponse } from "next/server"
import { decrypt, encrypt } from "@/lib/auth"

export async function POST(req: NextRequest) {
  const token = req.cookies.get("session")?.value
  if (!token) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
  }

  const parsed = await decrypt(token)
  if (!parsed) {
    return NextResponse.json({ error: "Token inválido ou expirado" }, { status: 401 })
  }

  const newToken = await encrypt(parsed)

  const res = NextResponse.json({ message: "Sessão renovada" })
  res.cookies.set("session", newToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24h
  })

  return res
}
