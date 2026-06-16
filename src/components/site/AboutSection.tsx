import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Code,
  GraduationCap,
  Sparkles,
  MapPin,
  Zap,
  Brain,
  Globe,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const journeyMilestones = [
  {
    year: "2024",
    title: "Started B.S. in Computer Science",
    description:
      "Diving into ML, deep learning, linear algebra, and systems at State University.",
    icon: GraduationCap,
    tag: "Education",
  },
  {
    year: "2025",
    title: "Joined NLP Research Lab",
    description:
      "Undergraduate RA studying how small language models represent knowledge internally.",
    icon: BookOpen,
    tag: "Research",
  },
  {
    year: "2025",
    title: "Open Source Contributions",
    description:
      "Shipping bug fixes, docs, and features across several ML tooling repositories.",
    icon: GitBranch,
    tag: "Community",
  },
];

const techItems = [
  { name: "Python", icon: Globe },
  { name: "PyTorch", icon: Brain },
  { name: "React", icon: Code },
  { name: "TypeScript", icon: Code },
];

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="relative border-t border-border/60 bg-muted/20 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/5 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/4 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:px-20">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary">
              <Sparkles className="h-3 w-3" />
              {t("about")}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-6 font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t("curiousByDefault")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {t("aboutDescription")}
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Cards — clean and balanced */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Card 1: Bio */}
          <ScrollReveal delay={300} className="lg:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-7 sm:p-8 transition-all duration-500 hover:border-border hover:shadow-xl">
              <div className="flex items-start gap-5">
                <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                    Who I Am
                  </h3>
                  <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    <p>
                      I'm a CS undergrad obsessed with understanding{" "}
                      <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary">
                        <Brain className="h-3.5 w-3.5" />
                        how models think
                      </span>
                      . My work sits at the intersection of{" "}
                      <span className="font-medium text-foreground">ML</span>,{" "}
                      <span className="font-medium text-foreground">systems</span>,
                      and whatever paper caught my attention at 2 AM.
                    </p>
                    <p>
                      Outside of class I'm usually fine-tuning models, contributing
                      to open source, or writing about what I learn. Currently
                      excited about retrieval-augmented systems and efficient
                      training on a budget.
                    </p>
                  </div>

                  {/* Inline tech chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {techItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
                        >
                          <Icon className="h-3 w-3" />
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Quick Info */}
          <ScrollReveal delay={400}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-7 transition-all duration-500 hover:border-border hover:shadow-xl">
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <MapPin className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Based in
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <GraduationCap className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Education
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        B.S. CS — Class of 2028
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <Zap className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Focus
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        ML / AI Research
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Card 3: Journey — full width below */}
        <ScrollReveal delay={500}>
          <div className="mt-5 group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-7 sm:p-8 transition-all duration-500 hover:border-border hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                Journey
              </h3>
              <div className="flex items-center gap-1.5">
                {journeyMilestones.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 w-8 rounded-full ${
                      idx === 0 ? "bg-primary" : "bg-primary/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {journeyMilestones.map((milestone, idx) => {
                const Icon = milestone.icon;
                return (
                  <div
                    key={milestone.title}
                    className="group/milestone relative rounded-xl border border-border/40 bg-muted/20 p-5 transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {idx < journeyMilestones.length - 1 && (
                      <div className="hidden sm:block absolute top-1/2 -right-2.5 h-px w-5 bg-border/60 z-10" />
                    )}

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 transition-all duration-300 group-hover/milestone:from-primary/30 group-hover/milestone:to-primary/10 group-hover/milestone:border-primary/40">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-primary">
                          {milestone.year}
                        </span>
                        <span className="ml-2 inline-flex items-center rounded-md bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                          {milestone.tag}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-sm font-semibold text-foreground mb-1.5 transition-colors duration-300 group-hover/milestone:text-primary">
                      {milestone.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {milestone.description}
                    </p>

                    <ArrowUpRight className="absolute top-4 right-4 h-3.5 w-3.5 text-muted-foreground/0 transition-all duration-300 group-hover/milestone:text-primary/60 group-hover/milestone:-translate-y-0.5 group-hover/milestone:translate-x-0.5" />
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
