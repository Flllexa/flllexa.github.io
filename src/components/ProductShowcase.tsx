import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tag, Cloud, Search, Lock, Zap, Users } from "lucide-react";
import productImage from "@/assets/product-illustration.jpg";

const ProductShowcase = () => {
  const features = [
    {
      icon: Tag,
      title: "Sistema Multi-Tags",
      description: "Organize marcadores com múltiplas tags personalizadas, muito além de pastas tradicionais.",
    },
    {
      icon: Search,
      title: "Busca Avançada",
      description: "Encontre qualquer marcador instantaneamente por título, URL ou tag com busca em tempo real.",
    },
    {
      icon: Cloud,
      title: "Sincronização Segura",
      description: "Backup automático no seu Google Drive pessoal. Seus dados sempre seguros e acessíveis.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "100% open source, sem servidores proprietários. Seus dados ficam com você.",
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Lista virtualizada que suporta milhares de marcadores sem perder velocidade.",
    },
    {
      icon: Users,
      title: "Interface Moderna",
      description: "Design limpo, responsivo e intuitivo que torna a organização um prazer.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Nosso Produto Destaque
            </Badge>
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              ChronoMark
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Gerencie, organize e sincronize seus marcadores do Chrome com inteligência e estilo
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
            {/* Product Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl group-hover:opacity-30 transition-opacity rounded-3xl" />
              <img
                src={productImage}
                alt="ChronoMark Product Illustration"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            {/* Product Description */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Reimaginando o gerenciamento de marcadores
              </h3>
              <p className="text-lg text-muted-foreground">
                ChronoMark é uma extensão moderna que transforma como você organiza seus marcadores 
                no Chrome. Com sistema flexível de múltiplas tags e sincronização opcional, você 
                nunca mais perderá seus sites favoritos.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2">
                  Chrome 88+
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Open Source
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  GDPR & LGPD
                </Badge>
              </div>

              <div className="pt-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a 
                    href="https://chromewebstore.google.com/detail/chronomark-tag-sync-bookm/ddmoagjgadlfdaefjlofaaeibjcnofbm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Instalar no Chrome
                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
