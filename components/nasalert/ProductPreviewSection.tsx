import Image from "next/image";
import SectionHeading from "@/components/nasalert/SectionHeading";

const previews = ["Citizen app", "Admin dashboard", "Live alerts feed"];

export default function ProductPreviewSection() {
  return (
    <section className="bg-road-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Preview"
          title="Visual placeholders for key NasAlert interfaces"
          description="Final screenshots can be inserted later while preserving the same responsive layout."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {previews.map((item, index) => (
            <article
              key={item}
              className="reveal rounded-xl border border-road-200 bg-white p-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="mb-3 text-base font-semibold text-road-900">{item}</h3>
              <div className="rounded-lg border border-road-200 bg-road-50 p-3">
                {item === "Citizen app" ? (
                  <div className="relative aspect-[16/9] overflow-hidden rounded bg-white">
                    <Image
                      src="/images/nasalert/nasalert-geo.png"
                      alt="NasAlert citizen app geolocation map view"
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                ) : item === "Admin dashboard" ? (
                  <div className="relative aspect-[16/9] overflow-hidden rounded bg-white">
                    <Image
                      src="/images/nasalert/app-view.png"
                      alt="NasAlert admin dashboard preview"
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                ) : item === "Live alerts feed" ? (
                  <div className="relative aspect-[16/9] overflow-hidden rounded bg-white">
                    <Image
                      src="/images/nasalert/app-alert-dash.png"
                      alt="NasAlert live alerts feed dashboard preview"
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                ) : (
                  <>
                    <div className="mb-3 h-5 w-2/5 rounded bg-road-200" />
                    <div className="space-y-2">
                      <div className="h-3 rounded bg-road-200" />
                      <div className="h-3 w-5/6 rounded bg-road-200" />
                      <div className="h-20 rounded bg-white" />
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
