"use client";

import { useState } from "react";
import { Bell, ChevronDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeaderDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // 1️⃣ Limpa o token do localStorage
    localStorage.removeItem("token");

    // 2️⃣ Limpa cookies (Next.js padrão)
    document.cookie = "token=; max-age=0; path=/";
    document.cookie = "session=; max-age=0; path=/"; // se usar outro cookie

    // 3️⃣ Redireciona para a página inicial
    router.push("http://localhost:3000/");
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 border-b bg-white">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo + Logout */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-purple-600 rounded-sm"></div>
            <span className="ml-2 font-semibold text-sm text-gray-800 hover:text-red-600">
              BECKEND
            </span>
          </div>
          <ChevronDown size={16} className="text-gray-500" />
        </div>

        {/* Menu links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-600">
          <a href="http://localhost:3000/meu-plano" className="hover:text-black">
            MEU PLANO
          </a>
          <a href="http://localhost:3000/dashboard/guia-inicial" className="hover:text-black">
            GUIA INICIAL
          </a>
          <a href="#" className="hover:text-black">
            AJUDA
          </a>
        </nav>

        {/* Busca + ações */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:flex">
            <input
              type="text"
              placeholder="Busca rápida"
              className="border rounded-full pl-3 pr-8 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <Search
              size={14}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          <div className="relative cursor-pointer">
            <Bell size={18} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>

          <div
            className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            b
          </div>
        </div>
      </div>
    </header>
  );
}
