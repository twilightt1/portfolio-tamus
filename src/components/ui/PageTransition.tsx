import { useEffect, useState, type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper component that adds a subtle fade-in + slide-up animation
 * when a page/route mounts. Uses CSS animation for performance.
 */
export function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
