import SEO from "../components/SEO";

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mb-6">
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

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-gray-600">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <SEO title="About Matthew Bedsun | Local IT Help in Las Vegas" description="Meet Matthew Bedsun, the systems engineer behind Bedsun Tech. Over 17 years of IT experience, plus web design, AI, automation, and practical digital products for homes and businesses." path="/about" />
      <SectionTitle
        kicker="About"
        title="Hi, I’m Matthew Bedsun."
        desc="I build and support secure IT environments, design websites, and use AI and automation to turn ideas into practical tools."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Main story */}
        <div className="lg:col-span-8">
          <figure className="mb-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <video
              controls
              playsInline
              preload="none"
              poster="/videos/matthew-bedsun-story-poster.jpg"
              aria-label="Matthew Bedsun introduces his experience and Bedsun Tech"
              aria-describedby="story-video-caption"
              className="aspect-video w-full bg-slate-950"
              width="1280"
              height="720"
            >
              <source src="/videos/matthew-bedsun-story.mp4" type="video/mp4" />
              Your browser does not support embedded video. <a href="/videos/matthew-bedsun-story.mp4">Watch Matthew’s story</a>.
            </video>
            <figcaption id="story-video-caption" className="px-6 py-4 text-sm text-gray-600">
              Meet Matthew and discover the story behind Bedsun Tech. Read the full story below.
            </figcaption>
          </figure>
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">My story</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
              <p>Hi, I’m Matthew Bedsun, founder of Bedsun Tech.</p>
              <p>I’ve spent more than seventeen years professionally building, supporting, and securing IT environments. But my interest in technology started much earlier.</p>
              <p>When I was eight years old, I built my first PC to squeeze better performance out of the games I loved.</p>
              <p>That curiosity turned into a career, beginning at a popular electronics store. You know the one. I quickly joined a certain tech squad—let’s call them the people you bring your computer to when turning it off and back on doesn’t work.</p>
              <p>From there, I advanced into enterprise infrastructure: data center operations, system administration, virtualization, networking, and cloud.</p>
              <p>Today, I work as a traveling systems engineer, designing and supporting secure IT environments across multiple sites and industries.</p>
              <p>Whether I’m setting up a home office, recovering data from a failed drive, or designing an Azure Virtual Desktop deployment, I bring the same care, precision, and documentation to every job.</p>
              <p>That same curiosity now drives my work in web design and artificial intelligence. I’m combining my engineering experience with AI to build websites, automate repetitive tasks, and turn ideas into useful applications.</p>
              <p>Through Bedsun Tech, I bring these skills together—offering practical IT services and creating digital products that help people and small businesses save time and simplify their work.</p>
              <p>Explore the site, see what we’re building, and let’s talk about how I can help.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Azure • AVD</Pill>
              <Pill>Hyper-V • Windows Server</Pill>
              <Pill>AD • GPO • DNS</Pill>
              <Pill>Zabbix • Monitoring</Pill>
              <Pill>Meraki • Networking</Pill>
              <Pill>PowerShell • Python</Pill>
              <Pill>Web Design</Pill>
              <Pill>AI • Automation</Pill>
            </div>
          </div>
        </div>

        {/* Side cards */}
        <div className="lg:col-span-4 space-y-6">
          <Card title="What I’m best at">
            <ul className="mt-2 space-y-2">
              <li>• Fixing issues at the root (not band-aids)</li>
              <li>• Building clean, repeatable infrastructure</li>
              <li>• Documenting changes so nothing is “tribal knowledge”</li>
              <li>• Explaining technical work in plain English</li>
            </ul>
          </Card>

          <Card title="How I work">
            <ul className="mt-2 space-y-2">
              <li>• Quick discovery call</li>
              <li>• Clear plan + options</li>
              <li>• Safe execution (backups/rollback/testing)</li>
              <li>• Handoff notes + next steps</li>
            </ul>
          </Card>

          <Card title="Who I help">
            <ul className="mt-2 space-y-2">
              <li>• Home users who want reliable Wi-Fi & setups</li>
              <li>• Small businesses without full-time IT</li>
              <li>• Teams needing cloud/virtualization help</li>
              <li>• Enterprise overflow projects</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
