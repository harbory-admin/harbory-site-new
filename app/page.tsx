'use client';

type Service = { title: string; tag: string; description: string; bullets: string[] };
type Industry = { name: string; blurb: string };

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img src="/Harbory.svg" alt="Harbory" className="h-10 md:h-12 w-auto" />
  </div>
);

/** WHAT WE BUILD — emphasize platform, apps, automation (dashboards as an output) */
const services: Service[] = [
  {
    title: "Data Platform & Pipelines",
    tag: "Build",
    description: "Reliable ingestion, models, and governance—foundations your business can trust.",
    bullets: [
      "Ingestion & ELT (Snowflake, dbt, Azure, GCP)",
      "Star/Snowflake modeling & semantic layers",
      "Performance, cost, and data quality checks",
    ],
  },
  {
    title: "Embedded & Internal Apps",
    tag: "Operate",
    description: "Decision tools inside the systems your teams already use.",
    bullets: [
      "Embedded portals for sales, retail, ecommerce",
      "Role-based access & multi-tenant UX",
      "Data apps for workflows and approvals",
    ],
  },
  {
    title: "Analytics for Decisions",
    tag: "Inform",
    description: "Dashboards, metrics, and alerts that drive action—not just views.",
    bullets: [
      "Executive KPI suites & financial reporting",
      "Self-serve analytics enablement",
      "Usage tracking & adoption playbooks",
    ],
  },
  {
    title: "AI & Intelligent Automation",
    tag: "Scale",
    description: "Copilots and automations that remove busywork and speed up operations.",
    bullets: [
      "LLM copilots for internal teams",
      "RPA for reporting & data QA",
      "Closed-loop actions via webhooks/APIs",
    ],
  },
  {
    title: "Advanced Analytics / Modeling",
    tag: "Predict",
    description: "Forecasting, propensity, and anomaly detection that inform decisions ahead of time.",
    bullets: [
      "Forecasting & demand planning",
      "Propensity & churn models",
      "Real-time signals & anomaly detection",
    ],
  },
  {
    title: "Governance & Strategy",
    tag: "Align",
    description: "Shared definitions, cadences, security, and a roadmap that sticks.",
    bullets: [
      "KPI frameworks & metric definitions",
      "Security, RLS, audits & SOPs",
      "Program governance & roadmapping",
    ],
  },
  {
    title: "Consumer Research",
    tag: "Understand",
    description: "Market & consumer research to validate products, markets, and messaging.",
    bullets: [
      "Questionnaire development & survey design",
      "Qual/quant studies & panel management",
      "Insights reporting & CX instrumentation",
    ],
  },
  {
    title: "Fractional Leadership",
    tag: "Lead",
    description: "Hands-on execution with seasoned analytics/product leadership.",
    bullets: [
      "Interim Head of Data/BI",
      "Project rescue & vendor management",
      "Team enablement & hiring support",
    ],
  },
];

/** INDUSTRIES — consolidated cannabis; gaming as professional tile */
const industries: Industry[] = [
  {
    name: "Sports academies",
    blurb: "Training capture, player development dashboards, talent pathway tracking.",
  },
  {
    name: "Cannabis (producers & retail)",
    blurb: "Sales/pricing tools, distribution analytics, and compliance-ready reporting.",
  },
  {
    name: "Medical clinics",
    blurb: "Patient flow dashboards, service mix optimization, revenue forecasting.",
  },
  {
    name: "Real estate brokerages",
    blurb: "Agent performance, pipeline visibility, and local market insights.",
  },
  {
    name: "Web3 studios",
    blurb: "On-chain dashboards, user cohort analytics, and treasury visibility.",
  },
  {
    name: "Gaming & engagement",
    blurb: "Player engagement metrics, retention funnels, monetization dashboards.",
  },
];

const SectionHeader = (
  { eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }
) => (
  <div className="max-w-3xl">
    {eyebrow && (
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
        {eyebrow}
      </p>
    )}
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-navy">
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-slate-600 leading-relaxed">{subtitle}</p>}
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-brand-navy/5">
    <div className="text-2xl font-semibold text-brand-navy">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-sand to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/65 border-b border-brand-navy/10">
        <div className="mx-auto max-w-7xl px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#services" className="text-slate-700 hover:text-brand-blue">Services</a>
              <a href="#industries" className="text-slate-700 hover:text-brand-blue">Industries</a>
              <a href="#contact" className="text-slate-700 hover:text-brand-blue">Contact</a>
              <a
                href="https://calendar.google.com/"
                className="rounded-xl border border-brand-blue/30 px-3 py-1.5 text-brand-navy hover:border-brand-blue hover:text-brand-blue"
              >
                Book a call
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-10 md:pt-16 md:pb-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-brand-navy">
                Data. Apps. Automation. <span className="underline decoration-brand-coral underline-offset-8 decoration-4">Done right</span>.
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Harbory designs <strong>data foundations</strong>, embeds <strong>analytics</strong> into daily tools, and builds <strong>AI automations</strong> that remove busywork and unlock growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://calendar.google.com/"
                  className="inline-flex items-center rounded-xl bg-brand-coral px-4 py-2.5 text-white shadow-card hover:opacity-95"
                >
                  Book a call
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-xl border border-brand-blue/30 px-4 py-2.5 text-brand-navy hover:border-brand-blue hover:text-brand-blue"
                >
                  What we build
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
                <Stat value="10x" label="Faster reporting cycles" />
                <Stat value="99.9%" label="Pipeline reliability" />
                <Stat value="↑ ROI" label="Adoption & usage focus" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-[radial-gradient(600px_circle_at_70%_20%,rgba(30,143,255,0.15),transparent)]" />
              <div className="rounded-3xl border border-brand-navy/10 bg-white p-4 shadow-card">
                <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-brand-sand via-white to-brand-seafoam/20 grid place-items-center text-slate-500">
                  <span className="text-sm">App preview / Dashboard</span>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  Embedded analytics, role-based access, exports, and AI assistants—built for real-world operations.
                </div>
              </div>
            </div>
          </div>
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
            <article
              key={s.title}
              className="group rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="rounded-lg bg-brand-blue/10 px-2 py-1 text-xs font-medium text-brand-blue ring-1 ring-brand-blue/20">
                  {s.tag}
                </span>
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

      {/* How we work */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <SectionHeader
          eyebrow="How we work"
          title="Architect → Build → Operate"
          subtitle="We start with outcomes, design the simplest path, and ship value in weeks. Then we operate it with you: SLOs for data, clear ownership, and roadmap-driven improvements."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card">
            <div className="font-semibold text-brand-navy">Architect</div>
            <p className="mt-1 text-sm text-slate-600">Define metrics, model data, and choose a lean, durable stack aligned to outcomes.</p>
          </div>
          <div className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card">
            <div className="font-semibold text-brand-navy">Build</div>
            <p className="mt-1 text-sm text-slate-600">Pipelines, embedded apps, decision analytics, and AI automations that ship.</p>
          </div>
          <div className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card">
            <div className="font-semibold text-brand-navy">Operate</div>
            <p className="mt-1 text-sm text-slate-600">Reliability & adoption: usage tracking, SLAs, and quarterly roadmap iterations.</p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeader
          eyebrow="Industries"
          title="Industries we’ve delivered in"
          subtitle="We’ve built platforms, apps, analytics, and automation across these spaces. The shape varies by industry—the goal is constant: faster decisions and measurable impact."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.name} className="rounded-2xl border border-brand-navy/15 bg-white p-4 shadow-card">
              <div className="font-semibold text-brand-navy">{i.name}</div>
              <div className="mt-1 text-sm text-slate-600">{i.blurb}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-12 md:pb-16">
        <div className="rounded-3xl border border-brand-navy/10 bg-white p-8 md:p-10 shadow-card">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-brand-navy">
                Let’s solve your hardest data problems.
              </h3>
              <p className="mt-2 text-slate-700">
                Broken pipelines, stalled adoption, or new automation opportunities—we’ll meet you where you are and show value in weeks, not months. We act as your <strong>technology partner</strong>, not just a vendor.
              </p>
            </div>
            <form className="rounded-2xl border border-brand-navy/10 p-4" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-sm font-medium text-brand-navy">Your email</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="mt-1 w-full rounded-xl border border-brand-navy/15 px-3 py-2 outline-none focus:border-brand-blue"
              />
              <label className="mt-4 block text-sm font-medium text-brand-navy">What do you need?</label>
              <textarea
                rows={3}
                placeholder="Briefly describe your use case…"
                className="mt-1 w-full rounded-xl border border-brand-navy/15 px-3 py-2 outline-none focus:border-brand-blue"
              />
              <div className="mt-4 flex gap-3">
                <button className="rounded-xl bg-brand-coral px-4 py-2.5 text-white shadow-card hover:opacity-95" type="submit">
                  Send
                </button>
                <a
                  href="https://calendar.google.com/"
                  className="rounded-xl border border-brand-blue/30 px-4 py-2.5 text-brand-navy hover:border-brand-blue hover:text-brand-blue"
                >
                  Book a call
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-navy/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <Logo />
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
