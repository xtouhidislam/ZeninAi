"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Services", target: "services" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Case Studies", target: "case-studies" },
  { label: "Pricing", target: "pricing" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = navItems.map((item) => {
        const section = document.getElementById(item.target);
        if (!section) return null;
        const rect = section.getBoundingClientRect();
        return { id: item.target, top: rect.top };
      }).filter(Boolean) as { id: string; top: number }[];

      const current = offsets
        .filter((section) => section.top <= 120)
        .sort((a, b) => b.top - a.top)[0];

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    const section = document.getElementById(target);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-black/70 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-colors duration-300 lg:px-8">
        <button className="text-lg font-semibold tracking-tight text-white sm:text-xl" onClick={() => handleNavClick("services")}
          aria-label="Scroll to top">
          <span className="text-accent">Z</span>enin AI
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavClick(item.target)}
              className={`text-sm font-medium transition ${activeSection === item.target ? "text-white" : "text-text-secondary hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-orange-500"
          >
            Get Free Audit
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="h-5 w-5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </span>
        </button>
      </div>

      <div className={`md:hidden ${menuOpen ? "max-h-[400px]" : "max-h-0"} overflow-hidden border-t border-white/10 bg-black/90 transition-[max-height] duration-300 backdrop-blur-xl`}> 
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-8">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavClick(item.target)}
              className={`w-full text-left text-base font-medium transition ${activeSection === item.target ? "text-white" : "text-text-secondary hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-500"
          >
            Get Free Audit
          </button>
        </div>
      </div>
    </nav>
  );
}
