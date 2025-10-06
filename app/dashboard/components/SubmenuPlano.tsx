"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SubmenuPlano() {
  const pathname = usePathname()

  const links = [
    { href: "/minha-empresa", label: "Minha empresa" },
    { href: "/meu-plano", label: "Plano" },
    { href: "/exclusao-conta", label: "Exclusão da conta" },
  ]

  return (
    <aside className="border-b bg-gray-50 mt-4">
      <ul className="flex flex-row text-sm font-medium text-gray-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`px-4 py-2 border-b-2 transition-colors ${
                pathname === link.href
                  ? "border-purple-600 text-purple-700"
                  : "border-transparent hover:border-purple-600 hover:text-purple-700"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
