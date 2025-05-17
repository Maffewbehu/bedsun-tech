export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Recent Projects</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <ProjectCard
          title="Azure to Hyper-V Migration"
          date="May 2025"
          summary="Migrated a Windows Server VM from Azure to an on-prem Hyper-V cluster, including data transfer, failover configuration, and virtual switch setup."
        />
        <ProjectCard
          title="Multi-Site Zabbix Monitoring Deployment"
          date="April 2025"
          summary="Deployed a centralized Zabbix instance monitoring over 75 business sites, complete with SNMP discovery, automated API imports, and alerting workflows."
        />
        <ProjectCard
          title="Full Stack Sports Betting Tool"
          date="March 2025"
          summary="Built a React-based frontend and Node.js + PostgreSQL backend for analyzing player props and matchups using MLB's stats API. Deployed on Azure with automated daily ETL scripts and AI-generated insights."
        />
        <ProjectCard
          title="Custom Gaming & Productivity Rig Build"
          date="February 2025"
          summary="Built a high-performance PC using Intel i5 13th Gen KF, RTX 2080 Super, 1TB NVMe, 2TB SSD, 16GB RAM, liquid cooling, MSI PCIe 5.0 motherboard, and dual monitors (244Hz + 160Hz) optimized for gaming and multitasking."
        />
        <ProjectCard
          title="Network Closet Overhaul (Dead VLAN Method)"
          date="January 2025"
          summary="Standardized MDF/IDF closets by setting unused ports to a dead VLAN, clearing disconnected cables, and deploying a clean rack with uniform patching, UPS, firewall, switch, and AP stack."
        />
        <ProjectCard
          title="Industrial Structured Cabling & Plant Runs"
          date="December 2024"
          summary="Performed structured cabling across large plants using boom/scissor lifts, J-hooks, bridal rings, and conduit. Routed cable around physical obstacles and ensured high-availability drops at endpoints."
        />
        <ProjectCard
          title="React Portfolio Deployment to Azure"
          date="May 2025"
          summary="Replaced a quickly thrown together WordPress site for my buisness with a self develeoped React portfolio. I Pushed source code to GitHub, deployed with Azure Static Web Apps, and configured custom DNS records from WordPress domain management for bedsuntech.tech."
        />
        <ProjectCard
          title="Home Wi-Fi Overhaul for Residential Property"
          date="March 2025"
          summary="Replaced an overpriced enterprise quote by designing a simple, effective solution using 3 TP-Link Wi-Fi 6 APs, a PoE switch, and attic cable runs. Connected the main home and guest house using plenum Cat6 for seamless wireless coverage."
        />
        <ProjectCard
          title="ISP & Tech Services Consolidation for Senior Client"
          date="February 2025"
          summary="Helped a client reduce monthly bills by canceling unnecessary landlines and bundled cable packages. Streamlined accounts, simplified streaming service access, and provided a cleaner tech ecosystem tailored to their actual needs."
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, date, summary }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-5 bg-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2 text-gray-700">{summary}</p>
    </div>
  );
}
