import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>("");

  // Stabilize: use a stringified key so the effect only re-runs
  // when the actual IDs change, not when a new array reference is passed
  const idsKey = sectionIds.join(",");

  useEffect(() => {
    const ids = idsKey.split(",").filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [idsKey, offset]);

  return activeId;
}
