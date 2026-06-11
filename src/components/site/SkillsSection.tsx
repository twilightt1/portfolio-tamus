import { Code2, Brain, Cloud, Rocket } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const skillGroups = [
  {
    titleKey: "languages" as const,
    icon: Code2,
    items: ["Python", "TypeScript", "C++", "SQL", "Bash"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "hover:border-blue-500/30",
  },
  {
    titleKey: "mlAI" as const,
    icon: Brain,
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "HuggingFace",
      "NumPy",
      "Pandas",
      "LangChain",
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "hover:border-purple-500/30",
  },
  {
    titleKey: "toolsAndCloud" as const,
    icon: Cloud,
    items: [
      "Docker",
      "Git",
      "AWS",
      "GCP",
      "Postgres",
      "FastAPI",
      "Weights & Biases",
    ],
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    titleKey: "currentlyLearning" as const,
    icon: Rocket,
    items: ["CUDA kernels", "JAX", "Triton", "Distributed training"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "hover:border-amber-500/30",
  },
];

export function SkillsSection() {
  const { t } = useI18n();

  return (
    <section
      id="skills"
      className="relative scroll-mt-20 border-t border-border/60 bg-muted/30"
    >
      {/* Background pattern */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-none px-6 py-20 sm:px-10 sm:py-24 lg:px-20 xl:px-32">
        <div className="mb-12 sm:mb-16">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // {t('skills')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t('toolsOfTheTrade')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {t('skillsDescription')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((g, groupIdx) => {
            const Icon = g.icon;
            return (
              <ScrollReveal key={g.titleKey} delay={groupIdx * 100} direction="up">
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-card ${g.borderColor} hover:shadow-xl hover:shadow-primary/5`}
                >
                  {/* Subtle gradient background on hover */}
                  <div className={`absolute inset-0 ${g.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-50`} />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div
                        className={`grid h-12 w-12 place-items-center rounded-xl ${g.bgColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                      >
                        <Icon className={`h-6 w-6 ${g.color}`} />
                      </div>
                      <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-foreground">
                        {t(g.titleKey)}
                      </h3>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-border/60 bg-background/60 px-3.5 py-2 font-mono text-sm text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
