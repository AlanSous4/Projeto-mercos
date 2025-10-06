import { NextRequest, NextResponse } from "next/server";
import { encrypt } from "@/lib/auth"; // Mesma função usada para criar sessão

// Usuários de teste
const USERS = [
  { id: "1", name: "Admin", email: "admin@mercos.com", password: "admin123" },
  { id: "2", name: "User", email: "user@mercos.com", password: "user123" },
];

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    // Cria cookie de sessão
    const session = { userId: user.id, email: user.email, name: user.name };
    const token = await encrypt(session);

    const res = NextResponse.json(session);
    res.cookies.set("session", token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return res;
  } catch {
    return NextResponse.json({ error: "Erro ao logar" }, { status: 500 });
  }
}
