import { BookOpen, Code, FolderGit2, GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  const { t } = useI18n();

  const timeline = [
    {
      year: "2024 — Present",
      title: "B.S. Computer Science",
      org: "State University",
      detail: "Coursework in ML, deep learning, linear algebra, and systems.",
      icon: GraduationCap,
    },
    {
      year: "2025",
      title: "Undergraduate Research Assistant",
      org: "NLP Lab",
      detail: "Studying transformer interpretability on small language models.",
      icon: BookOpen,
    },
    {
      year: "2025",
      title: "Open Source Contributor",
      org: "Various",
      detail: "Bug fixes and docs for a handful of ML tooling repos.",
      icon: FolderGit2,
    },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-t border-border/60 bg-muted/30"
    >
      {/* Subtle dot pattern */}
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-none px-6 py-20 sm:px-10 sm:py-24 lg:px-20 xl:px-32">
        <div className="mb-12 sm:mb-16">
        <ScrollReveal delay={0}>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            // {t('about')}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('curiousByDefault')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {t('aboutDescription')}
          </p>
        </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Left: Avatar + quick facts */}
          <div className="flex flex-col items-start gap-6">
            <ScrollReveal delay={300} direction="left">
              <div className="group relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent opacity-70 blur-xl transition-opacity group-hover:opacity-100" />
                <div className="relative grid aspect-square w-full max-w-[220px] place-items-center rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 to-accent/5 shadow-lg">
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                      TP
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      ML / AI
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="left">
              <div className="w-full space-y-1 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
                {[
                  { icon: "📍", label: t('basedIn') },
                  { icon: "🎓", label: t('classOf') },
                  { icon: "☕", label: t('poweredBy') },
                  { icon: "🧠", label: t('mlAIFocus') },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-accent/50"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Bio + Timeline */}
          <div className="space-y-12">
            {/* Bio paragraphs */}
            <ScrollReveal delay={500} direction="right">
              <div className="space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  {t('bio1')}{" "}
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary">
                    <Code className="h-3.5 w-3.5" />
                    {t('machineLearning')}
                  </span>,{" "}
                  <span className="inline-flex items-center gap-1 rounded-md bg-accent/50 px-2 py-0.5 font-medium">
                    systems
                  </span>, {t('bio1b')}
                </p>
                <p>
                  {t('bio2')}
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal delay={600} direction="right">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                  // {t('timeline')}
                </h3>
                <ol className="mt-6 space-y-4">
                  {timeline.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title}>
                        <div className="group flex gap-4 rounded-xl border border-border/60 bg-card/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-mono text-xs font-medium text-primary">
                              {item.year}
                            </p>
                            <p className="mt-1 text-base font-semibold text-foreground">
                              {item.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.org}
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground/80">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
