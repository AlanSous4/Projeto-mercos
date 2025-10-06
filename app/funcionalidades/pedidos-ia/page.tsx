import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, TrendingUp, Clock, MessageSquare, CheckCircle } from "lucide-react"

export default function PedidosIAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Pedidos com IA</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Inteligência artificial que automatiza e otimiza seus pedidos, aumentando a eficiência e reduzindo erros
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Testar IA Gratuitamente
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Recursos da IA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Brain className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Sugestões Inteligentes</CardTitle>
                  <CardDescription>IA analisa histórico e sugere produtos automaticamente</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Análise de padrões de compra</li>
                    <li>• Sugestões personalizadas</li>
                    <li>• Previsão de demanda</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Automação Completa</CardTitle>
                  <CardDescription>Pedidos automáticos baseados em regras inteligentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Reposição automática</li>
                    <li>• Pedidos recorrentes</li>
                    <li>• Aprovação inteligente</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Otimização de Preços</CardTitle>
                  <CardDescription>IA encontra os melhores preços e condições</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Análise de mercado</li>
                    <li>• Negociação automática</li>
                    <li>• Alertas de oportunidades</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Processamento Rápido</CardTitle>
                  <CardDescription>Reduz tempo de processamento em até 90%</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Validação instantânea</li>
                    <li>• Verificação de estoque</li>
                    <li>• Cálculo automático</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Assistente Virtual</CardTitle>
                  <CardDescription>Chatbot inteligente para suporte aos pedidos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Atendimento 24/7</li>
                    <li>• Respostas contextuais</li>
                    <li>• Integração com WhatsApp</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Controle de Qualidade</CardTitle>
                  <CardDescription>IA detecta e previne erros automaticamente</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Detecção de anomalias</li>
                    <li>• Validação de dados</li>
                    <li>• Correção automática</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Análise de Dados</h3>
                <p className="text-muted-foreground">
                  A IA analisa seu histórico de vendas, sazonalidade e padrões de comportamento
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Sugestões Inteligentes</h3>
                <p className="text-muted-foreground">
                  Receba sugestões personalizadas de produtos, quantidades e timing ideal
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Automação</h3>
                <p className="text-muted-foreground">Configure regras e deixe a IA processar pedidos automaticamente</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Revolucione seus pedidos com IA</h2>
            <p className="text-xl mb-8 opacity-90">Experimente gratuitamente e veja a diferença em seus resultados</p>
            <Button size="lg" variant="secondary">
              Começar Teste Grátis
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
