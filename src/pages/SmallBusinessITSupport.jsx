import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { faqPageSchema, serviceSchema } from "../lib/structuredData";

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


const PAGE_PATH = "/small-business-it-support";

const FAQS = [
  { question: "What small business IT issues can you help with?", answer: "Bedsun Tech can help with Microsoft 365, Google Workspace, email, users, devices, printers, Wi-Fi, basic security, backups, documentation, and general tech cleanup." },
  { question: "Can you help clean up messy business accounts?", answer: "Yes. I can help review users, permissions, email setup, file organization, shared accounts, and basic documentation so the setup is easier to manage." },
  { question: "Do you provide ongoing IT support?", answer: "Support can start with one-time cleanup or troubleshooting, then move into a recurring support plan if the business needs ongoing help." },
  { question: "Can IT cleanup lead into automation?", answer: "Yes. Cleaner accounts, forms, files, and processes make it easier to add automation, dashboards, and AI-assisted workflows later." },
];

const PAGE_STRUCTURED_DATA = [
  serviceSchema({
    name: "Small Business IT Support in Las Vegas",
    description: "Bedsun Tech provides small business IT support in Las Vegas, including Microsoft 365, Google Workspace, email, devices, Wi-Fi, printers, backups, security basics, documentation, and workflow cleanup.",
    path: PAGE_PATH,
    serviceType: "Small business IT support",
    audience: "Small business owners and teams",
    keywords: ["small business IT support", "Microsoft 365", "Google Workspace", "business email", "Wi-Fi support", "printer support"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

export default function SmallBusinessITSupport() {
  return (
    <>
      <SEO
        title="Small Business IT Support in Las Vegas | Bedsun Tech"
        description="Bedsun Tech provides small business IT support in Las Vegas, including Microsoft 365, Google Workspace, email, devices, Wi-Fi, printers, backups, security basics, documentation, and workflow cleanup."
        path={PAGE_PATH}
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <div>
        <SectionTitle
          kicker="Small Business IT Support"
          title="Practical IT support for small businesses that need cleaner systems"
          desc="Bedsun Tech helps small businesses with business email, Microsoft 365, Google Workspace, Wi-Fi, devices, printers, account cleanup, security basics, documentation, and the day-to-day technology problems that slow work down."
        />

        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                You may not need full-time IT, but you still need technology that works.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Small businesses often grow faster than their tech setup. Email gets messy, devices
                are inconsistent, Wi-Fi is unreliable, printers slow people down, passwords are
                scattered, and nobody has clear documentation. Bedsun Tech helps clean up the basics
                so your team can work with less friction.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Microsoft 365</Pill>
                <Pill>Google Workspace</Pill>
                <Pill>Business Wi-Fi</Pill>
                <Pill>Printers</Pill>
                <Pill>Backups</Pill>
                <Pill>Documentation</Pill>
              </div>
            </div>

            <div className="space-y-3 md:col-span-4 md:flex md:flex-col md:items-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Get Small Business IT Help
              </Link>
              <Link
                to="/business-tech-ai-opportunity-scan"
                className="inline-flex w-full justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 md:w-auto"
              >
                Request a Tech Review
              </Link>
            </div>
          </div>
        </section>

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
              desc="Help with Microsoft 365 setup, business email, mailboxes, users, licenses, domain records, MFA, and access issues."
            />
            <Card
              title="Google Workspace support"
              desc="Support for Google Workspace setup, Gmail for business, users, groups, domain verification, shared access, and account organization."
            />
            <Card
              title="Wi-Fi, network, and device support"
              desc="Improve business Wi-Fi reliability, router setup, office connectivity, workstations, laptops, printers, scanners, and common device issues."
            />
            <Card
              title="Printer and office equipment help"
              desc="Troubleshoot printers, scanners, conference room devices, monitors, basic camera systems, smart devices, and network-connected equipment."
            />
            <Card
              title="Security basics and account cleanup"
              desc="Review MFA, password practices, admin access, account recovery, inactive users, device security, and basic risk reduction steps."
            />
            <Card
              title="Backups, documentation, and organization"
              desc="Help document systems, organize accounts, review backup needs, clean up shared files, and create more repeatable support steps."
            />
          </div>
        </section>

        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>You do not have internal IT staff but need reliable technical help.</Bullet>
                <Bullet>Your email, domain, Microsoft 365, or Google setup feels confusing.</Bullet>
                <Bullet>Printers, Wi-Fi, devices, or accounts keep slowing down work.</Bullet>
                <Bullet>You need cleaner documentation, passwords, backups, and access practices.</Bullet>
                <Bullet>You want help without committing to a large managed service contract.</Bullet>
                <Bullet>You want someone who understands both small business needs and deeper IT systems.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                IT support that connects to websites, automation, and AI when needed
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Small business technology is connected. Your website forms, email, domain, files,
                accounts, Wi-Fi, devices, and follow-up process all affect how smoothly your
                business runs.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech can help with the immediate IT issue while also spotting opportunities
                to clean up workflows, improve website lead handling, or use automation where it
                makes sense.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>IT Support</Pill>
                <Pill>Email</Pill>
                <Pill>Domains</Pill>
                <Pill>Devices</Pill>
                <Pill>Wi-Fi</Pill>
                <Pill>Workflow Cleanup</Pill>
                <Pill>Automation</Pill>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              A simple support process
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Understand the issue"
              desc="We clarify what is broken, who is affected, what changed recently, and which systems or devices are involved."
            />
            <Card
              title="2. Fix and stabilize"
              desc="We work through the immediate problem and look for simple ways to prevent the same issue from coming back."
            />
            <Card
              title="3. Document and improve"
              desc="When useful, we document the setup, clean up access, and recommend practical next steps for a cleaner tech foundation."
            />
          </div>
        </section>

        <section className="mb-12 rounded-3xl bg-gray-900 p-8 text-white">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Want a clearer picture of your business tech setup?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">
                Request a Business Tech & AI Opportunity Scan to review your website, email, forms,
                follow-up process, manual admin tasks, and technology foundation.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/business-tech-ai-opportunity-scan"
                className="inline-flex w-full justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 md:w-auto"
              >
                Request a Tech Review
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Small business IT FAQs
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Do you provide help for businesses without internal IT?"
              answer="Yes. Bedsun Tech is a good fit for small businesses that need practical help but do not have a full-time IT person."
            />
            <FAQ
              question="Can you help with Microsoft 365 or Google Workspace?"
              answer="Yes. Support can include setup, users, email, domains, DNS records, MFA, licenses, groups, and account organization."
            />
            <FAQ
              question="Do you offer one-time help or ongoing support?"
              answer="Bedsun Tech can help with one-time issues, cleanup projects, and practical support arrangements depending on the business need."
            />
            <FAQ
              question="Can IT support connect to automation later?"
              answer="Yes. Once the tech foundation is cleaner, forms, follow-up, reports, dashboards, and AI workflows can be added where useful."
            />
          </div>
        </section>
      </div>
    </>
  );
}
