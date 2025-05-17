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
        {/* Add more projects here */}
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
