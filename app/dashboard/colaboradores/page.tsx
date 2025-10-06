"use client"

import DashboardMenu from "../components/DashboardMenu"
import Submenu from "../components/Submenu"
import { Plus, Mail, Phone } from "lucide-react"

export default function ColaboradoresPage() {
  return (
    <div className="flex flex-col w-full bg-white rounded-md border">
      {/* ---------- Menu superior ---------- */}
      <DashboardMenu />

      {/* ---------- Submenu reutilizável ---------- */}
      <Submenu
        items={[
          { label: "Todos", icon: "👤", href: "/dashboard/colaboradores" },
          { label: "Equipes", icon: "👥", href: "/dashboard/colaboradores/equipes" },
          { label: "Atividades", icon: "📌", href: "/dashboard/colaboradores/atividades" },
        ]}
      />

      {/* ---------- Botão Novo usuário ---------- */}
      <div className="px-4 py-3">
        <button className="flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-purple-800">
          <Plus className="w-4 h-4" />
          Novo usuário
        </button>
      </div>

      {/* ---------- Responsável e administradores ---------- */}
      <div className="px-4 py-2 text-sm font-semibold text-gray-700">
        RESPONSÁVEL E ADMINISTRADORES
      </div>

      <div className="px-4">
        <div className="bg-gray-100 p-4 rounded-md flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white text-lg font-bold">
            AS
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Alan Sousa</span>
            <span className="text-gray-500 text-sm">
              Responsável pelo sistema
            </span>

            <div className="flex items-center gap-2 text-sm mt-2 text-gray-600">
              <Mail className="w-4 h-4" />
              alan031085@gmail.com
            </div>

            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <Phone className="w-4 h-4" />
              (11) 99999-3345
            </div>

            <button className="mt-3 px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-200 cursor-pointer">
              ✏️ Alterar
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Demais usuários ---------- */}
      <div className="px-4 py-3 text-sm font-semibold text-gray-700">
        DEMAIS USUÁRIOS
      </div>
    </div>
  )
}
