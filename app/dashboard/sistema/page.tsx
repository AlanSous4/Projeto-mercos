"use client"

import { useState } from "react"
import HeaderDashboard from "app/dashboard/components/HeaderDashboard"
import SidebarDashboard from "app/dashboard/components/SidebarDashboard"
import MenuSuperior from "app/dashboard/components/MenuSuperior"


export default function SistemaPage() {
  const [periodo, setPeriodo] = useState("mensal")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Sincronização definida como: ${periodo}`)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header fixo */}
      <HeaderDashboard />

      <div className="flex">
        {/* Sidebar fixa */}
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 border-r bg-white hidden md:block">
          <SidebarDashboard />
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 md:ml-60 pt-20 px-4 sm:px-6 lg:px-8">
          <MenuSuperior />
          

          {/* Seção principal */}
          <section className="w-full max-w-5xl mx-auto bg-white border rounded-md shadow-sm mt-6 p-6 sm:p-10">
            {/* Título */}
            <h1 className="text-base sm:text-lg font-semibold text-gray-800 uppercase border-b pb-2">
              Aplicativos
            </h1>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <p className="text-sm text-gray-700 mb-4">
                  Período para exigir a sincronização dos dados:
                </p>

                {/* Radios */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-700">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="periodo"
                      value="diario"
                      checked={periodo === "diario"}
                      onChange={(e) => setPeriodo(e.target.value)}
                      className="text-purple-700 focus:ring-purple-600"
                    />
                    Diário
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="periodo"
                      value="semanal"
                      checked={periodo === "semanal"}
                      onChange={(e) => setPeriodo(e.target.value)}
                      className="text-purple-700 focus:ring-purple-600"
                    />
                    Semanal
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="periodo"
                      value="quinzenal"
                      checked={periodo === "quinzenal"}
                      onChange={(e) => setPeriodo(e.target.value)}
                      className="text-purple-700 focus:ring-purple-600"
                    />
                    Quinzenal
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="periodo"
                      value="mensal"
                      checked={periodo === "mensal"}
                      onChange={(e) => setPeriodo(e.target.value)}
                      className="text-purple-700 focus:ring-purple-600"
                    />
                    Mensal
                  </label>
                </div>
              </div>

              {/* Observação */}
              <p className="text-xs text-gray-500">
                A sincronização irá ocorrer quando o usuário se conectar à Internet pela primeira vez no dia.
              </p>

              {/* Botão salvar */}
              <div className="pt-4 border-t">
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition text-sm"
                >
                  Salvar
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}
