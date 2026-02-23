import Image from "next/image";

export default function SponsorProfileSection() {
  return (
    <section className="border-y border-nigeria-700 bg-nigeria-800 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.35fr_0.65fr] lg:items-center lg:px-8">
        <div className="h-52 w-52 rounded-2xl border border-nigeria-600 bg-nigeria-900/50 p-3 shadow-civic lg:mx-auto">
          <div className="relative h-full overflow-hidden rounded-xl border border-nigeria-500/60 bg-white">
            <Image
              src="/images/nasalert/app-logo.png"
              alt="NasAlert sponsor profile logo"
              fill
              sizes="208px"
              className="object-contain p-4"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 inline-block rounded-full border border-nigeria-500/70 bg-nigeria-700/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-nigeria-100">
            Sponsor Profile
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight text-white md:text-4xl">Hon. Jonathan Gbefwi Gaza</h2>
          <p className="mt-3 text-pretty text-lg text-nigeria-100">
            Supporting citizen safety through practical digital infrastructure that improves reporting speed, verified communication, and
            coordinated response systems for Nasarawa communities.
          </p>
          <a
            href="https://app.nasalert.com/signup"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-nigeria-800 transition hover:bg-nigeria-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
