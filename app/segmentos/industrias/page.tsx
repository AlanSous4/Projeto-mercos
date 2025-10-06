import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Cog, TrendingUp, Users, Shield, Globe } from "lucide-react"

export default function IndustriasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Soluções para Indústrias</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Plataforma completa para indústrias gerenciarem vendas, distribuição e relacionamento com parceiros
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Solicitar Demonstração
            </Button>
          </div>
        </section>

        {/* Industry Challenges */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Desafios da Indústria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Factory className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Gestão de Canais</CardTitle>
                  <CardDescription>Controle múltiplos canais de venda e distribuição</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Distribuidores</li>
                    <li>• Representantes</li>
                    <li>• Varejo direto</li>
                    <li>• E-commerce</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Cog className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Complexidade Operacional</CardTitle>
                  <CardDescription>Simplifique processos complexos de vendas B2B</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Catálogos extensos</li>
                    <li>• Preços diferenciados</li>
                    <li>• Condições especiais</li>
                    <li>• Aprovações múltiplas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Visibilidade de Vendas</CardTitle>
                  <CardDescription>Acompanhe performance em tempo real</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dashboards executivos</li>
                    <li>• Relatórios por canal</li>
                    <li>• Análise de território</li>
                    <li>• Previsão de demanda</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nossas Soluções</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Portal do Distribuidor</h3>
                <p className="text-muted-foreground mb-6">
                  Plataforma exclusiva para seus distribuidores com acesso a catálogos, preços personalizados e
                  ferramentas de vendas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Catálogo personalizado por distribuidor</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Preços e condições diferenciadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Pedidos online com aprovação automática</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Relatórios de performance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Benefícios Comprovados</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-secondary">+85%</div>
                    <div className="text-sm text-muted-foreground">Aumento em pedidos online</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">-60%</div>
                    <div className="text-sm text-muted-foreground">Redução em tempo de processamento</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">+40%</div>
                    <div className="text-sm text-muted-foreground">Melhoria na satisfação do cliente</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features for Industries */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Recursos Específicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Gestão de Representantes</CardTitle>
                  <CardDescription>Controle completo da sua rede de representação</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Territórios definidos</li>
                    <li>• Comissionamento automático</li>
                    <li>• Metas por representante</li>
                    <li>• App mobile exclusivo</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Compliance e Auditoria</CardTitle>
                  <CardDescription>Mantenha conformidade com regulamentações</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Trilha de auditoria completa</li>
                    <li>• Controle de aprovações</li>
                    <li>• Relatórios regulatórios</li>
                    <li>• Backup automático</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Expansão Geográfica</CardTitle>
                  <CardDescription>Facilite a expansão para novos mercados</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multi-moeda</li>
                    <li>• Multi-idioma</li>
                    <li>• Impostos locais</li>
                    <li>• Logística integrada</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Cases de Sucesso</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Indústria Alimentícia</CardTitle>
                  <CardDescription>Grande fabricante de alimentos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "Com a plataforma Mercos, conseguimos digitalizar nossa rede de 500+ distribuidores, aumentando as
                    vendas em 120% no primeiro ano."
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <div>
                      <div className="font-bold text-secondary">+120%</div>
                      <div className="text-muted-foreground">Vendas</div>
                    </div>
                    <div>
                      <div className="font-bold text-secondary">500+</div>
                      <div className="text-muted-foreground">Distribuidores</div>
                    </div>
                    <div>
                      <div className="font-bold text-secondary">-70%</div>
                      <div className="text-muted-foreground">Tempo de pedido</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Indústria Química</CardTitle>
                  <CardDescription>Fabricante de produtos químicos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "A automação dos pedidos e integração com nosso ERP reduziu erros em 95% e melhorou
                    significativamente nossa eficiência operacional."
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <div>
                      <div className="font-bold text-secondary">-95%</div>
                      <div className="text-muted-foreground">Erros</div>
                    </div>
                    <div>
                      <div className="font-bold text-secondary">+80%</div>
                      <div className="text-muted-foreground">Eficiência</div>
                    </div>
                    <div>
                      <div className="font-bold text-secondary">24/7</div>
                      <div className="text-muted-foreground">Disponibilidade</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Transforme sua indústria digitalmente</h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a centenas de indústrias que já revolucionaram suas vendas
            </p>
            <Button size="lg" variant="secondary">
              Agendar Demonstração
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
