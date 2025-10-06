import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                Entre em <span className="text-secondary">contato</span> conosco
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Nossa equipe está pronta para ajudar você a transformar suas vendas B2B. Fale conosco e descubra como
                podemos impulsionar seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário e nossa equipe entrará em contato em até 2 horas úteis.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome completo</Label>
                        <Input id="nome" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input id="empresa" placeholder="Nome da empresa" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input id="telefone" placeholder="(11) 99999-9999" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="segmento">Segmento</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu segmento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="industria">Indústria</SelectItem>
                          <SelectItem value="distribuidora">Distribuidora</SelectItem>
                          <SelectItem value="representante">Representante</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interesse">Interesse</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="O que te interessa?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demonstracao">Solicitar demonstração</SelectItem>
                          <SelectItem value="planos">Informações sobre planos</SelectItem>
                          <SelectItem value="integracao">Integração com ERP</SelectItem>
                          <SelectItem value="migracao">Migração de plataforma</SelectItem>
                          <SelectItem value="suporte">Suporte técnico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea id="mensagem" placeholder="Conte-nos mais sobre suas necessidades..." rows={4} />
                    </div>

                    <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                      Enviar mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Outras formas de contato</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Telefone</h4>
                        <p className="text-muted-foreground">+55 (11) 3000-0000</p>
                        <p className="text-sm text-muted-foreground">Seg-Sex: 8h às 18h</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">E-mail</h4>
                        <p className="text-muted-foreground">contato@mercosclone.com</p>
                        <p className="text-sm text-muted-foreground">Resposta em até 2h úteis</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Chat online</h4>
                        <p className="text-muted-foreground">Suporte em tempo real</p>
                        <p className="text-sm text-muted-foreground">Disponível 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Endereço</h4>
                        <p className="text-muted-foreground">
                          Av. Paulista, 1000
                          <br />
                          São Paulo - SP, 01310-100
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <Card className="bg-muted/50 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Precisa de ajuda rápida?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Clock className="mr-2 h-4 w-4" />
                      Agendar demonstração
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Iniciar chat
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      Solicitar ligação
                    </Button>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <div>
                        <p className="font-semibold">Tempo médio de resposta</p>
                        <p className="text-sm text-muted-foreground">2 horas úteis</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
