import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const posts = [
  {
    title: "Why Does My Printer Say Offline?",
    path: "/blog/why-does-my-printer-say-offline",
    category: "Printer Help",
    description:
      "A plain-English guide to the most common reasons printers show offline and what to try before scheduling help.",
    readTime: "5 min read",
    servicePath: "/printer-setup-troubleshooting",
  },
  {
    title: "How to Improve Wi-Fi Signal in Your Home",
    path: "/blog/how-to-improve-wifi-signal-in-your-home",
    category: "Wi-Fi Help",
    description:
      "Simple ways to understand weak Wi-Fi, reduce dead zones, and decide whether router placement, mesh Wi-Fi, or support may help.",
    readTime: "6 min read",
    servicePath: "/wifi-setup-troubleshooting",
  },
  {
    title: "How to Tell If an Email or Text Message Is a Scam",
    path: "/blog/how-to-tell-if-email-or-text-is-a-scam",
    category: "Email Safety",
    description:
      "Warning signs to look for before clicking suspicious links, sharing codes, or responding to urgent emails and texts.",
    readTime: "6 min read",
    servicePath: "/email-password-scam-help",
  },
  {
    title: "What Can AI Actually Do for a Small Business?",
    path: "/blog/what-can-ai-actually-do-for-small-business",
    category: "Small Business AI",
    description:
      "Practical AI use cases for small businesses, including intake, follow-up, document organization, reporting, and workflow support.",
    readTime: "7 min read",
    servicePath: "/ai-integration-small-business",
  },
  {
    title: "How to Automate Website Form Follow-Up",
    path: "/blog/how-to-automate-website-form-follow-up",
    category: "Business Automation",
    description:
      "How small businesses can turn website forms into better notifications, lead tracking, follow-up, and AI-assisted workflows.",
    readTime: "7 min read",
    servicePath: "/business-automation",
  },
];

function BlogCard({ post }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
        {post.category} • {post.readTime}
      </div>
      <h2 className="mt-3 text-xl font-bold tracking-tight text-gray-900">
        <Link to={post.path}>{post.title}</Link>
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.description}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
        <Link to={post.path} className="text-indigo-700 hover:text-indigo-900">
          Read article →
        </Link>
        <Link to={post.servicePath} className="text-gray-600 hover:text-gray-900">
          Related service →
        </Link>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <>
      <SEO
        title="Bedsun Tech Blog | Practical Tech Help & Small Business AI Tips"
        description="Helpful articles from Bedsun Tech about printer issues, Wi-Fi problems, email safety, small business websites, automation, and practical AI workflows."
        path="/blog"
      />

      <div>
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Bedsun Tech Blog
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Practical technology help, explained clearly
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
            Simple guides for home technology problems and small business tech improvements. Each
            article is written to help you understand the issue, try safe next steps, and know when
            it may be time to get help.
          </p>
        </div>

        <section className="mb-12 rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-900">Helpful guides for common tech problems</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Browse practical articles about printer issues, weak Wi-Fi, suspicious emails and texts,
            small business AI, and website follow-up workflows.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.path} post={post} />
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Need help with a printer, Wi-Fi, email, or business tech issue?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-700">
            Bedsun Tech helps Las Vegas area homes and small businesses with everyday tech issues,
            websites, automation, and practical AI workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/personal-tech-help"
              className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
            >
              Get Personal Tech Help
            </Link>
            <Link
              to="/business-tech-ai-opportunity-scan"
              className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Request Business Tech Scan
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
