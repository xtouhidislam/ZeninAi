import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">WHO WE ARE</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Built by Automators, For Business Owners</h2>

            <div className="mt-6 space-y-6 text-base leading-7 text-text-secondary">
              <p>
                I started this agency because I watched business owners drown in repetitive tasks — answering the same emails, manually
                following up leads, copying data between spreadsheets. Things that should take seconds were taking hours.
              </p>

              <p>
                I built my first automation for a friend's real estate business. It saved him 14 hours per week in the first month. Watching
                that transformation — more time with his family, more energy for actual sales — that was it for me.
              </p>

              <p>
                Now we build those same systems for businesses across industries. The tools exist. The knowledge exists. You just need the right
                person to put it together.
              </p>

              <p className="mt-2 font-semibold">— [Your Name], Founder</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/3 px-4 py-2">
                <span className="text-sm font-semibold text-white">2 Weeks Average Delivery</span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full bg-white/3 px-4 py-2">
                <span className="text-sm font-semibold text-white">30-Day Fix Guarantee</span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full bg-white/3 px-4 py-2">
                <span className="text-sm font-semibold text-white">No Lock-In Contracts</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-72 w-full max-w-md rounded-2xl bg-gradient-to-br from-white/3 to-white/2 p-6">
              <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FF8A00" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#FFD100" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                <rect x="10" y="10" width="380" height="280" rx="20" fill="url(#g2)" opacity="0.06" />

                <g transform="translate(30,30)">
                  <rect x="0" y="0" width="120" height="80" rx="12" fill="url(#g1)" opacity="0.95" />
                  <rect x="140" y="20" width="200" height="50" rx="10" fill="#ffffff10" />

                  <circle cx="60" cy="160" r="28" fill="#ffffff10" />
                  <rect x="120" y="120" width="200" height="100" rx="14" fill="url(#g2)" opacity="0.9" />

                  <path d="M20 220 L80 180 L140 220 L200 170" stroke="#fff" strokeOpacity="0.15" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  <g transform="translate(10,10) scale(0.9)" fill="#fff">
                    <rect x="220" y="30" width="34" height="34" rx="6" opacity="0.06" />
                    <rect x="260" y="30" width="34" height="34" rx="6" opacity="0.12" />
                    <rect x="220" y="76" width="74" height="16" rx="6" opacity="0.08" />
                  </g>
                </g>
              </svg>

              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-accent/20 p-3 text-accent">AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
