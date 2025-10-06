"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart2,
  ClipboardList,
  Users,
  Package,
  Globe,
  Calendar,
  ShoppingCart,
  Settings,
} from "lucide-react"

const mainMenu = [
  { name: "Indicadores", href: "/dashboard/indicadores", icon: BarChart2 },
  { name: "Pedidos", href: "/dashboard/pedidos", icon: ClipboardList },
  { name: "Clientes", href: "/dashboard/clientes", icon: Users },
  { name: "Produtos", href: "/dashboard/produtos", icon: Package },
  { name: "Portal", href: "/dashboard/portal", icon: Globe },
  { name: "Agenda", href: "/dashboard/agenda", icon: Calendar },
]

const bottomMenu = [
  { name: "E-commerce B2B", href: "/dashboard/ecommerce", icon: ShoppingCart },
  { name: "Minha Conta", href: "/dashboard/colaboradores", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  const renderLink = (item: any) => {
    const isActive = pathname.startsWith(item.href)
    const Icon = item.icon
    return (
      <Link
        key={item.name}
        href={item.href}
        className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
          isActive
            ? "bg-green-100 text-green-700 font-semibold border-l-4 border-green-600"
            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
        }`}
      >
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full ${
            isActive ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          <Icon size={16} />
        </div>
        <span>{item.name}</span>
      </Link>
    )
  }

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4 flex flex-col justify-between">
      {/* Menu principal */}
      <nav className="flex flex-col gap-2">
        {mainMenu.map((item) => renderLink(item))}
      </nav>

      {/* Itens fixos no final */}
      <div className="flex flex-col gap-2 mt-6 border-t pt-4">
        {bottomMenu.map((item) => renderLink(item))}
      </div>
    </aside>
  )
}
