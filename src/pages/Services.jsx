import { Link } from "react-router-dom";

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

function ServiceCard({ title, description, badge }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {badge ? (
          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div>
      <SectionTitle
        kicker="Services"
        title="What I can do for your home or business"
        desc="From quick fixes to full builds — I focus on stability, security, and clean execution with documentation."
      />

      {/* Enterprise */}
      <section className="mb-12">
        <GroupTitle
          title="Enterprise IT & Infrastructure"
          desc="Design, standardization, and implementation for serious environments."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <ServiceCard
            badge="Popular"
            title="Network Infrastructure & Cabling"
            description="Structured cabling, MDF/IDF clean builds, patch panels, fiber/Cat6, camera deployments, and closet standards."
          />
          <ServiceCard
            title="Systems & Server Administration"
            description="Active Directory, Group Policy, DNS, Windows/Linux servers, Hyper-V/VMware, migrations (cloud ↔ on-prem), monitoring."
          />
          <ServiceCard
            badge="High ROI"
            title="Automation & Scripting"
            description="PowerShell, Bash, and Python automation for repeatability, enforcement, and time savings."
          />
          <ServiceCard
            title="OS Troubleshooting & Diagnostics"
            description="Windows (XP–11), Windows Server (2012 R2–2025), and Linux (RHEL/Ubuntu). Boot issues, services, performance tuning."
          />
        </div>
      </section>

      {/* Small business */}
      <section className="mb-12">
        <GroupTitle
          title="Small Business & Hybrid IT"
          desc="Remote work, office technology, and cloud foundations that don’t break later."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <ServiceCard
            badge="Modernization"
            title="Cloud & Virtual Workspaces"
            description="Azure (AVD, VNets, NSGs, VMs), AWS (EC2/VPC/IAM/S3), hybrid networking (site-to-site VPN), golden images, backup strategy."
          />
          <ServiceCard
            title="Office Technology Consulting"
            description="VoIP, printers/scanners, conference rooms, UPS, multi-monitor setups, and practical guidance that fits your business."
          />
        </div>
      </section>

      {/* Home network */}
      <section className="mb-12">
        <GroupTitle
          title="Home Network Improvements"
          desc="Reliable Wi-Fi, wired backhaul, and a clean network “hub” that scales."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <ServiceCard
            badge="Fast win"
            title="Home Network Design"
            description="Evaluate layout + build a plan for stable coverage, smart placement, and expansion."
          />
          <ServiceCard
            title="Access Point & Mesh Installations"
            description="Install/configure Wi-Fi systems to eliminate dead zones across floors and outbuildings."
          />
          <ServiceCard
            title="Residential Cabling & Racks"
            description="Cat5e/Cat6 runs, wall plates, patch panels, cable management, small racks/cabinets."
          />
          <ServiceCard
            badge="Savings"
            title="ISP Plan Optimization & Bill Review"
            description="Reduce monthly costs by removing unnecessary rentals/bundles and right-sizing your plan."
          />
        </div>
      </section>

      {/* Personal tech */}
      <section className="mb-4">
        <GroupTitle
          title="Home & Personal Technology"
          desc="PC builds, guidance, troubleshooting, and setup help."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <ServiceCard
            title="PC Builds & Gaming Setups"
            description="Custom builds, streaming rigs, workstation optimization, peripherals, cooling, and power consulting."
          />
          <ServiceCard
            title="Everyday Tech Support"
            description="Smart TVs, smart home devices, account issues, storage questions, and making tech simpler."
          />
          <ServiceCard
            title="1-on-1 Tech Guidance"
            description="Device recommendations and personal coaching sessions for any skill level."
          />
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">Ready to start?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Tell me what you’re trying to fix or build. I’ll respond with a plan and options.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              Contact Bedsun Tech
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
