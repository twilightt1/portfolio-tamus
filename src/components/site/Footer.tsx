import { Github, Globe, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative border-t border-border/60 bg-muted/30">
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="safe-area-bottom mx-auto max-w-none px-4 py-10 sm:px-10 sm:py-16 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-[1fr_auto_auto] md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold tracking-tight text-foreground">
              <span className="inline-block rounded-md bg-primary/10 px-1.5 py-0.5 text-primary">
                &gt;_
              </span>
              <span>tamus.pham</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">{t("footerDescription")}</p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t("navigate")}
            </p>
            <nav className="grid grid-cols-2 gap-2 sm:flex sm:flex-col sm:space-y-2">
              <a
                href="#about"
                className="touch-target tap-highlight-none inline-flex items-center rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground sm:min-h-0 sm:px-0 sm:py-0"
              >
                {t("aboutLabel")}
              </a>
              <a
                href="#projects"
                className="touch-target tap-highlight-none inline-flex items-center rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground sm:min-h-0 sm:px-0 sm:py-0"
              >
                {t("projectsLabel")}
              </a>
              <a
                href="#skills"
                className="touch-target tap-highlight-none inline-flex items-center rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground sm:min-h-0 sm:px-0 sm:py-0"
              >
                {t("skillsLabel")}
              </a>
              <a
                href="#contact"
                className="touch-target tap-highlight-none inline-flex items-center rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground sm:min-h-0 sm:px-0 sm:py-0"
              >
                {t("contactLabel")}
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t("connectLabel")}
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:working@tamus.dev"
                className="touch-target tap-highlight-none group grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-background/50 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-md active:scale-95 sm:h-10 sm:w-10 sm:rounded-lg"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
              <a
                href="https://github.com/twilightt1"
                target="_blank"
                rel="noreferrer"
                className="touch-target tap-highlight-none group grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-background/50 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-md active:scale-95 sm:h-10 sm:w-10 sm:rounded-lg"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
              <a
                href="https://tamus.dev"
                target="_blank"
                rel="noreferrer"
                className="touch-target tap-highlight-none group grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-background/50 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-md active:scale-95 sm:h-10 sm:w-10 sm:rounded-lg"
                aria-label="Website"
              >
                <Globe className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-center sm:mt-12 sm:flex-row sm:pt-8 sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tamus Pham — {t("builtWithCare")}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="touch-target tap-highlight-none group inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
          >
            {t("backToTop")}
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
