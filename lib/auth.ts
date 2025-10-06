// lib/auth.ts
import { SignJWT, jwtVerify, type JWTPayload } from "jose"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { randomUUID } from "crypto"  // 🔹 para IDs seguros

const secretKey = process.env.JWT_SECRET || "minha_chave_secreta"
const key = new TextEncoder().encode(secretKey)

// 🔹 Tipagem do usuário
export interface User {
  id: string
  email: string
  name: string
}

// 🔹 Payload do JWT
export interface MyPayload extends JWTPayload {
  userId: string
  email: string
  name: string
}

// 🔹 Registrar usuário (simulado)
export async function register(email: string, password: string, name: string): Promise<User> {
  // Aqui seria DB → criptografar senha e salvar
  const newUser: User = {
    id: randomUUID(),
    email,
    name,
  }
  return newUser
}

// 🔹 Criar JWT
export async function encrypt(payload: MyPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h") // mais legível
    .sign(key)
}

// 🔹 Decodificar JWT
export async function decrypt(token: string): Promise<MyPayload | null> {
  if (!token || token.trim() === "") return null
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] })
    return payload as MyPayload
  } catch {
    return null
  }
}

// 🔹 Login simulado (fake DB)
export async function login(email: string, password: string): Promise<User | null> {
  const users = [
    { id: "1", email: "admin@mercos.com", password: "admin123", name: "Admin Mercos" },
    { id: "2", email: "user@mercos.com", password: "user123", name: "Usuário Teste" },
  ]
  const user = users.find(u => u.email === email && u.password === password)
  if (!user) return null
  return { id: user.id, email: user.email, name: user.name }
}

// 🔹 Obter sessão do cookie
export async function getSession() {
  const session = cookies().get("session")?.value
  if (!session) return null
  return await decrypt(session)
}

// 🔹 Logout → limpa cookie mantendo opções
export async function logout() {
  cookies().set("session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0),
  })
}

// 🔹 Refresh session (renova JWT)
export async function refreshSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value
  if (!session) return null

  const parsed = await decrypt(session)
  if (!parsed) return null

  const res = NextResponse.next()
  const token = await encrypt(parsed)

  res.cookies.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24h
  })

  return res
}
