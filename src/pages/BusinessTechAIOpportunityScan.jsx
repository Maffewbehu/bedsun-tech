import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { faqPageSchema, serviceSchema } from "../lib/structuredData";

const PAGE_PATH = "/business-tech-ai-opportunity-scan";
const REQUEST_PATH = "/contact?service=opportunity-scan";

const FAQS = [
  {
    question: "What will I receive?",
    answer: "A written summary of the agreed review, a prioritized list of up to three practical improvements, and a recommended first step. Each recommendation explains the issue, the proposed change, and what would be needed to move forward.",
  },
  {
    question: "How much does the scan cost?",
    answer: "The scan is quoted for your business and the agreed review scope. Matt confirms the fee before work begins. Send a short description of the problem so the review can be scoped appropriately.",
  },
  {
    question: "How long does it take?",
    answer: "The review length and delivery date are agreed before the scan starts, based on the scope and the information needed. Matt confirms availability when following up on your request.",
  },
  {
    question: "Does the scan include building or fixing the system?",
    answer: "The scan provides the review and written recommendations. Implementation is scoped and quoted separately, so you can decide which improvement to pursue after seeing the plan.",
  },
  {
    question: "Do I need to know what to automate?",
    answer: "You can start with a repeated task, a website concern, missed follow-up, or a process that feels harder than it should. The review helps identify a practical next step using your existing tools where appropriate.",
  },
  {
    question: "Is this only for AI projects?",
    answer: "The recommendation may involve a clearer form, better account organization, a dashboard, automation, or AI assistance. The focus is the business problem and the work needed to improve it.",
  },
];

const REVIEW_AREAS = [
  { title: "Website and landing pages", description: "How clearly the site explains your services, works on mobile, and helps a customer take the next step." },
  { title: "Forms and lead capture", description: "What your forms collect, where requests go, and how easily someone can ask for help." },
  { title: "Customer follow-up", description: "How inquiries are handed over, what gets repeated, and where reminders or clearer steps could help." },
  { title: "Repeated admin work", description: "Recurring tasks, copied information, reporting steps, and other work that could be simplified." },
  { title: "Business tools and data", description: "How your email, spreadsheets, files, and other tools support the process you want reviewed." },
  { title: "Automation and AI", description: "Practical ways to connect tools, organize information, or assist a task while keeping the process understandable." },
];

const PAGE_STRUCTURED_DATA = [
  serviceSchema({
    name: "Business Tech and AI Opportunity Scan in Las Vegas",
    description: "A scoped review of business technology with written findings, prioritized improvements, and a recommended first step. Scope, fee, and delivery date are agreed before work begins.",
    path: PAGE_PATH,
    serviceType: "Business technology and AI opportunity review",
    audience: "Small business owners and local business teams",
    keywords: ["AI opportunity scan", "business tech review", "website review", "workflow automation", "lead follow-up"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

function RequestLink() {
  return (
    <Link to={REQUEST_PATH} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-700">
      Request an Opportunity Scan
    </Link>
  );
}

export default function BusinessTechAIOpportunityScan() {
  return (
    <>
      <SEO
        title="Business Tech & AI Opportunity Scan in Las Vegas | Bedsun Tech"
        description="Get a scoped business tech review with written findings, prioritized improvements, and a practical first step. Scope, fee, and timing are confirmed before work begins."
        path={PAGE_PATH}
        structuredData={PAGE_STRUCTURED_DATA}
      />
      <div>
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">Business Tech + AI Opportunity Scan</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Know which business tech improvement to make first.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">Bring a website concern, a repeated task, or a process that keeps slowing you down. Bedsun Tech helps Las Vegas small businesses turn it into a practical improvement plan.</p>
        </header>

        <section className="mb-12 rounded-3xl border border-indigo-100 bg-indigo-50 p-6 shadow-sm sm:p-8" aria-labelledby="scan-offer-heading">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="scan-offer-heading" className="text-2xl font-bold tracking-tight text-gray-900">A focused review. A written plan.</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700">We agree on the part of your business to review, look at how it works today, and identify the most useful next steps. You receive written findings and a prioritized improvement plan you can refer back to.</p>
              <div className="mt-6"><RequestLink /></div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">Start with a few details. Matt follows up to confirm the scope, fee, and delivery date.</p>
            </div>
            <dl className="space-y-5 rounded-2xl border border-indigo-100 bg-white p-6 text-base leading-relaxed lg:col-span-5">
              <div><dt className="font-semibold text-gray-900">Price</dt><dd className="mt-1 text-gray-600">Quoted for the agreed review. The fee is confirmed before work begins.</dd></div>
              <div><dt className="font-semibold text-gray-900">Timing</dt><dd className="mt-1 text-gray-600">Review length and delivery date agreed in advance.</dd></div>
              <div><dt className="font-semibold text-gray-900">Deliverable</dt><dd className="mt-1 text-gray-600">Written findings, up to three priorities, and a recommended first step.</dd></div>
              <div><dt className="font-semibold text-gray-900">Implementation</dt><dd className="mt-1 text-gray-600">Separately scoped and quoted after you review the plan.</dd></div>
            </dl>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="scan-deliverables-heading">
          <h2 id="scan-deliverables-heading" className="text-2xl font-bold tracking-tight text-gray-900">What you take away</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">A clear view of the issue</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">A written summary of the process reviewed, the tools involved, and where the friction occurs.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Up to three priorities</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">The practical improvements in priority order, with the proposed change and what would be needed to make it.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">A useful first step</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">One recommended place to start, with a clear basis for discussing implementation and a separate project quote.</p>
            </div>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="scan-areas-heading">
          <h2 id="scan-areas-heading" className="text-2xl font-bold tracking-tight text-gray-900">Choose the areas that matter to your business</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">These are possible review areas. We narrow the scope around your main problem before starting.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEW_AREAS.map(area => (
              <div key={area.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{area.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8" aria-labelledby="scan-process-heading">
          <h2 id="scan-process-heading" className="text-2xl font-bold tracking-tight text-gray-900">How it works</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            <li><h3 className="text-lg font-semibold text-gray-900">1. Tell Matt what needs improving</h3><p className="mt-2 text-base leading-relaxed text-gray-600">Describe the problem in the short request form. Your website and current tools are helpful details if you have them.</p></li>
            <li><h3 className="text-lg font-semibold text-gray-900">2. Agree on the review</h3><p className="mt-2 text-base leading-relaxed text-gray-600">Confirm the areas covered, information needed, fee, and delivery date before the scan begins.</p></li>
            <li><h3 className="text-lg font-semibold text-gray-900">3. Review your written plan</h3><p className="mt-2 text-base leading-relaxed text-gray-600">Get the findings and priorities, then decide which improvement you want to pursue.</p></li>
          </ol>
        </section>

        <section className="mb-12" aria-labelledby="scan-examples-heading">
          <h2 id="scan-examples-heading" className="text-2xl font-bold tracking-tight text-gray-900">See examples of the work</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">Explore a working intake assistant and a business dashboard built by Bedsun Tech. They show the kind of tools that can follow a focused review.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/projects#website-intake" className="inline-flex min-h-11 items-center rounded-xl border border-indigo-200 px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-50">Website intake example</Link>
            <Link to="/projects#business-dashboard" className="inline-flex min-h-11 items-center rounded-xl border border-indigo-200 px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-50">Business dashboard example</Link>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="scan-faq-heading">
          <h2 id="scan-faq-heading" className="text-2xl font-bold tracking-tight text-gray-900">Common questions</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {FAQS.map(faq => (
              <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">What would you like your business to do more easily?</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">Send the problem in your own words. We will use that to scope the review and agree on the next step.</p>
          <div className="mt-6"><RequestLink /></div>
        </section>
      </div>
    </>
  );
}
