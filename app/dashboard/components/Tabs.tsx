"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Tabs() {
  const pathname = usePathname()

  return (
    <div className="flex items-center border-b">
      <Link
        href="/dashboard/agenda/"
        className={`px-4 py-2 text-sm font-medium ${
          pathname.includes("/dashboard/agenda")
            ? "border-b-2 border-black text-black"
            : "text-gray-400"
        }`}
      >
        AGENDA
      </Link>

      <Link
        href="/dashboard/roteiros"
        className={`px-4 py-2 text-sm font-medium ${
          pathname.includes("/dashboard/roteiros")
            ? "border-b-2 border-black text-black"
            : "text-gray-400"
        }`}
      >
        ROTEIROS
      </Link>
    </div>
  )
}
