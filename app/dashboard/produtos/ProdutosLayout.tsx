"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState, ReactNode } from "react"

export default function ProdutosLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)

  const handleNavigation = (path: string) => {
    setActiveTab(path)
    router.push(path)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Tabs principais */}
      <div className="bg-white border-b">
        <div className="flex items-center gap-6 px-6">
          <button
            onClick={() => router.push("/dashboard/produtos/tabelas")}
            className={`py-4 text-sm font-semibold border-b-2 cursor-pointer ${
              pathname.includes("/produtos")
                ? "text-black border-black"
                : "text-gray-400 border-transparent"
            }`}
          >
            📦 PRODUTOS
          </button>

          <button
            onClick={() => router.push("/dashboard/promocoes")}
            className={`py-4 text-sm font-semibold border-b-2 cursor-pointer ${
              pathname === "/dashboard/promocoes"
                ? "text-black border-black"
                : "text-gray-400 border-transparent"
            }`}
          >
            💸 PROMOÇÕES
          </button>

          <button
            onClick={() => router.push("/dashboard/destaques")}
            className={`py-4 text-sm font-semibold border-b-2 cursor-pointer ${
              pathname === "/dashboard/destaques"
                ? "text-black border-black"
                : "text-gray-400 border-transparent"
            }`}
          >
            ⭐ DESTAQUES
          </button>

          <button
            onClick={() => router.push("/dashboard/categorias")}
            className={`py-4 text-sm font-semibold border-b-2 cursor-pointer ${
              pathname === "/dashboard/categorias"
                ? "text-black border-black"
                : "text-gray-400 border-transparent"
            }`}
          >
            ⚙️ CONFIGURAÇÕES
          </button>
        </div>
      </div>

      {/* Subtabs de PRODUTOS */}
      {pathname.includes("/dashboard/produtos") && (
        <div className="bg-gray-100 border-b">
          <div className="flex items-center gap-4 px-6">
            <button
              onClick={() => handleNavigation("/dashboard/produtos/tabelas")}
              className={`py-3 text-sm border-b-2 cursor-pointer ${
                activeTab === "/dashboard/produtos/tabelas"
                  ? "text-purple-700 border-purple-700 font-semibold"
                  : "text-gray-500 border-transparent"
              }`}
            >
              Produtos e Tabelas
            </button>
            <button
              onClick={() => handleNavigation("/dashboard/produtos/estoque")}
              className={`py-3 text-sm border-b-2 cursor-pointer ${
                activeTab === "/dashboard/produtos/estoque"
                  ? "text-purple-700 border-purple-700 font-semibold"
                  : "text-gray-500 border-transparent"
              }`}
            >
              Gerenciar Estoque
            </button>
            <button
              onClick={() => handleNavigation("/dashboard/produtos/importar")}
              className={`py-3 text-sm border-b-2 cursor-pointer ${
                activeTab === "/dashboard/produtos/importar"
                  ? "text-purple-700 border-purple-700 font-semibold"
                  : "text-gray-500 border-transparent"
              }`}
            >
              Importar Fotos
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo renderizado */}
      <div className="p-6">{children}</div>
    </div>
  )
}
