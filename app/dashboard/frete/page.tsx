"use client";
import DashboardMenu from "../components/DashboardMenu";

export default function FretePage() {
  return (
    <div className="flex flex-col w-full bg-white rounded-md border">
      <DashboardMenu />
      <div className="p-6">
        <h1 className="text-xl font-semibold">Frete e Entrega</h1>
        <p className="text-gray-600 mt-2">Conteúdo da aba Frete e Entrega...</p>
      </div>
    </div>
  );
}
