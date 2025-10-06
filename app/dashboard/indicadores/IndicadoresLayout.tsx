"use client"

import { useState } from "react"
import { Plus, Settings, MessageCircle } from "lucide-react"
import Link from "next/link"


export default function IndicadoresLayout() {
  const [abaAtiva, setAbaAtiva] = useState("painel")
  const [mes, setMes] = useState("Setembro")
  const [ano, setAno] = useState("2025")

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center border-b bg-white px-6 py-3">
        {/* Tabs esquerda */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setAbaAtiva("painel")}
            className={`text-sm font-semibold flex items-center gap-1 ${
              abaAtiva === "painel"
                ? "text-black border-b-2 border-black pb-1"
                : "text-gray-500 hover:text-black"
            }`}
          >
            📊 PAINEL
          </button>
          <button
            onClick={() => setAbaAtiva("relatorios")}
            className={`text-sm font-medium flex items-center gap-1 ${
              abaAtiva === "relatorios"
                ? "text-black border-b-2 border-black pb-1"
                : "text-gray-500 hover:text-black"
            }`}
          >
            📑 RELATÓRIOS
          </button>
        </div>

        {/* Ações direita */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 bg-purple-700 hover:bg-purple-800 text-white px-3 py-1.5 rounded text-sm shadow-sm">
            <Plus size={16} /> Adicionar Indicador
          </button>
          <button className="p-1.5 rounded hover:bg-gray-100 text-green-600">
            <MessageCircle size={18} />
          </button>
          <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600">
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-4 bg-white px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Filtrar por:</span>
          <select
            value={mes}
            onChange={(e) => setMes(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            <option>Janeiro</option>
            <option>Fevereiro</option>
            <option>Março</option>
            <option>Abril</option>
            <option>Maio</option>
            <option>Junho</option>
            <option>Julho</option>
            <option>Agosto</option>
            <option>Setembro</option>
            <option>Outubro</option>
            <option>Novembro</option>
            <option>Dezembro</option>
          </select>
        </div>

        <select
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option>2024</option>
          <option>2025</option>
        </select>

        <select className="border rounded px-2 py-1 text-sm">
          <option>Todas os vendedores</option>
        </select>
      </div>

      {/* Conteúdo abaixo continua igual ao que já te passei */}
      <div className="flex-1 p-6 space-y-6">
        {/* Evolução de vendas */}
        <div className="bg-white rounded-lg border shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold">Evolução de venda</h2>
            <span className="text-xs text-gray-500">
              {mes} de {ano}
            </span>
          </div>
          <div className="h-48 flex items-center justify-center text-gray-400">
            (Gráfico de vendas aqui)
          </div>
          <div className="mt-2 text-xs text-right text-purple-700 cursor-pointer">
            Detalhar por vendedor
          </div>
        </div>

        {/* Cards principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carteira de clientes */}
          <div className="bg-white rounded-lg border shadow-sm p-4 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold mb-2">Carteira de clientes</h3>
            <div className="text-3xl font-bold">0</div>
            <p className="text-xs text-gray-500 mt-1">Clientes</p>
            <button className="mt-3 text-xs text-purple-700 hover:underline">
              Detalhar carteira
            </button>
          </div>

          {/* Positivação */}
          <div className="bg-white rounded-lg border shadow-sm p-4 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold mb-2">Positivação</h3>
            <div className="text-3xl font-bold">0</div>
            <p className="text-xs text-gray-500 mt-1">Clientes positivados</p>
            <button className="mt-3 text-xs text-purple-700 hover:underline">
              Detalhar positivação
            </button>
          </div>

          {/* Curva ABC */}
          <div className="bg-white rounded-lg border shadow-sm p-4 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold mb-2">Curva ABC de clientes</h3>
            <div className="text-3xl font-bold">0</div>
            <p className="text-xs text-gray-500 mt-1">Clientes</p>
            <button className="mt-3 text-xs text-purple-700 hover:underline">
              Detalhar curva ABC
            </button>
          </div>
        </div>

        {/* Conversão do e-commerce */}
        <div className="bg-white rounded-lg border shadow-sm p-4">
          <h3 className="text-sm font-semibold mb-2">Conversão do E-commerce</h3>
          <div className="text-xs text-gray-500">
            Expanda sua operação com o e-commerce B2B
          </div>
        </div>
      </div>
    </div>
  )
}
