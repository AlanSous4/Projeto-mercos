import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Zap } from "lucide-react"

export default function PlanosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                Escolha o plano ideal para seu <span className="text-secondary">negócio</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Planos flexíveis que crescem com sua empresa. Comece com 7 dias grátis e veja a diferença em suas vendas
                B2B.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Sem taxa de setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Cancele quando quiser</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Suporte especializado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* E-commerce B2B Add-on */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-secondary/50 bg-gradient-to-r from-secondary/5 to-accent/5">
                <CardHeader className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="h-6 w-6 text-secondary" />
                    <CardTitle className="text-2xl">E-commerce B2B Avançado</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    Adicione um e-commerce completo ao seu plano por apenas R$ 199/mês
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Funcionalidades incluídas:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-secondary" />
                          <span className="text-sm">Catálogo personalizado por cliente</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-secondary" />
                          <span className="text-sm">Pedidos recorrentes automáticos</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-secondary" />
                          <span className="text-sm">Integração com ERP</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-secondary" />
                          <span className="text-sm">App mobile para clientes</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Benefícios adicionais:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-secondary" />
                          <span className="text-sm">Aumento médio de 35% nas vendas</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-secondary" />
                          <span className="text-sm">Redução de 60% no tempo de pedidos</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-secondary" />
                          <span className="text-sm">Portal self-service para clientes</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-secondary" />
                          <span className="text-sm">Analytics de comportamento</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                      Adicionar E-commerce B2B
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Perguntas Frequentes</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tire suas dúvidas sobre nossos planos e funcionalidades
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Posso mudar de plano a qualquer momento?",
                  answer:
                    "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas no próximo ciclo de cobrança.",
                },
                {
                  question: "O que acontece após o período de teste?",
                  answer:
                    "Após os 7 dias de teste grátis, você será cobrado conforme o plano escolhido. Você pode cancelar a qualquer momento durante o período de teste sem custos.",
                },
                {
                  question: "Vocês oferecem desconto para pagamento anual?",
                  answer:
                    "Sim! Oferecemos 20% de desconto para pagamentos anuais em todos os planos. Entre em contato para mais detalhes.",
                },
                {
                  question: "A migração de dados está incluída?",
                  answer:
                    "Sim! Nossa equipe especializada faz a migração completa dos seus dados sem custo adicional em todos os planos.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
