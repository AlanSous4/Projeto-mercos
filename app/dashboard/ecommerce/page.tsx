"use client"
import { useState } from "react"
import Modal from "../components/ModalEcommerce"

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-6">
      {/* Botão que abre o modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        E-commerce B2Bcc
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">
          Venda mais com o Catálogo Online
        </h2>
        <p className="mb-4">
          Mais de mil empresas já aceleram suas vendas com o E-commerce B2B da Cosmer.
          Agora, é vez da sua empresa fidelizar clientes e vender com praticidade.
        </p>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
            Peça uma demonstração grátis
          </button>
        </div>
      </Modal>
    </div>
  )
}
