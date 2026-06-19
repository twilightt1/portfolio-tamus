import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="touch-target tap-highlight-none fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-50 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all animate-fade-in hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl active:scale-95 sm:bottom-8 sm:right-8 sm:h-11 sm:w-11 sm:rounded-full"
      aria-label={t("backToTop")}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
