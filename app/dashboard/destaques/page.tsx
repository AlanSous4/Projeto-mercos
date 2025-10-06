"use client"

import ProdutosLayout from "../produtos/ProdutosLayout"

export default function DestaquesPage() {
  return (

    <ProdutosLayout>
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      {/* Botão de novo destaque */}
      <div className="self-start mb-8">
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-sm text-sm font-medium">
          + Novos destaques
        </button>
      </div>

      {/* Conteúdo vazio */}
      <img
        src="/destaques.png"
        alt="Nenhum produto em destaque"
        className="w-100 h-100 mb-6"
      />

      <h2 className="text-lg font-semibold text-gray-700">
        Nenhum produto em destaque
      </h2>
      <p className="text-sm text-gray-500 max-w-md mt-2">
        Crie listas de produtos que ficarão em destaque no catálogo do aplicativo e no e-commerce.
        Vamos começar?
      </p>
    </div>
    </ProdutosLayout>
  )
}
