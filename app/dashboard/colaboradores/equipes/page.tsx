"use client"

import DashboardMenu from "app/dashboard/components/DashboardMenu"
import Submenu from "app/dashboard/components/Submenu"
import { Plus, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function EquipesPage() {
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
           Nova equipe
        </button>
      </div>

      {/* ---------- Responsável e administradores ---------- */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <Image
          src="/ilustracao-usuario-equipes.png" // coloque sua imagem na pasta public
          alt="Ilustração pedidos"
          width={200}
          height={200}
        />

        <h2 className="mt-6 text-xl font-bold text-gray-900">
        Nenhuma equipe cadastrada
        </h2>
        <p className="mt-3 text-sm text-gray-500 max-w-md">
        Crie grupos de usuários de acordo com a estrutura da sua empresa. Em seguida, defina quem serão os responsáveis: usuários que terão acesso aos clientes, pedidos e relatórios de cada equipe. Vamos começar?
        </p>

       
      </div>

      

      {/* ---------- Demais usuários ---------- */}
     
    </div>
  )
}
