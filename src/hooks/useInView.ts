import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  /** Stop observing once it has entered the viewport (default true). */
  once?: boolean;
  /** Reveal anyway after this many ms (export / non-scrolling safety net). */
  safetyMs?: number;
}

/**
 * Observe an element's intersection with the viewport. Returns a ref to attach
 * and whether it has entered. Includes a safety timeout so content never stays
 * permanently hidden in contexts where the observer never fires.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  rootMargin = "0px 0px -8% 0px",
  once = true,
  safetyMs = 8000,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );
    io.observe(el);

    const safety = window.setTimeout(() => setInView(true), safetyMs);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [threshold, rootMargin, once, safetyMs]);

  return { ref, inView };
}
