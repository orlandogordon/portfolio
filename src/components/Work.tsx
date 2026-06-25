import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <Section id="work">
      <SectionHeader number="02" label="SELECTED WORK" tight />
      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={i}
          isLast={i === projects.length - 1}
        />
      ))}
    </Section>
  );
}
