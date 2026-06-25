import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader number="04" label="EXPERIENCE" />

      <div className="flex flex-col">
        {experience.map((entry, i) => (
          <Reveal
            key={`${entry.date}-${entry.title}`}
            className={`grid grid-cols-1 gap-[clamp(20px,3vw,48px)] border-t border-border py-8 md:grid-cols-[170px_1fr] ${
              i === experience.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="font-mono text-sm text-accent">{entry.date}</div>
            <div>
              <h3 className="m-0 mb-1 font-display text-[clamp(20px,2vw,26px)] font-extrabold tracking-[-0.02em]">
                {entry.title}
              </h3>
              <div className="mb-[14px] font-mono text-[13px] text-dim">
                {entry.company}
              </div>
              <p className="m-0 max-w-[62ch] text-[15px] leading-[1.7] text-muted">
                {entry.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
