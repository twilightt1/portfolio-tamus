import { useEffect, useRef } from "react";

interface MatrixRainProps {
  isActive: boolean;
  onClose: () => void;
}

/**
 * Matrix-style falling characters overlay
 * Triggered by Konami Code easter egg
 */
export function MatrixRain({ isActive, onClose }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    // Auto-close after 8 seconds
    const timeout = setTimeout(onClose, 8000);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timeout);
    };
  }, [isActive, onClose]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-green-400 font-mono text-sm animate-pulse">
          Click anywhere or wait 8s to exit
        </p>
        <p className="text-green-300/60 font-mono text-xs mt-2">
          🎮 Konami Code Activated!
        </p>
      </div>
    </div>
  );
}
