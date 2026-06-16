import { Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative border-t border-border/60 bg-muted/30">
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-none px-6 py-12 sm:px-10 sm:py-16 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_auto]">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold tracking-tight text-foreground">
              <span className="inline-block rounded-md bg-primary/10 px-1.5 py-0.5 text-primary">
                &gt;_
              </span>
              <span>tamus.pham</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              {t('footerDescription')}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t('navigate')}
            </p>
            <nav className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('aboutLabel')}
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('projectsLabel')}
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('skillsLabel')}
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('contactLabel')}
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t('connectLabel')}
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:phamvantam03.tk@gmail.com"
                className="group grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/50 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-md"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
              {/* TODO: Replace with your actual GitHub profile URL */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="group grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/50 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-md"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
              {/* TODO: Replace with your actual LinkedIn profile URL */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="group grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/50 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tamus Pham — {t('builtWithCare')}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {t('backToTop')}
            <svg
              className="h-3 w-3 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
