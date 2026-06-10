import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "../components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Chen" },
      {
        name: "description",
        content:
          "Get in touch with Alex Chen for ML/AI internship opportunities and collaborations.",
      },
      { property: "og:title", content: "Contact — Alex Chen" },
      {
        property: "og:description",
        content: "Email, GitHub, and LinkedIn.",
      },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "alex.chen@example.com";

function ContactPage() {
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
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="contact"
        title="Let's build something."
        description="I'm actively looking for a summer 2026 ML/AI internship. If you think there's a fit — or just want to chat about a paper — I'd love to hear from you."
      />

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
    </section>
  );
}
