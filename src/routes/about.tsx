import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Chen" },
      {
        name: "description",
        content:
          "About Alex Chen — CS student focused on machine learning, with research and side-project experience.",
      },
      { property: "og:title", content: "About — Alex Chen" },
      {
        property: "og:description",
        content: "Background, education, and what I'm working on.",
      },
    ],
  }),
  component: AboutPage,
});

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

function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="about"
        title="Curious by default."
        description="I'm a third-year computer science student who got hooked on ML after my first neural network actually learned something. Now I spend my time reading papers, breaking models, and building small things that try to understand the world."
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
            My interests sit at the intersection of <strong>machine learning</strong>,{" "}
            <strong>systems</strong>, and good developer experience. I care about
            shipping things that work end-to-end, not just notebooks that run once.
          </p>
          <p>
            Outside of class I&apos;m usually tinkering with model fine-tuning,
            contributing to small open-source projects, or writing about what I
            learn. I&apos;m especially excited about retrieval-augmented systems and
            efficient training on a budget.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          // timeline
        </h2>
        <ol className="mt-6 space-y-6 border-l border-border pl-6">
          {timeline.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-background" />
              <p className="font-mono text-xs text-primary">{item.year}</p>
              <p className="mt-1 text-base font-medium text-foreground">
                {item.title}{" "}
                <span className="text-muted-foreground">· {item.org}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
