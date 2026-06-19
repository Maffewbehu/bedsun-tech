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


const PAGE_PATH = "/printer-setup-troubleshooting";

const FAQS = [
  { question: "Can you help when my printer says offline?", answer: "Yes. Offline printer issues are common and can be caused by Wi-Fi, driver, queue, default printer, or device connection problems." },
  { question: "Can you help me print from my phone or tablet?", answer: "Yes. I can help set up printing from iPhone, iPad, Android, laptops, and desktop computers when the printer supports it." },
  { question: "Do you set up new printers?", answer: "Yes. I can help connect a new printer, install software, test printing and scanning, and explain the basics." },
  { question: "Can you fix every printer issue?", answer: "Not every printer is worth repairing, but I can help identify whether the issue is setup, Wi-Fi, software, supplies, hardware, or replacement related." },
];

const PAGE_STRUCTURED_DATA = [
  serviceSchema({
    name: "Printer Setup and Troubleshooting in Las Vegas",
    description: "Printer setup and troubleshooting in Las Vegas for offline printers, wireless printer setup, printer Wi-Fi issues, printing from phones and tablets, scanner setup, and home office printer help.",
    path: PAGE_PATH,
    serviceType: "Printer setup and troubleshooting",
    audience: "Home users, seniors, families, and home office users",
    keywords: ["printer says offline", "wireless printer setup", "printer Wi-Fi issues", "print from iPhone", "scanner setup"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

export default function PrinterSetupTroubleshooting() {
  return (
    <>
      <SEO
        title="Printer Setup and Troubleshooting in Las Vegas | Bedsun Tech"
        description="Printer setup and troubleshooting in Las Vegas for offline printers, wireless printer setup, printer Wi-Fi issues, printing from phones and tablets, scanner setup, and home office printer help."
        path={PAGE_PATH}
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <div>
        <SectionTitle
          kicker="Printer Help"
          title="Printer setup and troubleshooting in Las Vegas"
          desc="Bedsun Tech helps with frustrating printer problems at home or in a small office, including offline printers, wireless printer setup, phone and tablet printing, scanner setup, and printer Wi-Fi issues."
        />

        {/* Hero CTA */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                When the printer says offline, will not connect, or will not print, I can help.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Printers are one of the most common technology headaches. I help get printers
                connected, configured, tested, and easier to use so you can print from the devices
                you actually use every day.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Wireless printer setup</Pill>
                <Pill>Offline printer help</Pill>
                <Pill>Phone and tablet printing</Pill>
                <Pill>Scanner setup</Pill>
              </div>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Schedule Printer Help
              </Link>
            </div>
          </div>
        </section>

        {/* Common printer issues */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Common printer problems I can help with
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Practical support for printer issues that are annoying, confusing, or hard to fix alone.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Printer says offline"
              desc="Troubleshoot offline printer messages, stuck print queues, printer status issues, computer connection problems, and network printer confusion."
            />
            <Card
              title="Wireless printer setup"
              desc="Connect a printer to Wi-Fi, verify the network settings, install the right software, and test printing from your computer, phone, or tablet."
            />
            <Card
              title="Printing from iPhone, iPad, or Android"
              desc="Help with AirPrint, mobile print apps, printer discovery issues, app permissions, and getting phones or tablets to see the printer."
            />
            <Card
              title="New printer setup"
              desc="Unbox, connect, configure, update, test, and explain the basics of using a new home or small office printer."
            />
            <Card
              title="Scanner and all-in-one setup"
              desc="Set up scanner software, scan-to-computer workflows, basic scan settings, and simple file saving guidance for all-in-one printers."
            />
            <Card
              title="Home office printer help"
              desc="Clean up printer installs, remove old duplicate printers, set the correct default printer, and make the setup easier for everyday use."
            />
          </div>
        </section>

        {/* Why printers break */}
        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>Your printer worked before but now says offline.</Bullet>
                <Bullet>You bought a new printer and want it set up correctly.</Bullet>
                <Bullet>Your phone, tablet, or laptop cannot find the printer.</Bullet>
                <Bullet>You changed your Wi-Fi and the printer stopped working.</Bullet>
                <Bullet>You want old printer clutter cleaned up from your computer.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Printer problems are usually a mix of Wi-Fi, software, and settings
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A printer can fail for several reasons: the Wi-Fi changed, the computer has the
                wrong printer selected, the print queue is stuck, the printer app is missing, or the
                printer is connected to a different network than the device you are printing from.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech focuses on finding the real cause instead of guessing. The goal is to
                leave you with a cleaner printer setup, fewer duplicate printers, and simple next
                steps if the issue comes back.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How printer help works
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Check the printer and Wi-Fi"
              desc="I verify the printer status, Wi-Fi connection, network name, device connection, and any obvious printer errors."
            />
            <Card
              title="2. Clean up the device setup"
              desc="I install or correct the printer software, remove confusing duplicates, fix the default printer, and test from the devices you use."
            />
            <Card
              title="3. Test and explain"
              desc="We test printing or scanning together, then I explain the setup in plain English so it is easier to use afterward."
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
                Printer problems often connect back to Wi-Fi or device setup
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm leading-relaxed text-gray-600">
                If the printer issue is caused by weak Wi-Fi, a router change, device settings, or
                confusing account/software problems, I can help with the bigger setup too. The goal
                is not just to get one test page printed, but to make the home technology setup more
                reliable.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/personal-tech-help"
                  className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  View Personal Tech Help
                </Link>
                <Link
                  to="/senior-tech-help"
                  className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  View Senior Tech Help
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Printer help FAQs
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Can you help if my printer says offline?"
              answer="Yes. Offline printer issues are one of the most common requests. I can check the printer, Wi-Fi, computer settings, print queue, and installed printer software."
            />
            <FAQ
              question="Can you set up printing from my phone or iPad?"
              answer="Yes. I can help with iPhone, iPad, Android, AirPrint, printer apps, and basic mobile printing setup."
            />
            <FAQ
              question="Can you help after I changed my Wi-Fi router?"
              answer="Yes. Router or Wi-Fi changes often break printer connections. I can reconnect the printer and update the devices that need to print."
            />
            <FAQ
              question="Do you help seniors with printer setup?"
              answer="Yes. Printer help can be provided patiently with simple explanations, especially for seniors or family members who want the setup easier to understand."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4">
          <div className="rounded-3xl border border-gray-200 bg-gray-900 p-8 text-white shadow-sm">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Need help getting your printer working again?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  Reach out with the printer model, what device you are trying to print from, and
                  what error or behavior you are seeing. I will help you figure out the cleanest next
                  step.
                </p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex w-full justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 md:w-auto"
                >
                  Schedule Printer Help
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
