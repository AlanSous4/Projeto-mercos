type Cliente = {
    nome: string
    razao: string
    cidade: string
  }
  
  export function ClienteCard({ cliente }: { cliente: Cliente }) {
    return (
      <div className="bg-white p-4 rounded border">
        <h3 className="font-bold">{cliente.nome}</h3>
        <p>{cliente.razao}</p>
        <p className="text-sm text-gray-500">{cliente.cidade}</p>
        <div className="flex gap-2 mt-2">
          <button className="btn-sm">Alterar</button>
          <button className="btn-sm">Excluir</button>
          <button className="btn-sm">Contar regiões</button>
        </div>
      </div>
    )
  }
  