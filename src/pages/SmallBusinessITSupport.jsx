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

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-gray-600">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
      <span>{children}</span>
    </li>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
      {children}
    </span>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-gray-900">{question}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{answer}</p>
    </div>
  );
}

export default function SmallBusinessITSupport() {
  return (
    <>
      <SEO
        title="Small Business IT Support in Las Vegas | Bedsun Tech"
        description="Bedsun Tech provides small business IT support in the Las Vegas area, including Microsoft 365, Google Workspace, business email, Wi-Fi, devices, printers, cameras, backups, documentation, and practical technology troubleshooting."
        path="/small-business-it-support"
      />

      <div>
        <SectionTitle
          kicker="Small Business IT Support"
          title="Small business IT support without full-time IT overhead"
          desc="Bedsun Tech helps small businesses with practical technology support, business email, Microsoft 365, devices, Wi-Fi, printers, cameras, account cleanup, documentation, and everyday IT troubleshooting."
        />

        {/* Hero CTA */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                When your business depends on technology, small IT problems can turn into big
                distractions.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Many small businesses do not need a full-time IT department, but they still need
                someone who can help with email, devices, accounts, Wi-Fi, printers, security basics,
                backups, and the confusing technology issues that slow down daily work.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Get IT help
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Small business IT services
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Support for the practical systems small businesses rely on every day.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Microsoft 365 and business email"
              desc="Help with Microsoft 365 setup, business email, user accounts, mailbox cleanup, domain/DNS records, licenses, basic security settings, and access issues."
            />
            <Card
              title="Google Workspace support"
              desc="Support for Google Workspace setup, Gmail for business, users, groups, shared access, domain verification, and account organization."
            />
            <Card
              title="Workstations, printers, and office devices"
              desc="Troubleshoot computers, printers, scanners, monitors, conference room devices, UPS units, and common office technology problems."
            />
            <Card
              title="Business Wi-Fi and network support"
              desc="Improve Wi-Fi reliability, router/firewall configuration, network cleanup, device connectivity, and practical recommendations for better coverage."
            />
            <Card
              title="Camera, smart device, and equipment setup"
              desc="Support for business cameras, smart devices, basic surveillance setups, device placement, app access, and network-connected equipment."
            />
            <Card
              title="Backups, recovery, and security basics"
              desc="Review backup needs, account recovery options, password practices, device security, MFA, documentation, and basic risk reduction steps."
            />
          </div>
        </section>

        {/* Who this is for */}
        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>You do not have internal IT staff but need reliable technical help.</Bullet>
                <Bullet>Your email, domain, or Microsoft 365 setup is confusing or inconsistent.</Bullet>
                <Bullet>Printers, Wi-Fi, devices, or accounts keep slowing down work.</Bullet>
                <Bullet>You need help organizing access, passwords, backups, and documentation.</Bullet>
                <Bullet>You want practical support without a large managed service contract.</Bullet>
                <Bullet>You need someone who understands both office tech and deeper IT systems.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Practical support with infrastructure experience behind it
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Small business IT support is not just fixing one device. It often means
                understanding how email, domains, DNS, accounts, devices, Wi-Fi, software, security,
                backups, and documentation all connect.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech brings real systems administration, networking, cloud, scripting, and
                infrastructure experience into small business support, so fixes are not just quick
                patches — they can become cleaner, more stable systems.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Microsoft 365</Pill>
                <Pill>Business Email</Pill>
                <Pill>Wi-Fi</Pill>
                <Pill>Printers</Pill>
                <Pill>Devices</Pill>
                <Pill>DNS</Pill>
                <Pill>Backups</Pill>
                <Pill>Documentation</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              A simple support process
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              The goal is to fix the immediate problem and reduce confusion going forward.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Understand the issue"
              desc="We clarify what is broken, who is affected, what changed recently, and what systems or devices are involved."
            />
            <Card
              title="2. Fix and stabilize"
              desc="I troubleshoot the issue, make safe changes, verify the fix, and identify any related risks or follow-up items."
            />
            <Card
              title="3. Document and improve"
              desc="You get clear notes, next steps, and recommendations to make the environment easier to support next time."
            />
          </div>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Examples of small business IT help
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Business email and domain cleanup"
              desc="Review where the domain is hosted, how email is configured, what DNS records exist, and what needs to be cleaned up for more reliable communication."
            />
            <Card
              title="Office Wi-Fi and device troubleshooting"
              desc="Troubleshoot wireless coverage, device connectivity, router settings, printer issues, scanner problems, and general office technology friction."
            />
            <Card
              title="Microsoft 365 user and mailbox support"
              desc="Help with user onboarding, mailbox access, licensing, password resets, shared access, account recovery, and basic Microsoft 365 organization."
            />
            <Card
              title="Technology documentation"
              desc="Create simple documentation for accounts, devices, vendors, domains, backup notes, network details, and other information businesses often lose track of."
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Small business IT support FAQ
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Do you offer one-time small business IT help?"
              answer="Yes. I can help with one-time troubleshooting, setup, cleanup, documentation, or planning. Ongoing support can be discussed depending on the need."
            />
            <FAQ
              question="Can you help with Microsoft 365 or business email?"
              answer="Yes. I can help with Microsoft 365, Google Workspace, business email, domains, DNS records, user accounts, mailbox access, and basic security settings."
            />
            <FAQ
              question="Can you come on-site?"
              answer="Some work can be handled remotely, and some issues may require on-site support depending on the location, equipment, and scope."
            />
            <FAQ
              question="Is this managed IT?"
              answer="Not by default. Bedsun Tech can help with small business IT support and projects, but full managed IT expectations should be scoped clearly before starting."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Need a technical partner for your small business?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Tell me what is broken, confusing, or slowing your team down. I’ll help identify the
                next best step.
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
        </section>
      </div>
    </>
  );
}