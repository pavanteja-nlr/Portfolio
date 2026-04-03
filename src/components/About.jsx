import { GraduationCap, LineChart } from "lucide-react";
import { ABOUT } from "../data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          About me
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
        <p className="mt-8 text-lg leading-relaxed text-slate-400">
          {ABOUT.paragraphs[0]}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-400">
          {ABOUT.paragraphs[1]}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="flex gap-4 rounded-2xl border border-slate-800 bg-surface-card p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Education</h3>
              <p className="mt-1 text-sm text-slate-400">
                B.Tech AI & ML — 3rd year · CGPA 8.07
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-slate-800 bg-surface-card p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <LineChart className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Focus</h3>
              <p className="mt-1 text-sm text-slate-400">
                Data analysis, EDA, and applied machine learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
