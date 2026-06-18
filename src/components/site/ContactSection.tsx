import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const EMAIL = "working@tamus.dev";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="relative border-t border-border/60">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-none px-6 py-20 sm:px-10 sm:py-24 lg:px-20 xl:px-32">
        <div className="mb-12 sm:mb-16">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {t('contact')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t('letsBuildSomething')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {t('contactDescription')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Main contact card */}
          <ScrollReveal delay={300} direction="left">
            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card hover:shadow-2xl hover:shadow-primary/10 sm:p-10">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t('email')}
                </p>
                <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all font-mono text-xl font-semibold text-foreground transition-colors hover:text-primary sm:text-2xl"
                  >
                    {EMAIL}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="group/btn inline-flex shrink-0 items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-5 py-2.5 font-mono text-xs text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-primary">{t('copied')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        {t('copy')}
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                  >
                    <Mail className="relative z-10 h-4 w-4" />
                    <span className="relative z-10">{t('sendEmail')}</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  </a>
                  {/* TODO: Replace with your actual GitHub profile URL */}
                  <a
                    href="https://github.com/twilightt1"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-accent/50 hover:shadow-md"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  {/* TODO: Replace with your actual LinkedIn profile URL */}
                  <a
                    href="https://linkedin.com/in/tamus"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-accent/50 hover:shadow-md"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

          </ScrollReveal>

          {/* Side info cards */}
          <ScrollReveal delay={400} direction="right">
            <div className="flex flex-col gap-4">
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm font-semibold text-foreground">
                      {t('responseTime')}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {t('within24Hours')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm font-semibold text-foreground">
                      {t('openSource')}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {t('activeContributor')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm font-semibold text-foreground">
                      {t('connect')}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {t('letsNetwork')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
