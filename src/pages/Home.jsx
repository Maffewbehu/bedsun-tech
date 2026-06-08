import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Card({ title, desc, to, cta = "Learn more" }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
      {to ? (
        <Link
          to={to}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
        >
          {cta} <span className="transition group-hover:translate-x-0.5">→</span>
        </Link>
      ) : null}
    </div>
  );
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mb-6">
      {kicker ? (
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Bedsun Tech | Websites, Automation & IT Support in Las Vegas"
        description="Bedsun Tech helps homes and small businesses with websites, automation, custom business tools, IT support, Wi-Fi, Microsoft 365, cameras, and practical technology systems in the Las Vegas area."
        path="/"
      />

      <SchemaMarkup />

      <div className="min-h-screen bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(79,70,229,0.18),transparent_60%),radial-gradient(50rem_30rem_at_10%_20%,rgba(245,158,11,0.14),transparent_55%)]">
        <main className="mx-auto max-w-6xl px-6 pb-20 pt-8">
          {/* HERO */}
          <section className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Badge>Websites & Automation</Badge>
                <Badge>Small Business IT</Badge>
                <Badge>Personal Tech Help</Badge>
              </div>

              <h1 className="mt-6 text-left text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Technology help for everyday problems.
                <span className="text-indigo-700">
                  {" "}
                  Custom systems for growing businesses.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-left text-lg leading-relaxed text-gray-700">
                Bedsun Tech helps homes and small businesses simplify technology, improve their
                online presence, and build better systems — from Wi-Fi, devices, accounts, and
                cameras to websites, dashboards, automation, and custom business tools.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                >
                  Start a project
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  See recent work
                </Link>
                <Link
                  to="/services"
                  className="inline-flex justify-center px-2 py-3 text-sm font-semibold text-gray-700 hover:text-gray-900"
                >
                  Browse services →
                </Link>
              </div>

              {/* Quick stats / trust signals */}
              <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-white/70 p-5 text-left shadow-sm backdrop-blur sm:grid-cols-3">
                <div>
                  <div className="text-2xl font-bold text-gray-900">17+</div>
                  <div className="text-sm text-gray-600">Years IT experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">On-site + Remote</div>
                  <div className="text-sm text-gray-600">Flexible delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Build + Support</div>
                  <div className="text-sm text-gray-600">Web, automation, and IT</div>
                </div>
              </div>
            </div>

            {/* Right side highlight card */}
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-900">
                    What I can help with
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    Fast wins
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-indigo-600" />
                    Websites and redesigns that clearly explain what your business does
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-indigo-600" />
                    Business automation, dashboards, forms, reporting, and custom tools
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-indigo-600" />
                    Small business IT: email, Microsoft 365, domains, Wi-Fi, and devices
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-indigo-600" />
                    Personal tech help: accounts, passwords, cameras, printers, and home devices
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Typical first step
                  </div>
                  <div className="mt-1 text-sm font-semibold text-gray-900">
                    20–30 minute discovery call
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    You tell me what you’re trying to fix or build. I’ll map the quickest,
                    cleanest path forward.
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex flex-1 justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                  >
                    Start a conversation
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex flex-1 justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                  >
                    View services
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES PREVIEW */}
          <section className="mt-16">
            <SectionTitle
              kicker="Services"
              title="Websites, automation, IT support, and personal tech help"
              desc="I focus on practical outcomes: clearer websites, smoother workflows, stable systems, and technology that is easier to understand and manage."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <Card
                title="Websites & Redesigns"
                desc="Modern websites, landing pages, contact forms, SEO metadata, analytics setup, and clean deployment for small businesses."
                to="/services"
                cta="See website services"
              />
              <Card
                title="Business Automation & Custom Tools"
                desc="Dashboards, forms, workflows, reporting tools, internal apps, and AI-assisted processes built around how your business actually works."
                to="/services"
                cta="See automation services"
              />
              <Card
                title="IT Support for Homes & Businesses"
                desc="Microsoft 365, email, domains, Wi-Fi, devices, cameras, printers, account cleanup, troubleshooting, and practical technology support."
                to="/services"
                cta="See support services"
              />
            </div>
          </section>

          {/* FEATURED PROJECTS */}
          <section className="mt-16">
            <SectionTitle
              kicker="Featured work"
              title="Recent builds & real-world fixes"
              desc="Short write-ups with what I did, why it mattered, and what changed after."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <Card
                title="Custom analytics dashboard"
                desc="Built a data-driven dashboard with ingestion workflows, reporting views, and repeatable deployment practices."
                to="/projects"
                cta="View platform work"
              />
              <Card
                title="React website deployment"
                desc="Designed and deployed a modern React website with clean routing, responsive layout, and cloud hosting."
                to="/projects"
                cta="View web work"
              />
              <Card
                title="Zabbix monitoring expansion"
                desc="Automated discovery and alerting for network devices and site assets, improving visibility and reducing firefighting."
                to="/projects"
                cta="View monitoring work"
              />
            </div>
          </section>

          {/* HOW I WORK */}
          <section className="mt-16">
            <SectionTitle
              kicker="Process"
              title="A simple, reliable way to get things done"
              desc="No mystery, no chaos — just a clear plan and clean execution."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Step 1
                </div>
                <div className="mt-2 text-lg font-semibold text-gray-900">
                  Diagnose & align
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  We clarify the goal, current pain points, constraints, and what “done” looks like.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Step 2
                </div>
                <div className="mt-2 text-lg font-semibold text-gray-900">
                  Execute with guardrails
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  I implement changes safely with backups, rollback paths, testing, and clear
                  documentation.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Step 3
                </div>
                <div className="mt-2 text-lg font-semibold text-gray-900">
                  Stabilize & handoff
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  You get clean notes, next steps, and support options so the fix lasts and the
                  system keeps improving.
                </p>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="mt-16">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="grid gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    Tell me what you’re trying to fix or build.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Whether it’s a website, automation idea, business system, or everyday tech
                    problem, I’ll help you turn it into a clear plan of attack.
                  </p>
                </div>
                <div className="md:col-span-4 md:flex md:justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
                  >
                    Contact Bedsun Tech
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}