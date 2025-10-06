import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Transforme suas vendas B2B com <span className="text-secondary">tecnologia</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Plataforma completa de vendas, CRM e e-commerce B2B que conecta sua empresa aos clientes de forma
                inteligente e eficiente.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">+50k</div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">+2M</div>
                <div className="text-sm text-muted-foreground">Usuários</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                Teste Grátis por 7 dias
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 p-8">
              <img
                src="/modern-b2b-sales-dashboard-interface.jpg"
                alt="Dashboard da plataforma MercosClone"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              +35% vendas
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background border border-border px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              IA integrada
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
