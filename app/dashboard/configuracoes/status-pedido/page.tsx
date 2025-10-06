"use client";

import ConfiguracoesLayout from "../ConfiguracoesLayout";

export default function CamposExtrasPage() {
  return (
    <ConfiguracoesLayout>
      <div className="flex flex-col items-center h-full text-center gap-6">
        {/* Botão */}

        <div className="flex items-center gap-4 self-start">
  <input
    type="text"
    placeholder="Criar novo status de pedido"
    className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
  <button className="px-4 py-2 bg-purple-700 text-white text-sm font-semibold rounded shadow hover:bg-purple-800">
    OK
  </button>
</div>

        {/* Ícone ilustrativo */}
        <div className="w-100 h-80 rounded flex items-center justify-center">
          <img
            src="/ilustracao-pedidos-status-de-pedido.png"
            alt="foto ilustrativa"
            width={400}
            height={400}
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-lg font-semibold">Nenhum status cadastrado</h2>
          <p className="text-gray-600 mt-2 max-w-lg">
            Você pode criar campos adicionais customizados para serem utilizados
            durante a emissão de pedido. Basta escolher os tipos de campos que
            você precisa utilizar e todos os pedidos passarão a contar com eles
            na etapa de informações complementares.
          </p>
        </div>
      </div>
    </ConfiguracoesLayout>
  );
}
