import { useState } from "react";
import emailjs from "@emailjs/browser";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent!");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Failed to send message.");
      });
  };

  return (
    <div>
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Contact
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let’s talk.
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
          Tell me what you’re trying to fix or build. I’ll respond with a quick plan and options.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Info panel */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">What to include</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>• What’s broken (or what you’re building)</li>
              <li>• Timeline (today / this week / flexible)</li>
              <li>• Location (remote vs on-site)</li>
              <li>• Any screenshots / error messages</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Typical response
              </div>
              <div className="mt-1 text-sm font-semibold text-gray-900">
                Same day / next day
              </div>
              <div className="mt-1 text-sm text-gray-600">
                If it’s urgent, mention it in the subject.
              </div>
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
                <input
                  type="text"
                  name="first_name"
                  required
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder="Matthew"
                />
              </Field>

              <Field label="Last name">
                <input
                  type="text"
                  name="last_name"
                  required
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder="Bedsun"
                />
              </Field>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Email">
                <input
                  type="email"
                  name="from_email"
                  required
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder="you@company.com"
                />
              </Field>

              <Field label="Subject">
                <input
                  type="text"
                  name="subject"
                  required
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder="Help with Wi-Fi / Server / Cloud / etc."
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Message">
                <textarea
                  name="message"
                  rows="7"
                  required
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder="Describe what’s going on, what you’ve tried, and what ‘done’ looks like…"
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Send message
              </button>

              <div className="text-xs text-gray-500">
                By sending, you agree to be contacted about this request.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
