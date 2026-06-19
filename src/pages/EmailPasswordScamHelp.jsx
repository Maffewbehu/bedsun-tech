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

function FAQ({ question, answer }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-gray-900">{question}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{answer}</p>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
      {children}
    </span>
  );
}


const PAGE_PATH = "/email-password-scam-help";

const FAQS = [
  { question: "Can you recover every account?", answer: "Not always. Account recovery depends on the provider and recovery options available, but I can help you work through the safest official recovery steps." },
  { question: "Can you tell me if an email or text is a scam?", answer: "I can help review suspicious messages, explain warning signs, and recommend safer next steps before you click links, call numbers, or share information." },
  { question: "Can you help set up two-factor authentication?", answer: "Yes. I can help set up two-factor authentication, recovery options, and password organization when it makes sense for your accounts." },
  { question: "Do you help seniors with online safety?", answer: "Yes. This service is designed to be patient, plain-English, and helpful for seniors and families who want technology to feel safer and less confusing." },
];

const PAGE_STRUCTURED_DATA = [
  serviceSchema({
    name: "Email, Password and Scam Safety Help in Las Vegas",
    description: "Patient email, password, account recovery, and scam safety help in Las Vegas for Gmail, Outlook, Yahoo, hacked email concerns, suspicious texts, two-factor authentication, and senior online safety.",
    path: PAGE_PATH,
    serviceType: "Email, password, account recovery, and scam safety help",
    audience: "Home users, seniors, families, and anyone worried about account safety",
    keywords: ["password reset help", "account recovery", "Gmail help", "scam text help", "two-factor authentication"],
  }),
  faqPageSchema(FAQS, PAGE_PATH),
];

export default function EmailPasswordScamHelp() {
  return (
    <>
      <SEO
        title="Email, Password & Scam Safety Help in Las Vegas | Bedsun Tech"
        description="Patient email, password, account recovery, and scam safety help in Las Vegas for Gmail, Outlook, Yahoo, hacked email concerns, suspicious texts, two-factor authentication, and senior online safety."
        path={PAGE_PATH}
        structuredData={PAGE_STRUCTURED_DATA}
      />

      <div>
        <SectionTitle
          kicker="Email, Password & Scam Safety Help"
          title="Patient help with email, passwords, account recovery, and scam concerns"
          desc="Bedsun Tech helps Las Vegas residents organize confusing accounts, recover access, reset passwords, improve basic account safety, and understand suspicious emails or texts without judgment or confusing jargon."
        />

        {/* Hero CTA */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Email and password problems can feel stressful fast.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Maybe you forgot a password, cannot get into an account, keep seeing suspicious
                messages, or are not sure which email is tied to which app. I help slow things
                down, review the situation carefully, and create a clearer path forward.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Get Email & Scam Safety Help
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Email, password, and account help
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Practical support for common account problems that can block access to phones, apps,
              banking sites, streaming services, social media, cloud photos, and everyday tools.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Email setup and troubleshooting"
              desc="Help with Gmail, Outlook, Yahoo, Apple Mail, phone mail apps, missing messages, login issues, and making sure your email works on the devices you use."
            />
            <Card
              title="Password resets and account recovery"
              desc="Support with password reset steps, recovery email checks, recovery phone numbers, account verification, and understanding what options are available."
            />
            <Card
              title="Suspicious email and text review"
              desc="Review suspicious emails, scam texts, fake alerts, tech support pop-ups, account warning messages, and links that do not feel right."
            />
            <Card
              title="Two-factor authentication help"
              desc="Help setting up or understanding verification codes, authenticator apps, text message codes, backup options, and login prompts."
            />
            <Card
              title="Password organization"
              desc="Create a simpler way to keep track of important accounts, reduce duplicate/confusing passwords, and document recovery information more clearly."
            />
            <Card
              title="Senior online safety guidance"
              desc="Patient help for seniors and families who want to reduce scam risk, understand warning signs, and feel more comfortable using email and online accounts."
            />
          </div>
        </section>

        {/* Who this is for */}
        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>You forgot a password and do not know where to start.</Bullet>
                <Bullet>You are locked out of an email, Apple, Google, Microsoft, or app account.</Bullet>
                <Bullet>You received a suspicious email, text, pop-up, or phone scam warning.</Bullet>
                <Bullet>You are helping a parent or family member clean up confusing accounts.</Bullet>
                <Bullet>You want help setting up safer login options in plain English.</Bullet>
                <Bullet>You want a calmer, more organized plan for important accounts.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                The goal is clarity, not fear
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Account problems and scam concerns can make people feel rushed or embarrassed.
                Bedsun Tech takes a patient approach: review what happened, identify what is safe
                to click or not click, check recovery options, and explain the next steps clearly.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                This service is especially useful for seniors, families, and anyone who wants help
                understanding email, passwords, online accounts, and basic scam safety without a
                confusing support experience.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Gmail</Pill>
                <Pill>Outlook</Pill>
                <Pill>Yahoo Mail</Pill>
                <Pill>Apple ID</Pill>
                <Pill>Google Account</Pill>
                <Pill>Microsoft Account</Pill>
                <Pill>Scam texts</Pill>
                <Pill>Password resets</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How email and account help works
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Review the situation"
              desc="We look at what account is affected, what device you are using, what message you are seeing, and whether there are signs of a scam or lockout."
            />
            <Card
              title="2. Work through safe next steps"
              desc="We follow legitimate recovery paths, avoid suspicious links, check recovery options, and make practical changes when access is restored."
            />
            <Card
              title="3. Organize and explain"
              desc="You get simple notes about what was fixed, what changed, and what to watch for so the setup is easier to manage going forward."
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
                Account problems often connect to phones, tablets, and senior tech help
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm leading-relaxed text-gray-600">
                Email and password issues often show up while setting up a new phone, tablet, smart
                TV app, printer app, camera app, or online service. Bedsun Tech can help with the
                account issue and the device setup around it.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/senior-tech-help"
                  className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  View Senior Tech Help
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
              Email, password, and scam safety FAQs
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Can you help if I forgot my email password?"
              answer="Yes. I can help review the account recovery options available to you, check recovery email or phone settings, and walk through the reset process carefully."
            />
            <FAQ
              question="Can you tell me if an email or text is a scam?"
              answer="I can help review suspicious messages, explain common warning signs, and help you decide safer next steps without clicking unknown links."
            />
            <FAQ
              question="Can you help with two-factor authentication?"
              answer="Yes. I can help set up or explain verification codes, authenticator apps, text prompts, backup options, and login approvals."
            />
            <FAQ
              question="Is this a good service for seniors?"
              answer="Yes. This page was built for seniors, families, and anyone who wants patient, non-judgmental help understanding email, passwords, accounts, and scam safety."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4 rounded-3xl border border-gray-200 bg-gray-900 p-8 text-white shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Need help with an email, password, or scam concern?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                Bring the message, device, account, or issue you are stuck on. I will help you work
                through it carefully and explain what is happening in plain English.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 md:w-auto"
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
