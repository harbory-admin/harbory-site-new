'use client';
import * as React from "react";
import { useEffect } from "react";


type Service = { title: string; tag: string; description: string; bullets: string[] };
type Industry = {
  name: string;
  blurb: string;
  details?: string[]; // NEW: bullets for the modal
};

type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

const Logo = ({ className = "", size = "xl" }: { className?: string; size?: LogoSize }) => {
  const sizes: Record<LogoSize, string> = {
    sm: "h-10 md:h-12",
    md: "h-12 md:h-14",
    lg: "h-16 md:h-20",
    xl: "h-20 md:h-24", // NEW
  };
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/Harbory.svg" alt="Harbory" className={`${sizes[size]} w-auto`} />
    </div>
  );
};

const services: Service[] = [
  { title: "Data Platform & Pipelines", tag: "Build", description: "Reliable ingestion, models, and governance—foundations your business can trust.", bullets: ["Ingestion & ELT (Snowflake, dbt, Azure, GCP)", "Star/Snowflake modeling & semantic layers", "Performance, cost, and data quality checks"] },
  { title: "Embedded & Internal Apps", tag: "Operate", description: "Decision tools inside the systems your teams already use.", bullets: ["Embedded portals for sales, retail, ecommerce", "Role-based access & multi-tenant UX", "Data apps for workflows and approvals"] },
  { title: "Analytics for Decisions", tag: "Inform", description: "Dashboards, metrics, and alerts that drive action—not just views.", bullets: ["Executive KPI suites & financial reporting", "Self-serve analytics enablement", "Usage tracking & adoption playbooks"] },
  { title: "AI & Intelligent Automation", tag: "Scale", description: "Copilots and automations that remove busywork and speed up operations.", bullets: ["LLM copilots for internal teams", "RPA for reporting & data QA", "Closed-loop actions via webhooks/APIs"] },
  { title: "Advanced Analytics / Modeling", tag: "Predict", description: "Forecasting, propensity, and anomaly detection that inform decisions ahead of time.", bullets: ["Forecasting & demand planning", "Propensity & churn models", "Real-time signals & anomaly detection"] },
  { title: "Governance & Strategy", tag: "Align", description: "Shared definitions, cadences, security, and a roadmap that sticks.", bullets: ["KPI frameworks & metric definitions", "Security, RLS, audits & SOPs", "Program governance & roadmapping"] },
  { title: "Consumer Research", tag: "Understand", description: "Market & consumer research to validate products, markets, and messaging.", bullets: ["Questionnaire development & survey design", "Qual/quant studies & panel management", "Insights reporting & CX instrumentation"] },
  { title: "Fractional Leadership", tag: "Lead", description: "Hands-on execution with seasoned analytics/product leadership.", bullets: ["Interim Head of Data/BI", "Project rescue & vendor management", "Team enablement & hiring support"] },
];

const industries: Industry[] = [
  {
    name: "Sports academies",
    blurb:
      "Helped academies and clubs build online presence and platforms to manage player registration, collect payments & subscriptions, and track player development.",
    details: [
      "Player registration & payments portal (subscriptions, teams, age groups).",
      "Training capture & development tracking with role-based access.",
      "Lightweight websites and portals for clubs/academies.",
    ],
  },
  {
    name: "Cannabis (producers & retail)",
    blurb:
      "Delivered pricing tools, demand planning support, operational reporting, ERP & seed-to-sale compliance, and distribution analytics to run retail and production with confidence.",
    details: [
      "Demand planning & inventory visibility (by SKU, store, region).",
      "Operational reporting: sales velocity, promo lifts, staffing & labor.",
      "ERP & seed-to-sale compliance dashboards (batch/lot traceability).",
      "Distributor & retail analytics (pricing, margin, basket).",
    ],
  },
  {
    name: "Medical clinics",
    blurb:
      "Automated patient-flow dashboards, reduced admin time by ~30%, and supported operators with real-time scheduling and utilization insights.",
    details: [
      "Patient flow & wait-time analytics; provider utilization.",
      "Revenue mix, payer mix, visit types; forecasting.",
      "Automation of recurring reports & compliance packs.",
    ],
  },
  {
    name: "Real estate brokerages",
    blurb:
      "Built agent performance & market insights dashboards, plus an AI solution that transcribes calls, uploads accurate conversation notes, creates action items, and logs interactions automatically in the CRM.",
    details: [
      "Agent & team performance: listings, contracts, close rates, pipeline.",
      "Market insights: comps, DOM, absorption, price trends.",
      "AI call transcription → CRM notes, action items & next steps auto-logged.",
    ],
  },
  {
    name: "Web3 studios",
    blurb:
      "Provided data engineering to hook up automated feeds (Transpose and others) and built platforms to commercialize embedded Web3 analytics—treasury, cohort, and on-chain activity dashboards.",
    details: [
      "Automated on-chain ETL from Transpose & other sources.",
      "Treasury, cohort & protocol health dashboards.",
      "Embeddable analytics products for partners/clients.",
    ],
  },
  {
    name: "Gaming & engagement",
    blurb:
      "Delivered telemetry analytics for WAU/MAU, retention funnels, monetization dashboards, and player engagement reporting across titles and modes.",
    details: [
      "Telemetry pipelines, event schemas & QA.",
      "WAU/MAU/DAU, session metrics, retention cohorts.",
      "Economy & monetization analytics, A/B test reads.",
    ],
  },
];


const SectionHeader = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) => (
  <div className="max-w-3xl">
    {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">{eyebrow}</p>}
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-navy">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600 leading-relaxed">{subtitle}</p>}
  </div>
);

const Stat = ({ value, label, icon }: { value: string; label: string; icon: string }) => (
  <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-brand-navy/5 text-left">
    <div className="flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      <div className="text-2xl font-semibold text-brand-navy">{value}</div>
    </div>
    <div className="mt-1 text-slate-600">{label}</div>
  </div>
);

function Modal({
  open,
  title,
  blurb,
  bullets = [],
  onClose,
}: {
  open: boolean;
  title: string;
  blurb: string;
  bullets?: string[];
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} details`}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-navy/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-2 py-1 text-slate-600 hover:bg-slate-50"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="mt-2 text-slate-700">{blurb}</p>
        {bullets.length > 0 && (
          <ul className="mt-4 space-y-2 text-slate-700">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


export default function Page() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-sand to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/65 border-b border-brand-navy/10">
        <div className="mx-auto max-w-7xl px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Logo size="xl" />
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#services" className="text-slate-700 hover:text-brand-blue">Services</a>
              <a href="#industries" className="text-slate-700 hover:text-brand-blue">Industries</a>
              <a href="#contact" className="text-slate-700 hover:text-brand-blue">Contact</a>
              <a href="https://calendar.app.google/8NwFCXzS6YK8c3WF8" className="rounded-xl border border-brand-blue/30 px-3 py-1.5 text-brand-navy hover:border-brand-blue hover:text-brand-blue">Book a call</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-10 md:pt-16 md:pb-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-brand-navy">
              Data. Apps. Automation.
              <span className="block underline decoration-brand-coral underline-offset-8 decoration-4">
              Done right
              </span>.
              </h1>

              <p className="mt-4 text-lg text-slate-700">
                Not another BI platform. We design <strong>data foundations</strong>, embed <strong>analytics</strong> into daily tools, and build <strong>AI automations</strong> that remove busywork and unlock growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://calendar.app.google/8NwFCXzS6YK8c3WF8" className="inline-flex items-center rounded-xl bg-brand-coral px-4 py-2.5 text-white shadow-card hover:opacity-95">Book a call</a>
                <a href="#services" className="inline-flex items-center rounded-xl border border-brand-blue/30 px-4 py-2.5 text-brand-navy hover:border-brand-blue hover:text-brand-blue">What we build</a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-[radial-gradient(600px_circle_at_70%_20%,rgba(30,143,255,0.15),transparent)]" />
              <div className="rounded-3xl border border-brand-navy/10 bg-white p-4 shadow-card">
                <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-brand-sand via-white to-brand-seafoam/20 grid place-items-center text-slate-500">
                  <span className="text-sm">App preview / Dashboard</span>
                </div>
                <div className="mt-4 text-sm text-slate-600">Embedded analytics, role-based access, exports, and AI assistants—built for real-world operations.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* OUR IMPACT — updated with flex layout for wider tiles */}
<section className="bg-white/70 border-y border-brand-navy/10">
  <div className="mx-auto max-w-7xl px-4 py-8">
    <div className="mx-auto max-w-5xl text-center">
      <h3 className="text-base font-semibold text-brand-navy">Our Impact</h3>
      <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center">
        <Stat icon="⏱" value="10x" label="Faster reporting cycles (weeks → hours)" />
        <Stat icon="🛡" value="99.9%" label="Pipeline reliability with audits & alerts" />
        <Stat icon="📈" value="↑ ROI" label="Adoption-first analytics teams actually use" />
      </div>
    </div>
  </div>
</section>


      {/* Bridging band */}
      <section className="bg-brand-sand/60">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center">
          <p className="text-lg text-brand-navy">
            We build more than dashboards — we build <span className="font-semibold">systems that last</span>.
          </p>
        </div>
      </section>

      {/* What we build */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeader
          eyebrow="What we build"
          title="Platforms, apps, analytics, and automation"
          subtitle="We ship the whole stack—from pipelines and models, to embedded apps and AI-powered automation. Dashboards are an output, not the product."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="rounded-lg bg-brand-blue/10 px-2 py-1 text-xs font-medium text-brand-blue ring-1 ring-brand-blue/20">{s.tag}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-slate-700">{s.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

{/* Industries grid — clickable tiles */}
<div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {industries.map((i, idx) => (
    <button
      key={i.name}
      type="button"
      onClick={() => setOpenIdx(idx)}
      className="text-left rounded-2xl border border-brand-navy/15 bg-white p-4 shadow-card transition
                 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
      aria-haspopup="dialog"
      aria-controls="industry-modal"
    >
      <div className="font-semibold text-brand-navy">{i.name}</div>
      <div className="mt-1 text-sm text-slate-600">{i.blurb}</div>
    </button>
  ))}
</div>

{/* Modal renderer — place right below the grid */}
<Modal
  open={openIdx !== null}
  title={openIdx !== null ? industries[openIdx].name : ""}
  blurb={openIdx !== null ? industries[openIdx].blurb : ""}
  bullets={openIdx !== null ? industries[openIdx].details ?? [] : []}
  onClose={() => setOpenIdx(null)}
/>


      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-12 md:pb-16">
        <div className="rounded-3xl border border-brand-navy/10 bg-white p-8 md:p-10 shadow-card">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-brand-navy">Let’s solve your hardest data problems.</h3>
              <p className="mt-2 text-slate-700">Broken pipelines, stalled adoption, or new automation opportunities—we’ll meet you where you are and show value in weeks, not months. We act as your <strong>technology partner</strong>, not just a vendor.</p>
            </div>
            <form className="rounded-2xl border border-brand-navy/10 p-4" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-sm font-medium text-brand-navy">Your email</label>
              <input type="email" required placeholder="you@company.com" className="mt-1 w-full rounded-xl border border-brand-navy/15 px-3 py-2 outline-none focus:border-brand-blue" />
              <label className="mt-4 block text-sm font-medium text-brand-navy">What do you need?</label>
              <textarea rows={3} placeholder="Briefly describe your use case…" className="mt-1 w-full rounded-xl border border-brand-navy/15 px-3 py-2 outline-none focus:border-brand-blue" />
              <div className="mt-4 flex gap-3">
                <button className="rounded-xl bg-brand-coral px-4 py-2.5 text-white shadow-card hover:opacity-95" type="submit">Send</button>
                <a href="https://calendar.app.google/8NwFCXzS6YK8c3WF8" className="rounded-xl border border-brand-blue/30 px-4 py-2.5 text-brand-navy hover:border-brand-blue hover:text-brand-blue">Book a call</a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-navy/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <Logo size="md" />
            <div className="text-sm text-slate-600">© {year} Harbory Inc. All rights reserved.</div>
            <div className="flex gap-4 text-sm">
              <a href="#services" className="hover:text-brand-blue">Services</a>
              <a href="#industries" className="hover:text-brand-blue">Industries</a>
              <a href="#contact" className="hover:text-brand-blue">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
