import TabsIndicadores from "@/app/dashboard/components/TabsIndicadores"
import SidebarDashboard from "app/dashboard/components/SidebarDashboard"

export default function RelatoriosPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Barra de abas superior */}
      <TabsIndicadores />

      <div className="flex">
        {/* Sidebar fixa à esquerda */}
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 border-r bg-white">
          <SidebarDashboard />
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 ml-60 pt-20 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna 1 */}
            <div className="space-y-8">
              {/* Vendas */}
              <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Vendas
                </h2>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Vendas</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Ranking de vendedor / Meta</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Relatório gerencial para representada</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Movimentações do Saldo Flex</a></li>
                </ul>
              </section>

              {/* Clientes */}
              <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Clientes
                </h2>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Clientes</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Situação da carteira de clientes</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Positivação de clientes</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Curva ABC de clientes</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Visitas com check-in</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Relatório de Atendimentos</a></li>
                </ul>
              </section>

              {/* Produtos */}
              <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Produtos
                </h2>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Produtos mais vendidos</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Positivação de produtos por cliente</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Produtos por pedido</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Estoque</a></li>
                </ul>
              </section>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-8">
              {/* Faturamento e títulos */}
              <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Faturamento e Títulos
                </h2>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Pedidos faturados</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Faturamento</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Títulos</a></li>
                </ul>
              </section>

              {/* Comissões */}
              <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Comissões
                </h2>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Relatório de comissões</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">Comissões por pedido</a></li>
                </ul>
              </section>

              {/* Outros */}
              <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Outros
                </h2>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-blue-600 hover:underline cursor-pointer">E-mails enviados</a></li>
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
