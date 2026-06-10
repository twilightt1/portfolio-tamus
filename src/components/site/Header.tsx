import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { to: "/resume", label: "Resume" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="text-primary">&gt;</span> alex.chen
          <span className="animate-pulse text-primary">_</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) =>
              "to" in l ? (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          <ThemeToggle />

          <button
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-2 sm:px-6">
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
                  className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
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
