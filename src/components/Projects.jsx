import { ExternalLink, Github, Layers } from "lucide-react";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Projects
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
        <p className="mt-6 text-slate-400">
          End-to-end work: from raw data and exploration to models and outputs.
        </p>

        <div className="mt-12 space-y-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-surface-card shadow-xl shadow-black/20"
            >
              <div className="border-b border-slate-800/80 bg-surface-elevated/50 px-6 py-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    {project.featured && (
                      <span className="mb-2 inline-block rounded-md bg-accent/15 px-2 py-0.5 text-xs font-semibold text-accent">
                        Featured
                      </span>
                    )}
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-accent/50 hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                    View code
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Problem
                </h4>
                <p className="mt-2 text-slate-300 leading-relaxed">
                  {project.problem}
                </p>

                <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  What I did
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.contributions.map((line) => (
                    <li key={line} className="flex gap-3 text-slate-400">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {project.image ? (
                  <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-slate-700 bg-surface/50 px-4 py-8 text-center text-sm text-slate-500">
                    <Layers className="mx-auto h-8 w-8 shrink-0 text-slate-600" />
                    <p className="flex-1">
                      Add a screenshot or demo GIF to{" "}
                      <code className="text-accent/90">public/</code> and set{" "}
                      <code className="text-accent/90">image</code> in{" "}
                      <code className="text-accent/90">src/data.js</code>.
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
