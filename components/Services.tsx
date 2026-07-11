const services = [
  {
    name: "AI Lead Generation System",
      icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
      </svg>
    ),
    description:
      "Capture leads, score them with AI, and send personalised follow-ups automatically within 60 seconds. Never lose a lead again.",
    tag: "Most Popular",
  },
  {
    name: "AI Customer Support Chatbot",
      icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    description:
      "A chatbot trained on your business data that answers customer questions 24/7 and captures contact details.",
  },
  {
    name: "Appointment Booking Automation",
      icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    description:
      "Full booking system with automatic confirmations, reminders, and follow-ups. Zero manual work.",
  },
  {
    name: "Social Media Content Pipeline",
      icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l2.09 6.26L20 9l-4.91 3.14L15.18 20 12 16.73 8.82 20l.09-7.86L4 9l5.91-.74L12 2z" />
      </svg>
    ),
    description:
      "Input a topic, get 10 ready-to-post pieces of content generated and scheduled automatically.",
  },
  {
    name: "Email Marketing Automation",
      icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    description:
      "AI-personalised email sequences that adapt based on subscriber behaviour. Higher opens, more conversions.",
  },
  {
    name: "Business Operations Automation",
      icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.34-.4 1.61-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .7.4 1.34 1 1.61a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.7 0 1.34.4 1.51 1h.09a2 2 0 1 1 0 4h-.09c-.7 0-1.34.4-1.51 1z" />
      </svg>
    ),
    description:
      "Internal workflows automated — reports, data syncing, team notifications, document processing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 border-t border-[color:var(--border-soft)] bg-[color:var(--bg-secondary)]/80 py-20 text-[color:var(--text-primary)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">WHAT WE BUILD</p>
          <h2 className="text-3xl font-semibold text-[color:var(--text-primary)] sm:text-4xl lg:text-5xl">AI Systems That Work While You Don't</h2>
          <p className="text-base leading-8 text-[color:var(--text-secondary)] sm:text-lg">Every service is built to solve a real, costly business problem.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <article
              key={service.name}
              data-reveal-item
              className="glass-panel group relative overflow-hidden rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-accent">
                  {service.icon}
                </div>
                {service.tag ? (
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                    {service.tag}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-8 text-xl font-semibold text-[color:var(--text-primary)]">{service.name}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
