import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { articleSchema, faqPageSchema } from "../lib/structuredData";

const PAGE_PATH = "/blog/how-to-improve-wifi-signal-in-your-home";

const FAQS = [
  {
    question: "Why is my Wi-Fi weak in some rooms?",
    answer:
      "Weak Wi-Fi is usually caused by distance from the router, walls, interference, router placement, older equipment, or too many devices sharing a poor signal.",
  },
  {
    question: "Will a Wi-Fi extender fix bad signal?",
    answer:
      "Sometimes, but not always. Extenders can help in the right location, but a mesh system, better router placement, or wiring an access point may be a better fix depending on the home.",
  },
  {
    question: "Can weak Wi-Fi affect printers and smart TVs?",
    answer:
      "Yes. Printers, smart TVs, streaming sticks, cameras, and Ring devices often disconnect or buffer when Wi-Fi signal is weak or inconsistent.",
  },
  {
    question: "When should I get help with home Wi-Fi?",
    answer:
      "Get help if the same rooms or devices keep disconnecting, your smart TV buffers, your printer drops offline, or router settings and device connections become confusing.",
  },
];

const PAGE_STRUCTURED_DATA = [
  articleSchema({
    title: "How to Improve Wi-Fi Signal in Your Home",
    description:
      "A plain-English guide to improving home Wi-Fi signal, reducing dead zones, and understanding when router placement, extenders, mesh Wi-Fi, or support may help.",
    path: PAGE_PATH,
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    keywords: [
      "improve Wi-Fi signal",
      "home Wi-Fi help",
      "Wi-Fi dead zones",
      "Wi-Fi troubleshooting Las Vegas",
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

export default function HowToImproveWifiSignalInYourHome() {
  return (
    <>
      <SEO
        title="How to Improve Wi-Fi Signal in Your Home | Bedsun Tech"
        description="Learn simple ways to improve home Wi-Fi signal, reduce dead zones, fix buffering smart TVs, and know when to get Wi-Fi help in Las Vegas."
        path={PAGE_PATH}
        type="article"
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <article>
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Wi-Fi Help • Bedsun Tech Guide
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to improve Wi-Fi signal in your home
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            Weak Wi-Fi can make smart TVs buffer, printers go offline, cameras disconnect, and phones feel unreliable. The good news is that many home Wi-Fi problems can be narrowed down with a few practical checks.
          </p>
        </div>

        <section className="mb-10 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">The quick answer</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            To improve Wi-Fi signal, start with router placement, remove obvious interference, restart the modem and router, check which devices are affected, and decide whether the home needs better coverage through a mesh system, extender, or access point.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/wifi-setup-troubleshooting" className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800">
              Get Wi-Fi Help
            </Link>
            <Link to="/personal-tech-help" className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">
              View Personal Tech Help
            </Link>
          </div>
        </section>

        <Section title="Common reasons Wi-Fi signal feels weak">
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="The router is in a poor location">A router hidden in a cabinet, corner, closet, garage, or low shelf may not cover the home well.</Card>
            <Card title="Walls and distance reduce signal">Large homes, upstairs/downstairs layouts, thick walls, mirrors, and appliances can weaken the signal before it reaches your device.</Card>
            <Card title="Devices are using a weak band">Some devices connect to a slower or farther-reaching network, while others need a stronger nearby connection.</Card>
            <Card title="The network is overloaded">Streaming devices, cameras, computers, phones, tablets, and guests can all compete for bandwidth.</Card>
            <Card title="Old router equipment is struggling">Older routers may not handle modern devices, higher speeds, or larger homes well.</Card>
            <Card title="The issue is device-specific">Sometimes only one smart TV, printer, camera, or laptop has the problem because its saved Wi-Fi settings are outdated.</Card>
          </div>
        </Section>

        <Section title="What to try first">
          <ol className="space-y-3">
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">1. Move the router into a more open spot.</strong> A central, elevated location usually works better than a closet or cabinet.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">2. Restart the modem and router.</strong> This can clear temporary connection problems.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">3. Test multiple devices.</strong> If every device has issues, the network may be the problem. If one device fails, that device may need attention.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">4. Check problem rooms.</strong> Make note of where the signal drops, buffers, or disconnects.</li>
            <li className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><strong className="text-gray-900">5. Avoid buying random extenders too quickly.</strong> Extenders can help, but the wrong setup can make the network more confusing.</li>
          </ol>
        </Section>

        <Section title="When to get Wi-Fi help">
          <p>
            It may be time to get help if Wi-Fi is weak in certain rooms, smart TVs keep buffering, printers or cameras keep disconnecting, or a new router made everything harder to manage.
          </p>
          <p>
            Bedsun Tech helps with Wi-Fi setup and troubleshooting in the Las Vegas area, including router setup, dead zones, smart TV connection issues, printer Wi-Fi problems, and device reconnection after router changes.
          </p>
        </Section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Need help making your home Wi-Fi more reliable?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
            Bedsun Tech provides patient local support for Wi-Fi, routers, printers, smart TVs, phones, tablets, cameras, and everyday home technology issues.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/wifi-setup-troubleshooting" className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">Schedule Wi-Fi Help</Link>
            <a href="tel:7022195011" className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">Call 702-219-5011</a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Home Wi-Fi FAQs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {FAQS.map((faq) => <FAQ key={faq.question} question={faq.question} answer={faq.answer} />)}
          </div>
        </section>
      </article>
    </>
  );
}
