"use client"

import Link from "next/link"

const sections = [
  {
    title: "VENDAS",
    links: [
      { name: "Vendas", href: "#" },
      { name: "Ranking de vendedor / Meta", href: "#" },
      { name: "Relatório gerencial para representada", href: "#" },
      { name: "Movimentações do Saldo Flex", href: "#" },
    ],
  },
  {
    title: "CLIENTES",
    links: [
      { name: "Clientes", href: "#" },
      { name: "Situação da carteira de clientes", href: "#" },
      { name: "Positivação de clientes", href: "#" },
      { name: "Curva ABC de clientes", href: "#" },
      { name: "Visitas com check-in", href: "#" },
      { name: "Relatório de Atendimentos", href: "#" },
    ],
  },
  {
    title: "PRODUTOS",
    links: [
      { name: "Produtos mais vendidos", href: "#" },
      { name: "Positivação de produtos por cliente", href: "#" },
      { name: "Produtos por pedido", href: "#" },
      { name: "Estoque", href: "#" },
    ],
  },
  {
    title: "FATURAMENTO E TÍTULOS",
    links: [
      { name: "Pedidos faturados", href: "#" },
      { name: "Faturamento", href: "#" },
      { name: "Títulos", href: "#" },
    ],
  },
  {
    title: "COMISSÕES",
    links: [
      { name: "Relatório de comissões", href: "#" },
      { name: "Comissões por pedido", href: "#" },
    ],
  },
  {
    title: "OUTROS",
    links: [{ name: "E-mails enviados", href: "#" }],
  },
]

export function RelatoriosLayout() {
  return (
    <div className="w-full min-h-screen bg-white px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wide">
              {section.title}
            </h2>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-600 hover:underline cursor-pointer text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
