"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

// components/GuiaInicialCard.tsx
export interface ChecklistItem {
    label: string
    externalLink?: string   // ✅ link externo (opcional)
    helpLink?: string       // ✅ link de ajuda (opcional)
    completed?: boolean     // ✅ status concluído (opcional)
  }

interface GuiaInicialCardProps {
  numero: number;
  titulo: string;
  video: React.ReactNode;
  itens: string[];
  checklist?: ChecklistItem[];
}

export default function GuiaInicialCard({
  numero,
  titulo,
  video,
  itens,
  checklist = [],
}: GuiaInicialCardProps) {
  const open = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 md:p-6 mb-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-50 text-green-600 font-bold">
          {numero}
        </div>
        <h2 className="text-lg font-semibold">{titulo}</h2>
      </div>

      {/* Layout principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Vídeo */}
        <div>
          <div className="w-full rounded-md overflow-hidden bg-gray-100">
            {video}
          </div>
        </div>

        {/* Texto */}
        <div className="text-sm text-gray-700">
          <p className="mb-3 font-medium">Vamos começar?</p>
          <ul className="list-disc pl-5 space-y-2">
            {itens.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Checklist */}
        <aside>
          <div className="border rounded-md divide-y">
            {checklist.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-sm"
              >
                {/* Texto do item */}
                <div className="flex-1 px-3 py-2">{c.label}</div>

                {/* Botão ajuda (?) */}
                <button
                  onClick={() => open(c.helpLink)}
                  disabled={!c.helpLink}
                  className={`w-10 h-10 flex items-center justify-center border-l ${
                    c.helpLink
                      ? "text-purple-700 hover:bg-gray-50 cursor-pointer"
                      : "text-gray-300 cursor-not-allowed"
                  }`}
                >
                  ?
                </button>

                {/* Botão abrir externo ⤴ */}
                <button
                  onClick={() => open(c.externalLink)}
                  disabled={!c.externalLink}
                  className={`w-10 h-10 flex items-center justify-center border-l ${
                    c.externalLink
                      ? "text-purple-700 hover:bg-gray-50 cursor-pointer"
                      : "text-gray-300 cursor-not-allowed"
                  }`}
                >
                  <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
