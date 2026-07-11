"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,135,46,0.15),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(250,156,58,0.12),_transparent_18%)]" />
      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[#FA9C3A]/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_40%),linear-gradient(240deg,rgba(242,135,46,0.08),transparent_30%)] pointer-events-none" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-16 lg:px-8">
        <div className="grid w-full max-w-[1250px] gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <div className="space-y-8">
            <div className="inline-flex animate-fade-in-up items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-accent backdrop-blur-sm">
              AI Automation Agency
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
                We Automate The Work. You Grow The Business.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                We build intelligent AI systems that handle your lead follow-up, customer support, and daily operations — automatically. While you sleep.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500">
                Get Your Free AI Audit
              </a>
              <a href="#how-it-works" className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10">
                See How It Works
              </a>
            </div>

            <div className="text-sm text-text-secondary">
              Trusted by businesses saving <span className="font-semibold text-white">20+ hours/week</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative mx-auto flex h-[420px] w-full max-w-[450px] items-center justify-center rounded-[2rem] border border-white/10 bg-[#10131A]/90 p-8 shadow-glow backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(242,135,46,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(250,156,58,0.12),transparent_30%)]" />
              <div className="relative flex h-full w-full flex-col justify-between gap-5">
                <div className="space-y-3">
                  <div className="h-3 w-24 rounded-full bg-white/10" />
                  <div className="h-4 w-20 rounded-full bg-accent/60 animate-pulse" />
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">AI</div>
                    <div>
                      <p className="text-sm font-semibold text-white">Lead stream</p>
                      <p className="text-xs text-slate-400">Automated prospect capture</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">Chat</div>
                    <div>
                      <p className="text-sm font-semibold text-white">Smart replies</p>
                      <p className="text-xs text-slate-400">Customer support automation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6A5AF9]/15 text-[#A78BFA]">Sync</div>
                    <div>
                      <p className="text-sm font-semibold text-white">Workflow sync</p>
                      <p className="text-xs text-slate-400">Automated task handoff</p>
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto h-24 w-full overflow-hidden rounded-[1.75rem] bg-[#0B0C11]/70 p-4">
                  <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-gradient-to-r from-accent via-transparent to-transparent opacity-80" />
                  <div className="absolute left-4 top-6 h-5 w-5 rounded-full bg-accent animate-ping-slow" />
                  <div className="absolute left-28 top-12 h-5 w-5 rounded-full bg-[#FA9C3A] animate-ping-slow delay-150" />
                  <div className="absolute left-56 top-10 h-5 w-5 rounded-full bg-white/70 animate-ping-slow delay-300" />
                  <div className="absolute right-8 top-16 h-14 w-14 rounded-full border border-accent/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.9s ease forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ping-slow {
          animation: ping 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .shadow-glow {
          box-shadow: 0 25px 60px rgba(242, 135, 46, 0.18);
        }
      `}</style>
    </section>
  );
}
