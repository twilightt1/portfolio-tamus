import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/site/HeroSection";
import { AboutSection } from "../components/site/AboutSection";
import { ProjectsSection } from "../components/site/ProjectsSection";
import { SkillsSection } from "../components/site/SkillsSection";
import { ContactSection } from "../components/site/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tamus Pham — AI/ML Engineer Intern | LLM & RAG Systems" },
      {
        name: "description",
        content:
          "Computer Science student building LLM-based, retrieval-augmented, and applied NLP systems with Python, FastAPI, PyTorch, pgvector, LangGraph, and PostgreSQL.",
      },
      { property: "og:title", content: "Tamus Pham — AI/ML Engineer Intern | LLM & RAG Systems" },
      {
        property: "og:description",
        content:
          "CV-aligned portfolio featuring AI Resume Match & Optimizer, Personal AI Second Brain, ML/DL skills, and contact details.",
      },
      {
        property: "og:image",
        content: "https://tamus.dev/og-image.png",
      },
      {
        property: "og:url",
        content: "https://tamus.dev",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Tamus Pham — AI/ML Engineer Intern | LLM & RAG Systems",
      },
      {
        name: "twitter:description",
        content:
          "Computer Science student focused on ML, deep learning, applied NLP, LLM systems, RAG, and evaluation workflows.",
      },
      {
        name: "twitter:image",
        content: "https://tamus.dev/og-image.png",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
