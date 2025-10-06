import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Diretor Comercial",
    company: "TechDistribuidora",
    content: "A plataforma revolucionou nossa operação de vendas. Aumentamos 40% nossa eficiência em apenas 3 meses.",
    rating: 5,
    avatar: "/professional-business-man-avatar.jpg",
  },
  {
    name: "Ana Santos",
    role: "Gerente de Vendas",
    company: "IndustrialMax",
    content: "O e-commerce B2B facilitou muito nossos pedidos recorrentes. Nossos clientes adoraram a praticidade.",
    rating: 5,
    avatar: "/professional-business-woman-avatar.jpg",
  },
  {
    name: "Roberto Lima",
    role: "CEO",
    company: "VendaPlus",
    content: "A IA de pedidos é impressionante. Ela sugere produtos que nem sabíamos que nossos clientes precisavam.",
    rating: 5,
    avatar: "/professional-business-executive-avatar.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            O que nossos <span className="text-secondary">clientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Mais de 50.000 empresas confiam em nossa plataforma para impulsionar suas vendas B2B.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Avaliação média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">+50k</div>
            <div className="text-sm text-muted-foreground">Empresas ativas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">+2M</div>
            <div className="text-sm text-muted-foreground">Usuários mensais</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Taxa de retenção</div>
          </div>
        </div>
      </div>
    </section>
  )
}
