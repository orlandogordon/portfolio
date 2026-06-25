import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  /** Two-digit index, e.g. "01". */
  number: string;
  /** Uppercase label shown after the em dash, e.g. "ABOUT". */
  label: string;
  /** Use the tighter 24px bottom gap (Work section) instead of 64px. */
  tight?: boolean;
}

/** The "01 — ABOUT" eyebrow row with a trailing rule, used by every section. */
export function SectionHeader({ number, label, tight }: SectionHeaderProps) {
  return (
    <Reveal
      className={`flex items-center gap-4 ${tight ? "mb-6" : "mb-16"}`}
    >
      <span className="font-mono text-[13px] tracking-[0.1em] text-accent">
        {number}
      </span>
      <span className="font-mono text-[13px] tracking-[0.2em] text-dim">
        — {label}
      </span>
      <span className="h-px flex-1 bg-border" />
    </Reveal>
  );
}
