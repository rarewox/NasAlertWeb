import SectionHeading from "@/components/nasalert/SectionHeading";
import { faqs } from "@/lib/nasalertContent";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-road-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from citizens and response partners"
          description="Short answers on how the platform works and how agencies can participate."
        />

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="reveal rounded-xl border border-road-200 bg-white p-5"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-road-900">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-road-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
