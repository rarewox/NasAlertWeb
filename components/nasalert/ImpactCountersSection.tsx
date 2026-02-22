"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/nasalert/SectionHeading";
import { impactCounters } from "@/lib/nasalertContent";

export default function ImpactCountersSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [values, setValues] = useState<number[]>(impactCounters.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (!first.isIntersecting) {
          return;
        }

        setHasAnimated(true);
        const duration = 1200;
        const start = performance.now();

        const tick = (timestamp: number) => {
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setValues(impactCounters.map((counter) => Math.floor(counter.value * eased)));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="border-y border-road-200 bg-white">
      <div ref={ref} className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Impact Targets"
          title="Pilot targets for measurable response improvements"
          description="These counters represent rollout targets for early deployment phases across Nasarawa communities."
          align="center"
        />

        <p className="mt-4 text-center text-sm font-medium text-road-600">Pilot targets</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactCounters.map((counter, index) => (
            <article
              key={counter.label}
              className="reveal rounded-xl border border-road-200 bg-road-50 p-6 text-center"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-4xl font-bold text-nigeria-700">
                {values[index].toLocaleString()}
                <span className="text-2xl text-road-700">{counter.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-road-700">{counter.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
