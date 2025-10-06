import { PieChart, Pie, Cell } from 'recharts'

const data = [
  { name: 'Ativos', value: 0 },
  { name: 'Inativos recentes', value: 0 },
  { name: 'Inativos antigos', value: 0 },
]

const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

export function CarteiraResumo() {
  return (
    <div>
      <h2 className="text-xl font-semibold">CARTEIRA DE CLIENTES</h2>
      <p className="text-sm text-gray-600 mb-4">Setembro de 2023</p>

      <div className="flex items-center gap-6">
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={50}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        <ul className="text-sm space-y-1">
          {data.map((item, index) => (
            <li key={index}>
              <span className="font-medium">{item.name}:</span> {item.value}
            </li>
          ))}
        </ul>
      </div>

      <button className="btn mt-4">Detalhar carteira</button>
    </div>
  )
}
