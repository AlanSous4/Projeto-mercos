"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const subtabs = [
  { name: "Resumo", href: "/dashboard/indicadores/resumo" },
  { name: "Comparativos", href: "/dashboard/indicadores/comparativos" },
  { name: "Tendências", href: "/dashboard/indicadores/tendencias" },
]

export function SubTabs() {
  const pathname = usePathname()

  return (
    <div className="w-full bg-gray-50 border-b px-6">
      <div className="flex gap-4">
        {subtabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href)
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`py-2 text-sm cursor-pointer transition-colors ${
                isActive
                  ? "text-green-700 font-semibold border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
