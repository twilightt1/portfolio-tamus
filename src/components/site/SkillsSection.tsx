import { Code2, Brain, Cloud, Rocket } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const skillGroups = [
  {
    titleKey: "languages" as const,
    icon: Code2,
    items: ["Python", "SQL", "C++", "JavaScript", "Java"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "hover:border-blue-500/30",
    glowColor: "hover:shadow-blue-500/20",
  },
  {
    titleKey: "machineLearningCore" as const,
    icon: Brain,
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Model Evaluation",
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "hover:border-purple-500/30",
    glowColor: "hover:shadow-purple-500/20",
  },
  {
    titleKey: "deepLearning" as const,
    icon: Rocket,
    items: ["Neural Networks", "CNN", "RNN/LSTM", "Transformers", "Transfer Learning"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "hover:border-pink-500/30",
    glowColor: "hover:shadow-pink-500/20",
  },
  {
    titleKey: "librariesFrameworks" as const,
    icon: Cloud,
    items: ["NumPy", "Pandas", "scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "FastAPI"],
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "hover:border-cyan-500/30",
    glowColor: "hover:shadow-cyan-500/20",
  },
  {
    titleKey: "toolsAndCloud" as const,
    icon: Cloud,
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "PostgreSQL",
      "MongoDB",
      "ChromaDB",
      "Qdrant",
      "pgvector",
    ],
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "hover:border-emerald-500/30",
    glowColor: "hover:shadow-emerald-500/20",
  },
];

export function SkillsSection() {
  const { t } = useI18n();

  return (
    <section id="skills" className="relative border-t border-border/60 bg-muted/30">
      {/* Grid pattern */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-none px-6 py-24 sm:px-10 sm:py-28 lg:px-20 xl:px-32">
        {/* Section heading */}
        <div className="mb-14 sm:mb-18">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {t("skills")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-gradient-static mt-3 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
              {t("toolsOfTheTrade")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {t("skillsDescription")}
            </p>
          </ScrollReveal>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((g, groupIdx) => {
            const Icon = g.icon;
            return (
              <ScrollReveal key={g.titleKey} delay={groupIdx * 120} direction="up">
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 ease-spring hover:-translate-y-1.5 hover:bg-card ${g.borderColor} ${g.glowColor} hover:shadow-2xl active:translate-y-0`}
                >
                  {/* Category glow overlay on hover - smoother */}
                  <div
                    className={`absolute inset-0 ${g.bgColor} opacity-0 transition-all duration-500 group-hover:opacity-40 group-hover:scale-105`}
                  />

                  <div className="relative z-10">
                    {/* Header with icon + count */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`grid h-12 w-12 place-items-center rounded-xl ${g.bgColor} transition-all duration-300 ease-spring group-hover:scale-110 group-hover:shadow-lg ${g.glowColor}`}
                        >
                          <Icon
                            className={`h-6 w-6 ${g.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                          />
                        </div>
                        <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-foreground transition-colors duration-300 group-hover:text-primary">
                          {t(g.titleKey)}
                        </h3>
                      </div>
                      {/* Count badge */}
                      <span
                        className={`rounded-full ${g.bgColor} px-2.5 py-0.5 font-mono text-[10px] font-semibold ${g.color} transition-all duration-300 group-hover:scale-110`}
                      >
                        {g.items.length}
                      </span>
                    </div>

                    {/* Skill tags */}
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {g.items.map((item, itemIdx) => (
                        <span
                          key={item}
                          className={`rounded-lg border border-border/60 bg-background/60 px-3.5 py-2 font-mono text-sm text-foreground transition-all duration-300 ease-spring hover:${g.borderColor} hover:bg-primary/5 hover:text-primary hover:shadow-md hover:-translate-y-0.5 active:translate-y-0`}
                          style={{ animationDelay: `${itemIdx * 30}ms` }}
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
