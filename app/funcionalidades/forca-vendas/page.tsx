import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, BarChart3, Calendar, Phone, Mail } from "lucide-react"

export default function ForcaVendasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Força de Vendas</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Gerencie sua equipe de vendas com ferramentas completas para aumentar a produtividade e resultados
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Teste Grátis por 7 Dias
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Gestão de Equipe</CardTitle>
                  <CardDescription>Organize e monitore sua equipe de vendas em tempo real</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Hierarquia de vendedores</li>
                    <li>• Metas individuais e por equipe</li>
                    <li>• Comissionamento automático</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Metas e Objetivos</CardTitle>
                  <CardDescription>Defina e acompanhe metas de vendas personalizadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Metas por período</li>
                    <li>• Acompanhamento em tempo real</li>
                    <li>• Relatórios de performance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Relatórios Avançados</CardTitle>
                  <CardDescription>Análises detalhadas para tomada de decisão</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dashboard executivo</li>
                    <li>• Ranking de vendedores</li>
                    <li>• Análise de tendências</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Calendar className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Agenda Integrada</CardTitle>
                  <CardDescription>Organize visitas e compromissos da equipe</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Agendamento de visitas</li>
                    <li>• Sincronização com calendário</li>
                    <li>• Lembretes automáticos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>App Mobile</CardTitle>
                  <CardDescription>Acesso completo via smartphone e tablet</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pedidos offline</li>
                    <li>• GPS integrado</li>
                    <li>• Sincronização automática</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Mail className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Comunicação</CardTitle>
                  <CardDescription>Ferramentas de comunicação integradas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Chat interno</li>
                    <li>• Notificações push</li>
                    <li>• Histórico de interações</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para revolucionar sua força de vendas?</h2>
            <p className="text-xl mb-8 opacity-90">Comece hoje mesmo e veja os resultados em poucos dias</p>
            <Button size="lg" variant="secondary">
              Solicitar Demonstração
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
