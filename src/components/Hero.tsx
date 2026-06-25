import { useRef, type CSSProperties, type ReactNode } from "react";
import { siteConfig } from "../config";
import { hexToRgb } from "../lib/color";
import { useHeroField } from "../hooks/useHeroField";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { profile } from "../data/profile";

/** Staggered fade-up entrance for a hero element (rests visible). */
function HeroIn({
  index,
  className,
  style,
  children,
}: {
  index: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const animStyle: CSSProperties = reduce
    ? {}
    : {
        animation: "fadeUp .6s cubic-bezier(.2,.7,.2,1) both",
        animationDelay: `${90 + index * 95}ms`,
      };
  return (
    <div className={className} style={{ ...animStyle, ...style }}>
      {children}
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLElement>(null);

  useHeroField(canvasRef, hostRef, reduce, hexToRgb(siteConfig.accent));

  return (
    <section
      id="home"
      ref={hostRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      <div className="pointer-events-none relative z-[2] mx-auto w-full max-w-[1200px] px-[clamp(24px,5vw,64px)] pt-[120px]">
        <HeroIn
          index={0}
          className="mb-[22px] font-mono text-[clamp(11px,1.1vw,13px)] tracking-[0.32em] text-accent"
        >
          FULL&nbsp;STACK&nbsp;DEVELOPER
        </HeroIn>

        <HeroIn index={1}>
          <h1 className="m-0 font-display text-[clamp(58px,11.5vw,156px)] font-black uppercase leading-[0.84] tracking-[-0.045em]">
            Orlando
            <br />
            Gordon
          </h1>
        </HeroIn>

        <HeroIn
          index={2}
          className="mt-[30px] max-w-[480px] text-[clamp(15px,1.4vw,18px)] leading-[1.6] text-muted-soft"
        >
          {profile.heroTagline}
        </HeroIn>

        <HeroIn
          index={3}
          className="pointer-events-auto mt-[34px] flex flex-wrap items-center gap-[14px]"
        >
          <a
            href="#work"
            data-cursor
            className="rounded-[3px] bg-accent px-[26px] py-[14px] font-mono text-sm font-medium text-accent-fg no-underline transition-transform duration-200 hover:-translate-y-0.5"
          >
            View Work →
          </a>
          <a
            href="#contact"
            data-cursor
            className="rounded-[3px] border border-border-strong px-[26px] py-[14px] font-mono text-sm text-fg no-underline transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </HeroIn>
      </div>

      <div className="absolute bottom-[34px] left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] text-dim">
        <span>SCROLL</span>
        <span className="relative h-[38px] w-px overflow-hidden bg-border-strong">
          {!reduce && (
            <span className="scrollcue-fill absolute left-0 top-0 h-[12px] w-px bg-accent" />
          )}
        </span>
      </div>
    </section>
  );
}
