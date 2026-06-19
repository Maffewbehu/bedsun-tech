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


const PAGE_PATH = "/senior-tech-help";

const FAQS = [
  { question: "Do you only help seniors?", answer: "No. This page is focused on seniors and families, but Bedsun Tech helps anyone who wants patient support with everyday technology." },
  { question: "Can an adult child contact you for a parent?", answer: "Yes. Family members can reach out to explain the situation and help coordinate the best next step for a parent or loved one." },
  { question: "Can you help with printers, Wi-Fi, and smart TVs?", answer: "Yes. Those are some of the most common personal tech help requests, especially when multiple devices, passwords, or apps are involved." },
  { question: "Can you teach instead of just fixing it?", answer: "Yes. The goal is to fix the issue and explain what changed in simple terms so the technology feels less confusing afterward." },
];

const PAGE_STRUCTURED_DATA = [
  serviceSchema({
    name: "Senior Tech Help in Las Vegas",
    description: "Patient senior tech help in Las Vegas for printers, Wi-Fi, phones, tablets, smart TVs, email, passwords, scam safety, new device setup, and simple technology lessons.",
    path: PAGE_PATH,
    serviceType: "Senior technology support",
    audience: "Seniors, retirees, families, and adult children helping parents",
    keywords: ["senior tech help", "printer help", "Wi-Fi help", "smart TV help", "password help", "scam safety"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

export default function SeniorTechHelp() {
  return (
    <>
      <SEO
        title="Senior Tech Help in Las Vegas | Bedsun Tech"
        description="Patient senior tech help in Las Vegas for printers, Wi-Fi, phones, tablets, smart TVs, email, passwords, scam safety, new device setup, and simple technology lessons."
        path={PAGE_PATH}
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <div>
        <SectionTitle
          kicker="Senior Tech Help"
          title="Patient tech help for seniors and families in Las Vegas"
          desc="Bedsun Tech helps seniors, retirees, families, and adult children make everyday technology less frustrating with simple explanations, practical fixes, and no judgment."
        />

        {/* Hero CTA */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Technology should feel easier to use, not harder to understand.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                I help with the everyday tech problems that slow people down: printers that will
                not connect, weak Wi-Fi, confusing phone settings, smart TV apps, email logins,
                passwords, suspicious messages, new devices, and basic lessons at a comfortable pace.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Patient help</Pill>
                <Pill>No confusing jargon</Pill>
                <Pill>Good for seniors</Pill>
                <Pill>Helpful for families</Pill>
              </div>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Schedule Tech Help
              </Link>
            </div>
          </div>
        </section>

        {/* Common help */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Common senior tech help requests
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Simple, practical support for the technology people use every day at home.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Printer setup and offline printer help"
              desc="Help connecting printers to Wi-Fi, printing from a computer, printing from a phone or tablet, setting up a new printer, and troubleshooting offline printer messages."
            />
            <Card
              title="Wi-Fi and internet troubleshooting"
              desc="Help with weak Wi-Fi, Wi-Fi passwords, router questions, connection problems, dead zones, and devices that keep disconnecting."
            />
            <Card
              title="Phone, tablet, and new device setup"
              desc="Help setting up iPhones, Android phones, iPads, tablets, app logins, contacts, photos, updates, accessibility settings, and basic device lessons."
            />
            <Card
              title="Smart TV and streaming help"
              desc="Help setting up smart TVs, Roku, Fire Stick, Apple TV, streaming apps, Wi-Fi connections, app sign-ins, remotes, and basic TV troubleshooting."
            />
            <Card
              title="Email, passwords, and account recovery"
              desc="Help with email setup, password resets, account recovery options, app passwords, login confusion, and organizing important account information."
            />
            <Card
              title="Scam email and text safety"
              desc="Help reviewing suspicious emails, texts, pop-ups, fake support messages, and common online scams so you know what to avoid before clicking or calling."
            />
          </div>
        </section>

        {/* Audience */}
        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This page is for...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>Seniors who want technology explained slowly and clearly.</Bullet>
                <Bullet>Retirees who need help with phones, printers, Wi-Fi, or smart TVs.</Bullet>
                <Bullet>Adult children looking for patient tech help for a parent.</Bullet>
                <Bullet>Families who want accounts, passwords, and devices cleaned up.</Bullet>
                <Bullet>Anyone who feels overwhelmed by everyday technology.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                A calmer way to get technology working again
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A lot of tech support feels rushed or overly technical. Bedsun Tech focuses on
                understanding the problem, fixing what can be fixed, and explaining the solution in
                plain English so the setup makes more sense afterward.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                This can include one-time troubleshooting, new device setup, cleaning up old
                accounts, helping someone feel safer online, or creating a simpler technology plan
                for the home.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How senior tech help works
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Explain the problem"
              desc="Tell me what is not working, what you are trying to do, and which devices or accounts are involved."
            />
            <Card
              title="2. Fix and simplify"
              desc="I help troubleshoot, connect, reset, configure, organize, or clean up the issue step by step."
            />
            <Card
              title="3. Leave clear next steps"
              desc="You get simple notes and recommendations so the setup is easier to use after the visit or session."
            />
          </div>
        </section>

        {/* Safety */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Online safety
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                Help before a scam gets worse
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm leading-relaxed text-gray-600">
                Suspicious emails, text messages, pop-ups, fake support calls, and urgent account
                warnings can be stressful. Bedsun Tech can help review what happened, explain the
                warning signs, and help with basic safety steps like changing passwords, checking
                recovery options, and avoiding repeat issues.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Senior tech help FAQ
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Do you only help seniors?"
              answer="No. This page is focused on seniors and families, but Bedsun Tech helps anyone who wants patient support with everyday technology."
            />
            <FAQ
              question="Can an adult child contact you for a parent?"
              answer="Yes. Family members can reach out to explain the situation and help coordinate the best next step for a parent or loved one."
            />
            <FAQ
              question="Can you help with printers, Wi-Fi, and smart TVs?"
              answer="Yes. Those are some of the most common personal tech help requests, especially when multiple devices, passwords, or apps are involved."
            />
            <FAQ
              question="Can you teach instead of just fixing it?"
              answer="Yes. The goal is to fix the issue and explain what changed in simple terms so the technology feels less confusing afterward."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4 rounded-3xl border border-gray-200 bg-gray-900 p-8 text-white shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Need patient help with everyday technology?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                Tell me what is confusing, what is not working, and who needs help. I will help turn
                the problem into a clear next step.
              </p>
            </div>
            <div className="grid gap-3 md:col-span-4">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
              >
                Schedule Tech Help
              </Link>
              <Link
                to="/personal-tech-help"
                className="inline-flex w-full justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                View All Personal Tech Help
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
