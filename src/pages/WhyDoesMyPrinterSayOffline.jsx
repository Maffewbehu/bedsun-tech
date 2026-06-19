import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { articleSchema, faqPageSchema } from "../lib/structuredData";

const PAGE_PATH = "/blog/why-does-my-printer-say-offline";

const FAQS = [
  {
    question: "Why does my printer say offline when it is turned on?",
    answer:
      "A printer can show offline even when it has power if the computer, phone, router, printer queue, driver, or Wi-Fi connection cannot communicate with it correctly.",
  },
  {
    question: "Should I restart my printer or router first?",
    answer:
      "A safe first step is to restart the printer and the device you are printing from. If the printer is wireless and other devices also have connection issues, restarting the router may help too.",
  },
  {
    question: "Can a printer be offline because of Wi-Fi?",
    answer:
      "Yes. Wireless printers often show offline when they are connected to the wrong network, have a weak signal, lost their saved Wi-Fi connection, or the router settings changed.",
  },
  {
    question: "When should I get help with an offline printer?",
    answer:
      "Get help if the printer keeps going offline, will not reconnect to Wi-Fi, will not print from your phone or computer, or if setup screens and printer settings become frustrating.",
  },
];

const PAGE_STRUCTURED_DATA = [
  articleSchema({
    title: "Why Does My Printer Say Offline?",
    description:
      "A plain-English guide to why printers show offline, common causes, safe troubleshooting steps, and when to get printer setup help.",
    path: PAGE_PATH,
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    keywords: [
      "printer says offline",
      "offline printer help",
      "wireless printer troubleshooting",
      "printer setup Las Vegas",
    ],
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

function Step({ title, children }) {
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

export default function WhyDoesMyPrinterSayOffline() {
  return (
    <>
      <SEO
        title="Why Does My Printer Say Offline? | Bedsun Tech"
        description="Learn why your printer says offline, what causes wireless printer connection problems, what to try first, and when to get printer setup help in Las Vegas."
        path={PAGE_PATH}
        type="article"
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <article>
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Printer Help • Bedsun Tech Guide
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why does my printer say offline?
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            An offline printer does not always mean the printer is broken. Most of the time, it
            means the printer and your computer, phone, tablet, or Wi-Fi network are not talking to
            each other correctly.
          </p>
        </div>

        <section className="mb-10 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">The quick answer</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Your printer may say offline because of a Wi-Fi connection problem, a paused print
            queue, the wrong default printer, outdated printer software, a router change, or a lost
            connection between the printer and the device you are printing from.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/printer-setup-troubleshooting"
              className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
            >
              Get Printer Help
            </Link>
            <Link
              to="/contact"
              className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Contact Bedsun Tech
            </Link>
          </div>
        </section>

        <Section title="Common reasons a printer shows offline">
          <div className="grid gap-4 md:grid-cols-2">
            <Step title="The printer lost Wi-Fi connection">
              Wireless printers can disconnect after a router reboot, password change, weak signal,
              or network name change.
            </Step>
            <Step title="Your device is on a different network">
              Your phone, tablet, or computer may be connected to a guest network, hotspot, or
              different Wi-Fi band than the printer.
            </Step>
            <Step title="The print queue is stuck">
              A failed job can hold up everything behind it and make the printer look unavailable.
            </Step>
            <Step title="The wrong printer is selected">
              Computers sometimes keep old printer entries, duplicate printers, or virtual printers
              as the default option.
            </Step>
            <Step title="Printer software or drivers are outdated">
              After computer updates, printer software may need to be repaired, updated, or
              reinstalled.
            </Step>
            <Step title="The printer has an internal error">
              Paper jams, low supplies, scanner errors, sleep mode, or stuck control panel messages
              can stop printing.
            </Step>
          </div>
        </Section>

        <Section title="What to try before replacing the printer">
          <p>
            Before buying a new printer, try these simple steps. They solve many common offline
            printer problems without needing to replace the device.
          </p>
          <ol className="space-y-3">
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <strong className="text-gray-900">1. Restart the printer.</strong> Turn it off, wait
              about 30 seconds, and turn it back on.
            </li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <strong className="text-gray-900">2. Restart the device you are printing from.</strong>
              This can clear a stuck connection or print queue.
            </li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <strong className="text-gray-900">3. Check Wi-Fi.</strong> Make sure the printer and
              your computer or phone are connected to the correct network.
            </li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <strong className="text-gray-900">4. Clear old print jobs.</strong> Cancel stuck jobs
              and try a fresh test page.
            </li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <strong className="text-gray-900">5. Confirm the default printer.</strong> Make sure
              your device is not sending the job to an old printer or a duplicate printer entry.
            </li>
          </ol>
        </Section>

        <Section title="When it is time to get help">
          <p>
            It may be time to get help if the printer keeps going offline, will not reconnect to
            Wi-Fi, will not print from your phone or tablet, or if the setup screens become too
            confusing. Printer issues can involve the printer, router, computer, phone, software,
            drivers, and account settings all at once.
          </p>
          <p>
            Bedsun Tech helps with printer setup and troubleshooting in the Las Vegas area,
            including wireless printer setup, offline printer fixes, printing from phones and
            tablets, scanner setup, and home office printer support.
          </p>
        </Section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Need help getting your printer working?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
            Bedsun Tech provides patient local technology help for printers, Wi-Fi, phones,
            tablets, smart TVs, email, passwords, and everyday home tech issues.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/printer-setup-troubleshooting"
              className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Schedule Printer Help
            </Link>
            <a
              href="tel:7022195011"
              className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Call 702-219-5011
            </a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Printer offline FAQs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {FAQS.map((faq) => (
              <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
          Related service: {" "}
          <Link to="/printer-setup-troubleshooting" className="font-semibold text-indigo-700">
            Printer Setup & Troubleshooting in Las Vegas
          </Link>
        </div>
      </article>
    </>
  );
}
