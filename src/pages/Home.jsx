import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/75 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function AudienceCard({ label, title, desc, services, to, cta, featured = false }) {
  return (
    <div
      className={[
        "group flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        featured ? "border-indigo-200 ring-1 ring-indigo-100" : "border-gray-200",
      ].join(" ")}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </div>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{desc}</p>

      <ul className="mt-5 grid gap-2 text-sm text-gray-700 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {services.map((service) => (
          <li key={service} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
            <span>{service}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1" />

      <Link
        to={to}
        className={[
          "inline-flex justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-sm transition",
          featured
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
        ].join(" ")}
      >
        {cta} <span className="ml-2 transition group-hover:translate-x-0.5">→</span>
      </Link>
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

function SupportCard({ title, desc, to, cta }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
      <Link
        to={to}
        className="mt-4 inline-flex text-sm font-semibold text-indigo-700 hover:text-indigo-800"
      >
        {cta} →
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Bedsun Tech | Personal Tech Help, Websites, Automation & AI in Las Vegas"
        description="Bedsun Tech helps Las Vegas homes with patient personal tech support and helps small businesses with websites, automation, AI workflows, Microsoft 365, Wi-Fi, and practical IT systems."
        path="/"
      />

      <div className="min-h-screen bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(79,70,229,0.18),transparent_60%),radial-gradient(50rem_30rem_at_10%_20%,rgba(245,158,11,0.14),transparent_55%)]">
        <main className="mx-auto max-w-6xl px-6 pb-20 pt-8">
          {/* HERO */}
          <section className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Badge>Patient local tech help</Badge>
                <Badge>Small business websites</Badge>
                <Badge>Practical AI + automation</Badge>
              </div>

              <h1 className="mt-6 text-left text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Technology help that makes sense.
                <span className="text-indigo-700"> For your home or your business.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-left text-lg leading-relaxed text-gray-700">
                Bedsun Tech helps everyday people fix frustrating technology problems and helps
                small businesses build cleaner websites, workflows, automations, and AI-assisted
                systems that save time.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Link
                  to="/personal-tech-help"
                  className="inline-flex justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                >
                  Get Personal Tech Help
                </Link>
                <Link
                  to="/services"
                  className="inline-flex justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  Get Business Tech Help
                </Link>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Local Las Vegas support for printers, Wi-Fi, phones, smart TVs, websites,
                automation, Microsoft 365, forms, dashboards, and practical AI workflows.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Best first step
                    </div>
                    <div className="mt-1 text-lg font-bold text-gray-900">
                      Choose the path that fits you
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    Simple start
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-900">
                      Need help at home?
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Get patient help with devices, accounts, printers, Wi-Fi, email, passwords,
                      scam concerns, cameras, and everyday tech issues.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-900">
                      Need help with your business?
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Improve your website, forms, customer follow-up, Microsoft or Google setup,
                      reporting, automation, and practical AI workflows.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 border-t border-gray-200 pt-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">17+</div>
                    <div className="text-sm text-gray-600">Years IT experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Local</div>
                    <div className="text-sm text-gray-600">Las Vegas support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Plain English</div>
                    <div className="text-sm text-gray-600">No confusing jargon</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AUDIENCE SPLIT */}
          <section className="mt-16">
            <SectionTitle
              kicker="Start here"
              title="Which kind of help do you need?"
              desc="Bedsun Tech serves two different audiences, so the homepage now makes the choice clear: personal tech help at home or business technology support."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <AudienceCard
                label="Personal Tech Help"
                title="Need help at home?"
                desc="Patient, local technology help for people who want their devices, accounts, internet, and everyday tech to work without frustration. Great for seniors, families, and anyone who does not want to figure it out alone."
                services={[
                  "Printer setup and offline printer issues",
                  "Wi-Fi, router, and internet troubleshooting",
                  "Phones, tablets, smart TVs, and streaming apps",
                  "Email, passwords, account recovery, and scam safety",
                ]}
                to="/personal-tech-help"
                cta="Schedule Tech Help"
                featured
              />

              <AudienceCard
                label="Business Tech + AI"
                title="Need help with your business?"
                desc="Practical websites, automation, IT support, and AI workflows for small businesses that want cleaner systems, better follow-up, and less manual work."
                services={[
                  "Website help, redesigns, forms, and SEO basics",
                  "Automation for repetitive admin tasks",
                  "Microsoft 365, Google Workspace, domains, and email",
                  "Dashboards, internal tools, and practical AI workflows",
                ]}
                to="/business-tech-ai-opportunity-scan"
                cta="Request an Opportunity Scan"
              />
            </div>
          </section>

          {/* SERVICES PREVIEW */}
          <section className="mt-16">
            <SectionTitle
              kicker="Popular services"
              title="Practical technology support without the confusion"
              desc="The goal is not to make technology sound complicated. The goal is to fix what is broken, clean up what is messy, and build systems that are easier to use."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <SupportCard
                title="Personal Tech Help"
                desc="Friendly help with printers, Wi-Fi, smart TVs, phones, tablets, email, passwords, photos, cameras, and online account problems."
                to="/personal-tech-help"
                cta="View personal tech help"
              />
              <SupportCard
                title="Senior Tech Help"
                desc="Patient help for seniors and families with devices, passwords, smart TVs, scam safety, printers, Wi-Fi, and simple tech lessons."
                to="/senior-tech-help"
                cta="View senior tech help"
              />
              <SupportCard
                title="Printer Setup & Troubleshooting"
                desc="Help with offline printers, wireless printer setup, printing from phones and tablets, scanner setup, and home office printer problems."
                to="/printer-setup-troubleshooting"
                cta="View printer help"
              />
              <SupportCard
                title="Wi-Fi Setup & Troubleshooting"
                desc="Help with weak Wi-Fi, router setup, dead zones, internet issues, smart TV connections, printers, cameras, and home network problems."
                to="/wifi-setup-troubleshooting"
                cta="View Wi-Fi help"
              />
              <SupportCard
                title="Email, Password & Scam Safety"
                desc="Patient help with email setup, password resets, account recovery, suspicious emails, scam texts, two-factor authentication, and safer online accounts."
                to="/email-password-scam-help"
                cta="View email and scam help"
              />
              <SupportCard
                title="Smart TV, Phone & Tablet Setup"
                desc="Help setting up smart TVs, Roku, Fire Stick, Apple TV, iPhones, Android phones, tablets, streaming apps, app logins, and device syncing."
                to="/smart-tv-phone-tablet-setup"
                cta="View device setup help"
              />
              <SupportCard
                title="Websites & Business Systems"
                desc="Small business websites, redesigns, landing pages, contact forms, SEO foundations, analytics, hosting guidance, and cleaner digital systems."
                to="/small-business-website-design"
                cta="View website services"
              />
              <SupportCard
                title="Automation & AI Workflows"
                desc="Business automation, custom dashboards, form follow-up, reporting tools, scripts, and realistic AI workflows built around your process."
                to="/business-automation"
                cta="View automation services"
              />
              <SupportCard
                title="AI Integration for Small Businesses"
                desc="Practical AI help for customer intake, follow-up, internal tools, document summaries, reporting assistance, and business workflow improvements."
                to="/ai-integration-small-business"
                cta="View AI integration help"
              />
              <SupportCard
                title="Business Tech & AI Opportunity Scan"
                desc="Review your website, forms, follow-up process, manual admin tasks, tech stack, and realistic AI or automation opportunities."
                to="/business-tech-ai-opportunity-scan"
                cta="Request an opportunity scan"
              />
            </div>
          </section>

          {/* TRUST SECTION */}
          <section className="mt-16">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="grid gap-8 md:grid-cols-12 md:items-start">
                <div className="md:col-span-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Why Bedsun Tech
                  </div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Local help with an engineer’s background and a patient approach.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Whether you are trying to connect a printer or build a smarter workflow for
                    your business, the experience should feel clear, honest, and useful.
                  </p>
                </div>

                <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-900">Plain-English guidance</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      You get simple explanations, realistic options, and clear next steps.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-900">Practical fixes first</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      The focus is on solving the problem, not selling unnecessary complexity.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-900">Home + business support</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      One trusted resource for everyday tech issues and small business systems.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-900">Built to improve over time</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      Documentation, clean handoff, and future improvement paths are part of the work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="mt-16">
            <div className="rounded-3xl border border-gray-200 bg-gray-900 p-8 text-white shadow-sm">
              <div className="grid gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-bold tracking-tight">
                    Tell me what you are trying to fix or build.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    From home printer problems to business automation ideas, Bedsun Tech can help
                    turn the issue into a clear next step.
                  </p>
                </div>
                <div className="grid gap-3 md:col-span-4">
                  <Link
                    to="/personal-tech-help"
                    className="inline-flex w-full justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                  >
                    Get Personal Tech Help
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex w-full justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
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
