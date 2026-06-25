import { useEffect, type RefObject } from "react";

const CELL = 26;
const CHARS = "01{}<>/=;:+*[]#".split("");
const BASE_RGB = "168,182,176";
const RADIUS = 160;

interface Glyph {
  x: number;
  y: number;
  ch: string;
  seed: number;
}

/**
 * Animated mono-glyph field behind the hero. A grid of characters idles with a
 * gentle drift and lights up in the accent color near the pointer (or a roaming
 * point when the pointer is away). Faithful port of the design source's
 * startHeroField, with full cleanup on unmount. Static single paint when motion
 * is reduced.
 */
export function useHeroField(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  hostRef: RefObject<HTMLElement | null>,
  reduceMotion: boolean,
  accentRgb: string,
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0;
    let H = 0;
    let grid: Glyph[] = [];

    const build = () => {
      W = host.clientWidth;
      H = host.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = "15px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const cols = Math.ceil(W / CELL);
      const rows = Math.ceil(H / CELL);
      grid = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          grid.push({
            x: c * CELL + CELL / 2,
            y: r * CELL + CELL / 2,
            ch: CHARS[(Math.random() * CHARS.length) | 0],
            seed: Math.random() * 6.28,
          });
        }
      }
    };
    build();

    const ro = new ResizeObserver(() => build());
    ro.observe(host);

    let mx = -9999;
    let my = -9999;
    let mEnter = false;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
      mEnter = true;
    };
    const onLeave = () => {
      mEnter = false;
    };
    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);

    let rafId = 0;
    const t0 = performance.now();
    let last = 0;

    const draw = (now: number) => {
      if (now - last < 33) {
        rafId = requestAnimationFrame(draw);
        return;
      }
      last = now;
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      const tx = mEnter ? mx : W * 0.5 + Math.cos(t * 0.4) * Math.min(280, W * 0.25);
      const ty = mEnter ? my : H * 0.55 + Math.sin(t * 0.5) * Math.min(150, H * 0.18);
      for (let i = 0; i < grid.length; i++) {
        const g = grid[i];
        const dx = g.x - tx;
        const dy = g.y - ty;
        const d = Math.sqrt(dx * dx + dy * dy);
        let a = 0.05 + 0.045 * Math.sin(t * 1.2 + g.seed);
        let near = 0;
        if (d < RADIUS) {
          near = 1 - d / RADIUS;
          a = 0.05 + near * 0.92;
          if (Math.random() < near * 0.04) {
            g.ch = CHARS[(Math.random() * CHARS.length) | 0];
          }
        }
        ctx.fillStyle =
          near > 0.55
            ? `rgba(${accentRgb},${a.toFixed(3)})`
            : `rgba(${BASE_RGB},${a.toFixed(3)})`;
        ctx.fillText(g.ch, g.x, g.y);
      }
      rafId = requestAnimationFrame(draw);
    };

    if (reduceMotion) {
      ctx.clearRect(0, 0, W, H);
      for (const g of grid) {
        ctx.fillStyle = `rgba(${BASE_RGB},0.08)`;
        ctx.fillText(g.ch, g.x, g.y);
      }
    } else {
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
    };
  }, [canvasRef, hostRef, reduceMotion, accentRgb]);
}
