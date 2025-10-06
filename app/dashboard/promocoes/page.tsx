"use client"

import ProdutosLayout from "app/dashboard/produtos/ProdutosLayout"

export default function PromocoesPage() {
  return (
    <ProdutosLayout>
      {/* Conteúdo principal */}
      <div className="px-6 py-10 flex flex-col items-center justify-center text-center">
        <button
          type="button"
          className="px-4 py-2 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition cursor-pointer mb-10"
        >
          + Nova promoção
        </button>

        {/* Ilustração */}
        <div className="flex flex-col items-center">
          <img
            src="/promocoes-ilustracao.png"
            alt="Nenhum produto em promoção"
            className="w-40 h-40 mb-6"
          />
          <h2 className="text-lg font-bold text-gray-900">
            Nenhum produto em promoção
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-md">
            Crie promoções e veja os produtos contidos nela de um jeito especial
            no catálogo do aplicativo e no e-commerce. Vamos começar?
          </p>
        </div>
      </div>
    </ProdutosLayout>
  )
}
