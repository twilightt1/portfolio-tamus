import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useI18n();
  const activeSection = useScrollSpy(["about", "projects", "skills", "contact"]);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useFocusTrap(open, menuButtonRef.current);

  const links = [
    { href: "#about", label: t("aboutLabel"), id: "about" },
    { href: "#projects", label: t("projectsLabel"), id: "projects" },
    { href: "#skills", label: t("skillsLabel"), id: "skills" },
    { href: "#contact", label: t("contactLabel"), id: "contact" },
  ] as const;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t("skipToContent")}
      </a>
      <header
        className={`relative sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled || open
            ? "border-b border-border/60 bg-background/85 shadow-lg shadow-foreground/[0.04] backdrop-blur-xl supports-[backdrop-filter]:bg-background/75"
            : "border-b border-transparent bg-background/0"
        }`}
      >
        <div className="relative z-50 mx-auto flex h-14 max-w-none items-center justify-between px-4 sm:h-16 sm:px-10 lg:px-20 xl:px-32">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-1.5 rounded-lg font-mono text-sm font-semibold tracking-tight text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_oklch(from_var(--primary)_l_c_h_/_0.3)] focus-visible:outline-offset-4"
            onClick={() => setOpen(false)}
          >
            <span className="inline-block rounded-md bg-primary/10 px-1.5 py-0.5 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_12px_oklch(from_var(--primary)_l_c_h_/_0.2)]">
              &gt;_
            </span>
            <span className="hidden max-w-[8rem] truncate min-[390px]:inline sm:max-w-none">
              tamus.pham
            </span>
            <span className="animate-pulse text-primary">_</span>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={activeSection === l.id ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm transition-all duration-300 after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-violet after:transition-all after:duration-300 after:ease-spring ${
                    activeSection === l.id
                      ? "bg-primary/10 text-primary after:w-3/5"
                      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground hover:after:w-3/5"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <LanguageSwitcher />
            <ThemeToggle />

            <button
              ref={menuButtonRef}
              aria-label={open ? t("closeMenu") : t("openMenu")}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="touch-target tap-highlight-none inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/80 shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-accent active:scale-95 focus-visible:outline-offset-4 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-primary/40 transition-[width] duration-100 shadow-[0_0_8px_oklch(from_var(--primary)_l_c_h_/_0.4)]"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Mobile nav — floating sheet */}
        {open && (
          <button
            type="button"
            aria-label={t("closeMenu")}
            className="fixed inset-0 top-14 z-30 bg-background/55 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        <div
          id="mobile-navigation"
          ref={mobileNavRef}
          role={open ? "dialog" : undefined}
          aria-modal={open ? "true" : undefined}
          aria-label="Mobile navigation"
          aria-hidden={!open}
          className={`fixed inset-x-3 top-[4.25rem] z-40 max-h-[calc(100dvh-5rem)] max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-3xl border border-border/70 bg-background/95 shadow-2xl shadow-foreground/10 backdrop-blur-2xl transition-all duration-300 ease-expo md:hidden ${
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-3 scale-[0.98] opacity-0"
          }`}
          style={{ visibility: open ? "visible" : "hidden" }}
        >
          <div className="safe-area-bottom flex max-h-[calc(100dvh-5rem)] flex-col gap-2 overflow-y-auto p-3">
            <div className="mb-1 flex items-center justify-between rounded-2xl border border-border/50 bg-card/70 px-4 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {t("navigate")}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_oklch(from_var(--primary)_l_c_h_/_0.6)]" />
            </div>

            {links.map((l, idx) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={activeSection === l.id ? "page" : undefined}
                className={`touch-target tap-highlight-none flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-all duration-300 active:scale-[0.98] ${
                  activeSection === l.id
                    ? "border border-primary/25 bg-primary/10 text-primary shadow-sm shadow-primary/10"
                    : "border border-transparent text-foreground hover:bg-accent/60"
                }`}
                style={{ transitionDelay: open ? `${idx * 35}ms` : "0ms" }}
              >
                <span>{l.label}</span>
                <span
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeSection === l.id
                      ? "scale-100 bg-primary"
                      : "scale-75 bg-muted-foreground/25"
                  }`}
                  aria-hidden="true"
                />
              </a>
            ))}

            <div className="mt-2 border-t border-border/60 pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="touch-target tap-highlight-none inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                {t("getInTouch")}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
