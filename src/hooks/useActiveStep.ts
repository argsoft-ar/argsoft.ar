import { useEffect, useState } from "react";

// Devuelve el índice del elemento (por id) que cruza la franja central del viewport.
export function useActiveStep(ids: readonly string[]): number {
  const [activeIndex, setActiveIndex] = useState(0);
  const idsKey = ids.join("|");

  useEffect(() => {
    const idList = idsKey.split("|");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = idList.indexOf(entry.target.id);
          if (index !== -1) setActiveIndex(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    idList.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [idsKey]);

  return activeIndex;
}
