import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Before this, I was manually following up every lead by hand. Now the system does it in under a minute. I have closed 3 deals this month that I would have definitely lost before.",
    name: "Ahmed K.",
    role: "Real Estate Agent, Dhaka",
    stars: 5,
  },
  {
    quote:
      "The chatbot handles 80% of our customer questions. My team used to spend hours on support. Now they focus on growth. Best investment I made this year.",
    name: "Sarah M.",
    role: "E-Commerce Founder",
    stars: 5,
  },
  {
    quote:
      "I was skeptical AI could match my writing style for social content. I was wrong. The posts sound exactly like me, and they go out automatically. My LinkedIn has never been more active.",
    name: "Ravi S.",
    role: "Business Coach",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading label="" title="What Our Clients Say" subtitle="" />

        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              data-reveal-item
              className="rounded-[1.5rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-8 shadow-glow"
            >
              <blockquote className="text-lg italic leading-8 text-[color:var(--text-primary)]/90">“{t.quote}”</blockquote>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[color:var(--text-primary)]">{t.name}</p>
                  <p className="text-sm text-[color:var(--text-secondary)]">{t.role}</p>
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <svg key={idx} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" className="text-accent" />
                    </svg>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
