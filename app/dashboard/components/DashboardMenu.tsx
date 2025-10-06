"use client";

import { useRouter, usePathname } from "next/navigation";
import { Users } from "lucide-react";

export default function DashboardMenu() {
  const router = useRouter();
  const pathname = usePathname();

  const menus = [
    { label: "USUÁRIOS", path: "/dashboard/colaboradores", icon: <Users className="w-4 h-4" /> },
    { label: "PLANO E CONTA", path: "/dashboard/minha-conta", icon: <span>⚙️</span> },
    { label: "SISTEMA", path: "/dashboard/sistema", icon: <span>💻</span> },
    { label: "POLÍTICAS COMERCIAIS", path: "/dashboard/politicas", icon: <span>📑</span> },
    { label: "FRETE E ENTREGA", path: "/dashboard/frete", icon: <span>🚚</span> },
  ];

  return (
    <div className="flex items-center gap-6 border-b px-4 py-2 text-sm">
      {menus.map((menu) => (
        <button
          key={menu.path}
          onClick={() => router.push(menu.path)}
          className={`flex items-center gap-2 pb-2 ${
            pathname === menu.path
              ? "border-b-2 border-black font-semibold"
              : "text-gray-500"
          } cursor-pointer`}
        >
          {menu.icon}
          {menu.label}
        </button>
      ))}
    </div>
  );
}
