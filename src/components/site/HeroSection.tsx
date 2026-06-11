import { ArrowRight, FileText, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      {/* Grid background */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute top-60 -left-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      {/* Decorative spinning ring */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
        <div className="animate-spin-slow h-[500px] w-[500px] rounded-full border border-dashed border-primary/10" />
      </div>

      <div className="relative mx-auto max-w-none px-6 pt-24 pb-20 sm:px-10 sm:pt-32 sm:pb-28 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: Text */}
          <div>
            <div className="animate-fade-in-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {t('openToInternships')}
              </p>
            </div>

            <h1 className="animate-fade-in-up delay-100 mt-8 font-mono text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t('heroGreeting')}{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                {t('heroName')}
              </span>
              .
              <br />
              <span className="text-muted-foreground">
                {t('heroBuild')}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-foreground">{t('heroMLSystems')}</span>
                  <span className="absolute -bottom-1 left-0 h-3 w-full bg-gradient-to-r from-primary/20 to-primary/5 -skew-x-6 rounded-sm" />
                </span>
                <br />
                {t('heroThatLearn')}
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200 mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('heroDescription')}
            </p>

            <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <span className="relative z-10">{t('viewProjects')}</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-accent/50 hover:shadow-md"
              >
                <Mail className="h-4 w-4" /> {t('getInTouch')}
              </a>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-accent/50 hover:shadow-md"
              >
                <FileText className="h-4 w-4" /> {t('viewCV')}
              </a>
            </div>
          </div>

          {/* Right: Animated Code Card */}
          <div className="animate-slide-in-right delay-400 hidden lg:block">
            <div className="animate-float relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-accent/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/95 shadow-2xl backdrop-blur-xl">
                {/* Window chrome */}
                <div className="flex items-center gap-2 border-b border-border/60 bg-muted/30 px-5 py-3.5">
                  <span className="h-3 w-3 rounded-full bg-red-400 shadow-sm shadow-red-400/50" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400/50" />
                  <span className="h-3 w-3 rounded-full bg-green-400 shadow-sm shadow-green-400/50" />
                  <span className="ml-4 font-mono text-[11px] text-muted-foreground">
                    alex.py
                  </span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                  </div>
                </div>
                {/* Line numbers + Code content */}
                <div className="flex p-0">
                  <div className="border-r border-border/30 px-3 py-5 text-right font-mono text-[11px] leading-[2.1] text-muted-foreground/40 select-none">
                    <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p>
                  </div>
                  <div className="p-5 font-mono text-[13px] leading-[2.1]">
                    <p className="animate-fade-in delay-500">
                      <span className="text-primary/70">class</span>{" "}
                      <span className="text-foreground">Engineer</span>
                      <span className="text-muted-foreground">:</span>
                    </p>
                    <p className="animate-fade-in delay-700 pl-4">
                      <span className="text-primary/70">def</span>{" "}
                      <span className="text-foreground">__init__</span>
                      <span className="text-muted-foreground">(self):</span>
                    </p>
                    <p className="animate-fade-in delay-700 pl-8">
                      <span className="text-primary/70">self</span>
                      <span className="text-muted-foreground">.</span>
                      <span className="text-foreground">focus</span>{" "}
                      <span className="text-muted-foreground">=</span>{" "}
                      <span className="text-primary/80">"ML/AI"</span>
                    </p>
                    <p className="animate-fade-in delay-700 pl-8">
                      <span className="text-primary/70">self</span>
                      <span className="text-muted-foreground">.</span>
                      <span className="text-foreground">stack</span>{" "}
                      <span className="text-muted-foreground">=</span>{" "}
                      <span className="text-muted-foreground">[</span>
                      <span className="text-primary/80">"Python"</span>
                      <span className="text-muted-foreground">,</span>{" "}
                      <span className="text-primary/80">"PyTorch"</span>
                      <span className="text-muted-foreground">]</span>
                    </p>
                    <p className="animate-fade-in delay-700 pl-8">
                      <span className="text-primary/70">self</span>
                      <span className="text-muted-foreground">.</span>
                      <span className="text-foreground">status</span>{" "}
                      <span className="text-muted-foreground">=</span>{" "}
                      <span className="text-primary/80">"seeking_intern"</span>
                    </p>
                    <p className="animate-fade-in delay-700" />
                    <p className="animate-fade-in delay-700 pl-4">
                      <span className="text-primary/70">def</span>{" "}
                      <span className="text-foreground">build</span>
                      <span className="text-muted-foreground">(self, idea):</span>
                    </p>
                    <p className="animate-fade-in delay-700 pl-8">
                      <span className="text-primary/70">return</span>{" "}
                      <span className="text-foreground">self</span>
                      <span className="text-muted-foreground">.</span>
                      <span className="text-foreground">ship</span>
                      <span className="text-muted-foreground">(idea)</span>
                      <span className="ml-1 inline-block h-[14px] w-[2px] animate-pulse bg-primary" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in-up delay-500 mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: t('focus'), v: t('mlAI') },
            { k: t('stack'), v: t('pythonPyTorch') },
            { k: t('projects'), v: t('shipped') },
            { k: t('status'), v: t('seekingIntern') },
          ].map((item, idx) => (
            <div
              key={item.k}
              className="gradient-border group relative rounded-xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                {item.k}
              </p>
              <p className="mt-1.5 font-mono text-sm font-semibold text-foreground">
                {item.v}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest transition-colors group-hover:text-primary">
              {t('scroll')}
            </span>
            <div className="relative h-10 w-5">
              <div className="absolute inset-0 rounded-full border-2 border-border/60 transition-colors group-hover:border-primary/40" />
              <div className="absolute left-1/2 top-1.5 h-2 w-1 -translate-x-1/2 animate-bounce rounded-full bg-primary" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
