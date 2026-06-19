import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mb-8">
      {kicker ? (
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {kicker}
        </div>
      ) : null}
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>
      {desc ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function GroupTitle({ title, desc }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {desc ? <p className="mt-1 text-sm text-gray-600">{desc}</p> : null}
    </div>
  );
}

function ServiceCard({ title, description, badge, to }) {
  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {badge ? (
          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
      {to ? (
        <div className="mt-4 text-sm font-semibold text-indigo-700">
          Learn more →
        </div>
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {cardContent}
    </div>
  );
}

function DetailPageCard({ to, title, desc, cta }) {
  return (
    <Link
      to={to}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
        Detailed service page
      </div>
      <h2 className="mt-2 text-xl font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
      <div className="mt-4 text-sm font-semibold text-indigo-700">{cta} →</div>
    </Link>
  );
}

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Bedsun Tech Websites, Automation & IT Support"
        description="Explore Bedsun Tech services including small business websites, business automation, custom dashboards, Microsoft 365 setup, IT support, home Wi-Fi help, cameras, devices, and advanced infrastructure support in the Las Vegas area."
        path="/services"
      />

      <div>
        <SectionTitle
          kicker="Services"
          title="Technology services for homes and small businesses"
          desc="Bedsun Tech helps with both everyday technology problems and bigger business systems — from websites, automation, dashboards, and Microsoft 365 to Wi-Fi, devices, cameras, networks, and infrastructure support."
        />

        {/* Detailed service page navigation */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Explore detailed service pages
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              These pages go deeper into the main services people search for when they need help
              with websites, automation, small business IT, and personal technology support.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <DetailPageCard
              to="/small-business-website-design"
              title="Small Business Website Design"
              desc="Website design, redesigns, landing pages, contact forms, SEO metadata, analytics, Search Console setup, and clean deployment."
              cta="View website services"
            />

            <DetailPageCard
              to="/business-automation"
              title="Business Automation"
              desc="Workflow automation, custom dashboards, reporting tools, forms, IT operations automation, scripts, and internal business systems."
              cta="View automation services"
            />

            <DetailPageCard
              to="/ai-integration-small-business"
              title="AI Integration for Small Businesses"
              desc="Practical AI workflows for customer intake, lead follow-up, internal tools, document summaries, reporting, and business process cleanup."
              cta="View AI integration help"
            />

            <DetailPageCard
              to="/business-tech-ai-opportunity-scan"
              title="Business Tech & AI Opportunity Scan"
              desc="Review your website, forms, follow-up process, manual admin tasks, tools, and realistic AI or automation opportunities."
              cta="Request an opportunity scan"
            />

            <DetailPageCard
              to="/small-business-it-support"
              title="Small Business IT Support"
              desc="Microsoft 365, Google Workspace, business email, Wi-Fi, devices, printers, cameras, backups, documentation, and practical IT troubleshooting."
              cta="View IT support services"
            />

            <DetailPageCard
              to="/personal-tech-help"
              title="Personal Tech Help"
              desc="Email and password help, computers, phones, tablets, printers, Wi-Fi, cameras, smart devices, and personal technology cleanup."
              cta="View personal tech help"
            />

            <DetailPageCard
              to="/senior-tech-help"
              title="Senior Tech Help"
              desc="Patient technology help for seniors, retirees, adult children helping parents, and families who want everyday tech explained clearly."
              cta="View senior tech help"
            />

            <DetailPageCard
              to="/printer-setup-troubleshooting"
              title="Printer Setup & Troubleshooting"
              desc="Printer setup, offline printer fixes, wireless printer help, printing from phones and tablets, scanner setup, and home office printer support."
              cta="View printer help"
            />

            <DetailPageCard
              to="/wifi-setup-troubleshooting"
              title="Wi-Fi Setup & Troubleshooting"
              desc="Wi-Fi setup, weak signal, router help, dead zones, internet issues, smart TV connections, printer Wi-Fi problems, and home network support."
              cta="View Wi-Fi help"
            />

            <DetailPageCard
              to="/email-password-scam-help"
              title="Email, Password & Scam Safety Help"
              desc="Email setup, password resets, account recovery, two-factor authentication, suspicious emails, scam texts, and safer online account support."
              cta="View email and scam help"
            />

            <DetailPageCard
              to="/smart-tv-phone-tablet-setup"
              title="Smart TV, Phone & Tablet Setup Help"
              desc="Smart TV setup, iPhone and Android help, tablets, Roku, Fire Stick, Apple TV, streaming apps, app logins, and device syncing."
              cta="View device setup help"
            />
          </div>
        </section>

        {/* Business websites and automation */}
        <section className="mb-12">
          <GroupTitle
            title="Websites, Automation & Custom Business Tools"
            desc="For small businesses that need a better website, smoother workflows, cleaner data, or custom tools without hiring a full development team."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard
              badge="Growth Focus"
              title="Small Business Websites & Redesigns"
              description="Modern websites, landing pages, service pages, contact forms, SEO metadata, analytics setup, and clean deployment for small businesses that need to look professional online."
              to="/small-business-website-design"
            />

            <ServiceCard
              badge="High ROI"
              title="Business Automation & Workflow Improvements"
              description="Automate repetitive tasks, intake forms, email workflows, reporting steps, spreadsheet processes, IT operations, and manual business work that slows your team down."
              to="/business-automation"
            />

            <ServiceCard
              title="Custom Dashboards & Internal Tools"
              description="Build custom dashboards, admin panels, reporting views, job trackers, client portals, inventory tools, and database-backed business apps that fit how your business actually works."
              to="/business-automation"
            />

            <ServiceCard
              title="AI-Assisted Business Systems"
              description="Practical AI workflows for small businesses, including content drafting, document processing, reporting assistance, customer intake support, and internal productivity tools."
              to="/ai-integration-small-business"
            />

            <ServiceCard
              badge="Strategy First"
              title="Business Tech & AI Opportunity Scan"
              description="A practical review of your website, forms, follow-up, manual tasks, tech stack, and automation opportunities so you know what to fix first."
              to="/business-tech-ai-opportunity-scan"
            />
          </div>
        </section>

        {/* Small business IT */}
        <section className="mb-12">
          <GroupTitle
            title="Small Business IT Support"
            desc="Practical IT help for businesses that need a technical partner but do not need full-time internal IT staff."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard
              badge="Popular"
              title="Microsoft 365, Google Workspace & Business Email"
              description="Business email setup, domain/DNS help, Microsoft 365 or Google Workspace configuration, user onboarding, mailbox cleanup, account access, and basic security settings."
              to="/small-business-it-support"
            />

            <ServiceCard
              title="Office Technology Consulting"
              description="Support for workstations, printers, scanners, conference rooms, VoIP, POS-adjacent troubleshooting, monitors, UPS devices, and everyday office technology issues."
              to="/small-business-it-support"
            />

            <ServiceCard
              title="Business Wi-Fi, Network & Device Support"
              description="Wi-Fi troubleshooting, router/firewall guidance, device setup, network cleanup, remote access support, and practical recommendations for stable business connectivity."
              to="/small-business-it-support"
            />

            <ServiceCard
              title="Backups, Security Basics & Documentation"
              description="Review backup needs, account recovery options, password practices, device security, documentation, and simple improvements that reduce risk and confusion."
              to="/small-business-it-support"
            />
          </div>
        </section>

        {/* Personal technology help */}
        <section className="mb-12">
          <GroupTitle
            title="Personal Technology Help"
            desc="Patient, practical support for people who want their devices, accounts, Wi-Fi, cameras, and everyday technology to work without the confusion."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard
              badge="Popular"
              title="Senior Tech Help"
              description="Patient help for seniors and families with printers, Wi-Fi, phones, tablets, smart TVs, email, passwords, scam safety, and new device setup."
              to="/senior-tech-help"
            />

            <ServiceCard
              badge="Trust Builder"
              title="Email, Password & Scam Safety Help"
              description="Help with email setup, password resets, account recovery, two-factor authentication, suspicious emails, scam texts, and safer online account habits."
              to="/email-password-scam-help"
            />

            <ServiceCard
              title="Smart TV, Phone & Tablet Setup"
              description="Setup help for smart TVs, streaming devices, iPhones, Android phones, tablets, apps, logins, device syncing, and basic one-on-one lessons."
              to="/smart-tv-phone-tablet-setup"
            />

            <ServiceCard
              badge="Popular"
              title="Printer Setup & Troubleshooting"
              description="Help with offline printers, wireless printer setup, printing from phones and tablets, scanner setup, duplicate printers, and home office printer problems."
              to="/printer-setup-troubleshooting"
            />

            <ServiceCard
              badge="Popular"
              title="Home Wi-Fi & Smart Device Setup"
              description="Wi-Fi troubleshooting, router setup, dead zones, smart TV connections, printers, cameras, and home network support."
              to="/wifi-setup-troubleshooting"
            />

            <ServiceCard
              title="Personal Tech Cleanup"
              description="Review your current technology setup, simplify what you use, remove unnecessary confusion, organize accounts, and create a cleaner plan moving forward."
              to="/personal-tech-help"
            />
          </div>
        </section>

        {/* Infrastructure */}
        <section className="mb-12">
          <GroupTitle
            title="Infrastructure, Networking & Cloud"
            desc="Advanced IT experience for more technical environments, migrations, monitoring, and systems that need clean planning and careful execution."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard
              title="Network Infrastructure & Cabling"
              description="Structured cabling, MDF/IDF cleanup, patch panels, Cat6/fiber planning, camera network support, rack cleanup, and network closet standards."
            />

            <ServiceCard
              title="Systems & Server Administration"
              description="Active Directory, Group Policy, DNS, Windows/Linux servers, Hyper-V, VMware, migrations, permissions, patching, and system troubleshooting."
            />

            <ServiceCard
              title="Cloud & Virtual Workspaces"
              description="Azure, virtual machines, AVD, VNets, NSGs, backup strategy, hybrid networking, secure remote access, and cloud cost control."
            />

            <ServiceCard
              title="Monitoring & Scripting"
              description="Zabbix monitoring, SNMP discovery, dashboards, alerting, PowerShell, Bash, and Python automation for repeatable IT operations."
              to="/business-automation"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="mb-4">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Not sure which service fits?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Tell me what you’re trying to fix, build, automate, or clean up. I’ll help you
                  turn it into a clear plan with practical next steps.
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
      </div>
    </>
  );
}