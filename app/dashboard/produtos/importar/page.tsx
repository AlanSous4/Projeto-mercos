"use client"

import ProdutosLayout from "../ProdutosLayout"

export default function ImportarFotosPage() {
  return (
    <ProdutosLayout>
      {/* Caixa de upload */}
      <div className="bg-gray-100 rounded-md p-6 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm">
        {/* Botão */}
        <button
          className="flex items-center gap-2 px-5 py-2 bg-purple-700 text-white font-medium rounded-md shadow hover:bg-purple-800 transition cursor-pointer"
        >
          ⬆️ Enviar várias fotos
        </button>

        {/* Texto explicativo */}
        <p className="text-sm text-gray-700 leading-relaxed">
          ou arraste fotos do seu computador para essa tela.
        </p>
      </div>

      {/* Texto adicional */}
      <p className="mt-4 text-xs text-gray-500 leading-relaxed">
        Se o nome da foto for o código de um produto, ela será atribuída automaticamente ao produto. <br />
        Dimensões recomendadas: <strong>800 x 800 pixels</strong>. <br />
        O arquivo deve estar no formato <strong>JPG, JPEG, GIF ou PNG</strong>, sendo ideal ter menos de <strong>2MB</strong>.
      </p>
    </ProdutosLayout>
  )
}
