import SectionHeading from "@/components/nasalert/SectionHeading";
import { useCases } from "@/lib/nasalertContent";

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="bg-road-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Use Cases"
          title="Designed for real incidents across communities"
          description="Flexible enough for local safety reports, emergency response, and coordinated public communication."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <article
              key={useCase.title}
              className="reveal rounded-xl border border-road-200 bg-white p-5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-lg font-bold text-road-900">{useCase.title}</h3>
              <p className="mt-2 text-sm text-road-700">{useCase.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
