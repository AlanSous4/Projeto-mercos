import HeaderDashboard from "app/dashboard/components/HeaderDashboard";
import SidebarDashboard from "app/dashboard/components/SidebarDashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header fixo */}
      <HeaderDashboard />

      {/* Sidebar fixo */}
      <SidebarDashboard />

      {/* Conteúdo principal (com padding para não ficar por baixo do header/sidebar) */}
      <main className="pt-12 pl-56">{children}</main>
    </div>
  );
}
