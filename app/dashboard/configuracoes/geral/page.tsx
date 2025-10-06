"use client"

import { useState } from "react"
import { Tabs } from "@/components/configuracoes/Tabs"
import { RadioGroup } from "@/components/configuracoes/RadioGroup"
import { Checkbox } from "@/components/configuracoes/Checkbox"
import { SectionCard } from "@/components/configuracoes/SectionCard"

export default function GeralConfigPage() {
  const [duplicados, setDuplicados] = useState("nao")
  const [bloquearZero, setBloquearZero] = useState(true)
  const [transportadora, setTransportadora] = useState(true)
  const [frete, setFrete] = useState(true)

  function salvar() {
    console.log({
      duplicados,
      bloquearZero,
      transportadora,
      frete,
    })
    alert("Configurações salvas com sucesso ✅")
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Tabs */}
      <Tabs />

      {/* ITENS DO PEDIDO */}
      <SectionCard title="ITENS DO PEDIDO">
        <RadioGroup
          name="duplicados"
          defaultValue="nao"
          onChange={setDuplicados}
          options={[
            {
              value: "sim",
              label: "Permitir itens duplicados",
              description:
                "Permite que o mesmo item seja adicionado ao pedido mais de uma vez.",
            },
            {
              value: "nao",
              label: "Não permitir itens duplicados",
              description:
                "Não permite que o mesmo item seja adicionado mais de uma vez no pedido.",
            },
          ]}
        />
      </SectionCard>

      {/* BLOQUEIO DE PRODUTOS */}
      <SectionCard title="">
        <Checkbox
          label="Não permitir a venda de produtos que tem valor zerado na tabela de preços"
          checked={bloquearZero}
          onChange={setBloquearZero}
        />
        <p className="text-sm text-gray-500 ml-6">
          Se essa opção estiver marcada, o sistema não permitirá que produtos
          com valor zerado sejam adicionados.
        </p>
      </SectionCard>

      {/* CAMPOS OBRIGATÓRIOS */}
      <SectionCard title="CAMPOS OBRIGATÓRIOS">
        <Checkbox
          label="Transportadora"
          checked={transportadora}
          onChange={setTransportadora}
        />
        <Checkbox label="Valor de frete" checked={frete} onChange={setFrete} />
      </SectionCard>

      {/* BOTÃO SALVAR */}
      <button
        onClick={salvar}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-2 rounded-lg transition"
      >
        Salvar
      </button>
    </div>
  )
}
