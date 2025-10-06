"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BarChart2,
  ShoppingCart,
  Users,
  Package,
  Globe,
  Calendar,
  Settings,
} from "lucide-react";

import Modal from "../components/Modal";

const mainMenu = [
  { name: "Indicadores", href: "/dashboard/indicadores", icon: BarChart2 },
  { name: "Pedidos", href: "/dashboard/pedidos", icon: ShoppingCart },
  { name: "Clientes", href: "/dashboard/clientes", icon: Users },
  { name: "Produtos", href: "/dashboard/produtos", icon: Package },
  { name: "Portal", href: "/dashboard/portal", icon: Globe },
  { name: "Agenda", href: "/dashboard/agenda", icon: Calendar },
];

export default function SidebarDashboard() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="fixed top-12 left-0 h-[calc(100%-3rem)] w-56 border-r bg-white z-40 flex flex-col justify-between">
        {/* menu principal */}
        <nav className="flex flex-col p-4 gap-2">
          {mainMenu.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium cursor-pointer
                ${
                  pathname === item.href
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* menu inferior */}
        <nav className="flex flex-col p-4 gap-2 border-t">
          {/* Botão que abre o modal */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-black"
          >
            <ShoppingCart size={18} />
            E-commerce B2B
          </button>

          {/* Link normal */}
          <Link
            href="/dashboard/colaboradores"
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium cursor-pointer
              ${
                pathname === "/dashboard/colaboradores"
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`}
          >
            <Settings size={18} />
            Minha Conta
          </Link>
        </nav>
      </aside>

      {/* Modal com conteúdo idêntico ao print */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Venda mais com o{" "}
            <span className="text-green-600">Catálogo Online</span>
          </h2>
          <p className="text-gray-600 mb-5">
            Mais de mil empresas já aceleram suas vendas com o E-commerce B2B da
            Mercos. Agora, é vez da sua empresa acelerar as vendas do seu time e
            fidelizar seus clientes com praticidade.
          </p>

          {/* Banner / Imagem */}
          <div className="w-full mb-6">
            <img
              src="/ilustracao-ecommerce-banner.png"
              alt="E-commerce B2B"
              className="rounded-md border w-full"
            />
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
            <div>
              <p className="text-green-600 font-bold text-xl">+1500</p>
              <p className="text-sm text-gray-500">
                E-COMMERCE B2B IMPLANTADOS
              </p>
            </div>
            <div>
              <p className="text-green-600 font-bold text-xl">+1,2 MILHÕES</p>
              <p className="text-sm text-gray-500">
                DE PEDIDOS POR ANO FEITOS
              </p>
            </div>
            <div>
              <p className="text-green-600 font-bold text-xl">R$90 BI</p>
              <p className="text-sm text-gray-500">ANUAIS MOVIMENTADOS</p>
            </div>
            <div>
              <p className="text-green-600 font-bold text-xl">+11%</p>
              <p className="text-sm text-gray-500">NA RENTABILIDADE</p>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
              Peça uma demonstração grátis
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
