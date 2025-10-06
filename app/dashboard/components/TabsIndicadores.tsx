"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus, Settings, MessageCircle } from "lucide-react";

export default function TabsIndicadores() {
  const pathname = usePathname();

  return (
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

    </div>
  );
}