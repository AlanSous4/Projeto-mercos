"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Briefcase, FileText, Trash2 } from "lucide-react"

const submenu = [
  { name: "Condições de Pagamento", href: "/minha-empresa", icon: Briefcase },
  { name: "Acréscimos ou Descontos", href: "/meu-plano", icon: FileText },
  { name: "Rentabilidade", href: "/exclusao-conta", icon: Trash2 },
]

export default function SubmenuCondicoes() {
  const pathname = usePathname()

  return (
    <div className="w-full border-b bg-gray-50">
      <nav className="flex gap-6 px-4 sm:px-6 lg:px-8 overflow-x-auto">
        {submenu.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 py-3 text-sm whitespace-nowrap transition ${
                isActive
                  ? "text-gray-900 font-semibold border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
