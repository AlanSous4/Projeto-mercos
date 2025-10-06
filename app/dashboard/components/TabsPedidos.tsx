"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TabsPedidos() {
  const pathname = usePathname()

  return (
    <div className="flex items-center border-b">
      <Link
        href="/dashboard/pedidos"
        className={`px-4 py-2 text-sm font-medium ${
          pathname.includes("/dashboard/pedidos")
            ? "border-b-2 border-black text-black"
            : "text-gray-400"
        }`}
      >
        PEDIDOS
      </Link>

      <Link
        href="/dashboard/configuracoes"
        className={`px-4 py-2 text-sm font-medium ${
          pathname.includes("/dashboard/configuracoes")
            ? "border-b-2 border-black text-black"
            : "text-gray-400"
        }`}
      >
        CONFIGURAÇÕES
      </Link>
    </div>
  )
}
