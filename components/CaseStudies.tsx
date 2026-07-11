import SectionHeading from "@/components/SectionHeading";

const caseStudies = [
  {
    industry: "Real Estate Agency",
    problem: "Leads from Facebook ads were going cold — response time was 6+ hours.",
    solution: "Built AI lead capture + instant follow-up system with lead scoring.",
    results: [
      "Response time cut from 6 hours → 58 seconds",
      "3x more leads converted in first month",
      "14 hours saved per week",
    ],
    badge: "Real Estate",
  },
  {
    industry: "E-Commerce Store",
    problem: "Customer support taking 4 hours daily, same questions asked repeatedly.",
    solution: "Deployed AI chatbot trained on product catalogue and FAQs.",
    results: [
      "80% of questions answered automatically",
      "Support time reduced from 4 hours to 30 minutes daily",
      "Customer satisfaction score up 40%",
    ],
    badge: "E-Commerce",
  },
  {
    industry: "Business Coach",
    problem: "Spending 10 hours/week writing and scheduling social media content.",
    solution: "Built AI content pipeline — 1 topic in, 10 posts out, auto-scheduled.",
    results: [
      "Content creation time: 10 hours → 15 minutes per week",
      "LinkedIn followers grew 280% in 3 months",
      "3 new clients from organic content",
    ],
    badge: "Coaching",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="RESULTS"
          title="Real Automations. Real Results."
          subtitle="Three stories that show how automation turns slow workflows into fast growth machines."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {caseStudies.map((caseStudy, idx) => (
            <article
              key={caseStudy.industry}
              data-reveal-item
              className="glass-panel group overflow-hidden rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                  {caseStudy.badge}
                </span>
                <span className="text-sm font-semibold text-[color:var(--text-secondary)]">{caseStudy.industry}</span>
              </div>

              <p className="mt-6 text-sm italic text-text-secondary">{caseStudy.problem}</p>
              <p className="mt-4 text-base leading-7 text-[color:var(--text-primary)]">{caseStudy.solution}</p>

              <div className="mt-8 space-y-4">
                {caseStudy.results.map((result) => (
                  <div key={result} className="flex items-start gap-3 text-sm leading-7 text-[color:var(--text-primary)]">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      ✓
                    </span>
                    <span className="font-semibold">{result}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
