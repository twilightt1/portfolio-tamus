import { BookOpen, Code, FolderGit2, GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useRef, useEffect, useState } from "react";

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

export function AboutSection() {
  const { t } = useI18n();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);

  // Animate timeline fill as user scrolls into view
  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ratio = entry.intersectionRatio;
          setFillHeight(Math.min(ratio * 2, 1) * 100);
        }
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-t border-border/60 bg-muted/30"
    >
      {/* Dot pattern + drift orb */}
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-25" />
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-[120px]"
        style={{ animation: "orb-drift 18s ease-in-out infinite" }}
      />

      <div className="relative mx-auto max-w-none px-6 py-24 sm:px-10 sm:py-28 lg:px-20 xl:px-32">
        {/* Section heading */}
        <div className="mb-14 sm:mb-18">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {t("about")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-gradient-static mt-3 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
              {t("curiousByDefault")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {t("aboutDescription")}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.5fr]">
          {/* Left: Avatar + quick facts */}
          <div className="flex flex-col items-start gap-8">
            {/* Avatar with animated gradient border */}
            <ScrollReveal delay={300} direction="left">
              <div className="group relative">
                {/* Animated gradient border */}
                <div className="animate-gradient absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-primary via-primary/60 to-primary bg-[length:200%_200%] opacity-50 blur-[1px] transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative grid aspect-square w-full max-w-[220px] place-items-center rounded-2xl border border-border/60 bg-gradient-to-br from-primary/8 to-accent/5 shadow-lg">
                  <div className="flex flex-col items-center gap-3">
                    <span className="font-mono text-5xl font-bold text-gradient">
                      TP
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      ML / AI
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick facts */}
            <ScrollReveal delay={400} direction="left">
              <div className="w-full space-y-1 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
                {[
                  { icon: "📍", label: t("basedIn") },
                  { icon: "🎓", label: t("classOf") },
                  { icon: "☕", label: t("poweredBy") },
                  { icon: "🧠", label: t("mlAIFocus") },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:bg-primary/8 hover:text-foreground"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Bio + Timeline */}
          <div className="space-y-14">
            {/* Bio */}
            <ScrollReveal delay={500} direction="right">
              <div className="space-y-5 text-base leading-relaxed text-foreground">
                <p>
                  {t("bio1")}{" "}
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary">
                    <Code className="h-3.5 w-3.5" />
                    {t("machineLearning")}
                  </span>
                  ,{" "}
                  <span className="inline-flex items-center gap-1 rounded-md bg-accent/50 px-2 py-0.5 font-medium">
                    systems
                  </span>
                  , {t("bio1b")}
                </p>
                <p>{t("bio2")}</p>
              </div>
            </ScrollReveal>

            {/* Timeline with animated fill */}
            <ScrollReveal delay={600} direction="right">
              <div ref={timelineRef}>
                <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                  {t("timeline")}
                </h3>
                <ol className="relative mt-6 space-y-0">
                  {/* Background track line */}
                  <div className="absolute left-[21px] top-5 bottom-5 w-px bg-border/40" />
                  {/* Animated fill line */}
                  <div
                    className="absolute left-[21px] top-5 w-px bg-gradient-to-b from-primary via-primary/60 to-primary/30 transition-all duration-1000 ease-out"
                    style={{ height: `${fillHeight}%`, maxHeight: "calc(100% - 40px)" }}
                  />

                  {timeline.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.title}
                        className="relative pl-14 pb-8 last:pb-0"
                      >
                        {/* Icon circle on the line */}
                        <div className="absolute left-0 top-0 z-10 grid h-11 w-11 place-items-center rounded-full border-2 border-border/60 bg-card transition-all duration-500 ease-spring hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>

                        {/* Card */}
                        <div className="group spotlight-card rounded-xl border border-border/60 bg-card/60 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5">
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
