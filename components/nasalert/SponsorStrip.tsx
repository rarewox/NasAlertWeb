import Image from "next/image";

export default function SponsorStrip() {
  return (
    <section id="sponsor" className="bg-nigeria-800 py-16 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative h-[320px] w-full overflow-hidden rounded-xl shadow-2xl sm:h-[400px] md:h-[500px]">
            <Image
              src="/images/nasalert/sponsor-public-safety.jpg"
              alt="NasAlert Public Safety Initiative - Hon. Jonathan Gbefwi Gaza"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="text-left">
            <h2 className="mb-6 border-l-4 border-alert-500 pl-4 text-3xl font-bold md:text-4xl">Sponsor and Public Safety Support</h2>

            <p className="mb-4 text-lg font-semibold">Sponsored by: Hon. Jonathan Gbefwi Gaza</p>

            <p className="text-lg leading-relaxed text-nigeria-100">
              This initiative supports safer communities through faster incident reporting, verified communication, and stronger coordination
              with response agencies.
            </p>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:justify-start">
              <a
                href="https://app.nasalert.com/login"
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-nigeria-800 transition hover:bg-nigeria-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Get NasAlert
              </a>
              <div className="text-left">
                <a
                  href="#about"
                  className="inline-flex rounded-md border border-white/60 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
