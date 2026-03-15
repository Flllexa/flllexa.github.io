import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-bg.jpg";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type LegalSection = {
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type SummaryItem = {
  value: string;
  label: string;
};

type LegalPageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  effectiveDate: string;
  sections: LegalSection[];
  summaryItems: SummaryItem[];
  secondaryAction: {
    href: string;
    label: string;
  };
};

const LegalPage = ({
  eyebrow,
  title,
  description,
  effectiveDate,
  sections,
  summaryItems,
  secondaryAction,
}: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <a
                href="/"
                className="inline-flex w-fit items-center gap-3 rounded-full border border-border/60 bg-background/60 px-4 py-2 backdrop-blur-md transition-colors hover:border-primary/50"
              >
                <img
                  src="/devflowinc-logo-mark.svg"
                  alt="DevFlowInc logo"
                  className="h-8 w-8 sm:h-9 sm:w-9"
                />
                <span className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  DevFlowInc
                </span>
              </a>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <a href="/">Home</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/privacy-policy.html">Privacy Policy</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/terms.html">Terms of Use</a>
                </Button>
              </div>
            </div>

            <div className="max-w-4xl">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                {eyebrow}
              </Badge>
              <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
                {description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border/50 bg-card/50 px-5 py-4 backdrop-blur-sm">
                  <div className="text-sm font-medium text-muted-foreground">
                    Effective date
                  </div>
                  <div className="mt-1 text-lg font-semibold">{effectiveDate}</div>
                </div>
                <div className="rounded-2xl border border-border/50 bg-card/50 px-5 py-4 backdrop-blur-sm">
                  <div className="text-sm font-medium text-muted-foreground">
                    Architecture
                  </div>
                  <div className="mt-1 text-lg font-semibold">Local-first</div>
                </div>
                <div className="rounded-2xl border border-border/50 bg-card/50 px-5 py-4 backdrop-blur-sm">
                  <div className="text-sm font-medium text-muted-foreground">
                    Storage model
                  </div>
                  <div className="mt-1 text-lg font-semibold">
                    Direct user-controlled storage
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              {summaryItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-primary sm:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        </div>
      </section>

      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Legal details, explained with the same{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  privacy-first approach
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                These pages describe how DevFlowInc products operate when data remains
                on the user's device or in storage environments controlled directly by
                the user.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {sections.map((section) => (
                <Card
                  key={section.title}
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <section.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold">{section.title}</h3>

                    <div className="space-y-4 text-muted-foreground">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {section.bullets ? (
                      <ul className="mt-5 space-y-3 text-muted-foreground">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 sm:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-3xl font-bold tracking-tight">
                    Looking for the companion legal page?
                  </h3>
                  <p className="mt-3 text-lg text-muted-foreground">
                    Review the matching document for a complete view of how the apps
                    work, what users control, and how third-party integrations are
                    handled.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href={secondaryAction.href}>
                      {secondaryAction.label}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/">Back to Home</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage;
