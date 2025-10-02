import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Heart } from "lucide-react";

const AboutDevFlow = () => {
  const values = [
    {
      icon: Code2,
      title: "Excelência Técnica",
      description: "Desenvolvemos com as melhores práticas e tecnologias modernas, garantindo qualidade e performance.",
    },
    {
      icon: Rocket,
      title: "Inovação Constante",
      description: "Sempre buscando novas formas de resolver problemas e melhorar a experiência dos usuários.",
    },
    {
      icon: Heart,
      title: "Open Source First",
      description: "Acreditamos no poder da transparência e da comunidade para criar produtos melhores.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Sobre a{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                DevFlow
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Somos uma empresa dedicada a criar soluções digitais que fazem a diferença
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Desenvolvendo o futuro, uma linha de código por vez
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A DevFlow nasceu da paixão por criar produtos que realmente importam. 
                  Acreditamos que a tecnologia deve ser acessível, segura e que respeita 
                  a privacidade dos usuários.
                </p>
                <p>
                  Cada produto que desenvolvemos é pensado para resolver problemas reais, 
                  com foco em usabilidade, performance e design. Nosso compromisso é com 
                  a qualidade e a transparência.
                </p>
                <p>
                  Como empresa que valoriza o open source, compartilhamos nosso código 
                  e conhecimento com a comunidade, contribuindo para um ecossistema mais 
                  forte e colaborativo.
                </p>
              </div>
            </div>

            {/* Values Cards */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 sm:p-12">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">Qualidade</div>
                <div className="text-muted-foreground">Em cada detalhe</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">Transparência</div>
                <div className="text-muted-foreground">Em tudo que fazemos</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">Comunidade</div>
                <div className="text-muted-foreground">No centro das decisões</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDevFlow;
