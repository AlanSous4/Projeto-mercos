"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, CreditCard, Settings, Truck, FileText } from "lucide-react"

const tabs = [
  { name: "Usuários", href: "/dashboard/usuarios", icon: Users },
  { name: "Plano e Conta", href: "/dashboard/plano", icon: CreditCard },
  { name: "Sistema", href: "/dashboard/sistema", icon: Settings },
  { name: "Políticas Comerciais", href: "/dashboard/politicas", icon: FileText },
  { name: "Frete e Entrega", href: "/dashboard/frete", icon: Truck },
]

export function DashboardTabs() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap border-b border-gray-200 bg-white px-4 sm:px-6">
      <ul className="flex w-full overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href)
          return (
            <li key={tab.name}>
              <Link
                href={tab.href}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-b-2 border-indigo-600 text-indigo-600 cursor-pointer"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
