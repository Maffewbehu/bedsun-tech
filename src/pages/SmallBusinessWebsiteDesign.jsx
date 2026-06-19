import { Link } from "react-router-dom";
import SEO from "../components/SEO";

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

export default function SmallBusinessWebsiteDesign() {
  return (
    <>
      <SEO
        title="Small Business Website Help in Las Vegas | Bedsun Tech"
        description="Bedsun Tech helps Las Vegas small businesses improve websites, forms, mobile experience, SEO foundations, lead capture, analytics, and practical automation workflows."
        path="/small-business-website-design"
      />

      <div>
        <SectionTitle
          kicker="Small Business Website Help"
          title="Websites that help small businesses look better, get leads, and work cleaner"
          desc="Bedsun Tech helps small businesses fix outdated websites, improve mobile experience, clean up messaging, connect forms, add tracking, and build a stronger foundation for SEO and automation."
        />

        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Your website should do more than sit online.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A small business website should quickly explain what you do, make it easy to contact
                you, work well on phones, support Google visibility, and send leads into a process
                you can actually follow up on. Bedsun Tech focuses on practical website improvements
                that support real business operations.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Website redesigns</Pill>
                <Pill>Lead forms</Pill>
                <Pill>SEO basics</Pill>
                <Pill>Mobile cleanup</Pill>
                <Pill>Automation-ready</Pill>
              </div>
            </div>

            <div className="space-y-3 md:col-span-4 md:flex md:flex-col md:items-end">
              <Link
                to="/business-tech-ai-opportunity-scan"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Request a Website + AI Review
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 md:w-auto"
              >
                Start a Website Project
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Common website problems we help fix
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Most small business websites do not fail because of one huge issue. They usually lose
              leads because of a handful of smaller problems that add up.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Outdated design or unclear messaging"
              desc="Refresh the page structure, wording, service sections, and calls to action so visitors understand what you offer and how to take the next step."
            />
            <Card
              title="Broken or weak lead forms"
              desc="Fix contact forms, add better fields, route submissions properly, and make sure new leads do not disappear into a messy inbox."
            />
            <Card
              title="Poor mobile experience"
              desc="Improve page layout, buttons, menus, spacing, and readability so the site works better for people visiting from their phone."
            />
            <Card
              title="No SEO foundation"
              desc="Add service pages, metadata, sitemap updates, internal links, page structure, and local keywords that give Google clearer signals."
            />
            <Card
              title="No tracking or visibility"
              desc="Set up or clean up analytics, Search Console, conversion tracking, and basic reporting so you can see what is working."
            />
            <Card
              title="No follow-up process"
              desc="Connect website forms to email notifications, spreadsheets, CRMs, or automation workflows so leads are easier to manage."
            />
          </div>
        </section>

        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>Your website looks dated or does not represent your business well.</Bullet>
                <Bullet>Your forms are broken, unreliable, or hard to track.</Bullet>
                <Bullet>Your site does not clearly explain services, pricing direction, or next steps.</Bullet>
                <Bullet>You want better local SEO pages before investing in ads.</Bullet>
                <Bullet>You want your website connected to follow-up or automation workflows.</Bullet>
                <Bullet>You need a practical tech partner, not a bloated agency process.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Built with the rest of your business in mind
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A better website is not only about design. It connects to your forms, email,
                business phone, booking process, customer follow-up, reporting, Google visibility,
                and sometimes automation or AI workflows.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech can help you think through the full digital side of the business: what
                the website says, where leads go, what happens after someone submits a form, and
                which manual steps can be cleaned up later.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Websites</Pill>
                <Pill>Forms</Pill>
                <Pill>SEO</Pill>
                <Pill>Google tools</Pill>
                <Pill>Lead follow-up</Pill>
                <Pill>Automation</Pill>
                <Pill>AI workflows</Pill>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              A simple website improvement process
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Review the current site"
              desc="We look at the website, pages, forms, mobile experience, SEO basics, tracking, and lead path."
            />
            <Card
              title="2. Prioritize what matters"
              desc="We separate urgent fixes from bigger improvements so the project stays clear and practical."
            />
            <Card
              title="3. Improve and connect"
              desc="We update the website foundation and connect forms, calls to action, analytics, and follow-up workflows where needed."
            />
          </div>
        </section>

        <section className="mb-12 rounded-3xl bg-gray-900 p-8 text-white">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Want to know what your website should fix first?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">
                Request a Business Tech & AI Opportunity Scan and we can review your website,
                forms, follow-up process, and automation opportunities together.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/business-tech-ai-opportunity-scan"
                className="inline-flex w-full justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 md:w-auto"
              >
                Request an Opportunity Scan
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Website help FAQs
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Do you only build brand-new websites?"
              answer="No. Many projects start by fixing or improving an existing website, cleaning up forms, improving content, and adding better calls to action."
            />
            <FAQ
              question="Can you help with Google Search Console and SEO basics?"
              answer="Yes. Bedsun Tech can help with metadata, sitemap updates, service pages, internal links, and basic Google visibility setup."
            />
            <FAQ
              question="Can the website connect to automation later?"
              answer="Yes. A good website foundation can connect forms, notifications, spreadsheets, CRMs, email follow-up, and practical AI workflows later."
            />
            <FAQ
              question="Is this for small local businesses?"
              answer="Yes. The focus is practical website help for small businesses that need clearer systems without a large agency process."
            />
          </div>
        </section>
      </div>
    </>
  );
}
