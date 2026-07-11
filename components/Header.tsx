export default function Header() {
  return (
    <header className="border-b border-white/10 pb-8 pt-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <img src="/zeninai_logo.png" alt="Zenin AI logo" className="h-10 w-auto" />
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Zenin AI</p>
            <p className="mt-2 text-sm text-text-secondary">Dhaka, Bangladesh · AI automation for growth-focused businesses</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-text-secondary">
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
