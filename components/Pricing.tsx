"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const pricingPlans = [
  {
    name: "Starter",
    price: "$500 setup + $250/month",
    ideal: "Solo entrepreneurs and small businesses",
    features: [
      "1 core automation workflow",
      "AI integration (lead capture or chatbot)",
      "Google Sheets / Airtable dashboard",
      "30-day support included",
      "Monthly monitoring report",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,500 setup + $450/month",
    ideal: "Growing businesses with 2-10 employees",
    features: [
      "3 automation workflows",
      "AI chatbot or lead scoring system",
      "CRM integration",
      "60-day support + monthly strategy call",
      "Priority support (24hr response)",
      "Monthly performance report",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Pro",
    price: "$3,000 setup + $900/month",
    ideal: "Established businesses wanting full automation",
    features: [
      "Full automation stack (unlimited workflows)",
      "Custom AI chatbot + voice integration",
      "Full CRM + email marketing automation",
      "Dedicated account manager",
      "Weekly reports + quarterly strategy review",
      "Same-day support",
    ],
    cta: "Book a Call",
    featured: false,
  },
];

export default function Pricing() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectPlan = (name: string) => {
    setSelected(name);

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("selectedPricingPlan", name);
      window.dispatchEvent(new CustomEvent("pricing-plan-selected", { detail: { plan: name } }));
      window.location.hash = "contact";
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleKey = (e: React.KeyboardEvent, name: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectPlan(name);
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="INVESTMENT"
          title="Transparent Pricing. Clear ROI."
          subtitle="Every package pays for itself. Most clients break even within 6 weeks."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <div
              key={plan.name}
              data-reveal-item
              role="button"
              tabIndex={0}
              aria-pressed={selected === plan.name}
              aria-label={`Select ${plan.name} plan`}
              onClick={() => selectPlan(plan.name)}
              onKeyDown={(e) => handleKey(e, plan.name)}
              className={`group relative overflow-hidden rounded-[2rem] border p-8 shadow-glow transition-transform duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/20 focus-visible:ring-offset-2 hover:-translate-y-2 hover:scale-105 focus:-translate-y-2 focus:scale-105 ${
                plan.featured
                  ? "border-accent/40 bg-[#111827] lg:-mt-4 lg:scale-[1.02]"
                  : "border-white/10 bg-surface/90"
              } ${selected === plan.name ? "ring-4 ring-accent/30 border-accent/60 scale-105" : ""}`}
            >
              {plan.featured ? (
                <div className="mb-6 inline-flex rounded-full bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                  Most Popular
                </div>
              ) : null}

              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/60">{plan.name}</p>
                  <p className={`mt-4 text-4xl font-semibold ${plan.featured ? "text-accent" : "text-white"}`}>
                    {plan.price}
                  </p>
                </div>
                <p className="text-sm leading-7 text-text-secondary">Ideal for: {plan.ideal}</p>
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm leading-7 text-white/90">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  selectPlan(plan.name);
                }}
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-accent text-black hover:bg-orange-500"
                    : "border border-white/10 bg-white/5 text-white hover:border-accent/30"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-surface/90 p-8 text-center shadow-glow">
          <p className="text-base leading-7 text-text-secondary">
            Not sure which package? Book a free 30-minute audit call — we will tell you exactly what you need.
          </p>
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              selectPlan("Custom plan");
            }}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-500"
          >
            Book a Free Audit Call
          </a>
        </div>
      </div>
    </section>
  );
}
