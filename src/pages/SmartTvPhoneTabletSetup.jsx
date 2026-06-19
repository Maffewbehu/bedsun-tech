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

export default function SmartTvPhoneTabletSetup() {
  return (
    <>
      <SEO
        title="Smart TV, Phone & Tablet Setup Help in Las Vegas | Bedsun Tech"
        description="Patient smart TV, phone, tablet, Roku, Fire Stick, Apple TV, streaming app, app login, device syncing, and new device setup help in Las Vegas."
        path="/smart-tv-phone-tablet-setup"
      />

      <div>
        <SectionTitle
          kicker="Smart TV, Phone & Tablet Setup Help"
          title="Patient setup help for smart TVs, phones, tablets, and streaming devices"
          desc="Bedsun Tech helps Las Vegas residents set up and troubleshoot everyday devices like iPhones, Android phones, iPads, tablets, smart TVs, Roku, Fire Stick, Apple TV, streaming apps, and device logins."
        />

        {/* Hero CTA */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                New devices should make life easier, not more frustrating.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Whether you are setting up a new phone, connecting a smart TV, logging into
                streaming apps, moving photos, or helping a parent use a tablet, I can walk through
                the setup in plain English and make sure the important pieces are working.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 md:w-auto"
              >
                Schedule Device Setup Help
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Smart TV, phone, tablet, and streaming setup services
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Practical help for devices and apps you use every day, especially when the setup
              involves Wi-Fi, passwords, accounts, app stores, subscriptions, or confusing menus.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              title="Phone and tablet setup"
              desc="Help setting up iPhones, Android phones, iPads, tablets, app downloads, Wi-Fi, email, contacts, photos, notifications, and basic settings."
            />
            <Card
              title="Smart TV setup and troubleshooting"
              desc="Support for smart TV Wi-Fi connections, app setup, updates, sign-ins, input/source confusion, picture settings, and basic remote guidance."
            />
            <Card
              title="Roku, Fire Stick, and Apple TV setup"
              desc="Help connecting streaming devices, signing into apps, organizing channels, pairing remotes, and making the TV setup easier to use."
            />
            <Card
              title="Streaming app login help"
              desc="Help with Netflix, Hulu, YouTube TV, Disney+, Max, cable provider apps, password issues, verification codes, and account confusion."
            />
            <Card
              title="Device syncing and transfers"
              desc="Help syncing devices, checking cloud settings, moving photos when possible, reviewing backups, and making sure important information is easier to find."
            />
            <Card
              title="Basic lessons and plain-English guidance"
              desc="One-on-one help for people who want to understand how to use their phone, tablet, remote, apps, or streaming setup without feeling rushed."
            />
          </div>
        </section>

        {/* Who this is for */}
        <section className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">This is a good fit if...</h2>
              <ul className="mt-4 space-y-3">
                <Bullet>You bought a new phone or tablet and want help setting it up.</Bullet>
                <Bullet>Your smart TV or streaming device will not connect or sign in.</Bullet>
                <Bullet>You need help with Roku, Fire Stick, Apple TV, or streaming apps.</Bullet>
                <Bullet>You are helping a parent or family member with everyday devices.</Bullet>
                <Bullet>You want photos, email, contacts, apps, and settings reviewed.</Bullet>
                <Bullet>You want patient basic lessons instead of rushed tech support.</Bullet>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Devices often depend on accounts, passwords, and Wi-Fi
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A smart TV, phone, tablet, or streaming device problem is not always just a device
                problem. It may involve Wi-Fi, email access, app passwords, verification codes,
                subscriptions, or old accounts that no one remembers clearly.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Bedsun Tech helps connect the pieces so your device is easier to use and easier to
                understand after the appointment.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>iPhone</Pill>
                <Pill>Android</Pill>
                <Pill>iPad</Pill>
                <Pill>Smart TVs</Pill>
                <Pill>Roku</Pill>
                <Pill>Fire Stick</Pill>
                <Pill>Apple TV</Pill>
                <Pill>Streaming apps</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How device setup help works
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="1. Review the device and goal"
              desc="We look at the device, what you want it to do, what accounts or apps are involved, and what is currently not working."
            />
            <Card
              title="2. Set up the important pieces"
              desc="We work through Wi-Fi, updates, accounts, apps, remotes, settings, and practical setup steps so the device is usable."
            />
            <Card
              title="3. Explain how to use it"
              desc="You get simple guidance on what changed, where the important buttons or apps are, and what to do if the issue comes back."
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
                Device setup often connects to Wi-Fi, passwords, and senior tech help
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm leading-relaxed text-gray-600">
                Smart TVs, phones, tablets, and streaming apps usually depend on a working home
                network and the right account information. Bedsun Tech can help with the device
                setup and the account or Wi-Fi issue around it.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/wifi-setup-troubleshooting"
                  className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  View Wi-Fi Help
                </Link>
                <Link
                  to="/email-password-scam-help"
                  className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  View Email & Password Help
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
              Smart TV, phone, and tablet setup FAQs
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FAQ
              question="Can you help set up a new iPhone, Android, iPad, or tablet?"
              answer="Yes. I can help with Wi-Fi, email, app downloads, settings, contacts, photos, backups, and basic device guidance."
            />
            <FAQ
              question="Can you help with Roku, Fire Stick, or Apple TV?"
              answer="Yes. I can help connect the device, pair remotes, sign into streaming apps, organize channels, and explain how to use the setup."
            />
            <FAQ
              question="Can you help with smart TV apps and logins?"
              answer="Yes. I can help with app setup, account sign-ins, verification codes, password confusion, and basic troubleshooting for streaming apps."
            />
            <FAQ
              question="Is this a good service for seniors?"
              answer="Yes. This service is designed to be patient and plain-English, especially for seniors, families, and anyone who wants one-on-one device help."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4 rounded-3xl border border-gray-200 bg-gray-900 p-8 text-white shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Need help setting up a phone, tablet, smart TV, or streaming device?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                Bring the device, remote, app, account, or login issue you are stuck on. I will help
                you get it working and explain the setup in plain English.
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
