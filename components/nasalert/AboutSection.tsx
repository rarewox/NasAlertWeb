import { outcomeBullets } from "@/lib/nasalertContent";
import SectionHeading from "@/components/nasalert/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="border-y border-road-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About NasAlert"
          title="Built for communities that need trusted emergency information fast"
          description="NasAlert is a community alert and reporting system for Nasarawa State, designed to help residents, local authorities, and response agencies act early on security incidents, emergencies, road events, and disasters."
        />

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {outcomeBullets.map((item) => (
            <li key={item} className="reveal rounded-xl border border-road-200 bg-road-50 p-5 text-road-800">
              <p className="font-medium">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
