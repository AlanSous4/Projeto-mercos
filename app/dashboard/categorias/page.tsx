"use client";

import { useState } from "react";
import ProdutosLayout from "../produtos/ProdutosLayout";

export default function CategoriasPage() {
  const [novaCategoria, setNovaCategoria] = useState("");

  const handleCriarCategoria = () => {
    if (!novaCategoria.trim()) return;
    alert(`Categoria criada: ${novaCategoria}`);
    setNovaCategoria("");
  };

  return (
    <ProdutosLayout>
      {/* Subtabs específicas da página Categorias */}
      <div className="bg-gray-100 border-b">
        <div className="flex items-center gap-6 px-6 overflow-x-auto">
          <button className="py-3 text-sm font-semibold text-purple-700 border-b-2 border-purple-700 whitespace-nowrap">
            Categorias
          </button>
          <button className="py-3 text-sm text-gray-500 border-b-2 border-transparent whitespace-nowrap hover:text-purple-600">
            Variações de produto
          </button>
          <button className="py-3 text-sm text-gray-500 border-b-2 border-transparent whitespace-nowrap hover:text-purple-600">
            Período de inatividade
          </button>
          <button className="py-3 text-sm text-gray-500 border-b-2 border-transparent whitespace-nowrap hover:text-purple-600">
            Tributações
          </button>
        </div>
      </div>

      {/* Conteúdo da aba Categorias */}
      <div className="flex flex-col items-center justify-center text-center mt-16 p-4">
        {/* Input de criação de categoria */}
        <div className="flex items-center gap-2 mb-12 w-full max-w-xs">
          <input
            type="text"
            placeholder="Criar nova categoria"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={novaCategoria}
            onChange={(e) => setNovaCategoria(e.target.value)}
          />
          <button
            onClick={handleCriarCategoria}
            className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
          >
            OK
          </button>
        </div>

        {/* Mensagem quando não tem categorias */}
        <div className="max-w-md">
          <div className="flex justify-center mb-4">
            {/* Ícone ilustrativo */}
            
            
              <img
                src="/ilustracao-produtos-categoria.png"
                alt="Nenhum produto em destaque"
                className="w-70 h-40 text-purple-400"
              />
       
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Nenhuma categoria cadastrada
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Organize seus produtos em até 3 níveis de categorias para que
            clientes e usuários encontrem eles rapidamente.
          </p>
          <button className="mt-4 text-sm text-purple-600 font-medium hover:underline">
            Vamos começar?
          </button>
        </div>
      </div>
    </ProdutosLayout>
  );
}
