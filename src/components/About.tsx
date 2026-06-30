import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { profile } from "../data/profile";
import headshot from "../assets/headshot.webp";

const ABOUT_TAGS = ["Python", "TypeScript", "React", "FastAPI", "PostgreSQL"];

export default function About() {
  return (
    <Section id="about">
      <SectionHeader number="01" label="ABOUT" />

      <div className="grid grid-cols-1 items-start gap-[clamp(40px,6vw,90px)] md:grid-cols-[1.5fr_1fr]">
        {/* Copy */}
        <Reveal>
          <h2 className="m-0 mb-7 font-display text-[clamp(28px,3.4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            I build complete products, from the database schema to the pixels
            users touch.
          </h2>
          <p className="m-0 mb-5 max-w-[62ch] text-[clamp(15px,1.3vw,17px)] leading-[1.7] text-muted">
            My focus is data-rich applications: systems where the hard part is
            modeling messy real-world information and presenting it so people can
            actually act on it. A personal-finance app that turns raw bank
            statements into a clear net-worth picture, and a tour-booking
            platform with payments, accounts, and reviews.
          </p>
          <p className="m-0 max-w-[62ch] text-[clamp(15px,1.3vw,17px)] leading-[1.7] text-muted">
            I work across the stack: <span className="text-fg">Python &amp; FastAPI</span>{" "}
            or <span className="text-fg">Node &amp; Express</span> on the backend,
            typed <span className="text-fg">React</span> on the frontend, and{" "}
            <span className="text-fg">PostgreSQL</span> or{" "}
            <span className="text-fg">MongoDB</span> underneath. And I care about
            the details that make software trustworthy: types, tests, and clean
            data.
          </p>
          <div className="mt-8 flex flex-wrap gap-[10px]">
            {ABOUT_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-[3px] border border-border px-[14px] py-2 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Portrait + info table */}
        <Reveal>
          <div className="relative w-full overflow-hidden rounded-md border border-border">
            <img
              src={headshot}
              alt="Orlando Gordon"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <dl className="mt-[22px] m-0 border-t border-border">
            <InfoRow label="LOCATION" value={profile.location} />
            <InfoRow label="FOCUS" value={profile.focus} />
            <InfoRow label="STATUS" value={`● ${profile.status}`} accent last />
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

function InfoRow({
  label,
  value,
  accent,
  last,
}: {
  label: string;
  value: string;
  accent?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-[14px] ${last ? "" : "border-b border-border"}`}
    >
      <dt className="font-mono text-xs text-dim">{label}</dt>
      <dd className="m-0 text-sm" style={accent ? { color: "var(--accent)" } : { color: "#EBF3EF" }}>
        {value}
      </dd>
    </div>
  );
}
