import { Link } from "react-router-dom";
import SEO from "../components/SEO";

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

function Step({ number, title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-sm font-bold text-white">
        {number}
      </div>
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

export default function BusinessTechAIOpportunityScan() {
  return (
    <>
      <SEO
        title="Business Tech & AI Opportunity Scan in Las Vegas | Bedsun Tech"
        description="Request a practical business tech and AI opportunity scan for your website, forms, follow-up process, manual admin tasks, tech stack, and automation opportunities."
        path="/business-tech-ai-opportunity-scan"
      />

      <div>
        <SectionTitle
          kicker="Business Tech + AI"
          title="Find the practical tech and AI opportunities hiding inside your business"
          desc="Bedsun Tech helps Las Vegas small businesses review their website, forms, follow-up process, manual admin work, tools, and workflows to find realistic ways technology, automation, or AI can save time and clean up operations."
        />

        <section className="mb-12 rounded-3xl border border-indigo-100 bg-indigo-50 p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                You do not need to know what to automate first. That is the point of the scan.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Many small businesses know something feels messy: leads get missed, forms do not connect anywhere, staff repeat the same steps, files are hard to find, or the website is not helping the business enough. The Opportunity Scan turns that confusion into a clear list of practical next steps.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Request an Opportunity Scan
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">What the scan reviews</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              The goal is to identify useful improvements, not sell a complicated system. The scan looks for problems that can be fixed with better structure, automation, AI assistance, or cleaner tools.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Website and landing pages" desc="Review whether your website clearly explains your services, has strong calls to action, works well on mobile, and gives customers an easy next step." />
            <Card title="Forms and lead capture" desc="Check whether contact forms, quote requests, booking links, and intake forms are collecting the right details and routing them to the right place." />
            <Card title="Lead follow-up" desc="Look for missed follow-up opportunities, manual response steps, reminder gaps, and ways to make customer communication more consistent." />
            <Card title="Manual admin tasks" desc="Find repeated tasks your business does every week that could be simplified, templated, automated, or supported with AI." />
            <Card title="Tech stack and tools" desc="Review the tools you already use, including Microsoft 365, Google Workspace, spreadsheets, CRMs, email, documents, file storage, and websites." />
            <Card title="AI and automation opportunities" desc="Identify realistic places AI or automation could help with intake, summaries, internal tools, reporting, document organization, or customer support workflows." />
          </div>
        </section>

        <section className="mb-12 grid gap-6 md:grid-cols-3">
          <Step number="1" title="Review your current setup" desc="We look at your website, forms, tools, follow-up process, files, spreadsheets, and repeated admin work to understand how things currently operate." />
          <Step number="2" title="Find realistic opportunities" desc="We identify practical improvements: better website flow, cleaner forms, automation ideas, AI workflows, tool cleanup, or simple internal systems." />
          <Step number="3" title="Leave with a clear plan" desc="You get plain-English recommendations, priority order, and a practical first step instead of a vague AI pitch or confusing technical roadmap." />
        </section>

        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">This is a good fit if your business has questions like:</h2>
            <ul className="mt-5 space-y-3">
              <Bullet>Is our website costing us leads?</Bullet>
              <Bullet>Can our forms automatically send better follow-up?</Bullet>
              <Bullet>Where could AI actually save time in our business?</Bullet>
              <Bullet>Are we doing the same admin work over and over?</Bullet>
              <Bullet>Can our spreadsheets, files, or customer details be organized better?</Bullet>
              <Bullet>What should we fix first if our systems feel messy?</Bullet>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Possible outcomes from the scan</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Every business is different, but common recommendations may include website page improvements, better contact forms, automated lead follow-up, intake cleanup, AI-assisted summaries, reporting dashboards, file organization, Microsoft or Google Workspace cleanup, or a custom internal tool.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to="/ai-integration-small-business" className="inline-flex justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                View AI Services
              </Link>
              <Link to="/business-automation" className="inline-flex justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                View Automation
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Common questions</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <FAQ question="Is this only for businesses ready to build AI tools?" answer="No. The scan is for businesses that want to understand where technology could help. The answer might be AI, automation, website improvements, better forms, or simple process cleanup." />
            <FAQ question="Do I need to have a technical project already planned?" answer="No. You can start with a messy process, a website concern, a follow-up problem, or a general feeling that your business tools are not working together well." />
            <FAQ question="What types of businesses is this for?" answer="It is a good fit for local service businesses, contractors, real estate and property businesses, beauty and wellness businesses, consultants, professional services, and small teams with repeated admin work." />
            <FAQ question="Will I get a clear next step?" answer="Yes. The goal is to leave with a practical recommendation, priority order, and a realistic first improvement instead of a broad list of confusing possibilities." />
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ready to find your best tech or AI opportunity?</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Start with a simple review. Bedsun Tech can help turn your website, forms, follow-up, and manual work into a clear improvement plan.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Request an Opportunity Scan
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
