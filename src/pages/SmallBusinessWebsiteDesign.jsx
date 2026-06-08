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
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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

export default function SmallBusinessWebsiteDesign() {
  return (
    <>
      <SEO
        title="Small Business Website Design in Las Vegas | Bedsun Tech"
        description="Bedsun Tech helps small businesses in the Las Vegas area with website design, website redesigns, landing pages, contact forms, SEO metadata, analytics setup, and practical business technology support."
        path="/small-business-website-design"
      />

      <div>
        <SectionTitle
          kicker="Website Design"
          title="Small business website design and redesign in Las Vegas"
          desc="Bedsun Tech helps small businesses build clearer, cleaner, and more useful websites — whether you need a new website, a redesign, better service pages, a contact form, SEO basics, or a stronger online presence."
        />

        {/* Hero CTA */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Your website should explain what you do, build trust, and make it easy for customers
                to contact you.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A lot of small business websites are outdated, confusing, hard to update, or missing
                the basics that help customers and search engines understand the business. I help
                clean that up with practical website improvements built around your services,
                customers, and goals.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Start a website project
              </Link>
            </div>
          </div>
        </section>

        {/* What I help with */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Website services for small businesses
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              These services are built for small businesses that need a practical, professional
              website without turning the project into a huge agency process.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Website design and redesign"
              desc="New websites, redesigns, landing pages, and service pages that clearly explain who you are, what you offer, and how customers can reach you."
            />
            <Card
              title="SEO metadata and page structure"
              desc="Search-friendly titles, descriptions, headings, URLs, sitemap updates, basic schema, and content structure that helps Google understand your site."
            />
            <Card
              title="Contact forms and lead capture"
              desc="Reliable contact forms, quote request forms, email notifications, and simple lead routing so customer requests do not get lost."
            />
            <Card
              title="Analytics and Search Console setup"
              desc="Google Analytics, Google Search Console, sitemap submission, indexing checks, and basic visibility into how visitors find and use your website."
            />
            <Card
              title="Service page and content improvements"
              desc="Clearer service descriptions, local SEO content, FAQ sections, internal linking, and page copy that helps customers understand what to book or request."
            />
            <Card
              title="Hosting, deployment, and technical cleanup"
              desc="Help with domains, DNS, hosting, SSL, deployment, performance basics, broken links, mobile layout issues, and general website troubleshooting."
            />
          </div>
        </section>

        {/* Who this is for */}
        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>Your website feels outdated or does not match your current business.</Bullet>
                <Bullet>Customers ask questions your website should already answer.</Bullet>
                <Bullet>You need service pages, a contact form, or clearer calls to action.</Bullet>
                <Bullet>You want basic SEO, analytics, and Search Console set up correctly.</Bullet>
                <Bullet>You are not sure what is connected to your domain, hosting, or email.</Bullet>
                <Bullet>You want a practical technology partner, not just a one-time template.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Website work backed by real IT experience
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech is not only focused on the look of the website. I also understand the
                systems around it — domains, DNS, email, forms, analytics, cloud hosting,
                automation, security basics, and small business technology workflows.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                That means your website project can connect naturally into the rest of your business
                technology, including Microsoft 365, Google Workspace, customer intake forms,
                dashboards, reporting, and workflow automation.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  Websites
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  SEO basics
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  DNS
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  Forms
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  Analytics
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  Automation
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              A simple website process
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              The goal is to make the project clear, manageable, and useful from the start.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Review"
              desc="We look at your current website, services, competitors, goals, domain, hosting, forms, and what customers need to understand."
            />
            <Card
              title="2. Build or improve"
              desc="I update the structure, pages, content, forms, metadata, mobile layout, and technical foundation based on what matters most."
            />
            <Card
              title="3. Launch and measure"
              desc="We deploy the changes, confirm forms and analytics work, submit updates to Search Console, and document what was changed."
            />
          </div>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Examples of website improvements
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Local service business content expansion"
              desc="Added and improved service content, blog articles, navigation, internal linking, and SEO-focused page structure for a local small business website."
            />
            <Card
              title="React website deployment"
              desc="Built and deployed a modern React website with clean routing, responsive layout, SEO metadata, sitemap, schema, analytics, and a working contact form."
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Website design FAQ
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Do you build brand new websites or only redesign existing sites?"
              answer="Both. I can help build a new website from scratch or improve an existing website that already has a foundation but needs better structure, content, SEO basics, or technical cleanup."
            />
            <FAQ
              question="Can you help with Google Search Console and Analytics?"
              answer="Yes. I can help set up Google Search Console, submit a sitemap, request indexing, add Google Analytics, and confirm the website is being tracked correctly."
            />
            <FAQ
              question="Can you help if I do not know who controls my domain or website?"
              answer="Yes. A common first step is helping identify where your domain, DNS, hosting, email, and website are managed so the project can move forward safely."
            />
            <FAQ
              question="Do you only work with businesses in Las Vegas?"
              answer="I focus on the Las Vegas area for local support, but many website and automation projects can be handled remotely depending on the scope."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Need a better website for your small business?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Tell me what you have now, what you want to improve, and what customers need to do
                on your site. I’ll help turn that into a clear website plan.
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