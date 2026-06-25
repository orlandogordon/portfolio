import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";

const SECTION_IDS = ["about", "work", "skills", "experience"];

const LINKS = [
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
];

export default function Nav() {
  const scrolled = useScrolled(40);
  const active = useActiveSection(SECTION_IDS);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[60] flex items-center justify-between border-b px-[clamp(24px,5vw,64px)] py-5 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-[#13201a] bg-[rgba(7,10,9,0.82)] backdrop-blur-[12px]"
          : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#home"
        data-cursor
        className="font-mono text-base tracking-[-0.01em] text-fg no-underline"
      >
        orlando<span className="text-accent">_</span>
      </a>

      <div className="flex items-center gap-[clamp(18px,2.4vw,38px)] font-mono text-[13px]">
        <div className="hidden items-center gap-[clamp(18px,2.4vw,38px)] md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              data-cursor
              className="no-underline transition-colors duration-200"
              style={{
                color: active === link.id ? "var(--accent)" : "#9aa6a0",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          data-cursor
          className="rounded-[3px] bg-accent px-[18px] py-[9px] font-medium text-accent-fg no-underline transition-transform duration-200 hover:-translate-y-0.5"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
