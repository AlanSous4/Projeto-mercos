"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState, ReactNode } from "react"

export default function ConfiguracoesLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)

  const handleNavigation = (path: string) => {
    setActiveTab(path)
    router.push(path)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Abas principais */}
      <div className="bg-white border-b">
        <div className="flex items-center gap-6 px-6">
          <button
            onClick={() => router.push("/dashboard/pedidos")}
            className={`py-4 text-sm font-semibold border-b-2 ${
              pathname.includes("/pedidos")
                ? "text-black border-black"
                : "text-gray-400 border-transparent"
            }`}
          >
            📄 PEDIDOS
          </button>

          <button
            onClick={() => router.push("/dashboard/configuracoes")}
            className={`py-4 text-sm font-semibold border-b-2 ${
              pathname.includes("/configuracoes")
                ? "text-black border-black"
                : "text-gray-400 border-transparent"
            }`}
          >
            ⚙️ CONFIGURAÇÕES
          </button>
        </div>
      </div>

      {/* Subtabs de CONFIGURAÇÕES */}
      {pathname.includes("/dashboard/configuracoes") && (
        <div className="bg-gray-100 border-b">
          <div className="flex items-center gap-4 px-6">
            <button
              onClick={() => handleNavigation("/dashboard/configuracoes/campos-extras")}
              className={`py-3 text-sm border-b-2 cursor-pointer ${
                activeTab === "/dashboard/configuracoes/campos-extras"
                  ? "text-purple-700 border-purple-700 font-semibold"
                  : "text-gray-500 border-transparent"
              }`}
            >
              Campos extras
            </button>
            <button
              onClick={() => handleNavigation("/dashboard/configuracoes/status-pedido")}
              className={`py-3 text-sm border-b-2 cursor-pointer ${
                activeTab === "/dashboard/configuracoes/status-pedido"
                  ? "text-purple-700 border-purple-700 font-semibold"
                  : "text-gray-500 border-transparent"
              }`}
            >
              Status de pedido
            </button>
            <button
              onClick={() => handleNavigation("/dashboard/configuracoes/tipo-pedido")}
              className={`py-3 text-sm border-b-2 cursor-pointer ${
                activeTab === "/dashboard/configuracoes/tipo-pedido"
                  ? "text-purple-700 border-purple-700 font-semibold"
                  : "text-gray-500 border-transparent"
              }`}
            >
              Tipo de pedido
            </button>
            <button
              onClick={() => handleNavigation("/dashboard/configuracoes/geral")}
              className={`py-3 text-sm border-b-2 cursor-pointer ${
                activeTab === "/dashboard/configuracoes/geral"
                  ? "text-purple-700 border-purple-700 font-semibold"
                  : "text-gray-500 border-transparent"
              }`}
            >
              Geral
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div className="p-6">{children}</div>
    </div>
  )
}
