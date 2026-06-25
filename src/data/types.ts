export interface Project {
  /** Two-digit display index, e.g. "01" */
  number: string;
  /** Mono category label, e.g. "FINTECH · FULL-STACK" */
  category: string;
  title: string;
  description: string;
  tags: string[];
  /** Live site URL. "#" means no public link yet (placeholder). */
  liveUrl: string;
  sourceUrl: string;
  /** Filename caption shown on the image frame, e.g. "dashboard.png" */
  imageCaption: string;
  /** Real screenshot; null keeps the hatch-pattern placeholder. */
  image: string | null;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceEntry {
  date: string;
  title: string;
  company: string;
  description: string;
  /** True while the content is still design-source placeholder copy. */
  placeholder?: boolean;
}
