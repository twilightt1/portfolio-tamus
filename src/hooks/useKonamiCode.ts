import { useEffect, useRef } from "react";

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

/**
 * Hook that detects Konami Code input and triggers callback
 * @param onSuccess - Callback fired when Konami Code is entered
 */
export function useKonamiCode(onSuccess: () => void) {
  const sequenceRef = useRef<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Reset sequence after 2 seconds of inactivity
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        sequenceRef.current = [];
      }, 2000);

      // Add current key to sequence
      sequenceRef.current.push(e.code);

      // Keep only last 10 keys
      if (sequenceRef.current.length > KONAMI_CODE.length) {
        sequenceRef.current.shift();
      }

      // Check if sequence matches
      if (
        sequenceRef.current.length === KONAMI_CODE.length &&
        sequenceRef.current.every((key, i) => key === KONAMI_CODE[i])
      ) {
        onSuccess();
        sequenceRef.current = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutRef.current);
    };
  }, [onSuccess]);
}
