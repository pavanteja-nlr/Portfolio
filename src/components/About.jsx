import { GraduationCap, LineChart } from "lucide-react";
import { ABOUT } from "../data";
import SectionShell from "./SectionShell";
import SectionHeading from "./SectionHeading";
import IconInfoCard from "./IconInfoCard";

export default function About() {
  return (
    <SectionShell id="about">
      <SectionHeading title="About me" />
      <p className="mt-8 text-lg leading-relaxed text-slate-400">
        {ABOUT.paragraphs[0]}
      </p>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">
        {ABOUT.paragraphs[1]}
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <IconInfoCard
          icon={GraduationCap}
          title="Education"
          description="B.Tech AI & ML — 3rd year · CGPA 8.07"
        />
        <IconInfoCard
          icon={LineChart}
          title="Focus"
          description="Data analysis, EDA, and applied machine learning"
        />
      </div>
    </SectionShell>
  );
}
