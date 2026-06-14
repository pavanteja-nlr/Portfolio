export default function IconInfoCard({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-800 bg-surface-card p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
}
