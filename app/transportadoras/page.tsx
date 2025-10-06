"use client"

import HeaderDashboard from "app/dashboard/components/HeaderDashboard"
import SidebarDashboard from "app/dashboard/components/SidebarDashboard"
import MenuSuperior from "app/dashboard/components/MenuSuperior"
import SubmenuFrete from "app/dashboard/components/SubmenuFrete"

export default function TransportadoraPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <HeaderDashboard />

      <div className="flex">
        {/* Sidebar fixa */}
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 border-r bg-white hidden md:block">
          <SidebarDashboard />
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 md:ml-60 pt-20 px-4 sm:px-6 lg:px-8">
          <MenuSuperior />
          <SubmenuFrete />

          {/* Seção principal */}
          <section className="w-full max-w-6xl mx-auto bg-white border rounded-md shadow-sm mt-6 p-6 sm:p-10">
            {/* Cabeçalho */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h1 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center gap-2">
                🚚 Transportadoras
              </h1>

              {/* Botão + campo de busca */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  className="px-5 py-2 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition text-sm cursor-pointer"
                >
                  + Cadastrar transportadora
                </button>

                <div className="flex border rounded-md overflow-hidden w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Pesquisar transportadora"
                    className="flex-1 px-3 py-2 text-sm outline-none"
                  />
                  <button className="px-3 bg-gray-100 text-gray-600 hover:bg-gray-200">
                    🔍
                  </button>
                </div>
              </div>
            </div>

            {/* Lista de transportadoras */}
            <div className="divide-y">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4">
                <span className="text-gray-800 text-sm font-medium">FOB</span>
                <div className="flex gap-3 mt-2 sm:mt-0">
                  <button className="text-sm text-purple-700 hover:underline">
                    Alterar
                  </button>
                  <button className="text-sm text-red-600 hover:underline">
                    Excluir
                  </button>
                </div>
              </div>
            </div>

            {/* Rodapé com paginação */}
            <div className="text-xs text-gray-500 mt-4">
              Resultados 1 - 1 de 1
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
