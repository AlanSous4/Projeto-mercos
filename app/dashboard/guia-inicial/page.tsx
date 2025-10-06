"use client";

import GuiaInicialCard, { ChecklistItem } from "@/components/GuiaInicialCard";

export default function GuiaInicialPage() {
  const checklist1: ChecklistItem[] = [
    { label: "Assista ao vídeo de introdução", externalLink: "https://youtube.com", completed: true },
    { label: "Leia a documentação inicial", helpLink: "https://suporte.exemplo.com/artigo" },
    { label: "Configure sua conta", externalLink: "/dashboard/configuracoes" },
  ];

  const checklist2: ChecklistItem[] = [
    { label: "Baixar planilha modelo", externalLink: "/templates/produtos.csv" },
    { label: "Importar produtos via planilha", helpLink: "https://suporte.exemplo.com/importar-produtos" },
    { label: "Adicionar imagens ao catálogo", completed: false },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-8"> 
      <h1 className="text-xl font-bold mb-2">GUIA INICIAL</h1>
      <p className="text-gray-600 mb-8">
        Confira passos importantes para você utilizar o Mercos
      </p>

      <GuiaInicialCard
        numero={1}
        titulo="Apresentação"
        video={
          <div className="aspect-video bg-purple-200 rounded-md flex items-center justify-center text-white font-bold">
            🎥 Vídeo
          </div>
        }
        itens={[
          "Olá, que bom te ver por aqui!",
          "A Guia Inicial é um roteiro para você dar os primeiros passos no Mercos.",
          "Cada módulo contém um passo a passo em vídeo e artigos de suporte.",
        ]}
        checklist={checklist1}
      />

      <GuiaInicialCard
        numero={2}
        titulo="Cadastro de Produto"
        video={
          <div className="aspect-video bg-purple-200 rounded-md flex items-center justify-center text-white font-bold">
            🎥 Vídeo
          </div>
        }
        itens={[
          "Faça a importação do modelo de planilha ou cadastre manualmente.",
          "Com os produtos cadastrados, faça o upload das imagens.",
          "Cadastre promoções e destaques conforme necessário.",
        ]}
        checklist={checklist2}
      />

<GuiaInicialCard
  numero={2}
  titulo="Cadastro de Produto"
  video={
    <div className="aspect-video bg-purple-200 rounded-md flex items-center justify-center text-white font-bold">
      🎥 Vídeo
    </div>
  }
  itens={[
    "Faça a importação do modelo de planilha ou cadastre manualmente.",
    "Com os produtos cadastrados, faça o upload das imagens.",
    "Cadastre promoções e destaques conforme necessário.",
  ]}
  checklist={[
    { label: "Baixar planilha modelo", externalLink: "/templates/produtos.csv" },
    { label: "Importar produtos via planilha", helpLink: "https://suporte.exemplo.com/importar-produtos" },
    { label: "Adicionar imagens ao catálogo" },
  ]}
/>

    </div>
  );
}
