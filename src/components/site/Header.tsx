import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Download, Mail, Menu, X } from "lucide-react";
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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t("skipToContent")}
      </a>
      <header
        className={`relative sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border/60 bg-background/80 shadow-lg shadow-foreground/[0.04] backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
            : "border-b border-transparent bg-background/0"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-none items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-32">
          <Link
            to="/"
            className="group flex items-center gap-1.5 rounded-lg font-mono text-sm font-semibold tracking-tight text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_oklch(from_var(--primary)_l_c_h_/_0.3)] focus-visible:outline-offset-4"
            onClick={() => setOpen(false)}
          >
            <span className="inline-block rounded-md bg-primary/10 px-1.5 py-0.5 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_12px_oklch(from_var(--primary)_l_c_h_/_0.2)]">
              &gt;_
            </span>
            <span className="hidden sm:inline">tamus.pham</span>
            <span className="animate-pulse text-primary">_</span>
          </Link>

          <div className="flex items-center gap-2">
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
              className="touch-target inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/70 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-accent focus-visible:outline-offset-4 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-primary/40 transition-[width] duration-100 shadow-[0_0_8px_oklch(from_var(--primary)_l_c_h_/_0.4)]"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Mobile nav — slide-down animation */}
        <div
          id="mobile-navigation"
          ref={mobileNavRef}
          role="dialog"
          aria-label="Mobile navigation"
          aria-hidden={!open}
          className={`overflow-hidden border-border/60 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[620px] border-t opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-none flex-col gap-2 px-6 py-4 sm:px-10 lg:px-20 xl:px-32">
            {links.map((l, idx) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={activeSection === l.id ? "page" : undefined}
                className={`touch-target flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-x-1 active:translate-x-0 ${
                  activeSection === l.id
                    ? "border border-primary/20 bg-primary/10 text-primary shadow-sm shadow-primary/10"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span>{l.label}</span>
                {activeSection === l.id && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                )}
              </a>
            ))}

            <div className="mt-3 grid grid-cols-1 gap-2 border-t border-border/60 pt-4 sm:grid-cols-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="touch-target inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                {t("getInTouch")}
              </a>
              <a
                href="/Tamus_AI_Engineer_CV.pdf"
                download
                onClick={() => setOpen(false)}
                className="touch-target inline-flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                {t("downloadCV")}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
