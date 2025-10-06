"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ConfiguracoesRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/dashboard/configuracoes/campos-extras")
  }, [router])

  return null
}
