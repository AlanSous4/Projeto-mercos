"use client"

import { X } from "lucide-react"

interface EstoqueModalProps {
  onClose: () => void
  onEnable: () => void
}

export function EstoqueModal({ onClose, onEnable }: EstoqueModalProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black/30">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Controle de estoque
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-5 text-gray-600">
          O controle de estoque está desabilitado. Deseja habilitar?
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 border-t px-4 py-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={onEnable}
            className="px-4 py-2 rounded-md bg-purple-700 text-white font-medium hover:bg-purple-800"
          >
            Habilitar estoque
          </button>
        </div>
      </div>
    </div>
  )
}
