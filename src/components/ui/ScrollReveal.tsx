import { useRef, useEffect, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  className?: string;
  threshold?: number;
  /** If true, children inside reveal one by one with staggered delay */
  stagger?: number;
  /** Only reveal once (don't re-trigger on scroll back). Default: true */
  once?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.12,
  stagger = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const transforms: Record<string, string> = {
    up: "translate-y-8 sm:translate-y-10",
    down: "-translate-y-8 sm:-translate-y-10",
    left: "translate-y-8 sm:translate-y-0 sm:translate-x-10",
    right: "translate-y-8 sm:translate-y-0 sm:-translate-x-10",
    fade: "scale-[0.98] sm:scale-[0.96]",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-expo will-change-[opacity,transform] ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${transforms[direction]}`
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {stagger > 0 && typeof children === "object"
        ? // Stagger children
          (children as ReactNode[])?.map?.((child, i) => (
            <div
              key={i}
              className="transition-all duration-700 ease-expo"
              style={{
                transitionDelay: isVisible ? `${delay + i * stagger}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {child}
            </div>
          )) ?? children
        : children}
    </div>
  );
}
