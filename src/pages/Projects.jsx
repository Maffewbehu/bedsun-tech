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

function ProjectCard({ title, date, summary, tags = [] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-xs font-medium text-gray-500">{date}</p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">{summary}</p>

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
    <div>
      <SectionTitle
        kicker="Projects"
        title="Recent work"
        desc="A mix of enterprise infrastructure, cloud deployments, monitoring, and real-world client fixes."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <ProjectCard
          title="Azure to Hyper-V Migration"
          date="May 2025"
          summary="Migrated a Windows Server VM from Azure to an on-prem Hyper-V cluster, including data transfer, failover configuration, and virtual switch setup."
          tags={["Azure", "Hyper-V", "Migration"]}
        />
        <ProjectCard
          title="Multi-Site Zabbix Monitoring Deployment"
          date="April 2025"
          summary="Deployed a centralized Zabbix instance monitoring over 75 business sites, complete with SNMP discovery, automated API imports, and alerting workflows."
          tags={["Zabbix", "SNMP", "Automation"]}
        />
        <ProjectCard
          title="Full Stack Sports Betting Tool"
          date="March 2025"
          summary="Built a React frontend and Node.js + PostgreSQL backend for analyzing player props and matchups. Deployed with automated daily ETL scripts and AI-generated insights."
          tags={["React", "Node.js", "PostgreSQL"]}
        />
        <ProjectCard
          title="Custom Gaming & Productivity Rig Build"
          date="February 2025"
          summary="Built and tuned a high-performance PC optimized for gaming and multitasking with strong cooling, storage, and dual monitor workflow."
          tags={["PC Build", "Performance"]}
        />
        <ProjectCard
          title="Network Closet Overhaul (Dead VLAN Method)"
          date="January 2025"
          summary="Standardized MDF/IDF closets by setting unused ports to a dead VLAN, clearing disconnected cables, and deploying a clean rack with uniform patching."
          tags={["Networking", "Switching", "Standards"]}
        />
        <ProjectCard
          title="Industrial Structured Cabling & Plant Runs"
          date="December 2024"
          summary="Performed structured cabling across large plants using lifts, J-hooks, and conduit. Routed around obstacles and ensured high-availability drops."
          tags={["Cabling", "Field Work"]}
        />
        <ProjectCard
          title="React Portfolio Deployment to Azure"
          date="May 2025"
          summary="Replaced a rushed WordPress site with a self-developed React portfolio. Deployed via Azure Static Web Apps and configured DNS for bedsuntech.tech."
          tags={["React", "Azure", "DNS"]}
        />
        <ProjectCard
          title="Home Wi-Fi Overhaul for Residential Property"
          date="March 2025"
          summary="Designed a simple, effective Wi-Fi 6 solution using APs, a PoE switch, and proper cable runs for seamless coverage across buildings."
          tags={["Wi-Fi", "Cabling", "PoE"]}
        />
        <ProjectCard
          title="ISP & Tech Services Consolidation for Senior Client"
          date="February 2025"
          summary="Reduced monthly bills by removing unnecessary services, simplifying streaming access, and creating a cleaner tech ecosystem."
          tags={["Cost Savings", "Client Support"]}
        />
      </div>
    </div>
  );
}
