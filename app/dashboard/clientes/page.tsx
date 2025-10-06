"use client"

import { ClienteCard } from "@/components/ClienteCard"
import { CarteiraResumo } from "@/components/CarteiraResumo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const clientes = [
  {
    nome: "Supermercado do Bairro [exemplo]",
    razao: "Comércio de Gêneros Alimentícios LTDA",
    cidade: "São Paulo",
  },
]

export default function ClientesPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* AVISO DE EXPIRAÇÃO */}
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-md mb-6 flex justify-between items-center">
          <span>⚠ Seu período de uso expirou em 15/09/2025.</span>
          <Button className="bg-violet-600 hover:bg-violet-700">Entrar em contato</Button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* LISTA DE CLIENTES */}
          <div className="col-span-2 bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                  + Cadastrar cliente
                </Button>
                <Button variant="outline">Importar</Button>
                <Button variant="outline">Vínculos e permissões</Button>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Pesquise por Nome ou CNPJ" className="w-64" />
                <Button variant="outline">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="divide-y">
              {clientes.map((cliente, index) => (
                <ClienteCard key={index} cliente={cliente} />
              ))}
            </div>
          </div>

          {/* CARTEIRA DE CLIENTES */}
          <div className="bg-white rounded-lg shadow p-6">
            <CarteiraResumo />
          </div>
        </div>
      </main>
    </div>
  )
}