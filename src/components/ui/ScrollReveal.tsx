import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  className?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const baseStyles = "transition-all duration-700 ease-out";

  const hiddenStyles: Record<string, string> = {
    up: "opacity-0 translate-y-8",
    down: "opacity-0 -translate-y-8",
    left: "opacity-0 translate-x-8",
    right: "opacity-0 -translate-x-8",
    fade: "opacity-0 scale-95",
  };

  const visibleStyles = "opacity-100 translate-x-0 translate-y-0 scale-100";

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${isVisible ? visibleStyles : hiddenStyles[direction]} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        position: "relative",
      }}
    >
      {/* Shimmer overlay before reveal */}
      {!isVisible && (
        <div className="absolute inset-0 -z-10 animate-pulse rounded-lg bg-gradient-to-r from-muted via-muted/50 to-muted" />
      )}
      {children}
    </div>
  );
}
