"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus, Settings, MessageCircle } from "lucide-react";
import { useState } from "react";
import IndicadoresDashboard from "../components/IndicadoresDashboard";


export default function IndicadoresPage() {
  const pathname = usePathname();
  const [mes, setMes] = useState("Setembro");
  const [ano, setAno] = useState("2025");

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center border-b bg-white px-6 py-3">
        {/* Tabs esquerda */}
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard/indicadores"
            className={`text-sm font-semibold flex items-center gap-1 cursor-pointer ${
              pathname === "/dashboard/indicadores"
                ? "text-black border-b-2 border-black pb-1"
                : "text-gray-500 hover:text-black"
            }`}
          >
            📊 PAINEL
          </Link>
          <Link
            href="/dashboard/relatorios"
            className={`text-sm font-medium flex items-center gap-1 cursor-pointer ${
              pathname === "/dashboard/relatorios"
                ? "text-black border-b-2 border-black pb-1"
                : "text-gray-500 hover:text-black"
            }`}
          >
            📑 RELATÓRIOS
          </Link>
        </div>

        {/* Ações direita */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/indicadores/novo"
            className="flex items-center gap-1 bg-purple-700 hover:bg-purple-800 text-white px-3 py-1.5 rounded text-sm shadow-sm cursor-pointer"
          >
            <Plus size={16} /> Adicionar Indicador
          </Link>
          <Link
            href="/dashboard/whatsapp"
            className="p-1.5 rounded hover:bg-gray-100 text-green-600 cursor-pointer"
          >
            <MessageCircle size={18} />
          </Link>
          <Link
            href="/dashboard/configuracoes"
            className="p-1.5 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          >
            <Settings size={18} />
          </Link>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-4 bg-white px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Filtrar por:</span>
          <select
            value={mes}
            onChange={(e) => setMes(e.target.value)}
            className="border rounded px-2 py-1 text-sm cursor-pointer"
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
          className="border rounded px-2 py-1 text-sm cursor-pointer"
        >
          <option>2024</option>
          <option>2025</option>
        </select>

        <select className="border rounded px-2 py-1 text-sm cursor-pointer">
          <option>Todas os vendedores</option>
        </select>
      </div>

      {/* Conteúdo abaixo (gráficos e cards) continua igual ao que já fizemos */}
      <div className="flex-1 p-6 space-y-6">
        <div className="bg-white rounded-lg border shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold">Evolução de venda</h2>
            <span className="text-xs text-gray-500">
              {mes} de {ano}
            </span>
          </div>
          <div className="w-full min-h-screen bg-gray-50 p-6">
            <IndicadoresDashboard />
          </div>
          <div className="mt-2 text-xs text-right text-purple-700 cursor-pointer">
            Detalhar por vendedor
          </div>
        </div>
      </div>
    </div>
  );
}
