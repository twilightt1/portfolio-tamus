import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionHeading } from "../components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Chen — ML/AI Engineer Intern" },
      {
        name: "description",
        content:
          "Portfolio of Alex Chen — ML/AI engineer in training. Projects, skills, and contact info.",
      },
      { property: "og:title", content: "Alex Chen — ML/AI Engineer Intern" },
      {
        property: "og:description",
        content: "Selected projects, skills, and contact info.",
      },
    ],
  }),
  component: Index,
});

const EMAIL = "alex.chen@example.com";

const timeline = [
  {
    year: "2024 — Present",
    title: "B.S. Computer Science",
    org: "State University",
    detail: "Coursework in ML, deep learning, linear algebra, and systems.",
  },
  {
    year: "2025",
    title: "Undergraduate Research Assistant",
    org: "NLP Lab",
    detail: "Studying transformer interpretability on small language models.",
  },
  {
    year: "2025",
    title: "Open Source Contributor",
    org: "Various",
    detail: "Bug fixes and docs for a handful of ML tooling repos.",
  },
];

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

const skillGroups = [
  { title: "Languages", items: ["Python", "TypeScript", "C++", "SQL", "Bash"] },
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

function Index() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          // open to internships — summer 2026
        </p>

        <h1 className="mt-5 font-mono text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Hi, I&apos;m Alex.
          <br />
          <span className="text-muted-foreground">
            I build <span className="text-primary">ML systems</span>
            <br />
            that learn from data.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
          Computer science student focused on machine learning and applied AI. I
          love turning research papers into shipping code — from sentiment
          models to small reinforcement learning agents.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            View projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Mail className="h-4 w-4" /> Get in touch
          </a>
          <a
            href="/resume"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <FileText className="h-4 w-4" /> View CV
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { k: "Focus", v: "ML / AI" },
            { k: "Stack", v: "Python · PyTorch" },
            { k: "Status", v: "Seeking intern role" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-lg border border-border bg-card p-4"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {item.k}
              </p>
              <p className="mt-1 font-mono text-sm text-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-border/60 bg-muted/30"
      >
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="about"
            title="Curious by default."
            description="Third-year CS student who got hooked on ML after my first neural network actually learned something. Now I spend my time reading papers, breaking models, and building small things that try to understand the world."
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col items-start gap-4">
              <div className="grid aspect-square w-full max-w-[180px] place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent text-primary">
                <span className="font-mono text-4xl font-bold">AC</span>
              </div>
              <div className="space-y-1 font-mono text-xs text-muted-foreground">
                <p>📍 Based in San Francisco</p>
                <p>🎓 Class of 2027</p>
                <p>☕ Powered by espresso</p>
              </div>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-foreground">
              <p>
                My interests sit at the intersection of{" "}
                <strong>machine learning</strong>, <strong>systems</strong>, and
                good developer experience. I care about shipping things that
                work end-to-end, not just notebooks that run once.
              </p>
              <p>
                Outside of class I&apos;m usually tinkering with model
                fine-tuning, contributing to small open-source projects, or
                writing about what I learn. I&apos;m especially excited about
                retrieval-augmented systems and efficient training on a budget.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              // timeline
            </h3>
            <ol className="mt-6 space-y-6 border-l border-border pl-6">
              {timeline.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-muted/30" />
                  <p className="font-mono text-xs text-primary">{item.year}</p>
                  <p className="mt-1 text-base font-medium text-foreground">
                    {item.title}{" "}
                    <span className="text-muted-foreground">· {item.org}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="projects"
            title="Things I've built."
            description="A small, honest selection of projects. Each one taught me something I didn't know going in."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((p, idx) => (
              <article
                key={p.name}
                onClick={() => setOpenProject(idx)}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40 cursor-pointer"
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
                  <h3 className="font-mono text-lg font-semibold text-foreground">
                    {p.name}
                  </h3>
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
                      href={p.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" /> code
                    </a>
                    <a
                      href={p.demoUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" /> demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog
        open={openProject !== null}
        onOpenChange={(open) => !open && setOpenProject(null)}
      >
        <DialogContent className="max-w-lg gap-0 p-0 overflow-hidden sm:rounded-xl">
          {openProject !== null && (
            <>
              <div
                className={`relative grid h-44 place-items-center bg-gradient-to-br ${projects[openProject].accent}`}
              >
                <span className="font-mono text-6xl font-bold text-primary/60">
                  {projects[openProject].glyph}
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader className="text-left">
                  <DialogTitle className="font-mono text-xl font-semibold tracking-tight">
                    {projects[openProject].name}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Project details for {projects[openProject].name}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {projects[openProject].description}
                  </p>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">
                      // key learnings
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {projects[openProject].learnings.map((l) => (
                        <li
                          key={l}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {projects[openProject].tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-accent px-2 py-0.5 font-mono text-[11px] text-accent-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4 border-t border-border/60 pt-4">
                    <a
                      href={projects[openProject].githubUrl}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 font-mono text-xs text-foreground transition-colors hover:bg-accent"
                    >
                      <Github className="h-3.5 w-3.5" /> View code
                    </a>
                    <a
                      href={projects[openProject].demoUrl}
                      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 font-mono text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" /> Live demo
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-20 border-t border-border/60 bg-muted/30"
      >
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="skills"
            title="Tools of the trade."
            description="Languages, frameworks, and tooling I reach for. I care more about understanding fundamentals than collecting buzzwords."
          />

          <div className="space-y-10">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                  // {g.title}
                </h3>
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
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="contact"
            title="Let's build something."
            description="I'm actively looking for a summer 2026 ML/AI internship. If you think there's a fit — or just want to chat about a paper — I'd love to hear from you."
          />

          <ContactCard />
        </div>
      </section>
    </>
  );
}

function ContactCard() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          // email
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${EMAIL}`}
            className="break-all font-mono text-lg text-foreground hover:text-primary sm:text-xl"
          >
            {EMAIL}
          </a>
          <button
            onClick={copy}
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-background px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-primary" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copy
              </>
            )}
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" /> Send email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>

      <p className="mt-6 font-mono text-xs text-muted-foreground">
        Typical response time: within 24 hours.
      </p>
    </>
  );
}
