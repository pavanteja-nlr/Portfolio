import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "../data";

const items = [
  {
    label: "Email",
    href: SITE.email,
    icon: Mail,
    display: SITE.emailLabel,
  },
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    icon: Linkedin,
    display: SITE.linkedinLabel,
  },
  {
    label: "GitHub",
    href: SITE.github,
    icon: Github,
    display: SITE.githubLabel,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-800/80 bg-surface-card/30 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Contact
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
        <p className="mx-auto mt-6 max-w-lg text-slate-400">
          Recruiters and collaborators: reach out anytime. I respond fastest on
          LinkedIn and email.
        </p>

        <div className="mt-12 flex flex-col items-stretch gap-4 sm:mx-auto sm:max-w-md">
          {items.map(({ label, href, icon: Icon, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-surface-card px-5 py-4 text-left transition hover:border-accent/40 hover:bg-surface-elevated"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  {label}
                </span>
                <span className="font-medium text-slate-200">{display}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
