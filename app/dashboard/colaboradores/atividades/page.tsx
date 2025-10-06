"use client"

import DashboardMenu from "app/dashboard/components/DashboardMenu"
import Submenu from "app/dashboard/components/Submenu"
import { Plus, Mail, Phone } from "lucide-react"

export default function AtividadesPage() {
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
     

      {/* ---------- Responsável e administradores ---------- */}
      <div className="px-4 py-2 text-sm font-semibold text-gray-700">
        
      </div>

      <div className="px-4">
      
      </div>

      {/* ---------- Demais usuários ---------- */}
      <div className="px-4 py-3 text-sm font-semibold text-gray-700">
      Não foi realizada nenhuma atividade.
      </div>
    </div>
  )
}
