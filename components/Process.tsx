import SectionHeading from "@/components/SectionHeading";

const processSteps = [
  {
    title: "Discovery Call",
    icon: "📞",
    description:
      "We spend 30 minutes understanding your business, your bottlenecks, and which automations will save you the most time and money.",
  },
  {
    title: "Custom Blueprint",
    icon: "🗺️",
    description:
      "We design a tailored automation plan specific to your tools, workflows, and goals. You approve it before we build anything.",
  },
  {
    title: "We Build It",
    icon: "⚙️",
    description:
      "Our team builds and rigorously tests your automation system. We handle all technical complexity — you stay in the loop.",
  },
  {
    title: "Launch & Support",
    icon: "🚀",
    description:
      "We go live, train you on the system, and provide monthly monitoring and improvements as part of your retainer.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="THE PROCESS"
          title="From Zero to Automated in 2 Weeks"
          subtitle="A clean, confident workflow that moves from discovery to launch with clarity, collaboration, and rapid delivery."
        />

        <div className="relative mt-12">
          <div className="absolute left-10 top-20 hidden h-px w-[calc(100%-5rem)] bg-white/10 lg:block" />
          <div className="absolute left-8 top-24 bottom-0 w-px bg-white/10 lg:hidden" />

          <div className="grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} data-reveal-item className="relative rounded-[2rem] border border-white/10 bg-surface/90 p-6 shadow-glow">
                <div className="flex items-center gap-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-3xl text-2xl font-semibold ${index % 2 === 0 ? "bg-accent text-black" : "bg-white/10 text-white"}`}>
                    {index + 1}
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-2xl">
                    <span aria-hidden="true">{step.icon}</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-7 text-text-secondary">{step.description}</p>
                </div>

                {index < processSteps.length - 1 ? (
                  <div className="absolute right-[-1.5rem] top-1/2 hidden h-0.5 w-12 bg-accent/50 lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
