import { decrypt } from "@/lib/auth"
import { cookies } from "next/headers"

export async function GET() {
  const cookie = cookies().get("session")?.value
  if (!cookie) return new Response("Não autorizado", { status: 401 })

  try {
    const session = await decrypt(cookie)
    if (!session?.userId) throw new Error("Sessão inválida")

    return new Response(JSON.stringify({ userId: session.userId, email: session.email }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch {
    return new Response("Não autorizado", { status: 401 })
  }
}
