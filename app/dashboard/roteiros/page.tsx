import Tabs from "../components/Tabs"

export default function RoteirosPage() {
  return (
    <div className="p-4">
      <Tabs />

      <div className="mt-6">
        <h2 className="text-gray-500 font-semibold text-sm mb-2">
          ROTEIROS PLANEJADOS
        </h2>
        <p className="text-sm text-gray-600">
          Crie e acompanhe os roteiros planejados para a sua equipe.
        </p>

        {/* Botão */}
        <div className="flex justify-end mt-4">
          <button className="bg-purple-700 text-white px-4 py-2 rounded">
            Criar roteiro
          </button>
        </div>

        {/* Tabela */}
        <div className="mt-6 border rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-2 text-left">Roteiro</th>
                <th className="px-4 py-2 text-left">Vendedor</th>
                <th className="px-4 py-2 text-left">Data</th>
                <th className="px-4 py-2 text-left">Repete</th>
                <th className="px-4 py-2 text-left">Dia da semana</th>
                <th className="px-4 py-2 text-left">Qtde. de clientes</th>
                <th className="px-4 py-2 text-left">Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  Não há roteiros criados.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
  