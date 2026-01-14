import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(79,70,229,0.18),transparent_60%),radial-gradient(50rem_30rem_at_10%_20%,rgba(245,158,11,0.14),transparent_55%)]">
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="flex flex-wrap gap-2">
              <Badge>Enterprise + Small Business</Badge>
              <Badge>Azure • Hyper-V • AD/GPO</Badge>
              <Badge>Zabbix • Meraki • Automation</Badge>
            </div>

            <h1 className="mt-6 text-left text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Reliable IT that scales —
              <span className="text-indigo-700"> without the fluff.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-left text-lg leading-relaxed text-gray-700">
              I help homes and businesses build secure networks, stable systems, and clean cloud
              environments. From fixing “it’s broken again” problems to designing infrastructure
              that just works.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Book a consult
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
                <div className="text-2xl font-bold text-gray-900">Automation</div>
                <div className="text-sm text-gray-600">PowerShell + Python</div>
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
                  Network cleanup: Wi-Fi performance, VLANs, firewall rules, QoS
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-indigo-600" />
                  Server & identity: AD, GPOs, permissions, backups, patching
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-indigo-600" />
                  Cloud: Azure design, cost control, AVD, secure remote access
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-indigo-600" />
                  Monitoring: Zabbix dashboards, alerting, SNMP discovery
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
                  You tell me what’s broken (or what you’re building). I’ll map the quickest,
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
            title="Practical IT help, delivered cleanly"
            desc="I focus on outcomes: stability, security, and speed — with clear communication and documentation."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="Business IT & Support"
              desc="Workstations, Microsoft 365, onboarding/offboarding, printers, backups, and everyday issues — fixed for good."
              to="/services"
              cta="See support services"
            />
            <Card
              title="Networks & Security"
              desc="Wi-Fi reliability, segmentation/VLANs, firewall hardening, VPN, monitoring, and incident response readiness."
              to="/services"
              cta="See network services"
            />
            <Card
              title="Servers, Virtualization, Cloud"
              desc="Hyper-V, Windows Server, Azure design, AVD, automation, and cost control — built to scale."
              to="/services"
              cta="See infrastructure services"
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
              title="Azure Virtual Desktop rollout"
              desc="Session host standardization, golden image workflow, and clean app deployment for consistent end-user experience."
              to="/projects"
              cta="View projects"
            />
            <Card
              title="Zabbix monitoring expansion"
              desc="Automated discovery + alerting for network devices and site assets, improving visibility and reducing firefighting."
              to="/projects"
              cta="View monitoring work"
            />
            <Card
              title="Dockerized analytics platform"
              desc="Built Postgres-backed dashboards and ingestion pipelines with a focus on reliability, repeatable deployments, and backups."
              to="/projects"
              cta="View platform work"
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
                I implement changes safely: backups, rollback paths, testing, and documentation.
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
                You get clean configs, notes, and next steps so the fix lasts and the system scales.
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
                  I’ll respond with a quick plan of attack and options that match your budget.
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
  );
}
