export default function SectionShell({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-4 py-20 sm:px-6 ${className}`}
    >
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}
