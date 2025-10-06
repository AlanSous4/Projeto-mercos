"use client"

import Link from "next/link"
import { Calendar, MapPinned } from "lucide-react"

export default function RoteirosPage() {
  return (
    <div className="w-full">
      {/* === Tabs === */}
      <div className="flex items-center border-b">
        <Link
          href="/dashboard/agenda"
          className="flex items-center gap-2 px-4 py-2 text-gray-400 text-sm font-medium hover:text-black"
        >
          <Calendar className="w-4 h-4" />
          AGENDA
        </Link>
        <Link
          href="/dashboard/roteiros"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
        >
          <MapPinned className="w-4 h-4" />
          ROTEIROS
        </Link>
      </div>

      {/* === Header === */}
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Roteiros planejados
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Crie e acompanhe os roteiros planejados para a sua equipe.
          </p>
        </div>

        <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded text-sm font-medium">
          Criar roteiro
        </button>
      </div>

      {/* === Tabela === */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr className="text-left border-b">
              <th className="px-6 py-3 font-medium text-gray-700">Roteiro</th>
              <th className="px-6 py-3 font-medium text-gray-700">Vendedor</th>
              <th className="px-6 py-3 font-medium text-gray-700">Data</th>
              <th className="px-6 py-3 font-medium text-gray-700">Repete</th>
              <th className="px-6 py-3 font-medium text-gray-700">Dia da semana</th>
              <th className="px-6 py-3 font-medium text-gray-700">Qtde. de clientes</th>
              <th className="px-6 py-3 font-medium text-gray-700">Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="px-6 py-4 text-gray-500">
                Não há roteiros criados.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
