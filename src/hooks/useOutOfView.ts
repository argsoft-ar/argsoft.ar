import { useEffect, useState } from "react";

// true cuando el elemento con ese id ya no está en el viewport
export function useOutOfView(targetId: string): boolean {
  const [outOfView, setOutOfView] = useState(false);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setOutOfView(!entry.isIntersecting);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetId]);

  return outOfView;
}
