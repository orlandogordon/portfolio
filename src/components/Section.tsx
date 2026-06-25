import { type ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Standard content section: centered 1200px column with fluid padding. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1200px] px-[clamp(24px,5vw,64px)] py-[clamp(90px,12vh,150px)] ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
