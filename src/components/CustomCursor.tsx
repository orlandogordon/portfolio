import { useEffect, useRef, type CSSProperties } from "react";
import { siteConfig } from "../config";
import { hexToRgb } from "../lib/color";

const ringBase: CSSProperties = {
  display: "none",
  position: "fixed",
  top: 0,
  left: 0,
  width: 34,
  height: 34,
  border: "1px solid var(--accent)",
  borderRadius: "50%",
  transform: "translate(-50%,-50%)",
  pointerEvents: "none",
  zIndex: 100,
  transition: "width .2s ease, height .2s ease, background-color .2s ease, opacity .25s ease",
  opacity: 0,
};

const dotBase: CSSProperties = {
  display: "none",
  position: "fixed",
  top: 0,
  left: 0,
  width: 5,
  height: 5,
  background: "var(--accent)",
  borderRadius: "50%",
  transform: "translate(-50%,-50%)",
  pointerEvents: "none",
  zIndex: 101,
  opacity: 0,
};

/**
 * Custom cursor: an instant dot plus a smoothing ring that grows + tints over
 * any [data-cursor] element. Active only on fine-pointer devices and when
 * enabled in config; otherwise the native cursor is left untouched.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!siteConfig.customCursor) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const accentRgb = hexToRgb(siteConfig.accent);
    document.documentElement.style.cursor = "none";
    ring.style.display = "block";
    dot.style.display = "block";

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let shown = false;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
      if (!shown) {
        shown = true;
        ring.style.opacity = "1";
        dot.style.opacity = "1";
      }
    };
    const grow = () => {
      ring.style.width = "54px";
      ring.style.height = "54px";
      ring.style.backgroundColor = `rgba(${accentRgb},0.12)`;
    };
    const shrink = () => {
      ring.style.width = "34px";
      ring.style.height = "34px";
      ring.style.backgroundColor = "transparent";
    };
    const over = (e: MouseEvent) => {
      const t = e.target;
      if (t instanceof Element && t.closest("[data-cursor]")) grow();
    };
    const out = (e: MouseEvent) => {
      const t = e.target;
      if (t instanceof Element && t.closest("[data-cursor]")) shrink();
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    const lerp = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(lerp);
    };
    rafId = requestAnimationFrame(lerp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div ref={ringRef} aria-hidden="true" style={ringBase} />
      <div ref={dotRef} aria-hidden="true" style={dotBase} />
    </>
  );
}
