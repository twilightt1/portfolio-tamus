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
        </div>
      </section>

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
