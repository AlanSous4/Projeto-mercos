import ProdutosLayout from "./ProdutosLayout"

export default function TabelasPage() {
  return (
    <ProdutosLayout>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-800">
            + Cadastrar produto
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded-md text-sm hover:bg-gray-200">
            Importar produtos
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded-md text-sm hover:bg-gray-200">
            Mais opções
          </button>
        </div>

        <div className="flex gap-3">
          <select className="border rounded-md text-sm px-3 py-2">
            <option>Todas as categorias</option>
          </select>
          <input
            type="text"
            placeholder="Pesquise por Código ou Nome"
            className="border rounded-md text-sm px-3 py-2"
          />
        </div>
      </div>

      {/* Tabela placeholder */}
      <div className="mt-6 border rounded-md bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-2 px-3 text-left">Fotos</th>
              <th className="py-2 px-3 text-left">Código</th>
              <th className="py-2 px-3 text-left">Nome</th>
              <th className="py-2 px-3 text-left">Variações</th>
              <th className="py-2 px-3 text-left">IPI</th>
              <th className="py-2 px-3 text-left">Unidade</th>
              <th className="py-2 px-3 text-left">Comissão</th>
              <th className="py-2 px-3 text-left">Preço Mínimo</th>
              <th className="py-2 px-3 text-left">Preço de Tabela</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-3">📷</td>
              <td className="py-2 px-3">001</td>
              <td className="py-2 px-3">Produto Exemplo</td>
              <td className="py-2 px-3">---</td>
              <td className="py-2 px-3">---</td>
              <td className="py-2 px-3">Unidade</td>
              <td className="py-2 px-3">---</td>
              <td className="py-2 px-3">R$ 100,00</td>
              <td className="py-2 px-3">R$ 120,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ProdutosLayout>
  )
}
