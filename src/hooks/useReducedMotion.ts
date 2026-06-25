import { useEffect, useState } from "react";
import { siteConfig } from "../config";

/**
 * True when motion should be reduced — either forced via config or because the
 * OS `prefers-reduced-motion` setting is on. Re-evaluates if the setting flips.
 */
export function useReducedMotion(): boolean {
  const [osReduce, setOsReduce] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setOsReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return siteConfig.reduceMotion || osReduce;
}
