import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the viewport's focus band, mirroring the
 * design source's active-nav-link IntersectionObserver.
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Set<string>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        // Pick the first section (in document order) crossing the focus band.
        const current = ids.find((id) => visible.has(id));
        if (current) setActive(current);
      },
      // Collapse the root to a thin band ~35% down the viewport. With
      // threshold 0, any part of a section crossing it counts — so a tall
      // section (e.g. Work) stays active for its whole scroll range instead of
      // needing 40% of its own height inside the band, which it never reaches.
      { threshold: 0, rootMargin: "-35% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [ids]);

  return active;
}
