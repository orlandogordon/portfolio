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
  /** Primary source repo. Used when `sources` is not provided. */
  sourceUrl: string;
  /**
   * Optional multiple labeled source repos (e.g. split API/UI). When present,
   * the card renders one link per entry instead of the single `Source` link.
   */
  sources?: { label: string; url: string }[];
  /** Filename caption shown on the placeholder when there is no image, e.g. "dashboard.png" */
  imageCaption?: string;
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
