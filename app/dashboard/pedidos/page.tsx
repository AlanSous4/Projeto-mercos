// app/dashboard/pedidos/page.tsx
"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

export default function PedidosPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)

  const handleNavigation = (path: string) => {
    setActiveTab(path)
    router.push(path)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Tabs de navegação */}
      <div className="bg-white border-b">
        <div className="flex items-center gap-6 px-6">
          <button
            onClick={() => handleNavigation("/dashboard/pedidos")}
            className={`flex items-center gap-2 py-4 text-sm font-semibold border-b-2 ${
              activeTab === "/dashboard/pedidos"
                ? "text-black border-black"
                : "text-gray-400 border-transparent"
            }`}
          >
            <span>📄</span> PEDIDOS
          </button>

          <button
            onClick={() => handleNavigation("/dashboard/configuracoes")}
            className={`flex items-center gap-2 py-4 text-sm font-semibold border-b-2 ${
              activeTab === "/dashboard/configuracoes"
                ? "text-black border-black"
                : "text-gray-400 border-transparent"
            }`}
          >
            <span>⚙️</span> CONFIGURAÇÕES
          </button>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <Image
          src="/ilustracao-pedidos.png" // coloque sua imagem na pasta public
          alt="Ilustração pedidos"
          width={200}
          height={200}
        />

        <h2 className="mt-6 text-xl font-bold text-gray-900">
          Comece hoje mesmo a criar e controlar pedidos com o Mercos!
        </h2>
        <p className="mt-3 text-sm text-gray-500 max-w-md">
          Crie orçamentos e pedidos de um jeito ágil e fácil, agora com ajuda
          de Inteligência Artificial. Por aqui os seus pedidos ficam em um
          espaço organizado, tudo em um só lugar. Vamos começar?
        </p>

        <button className="mt-6 px-6 py-3 rounded-md bg-purple-700 text-white font-semibold hover:bg-purple-800 transition">
          + Criar meu primeiro orçamento
        </button>
      </div>
    </div>
  )
}
