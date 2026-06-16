import { ArrowRight, FileText, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Typewriter } from "@/components/ui/Typewriter";
import { useRef, useState, useEffect } from "react";

// Refactored single Typewriter wrapper for cleaner code
const CodeLine = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => (
  <span className={className}>
    <Typewriter text={text} delay={delay} />
  </span>
);

export function HeroSection() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-noise"
    >
      {/* === ORBS — Bigger, drift animation, violet accent === */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main primary orb — top right */}
        <div
          className="absolute -top-40 right-[-10%] h-[700px] w-[700px] rounded-full bg-primary/6 blur-[140px]"
          style={{ animation: "orb-drift 18s ease-in-out infinite" }}
        />
        {/* Secondary orb — bottom left with violet */}
        <div
          className="absolute -bottom-32 left-[-5%] h-[550px] w-[550px] rounded-full bg-violet/4 blur-[110px]"
          style={{ animation: "orb-drift 22s ease-in-out infinite reverse" }}
        />
        {/* Tertiary glow — center-right */}
        <div
          className="absolute bottom-1/4 right-[15%] h-[400px] w-[400px] rounded-full bg-accent/12 blur-[90px]"
          style={{ animation: "orb-drift 15s ease-in-out infinite" }}
        />
      </div>

      {/* Grid background — stronger opacity */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-55" />

      {/* Content container */}
      <div className="relative mx-auto max-w-none px-6 pt-28 pb-24 sm:px-10 sm:pt-36 sm:pb-32 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: Text content */}
          <div className="w-full">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20">
              <span className="pulse-ring relative flex h-2.5 w-2.5 shrink-0 rounded-full">
                <span className="relative inline-flex h-full w-full animate-ping-fade rounded-full bg-primary" />
              </span>
              {t("openToInternships")}
            </div>

            {/* H1 Title */}
            <h1 className="animate-fade-in-up delay-100 mt-9 font-mono text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("heroGreeting")}{" "}
              <span className="inline-block align-middle text-gradient">
                {t("heroName")}.
              </span>
              <br />
              <span className="text-muted-foreground">{t("heroBuild")}{" "}</span>
              <span className="relative inline-block">
                <span className="relative z-10 text-foreground">
                  {t("heroMLSystems")}
                </span>
                <span className="absolute -bottom-1 left-0 h-4 w-full bg-gradient-to-r from-primary/20 to-primary/5 -skew-x-6 rounded-sm" />
              </span>
              <br />
              {t("heroThatLearn")}
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up delay-200 mt-10 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("heroDescription")}
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-300 mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 active:translate-y-0"
              >
                <span className="relative z-10">
                  {t("viewProjects")}
                </span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                {/* Ripple effect */}
                <span className="absolute inset-0 scale-0 rounded-lg bg-white/20 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />
                {/* Shimmer sweep on hover */}
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                  style={{ animation: "shimmer 2s ease-in-out infinite" }}
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:shadow-md active:translate-y-0"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" /> {t("getInTouch")}
              </a>

              <a
                href="/resume"
                className="group inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:shadow-md active:translate-y-0"
              >
                <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" /> {t("viewCV")}
              </a>
            </div>
          </div>

          {/* Right: Animated Code Card */}
          <div className="animate-slide-in-right delay-400 hidden lg:block">
            <div className="float relative group">
              {/* Background glow behind card - enhanced */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl transition-all duration-500 group-hover:from-primary/30 group-hover:via-primary/10" />
              {/* Card with spotlight effect */}
              <div className="spotlight-card relative overflow-hidden rounded-2xl border border-border/60 bg-card/95 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-3xl">
                {/* Window chrome — macOS style */}
                <div className="flex items-center gap-2 border-b border-border/60 bg-muted/30 px-5 py-3.5 transition-colors duration-300 group-hover:bg-muted/50">
                  <span className="h-3 w-3 rounded-full bg-red-400 shadow-sm shadow-red-400/50 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400/50 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400 shadow-sm shadow-green-400/50 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-400/70" />
                  <span className="ml-4 font-mono text-[11px] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    tamus.py
                  </span>
                  {/* LIVE indicator */}
                  <div className="ml-auto flex items-center gap-2">
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-emerald-500 animate-pulse-glow">
                      Live
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/30 transition-colors duration-300 group-hover:bg-emerald-500/50" />
                  </div>
                </div>

                {/* Code content */}
                <div className="relative flex p-0">
                  {/* Line numbers */}
                  <div className="border-r border-border/30 px-3 py-5 text-right font-mono text-[11px] leading-[2.2] text-muted-foreground/40 select-none transition-colors duration-300 group-hover:text-muted-foreground/60">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                  </div>

                  {/* Syntax-highlighted code */}
                  <div className="p-5 font-mono text-[13px] leading-[2.2]">
                    <p>
                      <CodeLine text="class" delay={500} className="text-primary/70 transition-colors duration-300 group-hover:text-accent-foreground" />{" "}
                      <CodeLine text="Engineer" delay={700} className="text-foreground transition-colors duration-300 group-hover:text-primary" />
                      <CodeLine text=":" delay={900} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                    </p>
                    <p className="pl-4">
                      <CodeLine text="def" delay={1100} className="text-primary/70 transition-colors duration-300 group-hover:text-accent-foreground" />{" "}
                      <CodeLine text="__init__" delay={1300} className="text-foreground transition-colors duration-300 group-hover:text-primary" />
                      <CodeLine text="(self):" delay={1500} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                    </p>
                    <p className="pl-8">
                      <CodeLine text="self" delay={1800} className="text-primary/70 transition-colors duration-300 group-hover:text-accent-foreground" />
                      {"."}
                      <CodeLine text="focus" delay={2000} className="text-foreground transition-colors duration-300 group-hover:text-primary" />
                      {" "}
                      <CodeLine text="=" delay={2200} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                      {" "}
                      <CodeLine text='"AI/ML"' delay={2300} className="text-primary/60 transition-colors duration-300 group-hover:text-primary/80" />
                    </p>
                    <p className="pl-8">
                      <CodeLine text="self" delay={2700} className="text-primary/70 transition-colors duration-300 group-hover:text-accent-foreground" />
                      {"."}
                      <CodeLine text="stack" delay={2900} className="text-foreground transition-colors duration-300 group-hover:text-primary" />
                      {" "}
                      <CodeLine text="=" delay={3100} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                      {" "}
                      <CodeLine text="[" delay={3200} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                      <CodeLine text='"Python"' delay={3250} className="text-primary/60 transition-colors duration-300 group-hover:text-primary/80" />
                      <CodeLine text="," delay={3500} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                      {" "}
                      <CodeLine text='"PyTorch"' delay={3550} className="text-primary/60 transition-colors duration-300 group-hover:text-primary/80" />
                      <CodeLine text="]" delay={3800} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                    </p>
                    <p className="pl-8">
                      <CodeLine text="self" delay={4100} className="text-primary/70 transition-colors duration-300 group-hover:text-accent-foreground" />
                      {"."}
                      <CodeLine text="status" delay={4300} className="text-foreground transition-colors duration-300 group-hover:text-primary" />
                      {" "}
                      <CodeLine text="=" delay={4500} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                      {" "}
                      <CodeLine text='"seeking_intern"' delay={4600} className="text-primary/60 transition-colors duration-300 group-hover:text-primary/80" />
                    </p>
                    <p />
                    <p className="pl-4">
                      <CodeLine text="def" delay={5200} className="text-primary/70 transition-colors duration-300 group-hover:text-accent-foreground" />{" "}
                      <CodeLine text="build" delay={5400} className="text-foreground transition-colors duration-300 group-hover:text-primary" />
                      <CodeLine text="(self, idea):" delay={5600} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                    </p>
                    <p className="pl-8">
                      <CodeLine text="return" delay={6100} className="text-primary/70 transition-colors duration-300 group-hover:text-accent-foreground" />{" "}
                      <CodeLine text="self" delay={6400} className="text-primary/70 transition-colors duration-300 group-hover:text-accent-foreground" />
                      {"."}
                      <CodeLine text="ship" delay={6600} className="text-foreground transition-colors duration-300 group-hover:text-primary" />
                      <CodeLine text="(idea)" delay={6800} className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80" />
                    </p>
                  </div>

                  {/* Scanline overlay - subtle animation */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, transparent 50%, oklch(from var(--primary) l c h / 0.03) 50%)",
                      backgroundSize: "100% 3px",
                      maskImage:
                        "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
                      maskSize: "100% 100%",
                      opacity: 0.6,
                      transition: "opacity 0.3s ease",
                      zIndex: 10,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in-up delay-500 mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {
            [
              { k: t("focus"), v: t("mlAI"), sub: "Primary focus" },
              { k: t("stack"), v: t("pythonPyTorch"), sub: "Core tools" },
              { k: t("projects"), v: "4 shipped", sub: "Production-ready" },
              { k: t("status"), v: t("seekingIntern"), sub: "Available now" },
            ].map((item, idx) => (
              <div
                key={item.k}
                className="gradient-border group relative rounded-xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/15"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary transition-colors group-hover:text-accent-foreground">
                  {item.k}
                </p>
                <p className="mt-1.5 font-mono text-sm font-semibold text-foreground transition-all group-hover:scale-105 group-hover:text-primary">
                  {item.v}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-muted-foreground/60 group-hover:text-muted-foreground">
                  {item.sub}
                </p>
              </div>
            ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest transition-colors group-hover:text-primary animate-bounce-subtle">
              {t("scroll")}
            </span>
            <div className="relative h-10 w-5 animate-float-subtle">
              <div className="absolute inset-0 rounded-full border-2 border-border/60 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20" />
              <div className="absolute left-1/2 top-1.5 h-2 w-1 -translate-x-1/2 animate-ping-fade rounded-full bg-primary" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
