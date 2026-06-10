import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/site/SectionHeading";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech Stack — Alex Chen" },
      {
        name: "description",
        content:
          "Languages, ML/AI frameworks, and tooling Alex Chen uses day-to-day.",
      },
      { property: "og:title", content: "Skills & Tech Stack — Alex Chen" },
      {
        property: "og:description",
        content: "Languages, ML frameworks, and tools.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "C++", "SQL", "Bash"],
  },
  {
    title: "ML & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "HuggingFace",
      "NumPy",
      "Pandas",
      "LangChain",
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      "Docker",
      "Git",
      "AWS",
      "GCP",
      "Postgres",
      "FastAPI",
      "Weights & Biases",
    ],
  },
  {
    title: "Currently learning",
    items: ["CUDA kernels", "JAX", "Triton", "Distributed training"],
  },
];

function SkillsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="skills"
        title="Tools of the trade."
        description="Languages, frameworks, and tooling I reach for. I care more about understanding fundamentals than collecting buzzwords."
      />

      <div className="space-y-10">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              // {g.title}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
