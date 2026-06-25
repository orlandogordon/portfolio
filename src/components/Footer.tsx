export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-border px-[clamp(24px,5vw,64px)] py-[38px]">
      <span className="font-mono text-xs text-dim">
        © 2025 Orlando Gordon — designed &amp; built from scratch
      </span>
      <a
        href="#home"
        data-cursor
        className="font-mono text-xs text-muted no-underline transition-colors duration-200 hover:text-accent"
      >
        back to top ↑
      </a>
    </footer>
  );
}
