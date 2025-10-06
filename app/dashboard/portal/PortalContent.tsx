"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function PortalContent() {
  return (
    <div className="p-10">
      {/* === HERO === */}
      <div className="bg-gradient-to-r from-[#f7f5ff] to-[#f2fdf6] rounded-2xl p-12 flex items-center justify-between relative overflow-hidden">
        {/* Texto */}
        <div className="max-w-xl">
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
            NOVIDADE
          </span>
          <h1 className="text-3xl font-bold mt-4 leading-snug">
            Ganhe produtividade e fortaleça o relacionamento <br /> com o seu cliente
          </h1>
          <p className="mt-3 text-gray-600 text-base">
            Disponibilize o histórico de compras, pagamentos e notas fiscais integradas pelo ERP de forma
            segura e organizada pelo portal de relacionamento.
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Criar portal
          </button>
        </div>

        {/* Ícones lado direito */}
        <div className="relative flex gap-6 items-center">
          <div className="w-70 h-50 bg-white shadow rounded-xl flex items-center justify-center">
            <Image src="/icon-store.png" alt="Loja" width={400} height={400} />
          </div>
          
        </div>
      </div>

      {/* === BENEFÍCIOS === */}
      <div className="mt-16 flex items-start justify-between gap-16">
        {/* Mockup */}
        <div className="flex-1 max-w-md">
          <Image
            src="/portal-demo.png"
            alt="Demonstração do portal"
            width={500}
            height={400}
            className="rounded-xl border shadow-md"
          />
        </div>

        {/* Lista de benefícios */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-6">
            Conheça os benefícios do portal do cliente:
          </h2>
          <ul className="space-y-5 text-gray-700 text-base leading-relaxed">
            {[
              "Sem custo adicional para você ou seus clientes.",
              "Permite que seus clientes visualizem o histórico de pedidos, segunda via de boletos e notas fiscais que foram enviadas pelo ERP integrado ao Mercos.",
              "Centraliza os canais de atendimento.",
              "Aumenta a produtividade do seu time de vendas, eliminando tarefas burocráticas e solicitações pelo WhatsApp.",
              "Acesso rápido e seguro para todos os seus clientes.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* === CALL TO ACTION === */}
      <div className="mt-20 text-center">
        <h3 className="text-xl font-semibold">Vamos ativar o seu portal?</h3>
        <button className="mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition">
          Criar agora
        </button>
      </div>
    </div>
  )
}
