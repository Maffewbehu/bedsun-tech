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

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
      {children}
    </span>
  );
}

function ProjectCard({ title, date, summary, outcome, tags = [] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-xs font-medium text-gray-500">{date}</p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">{summary}</p>

      {outcome ? (
        <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Outcome
          </div>
          <p className="mt-1 text-sm leading-relaxed text-gray-700">{outcome}</p>
        </div>
      ) : null}

      {tags.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects & Case Studies | Bedsun Tech"
        description="Explore Bedsun Tech projects including local SEO website updates, investor portals, custom dashboards, React apps, automation, Azure deployments, Zabbix monitoring, networking, cabling, and personal technology support."
        path="/projects"
      />

      <div>
        <SectionTitle
          kicker="Projects"
          title="Recent builds, systems, and real-world fixes"
          desc="A mix of websites, SEO improvements, custom portals, dashboards, automation, infrastructure, monitoring, networking, and practical technology support — with a focus on what improved for the client or business."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ProjectCard
            title="Local SEO & Website Content Expansion"
            date="June 2026"
            summary="Expanded and improved an existing small business website with a new service page, updates to existing service pages, new blog content, navigation improvements, and SEO-focused content updates."
            outcome="Created a stronger local SEO foundation by making services easier to find, separating important service topics into clearer pages, improving internal linking, and giving visitors more useful information before booking."
            tags={[
              "SEO",
              "Website Content",
              "Local Business",
              "Service Pages",
              "Blog Content",
            ]}
          />

          <ProjectCard
            title="Real Estate Investor Portal & Asset Update System"
            date="May 2026"
            summary="Built and improved a portal-style workflow for real estate investment updates, including property pages, progress updates, image galleries, renovation notes, and investor-facing project communication."
            outcome="Gave investors a cleaner way to review property progress, recent updates, renovation status, and visual documentation from one centralized online experience."
            tags={[
              "Custom Portal",
              "React",
              "Supabase",
              "Real Estate",
              "Investor Updates",
            ]}
          />

          <ProjectCard
            title="Custom Analytics Dashboard & Data Pipeline"
            date="March 2025"
            summary="Built a React frontend with a Node.js and PostgreSQL backend for analyzing player props, matchups, and trends. Added automated daily ETL scripts and AI-generated insights."
            outcome="Created a repeatable data workflow with a clean dashboard experience, giving users a faster way to review trends, compare matchups, and surface useful insights."
            tags={["React", "Node.js", "PostgreSQL", "ETL", "AI Insights"]}
          />

          <ProjectCard
            title="React Website Deployment to Azure"
            date="May 2025"
            summary="Replaced a rushed WordPress setup with a self-developed React website. Deployed the site through Azure Static Web Apps and configured DNS for bedsuntech.tech."
            outcome="Improved control over the website codebase, design, deployment workflow, and future SEO improvements while creating a cleaner foundation for the Bedsun Tech brand."
            tags={["React", "Azure", "DNS", "Static Web Apps"]}
          />

          <ProjectCard
            title="Business Website & SEO Workflow Improvements"
            date="June 2026"
            summary="Improved the structure of a small business website by organizing services, tightening page messaging, adding SEO-friendly content, and aligning pages around what customers actually search for."
            outcome="Helped turn a general website into a stronger lead-generation asset with clearer service paths, better search relevance, and more useful content for potential customers."
            tags={[
              "Website Strategy",
              "SEO",
              "Content Structure",
              "Lead Generation",
            ]}
          />

          <ProjectCard
            title="Personal Technology Support & Account Cleanup"
            date="Ongoing"
            summary="Helped personal technology clients simplify email accounts, passwords, devices, streaming services, internet plans, cameras, printers, and general home technology setups."
            outcome="Reduced confusion, improved account access, lowered unnecessary service costs, and created simpler technology setups that were easier for clients and their families to manage."
            tags={[
              "Personal Tech Help",
              "Account Cleanup",
              "Home Devices",
              "Cost Savings",
            ]}
          />

          <ProjectCard
            title="Small Business Technology Cleanup"
            date="Ongoing"
            summary="Assisted small business and hobby-business clients with confusing technology setups, including email access, connected services, devices, accounts, and general workflow issues."
            outcome="Helped clients regain control of their technology, understand which accounts powered which services, and make better decisions about what to keep, change, or improve."
            tags={[
              "Small Business IT",
              "Tech Cleanup",
              "Email",
              "Workflow Support",
            ]}
          />

          <ProjectCard
            title="Multi-Site Zabbix Monitoring Deployment"
            date="April 2025"
            summary="Deployed a centralized Zabbix instance monitoring more than 75 business sites with SNMP discovery, automated API imports, dashboard visibility, and alerting workflows."
            outcome="Improved operational visibility across many locations and reduced manual monitoring work through discovery, automation, and clearer alerting."
            tags={["Zabbix", "SNMP", "Automation", "Monitoring"]}
          />

          <ProjectCard
            title="Azure to Hyper-V Migration"
            date="May 2025"
            summary="Migrated a Windows Server VM from Azure to an on-prem Hyper-V cluster, including data transfer, failover planning, virtual switch configuration, and post-migration validation."
            outcome="Moved a cloud-hosted workload into the on-prem environment with a clean migration path, reducing uncertainty and keeping the system aligned with infrastructure needs."
            tags={["Azure", "Hyper-V", "Migration", "Windows Server"]}
          />

          <ProjectCard
            title="Network Closet Overhaul & Port Standardization"
            date="January 2025"
            summary="Standardized MDF/IDF closets by clearing disconnected cables, applying a dead VLAN method for unused ports, improving patching consistency, and creating cleaner rack standards."
            outcome="Reduced clutter, improved troubleshooting, and created a more reliable network closet standard for future support and expansion."
            tags={["Networking", "Switching", "VLANs", "Standards"]}
          />

          <ProjectCard
            title="Industrial Structured Cabling & Plant Runs"
            date="December 2024"
            summary="Performed structured cabling across large plant environments using lifts, J-hooks, conduit, and careful route planning around operational obstacles."
            outcome="Delivered cleaner and more reliable physical network connectivity across difficult field environments while supporting high-availability device drops."
            tags={["Cabling", "Field Work", "Plant IT", "Infrastructure"]}
          />

          <ProjectCard
            title="Home Wi-Fi Overhaul for Residential Property"
            date="March 2025"
            summary="Designed a practical Wi-Fi 6 solution using access points, a PoE switch, and proper cable runs to improve coverage across buildings and reduce dead zones."
            outcome="Created a more stable home network with better coverage, cleaner equipment placement, and a setup that can scale as more devices are added."
            tags={["Wi-Fi", "Cabling", "PoE", "Home Network"]}
          />

          <ProjectCard
            title="Custom Gaming & Productivity Rig Build"
            date="February 2025"
            summary="Built and tuned a high-performance PC for gaming, multitasking, and daily productivity with strong cooling, storage planning, and dual-monitor workflow support."
            outcome="Delivered a fast, stable workstation tailored to the user’s performance needs and daily workflow."
            tags={["PC Build", "Performance", "Workstation"]}
          />
        </div>
      </div>
    </>
  );
}