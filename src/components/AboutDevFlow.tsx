import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Heart } from "lucide-react";

const AboutDevFlow = () => {
  const values = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "We develop with best practices and modern technologies, ensuring quality and performance.",
    },
    {
      icon: Rocket,
      title: "Constant Innovation",
      description: "Always seeking new ways to solve problems and improve user experience.",
    },
    {
      icon: Heart,
      title: "Open Source First",
      description: "We believe in the power of transparency and community to create better products.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                DevFlow
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We are a company dedicated to creating digital solutions that make a difference
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Building the future, one line of code at a time
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  DevFlow was born from a passion for creating products that truly matter. 
                  We believe that technology should be accessible, secure, and respect 
                  user privacy.
                </p>
                <p>
                  Every product we develop is designed to solve real problems, 
                  with a focus on usability, performance, and design. Our commitment is to 
                  quality and transparency.
                </p>
                <p>
                  As a company that values open source, we share our code 
                  and knowledge with the community, contributing to a stronger 
                  and more collaborative ecosystem.
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
                <div className="mb-2 text-4xl font-bold text-primary">Quality</div>
                <div className="text-muted-foreground">In every detail</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">Transparency</div>
                <div className="text-muted-foreground">In everything we do</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">Community</div>
                <div className="text-muted-foreground">At the center of decisions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDevFlow;
