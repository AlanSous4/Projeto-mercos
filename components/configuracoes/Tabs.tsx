"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { name: "Campos extras", href: "/dashboard/configuracoes/campos-extras" },
  { name: "Status de pedido", href: "/dashboard/configuracoes/status-pedido" },
  { name: "Tipo de pedido", href: "/dashboard/configuracoes/tipo-pedido" },
  { name: "Geral", href: "/dashboard/configuracoes/geral" },
]

export function Tabs() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-6 border-b pb-2 mb-6 overflow-x-auto">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`cursor-pointer whitespace-nowrap transition 
            ${pathname === tab.href
              ? "text-purple-600 font-bold border-b-2 border-purple-600"
              : "text-gray-600 hover:text-purple-600"}
          `}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  )
}
