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


const PAGE_PATH = "/personal-tech-help";

const FAQS = [
  { question: "What kind of personal technology help do you provide?", answer: "Bedsun Tech helps with everyday technology issues such as email, passwords, computers, phones, tablets, printers, Wi-Fi, smart TVs, cameras, and account cleanup." },
  { question: "Do you help seniors or family members?", answer: "Yes. Personal tech help can be especially useful for seniors, families, and adult children helping a parent organize or troubleshoot technology." },
  { question: "Can you help explain technology instead of just fixing it?", answer: "Yes. The goal is to fix the issue and explain the solution in plain English so the setup makes more sense afterward." },
  { question: "Can you help decide what technology should be replaced?", answer: "Yes. I can help determine whether a device or setup is worth fixing, simplifying, upgrading, or replacing." },
];

const PAGE_STRUCTURED_DATA = [
  serviceSchema({
    name: "Personal Tech Help in Las Vegas",
    description: "Bedsun Tech provides personal technology help in the Las Vegas area, including email and password help, computer support, phone and tablet setup, printers, Wi-Fi, smart devices, cameras, account cleanup, and one-on-one tech guidance.",
    path: PAGE_PATH,
    serviceType: "Personal technology support",
    audience: "Home users, seniors, families, and people who need everyday technology help",
    keywords: ["personal tech help", "home tech support", "computer help", "phone help", "printer help", "Wi-Fi help"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

export default function PersonalTechHelp() {
  return (
    <>
      <SEO
        title="Personal Tech Help in Las Vegas | Bedsun Tech"
        description="Bedsun Tech provides personal technology help in the Las Vegas area, including email and password help, computer support, phone and tablet setup, printers, Wi-Fi, smart devices, cameras, account cleanup, and one-on-one tech guidance."
        path={PAGE_PATH}
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <div>
        <SectionTitle
          kicker="Personal Tech Help"
          title="Patient, practical technology help for everyday life"
          desc="Bedsun Tech helps people simplify personal technology, organize accounts, fix device issues, improve Wi-Fi, set up cameras, troubleshoot printers, and make technology easier to understand."
        />

        {/* Hero CTA */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Technology should make life easier, not more confusing.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Personal technology can get messy fast — email accounts, passwords, phones,
                computers, printers, Wi-Fi, cameras, streaming devices, smart home apps, and cloud
                accounts all overlap. I help clean up the confusion and make things easier to use.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Get personal tech help
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Personal technology services
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Helpful support for everyday technology issues at home or in your personal life.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Link to="/email-password-scam-help" className="block">
              <Card
                title="Email, account, and password help"
                desc="Help with email accounts, password resets, account recovery, app logins, cloud accounts, multi-factor authentication, suspicious messages, and scam safety."
              />
            </Link>
            <Link to="/senior-tech-help" className="block">
              <Card
                title="Senior tech help and basic lessons"
                desc="Patient help for seniors, retirees, and families with phones, tablets, smart TVs, email, passwords, scam safety, new devices, and simple one-on-one lessons."
              />
            </Link>
            <Link to="/smart-tv-phone-tablet-setup" className="block">
              <Card
                title="Smart TV, phone, and tablet setup"
                desc="Help setting up iPhones, Android phones, tablets, smart TVs, Roku, Fire Stick, Apple TV, streaming apps, app logins, and device syncing."
              />
            </Link>
            <Link to="/printer-setup-troubleshooting" className="block">
              <Card
                title="Printers, scanners, and home office devices"
                desc="Troubleshoot printer connections, scanner setup, computer-to-printer issues, home office equipment, and device configuration."
              />
            </Link>
            <Link to="/wifi-setup-troubleshooting" className="block">
              <Card
                title="Home Wi-Fi troubleshooting"
                desc="Help with weak Wi-Fi, dead zones, router placement, device connectivity, network names, passwords, and practical improvements for better coverage."
              />
            </Link>
            <Link to="/smart-tv-phone-tablet-setup" className="block">
              <Card
                title="Smart TVs, streaming devices, and home devices"
                desc="Support for smart TVs, Roku, Fire Stick, Apple TV, streaming apps, Blink, Ring, smart cameras, app setup, and device access."
              />
            </Link>
            <Card
              title="Personal tech cleanup"
              desc="Review your current setup, organize accounts, reduce confusion, remove unnecessary services, document key information, and create a cleaner plan moving forward."
            />
          </div>
        </section>

        {/* Who this is for */}
        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>You are not sure what email or account is connected to what service.</Bullet>
                <Bullet>You forgot a password or need help with account recovery options.</Bullet>
                <Bullet>Your Wi-Fi, printer, camera, phone, tablet, or computer is frustrating.</Bullet>
                <Bullet>You want someone patient to explain what is happening without rushing.</Bullet>
                <Bullet>You want help choosing, setting up, or simplifying your technology.</Bullet>
                <Bullet>You need a cleaner plan for your devices, accounts, and apps.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Practical help without the big-box support experience
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Personal technology support should be clear, patient, and practical. The goal is not
                just to fix one issue quickly — it is to help you understand what changed, what to do
                next, and how to avoid the same confusion later.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech can help with everyday technology problems while also understanding the
                deeper systems behind them, including networking, accounts, devices, cloud services,
                Wi-Fi, and security basics.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Email</Pill>
                <Pill>Passwords</Pill>
                <Pill>Wi-Fi</Pill>
                <Pill>Printers</Pill>
                <Pill>Computers</Pill>
                <Pill>Phones</Pill>
                <Pill>Cameras</Pill>
                <Pill>Smart TVs</Pill>
                <Pill>Account Cleanup</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              A simple personal tech support process
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              The goal is to make the problem understandable and leave you with a cleaner setup.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Understand the setup"
              desc="We review what is not working, what devices or accounts are involved, and what you are trying to accomplish."
            />
            <Card
              title="2. Fix or organize"
              desc="I help troubleshoot, configure, recover, connect, simplify, or clean up the issue step by step."
            />
            <Card
              title="3. Explain and document"
              desc="You get plain-language notes, next steps, and recommendations so the setup is easier to manage later."
            />
          </div>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Examples of personal tech help
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Account and password organization"
              desc="Help identify what accounts exist, what email is connected to each service, what recovery options are available, and what needs to be cleaned up."
            />
            <Card
              title="Camera and smart device setup"
              desc="Help install or configure smart cameras, streaming devices, apps, notifications, and access for home technology systems."
            />
            <Link to="/wifi-setup-troubleshooting" className="block">
              <Card
                title="Wi-Fi and printer troubleshooting"
                desc="Fix common home Wi-Fi issues, printer connection problems, scanner access, and device connectivity problems."
              />
            </Link>
            <Card
              title="Technology simplification"
              desc="Review devices, subscriptions, accounts, and services to reduce confusion and create a simpler technology setup."
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Personal tech help FAQ
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Can you help with email and password problems?"
              answer="Yes. I can help organize accounts, review recovery options, troubleshoot login issues, and make it clearer which email is tied to which service."
            />
            <FAQ
              question="Can you help with smart cameras like Blink or Ring?"
              answer="Yes. I can help with camera setup, app access, device placement, Wi-Fi connectivity, notifications, and basic troubleshooting."
            />
            <FAQ
              question="Do you help with printers and Wi-Fi?"
              answer="Yes. Printer and Wi-Fi issues are common personal tech support requests. I can help troubleshoot connections, setup, passwords, and device access."
            />
            <FAQ
              question="Is this only for seniors?"
              answer="No. Bedsun Tech helps anyone who wants practical, patient help with personal technology, devices, accounts, Wi-Fi, cameras, and everyday tech problems."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Need help making your technology easier to manage?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Tell me what is confusing, what is not working, and what you want the setup to look
                like when it is fixed.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Contact Bedsun Tech
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}