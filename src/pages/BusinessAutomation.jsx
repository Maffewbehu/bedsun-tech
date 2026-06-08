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

export default function BusinessAutomation() {
  return (
    <>
      <SEO
        title="Business & IT Automation in Las Vegas | Bedsun Tech"
        description="Bedsun Tech helps small businesses automate workflows, dashboards, reports, patching, monitoring, IT operations, scripts, forms, and custom business tools in the Las Vegas area."
        path="/business-automation"
      />

      <div>
        <SectionTitle
          kicker="Business Automation"
          title="Business automation, IT workflows, and custom tools"
          desc="Bedsun Tech helps small businesses reduce repetitive work, clean up messy processes, and build practical systems using workflow automation, dashboards, scripting, reporting, IT operations automation, and custom business tools."
        />

        {/* Hero CTA */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                If your business is running on repeated manual steps, scattered spreadsheets,
                patching checklists, or copy/paste work, automation can help.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Small businesses often lose time because important work lives across emails,
                spreadsheets, forms, screenshots, shared folders, disconnected apps, and manual IT
                processes. I help turn those repeated tasks into cleaner workflows, dashboards,
                scripts, reports, and tools that are easier to run and maintain.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Automate My Workflow
              </Link>
            </div>
          </div>
        </section>

        {/* Two lanes */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Two ways automation can help
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Automation can improve both the business side and the IT operations side of a small
              business. The best projects usually start with one painful process and turn it into a
              repeatable system.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Business process automation
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                Forms, dashboards, reporting, and internal tools
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Improve repeated office workflows, spreadsheet processes, customer intake, status
                tracking, reporting, and business tools that support day-to-day operations.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                IT operations automation
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                Patching, monitoring, scripts, reports, and runbooks
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Standardize IT tasks like patching, maintenance checks, device reporting, account
                cleanup, monitoring workflows, alerting, and repeatable admin scripts.
              </p>
            </div>
          </div>
        </section>

        {/* Business automation services */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Business workflow automation
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              These services are built for small businesses that need practical tools, not bloated
              enterprise software.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Workflow automation"
              desc="Automate repeated steps across forms, spreadsheets, email, files, reports, and internal business processes."
            />
            <Card
              title="Custom dashboards"
              desc="Build dashboards that organize business data, status updates, project progress, operations, or reporting into one cleaner view."
            />
            <Card
              title="Forms and intake workflows"
              desc="Create customer intake forms, internal request forms, quote forms, job trackers, and follow-up workflows."
            />
            <Card
              title="Reporting and spreadsheet cleanup"
              desc="Turn messy spreadsheets and manual reports into cleaner, repeatable workflows with better structure and fewer copy/paste steps."
            />
            <Card
              title="Custom internal tools"
              desc="Build lightweight business apps, admin panels, portals, trackers, and internal tools that fit how your business actually works."
            />
            <Card
              title="AI-assisted productivity systems"
              desc="Use AI carefully for drafting, summarizing, organizing, intake review, reporting assistance, and internal productivity workflows."
            />
          </div>
        </section>

        {/* IT operations automation */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              IT operations automation
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Automation is not only for office workflows. Bedsun Tech can also help with
              infrastructure and IT operations tasks that need repeatability, visibility, and safer
              execution.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Patching and maintenance workflows"
              desc="Help standardize patching steps, maintenance windows, reporting, reboot tracking, update validation, and post-maintenance checks for servers, workstations, or business systems."
            />
            <Card
              title="PowerShell and scripting automation"
              desc="Build scripts for repeatable admin tasks, user cleanup, reporting, file operations, permissions checks, system audits, and operational workflows."
            />
            <Card
              title="Monitoring and alerting automation"
              desc="Create monitoring workflows, dashboards, alert routing, discovery logic, and reporting around systems, network devices, endpoints, and business-critical services."
            />
            <Card
              title="Onboarding, offboarding, and account cleanup"
              desc="Standardize user setup, access reviews, device preparation, mailbox cleanup, license checks, and documentation for small business IT environments."
            />
            <Card
              title="Infrastructure reporting"
              desc="Create repeatable reports for servers, devices, backups, patch status, uptime, storage, network assets, and other operational health checks."
            />
            <Card
              title="Runbooks and documentation"
              desc="Turn repeated IT tasks into clear runbooks, checklists, scripts, and support notes so work can be repeated safely instead of reinvented each time."
            />
          </div>
        </section>

        {/* Who this is for */}
        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>You repeat the same admin or IT task every day or every week.</Bullet>
                <Bullet>Your business depends on spreadsheets that are hard to trust.</Bullet>
                <Bullet>You manually copy information between apps, emails, reports, or systems.</Bullet>
                <Bullet>You need better patching, monitoring, reporting, or maintenance workflows.</Bullet>
                <Bullet>Your team has a process, but it is not documented or standardized.</Bullet>
                <Bullet>You have an idea for a tool but do not need a full software company.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Practical automation backed by real IT and development experience
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Automation is not just about connecting apps together. It also needs to be reliable,
                understandable, secure enough for the business, and easy to support later.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech brings together IT operations experience, scripting, databases, web
                development, cloud hosting, monitoring, and real-world troubleshooting. That helps
                keep automation projects grounded in how businesses and IT environments actually
                work day to day.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Workflows</Pill>
                <Pill>Dashboards</Pill>
                <Pill>Forms</Pill>
                <Pill>Reporting</Pill>
                <Pill>PowerShell</Pill>
                <Pill>Patching</Pill>
                <Pill>Monitoring</Pill>
                <Pill>Runbooks</Pill>
                <Pill>AI workflows</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              A simple automation process
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              We start by understanding the process before building anything.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Map the workflow"
              desc="We identify the current manual steps, tools, data sources, systems, pain points, and what the finished process should look like."
            />
            <Card
              title="2. Build the first useful version"
              desc="I build a practical version of the workflow, dashboard, form, script, report, runbook, or internal tool with testing and clear expectations."
            />
            <Card
              title="3. Improve and document"
              desc="We refine the workflow, confirm it works in real use, document how it runs, and plan any next improvements."
            />
          </div>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Examples of automation work
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Investor update and asset tracking workflow"
              desc="Built a portal-style workflow for property updates, image galleries, progress notes, and investor-facing communication."
            />
            <Card
              title="Analytics dashboard and data pipeline"
              desc="Built a custom dashboard with data ingestion, reporting views, recurring refresh workflows, and AI-assisted insights."
            />
            <Card
              title="Monitoring and alerting automation"
              desc="Created automated discovery and alerting workflows for network devices, systems, and site assets to reduce manual checking."
            />
            <Card
              title="Website contact and lead workflow"
              desc="Built a working website contact form with backend email delivery, structured request details, and reliable notification handling."
            />
            <Card
              title="Patching and IT maintenance standardization"
              desc="Helped plan repeatable maintenance workflows, validation steps, and operational checks so IT tasks can be performed more consistently."
            />
            <Card
              title="Infrastructure visibility and reporting"
              desc="Created repeatable reporting and documentation patterns for devices, systems, uptime, monitoring, and operational health."
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Business and IT automation FAQ
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Do I need to know exactly what tool I want built?"
              answer="No. Many projects start with a messy process, spreadsheet, repeated task, or IT checklist. The first step is mapping the workflow and deciding what should be automated or cleaned up."
            />
            <FAQ
              question="Can automation work with my existing tools?"
              answer="Usually, yes. The right approach depends on what tools you use, what data is available, and whether the process needs an app, script, form, dashboard, report, or simple workflow improvement."
            />
            <FAQ
              question="Can you automate IT infrastructure tasks?"
              answer="Yes. I can help with scripting, patching workflows, monitoring, alerting, reporting, account cleanup, documentation, and other repeatable IT operations tasks."
            />
            <FAQ
              question="Can you build custom dashboards?"
              answer="Yes. Dashboards can be built around project updates, client information, operations, reports, assets, inventory, system health, patch status, or other business data that needs a cleaner view."
            />
            <FAQ
              question="Is AI automation safe for small businesses?"
              answer="AI can be useful when used carefully. I focus on practical uses like drafting, summarizing, organizing, reporting assistance, and workflow support while keeping sensitive information and business risk in mind."
            />
            <FAQ
              question="Is this the same as managed IT?"
              answer="Not exactly. This page focuses on building repeatable workflows, scripts, dashboards, and operational systems. Some projects may support IT operations, but the scope depends on what your business needs."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Have a workflow, IT task, or process you want to clean up?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Tell me what you are doing manually, where the information lives, what systems are
                involved, and what the ideal outcome would look like. I’ll help map the best path
                forward.
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