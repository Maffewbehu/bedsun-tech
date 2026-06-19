import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { articleSchema, faqPageSchema } from "../lib/structuredData";

const PAGE_PATH = "/blog/how-to-tell-if-email-or-text-is-a-scam";

const FAQS = [
  {
    question: "What is the biggest warning sign of a scam email or text?",
    answer:
      "A common warning sign is urgency. Scammers often pressure you to click a link, pay money, verify an account, or share a code before you have time to think.",
  },
  {
    question: "Should I click a link if I think the message might be real?",
    answer:
      "It is safer to avoid the link and go directly to the official app or website yourself. You can also call the company using a trusted number, not the number in the message.",
  },
  {
    question: "Can scam texts look like they come from real companies?",
    answer:
      "Yes. Scam texts can impersonate banks, delivery companies, phone providers, streaming services, government agencies, and even people you know.",
  },
  {
    question: "Can Bedsun Tech help review suspicious messages?",
    answer:
      "Yes. Bedsun Tech can help you look at suspicious emails, texts, account warnings, and password concerns in a calm, practical way.",
  },
];

const PAGE_STRUCTURED_DATA = [
  articleSchema({
    title: "How to Tell If an Email or Text Message Is a Scam",
    description:
      "A simple guide to spotting scam emails and texts, avoiding suspicious links, and knowing what to do if you are unsure.",
    path: PAGE_PATH,
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    keywords: ["scam email help", "scam text help", "email safety", "senior online safety"],
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

export default function HowToTellIfEmailOrTextIsAScam() {
  return (
    <>
      <SEO
        title="How to Tell If an Email or Text Is a Scam | Bedsun Tech"
        description="Learn common warning signs of scam emails and texts, what not to click, and when to get email and password safety help in Las Vegas."
        path={PAGE_PATH}
        type="article"
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <article>
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Email Safety • Bedsun Tech Guide
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to tell if an email or text message is a scam
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            Scam messages can look convincing. They may mention a package, bank account, password problem, payment issue, prize, refund, or urgent security warning. Before clicking anything, slow down and look for the signs.
          </p>
        </div>

        <section className="mb-10 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">The quick answer</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            A message may be a scam if it creates urgency, asks you to click a suspicious link, requests a password or security code, threatens account closure, asks for payment through gift cards or unusual methods, or comes from an address or phone number that does not look right.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/email-password-scam-help" className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800">Get Email & Scam Help</Link>
            <Link to="/senior-tech-help" className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">View Senior Tech Help</Link>
          </div>
        </section>

        <Section title="Common scam warning signs">
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="It feels urgent">Scammers often say your account will be closed, your package will be lost, or your money is at risk unless you act immediately.</Card>
            <Card title="The link looks strange">Links may be misspelled, shortened, or close to a real company name but not exactly correct.</Card>
            <Card title="It asks for a code or password">Legitimate companies should not ask you to send your password, one-time code, or recovery code through email or text.</Card>
            <Card title="The message asks for unusual payment">Gift cards, crypto, wire transfers, payment apps, or urgent fees are major warning signs.</Card>
            <Card title="The sender does not match the company">The visible name may look real, but the email address or phone number may be unrelated.</Card>
            <Card title="The message has odd wording">Scam messages may have strange grammar, missing details, or generic greetings.</Card>
          </div>
        </Section>

        <Section title="What to do if you are not sure">
          <ol className="space-y-3">
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">1. Do not click the link.</strong> Open the official app or website yourself instead.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">2. Do not share passwords or codes.</strong> A one-time code can give someone access to your account.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">3. Check the sender carefully.</strong> Look at the full email address or phone number, not just the display name.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">4. Call using a trusted number.</strong> Use the number on the official website, card, or statement.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">5. Ask for help before acting.</strong> A second set of eyes can prevent a costly mistake.</li>
          </ol>
        </Section>

        <Section title="When to get help">
          <p>
            Get help if you clicked a suspicious link, entered a password, shared a security code, see strange account activity, or feel unsure about whether a message is real.
          </p>
          <p>
            Bedsun Tech helps with email, password, and scam safety support in the Las Vegas area, including suspicious message review, account recovery guidance, password organization, and safer device setup.
          </p>
        </Section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Unsure about an email or text?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
            Bedsun Tech provides patient local help for email issues, password resets, scam concerns, account recovery, and everyday technology questions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/email-password-scam-help" className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">Get Scam Safety Help</Link>
            <a href="tel:7022195011" className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">Call 702-219-5011</a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Scam message FAQs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {FAQS.map((faq) => <FAQ key={faq.question} question={faq.question} answer={faq.answer} />)}
          </div>
        </section>
      </article>
    </>
  );
}
