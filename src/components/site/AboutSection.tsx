import { Brain, Code, Database, GraduationCap, MapPin, Sparkles, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const techItems = [
  { name: "Python", icon: Code },
  { name: "FastAPI", icon: Zap },
  { name: "PyTorch", icon: Brain },
  { name: "pgvector", icon: Database },
];

const summaryItems = [
  { labelKey: "aboutFocusLabel" as const, valueKey: "aboutFocusValue" as const, icon: Brain },
  { labelKey: "status" as const, valueKey: "seekingIntern" as const, icon: Sparkles },
  { labelKey: "stack" as const, valueKey: "pythonPyTorch" as const, icon: Database },
];

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative border-t border-border/60 bg-muted/20 overflow-hidden">
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

        {/* Quick scan summary */}
        <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {summaryItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.labelKey} delay={250 + idx * 80}>
                <div className="group h-full rounded-2xl border border-border/60 bg-card/55 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-card hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-primary/10 bg-primary/10 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {t(item.labelKey)}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {t(item.valueKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
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
                    {t("aboutWhoIAm")}
                  </h3>
                  <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    <p className="rounded-xl border border-primary/15 bg-primary/5 p-4 text-foreground/90">
                      {t("aboutBioIntro")}{" "}
                      <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary">
                        <Brain className="h-3.5 w-3.5" />
                        {t("aboutBioHighlight")}
                      </span>
                      {t("aboutBioAfterHighlight")}
                    </p>
                    <p>{t("aboutBioSecond")}</p>
                  </div>

                  {/* Inline tech chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {techItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
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
                        {t("aboutBasedInLabel")}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {t("aboutLocationValue")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <GraduationCap className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {t("aboutEducationLabel")}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {t("aboutEducationValue")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <Zap className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {t("aboutFocusLabel")}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {t("aboutFocusValue")}
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
                    {t("aboutStatusValue")}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
