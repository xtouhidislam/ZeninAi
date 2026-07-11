"use client";

import { useEffect, useState } from "react";
import { init, send } from "@emailjs/browser";
import SectionHeading from "@/components/SectionHeading";

type FormValues = {
  name: string;
  email: string;
  businessType: string;
  source: string;
  message: string;
  plan: string;
  packageChoice: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  businessType: "Real Estate",
  source: "LinkedIn",
  message: "",
  plan: "",
  packageChoice: "",
};

const fixedRecipient = "social.zeninai@gmail.com";

export default function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error" | "missing-config">(null);
  const [statusDetail, setStatusDetail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      init(publicKey);
    }

    const updatePlanFromStorage = () => {
      const savedPlan = window.sessionStorage.getItem("selectedPricingPlan");
      if (savedPlan) {
        setFormValues((prev) => ({ ...prev, plan: savedPlan, packageChoice: savedPlan }));
      }
    };

    updatePlanFromStorage();

    const handlePlanSelected = (event: Event) => {
      const customEvent = event as CustomEvent<{ plan: string }>;
      if (customEvent.detail?.plan) {
        setFormValues((prev) => ({ ...prev, plan: customEvent.detail.plan, packageChoice: customEvent.detail.plan }));
      }
    };

    window.addEventListener("pricing-plan-selected", handlePlanSelected as EventListener);
    return () => {
      window.removeEventListener("pricing-plan-selected", handlePlanSelected as EventListener);
    };
  }, []);

  function validate(values: FormValues) {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    } else if (values.name.trim().length < 2) {
      nextErrors.name = "Please enter at least 2 characters.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please tell us what needs automating.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Please share a bit more detail so we can help.";
    }

    return nextErrors;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "packageChoice" ? { plan: value } : {}),
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const nextErrors = validate(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus(null);
      setStatusDetail("");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus("missing-config");
      setStatusDetail("Please add your EmailJS service, template, and public key to the environment variables.");
      return;
    }

    setSubmitting(true);
    setStatus(null);
    setStatusDetail("");

    const form = e.currentTarget;
    const templateParams = {
      from_name: formValues.name.trim(),
      from_email: formValues.email.trim(),
      business_type: formValues.businessType,
      source: formValues.source,
      message: formValues.message.trim(),
      selected_plan: formValues.plan || "Not specified",
      to_email: fixedRecipient,
    };

    try {
      await send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setFormValues(initialValues);
      setErrors({});
      form.reset();
    } catch (err) {
      console.error("EmailJS send error", err);
      const errorMessage = err instanceof Error ? err.message : "Unknown EmailJS error";
      setStatus("error");
      setStatusDetail(`EmailJS reported: ${errorMessage}. Please verify the service, template, and public key in your EmailJS dashboard.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* PART 1 — CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#061428] via-[#07111a] to-[#061428] p-10 text-center shadow-glow">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to Reclaim 20 Hours Per Week?</h2>
          <p className="mt-4 max-w-3xl mx-auto text-base leading-7 text-white/85">Book a free 30-minute AI Audit. We will identify exactly where your business is leaking time and money, and show you what we would automate.</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="#contact-form" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-black shadow hover:bg-orange-500">Book Your Free Audit</a>
          </div>

          <p className="mt-4 text-sm text-white/85">No sales pressure. No commitment. Just clarity.</p>

          <p className="mt-6 text-sm text-white/85">Prefer email? Reach us at <a href="mailto:social.zeninai@gmail.com" className="text-accent hover:underline">social.zeninai@gmail.com</a></p>
        </div>

        {/* PART 2 — Contact Form */}
        <div id="contact-form" className="mt-12 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-8 shadow-glow">
          <SectionHeading label="" title="Or Send Us a Message" subtitle="" />

          <form onSubmit={handleSubmit} className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]" htmlFor="name">Full Name</label>
              <input id="name" name="name" value={formValues.name} onChange={handleChange} className={`w-full rounded-lg border px-4 py-3 text-[color:var(--text-primary)] placeholder:text-[color:var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-accent ${errors.name ? "border-red-500" : "border-[color:var(--border-soft)] bg-[color:var(--bg-primary)]"}`} />
              {errors.name ? <p className="mt-2 text-sm text-red-400">{errors.name}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]" htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" value={formValues.email} onChange={handleChange} className={`w-full rounded-lg border px-4 py-3 text-[color:var(--text-primary)] placeholder:text-[color:var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-accent ${errors.email ? "border-red-500" : "border-[color:var(--border-soft)] bg-[color:var(--bg-primary)]"}`} />
              {errors.email ? <p className="mt-2 text-sm text-red-400">{errors.email}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]" htmlFor="businessType">Business Type</label>
              <select id="businessType" name="businessType" value={formValues.businessType} onChange={handleChange} className="w-full rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--bg-primary)] px-4 py-3 text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Real Estate</option>
                <option>E-Commerce</option>
                <option>Coaching/Consulting</option>
                <option>Service Business</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]" htmlFor="source">How did you find us?</label>
              <select id="source" name="source" value={formValues.source} onChange={handleChange} className="w-full rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--bg-primary)] px-4 py-3 text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-accent">
                <option>LinkedIn</option>
                <option>Google</option>
                <option>Referral</option>
                <option>Other</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]" htmlFor="packageChoice">Package</label>
              <select id="packageChoice" name="packageChoice" value={formValues.packageChoice} onChange={handleChange} className="w-full rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--bg-primary)] px-4 py-3 text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">Select a package</option>
                <option value="Starter Automation">Starter Automation</option>
                <option value="Growth Automation">Growth Automation</option>
                <option value="Scale Automation">Scale Automation</option>
                <option value="Custom Package">Custom Package</option>
              </select>
              <p className="mt-2 text-sm text-[color:var(--text-secondary)]">Choose a package or pick Custom Package and tell us what you need.</p>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]" htmlFor="message">What is your biggest time-waster right now?</label>
              <textarea id="message" name="message" rows={5} value={formValues.message} onChange={handleChange} className={`w-full rounded-lg border px-4 py-3 text-[color:var(--text-primary)] placeholder:text-[color:var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-accent ${errors.message ? "border-red-500" : "border-[color:var(--border-soft)] bg-[color:var(--bg-primary)]"}`} />
              {errors.message ? <p className="mt-2 text-sm text-red-400">{errors.message}</p> : null}
            </div>

            <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[color:var(--text-secondary)]">We’ll reply within 24 hours.</p>
              <button type="submit" disabled={submitting} className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70">
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>

          <div className="mt-4" aria-live="polite">
            {status === "success" && (
              <p className="rounded-md bg-green-900/60 p-3 text-sm text-green-300">Thanks! We will be in touch within 24 hours.</p>
            )}

            {status === "error" && (
              <div className="rounded-md bg-red-900/60 p-3 text-sm text-red-300">
                <p>Something went wrong. Please email us directly at {fixedRecipient}.</p>
                {statusDetail ? <p className="mt-2 text-xs text-red-200">{statusDetail}</p> : null}
              </div>
            )}

            {status === "missing-config" && (
              <div className="rounded-md bg-yellow-900/60 p-3 text-sm text-yellow-200">
                <p>Email sending is not configured. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your environment. Or email us at {fixedRecipient}.</p>
                {statusDetail ? <p className="mt-2 text-xs text-yellow-100">{statusDetail}</p> : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
