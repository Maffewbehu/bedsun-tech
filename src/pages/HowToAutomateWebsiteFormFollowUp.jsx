import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { articleSchema, faqPageSchema } from "../lib/structuredData";

const PAGE_PATH = "/blog/how-to-automate-website-form-follow-up";

const FAQS = [
  {
    question: "What is website form follow-up automation?",
    answer:
      "It is a workflow that automatically sends form submissions to the right place, notifies the right person, logs the lead, and can send a timely response or next step.",
  },
  {
    question: "Can form automation work without a CRM?",
    answer:
      "Yes. Some businesses start with email notifications, spreadsheets, shared inboxes, or simple dashboards before moving into a full CRM.",
  },
  {
    question: "Can AI help with form follow-up?",
    answer:
      "AI can help summarize form submissions, draft replies, categorize requests, or prepare next-step notes, but important messages should still be reviewed by a person.",
  },
  {
    question: "Why do businesses lose leads from website forms?",
    answer:
      "Businesses lose leads when forms break, notifications go to the wrong inbox, follow-up is delayed, submissions are not tracked, or no one owns the next step.",
  },
];

const PAGE_STRUCTURED_DATA = [
  articleSchema({
    title: "How to Automate Website Form Follow-Up",
    description:
      "A practical guide to automating small business website form follow-up with notifications, tracking, spreadsheets, CRM workflows, and AI-assisted summaries.",
    path: PAGE_PATH,
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    keywords: ["website form automation", "lead follow-up automation", "small business automation", "AI form follow-up"],
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

export default function HowToAutomateWebsiteFormFollowUp() {
  return (
    <>
      <SEO
        title="How to Automate Website Form Follow-Up | Bedsun Tech"
        description="Learn how small businesses can automate website form follow-up, lead notifications, spreadsheets, CRM workflows, and AI-assisted response drafts."
        path={PAGE_PATH}
        type="article"
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <article>
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Business Automation • Bedsun Tech Guide
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to automate website form follow-up
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            A website form should do more than send a basic email. For a small business, the form can become the starting point for cleaner lead tracking, faster follow-up, better customer intake, and less manual admin work.
          </p>
        </div>

        <section className="mb-10 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">The quick answer</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            To automate website form follow-up, send submissions to the right inbox, save each lead somewhere trackable, notify the right person, create a clear next step, and optionally use AI to summarize the request or draft a response for review.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/business-automation" className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800">View Automation Services</Link>
            <Link to="/business-tech-ai-opportunity-scan" className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">Request Opportunity Scan</Link>
          </div>
        </section>

        <Section title="What a better form workflow can include">
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="Reliable notifications">Send the form to the right inbox or team member so leads do not get buried.</Card>
            <Card title="Lead tracking">Save each submission to a spreadsheet, CRM, database, or dashboard for follow-up visibility.</Card>
            <Card title="Auto-reply confirmation">Let the customer know the message was received and what to expect next.</Card>
            <Card title="Internal routing">Separate quote requests, support requests, booking questions, and urgent issues.</Card>
            <Card title="AI-assisted summaries">Summarize the request so the business owner or team can understand it quickly.</Card>
            <Card title="Follow-up reminders">Create a reminder or task so leads do not disappear after the first message.</Card>
          </div>
        </Section>

        <Section title="A simple follow-up workflow example">
          <ol className="space-y-3">
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">1. Customer submits the form.</strong> The website collects the name, contact information, service need, and message.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">2. The lead is saved.</strong> The submission goes into a spreadsheet, CRM, or internal tracker.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">3. The right person is notified.</strong> Email, text, Teams, Slack, or another notification method can be used.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">4. AI can summarize or draft.</strong> AI can prepare a short summary or suggested response for review.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">5. Follow-up is tracked.</strong> The business can see whether the lead was contacted, booked, quoted, or closed.</li>
          </ol>
        </Section>

        <Section title="When to automate your forms">
          <p>
            Form automation is worth considering if leads are being missed, customers wait too long, you copy and paste details manually, staff do not know who owns the next step, or the website form does not connect to any real business process.
          </p>
          <p>
            Bedsun Tech helps small businesses improve website forms, automate follow-up, organize lead tracking, and build practical AI-assisted workflows when they make sense.
          </p>
        </Section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Want your website form to do more?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
            Bedsun Tech can review your website, forms, follow-up process, and manual admin steps to find practical automation opportunities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/business-tech-ai-opportunity-scan" className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">Request an Opportunity Scan</Link>
            <Link to="/small-business-website-design" className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">View Website Help</Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Website form automation FAQs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {FAQS.map((faq) => <FAQ key={faq.question} question={faq.question} answer={faq.answer} />)}
          </div>
        </section>
      </article>
    </>
  );
}
