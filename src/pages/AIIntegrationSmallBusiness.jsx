import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { faqPageSchema, serviceSchema } from "../lib/structuredData";

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mb-8">
      {kicker ? <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">{kicker}</div> : null}
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
      {desc ? <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">{desc}</p> : null}
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

function FAQ({ question, answer }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-gray-900">{question}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{answer}</p>
    </div>
  );
}


const PAGE_PATH = "/ai-integration-small-business";

const FAQS = [
  { question: "Do I need to know how AI works?", answer: "No. The goal is to translate your business process into practical tools and workflows, not overwhelm you with technical details." },
  { question: "Can AI connect to my website or forms?", answer: "Often, yes. Depending on your setup, AI can support form review, summaries, routing, draft responses, FAQs, and follow-up workflows." },
  { question: "Is AI safe for business information?", answer: "It depends on the tools, data, permissions, and workflow. Bedsun Tech can help think through what should be automated, what needs human review, and what information should stay protected." },
  { question: "What is the best first AI project?", answer: "Usually one repeated task that takes time every week, such as intake review, follow-up messages, document summaries, reporting, or organizing customer information." },
];

const PAGE_STRUCTURED_DATA = [
  serviceSchema({
    name: "AI Integration for Small Businesses in Las Vegas",
    description: "Practical AI integration for Las Vegas small businesses. Bedsun Tech helps with AI workflows, automation, customer intake, follow-up, internal tools, and process cleanup.",
    path: PAGE_PATH,
    serviceType: "AI integration and workflow automation",
    audience: "Small business owners and teams",
    keywords: ["AI integration", "small business AI", "AI workflows", "customer intake automation", "internal AI assistants"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

export default function AIIntegrationSmallBusiness() {
  return (
    <>
      <SEO
        title="AI Integration for Small Businesses in Las Vegas | Bedsun Tech"
        description="Practical AI integration for Las Vegas small businesses. Bedsun Tech helps with AI workflows, automation, customer intake, follow-up, internal tools, and process cleanup."
        path={PAGE_PATH}
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <div>
        <SectionTitle
          kicker="Business Tech + AI"
          title="Practical AI integration for small businesses"
          desc="Bedsun Tech helps Las Vegas small businesses use AI in realistic ways: cleaner workflows, faster intake, better follow-up, organized information, internal tools, and less repetitive manual work."
        />

        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                AI should solve real business problems, not create another confusing tool to manage.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                The best AI projects usually start with one repeated task: answering the same questions,
                reviewing form submissions, organizing notes, drafting follow-up messages, summarizing
                information, or helping staff find the right details faster. Bedsun Tech helps identify
                those opportunities and build practical systems around them.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Talk About AI Help
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">What AI can actually help with</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              This is not about hype. It is about finding repeated work and using AI, automation, and simple tools to make that work easier.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Card title="Customer intake assistance" desc="Use AI to help review intake forms, summarize customer needs, organize details, and prepare cleaner next steps for your team." />
            <Card title="Lead follow-up workflows" desc="Create better follow-up drafts, reminders, form routing, and response workflows so leads do not sit untouched." />
            <Card title="Internal AI assistants" desc="Build simple assistants that help staff search documents, summarize notes, draft messages, or answer internal process questions." />
            <Card title="Website workflow improvements" desc="Improve forms, service pages, FAQs, chat-style intake, and the path from website visitor to booked conversation." />
            <Card title="Document and file organization" desc="Use AI-assisted processes to organize documents, extract useful information, summarize files, and reduce manual review time." />
            <Card title="Reporting and admin support" desc="Help turn notes, spreadsheets, forms, and updates into cleaner summaries, reports, dashboards, or repeatable admin workflows." />
          </div>
        </section>

        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Good AI projects start small</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Small businesses do not need a giant AI transformation project. A better starting point is one workflow that wastes time every week.
            </p>
            <ul className="mt-5 space-y-3">
              <Bullet>Find repeated questions, forms, emails, reports, or admin steps.</Bullet>
              <Bullet>Clean up the process before adding automation or AI.</Bullet>
              <Bullet>Build a simple tool or workflow that your team can actually use.</Bullet>
              <Bullet>Review privacy, access, and human approval points before relying on AI output.</Bullet>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">A practical AI review can uncover quick wins</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Bedsun Tech can review your website, forms, manual tasks, follow-up process, spreadsheets, files, and current tools to find realistic places AI or automation could help.
            </p>
            <Link
              to="/business-tech-ai-opportunity-scan"
              className="mt-5 inline-flex rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              Request an Opportunity Scan
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Examples by business type</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <Card title="Contractors and home services" desc="Lead intake, quote request summaries, job notes, scheduling handoff, customer follow-up, and service FAQ workflows." />
            <Card title="Beauty, wellness, and med spas" desc="Service page improvements, client intake, appointment prep, review request workflows, FAQs, and follow-up drafts." />
            <Card title="Professional services" desc="Document summaries, client intake, email drafts, internal knowledge bases, reporting, and repeatable admin workflows." />
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Common AI integration questions</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <FAQ question="Do I need to know how AI works?" answer="No. The goal is to translate your business process into practical tools and workflows, not overwhelm you with technical details." />
            <FAQ question="Can AI connect to my website or forms?" answer="Often, yes. Depending on your setup, AI can support form review, summaries, routing, draft responses, FAQs, and follow-up workflows." />
            <FAQ question="Is AI safe for business information?" answer="It depends on the tools, data, permissions, and workflow. Bedsun Tech can help think through what should be automated, what needs human review, and what information should stay protected." />
            <FAQ question="What is the best first AI project?" answer="Usually one repeated task that takes time every week, such as intake review, follow-up messages, document summaries, reporting, or organizing customer information." />
          </div>
        </section>

        <section className="rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Curious where AI could help your business?</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-700">
            Start with a simple conversation. Bedsun Tech can help review your workflow, identify realistic AI opportunities, and recommend a practical first step.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link to="/business-tech-ai-opportunity-scan" className="inline-flex justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
              Request an Opportunity Scan
            </Link>
            <Link to="/business-automation" className="inline-flex justify-center rounded-2xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
              View Automation Services
            </Link>
            <Link to="/blog/what-can-ai-actually-do-for-small-business" className="inline-flex justify-center rounded-2xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
              Read Small Business AI Guide
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
