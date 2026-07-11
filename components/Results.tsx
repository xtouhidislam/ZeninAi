"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  label: string;
  value: string;
  count: number;
  suffix?: string;
};

const stats: StatItem[] = [
  { label: "Average lead response time after automation", value: "60 sec", count: 60, suffix: "sec" },
  { label: "Saved per week per client", value: "20+ hrs", count: 20, suffix: "+ hrs" },
  { label: "Client retention rate", value: "98%", count: 98, suffix: "%" },
  { label: "Average time to go live", value: "2 weeks", count: 2, suffix: " weeks" },
];

export default function Results() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 1000;
    const interval = 25;
    const steps = duration / interval;

    const animators = stats.map((stat, index) => {
      const increment = stat.count / steps;
      let current = 0;
      return setInterval(() => {
        current += increment;
        setCounts((previous) => {
          const next = [...previous];
          next[index] = Math.min(Math.round(current), stat.count);
          return next;
        });
      }, interval);
    });

    return () => {
      animators.forEach(clearInterval);
    };
  }, [visible]);

  return (
    <section ref={sectionRef} className="w-full border-t border-white/10 bg-[#07090f] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_30%)] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">The numbers speak for themselves</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Real impact, measured in speed, savings, and retention.</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} data-reveal-item className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <p className="text-5xl font-semibold tracking-tight text-accent sm:text-6xl">
                {counts[index]}
                <span className="text-3xl">{stat.suffix}</span>
              </p>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
