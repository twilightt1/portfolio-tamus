import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();
  const activeSection = useScrollSpy(["about", "projects", "skills", "contact"]);

  const links = [
    { href: "#about", label: t('aboutLabel'), id: "about" },
    { href: "#projects", label: t('projectsLabel'), id: "projects" },
    { href: "#skills", label: t('skillsLabel'), id: "skills" },
    { href: "#contact", label: t('contactLabel'), id: "contact" },
    { to: "/resume", label: t('resume') },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-lg shadow-black/[0.02] backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-none items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-32">
        <Link
          to="/"
          className="group flex items-center gap-1.5 font-mono text-sm font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="inline-block rounded-md bg-primary/10 px-1.5 py-0.5 text-primary transition-colors group-hover:bg-primary/20">
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
                  className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-0.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all hover:after:w-4/5"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-md px-3 py-2 text-sm transition-colors after:absolute after:bottom-0.5 after:left-1/2 after:h-[2px] after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all ${
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
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background/50 backdrop-blur-sm transition-colors hover:bg-accent md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-none flex-col px-6 py-2 sm:px-10 lg:px-20 xl:px-32">
            {links.map((l) =>
              "to" in l ? (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm transition-colors ${
                    "id" in l && activeSection === l.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
