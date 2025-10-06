import { BarChart2, ClipboardList, Users, Package, ShoppingCart, Settings } from "lucide-react"
import type { MenuItem } from "./Sidebar.types"

export const MENU_ITEMS: MenuItem[] = [
  {
    key: "indicadores",
    label: "Indicadores",
    href: "/dashboard/indicadores",
    icon: BarChart2,
  },
  {
    key: "pedidos",
    label: "Pedidos",
    href: "/dashboard/pedidos",
    icon: ClipboardList,
  },
  {
    key: "clientes",
    label: "Clientes",
    href: "/dashboard/clientes",
    icon: Users,
  },
  {
    key: "produtos",
    label: "Produtos",
    href: "/dashboard/produtos",
    icon: Package,
  },
  {
    key: "vendas",
    label: "Vendas",
    href: "/dashboard/vendas",
    icon: ShoppingCart,
  },
  {
    key: "config",
    label: "Configurações",
    href: "/dashboard/config",
    icon: Settings,
  },
]
