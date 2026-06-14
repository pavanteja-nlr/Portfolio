export default function SectionHeading({ title, subtitle, center = false }) {
  return (
    <>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-accent ${center ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`mt-6 text-slate-400 ${center ? "mx-auto max-w-lg" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </>
  );
}
