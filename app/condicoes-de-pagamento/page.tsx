"use client"

import { useState } from "react"
import HeaderDashboard from "app/dashboard/components/HeaderDashboard"
import SidebarDashboard from "app/dashboard/components/SidebarDashboard"
import MenuSuperior from "app/dashboard/components/MenuSuperior"
import SubmenuCondicoes from "app/dashboard/components/SubmenuCondicoes"

export default function CondicoesPagamentosPage() {
  const [periodo, setPeriodo] = useState("mensal")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Sincronização definida como: ${periodo}`)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <HeaderDashboard />

      <div className="flex">
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 border-r bg-white hidden md:block">
          <SidebarDashboard />
        </aside>

        <main className="flex-1 md:ml-60 pt-20 px-4 sm:px-6 lg:px-8">
          <MenuSuperior />
          <SubmenuCondicoes />  {/* ✅ novo submenu inserido */}

          {/* Seção principal */}
          <section className="w-full max-w-5xl mx-auto bg-white border rounded-md shadow-sm mt-6 p-6 sm:p-10">
            <h1 className="text-base sm:text-lg font-semibold text-gray-800 uppercase border-b pb-2">
            CONDIÇÕES DE PAGAMENTO
            </h1>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <p className="text-sm text-gray-700 mb-4">
                Defina as condições de pagamento praticadas pela empresa, permitindo que estas sejam selecionadas nos pedidos.
                </p>

                
              </div>

              <div className="pt-4 border-t">
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition text-sm cursor-pointer"
                >
                  Nova condição de pagamento
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}
