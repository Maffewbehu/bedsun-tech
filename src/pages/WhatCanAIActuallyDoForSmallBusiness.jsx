import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { articleSchema, faqPageSchema } from "../lib/structuredData";

const PAGE_PATH = "/blog/what-can-ai-actually-do-for-small-business";

const FAQS = [
  {
    question: "What can AI actually do for a small business?",
    answer:
      "AI can help with repeated writing, summaries, customer intake, internal search, follow-up drafts, document organization, reporting support, and workflow assistance when it is connected to a clear business process.",
  },
  {
    question: "Does every business need an AI chatbot?",
    answer:
      "No. A chatbot can help in some cases, but many businesses get more value from simpler workflows like better forms, lead follow-up, document summaries, and internal tools.",
  },
  {
    question: "What is a good first AI project?",
    answer:
      "A good first AI project is usually one repeated task that already wastes time every week, such as intake review, summarizing notes, drafting follow-up, or organizing information.",
  },
  {
    question: "Can AI replace my staff?",
    answer:
      "For most small businesses, AI is better used as support for repetitive tasks, not as a full replacement for human judgment, customer service, or decision-making.",
  },
];

const PAGE_STRUCTURED_DATA = [
  articleSchema({
    title: "What Can AI Actually Do for a Small Business?",
    description:
      "A practical small business guide to realistic AI use cases, including customer intake, follow-up, document organization, reporting, and workflow support.",
    path: PAGE_PATH,
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    keywords: ["small business AI", "AI integration", "practical AI workflows", "AI automation Las Vegas"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">{children}</div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{children}</p>
    </div>
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

export default function WhatCanAIActuallyDoForSmallBusiness() {
  return (
    <>
      <SEO
        title="What Can AI Actually Do for a Small Business? | Bedsun Tech"
        description="A practical guide to what AI can do for small businesses, including intake, follow-up, document organization, internal tools, and workflow automation."
        path={PAGE_PATH}
        type="article"
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <article>
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Small Business AI • Bedsun Tech Guide
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What can AI actually do for a small business?
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            AI does not need to be mysterious or overhyped. For small businesses, the best AI projects usually start with practical problems: repeated questions, messy intake, manual follow-up, scattered documents, or admin work that eats up time.
          </p>
        </div>

        <section className="mb-10 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">The quick answer</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            AI can help small businesses summarize information, draft responses, organize documents, improve customer intake, support lead follow-up, answer common internal questions, and reduce repetitive admin work. The key is connecting AI to a real workflow, not adding it just because it sounds impressive.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/ai-integration-small-business" className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800">View AI Integration Services</Link>
            <Link to="/business-tech-ai-opportunity-scan" className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">Request Opportunity Scan</Link>
          </div>
        </section>

        <Section title="Practical AI use cases for small businesses">
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="Customer intake summaries">Turn long form submissions, notes, or emails into clean summaries your team can review faster.</Card>
            <Card title="Lead follow-up drafts">Generate draft replies or next-step messages after someone fills out a website form.</Card>
            <Card title="Internal knowledge assistants">Help staff search business notes, documents, policies, service details, or common procedures.</Card>
            <Card title="Document organization">Summarize files, label documents, extract important details, or make information easier to find.</Card>
            <Card title="Reporting support">Turn spreadsheet or dashboard data into short summaries, notes, or weekly review points.</Card>
            <Card title="Website workflow improvements">Use AI to support FAQs, service explanations, form routing, and customer education.</Card>
          </div>
        </Section>

        <Section title="What AI should not do by itself">
          <p>
            AI should not be given blind control over sensitive business decisions, private customer information, money movement, legal conclusions, medical advice, or anything that needs careful human judgment. It works best when it supports a person, creates a draft, summarizes information, or helps organize the next step.
          </p>
          <p>
            A good AI workflow has clear boundaries: what information goes in, what output comes out, who reviews it, and what happens next.
          </p>
        </Section>

        <Section title="How to choose your first AI project">
          <ol className="space-y-3">
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">1. Pick a repeated task.</strong> Look for something that happens every day or every week.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">2. Keep it narrow.</strong> Start with one workflow instead of trying to automate the whole business.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">3. Clean up the process first.</strong> AI works better when forms, files, and steps are organized.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">4. Keep human review.</strong> Let AI support the work, then have a person approve important output.</li>
          </ol>
        </Section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Want to find realistic AI opportunities in your business?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
            Bedsun Tech can review your website, forms, follow-up process, manual admin tasks, files, and current tools to identify practical AI and automation opportunities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/business-tech-ai-opportunity-scan" className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">Request an Opportunity Scan</Link>
            <Link to="/business-automation" className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">View Automation Services</Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Small business AI FAQs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {FAQS.map((faq) => <FAQ key={faq.question} question={faq.question} answer={faq.answer} />)}
          </div>
        </section>
      </article>
    </>
  );
}
