import { useRef, useCallback, type ReactNode, type MouseEvent, type KeyboardEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  maxTilt?: number;
  ariaLabel?: string;
  keyboardInteractive?: boolean;
}

export function TiltCard({
  children,
  className = "",
  onClick,
  maxTilt = 8,
  ariaLabel,
  keyboardInteractive = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isKeyboardInteractive = Boolean(onClick && keyboardInteractive);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)")
          .matches
      ) {
        return;
      }

      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    },
    [maxTilt],
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!isKeyboardInteractive || e.target !== e.currentTarget) return;

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    },
    [isKeyboardInteractive, onClick],
  );

  return (
    <div
      ref={cardRef}
      className={className}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role={isKeyboardInteractive ? "button" : undefined}
      tabIndex={isKeyboardInteractive ? 0 : undefined}
      aria-label={isKeyboardInteractive ? ariaLabel : undefined}
      style={{ transition: "transform 0.2s ease-out" }}
    >
      {children}
    </div>
  );
}
