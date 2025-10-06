"use client"

import { useState } from "react"
import HeaderDashboard from "../dashboard/components/HeaderDashboard"
import SidebarDashboard from "../dashboard/components/SidebarDashboard"
import MenuSuperior from "../dashboard/components/MenuSuperior"
import SubmenuPlano from "../dashboard/components/SubmenuPlano"

// Interface para tipar os dados do formulário
interface EmpresaForm {
  razaoSocial: string
  nomeFantasia: string
  telefone: string
  email: string
  cnpj: string
}

export default function MinhaEmpresaPage() {
  const [form, setForm] = useState<EmpresaForm>({
    razaoSocial: "Beckend",
    nomeFantasia: "Beckend",
    telefone: "(11) 9999-2020",
    email: "",
    cnpj: "",
  })

  // Evento de mudança nos inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Evento de submit do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Dados salvos com sucesso!")
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header fixo */}
      <HeaderDashboard />

      <div className="flex">
        {/* Sidebar fixa */}
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 border-r bg-white">
          <SidebarDashboard />
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 ml-60 pt-20 px-6">
          {/* Menu superior e submenu */}
          <MenuSuperior />
          <SubmenuPlano />

          {/* Formulário Minha Empresa */}
          <div className="w-full max-w-5xl mx-auto bg-white border rounded-md shadow-sm mt-6">
            {/* Cabeçalho */}
            <div className="flex items-center gap-2 border-b px-6 py-4 ">
              <span className="text-gray-700">🏢</span>
              <h1 className="font-semibold text-gray-800 text-sm md:text-base uppercase">
                Alteração dos dados da minha empresa
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row p-6 gap-8 ">
              {/* Coluna esquerda */}
              <div className=" flex-1 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    *Razão social
                  </label>
                  <input
                    type="text"
                    name="razaoSocial"
                    value={form.razaoSocial}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    *Nome fantasia
                  </label>
                  <input
                    type="text"
                    name="nomeFantasia"
                    value={form.nomeFantasia}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="text"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button
                    type="button"
                    className="mt-1 text-xs text-blue-600 hover:underline"
                  >
                    Adicionar telefone
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button
                    type="button"
                    className="mt-1 text-xs text-blue-600 hover:underline"
                  >
                    Adicionar email
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CNPJ
                  </label>
                  <input
                    type="text"
                    name="cnpj"
                    value={form.cnpj}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <button
                  type="button"
                  className="mt-1 text-xs text-blue-600 hover:underline"
                >
                  Preencher cadastro completo: comissão, contatos e informações adicionais
                </button>
              </div>

              {/* Coluna direita (logo) */}
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className="w-40 h-40 border rounded-md flex items-center justify-center bg-gray-50">
                  <span className="text-gray-400 text-4xl">📷</span>
                </div>
              </div>
            </form>

            {/* Rodapé */}
            <div className="border-t px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-3">
                <button
                  type="submit"
                  form="form-empresa"
                  className="px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 text-sm cursor-pointer"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  className="px-6 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
              </div>
              <a href="#" className="text-xs text-gray-600 hover:underline">
                Configurar e-mail de envio de pedidos
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
