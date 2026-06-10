import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Chen — ML/AI Engineer Intern" },
      {
        name: "description",
        content:
          "ML/AI engineer in training, building intelligent systems. Looking for a summer internship.",
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

function Index() {
  return (
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
        Computer science student focused on machine learning and applied AI. I love
        turning research papers into shipping code — from sentiment models to small
        reinforcement learning agents.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          View projects <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          <Mail className="h-4 w-4" /> Get in touch
        </Link>
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
  );
}
