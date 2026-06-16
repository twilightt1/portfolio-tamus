import { useEffect, useState, useCallback } from "react";

/**
 * Custom cursor with subtle glow effect that enhances on interactive elements.
 * Adapts to light/dark theme. Only activates on non-touch devices.
 */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const updateTheme = useCallback(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Initial theme check
    updateTheme();

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.getAttribute("data-cursor-hover") !== null;

      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [updateTheme]);

  // Don't render on touch devices or when not visible
  if (!isVisible) return null;

  // Theme-dependent styles
  const blendMode = isDark ? "mix-blend-screen" : "mix-blend-multiply";
  const outerGlow = isDark
    ? isHovering
      ? "h-12 w-12 bg-primary/20 blur-xl"
      : "h-8 w-8 bg-primary/10 blur-lg"
    : isHovering
      ? "h-12 w-12 bg-primary/25 blur-xl"
      : "h-8 w-8 bg-primary/15 blur-lg";
  const innerDot = isDark
    ? isHovering
      ? "h-2 w-2 opacity-80 bg-primary"
      : "h-1 w-1 opacity-60 bg-primary"
    : isHovering
      ? "h-2.5 w-2.5 opacity-70 bg-primary"
      : "h-1.5 w-1.5 opacity-50 bg-primary";

  return (
    <>
      {/* Outer glow */}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] ${blendMode}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          transition: "transform 0.15s ease-out, width 0.3s ease, height 0.3s ease",
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${outerGlow}`}
        />
      </div>

      {/* Inner dot */}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] ${blendMode}`}
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
          transition: "transform 0.08s ease-out",
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${innerDot}`}
        />
      </div>
    </>
  );
}
