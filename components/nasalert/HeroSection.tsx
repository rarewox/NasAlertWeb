import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-road-200 bg-civic-gradient">
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-nigeria-200/35 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-alert-200/30 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-3 inline-block rounded-full border border-road-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-road-700">
            Community Safety Infrastructure
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight text-road-900 md:text-5xl lg:text-6xl">
            NasAlert - Fast Community Alerts for a Safer Nasarawa.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-road-700 md:text-xl">
            Citizens report incidents. Authorities verify and respond. Communities get updates.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://nas-alert.vercel.app/login"
              className="inline-flex items-center justify-center rounded-md bg-nigeria-600 px-6 py-3 text-base font-semibold text-white shadow-civic transition hover:bg-nigeria-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-500"
            >
              Report an Incident
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-road-300 bg-white px-6 py-3 text-base font-semibold text-road-800 transition hover:border-nigeria-400 hover:text-nigeria-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-500"
            >
              Partner for Deployment
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-xl rounded-2xl border border-road-200 bg-white p-3 shadow-civic sm:p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-road-200 bg-road-50">
              <Image
                src="/images/nasalert/app-view.png"
                alt="NasAlert app and dashboard preview"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 70vw, 92vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-road-600">NasAlert product preview: mobile report flow + dashboard panel</p>
        </div>
      </div>
    </section>
  );
}
