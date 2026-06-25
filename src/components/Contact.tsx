import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { profile } from "../data/profile";

const CONTACT_LINKS = [
  {
    label: "EMAIL",
    value: `${profile.email} ↗`,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "GITHUB",
    value: `${profile.githubLabel} ↗`,
    href: profile.github,
    external: true,
  },
  {
    label: "LINKEDIN",
    value: `${profile.linkedinLabel} ↗`,
    href: profile.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeader number="05" label="CONTACT" />

      <div className="grid grid-cols-1 items-start gap-[clamp(40px,6vw,90px)] md:grid-cols-2">
        <Reveal>
          <h2 className="m-0 mb-6 font-display text-[clamp(34px,4.5vw,60px)] font-extrabold leading-none tracking-[-0.03em]">
            Let's build something.
          </h2>
          <p className="m-0 mb-[38px] max-w-[46ch] text-[clamp(15px,1.3vw,17px)] leading-[1.7] text-muted">
            Open to full-stack roles and interesting projects. Drop a message or
            reach me directly.
          </p>
          <div className="flex flex-col gap-[2px]">
            {CONTACT_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`flex items-center justify-between border-t border-border py-[18px] text-fg no-underline transition-colors duration-200 hover:text-accent ${
                  i === CONTACT_LINKS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-mono text-xs text-dim">{link.label}</span>
                <span className="text-[15px]">{link.value}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<{ msg: string; error: boolean } | null>(
    null,
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") ?? "").toString().trim();
    const email = (data.get("email") ?? "").toString().trim();
    const message = (data.get("message") ?? "").toString().trim();

    if (!name || !email || !message) {
      setStatus({ msg: "> please fill in every field.", error: true });
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus({
      msg: `> opening your mail client… thanks, ${name}!`,
      error: false,
    });
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[22px]">
      <Field label="NAME">
        <input
          type="text"
          name="name"
          required
          className="rounded border border-border bg-surface px-4 py-[14px] font-body text-[15px] text-fg outline-none transition-colors duration-200 focus:border-accent"
        />
      </Field>
      <Field label="EMAIL">
        <input
          type="email"
          name="email"
          required
          className="rounded border border-border bg-surface px-4 py-[14px] font-body text-[15px] text-fg outline-none transition-colors duration-200 focus:border-accent"
        />
      </Field>
      <Field label="MESSAGE">
        <textarea
          name="message"
          rows={5}
          required
          className="resize-y rounded border border-border bg-surface px-4 py-[14px] font-body text-[15px] text-fg outline-none transition-colors duration-200 focus:border-accent"
        />
      </Field>
      <button
        type="submit"
        data-cursor
        className="self-start rounded bg-accent px-[26px] py-4 font-mono text-sm font-medium text-accent-fg transition-transform duration-200 hover:-translate-y-0.5"
      >
        Send message →
      </button>
      {status && (
        <div
          className="font-mono text-[13px]"
          style={{ color: status.error ? "#FF6F61" : "var(--accent)" }}
        >
          {status.msg}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-[9px]">
      <span className="font-mono text-xs tracking-[0.1em] text-dim">{label}</span>
      {children}
    </label>
  );
}
