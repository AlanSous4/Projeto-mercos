"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { name: "Visão Geral", href: "/dashboard/indicadores" },
  { name: "Financeiro", href: "/dashboard/financeiro" },
  { name: "Vendas", href: "/dashboard/vendas" },
  { name: "Estoque", href: "/dashboard/estoque" },
]

export function DashboardTabs() {   // <-- export NOMEADO
  const pathname = usePathname()

  return (
    <div className="w-full bg-white border-b px-6">
      <div className="flex gap-6">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href)
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`relative py-3 text-sm font-medium cursor-pointer transition-colors ${
                isActive
                  ? "text-green-700 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.name}
              {isActive && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-green-600 rounded-full"></span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
