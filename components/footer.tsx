import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-secondary"></div>
              <span className="text-xl font-bold">MercosClone</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Plataforma completa de vendas B2B, CRM e e-commerce para impulsionar seu negócio.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/funcionalidades/forca-vendas"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Força de Vendas
                </Link>
              </li>
              <li>
                <Link
                  href="/funcionalidades/ecommerce-b2b"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  E-commerce B2B
                </Link>
              </li>
              <li>
                <Link
                  href="/funcionalidades/pedidos-ia"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Pedidos com IA
                </Link>
              </li>
              <li>
                <Link
                  href="/funcionalidades/mercos-pay"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Cosmer Pay
                </Link>
              </li>
            </ul>
          </div>

          {/* Segments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Segmentos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/segmentos/industrias" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Indústrias
                </Link>
              </li>
              <li>
                <Link
                  href="/segmentos/distribuidoras"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Distribuidoras
                </Link>
              </li>
              <li>
                <Link
                  href="/segmentos/representantes"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Representantes
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contato" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/suporte" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/integracoes" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Integrações
                </Link>
              </li>
              <li>
                <Link href="/planos" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Planos e Preços
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Cosmer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
