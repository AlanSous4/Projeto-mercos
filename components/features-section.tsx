import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ShoppingCart, Brain, CreditCard, Video, BarChart3, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Força de Vendas",
    description: "Gerencie sua equipe de vendas com ferramentas avançadas de CRM e automação de processos.",
    benefits: ["CRM completo", "Gestão de pipeline", "Relatórios detalhados"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce B2B",
    description: "Plataforma de e-commerce especializada em vendas B2B com catálogo personalizado.",
    benefits: ["Catálogo personalizado", "Pedidos recorrentes", "Integração ERP"],
  },
  {
    icon: Brain,
    title: "Pedidos com IA",
    description: "Inteligência artificial que otimiza pedidos e sugere produtos baseado no histórico.",
    benefits: ["Sugestões inteligentes", "Otimização automática", "Análise preditiva"],
  },
  {
    icon: CreditCard,
    title: "Mercos Pay",
    description: "Sistema de pagamentos integrado com condições especiais para B2B.",
    benefits: ["Pagamento facilitado", "Condições especiais", "Gestão financeira"],
  },
  {
    icon: Video,
    title: "Videochamada",
    description: "Conecte-se com clientes através de videochamadas integradas à plataforma.",
    benefits: ["Reuniões integradas", "Gravação automática", "Compartilhamento de tela"],
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Dashboards e relatórios completos para acompanhar performance de vendas.",
    benefits: ["Dashboards em tempo real", "Relatórios customizados", "KPIs automáticos"],
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Funcionalidades que <span className="text-secondary">impulsionam</span> resultados
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Descubra como nossa plataforma pode transformar seus processos de vendas B2B com tecnologia de ponta.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-secondary/50"
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-muted px-6 py-3 rounded-full">
            <Zap className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">Integração em menos de 24 horas</span>
            <Shield className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">Segurança garantida</span>
          </div>
        </div>
      </div>
    </section>
  )
}
