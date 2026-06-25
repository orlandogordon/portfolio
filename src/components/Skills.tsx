import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { skillsGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader number="03" label="STACK & SKILLS" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[clamp(28px,4vw,56px)]">
        {skillsGroups.map((group, i) => (
          <Reveal key={group.label} index={i}>
            <div className="mb-5 font-mono text-xs tracking-[0.14em] text-accent">
              {group.label}
            </div>
            <div className="flex flex-col gap-[13px]">
              {group.items.map((item) => (
                <span
                  key={item}
                  data-cursor
                  className="text-base text-muted-bright transition-[color,transform] duration-200 hover:translate-x-1 hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
