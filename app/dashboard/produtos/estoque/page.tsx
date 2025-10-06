"use client"

import ProdutosLayout from "../ProdutosLayout"
import { useState } from "react"

export default function ImportarFotosPage() {
  const [produtos] = useState([
    { nome: "[Exemplo] Bolsa com Alças em Couro", preco: "R$ 199,90" },
    { nome: "[Exemplo] Caixa de Som Bluetooth Branca", preco: "R$ 89,90" },
    { nome: "[Exemplo] Cama Pet Formato Toca", preco: "R$ 488,70" },
    { nome: "[Exemplo] Camisa Social Manga Longa Algodão", preco: "R$ 129,90" },
    { nome: "[Exemplo] Kit de Cosméticos para Skincare", preco: "R$ 249,90" },
    { nome: "[Exemplo] Bolsa com Alças em Couro", unidade: "Unidade", preco: "R$ 339,90"},
    { id: 2, foto: "https://via.placeholder.com/40", codigo: "002", nome: "[Exemplo] Caixa de Som Bluetooth Branca", unidade: "Unidade", precoMin: "R$ 186,90", preco: "R$ 219,90" },
    { id: 3, foto: "https://via.placeholder.com/40", codigo: "003", nome: "[Exemplo] Camisa Pet Formato Toca", unidade: "Unidade", precoMin: "R$ 488,70", preco: "R$ 575,00" },
    { id: 4, foto: "https://via.placeholder.com/40", codigo: "004", nome: "[Exemplo] Relógio de Pulso Digital", unidade: "Unidade", precoMin: "R$ 249,00", preco: "R$ 289,90" },
    { id: 5, foto: "https://via.placeholder.com/40", codigo: "005", nome: "[Exemplo] Mochila Escolar Premium", unidade: "Unidade", precoMin: "R$ 159,90", preco: "R$ 199,90" },
    { id: 6, foto: "https://via.placeholder.com/40", codigo: "006", nome: "[Exemplo] Notebook 14” Intel i5", unidade: "Unidade", precoMin: "R$ 3.200,00", preco: "R$ 3.599,00" },
    { id: 7, foto: "https://via.placeholder.com/40", codigo: "007", nome: "[Exemplo] Smartphone Android 128GB", unidade: "Unidade", precoMin: "R$ 2.100,00", preco: "R$ 2.499,00" },
    { id: 8, foto: "https://via.placeholder.com/40", codigo: "008", nome: "[Exemplo] Headset Gamer RGB", unidade: "Unidade", precoMin: "R$ 319,00", preco: "R$ 379,00" },
    { id: 9, foto: "https://via.placeholder.com/40", codigo: "009", nome: "[Exemplo] Câmera Fotográfica Compacta", unidade: "Unidade", precoMin: "R$ 899,00", preco: "R$ 1.099,00" },
    { id: 10, foto: "https://via.placeholder.com/40", codigo: "010", nome: "[Exemplo] Teclado Mecânico RGB", unidade: "Unidade", precoMin: "R$ 469,00", preco: "R$ 529,00" },
    { id: 11, foto: "https://via.placeholder.com/40", codigo: "011", nome: "[Exemplo] Monitor 27” Full HD", unidade: "Unidade", precoMin: "R$ 1.199,00", preco: "R$ 1.399,00" },
    { id: 12, foto: "https://via.placeholder.com/40", codigo: "012", nome: "[Exemplo] Impressora Multifuncional", unidade: "Unidade", precoMin: "R$ 799,00", preco: "R$ 999,00" },
    { id: 13, foto: "https://via.placeholder.com/40", codigo: "013", nome: "[Exemplo] Smartwatch Esportivo", unidade: "Unidade", precoMin: "R$ 679,00", preco: "R$ 799,00" },
    { id: 14, foto: "https://via.placeholder.com/40", codigo: "014", nome: "[Exemplo] Ventilador de Coluna 50cm", unidade: "Unidade", precoMin: "R$ 349,00", preco: "R$ 429,00" },
    { id: 15, foto: "https://via.placeholder.com/40", codigo: "015", nome: "[Exemplo] Liquidificador 900W", unidade: "Unidade", precoMin: "R$ 199,90", preco: "R$ 249,90" },
  ])

  return (
    <ProdutosLayout>
      <h1 className="text-2xl font-bold mb-6">Importar Produtos</h1>

      {/* Botões de navegação */}
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-purple-700 text-white text-sm rounded hover:bg-purple-800">
            Ajuste de estoque
          </button>
          <button className="px-4 py-2 bg-purple-700 text-white text-sm rounded hover:bg-purple-800">
            Entrada de estoque
          </button>
          <button className="px-4 py-2 bg-purple-700 text-white text-sm rounded hover:bg-purple-800">
            Ordenar por: Código
          </button>
          <button className="px-4 py-2 bg-gray-100 text-sm rounded hover:bg-gray-200">
            Nome
          </button>
        </div>

        {/* Campo de busca */}
        <div className="flex gap-2">
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

      {/* Tabela de produtos */}
      <div className="overflow-x-auto border rounded bg-white shadow-sm mb-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Estoque</th>
              <th className="px-4 py-3">Código</th>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Preço Cadastro</th>
              <th className="px-4 py-3">Movimentação</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="number" defaultValue={0} className="w-16 border rounded px-2 py-1" />
                </td>
                <td className="px-4 py-3">{index.toString().padStart(3, "0")}</td>
                <td className="px-4 py-3 text-purple-700 hover:underline cursor-pointer">
                  ✏️ {produto.nome}
                </td>
                <td className="px-4 py-3">{produto.preco}</td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:underline">🔗</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      

      {/* Rodapé */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        
      </div>
    </ProdutosLayout>
  )
}
