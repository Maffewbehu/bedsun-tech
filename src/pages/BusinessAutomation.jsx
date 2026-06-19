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


const PAGE_PATH = "/business-automation";

const FAQS = [
  { question: "What can a small business automate first?", answer: "The best first automation is usually a repeated task involving forms, follow-up, spreadsheets, reports, file organization, customer intake, or internal handoffs." },
  { question: "Do I need expensive software to automate my business?", answer: "Not always. Many useful improvements can start with the tools you already use, then grow into custom workflows or tools when needed." },
  { question: "Can automation connect to my website?", answer: "Often, yes. Contact forms, quote requests, intake forms, email notifications, spreadsheets, and CRM-style workflows can often be connected or improved." },
  { question: "Can AI be part of automation?", answer: "Yes. AI can help summarize information, draft responses, organize notes, classify requests, and support human-reviewed workflows when used carefully." },
];

const PAGE_STRUCTURED_DATA = [
  serviceSchema({
    name: "Business Automation Services in Las Vegas",
    description: "Bedsun Tech helps small businesses automate repetitive work, connect forms, improve follow-up, organize spreadsheets, build dashboards, and create practical AI-assisted workflows.",
    path: PAGE_PATH,
    serviceType: "Business automation and workflow improvement",
    audience: "Small business owners and teams",
    keywords: ["business automation", "workflow automation", "lead follow-up automation", "dashboard", "custom internal tools"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

export default function BusinessAutomation() {
  return (
    <>
      <SEO
        title="Business Automation Services in Las Vegas | Bedsun Tech"
        description="Bedsun Tech helps small businesses automate repetitive work, connect forms, improve follow-up, organize spreadsheets, build dashboards, and create practical AI-assisted workflows."
        path={PAGE_PATH}
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <div>
        <SectionTitle
          kicker="Business Automation Services"
          title="Automation that saves time without overcomplicating your business"
          desc="Bedsun Tech helps small businesses clean up repetitive tasks, connect forms and spreadsheets, improve follow-up, create dashboards, and use practical AI workflows where they actually make sense."
        />

        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                The best automation starts with one annoying manual process.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Small businesses often waste time copying information between forms, emails,
                spreadsheets, CRMs, calendars, files, and reports. Bedsun Tech helps identify those
                repeated steps and turn them into cleaner workflows that are easier to run and
                easier to track.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Lead follow-up</Pill>
                <Pill>Forms</Pill>
                <Pill>Spreadsheets</Pill>
                <Pill>Dashboards</Pill>
                <Pill>AI assistance</Pill>
              </div>
            </div>

            <div className="space-y-3 md:col-span-4 md:flex md:flex-col md:items-end">
              <Link
                to="/business-tech-ai-opportunity-scan"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Find Automation Opportunities
              </Link>
              <Link
                to="/ai-integration-small-business"
                className="inline-flex w-full justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 md:w-auto"
              >
                Explore AI Integration
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Business workflows we can improve
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              The goal is not to automate everything. The goal is to reduce repetitive work, improve
              visibility, and make important tasks harder to miss.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Contact form automation"
              desc="Route website form submissions to email, spreadsheets, CRMs, task lists, or follow-up workflows so leads are easier to manage."
            />
            <Card
              title="Lead follow-up workflows"
              desc="Create reminders, email drafts, intake summaries, and tracking steps so new leads do not get forgotten."
            />
            <Card
              title="Customer intake systems"
              desc="Build cleaner intake forms, quote request flows, onboarding forms, and internal review processes."
            />
            <Card
              title="Spreadsheet and CRM cleanup"
              desc="Organize messy spreadsheets, reduce duplicate entry, improve tracking, and connect data to repeatable workflows."
            />
            <Card
              title="Reporting dashboards"
              desc="Create dashboards for leads, jobs, projects, operations, sales activity, service requests, or business health."
            />
            <Card
              title="Custom internal tools"
              desc="Build lightweight portals, trackers, admin tools, scripts, or apps around the way your business actually works."
            />
          </div>
        </section>

        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Good automation candidates</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>You repeat the same copy/paste task several times per week.</Bullet>
                <Bullet>New leads or requests get lost in email or text messages.</Bullet>
                <Bullet>Multiple people update the same spreadsheet manually.</Bullet>
                <Bullet>You manually send the same follow-up or status message often.</Bullet>
                <Bullet>You need a dashboard instead of checking five different places.</Bullet>
                <Bullet>You are curious about AI but want practical use cases, not hype.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Practical AI can support automation, but it should not replace the process
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                AI is useful when it helps summarize information, draft responses, organize intake,
                classify requests, search documents, or assist staff with repeated knowledge work.
                It works best when the underlying workflow is clear first.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech focuses on realistic workflows: what information comes in, where it
                should go, who needs to see it, what follow-up should happen, and where AI can save
                time safely.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Practical AI</Pill>
                <Pill>Workflow cleanup</Pill>
                <Pill>Forms</Pill>
                <Pill>Follow-up</Pill>
                <Pill>Dashboards</Pill>
                <Pill>Custom tools</Pill>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              A simple automation process
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            <Card
              title="1. Map the process"
              desc="We identify what happens today, where information starts, where it goes, and what steps are repeated."
            />
            <Card
              title="2. Pick the best first win"
              desc="We choose one practical workflow that can save time or reduce missed steps without becoming too complex."
            />
            <Card
              title="3. Build the workflow"
              desc="We connect forms, spreadsheets, apps, notifications, scripts, dashboards, or AI assistance where it fits."
            />
            <Card
              title="4. Test and improve"
              desc="We validate the workflow, adjust it around real usage, and document the process so it stays maintainable."
            />
          </div>
        </section>

        <section className="mb-12 rounded-3xl bg-gray-900 p-8 text-white">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Not sure what to automate first?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">
                Start with a Business Tech & AI Opportunity Scan. We can review your website, forms,
                follow-up process, manual admin tasks, and tech stack to find practical next steps.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/business-tech-ai-opportunity-scan"
                className="inline-flex w-full justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 md:w-auto"
              >
                Request an Opportunity Scan
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Business automation FAQs
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Do I need a full CRM before automation?"
              answer="No. Some businesses start with a cleaner form, spreadsheet, email notification, or dashboard before choosing a larger system."
            />
            <FAQ
              question="Can automation work with tools I already use?"
              answer="Usually, yes. The first step is reviewing your current forms, spreadsheets, email, files, website, and business apps."
            />
            <FAQ
              question="Where does AI fit into automation?"
              answer="AI can help with summarizing, drafting, intake review, document search, and internal assistance, but it should support a clear workflow."
            />
            <FAQ
              question="Can you build custom tools?"
              answer="Yes. Bedsun Tech can build lightweight dashboards, portals, scripts, trackers, and internal tools when off-the-shelf options do not fit."
            />
          </div>
        </section>
      </div>
    </>
  );
}
