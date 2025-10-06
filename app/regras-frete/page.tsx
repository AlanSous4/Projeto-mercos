"use client"

import HeaderDashboard from "app/dashboard/components/HeaderDashboard"
import SidebarDashboard from "app/dashboard/components/SidebarDashboard"
import MenuSuperior from "app/dashboard/components/MenuSuperior"
import SubmenuFrete from "app/dashboard/components/SubmenuFrete"
import Image from "next/image"

export default function RegrasFretePage() {
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
            <h1 className="text-base sm:text-lg font-semibold text-gray-800 uppercase border-b pb-2">
              Opções de Frete
            </h1>

            <p className="text-sm text-gray-700 mt-4 mb-8">
              Escolha e ative uma das opções disponíveis para automatizar o cálculo do valor de frete nos pedidos
            </p>

            {/* Grid de opções */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="border rounded-lg shadow-sm p-6 flex flex-col items-center justify-center bg-white hover:shadow-md transition">
                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-md mb-4">
                  <span className="text-gray-700 font-bold text-lg">≡</span>
                </div>
                <h2 className="text-base font-semibold text-gray-800">REGRAS MANUAIS</h2>
                <p className="text-xs text-gray-500 mt-1">Inativa</p>
                <button className="mt-4 text-sm text-purple-700 hover:underline">
                  Configurar →
                </button>
              </div>

              {/* Card 2 */}
              <div className="border rounded-lg shadow-sm p-6 flex flex-col items-center justify-center bg-white hover:shadow-md transition">
                <Image
                  src="/frenet-logo.png"
                  alt="Frenet"
                  width={80}
                  height={40}
                  className="mb-4 object-contain"
                />
                <h2 className="text-base font-semibold text-gray-800">FRENET</h2>
                <p className="text-xs text-gray-500 mt-1">Inativa</p>
                <button className="mt-4 text-sm text-purple-700 hover:underline">
                  Configurar →
                </button>
              </div>
            </div>

            {/* Alerta */}
            <div className="mt-8 border-t pt-4 text-sm text-gray-600 flex items-center gap-2 bg-gray-50 p-4 rounded-md">
              <span className="text-purple-700 font-semibold">ℹ</span>
              Só é possível ter uma opção ativa
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
