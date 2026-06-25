/**
 * Site-level configuration mirroring the design source's component props.
 * Kept in one place so the accent / motion / cursor behavior stays swappable.
 */
export const siteConfig = {
  /** Accent color; drives the runtime `--accent` CSS var. */
  accent: "#34E0A0",
  /** Force-reduce motion regardless of the OS setting. */
  reduceMotion: false,
  /** Enable the custom ring+dot cursor (fine-pointer devices only). */
  customCursor: true,
} as const;
