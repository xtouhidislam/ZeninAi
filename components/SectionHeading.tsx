type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle: string;
};

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">{label}</p>
      <h2 className="text-3xl font-semibold text-[color:var(--text-primary)] sm:text-4xl">{title}</h2>
      <p className="max-w-3xl text-base leading-7 text-text-secondary">{subtitle}</p>
    </div>
  );
}
