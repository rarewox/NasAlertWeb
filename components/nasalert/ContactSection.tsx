import SectionHeading from "@/components/nasalert/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-nigeria-900 text-white">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-nigeria-500/35 to-transparent" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Started"
          title="Report incidents or partner for NasAlert deployment"
          description="Use the form for incident reports, LGA onboarding, or agency collaboration requests."
          light
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="grid gap-4 rounded-2xl border border-nigeria-700 bg-nigeria-800/70 p-6" action="#" method="post">
            <label className="text-sm font-medium text-nigeria-100" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-md border border-nigeria-700 bg-nigeria-900 px-3 py-2 text-nigeria-50 placeholder-nigeria-300 focus:border-nigeria-300 focus:outline-none"
              placeholder="Your full name"
            />

            <label className="text-sm font-medium text-nigeria-100" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="rounded-md border border-nigeria-700 bg-nigeria-900 px-3 py-2 text-nigeria-50 placeholder-nigeria-300 focus:border-nigeria-300 focus:outline-none"
              placeholder="0800 000 0000"
            />

            <label className="text-sm font-medium text-nigeria-100" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-md border border-nigeria-700 bg-nigeria-900 px-3 py-2 text-nigeria-50 placeholder-nigeria-300 focus:border-nigeria-300 focus:outline-none"
              placeholder="name@example.com"
            />

            <label className="text-sm font-medium text-nigeria-100" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="rounded-md border border-nigeria-700 bg-nigeria-900 px-3 py-2 text-nigeria-50 placeholder-nigeria-300 focus:border-nigeria-300 focus:outline-none"
              placeholder="Describe incident details or partnership request"
            />

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-md bg-nigeria-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-nigeria-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-400"
              >
                Submit
              </button>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-nigeria-500/60 px-5 py-3 text-sm font-semibold text-nigeria-100 transition hover:border-nigeria-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-400"
              >
                WhatsApp
              </a>
            </div>
          </form>

          <aside className="rounded-2xl border border-nigeria-700 bg-nigeria-800/60 p-6">
            <h3 className="text-xl font-bold text-white">Why onboard now?</h3>
            <p className="mt-3 text-nigeria-100">
              Early deployment helps communities and agencies establish reliable reporting workflows before emergencies escalate.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-nigeria-100">
              <li>Local government area setup support</li>
              <li>Response desk workflow mapping</li>
              <li>Baseline dashboards for pilot monitoring</li>
            </ul>
          </aside>
        </div>

        <footer className="mt-10 border-t border-nigeria-700 pt-5 text-sm text-nigeria-200">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>NasAlert.com - Community Alert Platform for Nasarawa State</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
