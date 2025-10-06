"use client"

import HeaderDashboard from "../dashboard/components/HeaderDashboard"
import SidebarDashboard from "../dashboard/components/SidebarDashboard"
import MenuSuperior from "../dashboard/components/MenuSuperior"
import SubmenuPlano from "../dashboard/components/SubmenuPlano"

export default function MeuPlanoPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <HeaderDashboard />

      <div className="flex">
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 border-r bg-white">
          <SidebarDashboard />
        </aside>

        <main className="flex-1 ml-60 pt-20 px-6">
          <MenuSuperior />
          <SubmenuPlano />

          <section className="px-6 py-8 space-y-8">
            {/* Título */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Ouro</h1>
              <p className="text-gray-500">Seu plano atual</p>
            </div>

            {/* Bloco dúvidas */}
            <div className="border rounded-md bg-white p-6 shadow-sm">
              <h2 className="text-gray-800 font-semibold mb-2">
                Dúvidas sobre seu plano?
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Entre em contato por chat se desejar verificar qualquer detalhe
                do seu contrato, obter informações sobre pagamentos ou tirar
                dúvidas sobre o sistema. Estamos aqui para te ajudar.
              </p>
              <button className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800">
                Abrir chat
              </button>
            </div>

            {/* Boletos */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                Boletos em aberto
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border bg-white text-sm">
                  <thead className="bg-gray-50">
                    <tr className="text-left text-gray-600">
                      <th className="p-3 border-b">Fatura</th>
                      <th className="p-3 border-b">Data de vencimento</th>
                      <th className="p-3 border-b">NFS-e</th>
                      <th className="p-3 border-b">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="p-3 text-gray-500 text-center">
                        Não há boletos em aberto
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notas fiscais */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                Notas fiscais
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border bg-white text-sm">
                  <thead className="bg-gray-50">
                    <tr className="text-left text-gray-600">
                      <th className="p-3 border-b">Número</th>
                      <th className="p-3 border-b">Data de emissão</th>
                      <th className="p-3 border-b">Descrição</th>
                      <th className="p-3 border-b">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="p-3 text-gray-500 text-center">
                        Não foi possível carregar as informações financeiras da sua conta.
                        Tente novamente mais tarde.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
