import { Reveal } from "./Reveal";
import type { Project } from "../data/types";

interface Props {
  project: Project;
  index: number;
  isLast: boolean;
}

export function ProjectCard({ project, index, isLast }: Props) {
  const imageLeft = index % 2 === 0;
  const hasLive = project.liveUrl !== "#";

  return (
    <Reveal
      as="article"
      className={`grid grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] border-t border-border py-[clamp(40px,6vh,72px)] md:grid-cols-2 ${
        isLast ? "border-b" : ""
      }`}
    >
      {/* Image */}
      <div
        data-cursor
        className={`hatch relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-accent ${
          imageLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover object-[20%_center]"
          />
        ) : (
          <span className="absolute left-[14px] top-[14px] rounded-sm bg-[rgba(7,10,9,0.6)] px-2 py-1 font-mono text-[11px] text-dim">
            {project.imageCaption}
          </span>
        )}
      </div>

      {/* Text */}
      <div className={imageLeft ? "md:order-2" : "md:order-1"}>
        <div className="mb-[14px] flex items-baseline gap-[14px]">
          <span className="font-mono text-[13px] text-accent">{project.number}</span>
          <span className="font-mono text-xs text-dim">{project.category}</span>
        </div>
        <h3 className="m-0 mb-4 font-display text-[clamp(28px,3vw,40px)] font-extrabold tracking-[-0.025em]">
          {project.title}
        </h3>
        <p className="m-0 mb-[22px] text-[clamp(14px,1.2vw,16px)] leading-[1.7] text-muted">
          {project.description}
        </p>
        <div className="mb-[26px] flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[3px] border border-border-accent px-[11px] py-[6px] font-mono text-[11px] text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-[22px] font-mono text-[13px]">
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="text-fg no-underline transition-colors duration-200 hover:text-accent"
            >
              Live ↗
            </a>
          )}
          {(project.sources ?? [{ label: "Source", url: project.sourceUrl }]).map(
            (src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="text-fg no-underline transition-colors duration-200 hover:text-accent"
              >
                {src.label} ↗
              </a>
            ),
          )}
        </div>
      </div>
    </Reveal>
  );
}
