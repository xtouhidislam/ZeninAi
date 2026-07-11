export default function Footer() {
  return (
    <footer className="footer-force-light mt-20 border-t border-white/10 bg-[#04050a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">Zenin AI</h3>
            <p className="mt-2 text-sm text-white/80">We build AI automation systems that save businesses 20+ hours per week.</p>

            <div className="mt-4 flex items-center gap-4">
              <a aria-label="LinkedIn" className="text-white/80 hover:text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.8v2h.1c.67-1.3 2.3-2.6 4.7-2.6 5 0 5.9 3.3 5.9 7.6V22h-5v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.7-2.6 3.5V22h-5V8z" fill="currentColor" />
                </svg>
              </a>

              <a aria-label="X" className="text-white/80 hover:text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5V9a11.66 11.66 0 01-8.46-4.3s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5V6.5A7.72 7.72 0 0023 3z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className="hover:text-white hover:underline">AI Lead Generation</li>
              <li className="hover:text-white hover:underline">Customer Support Chatbot</li>
              <li className="hover:text-white hover:underline">Booking Automation</li>
              <li className="hover:text-white hover:underline">Social Media Automation</li>
              <li className="hover:text-white hover:underline">Email Automation</li>
              <li className="hover:text-white hover:underline">Operations Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className="hover:text-white hover:underline">About</li>
              <li className="hover:text-white hover:underline">Case Studies</li>
              <li className="hover:text-white hover:underline">Pricing</li>
              <li className="hover:text-white hover:underline">Contact</li>
              <li className="mt-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-accent">Free AI Audit</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#04050a]">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© 2026 Zenin AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
