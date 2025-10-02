import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Building the future of the web
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Transform your ideas into{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              digital solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl lg:text-2xl max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            At DevFlow, we create innovative products that simplify your digital life. 
            Discover our solutions built with technical excellence and modern design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button variant="hero" size="xl" className="group">
              Explore our products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              About DevFlow
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <div className="rounded-lg bg-card/50 p-6 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="mt-2 text-sm text-muted-foreground">Open Source</div>
            </div>
            <div className="rounded-lg bg-card/50 p-6 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary">5★</div>
              <div className="mt-2 text-sm text-muted-foreground">Rating</div>
            </div>
            <div className="rounded-lg bg-card/50 p-6 backdrop-blur-sm border border-border/50 col-span-2 sm:col-span-1">
              <div className="text-3xl font-bold text-primary">Privacy First</div>
              <div className="mt-2 text-sm text-muted-foreground">Your data is yours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
