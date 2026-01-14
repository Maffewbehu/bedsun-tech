function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mb-6">
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

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-gray-600">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <SectionTitle
        kicker="About"
        title="Hi, I’m Matthew Bedsun."
        desc="I build and support IT environments that stay stable, secure, and easy to operate — from home networks to enterprise infrastructure."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Main story */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">My story</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                My name is Matthew Bedsun, and I’ve been building, supporting, and securing IT
                environments professionally for over 17+ years.
              </p>
              <p>
                It started when I was eight years old — building my first PC to squeeze better
                performance out of the games I loved. That curiosity turned into a career,
                beginning at Best Buy where I quickly moved into Geek Squad, solving real problems
                for everyday people.
              </p>
              <p>
                From there I advanced into enterprise infrastructure: data center operations,
                system administration, virtualization, networking, and cloud. Today I work as a
                traveling Systems Engineer, designing and supporting secure IT environments across
                multiple sites and industries.
              </p>
              <p>
                Whether it’s setting up a home office, recovering data from a failed drive, or
                architecting an Azure Virtual Desktop deployment — I bring the same precision,
                trust, and documentation to every job.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Azure • AVD</Pill>
              <Pill>Hyper-V • Windows Server</Pill>
              <Pill>AD • GPO • DNS</Pill>
              <Pill>Zabbix • Monitoring</Pill>
              <Pill>Meraki • Networking</Pill>
              <Pill>PowerShell • Python</Pill>
            </div>
          </div>
        </div>

        {/* Side cards */}
        <div className="lg:col-span-4 space-y-6">
          <Card title="What I’m best at">
            <ul className="mt-2 space-y-2">
              <li>• Fixing issues at the root (not band-aids)</li>
              <li>• Building clean, repeatable infrastructure</li>
              <li>• Documenting changes so nothing is “tribal knowledge”</li>
              <li>• Explaining technical work in plain English</li>
            </ul>
          </Card>

          <Card title="How I work">
            <ul className="mt-2 space-y-2">
              <li>• Quick discovery call</li>
              <li>• Clear plan + options</li>
              <li>• Safe execution (backups/rollback/testing)</li>
              <li>• Handoff notes + next steps</li>
            </ul>
          </Card>

          <Card title="Who I help">
            <ul className="mt-2 space-y-2">
              <li>• Home users who want reliable Wi-Fi & setups</li>
              <li>• Small businesses without full-time IT</li>
              <li>• Teams needing cloud/virtualization help</li>
              <li>• Enterprise overflow projects</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
