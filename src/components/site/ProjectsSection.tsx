import { useState, useRef, useCallback } from "react";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    name: "Sentiment Analysis API",
    blurb:
      "Fine-tuned DistilBERT on movie reviews and served it through a FastAPI endpoint with caching and rate limiting.",
    description:
      "Built an end-to-end sentiment classification pipeline starting from raw IMDB review data. Tokenized and fine-tuned DistilBERT using HuggingFace Transformers, then exported to ONNX for faster CPU inference. Wrapped the model in a FastAPI service with Redis caching and slowapi rate limiting. Deployed on a small VPS and load-tested with Locust.",
    tags: ["PyTorch", "HuggingFace", "FastAPI"],
    accent: "from-primary/20 to-accent",
    glyph: "{ }",
    learnings: [
      "Learned how to optimize transformer inference for CPU-only environments.",
      "Understood the trade-offs between model size, latency, and accuracy.",
      "Gained experience deploying ML services with real-world constraints like rate limiting.",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    name: "Neural Style Transfer Studio",
    blurb:
      "Interactive web app that applies arbitrary style transfer in the browser using a quantized ONNX model.",
    description:
      "Implemented a real-time neural style transfer application that runs entirely client-side. Converted a pre-trained PyTorch model to ONNX, then quantized it to INT8 for fast inference. Built a React frontend that reads images from the user's camera or file uploads and renders stylized output through an HTML5 canvas pipeline.",
    tags: ["ONNX", "WebGL", "React"],
    accent: "from-fuchsia-400/20 to-primary/10",
    glyph: "✦",
    learnings: [
      "Learned the ONNX conversion and quantization workflow end-to-end.",
      "Explored WebGL and canvas performance optimization for image processing.",
      "Discovered how to ship ML models to users without backend infrastructure.",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    name: "GridWorld RL Agent",
    blurb:
      "Implemented DQN and PPO from scratch and benchmarked them on a custom grid world environment.",
    description:
      "Wrote DQN and PPO algorithms from scratch in NumPy and PyTorch to solve a custom grid world environment with stochastic transitions and sparse rewards. Implemented experience replay, target networks, advantage estimation, and entropy regularization. Logged training curves and compared sample efficiency across both methods.",
    tags: ["RL", "NumPy", "Gym"],
    accent: "from-emerald-400/20 to-accent",
    glyph: "λ",
    learnings: [
      "Deep understanding of policy gradients and value-based methods.",
      "Learned to debug unstable RL training by inspecting gradients and rewards.",
      "Built custom Gym environments and learned the OpenAI Gym API deeply.",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    name: "RAG Notes Assistant",
    blurb:
      "Personal knowledge assistant that indexes markdown notes with embeddings and answers questions with citations.",
    description:
      "Created a retrieval-augmented generation system for personal knowledge management. Parsed markdown notes into chunks, generated embeddings with a local sentence-transformer model, and stored them in pgvector. Built a simple CLI and FastAPI frontend that answers natural language queries by retrieving relevant chunks and composing answers with a local LLM via llama.cpp.",
    tags: ["LangChain", "pgvector", "OpenAI"],
    accent: "from-amber-400/20 to-accent",
    glyph: "⟶",
    learnings: [
      "Learned how chunking strategy drastically changes retrieval quality.",
      "Understood the full RAG pipeline from ingestion to generation.",
      "Gained hands-on experience with vector databases and embedding models.",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
];

export function ProjectsSection() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <section id="projects" className="relative scroll-mt-20 border-t border-border/60">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute left-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-none px-6 py-20 sm:px-10 sm:py-24 lg:px-20 xl:px-32">
        <div className="mb-12 sm:mb-16">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // {t('projectsSection')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t('thingsIBuilt')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {t('projectsDescription')}
            </p>
          </ScrollReveal>
        </div>

        {/* Project cards - Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <ScrollReveal key={p.name} delay={idx * 150} direction="up">
              <TiltCard
                onClick={() => setOpenProject(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-2xl hover:shadow-primary/10"
              >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />

              {/* Top: Glyph area */}
              <div
                className={`relative grid h-44 place-items-center bg-gradient-to-br ${p.accent}`}
              >
                <span className="font-mono text-6xl font-bold text-primary/60 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/80">
                  {p.glyph}
                </span>
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    0{idx + 1}
                  </span>
                </div>
                <div className="absolute right-4 top-4 rounded-md border border-border/60 bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                  {t('project')}
                </div>
              </div>

              {/* Bottom: Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-mono text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {p.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 font-mono text-[11px] text-accent-foreground transition-colors group-hover:border-primary/20 group-hover:bg-primary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={p.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" /> {t('code')}
                    </a>
                    <a
                      href={p.demoUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" /> {t('demo')}
                    </a>
                  </div>
                </div>
              </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog
        open={openProject !== null}
        onOpenChange={(open) => !open && setOpenProject(null)}
      >
        <DialogContent className="max-w-2xl gap-0 p-0 overflow-hidden sm:rounded-2xl">
          {openProject !== null && (
            <>
              <div
                className={`relative grid h-56 place-items-center bg-gradient-to-br ${projects[openProject].accent}`}
              >
                <span className="font-mono text-7xl font-bold text-primary/60">
                  {projects[openProject].glyph}
                </span>
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    0{openProject + 1}
                  </span>
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <DialogHeader className="text-left">
                  <DialogTitle className="font-mono text-2xl font-semibold tracking-tight">
                    {projects[openProject].name}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Project details for {projects[openProject].name}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 space-y-5">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {projects[openProject].description}
                  </p>
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">
                      // {t('keyLearnings')}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {projects[openProject].learnings.map((l) => (
                        <li
                          key={l}
                          className="flex items-start gap-3 text-sm text-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projects[openProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/60 bg-background/50 px-3 py-1.5 font-mono text-[11px] text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 border-t border-border/60 pt-5">
                    <a
                      href={projects[openProject].githubUrl}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 font-mono text-xs text-foreground transition-colors hover:bg-accent"
                    >
                      <Github className="h-4 w-4" /> {t('viewCode')}
                    </a>
                    <a
                      href={projects[openProject].demoUrl}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-mono text-xs font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
                    >
                      <ArrowUpRight className="h-4 w-4" /> {t('liveDemo')}
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
