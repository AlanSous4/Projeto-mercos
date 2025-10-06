import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, CreditCard, Truck, Settings, Globe, Shield } from "lucide-react"

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">E-commerce B2B</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Plataforma completa de e-commerce para vendas B2B com catálogo personalizado e gestão de pedidos
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Criar Loja Online
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Recursos do E-commerce</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <ShoppingCart className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Catálogo Personalizado</CardTitle>
                  <CardDescription>Produtos e preços específicos para cada cliente</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Preços diferenciados</li>
                    <li>• Produtos exclusivos</li>
                    <li>• Condições especiais</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CreditCard className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Pagamentos Integrados</CardTitle>
                  <CardDescription>Múltiplas formas de pagamento B2B</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Boleto bancário</li>
                    <li>• Cartão corporativo</li>
                    <li>• Crediário próprio</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Truck className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Logística Integrada</CardTitle>
                  <CardDescription>Gestão completa de entregas e estoque</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Rastreamento em tempo real</li>
                    <li>• Múltiplos centros de distribuição</li>
                    <li>• Cálculo automático de frete</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Settings className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Configuração Flexível</CardTitle>
                  <CardDescription>Personalize sua loja conforme sua necessidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Layout customizável</li>
                    <li>• Regras de negócio</li>
                    <li>• Aprovação de pedidos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Multi-canal</CardTitle>
                  <CardDescription>Venda em múltiplos canais simultaneamente</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Marketplace integrado</li>
                    <li>• Redes sociais</li>
                    <li>• WhatsApp Business</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Segurança Avançada</CardTitle>
                  <CardDescription>Proteção completa para suas transações</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Certificado SSL</li>
                    <li>• Criptografia de dados</li>
                    <li>• Compliance PCI DSS</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefícios do E-commerce B2B</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Aumente suas vendas online</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Disponibilidade 24/7 para seus clientes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Redução de custos operacionais</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Automatização de processos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Expansão geográfica facilitada</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Resultados Comprovados</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-secondary">+150%</div>
                    <div className="text-sm text-muted-foreground">Aumento médio em vendas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">-40%</div>
                    <div className="text-sm text-muted-foreground">Redução em custos operacionais</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">24/7</div>
                    <div className="text-sm text-muted-foreground">Disponibilidade para clientes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Crie sua loja B2B hoje mesmo</h2>
            <p className="text-xl mb-8 opacity-90">Comece a vender online em poucos minutos</p>
            <Button size="lg" variant="secondary">
              Criar Loja Grátis
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
