"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 text-[color:var(--text-primary)] sm:py-20 lg:py-24">
      <div className="absolute inset-0">
        <div className="animate-float absolute -left-16 top-16 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
        <div className="animate-float-delayed absolute right-0 top-24 h-80 w-80 rounded-full bg-[#FFB56B]/10 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.07),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(242,135,46,0.12),_transparent_30%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        <div className="grid w-full max-w-[1250px] gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-accent backdrop-blur-sm">
              <span className="animate-pulse-soft h-2.5 w-2.5 rounded-full bg-accent" />
              AI Automation Agency
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-[color:var(--text-primary)] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
                We automate the work. You grow the business.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)] sm:text-xl">
                We design elegant AI systems that handle lead follow-up, support, and daily operations automatically so your team can focus on growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500">
                Get Your Free AI Audit
              </a>
              <a href="#process" className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[color:var(--text-primary)] transition duration-300 hover:border-[color:var(--border-soft)] hover:bg-[color:var(--surface-strong)]">
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
              <span className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-3 py-2">20+ hours saved each week</span>
              <span className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-3 py-2">Launch in as little as 2 weeks</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="glass-panel relative mx-auto flex h-[440px] w-full max-w-[470px] items-center justify-center rounded-[2rem] p-7 sm:p-8">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(242,135,46,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,181,107,0.12),transparent_30%)]" />
              <div className="relative flex h-full w-full flex-col justify-between gap-5">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded-full bg-[color:var(--surface)]" />
                  <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                    Live
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4 transition duration-300 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">AI</div>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--text-primary)]">Lead stream</p>
                      <p className="text-xs text-[color:var(--text-secondary)]">Automated prospect capture</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4 transition duration-300 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">Chat</div>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--text-primary)]">Smart replies</p>
                      <p className="text-xs text-[color:var(--text-secondary)]">Customer support automation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4 transition duration-300 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6A5AF9]/15 text-[#A78BFA]">Sync</div>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--text-primary)]">Workflow sync</p>
                      <p className="text-xs text-[color:var(--text-secondary)]">Automated task handoff</p>
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto h-24 w-full overflow-hidden rounded-[1.5rem] border border-[color:var(--border-soft)] bg-[color:var(--bg-secondary)]/80 p-4">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                  <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-accent via-transparent to-transparent opacity-80" />
                  <div className="absolute left-4 top-6 h-5 w-5 rounded-full bg-accent animate-pulse-soft" />
                  <div className="absolute left-28 top-12 h-5 w-5 rounded-full bg-[#FA9C3A] animate-pulse-soft" />
                  <div className="absolute left-56 top-10 h-5 w-5 rounded-full bg-white/70 animate-pulse-soft" />
                  <div className="absolute right-8 top-16 h-14 w-14 rounded-full border border-accent/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
