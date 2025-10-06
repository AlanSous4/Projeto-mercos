"use client";
import DashboardMenu from "../components/DashboardMenu";

export default function MinhaContaPage() {
  return (
    <div className="flex flex-col w-full bg-white rounded-md border">
      <DashboardMenu />
      <div className="p-6">
        <h1 className="text-xl font-semibold">Plano e Conta</h1>
        <p className="text-gray-600 mt-2">Conteúdo da aba Plano e Conta...</p>
      </div>
    </div>
  );
}
