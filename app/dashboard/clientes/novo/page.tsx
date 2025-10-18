"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"
import { useSession } from "@supabase/auth-helpers-react"
import { Trash2, Pencil, ArrowLeft } from "lucide-react" // ✅ Ícone para o botão Voltar
import { useRouter } from "next/navigation" // ✅ Para navegação

const schema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  telefone: z.string().min(8, "Telefone inválido"),
  email: z.string().email("Email inválido"),
})

type FormData = z.infer<typeof schema>

export default function NovoCliente() {
  const session = useSession()
  const userId = session?.user?.id
  const router = useRouter() // ✅ Hook de navegação

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    const { error } = await supabase.from("clientes").insert({
      ...data,
      user_id: userId,
    })

    if (error) toast.error("Erro ao salvar cadastro")
    else toast.success("Cadastro salvo com sucesso")
  }

  const handleDelete = async () => {
    const { error } = await supabase
      .from("clientes")
      .delete()
      .eq("user_id", userId)

    if (error) toast.error("Erro ao deletar cadastro")
    else {
      toast.success("Cadastro deletado")
      reset()
    }
  }

  const handleEdit = async (data: FormData) => {
    const { error } = await supabase
      .from("clientes")
      .update(data)
      .eq("user_id", userId)

    if (error) toast.error("Erro ao editar cadastro")
    else toast.success("Cadastro atualizado")
  }

  return (
    <div className="relative max-w-md mx-auto px-4 py-8">

      {/* ✅ BOTÃO VOLTAR */}
      <button
        onClick={() => router.push("/dashboard/clientes")}
        className="absolute top-4 right-4 bg-violet-600 text-white px-3 py-1.5 rounded-md shadow-md text-sm flex items-center gap-1 cursor-pointer hover:bg-violet-700 transition-all active:scale-95"
      >
        <ArrowLeft size={16} />
        Voltar
      </button>

      <h1 className="text-2xl font-semibold mb-6 text-primary text-center md:text-left">
        Cadastro de Cliente
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("nome")}
            placeholder="Nome completo"
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
          />
          {errors.nome && <p className="text-destructive text-sm mt-1">{errors.nome.message}</p>}
        </div>

        <div>
          <input
            {...register("telefone")}
            placeholder="Telefone"
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
          />
          {errors.telefone && <p className="text-destructive text-sm mt-1">{errors.telefone.message}</p>}
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
          />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-md bg-primary text-primary-foreground cursor-pointer hover:opacity-90 transition"
        >
          Salvar
        </button>
      </form>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={handleSubmit(handleEdit)}
          className="flex-1 py-2 rounded-md bg-secondary text-secondary-foreground cursor-pointer hover:opacity-90 transition flex items-center justify-center gap-2"
        >
          <Pencil size={16} />
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 py-2 rounded-md bg-destructive text-destructive-foreground cursor-pointer hover:opacity-90 transition flex items-center justify-center gap-2"
        >
          <Trash2 size={16} />
          Deletar
        </button>
      </div>
    </div>
  )
}
