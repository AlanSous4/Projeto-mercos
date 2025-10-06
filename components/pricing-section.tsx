import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Bronze",
    price: "R$ 99",
    period: "/mês",
    description: "Ideal para pequenas empresas iniciando no B2B",
    features: ["Até 5 usuários", "CRM básico", "E-commerce simples", "Suporte por email", "Relatórios básicos"],
    popular: false,
  },
  {
    name: "Prata",
    price: "R$ 299",
    period: "/mês",
    description: "Perfeito para empresas em crescimento",
    features: [
      "Até 25 usuários",
      "CRM avançado",
      "E-commerce completo",
      "Pedidos com IA",
      "Suporte prioritário",
      "Relatórios avançados",
      "Integrações ERP",
    ],
    popular: true,
  },
  {
    name: "Ouro",
    price: "R$ 599",
    period: "/mês",
    description: "Solução completa para grandes operações",
    features: [
      "Usuários ilimitados",
      "Todas as funcionalidades",
      "Mercos Pay incluído",
      "Videochamadas ilimitadas",
      "Suporte 24/7",
      "Consultoria especializada",
      "API personalizada",
      "White label",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Planos que se adaptam ao seu <span className="text-secondary">negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Escolha o plano ideal para sua empresa e comece a transformar suas vendas B2B hoje mesmo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-secondary shadow-lg scale-105" : "border-border"
              } hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  {plan.popular ? "Começar Agora" : "Teste Grátis"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            Todos os planos incluem 7 dias de teste grátis • Sem compromisso • Cancele quando quiser
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-secondary" />
              <span>Implementação gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-secondary" />
              <span>Migração de dados incluída</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-secondary" />
              <span>Treinamento da equipe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
