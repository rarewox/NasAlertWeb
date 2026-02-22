type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowClass = light
    ? "mb-2 inline-block rounded-full border border-road-600 bg-road-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-road-100"
    : "mb-2 inline-block rounded-full border border-nigeria-200 bg-nigeria-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-nigeria-700";
  const titleClass = light
    ? "text-balance text-3xl font-bold leading-tight text-white md:text-4xl"
    : "text-balance text-3xl font-bold leading-tight text-road-900 md:text-4xl";
  const descriptionClass = light ? "mt-3 text-pretty text-road-200 md:text-lg" : "mt-3 text-pretty text-road-700 md:text-lg";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={eyebrowClass}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={titleClass}>{title}</h2>
      {description ? <p className={descriptionClass}>{description}</p> : null}
    </div>
  );
}
