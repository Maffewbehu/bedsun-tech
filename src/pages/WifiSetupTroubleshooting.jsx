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


const PAGE_PATH = "/wifi-setup-troubleshooting";

const FAQS = [
  { question: "Can you help if my Wi-Fi is weak in certain rooms?", answer: "Yes. I can help check signal issues, router placement, dead zones, device behavior, and practical improvement options." },
  { question: "Can you reconnect devices after a router change?", answer: "Yes. Router changes often break printers, cameras, smart TVs, and other devices. I can reconnect devices and help clean up password or network confusion." },
  { question: "Can you tell if the issue is my internet provider or my Wi-Fi?", answer: "I can help narrow down whether the issue looks like a provider or modem problem, a router issue, a weak signal issue, or a device-specific problem." },
  { question: "Do you help seniors with Wi-Fi setup?", answer: "Yes. Wi-Fi help can be provided patiently with simple explanations for seniors, families, and anyone who wants the setup easier to understand." },
];

const PAGE_STRUCTURED_DATA = [
  serviceSchema({
    name: "Wi-Fi Setup and Troubleshooting in Las Vegas",
    description: "Wi-Fi setup and troubleshooting in Las Vegas for weak Wi-Fi, router setup, internet issues, dead zones, smart TV connections, printer Wi-Fi problems, and home network help.",
    path: PAGE_PATH,
    serviceType: "Wi-Fi setup and troubleshooting",
    audience: "Home users, seniors, families, and home office users",
    keywords: ["weak Wi-Fi", "router setup", "Wi-Fi dead zones", "smart TV Wi-Fi", "printer Wi-Fi"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

export default function WifiSetupTroubleshooting() {
  return (
    <>
      <SEO
        title="Wi-Fi Setup and Troubleshooting in Las Vegas | Bedsun Tech"
        description="Wi-Fi setup and troubleshooting in Las Vegas for weak Wi-Fi, router setup, internet issues, dead zones, smart TV connections, printer Wi-Fi problems, and home network help."
        path={PAGE_PATH}
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <div>
        <SectionTitle
          kicker="Wi-Fi Help"
          title="Wi-Fi setup and troubleshooting in Las Vegas"
          desc="Bedsun Tech helps with weak Wi-Fi, router setup, dead zones, internet connection issues, smart TV connection problems, printer Wi-Fi issues, cameras, and everyday home network troubleshooting."
        />

        {/* Hero CTA */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                When the Wi-Fi is slow, weak, or confusing, I can help make the setup easier to understand.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Wi-Fi issues can affect everything: printers, phones, smart TVs, cameras, streaming
                apps, laptops, and home office work. I help troubleshoot the real cause and explain
                the fix in plain English.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Weak Wi-Fi signal</Pill>
                <Pill>Router setup</Pill>
                <Pill>Dead zones</Pill>
                <Pill>Smart TV and printer connections</Pill>
              </div>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Schedule Wi-Fi Help
              </Link>
            </div>
          </div>
        </section>

        {/* Common Wi-Fi issues */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Common Wi-Fi problems I can help with
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Practical support for home internet and Wi-Fi problems that make everyday technology harder to use.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Weak Wi-Fi or dead zones"
              desc="Troubleshoot rooms with poor signal, unreliable connections, buffering, dropped video calls, and devices that only work in certain parts of the home."
            />
            <Card
              title="Router and modem setup"
              desc="Help with basic router setup, network names, passwords, modem/router placement, device connections, and making the setup easier to manage."
            />
            <Card
              title="Smart TV and streaming connection issues"
              desc="Connect smart TVs, Roku, Fire Stick, Apple TV, and streaming apps to the right Wi-Fi network and troubleshoot buffering or login confusion."
            />
            <Card
              title="Printer and camera Wi-Fi problems"
              desc="Help printers, Ring cameras, security cameras, and smart devices reconnect after router changes, password changes, or network issues."
            />
            <Card
              title="New device connection help"
              desc="Connect phones, tablets, laptops, printers, smart home devices, and other equipment to your home Wi-Fi and verify they work correctly."
            />
            <Card
              title="Simple home network cleanup"
              desc="Review confusing network names, old devices, password confusion, duplicate networks, and practical ways to make the setup cleaner."
            />
          </div>
        </section>

        {/* Why Wi-Fi breaks */}
        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>Your Wi-Fi works in one room but not another.</Bullet>
                <Bullet>Your smart TV, printer, camera, or phone keeps disconnecting.</Bullet>
                <Bullet>You changed your router or Wi-Fi password and devices stopped working.</Bullet>
                <Bullet>Your internet feels slow but you are not sure if it is the provider or Wi-Fi.</Bullet>
                <Bullet>You want someone patient to explain the setup without confusing jargon.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Wi-Fi problems are not always caused by the internet provider
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Sometimes the problem is the internet connection coming into the home. Other times
                the problem is router placement, weak signal, too many confusing network names, old
                equipment, a changed password, or a device connected to the wrong network.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech focuses on narrowing down the cause, testing the devices you actually
                use, and leaving you with a clearer understanding of what is working and what may
                need to be improved.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How Wi-Fi help works
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Understand the issue"
              desc="I review where the Wi-Fi fails, which devices are affected, what changed recently, and whether the problem is speed, signal, setup, or device-specific."
            />
            <Card
              title="2. Test the connection"
              desc="I check the modem/router setup, Wi-Fi network, device connections, router placement, and practical signs of weak signal or configuration issues."
            />
            <Card
              title="3. Clean up and explain"
              desc="We reconnect devices, simplify confusing parts of the setup when possible, and go over clear next steps in plain English."
            />
          </div>
        </section>

        {/* Related services */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Related help
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                Wi-Fi issues often affect printers, smart TVs, cameras, and phones
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm leading-relaxed text-gray-600">
                If the Wi-Fi problem is causing your printer, smart TV, streaming device, phone,
                tablet, camera, or Ring device to stop working, I can help with the full setup. The
                goal is to make the home technology environment more reliable, not just restart the
                router once.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/printer-setup-troubleshooting"
                  className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  View Printer Help
                </Link>
                <Link
                  to="/personal-tech-help"
                  className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  View Personal Tech Help
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Wi-Fi help FAQs
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Can you help if my Wi-Fi is weak in certain rooms?"
              answer="Yes. I can help check signal issues, router placement, dead zones, device behavior, and practical improvement options."
            />
            <FAQ
              question="Can you reconnect devices after a router change?"
              answer="Yes. Router changes often break printers, cameras, smart TVs, and other devices. I can reconnect devices and help clean up password or network confusion."
            />
            <FAQ
              question="Can you tell if the issue is my internet provider or my Wi-Fi?"
              answer="I can help narrow down whether the issue looks like a provider/modem problem, a router issue, a weak signal issue, or a device-specific problem."
            />
            <FAQ
              question="Do you help seniors with Wi-Fi setup?"
              answer="Yes. Wi-Fi help can be provided patiently with simple explanations for seniors, families, and anyone who wants the setup easier to understand."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4">
          <div className="rounded-3xl border border-gray-200 bg-gray-900 p-8 text-white shadow-sm">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Need help getting your Wi-Fi working better?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  Reach out with what is happening, which devices are affected, and whether anything
                  changed recently with your router, modem, internet provider, or Wi-Fi password.
                </p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex w-full justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 md:w-auto"
                >
                  Schedule Wi-Fi Help
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
