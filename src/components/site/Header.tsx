import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
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
    { href: "#about", label: t('aboutLabel'), id: "about" },
    { href: "#projects", label: t('projectsLabel'), id: "projects" },
    { href: "#skills", label: t('skillsLabel'), id: "skills" },
    { href: "#contact", label: t('contactLabel'), id: "contact" },
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
    <header
      className={`relative sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-lg shadow-foreground/[0.04] backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-none items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-32">
        <Link
          to="/"
          className="group flex items-center gap-1.5 font-mono text-sm font-semibold tracking-tight text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_oklch(from_var(--primary)_l_c_h_/_0.3)]"
          onClick={() => setOpen(false)}
        >
          <span className="inline-block rounded-md bg-primary/10 px-1.5 py-0.5 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_12px_oklch(from_var(--primary)_l_c_h_/_0.2)]">
            &gt;_
          </span>
          <span className="hidden sm:inline">tamus.pham</span>
          <span className="animate-pulse text-primary">_</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) =>
              "to" in l ? (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-0.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-primary/60 after:transition-all after:duration-300 after:ease-spring hover:after:w-4/5"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-md px-3 py-2 text-sm transition-colors after:absolute after:bottom-0.5 after:left-1/2 after:h-[2px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-primary/60 after:transition-all after:duration-300 after:ease-spring ${
                    "id" in l && activeSection === l.id
                      ? "text-primary after:w-4/5"
                      : "text-muted-foreground hover:text-foreground hover:after:w-4/5"
                  }`}
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          <LanguageSwitcher />
          <ThemeToggle />

          <button
            ref={menuButtonRef}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background/50 backdrop-blur-sm transition-colors hover:bg-accent md:hidden"
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
        ref={mobileNavRef}
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`overflow-hidden border-border/60 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-none flex-col gap-1 px-6 py-3 sm:px-10 lg:px-20 xl:px-32">
          {links.map((l, idx) =>
            "to" in l ? (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-x-1 hover:bg-accent/50 hover:text-foreground active:translate-x-0"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-x-1 active:translate-x-0 ${
                  "id" in l && activeSection === l.id
                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {l.label}
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
}
