import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/site/HeroSection";
import { AboutSection } from "../components/site/AboutSection";
import { ProjectsSection } from "../components/site/ProjectsSection";
import { SkillsSection } from "../components/site/SkillsSection";
import { ContactSection } from "../components/site/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tamus Pham — AI/ML Engineer Intern" },
      {
        name: "description",
        content:
          "Portfolio of Tamus Pham — AI/ML engineer in training. Projects, skills, and contact info.",
      },
      { property: "og:title", content: "Tamus Pham — AI/ML Engineer Intern" },
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
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
