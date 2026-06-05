import { useState } from "react";
import SEO from "../components/SEO";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";
const CONTACT_EMAIL = "bedsun.tech@gmail.com";
const CONTACT_PHONE_DISPLAY = "702-219-5011";
const CONTACT_PHONE_TEL = "17022195011";

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </div>
      {children}
    </label>
  );
}

function Input({ name, type = "text", value, onChange, placeholder, required = false }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      placeholder={placeholder}
    />
  );
}

function Select({ name, value, onChange, required = false, children }) {
  return (
    <select
      name={name}
      value={value}
      required={required}
      onChange={onChange}
      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
    >
      {children}
    </select>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    from_email: "",
    phone: "",
    service_type: "",
    help_type: "",
    timeline: "",
    budget: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildMailtoFallback = () => {
    const fullName = `${formData.first_name} ${formData.last_name}`.trim();
    const subject = encodeURIComponent(
      formData.subject || `New website inquiry from ${fullName || "Bedsun Tech website"}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${fullName}`,
        `Email: ${formData.from_email}`,
        `Phone: ${formData.phone || "Not provided"}`,
        `Service Type: ${formData.service_type || "Not selected"}`,
        `Help Type: ${formData.help_type || "Not selected"}`,
        `Timeline: ${formData.timeline || "Not selected"}`,
        `Budget: ${formData.budget || "Not selected"}`,
        "",
        "Message:",
        formData.message,
      ].join("\n")
    );

    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    if (!CONTACT_ENDPOINT) {
      window.location.href = buildMailtoFallback();

      setStatus({
        loading: false,
        success: false,
        error:
          "No contact form endpoint is configured yet. Your email app should open with the request details filled in.",
      });

      return;
    }

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          full_name: `${formData.first_name} ${formData.last_name}`.trim(),
          source: "Bedsun Tech Website",
          page: "Contact",
        }),
      });

      if (!response.ok) {
        throw new Error("The contact form service did not accept the message.");
      }

      setFormData({
        first_name: "",
        last_name: "",
        from_email: "",
        phone: "",
        service_type: "",
        help_type: "",
        timeline: "",
        budget: "",
        subject: "",
        message: "",
      });

      setStatus({
        loading: false,
        success: true,
        error: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);

      setStatus({
        loading: false,
        success: false,
        error:
          "Something went wrong sending the form. You can still email directly using the fallback link below.",
      });
    }
  };

  return (
    <>
      <SEO
        title="Contact Bedsun Tech | Websites, Automation & IT Support"
        description="Contact Bedsun Tech for websites, business automation, custom dashboards, small business IT support, personal technology help, Wi-Fi, Microsoft 365, cameras, and technology cleanup in the Las Vegas area."
        path="/contact"
      />

      <div>
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Contact
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tell me what you’re trying to fix or build.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Whether you need a website, business automation, custom tool, small business IT support,
            or personal tech help, send a few details and I’ll help map out the next step.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Info panel */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">What to include</h2>

              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• What you need fixed, built, automated, or cleaned up</li>
                <li>• Whether this is for a business, home, or personal setup</li>
                <li>• Your ideal timeline</li>
                <li>• Whether help is remote, on-site, or not sure yet</li>
                <li>• Any screenshots, errors, website links, or examples</li>
              </ul>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Common requests
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                    Website redesign
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                    Automation
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                    Microsoft 365
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                    Wi-Fi / cameras
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                    Tech cleanup
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Direct contact
                </div>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 block text-sm font-semibold text-indigo-700 hover:text-indigo-800"
                >
                  {CONTACT_EMAIL}
                </a>

                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="mt-2 block text-sm font-semibold text-indigo-700 hover:text-indigo-800"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>

                <p className="mt-2 text-sm text-gray-600">
                  Use direct email or phone if the form gives you any trouble.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name">
                  <Input
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Matthew"
                  />
                </Field>

                <Field label="Last name">
                  <Input
                    name="last_name"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Bedsun"
                  />
                </Field>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Email">
                  <Input
                    type="email"
                    name="from_email"
                    required
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                  />
                </Field>

                <Field label="Phone">
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Optional"
                  />
                </Field>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="What do you need help with?">
                  <Select
                    name="service_type"
                    required
                    value={formData.service_type}
                    onChange={handleChange}
                  >
                    <option value="">Select one</option>
                    <option value="Website design or redesign">Website design or redesign</option>
                    <option value="Business automation">Business automation</option>
                    <option value="Custom app or dashboard">Custom app or dashboard</option>
                    <option value="Small business IT support">Small business IT support</option>
                    <option value="Microsoft 365 or business email">
                      Microsoft 365 or business email
                    </option>
                    <option value="Personal tech help">Personal tech help</option>
                    <option value="Wi-Fi, cameras, or devices">Wi-Fi, cameras, or devices</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </Select>
                </Field>

                <Field label="Help type">
                  <Select
                    name="help_type"
                    value={formData.help_type}
                    onChange={handleChange}
                  >
                    <option value="">Select one</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                    <option value="Either works">Either works</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </Select>
                </Field>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Timeline">
                  <Select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select one</option>
                    <option value="ASAP">ASAP</option>
                    <option value="This week">This week</option>
                    <option value="This month">This month</option>
                    <option value="Flexible">Flexible</option>
                    <option value="Planning ahead">Planning ahead</option>
                  </Select>
                </Field>

                <Field label="Estimated budget">
                  <Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select one</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 - $1,500">$500 - $1,500</option>
                    <option value="$1,500 - $5,000">$1,500 - $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </Select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Subject">
                  <Input
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Website redesign, automation idea, IT support, etc."
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Message">
                  <textarea
                    name="message"
                    rows="7"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    placeholder="Describe what’s going on, what you’ve tried, what you want built, or what ‘done’ looks like…"
                  />
                </Field>
              </div>

              {status.success ? (
                <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800">
                  Message sent. I’ll review the details and follow up.
                </div>
              ) : null}

              {status.error ? (
                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  {status.error}{" "}
                  <a
                    href={buildMailtoFallback()}
                    className="font-semibold text-amber-950 underline underline-offset-2"
                  >
                    Open email instead.
                  </a>
                </div>
              ) : null}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status.loading ? "Sending..." : "Send message"}
                </button>

                <div className="text-xs text-gray-500">
                  By sending, you agree to be contacted about this request.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}