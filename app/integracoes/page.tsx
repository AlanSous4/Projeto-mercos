import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plug, Database, CreditCard, Truck, MessageSquare, BarChart3 } from "lucide-react"

export default function IntegracoesPage() {
  const integrations = [
    {
      category: "ERPs",
      icon: Database,
      items: [
        { name: "SAP", status: "Disponível" },
        { name: "TOTVS", status: "Disponível" },
        { name: "Oracle", status: "Disponível" },
        { name: "Microsiga", status: "Disponível" },
        { name: "Senior", status: "Disponível" },
        { name: "Sankhya", status: "Disponível" },
      ],
    },
    {
      category: "Pagamentos",
      icon: CreditCard,
      items: [
        { name: "PagSeguro", status: "Disponível" },
        { name: "Mercado Pago", status: "Disponível" },
        { name: "PayPal", status: "Disponível" },
        { name: "Cielo", status: "Disponível" },
        { name: "Rede", status: "Disponível" },
        { name: "Stone", status: "Disponível" },
      ],
    },
    {
      category: "Logística",
      icon: Truck,
      items: [
        { name: "Correios", status: "Disponível" },
        { name: "Jadlog", status: "Disponível" },
        { name: "Total Express", status: "Disponível" },
        { name: "Braspress", status: "Disponível" },
        { name: "Sequoia", status: "Disponível" },
        { name: "Azul Cargo", status: "Em breve" },
      ],
    },
    {
      category: "Comunicação",
      icon: MessageSquare,
      items: [
        { name: "WhatsApp Business", status: "Disponível" },
        { name: "Telegram", status: "Disponível" },
        { name: "SMS", status: "Disponível" },
        { name: "Email Marketing", status: "Disponível" },
        { name: "Push Notifications", status: "Disponível" },
        { name: "Slack", status: "Em breve" },
      ],
    },
    {
      category: "Analytics",
      icon: BarChart3,
      items: [
        { name: "Google Analytics", status: "Disponível" },
        { name: "Facebook Pixel", status: "Disponível" },
        { name: "Hotjar", status: "Disponível" },
        { name: "Mixpanel", status: "Disponível" },
        { name: "Amplitude", status: "Em breve" },
        { name: "Segment", status: "Em breve" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Integrações</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Conecte a plataforma Mercos com seus sistemas existentes e potencialize seus resultados
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Ver Todas as Integrações
            </Button>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Principais Integrações</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {integrations.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-8 w-8 text-secondary" />
                        <div>
                          <CardTitle>{category.category}</CardTitle>
                          <CardDescription>Integre com os principais sistemas do mercado</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">{item.name}</span>
                            <Badge variant={item.status === "Disponível" ? "default" : "secondary"} className="text-xs">
                              {item.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefícios das Integrações</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Plug className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Conectividade Total</CardTitle>
                  <CardDescription>Integre todos os seus sistemas em uma única plataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sincronização em tempo real</li>
                    <li>• Dados unificados</li>
                    <li>• Fluxo automatizado</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Dados Centralizados</CardTitle>
                  <CardDescription>Tenha uma visão única de todos os seus dados</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dashboard unificado</li>
                    <li>• Relatórios consolidados</li>
                    <li>• Análises avançadas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Eficiência Operacional</CardTitle>
                  <CardDescription>Reduza trabalho manual e aumente a produtividade</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Automação de processos</li>
                    <li>• Redução de erros</li>
                    <li>• Economia de tempo</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Program */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Programa Mpartner</h2>
              <p className="text-xl mb-8 opacity-90">
                Seja um parceiro oficial e ofereça soluções integradas aos seus clientes
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">200+</div>
                  <div className="opacity-90">Parceiros Ativos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="opacity-90">Integrações Disponíveis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="opacity-90">Suporte Técnico</div>
                </div>
              </div>
              <Button size="lg" variant="secondary">
                Tornar-se Parceiro
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Precisa de uma integração específica?</h2>
            <p className="text-xl mb-8 opacity-90">Nossa equipe técnica pode desenvolver integrações customizadas</p>
            <Button size="lg" variant="secondary">
              Solicitar Integração
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
