"use client"

import ConfiguracoesLayout from "../ConfiguracoesLayout"

export default function CamposExtrasPage() {
  return (
    <ConfiguracoesLayout>
      <div className="flex flex-col items-center justify-center h-full text-center gap-6">
        {/* Botão */}
        <button className="px-4 py-2 bg-purple-700 text-white text-sm font-semibold rounded shadow hover:bg-purple-800">
          Novo campo extra
        </button>

        {/* Ícone ilustrativo */}
        <div className="w-100 h-80 rounded flex items-center justify-center">
          
          <img
           src="/ilustracao-pedidos-configuracoes.png" 
           alt="foto ilustrativa" 
           width={400}
          height={400}
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-lg font-semibold">Crie campos extras no pedido</h2>
          <p className="text-gray-600 mt-2 max-w-lg">
            Você pode criar campos adicionais customizados para serem utilizados durante a emissão
            de pedido. Basta escolher os tipos de campos que você precisa utilizar e todos os pedidos
            passarão a contar com eles na etapa de informações complementares.
          </p>
        </div>
      </div>
    </ConfiguracoesLayout>
  )
}
