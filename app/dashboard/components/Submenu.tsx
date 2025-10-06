"use client"

import { usePathname, useRouter } from "next/navigation"

interface SubmenuItem {
  label: string
  icon: string
  href: string
}

interface SubmenuProps {
  items: SubmenuItem[]
}

export default function Submenu({ items }: SubmenuProps) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-6 px-4 py-3 border-b text-sm overflow-x-auto">
      {items.map((item) => (
        <button
          key={item.href}
          onClick={() => router.push(item.href)}
          className={`flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            pathname === item.href
              ? "font-semibold text-black"
              : "text-gray-500 hover:text-purple-600"
          }`}
        >
          <span>{item.icon}</span>
          {item.label}
        </button>
      ))}
    </div>
  )
}
