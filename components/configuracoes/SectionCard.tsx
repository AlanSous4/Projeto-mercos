import { ReactNode } from "react"

export function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-8">
      {title && <h2 className="text-gray-500 font-semibold mb-4">{title}</h2>}
      <div className="space-y-4">{children}</div>
    </div>
  )
}
