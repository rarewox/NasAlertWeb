import SectionHeading from "@/components/nasalert/SectionHeading";
import { howItWorksSteps } from "@/lib/nasalertContent";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-road-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Five clear stages from first alert to final resolution"
          description="A simple, accountable process keeps citizens informed and supports agency response efficiency."
        />

        <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {howItWorksSteps.map((step, index) => (
            <li
              key={step.title}
              className="reveal rounded-xl border border-road-200 bg-white p-5"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-nigeria-700">Step {index + 1}</p>
              <h3 className="mt-1 text-lg font-bold text-road-900">{step.title}</h3>
              <p className="mt-2 text-sm text-road-700">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
