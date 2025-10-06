"use client"

import HeaderDashboard from "../dashboard/components/HeaderDashboard"
import SidebarDashboard from "../dashboard/components/SidebarDashboard"
import MenuSuperior from "../dashboard/components/MenuSuperior"
import SubmenuPlano from "../dashboard/components/SubmenuPlano"
import Link from "next/link"

export default function ExclusaoContaPage() {
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
          <SubmenuPlano />

          {/* Conteúdo da exclusão de conta */}
          <section className="w-full max-w-5xl mx-auto bg-white border rounded-md shadow-sm mt-6 p-6 sm:p-10">
            {/* Título */}
            <h1 className="text-base sm:text-lg font-semibold text-gray-800 uppercase">
              Exclusão da Conta
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Entenda como funciona a exclusão da conta.
            </p>

            {/* Subtítulo */}
            <h2 className="mt-6 text-base sm:text-lg font-semibold text-gray-700">
              Dúvidas sobre a exclusão da conta?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Entre em contato conosco via chat para entender os detalhes do seu contrato e,
              se desejar, solicite a exclusão da sua conta.
            </p>

            {/* Botão Abrir chat */}
            <div className="mt-6">
              <Link
                href="/chat-suporte" // 🔑 ajuste a rota do seu chat aqui
                className="inline-block px-6 py-2 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition"
              >
                Abrir chat
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
