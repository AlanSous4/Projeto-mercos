"use client"

import ProdutosLayout from "../ProdutosLayout"
import { useState } from "react"

export default function TabelasPage() {
  const [produtos] = useState([
    { id: 1, foto: "https://via.placeholder.com/40", codigo: "001", nome: "[Exemplo] Bolsa com Alças em Couro", unidade: "Unidade", precoMin: "R$ 339,90", precoTabela: "R$ 399,99" },
    { id: 2, foto: "https://via.placeholder.com/40", codigo: "002", nome: "[Exemplo] Caixa de Som Bluetooth Branca", unidade: "Unidade", precoMin: "R$ 186,90", precoTabela: "R$ 219,90" },
    { id: 3, foto: "https://via.placeholder.com/40", codigo: "003", nome: "[Exemplo] Camisa Pet Formato Toca", unidade: "Unidade", precoMin: "R$ 488,70", precoTabela: "R$ 575,00" },
    { id: 4, foto: "https://via.placeholder.com/40", codigo: "004", nome: "[Exemplo] Relógio de Pulso Digital", unidade: "Unidade", precoMin: "R$ 249,00", precoTabela: "R$ 289,90" },
    { id: 5, foto: "https://via.placeholder.com/40", codigo: "005", nome: "[Exemplo] Mochila Escolar Premium", unidade: "Unidade", precoMin: "R$ 159,90", precoTabela: "R$ 199,90" },
    { id: 6, foto: "https://via.placeholder.com/40", codigo: "006", nome: "[Exemplo] Notebook 14” Intel i5", unidade: "Unidade", precoMin: "R$ 3.200,00", precoTabela: "R$ 3.599,00" },
    { id: 7, foto: "https://via.placeholder.com/40", codigo: "007", nome: "[Exemplo] Smartphone Android 128GB", unidade: "Unidade", precoMin: "R$ 2.100,00", precoTabela: "R$ 2.499,00" },
    { id: 8, foto: "https://via.placeholder.com/40", codigo: "008", nome: "[Exemplo] Headset Gamer RGB", unidade: "Unidade", precoMin: "R$ 319,00", precoTabela: "R$ 379,00" },
    { id: 9, foto: "https://via.placeholder.com/40", codigo: "009", nome: "[Exemplo] Câmera Fotográfica Compacta", unidade: "Unidade", precoMin: "R$ 899,00", precoTabela: "R$ 1.099,00" },
    { id: 10, foto: "https://via.placeholder.com/40", codigo: "010", nome: "[Exemplo] Teclado Mecânico RGB", unidade: "Unidade", precoMin: "R$ 469,00", precoTabela: "R$ 529,00" },
    { id: 11, foto: "https://via.placeholder.com/40", codigo: "011", nome: "[Exemplo] Monitor 27” Full HD", unidade: "Unidade", precoMin: "R$ 1.199,00", precoTabela: "R$ 1.399,00" },
    { id: 12, foto: "https://via.placeholder.com/40", codigo: "012", nome: "[Exemplo] Impressora Multifuncional", unidade: "Unidade", precoMin: "R$ 799,00", precoTabela: "R$ 999,00" },
    { id: 13, foto: "https://via.placeholder.com/40", codigo: "013", nome: "[Exemplo] Smartwatch Esportivo", unidade: "Unidade", precoMin: "R$ 679,00", precoTabela: "R$ 799,00" },
    { id: 14, foto: "https://via.placeholder.com/40", codigo: "014", nome: "[Exemplo] Ventilador de Coluna 50cm", unidade: "Unidade", precoMin: "R$ 349,00", precoTabela: "R$ 429,00" },
    { id: 15, foto: "https://via.placeholder.com/40", codigo: "015", nome: "[Exemplo] Liquidificador 900W", unidade: "Unidade", precoMin: "R$ 199,90", precoTabela: "R$ 249,90" },
  ])

  return (
    <ProdutosLayout>
      {/* Ações de topo */}
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-purple-700 text-white text-sm font-semibold rounded hover:bg-purple-800 transition">
            + Cadastrar produto
          </button>
          <button className="px-4 py-2 bg-gray-100 text-sm font-semibold rounded hover:bg-gray-200 transition">
            Importar produtos
          </button>
          <button className="px-4 py-2 bg-gray-100 text-sm font-semibold rounded hover:bg-gray-200 transition">
            Mais opções
          </button>
        </div>

        <div className="flex gap-2">
          <select className="border rounded px-3 py-2 text-sm">
            <option>Todas as categorias</option>
            <option>Bolsas</option>
            <option>Eletrônicos</option>
          </select>
          <input
            type="text"
            placeholder="Pesquise por Código ou Nome"
            className="border rounded px-3 py-2 text-sm w-64"
          />
          <button className="px-4 py-2 bg-purple-700 text-white text-sm rounded hover:bg-purple-800">
            🔍
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto border rounded bg-white shadow-sm">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Fotos</th>
              <th className="px-4 py-3">Código</th>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Unidade</th>
              <th className="px-4 py-3">Preço Mínimo</th>
              <th className="px-4 py-3">Preço de Tabela</th>
              <th className="px-4 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">
                  <img
                    src={produto.foto}
                    alt={produto.nome}
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3">{produto.codigo}</td>
                <td className="px-4 py-3 text-purple-700 hover:underline cursor-pointer">
                  ✏️ {produto.nome}
                </td>
                <td className="px-4 py-3">{produto.unidade}</td>
                <td className="px-4 py-3">{produto.precoMin}</td>
                <td className="px-4 py-3">{produto.precoTabela}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-gray-500 hover:text-black">👁️</button>
                  <button className="text-gray-500 hover:text-black">🖊️</button>
                  <button className="text-gray-500 hover:text-red-600">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>Resultados 1 - {produtos.length} de {produtos.length}</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">Próxima</button>
        </div>
      </div>
    </ProdutosLayout>
  )
}
