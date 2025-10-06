"use client"

import { useState } from "react"

interface RadioOption {
  value: string
  label: string
  description?: string
}

interface Props {
  name: string
  options: RadioOption[]
  defaultValue?: string
  onChange?: (val: string) => void
}

export function RadioGroup({ name, options, defaultValue, onChange }: Props) {
  const [selected, setSelected] = useState(defaultValue || "")

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex cursor-pointer border rounded-lg p-4 transition
            ${selected === opt.value ? "border-purple-600 bg-purple-50" : "border-gray-300"}
          `}
          onClick={() => {
            setSelected(opt.value)
            onChange?.(opt.value)
          }}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => {}}
            className="mt-1 mr-3 accent-purple-600 cursor-pointer"
          />
          <div>
            <p className="font-medium">{opt.label}</p>
            {opt.description && (
              <p className="text-sm text-gray-600">{opt.description}</p>
            )}
          </div>
        </label>
      ))}
    </div>
  )
}
