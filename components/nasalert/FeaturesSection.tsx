import SectionHeading from "@/components/nasalert/SectionHeading";
import { features } from "@/lib/nasalertContent";

export default function FeaturesSection() {
  return (
    <section id="features" className="border-y border-road-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform Features"
          title="Tools for citizens, administrators, and response agencies"
          description="NasAlert provides practical features that strengthen coordination and transparency during emergencies."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="reveal rounded-xl border border-road-200 bg-road-50 p-5"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <h3 className="text-lg font-bold text-road-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-road-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
