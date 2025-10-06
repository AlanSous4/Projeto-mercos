"use client"

interface Props {
  label: string
  checked: boolean
  onChange: (val: boolean) => void
}

export function Checkbox({ label, checked, onChange }: Props) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 accent-purple-600 cursor-pointer"
      />
      <span className="text-gray-800">{label}</span>
    </label>
  )
}
