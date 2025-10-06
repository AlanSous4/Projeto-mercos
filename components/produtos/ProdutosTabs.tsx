"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { name: "Produtos e Tabelas", href: "/dashboard/produtos/tabelas" },
  { name: "Gerenciar Estoque", href: "/dashboard/produtos/estoque" },
  { name: "Importar Fotos", href: "/dashboard/produtos/importar" },
]

export function ProdutosTabs() {
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
