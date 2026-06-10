import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Download, Github, Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Alex Chen" },
      {
        name: "description",
        content: "Resume of Alex Chen — ML/AI engineer in training.",
      },
      { property: "og:title", content: "Resume — Alex Chen" },
      {
        property: "og:description",
        content: "Resume of Alex Chen — ML/AI engineer in training.",
      },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Nav */}
      <div className="mb-10 flex items-center justify-between">
        <a
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </a>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 font-mono text-sm text-foreground transition-colors hover:bg-accent"
        >
          <Download className="h-4 w-4" /> Print / Save PDF
        </button>
      </div>

      {/* Header */}
      <header className="border-b border-border pb-8">
        <h1 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Alex Chen
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          ML / AI Engineer Intern
        </p>
        <div className="mt-4 flex flex-wrap gap-4 font-mono text-sm text-muted-foreground">
          <a href="mailto:alex.chen@example.com" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Mail className="h-3.5 w-3.5" /> alex.chen@example.com
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Github className="h-3.5 w-3.5" /> github.com
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Linkedin className="h-3.5 w-3.5" /> linkedin.com
          </a>
        </div>
      </header>

      {/* Education */}
      <section className="mt-8">
        <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
          // Education
        </h2>
        <div className="mt-4 space-y-4">
          <div>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="text-base font-semibold text-foreground">
                B.S. Computer Science
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                2024 — Present (Expected 2027)
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              State University — GPA 3.8/4.0
            </p>
            <p className="mt-1 text-sm text-foreground">
              Coursework: Machine Learning, Deep Learning, Linear Algebra, Distributed Systems, Algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mt-8">
        <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
          // Experience
        </h2>
        <div className="mt-4 space-y-6">
          <div>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="text-base font-semibold text-foreground">
                Undergraduate Research Assistant
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                Jan 2025 — Present
              </span>
            </div>
            <p className="text-sm text-muted-foreground">NLP Lab, State University</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
              <li>Studying transformer interpretability on small language models (1B–7B parameters).</li>
              <li>Implemented attention-pattern visualizations and probing classifiers for layer-wise representation analysis.</li>
              <li>Co-authored a workshop paper on mechanistic interpretability of arithmetic circuits.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="text-base font-semibold text-foreground">
                Open Source Contributor
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                2025 — Present
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Various ML tooling repositories</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
              <li>Fixed quantization edge-case bugs in HuggingFace Transformers examples.</li>
              <li>Improved documentation and onboarding guides for three popular ML libraries.</li>
              <li>Reviewed and triaged community PRs for a PyTorch-geometric plugin.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-8">
        <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
          // Selected Projects
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Sentiment Analysis API
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fine-tuned DistilBERT on IMDB reviews, exported to ONNX, and served through FastAPI with Redis caching and rate limiting.
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              PyTorch · HuggingFace · FastAPI · Redis
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground">
              Neural Style Transfer Studio
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Interactive web app that applies arbitrary style transfer in the browser using a quantized ONNX model and HTML5 canvas.
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              ONNX · WebGL · React · TypeScript
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground">
              RAG Notes Assistant
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Personal knowledge assistant that indexes markdown notes with sentence-transformer embeddings and answers questions via local LLM.
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              LangChain · pgvector · FastAPI · llama.cpp
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
          // Skills
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Languages</p>
            <p className="mt-1 text-sm text-foreground">Python, TypeScript, C++, SQL, Bash</p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground">ML & AI</p>
            <p className="mt-1 text-sm text-foreground">PyTorch, TensorFlow, scikit-learn, HuggingFace, NumPy, Pandas, LangChain</p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground">Tools & Cloud</p>
            <p className="mt-1 text-sm text-foreground">Docker, Git, AWS, GCP, Postgres, FastAPI, Weights & Biases</p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground">Currently Learning</p>
            <p className="mt-1 text-sm text-foreground">CUDA kernels, JAX, Triton, Distributed training</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-border pt-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          References available upon request.
        </p>
      </footer>
    </div>
  );
}
