export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">What I Can Do For Your Home or Business</h1>
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Tier 1: Enterprise IT Solutions */}
        <section>
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Enterprise IT & Infrastructure</h2>
          <div className="space-y-4">
            <ServiceCard
              title="Network Infrastructure & Cabling"
              description="Site-wide structured cabling, clean MDF/IDF builds, patch panel termination, boom lift installs, fiber & Cat6 drops, security camera deployment, and remote setup."
            />
            <ServiceCard
              title="Systems & Server Administration"
              description="Active Directory, Group Policy, DNS, Hyper-V/VMware/Azure/AWS VM provisioning, Windows and Linux Server deployments, VM migrations (cloud ↔ on-prem), service monitoring with Zabbix/Nagios."
            />
            <ServiceCard
              title="Automation & Scripting"
              description="PowerShell, Bash, and Python-based automations to improve reliability, enforce standards, and reduce manual workloads. Infrastructure-level scripting and deployment orchestration."
            />
            <ServiceCard
              title="OS Troubleshooting & Diagnostics"
              description="Expert-level diagnosis and repair for Windows (XP - 11), Server (2012 R2–2025) and Linux systems (RHEL, Ubuntu). From boot issues, to service crashes, and performance tuning, I handle both desktop and server environments with confidence."
            />
          </div>
        </section>

        {/* Tier 2: Small Business & Hybrid */}
        <section>
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Small Business & Hybrid IT</h2>
          <div className="space-y-4">
            <ServiceCard
              title="Cloud & Virtual Workspaces"
              description="Azure Virtual Desktop (AVD) deployment with full Azure stack provisioning — Subscriptions, Resource Groups, VNets, NSGs, and Windows/Linux VMs. AWS infrastructure builds including EC2, VPC, IAM, and S3. Experience with hybrid networking (site-to-site VPN), golden image pipelines, secure backups, and scalable remote work environments."
            />
            <ServiceCard
              title="Office Technology Consulting"
              description="VoIP phones, printing/scanning environments, multi-monitor PC deployments, Conference Room System installs/configuration, UPS setup, backup schemes, and software guidance tailored to your industry."
            />
          </div>
        </section>

{/* Tier 3: Home Network Improvements */}
<section>
  <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Home Network Improvements</h2>
  <div className="space-y-4">
    <ServiceCard
      title="Home Network Design"
      description="Evaluate your home layout and design a clean, centralized network hub for reliable and scalable performance."
    />
    <ServiceCard
      title="Access Point & Mesh Installations"
      description="Install and configure standalone or mesh Wi-Fi systems to eliminate dead zones and improve coverage across all floors."
    />
    <ServiceCard
      title="Residential Cabling & Racks"
      description="Run Ethernet (Cat5e/Cat6) throughout your home, terminate wall plates, organize patch panels, and mount home-grade network racks or cabinets."
    />
    <ServiceCard
      title="ISP Plan Optimization & Bill Review"
      description="Help clients understand their internet bill, remove unnecessary equipment fees or bundled services, and consolidate plans to reduce monthly costs while keeping performance intact."
    />
  </div>
</section>


        {/* Tier 4: Home Tech Support & Freelance */}
        <section>
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Home & Personal Technology</h2>
          <div className="space-y-4">
            <ServiceCard
              title="PC Builds & Gaming Setups"
              description="Custom PC builds, streaming rigs, workstation optimization, peripheral configuration, and cooling/power consulting."
            />
            <ServiceCard
              title="Everyday Tech Support"
              description="Troubleshooting smart TVs, internet plans, smart home devices, account issues, storage questions, or getting rid of landlines."
            />
            <ServiceCard
              title="1-on-1 Tech Guidance"
              description="Personal tech education, general consulting, and device recommendation sessions for all experience levels."
            />
          </div>
        </section>

      </div>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-5 bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
