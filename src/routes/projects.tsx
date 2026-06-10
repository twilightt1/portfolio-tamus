import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "../components/site/SectionHeading";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Chen" },
      {
        name: "description",
        content:
          "A selection of machine learning and AI projects: NLP, computer vision, and reinforcement learning.",
      },
      { property: "og:title", content: "Projects — Alex Chen" },
      {
        property: "og:description",
        content: "Hand-picked ML/AI projects with descriptions and source links.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    name: "Sentiment Analysis API",
    blurb:
      "Fine-tuned DistilBERT on movie reviews and served it through a FastAPI endpoint with caching and rate limiting.",
    tags: ["PyTorch", "HuggingFace", "FastAPI"],
    accent: "from-primary/20 to-accent",
    glyph: "{ }",
  },
  {
    name: "Neural Style Transfer Studio",
    blurb:
      "Interactive web app that applies arbitrary style transfer in the browser using a quantized ONNX model.",
    tags: ["ONNX", "WebGL", "React"],
    accent: "from-fuchsia-400/20 to-primary/10",
    glyph: "✦",
  },
  {
    name: "GridWorld RL Agent",
    blurb:
      "Implemented DQN and PPO from scratch and benchmarked them on a custom grid world environment.",
    tags: ["RL", "NumPy", "Gym"],
    accent: "from-emerald-400/20 to-accent",
    glyph: "λ",
  },
  {
    name: "RAG Notes Assistant",
    blurb:
      "Personal knowledge assistant that indexes markdown notes with embeddings and answers questions with citations.",
    tags: ["LangChain", "pgvector", "OpenAI"],
    accent: "from-amber-400/20 to-accent",
    glyph: "⟶",
  },
];

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="projects"
        title="Things I've built."
        description="A small, honest selection of projects. Each one taught me something I didn't know going in."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
          >
            <div
              className={`relative grid h-40 place-items-center bg-gradient-to-br ${p.accent}`}
            >
              <span className="font-mono text-5xl font-bold text-primary/60">
                {p.glyph}
              </span>
              <span className="absolute right-3 top-3 rounded-md border border-border/60 bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                placeholder
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h2 className="font-mono text-lg font-semibold text-foreground">
                {p.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-accent px-2 py-0.5 font-mono text-[11px] text-accent-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4 border-t border-border/60 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" /> code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" /> demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
