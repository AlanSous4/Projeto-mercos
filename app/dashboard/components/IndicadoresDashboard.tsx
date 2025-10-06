"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Plus } from "lucide-react"

const data = [
  { dia: 1, vendas: 0 },
  { dia: 2, vendas: 0 },
  { dia: 3, vendas: 0 },
  { dia: 4, vendas: 0 },
  { dia: 5, vendas: 0 },
  { dia: 6, vendas: 0 },
  { dia: 7, vendas: 0 },
  { dia: 8, vendas: 0 },
  { dia: 9, vendas: 0 },
  { dia: 10, vendas: 0 },
  { dia: 11, vendas: 0 },
  { dia: 12, vendas: 0 },
  { dia: 13, vendas: 0 },
  { dia: 14, vendas: 0 },
  { dia: 15, vendas: 0 },
  { dia: 16, vendas: 0 },
  { dia: 17, vendas: 0 },
  { dia: 18, vendas: 0 },
  { dia: 19, vendas: 0 },
  { dia: 20, vendas: 0 },
]

export default function IndicadoresDashboard() {
  return (
    <div className="w-full space-y-6">
      {/* Evolução de Venda */}
      <div className="bg-white border rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold uppercase">Evolução de Venda</h2>
          <span className="text-xs text-gray-500">Setembro de 2025</span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {/* Gráfico */}
          <div className="col-span-3">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="vendas" stroke="#22c55e" />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-xs text-purple-700 cursor-pointer mt-2">
              Detalhar por vendedor
            </div>
          </div>

          {/* Estatísticas */}
          <div className="flex flex-col gap-3 text-sm">
            <div>
              <p className="text-gray-500">Vendido no mês</p>
              <p className="font-semibold">R$ 0,00</p>
            </div>
            <div>
              <p className="text-gray-500">Objetivo do mês</p>
              <p className="font-semibold">R$ 0,00</p>
            </div>
            <div>
              <p className="text-gray-500">Necessário vender</p>
              <p className="font-semibold">R$ 0/dia útil</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards secundários */}
      <div className="grid grid-cols-3 gap-6">
        {/* Carteira de Clientes */}
        <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
          <h3 className="text-sm font-semibold mb-2">Carteira de Clientes</h3>
          <p className="text-3xl font-bold">0</p>
          <div className="text-xs text-gray-500 mt-2">Ativos, Inativos, Prospect</div>
          <div className="text-xs text-purple-700 cursor-pointer mt-2">Detalhar carteira</div>
        </div>

        {/* Positivação */}
        <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
          <h3 className="text-sm font-semibold mb-2">Positivação</h3>
          <p className="text-3xl font-bold">0</p>
          <div className="text-xs text-gray-500 mt-2">Novos, Ativos, Inativos</div>
          <div className="text-xs text-purple-700 cursor-pointer mt-2">Detalhar positivação</div>
        </div>

        {/* Curva ABC */}
        <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
          <h3 className="text-sm font-semibold mb-2">Curva ABC de Clientes</h3>
          <p className="text-3xl font-bold">0</p>
          <div className="text-xs text-gray-500 mt-2">Clientes na Curva A, B, C</div>
          <div className="text-xs text-purple-700 cursor-pointer mt-2">Detalhar curva ABC</div>
        </div>
      </div>

      {/* Conversão e Indicador */}
      <div className="grid grid-cols-2 gap-6">
        {/* E-commerce Card */}
        <div className="bg-white border rounded-lg shadow-sm p-4">
          <h3 className="text-sm font-semibold mb-2">Conversão do E-commerce</h3>
          <div className="p-4 border rounded text-center">
            <p className="font-medium mb-2">
              Expanda sua operação com o e-commerce B2B
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded">
              Solicite demonstração grátis
            </button>
          </div>
        </div>

        {/* Card Adicionar */}
        <div className="border-2 border-dashed rounded-lg flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50">
          <Plus className="mr-2" size={18} /> Adicionar Indicador
        </div>
      </div>
    </div>
  )
}
