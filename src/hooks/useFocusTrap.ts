import { useEffect, useRef } from "react";

/**
 * Hook to trap focus within a container element
 * @param isOpen - Whether the trap is active
 * @param returnFocusTo - Element to return focus to when trap closes
 */
export function useFocusTrap(isOpen: boolean, returnFocusTo?: HTMLElement | null) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element when trap opens
    firstElement?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Close menu on Escape
        returnFocusTo?.focus();
        return;
      }

      if (e.key !== "Tab") return;

      // Trap focus within container
      if (e.shiftKey) {
        // Shift + Tab: if on first element, wrap to last
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab: if on last element, wrap to first
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, returnFocusTo]);

  return containerRef;
}
