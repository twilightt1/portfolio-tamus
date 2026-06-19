import { useState } from "react";
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
    name: "Jobfit - AI Resume Match & Optimizer",
    blurb:
      "End-to-end AI/ML pipeline that parses resumes and job descriptions, scores match quality, and generates truth-guarded rewrite suggestions.",
    description:
      "Built an end-to-end AI/ML system for resume and job-description analysis. The pipeline extracts structured resume/JD features, computes match quality with semantic similarity and lexical overlap, retrieves requirement-level evidence with sentence-transformer embeddings and pgvector, and validates AI-generated optimization suggestions to reduce unsupported or hallucinated claims.",
    tags: ["Python", "NLP", "LLMs", "FastAPI", "pgvector"],
    accent: "from-cyan-400/20 to-primary/20",
    glyph: "∑",
    learnings: [
      "Parsed resumes and job descriptions into structured features for requirement-level matching.",
      "Implemented embeddings and pgvector retrieval for semantic skill matching and ATS keyword coverage.",
      "Added evaluation workflows for parsing, matching, retrieval quality, and guardrail performance.",
    ],
    githubUrl: "https://github.com/twilightt1/jobfit",
    demoUrl: "#",
  },
  {
    name: "Mindlayer - Personal AI Second Brain",
    blurb:
      "Hybrid RAG and agentic memory system using BM25, dense retrieval, reranking, LangGraph self-correction, and citation-aware answers.",
    description:
      "Built a personal knowledge assistant with a hybrid RAG pipeline that fuses BM25 and dense vector retrieval via Reciprocal Rank Fusion, reranks results with a Jina cross-encoder, and uses a LangGraph agent with LLM-graded self-correction loops to reduce hallucinations and enforce citation accuracy. The system includes a memory layer with entity extraction, time-decay salience scoring, and knowledge-graph context injection.",
    tags: ["Python", "FastAPI", "LangGraph", "ChromaDB", "PostgreSQL"],
    accent: "from-violet-400/20 to-accent/20",
    glyph: "ψ",
    learnings: [
      "Combined BM25 and vector search with RRF to improve retrieval coverage across personal notes.",
      "Designed self-correction loops that grade answers and citations before returning responses.",
      "Evaluated RAG quality with custom metrics, a 40+ QA dataset, experiment tracking, and cost logging.",
    ],
    githubUrl: "https://github.com/twilightt1/mindlayer",
    demoUrl: "#",
  },
];

// Collect all unique tags
const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export function ProjectsSection() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState("All");
  const { t } = useI18n();

  const filtered =
    activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="relative border-t border-border/60">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute left-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="mobile-section relative mx-auto max-w-none px-4 py-20 sm:px-10 sm:py-24 lg:px-20 xl:px-32">
        <div className="mb-12 sm:mb-16">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {t("projectsSection")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("thingsIBuilt")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-lg sm:leading-relaxed">
              {t("projectsDescription")}
            </p>
          </ScrollReveal>

          {/* Filter tabs */}
          <ScrollReveal delay={300}>
            <div className="mobile-scroll-row mobile-fade-mask mt-6 flex flex-nowrap gap-2 sm:mt-8 sm:flex-wrap">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={activeTag === tag}
                  className={`touch-target tap-highlight-none mobile-snap-card shrink-0 rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300 ${
                    activeTag === tag
                      ? "scale-105 border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                      : "border-border/60 bg-card/60 text-muted-foreground hover:scale-105 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground active:scale-95"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Project cards - Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {filtered.map((p, idx) => (
            <ScrollReveal key={p.name} delay={idx * 100} direction="up">
              <TiltCard
                onClick={() => setOpenProject(projects.indexOf(p))}
                keyboardInteractive={false}
                className="card-interactive tap-highlight-none group relative cursor-pointer overflow-hidden rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-card hover:shadow-2xl hover:shadow-primary/15 active:scale-[0.99] sm:rounded-2xl"
              >
                {/* Gradient overlay on hover - smoother */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-all duration-500 group-hover:opacity-10 group-hover:scale-105`}
                />

                {/* Top: Glyph area */}
                <div
                  className={`relative grid h-36 place-items-center bg-gradient-to-br ${p.accent} transition-all duration-500 group-hover:brightness-110 sm:h-44`}
                >
                  <span className="font-mono text-6xl font-bold text-primary/60 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/80 group-hover:animate-wiggle">
                    {p.glyph}
                  </span>
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-background/90">
                    <Sparkles className="h-3 w-3 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 rounded-md border border-border/60 bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur transition-all duration-300 group-hover:border-primary/40 group-hover:bg-background/90 group-hover:text-foreground">
                    {t("project")}
                  </div>
                </div>

                {/* Bottom: Content */}
                <div className="flex flex-1 flex-col p-5 transition-all duration-300 group-hover:translate-y-[-2px] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-mono text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-lg">
                      {p.name}
                    </h3>
                    <div className="flex flex-col items-end gap-2">
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-primary" />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenProject(projects.indexOf(p));
                        }}
                        aria-label={`${t("openProjectDetails")}: ${p.name}`}
                        className="touch-target rounded-full border border-border/60 bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {t("viewCaseStudy")}
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
                    {p.blurb}
                  </p>

                  <div className="mt-5 flex flex-col gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 font-mono text-[11px] text-accent-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="touch-target tap-highlight-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-border/50 bg-background/50 px-3 py-2 font-mono text-xs text-muted-foreground transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-foreground active:scale-95"
                      >
                        <Github className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />{" "}
                        {t("code")}
                      </a>
                      {p.demoUrl === "#" ? (
                        <span className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-border/40 bg-muted/30 px-3 py-2 font-mono text-xs text-muted-foreground/70">
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />{" "}
                          {t("demoComingSoon")}
                        </span>
                      ) : (
                        <a
                          href={p.demoUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="touch-target tap-highlight-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-border/50 bg-background/50 px-3 py-2 font-mono text-xs text-muted-foreground transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-foreground active:scale-95"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />{" "}
                          {t("demo")}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={openProject !== null} onOpenChange={(open) => !open && setOpenProject(null)}>
        <DialogContent className="gap-0 overflow-y-auto p-0 sm:max-w-2xl sm:rounded-2xl">
          {openProject !== null && (
            <>
              <div
                className={`relative grid h-40 place-items-center bg-gradient-to-br ${projects[openProject].accent} sm:h-56`}
              >
                <span className="font-mono text-6xl font-bold text-primary/60 sm:text-7xl">
                  {projects[openProject].glyph}
                </span>
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 backdrop-blur-sm sm:left-6 sm:top-6">
                  <Sparkles className="h-3 w-3 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    0{openProject + 1}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-10">
                <DialogHeader className="pr-12 text-left sm:pr-0">
                  <DialogTitle className="font-mono text-xl font-semibold tracking-tight sm:text-2xl">
                    <span className="block font-mono text-xs uppercase tracking-widest text-primary">
                      {t("projectDetails")}
                    </span>
                    <span className="mt-2 block">{projects[openProject].name}</span>
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Project details for {projects[openProject].name}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-5 space-y-5 sm:mt-6">
                  <p className="text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-relaxed">
                    {projects[openProject].description}
                  </p>
                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 sm:rounded-xl sm:p-5">
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">
                      {t("keyLearnings")}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {projects[openProject].learnings.map((l) => (
                        <li
                          key={l}
                          className="flex items-start gap-3 text-sm leading-6 text-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mobile-scroll-row mobile-fade-mask flex flex-nowrap gap-2 sm:flex-wrap">
                    {projects[openProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="mobile-snap-card shrink-0 rounded-lg border border-border/60 bg-background/50 px-3 py-1.5 font-mono text-[11px] text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mobile-sticky-actions flex flex-col gap-3 sm:m-0 sm:flex-row sm:items-center sm:justify-between sm:border-t sm:bg-transparent sm:p-0 sm:pt-5 sm:backdrop-blur-none">
                    <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:flex sm:items-center">
                      <a
                        href={projects[openProject].githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="touch-target tap-highlight-none inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background px-4 py-3 font-mono text-xs text-foreground transition-colors hover:bg-accent active:scale-95 sm:rounded-lg sm:py-2.5"
                      >
                        <Github className="h-4 w-4" /> {t("viewCode")}
                      </a>
                      {projects[openProject].demoUrl === "#" ? (
                        <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-border bg-muted/40 px-4 py-3 font-mono text-xs text-muted-foreground sm:rounded-lg sm:py-2.5">
                          <ArrowUpRight className="h-4 w-4" /> {t("demoComingSoon")}
                        </span>
                      ) : (
                        <a
                          href={projects[openProject].demoUrl}
                          className="touch-target tap-highlight-none inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 font-mono text-xs font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-95 sm:rounded-lg sm:py-2.5"
                        >
                          <ArrowUpRight className="h-4 w-4" /> {t("liveDemo")}
                        </a>
                      )}
                    </div>
                    {/* ESC hint */}
                    <span className="hidden items-center gap-1.5 font-mono text-[10px] text-muted-foreground/60 sm:flex">
                      <kbd className="rounded border border-border/60 bg-muted/50 px-1.5 py-0.5 text-[10px]">
                        ESC
                      </kbd>
                      {t("escToClose")}
                    </span>
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
