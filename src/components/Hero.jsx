import { useCallback, useState } from "react";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { SITE } from "../data";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const downloadResume = useCallback(async () => {
    const path = SITE.resumePath;
    const filename = SITE.resumeFileName || "resume.pdf";
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error("Not found");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(path, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.15),transparent)]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        {SITE.profilePhoto && !photoFailed && (
          <div className="mb-8 flex justify-center animate-fade-in">
            <img
              src={SITE.profilePhoto}
              alt={SITE.name}
              width={160}
              height={160}
              onError={() => setPhotoFailed(true)}
              className="h-32 w-32 rounded-full border-4 border-slate-700 object-cover shadow-2xl shadow-black/40 ring-2 ring-accent/40 sm:h-40 sm:w-40"
            />
          </div>
        )}

        {SITE.openToInternships && (
          <p className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Open to internships
          </p>
        )}

        <h1 className="font-display animate-fade-in text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl [animation-delay:0.05s]">
          {SITE.name}
        </h1>
        <p className="mt-4 animate-fade-in text-xl font-medium text-accent [animation-delay:0.1s] sm:text-2xl">
          {SITE.title}
        </p>
        <p className="mx-auto mt-6 max-w-xl animate-fade-in text-lg leading-relaxed text-slate-400 [animation-delay:0.15s]">
          {SITE.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in [animation-delay:0.2s]">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-cyan-300"
          >
            View projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={downloadResume}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-surface-card px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-accent/50 hover:text-white"
          >
            <Download className="h-4 w-4" />
            Download resume
          </button>
        </div>
      </div>
    </section>
  );
}
