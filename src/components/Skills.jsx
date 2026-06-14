import {
  SiNumpy,
  SiPandas,
  SiPython,
  SiScikitlearn,
} from "react-icons/si";
import { BarChart3, Database, LayoutDashboard, LineChart } from "lucide-react";
import { SKILLS } from "../data";
import SectionShell from "./SectionShell";
import SectionHeading from "./SectionHeading";

const ICON_MAP = {
  python: SiPython,
  pandas: SiPandas,
  numpy: SiNumpy,
  matplotlib: LineChart,
  powerbi: LayoutDashboard,
  scikitlearn: SiScikitlearn,
  cleaning: Database,
  statistics: BarChart3,
};

export default function Skills() {
  return (
    <SectionShell id="skills" className="bg-surface-card/50">
      <SectionHeading
        title="Skills"
        subtitle="Tools and techniques I use for analysis, visualization, and ML—grounded in projects, not just coursework."
      />

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4">
        {SKILLS.map(({ name, icon }) => {
          const Icon = ICON_MAP[icon];
          return (
            <li
              key={`${name}-${icon}`}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-surface-card px-3 py-6 transition hover:border-accent/30 hover:bg-surface-elevated/50"
              aria-label={name}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800/80 text-3xl text-white [&>svg]:h-9 [&>svg]:w-9">
                {Icon ? <Icon aria-hidden /> : null}
              </span>
              <span className="text-center text-sm font-medium text-slate-300">
                {name}
              </span>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
