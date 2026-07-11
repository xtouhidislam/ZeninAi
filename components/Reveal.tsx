"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  stagger?: boolean;
  className?: string;
};

export default function Reveal({ children, stagger = true, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in");

            if (stagger) {
              const items = el.querySelectorAll<HTMLElement>("[data-reveal-item]");
              items.forEach((item, i) => {
                item.style.transitionDelay = `${i * 100}ms`;
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    el.classList.add("reveal");
    observer.observe(el);

    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
