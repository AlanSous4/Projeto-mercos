"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProdutosRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/dashboard/produtos/tabelas")
  }, [router])

  return null
}
