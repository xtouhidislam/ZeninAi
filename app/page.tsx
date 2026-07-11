import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white pt-28 scroll-smooth">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="hero" className="scroll-mt-28">
          <Reveal stagger={false}>
            <Hero />
          </Reveal>
        </div>

        <div id="results" className="scroll-mt-28 py-20">
          <Reveal>
            <Results />
          </Reveal>
        </div>

        <div id="services" className="scroll-mt-28">
          <Reveal>
            <Services />
          </Reveal>
        </div>

        <div className="scroll-mt-28">
          <Reveal>
            <Process />
          </Reveal>
        </div>

        <div id="case-studies" className="scroll-mt-28">
          <Reveal>
            <CaseStudies />
          </Reveal>
        </div>

        <div id="testimonials" className="scroll-mt-28">
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>

        <div id="pricing" className="scroll-mt-28">
          <Reveal>
            <Pricing />
          </Reveal>
        </div>

        <div id="about" className="scroll-mt-28">
          <Reveal>
            <About />
          </Reveal>
        </div>

        <div id="contact" className="scroll-mt-28">
          <Reveal>
            <Contact />
          </Reveal>
        </div>
      </div>

      <Footer />
    </main>
  );
}
