import Tabs from "../components/Tabs"

export default function AgendaPage() {
  return (
    <div className="p-4">
      <Tabs />

      {/* Título principal */}
      <h1 className="text-2xl font-bold mt-6">📅 Agenda</h1>

      <div className="mt-6">
        <h2 className="text-gray-500 font-semibold text-sm mb-2">
          EVENTOS E ATENDIMENTOS
        </h2>
        <p className="text-sm text-gray-600">
          Acompanhe os eventos agendados e os atendimentos realizados.
        </p>

        {/* Botões */}
        <div className="flex items-center gap-2 mt-4">
          <button className="bg-purple-700 text-white px-4 py-2 rounded">
            Criar evento
          </button>
          <button className="border px-4 py-2 rounded text-sm">
            Registrar atendimento
          </button>
          <button className="border px-4 py-2 rounded text-sm">Filtros</button>
        </div>

        {/* Tabela / Placeholder */}
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <div className="text-gray-400 text-6xl">👤</div>
          <p className="mt-4 font-medium">
            Nenhum evento ou atendimento encontrado
          </p>
          <p className="text-gray-500 text-sm max-w-md mt-2">
            Não encontramos nenhum evento ou atendimento. Crie um novo evento,
            registre um atendimento ou verifique os filtros aplicados.
          </p>
        </div>
      </div>
    </div>
  )
}
