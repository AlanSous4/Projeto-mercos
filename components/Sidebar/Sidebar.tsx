"use client"

import Link from "next/link"
import { MENU_ITEMS } from "./config"
import type { MenuItem } from "./Sidebar.types"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-center font-bold text-xl border-b border-gray-700">
        Cosmer
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {MENU_ITEMS.map((item: MenuItem) => {
          const Icon = item.icon
          const isActive = pathname.startsWith(item.href || "")
          return (
            <Link
              key={item.key}
              href={item.href || "#"}
              className={`flex items-center px-3 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-900" : ""
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
