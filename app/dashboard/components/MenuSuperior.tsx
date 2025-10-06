"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MenuSuperior() {
  const pathname = usePathname()

  const links = [
    { href: "/dashboard/colaboradores", label: "Usuários" },
    { href: "/meu-plano", label: "Plano e Conta" },
    { href: "/dashboard/sistema", label: "Sistema" },
    { href: "/condicoes-de-pagamento", label: "Políticas Comerciais" },
    { href: "/regras-frete", label: "Frete e Entrega" },
  ]

  return (
    <nav className="border-b bg-white">
      <ul className="flex flex-wrap gap-6 px-4 text-sm font-medium text-gray-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`pb-2 transition-colors ${
                pathname === link.href
                  ? "border-b-2 border-purple-600 text-purple-700"
                  : "hover:text-purple-700"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
