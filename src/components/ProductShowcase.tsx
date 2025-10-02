import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tag, Cloud, Search, Lock, Zap, Users } from "lucide-react";
import productImage from "@/assets/product-illustration.jpg";

const ProductShowcase = () => {
  const features = [
    {
      icon: Tag,
      title: "Multi-Tag System",
      description: "Organize bookmarks with multiple custom tags, far beyond traditional folders.",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find any bookmark instantly by title, URL or tag with real-time search.",
    },
    {
      icon: Cloud,
      title: "Secure Sync",
      description: "Automatic backup to your personal Google Drive. Your data always safe and accessible.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "100% open source, no proprietary servers. Your data stays with you.",
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      description: "Virtualized list that supports thousands of bookmarks without losing speed.",
    },
    {
      icon: Users,
      title: "Modern Interface",
      description: "Clean, responsive and intuitive design that makes organizing a pleasure.",
    },
  ];

  return (
    <section id="our-featured-product" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Our Featured Product
            </Badge>
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              ChronoMark
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Manage, organize and sync your Chrome bookmarks with intelligence and style
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
                Reimagining bookmark management
              </h3>
              <p className="text-lg text-muted-foreground">
                ChronoMark is a modern extension that transforms how you organize your Chrome 
                bookmarks. With a flexible multi-tag system and optional synchronization, you 
                will never lose your favorite sites again.
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
                    Install on Chrome
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
