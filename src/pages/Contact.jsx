import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { digitalProducts } from "../data/digitalProducts";
import { trackAnalyticsEvent } from "../lib/analytics";
import { getInquiryService, INQUIRY_SERVICES } from "../lib/inquiry";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";
const CONTACT_EMAIL = "bedsun.tech@gmail.com";
const CONTACT_PHONE_DISPLAY = "702-219-5011";
const CONTACT_PHONE_TEL = "17022195011";
const CONTROL_CLASS = "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";
const EMPTY_FORM = {
  full_name: "", preferred_contact: "email", from_email: "", phone: "", message: "",
  business_name: "", website: "", postal_code: "", service_type: "", help_type: "",
  timeline: "", budget: "", subject: "",
};

function Field({ label, children, hint }) {
  return <label className="block">
    <span className="mb-2 block text-sm font-semibold text-gray-800">{label}</span>
    {children}
    {hint && <span className="mt-2 block text-sm leading-relaxed text-gray-500">{hint}</span>}
  </label>;
}

function Input({ name, value, onChange, type = "text", ...props }) {
  return <input name={name} type={type} value={value} onChange={onChange} className={CONTROL_CLASS}
    autoComplete={{ full_name: "name", from_email: "email", phone: "tel", business_name: "organization", website: "url", postal_code: "postal-code" }[name]}
    {...props} />;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const query = searchParams.toString();
  const [audience, setAudience] = useState("personal");
  const [productId, setProductId] = useState("");
  const [formData, setFormData] = useState({ ...EMPTY_FORM });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });
  const sending = useRef(false);
  const statusRef = useRef(null);
  const productInquiry = digitalProducts.find(product => product.id === productId);
  const selectedService = INQUIRY_SERVICES.find(service => service.label === formData.service_type);

  // Query context is applied after hydration: /contact is also the static HTML
  // used for direct links to a service or product inquiry.
  useEffect(() => {
    const params = new URLSearchParams(query);
    const product = digitalProducts.find(item => item.id === params.get("product"));
    const service = getInquiryService(params.get("service"));
    const nextAudience = product
      ? (product.id === "sales-expenses-dashboard" ? "business" : "personal")
      : service?.audience || (params.get("audience") === "business" ? "business" : "personal");
    setAudience(nextAudience);
    setProductId(product?.id || "");
    setFormData(previous => ({
      ...previous,
      service_type: product?.inquiryService || service?.label || "",
      subject: product ? `${product.name} inquiry` : service ? `${service.label} inquiry` : "",
    }));
    setStatus(previous => previous.loading ? previous : { loading: false, success: false, error: "" });
  }, [query]);

  useEffect(() => {
    if (status.success || status.error) statusRef.current?.focus();
  }, [status.success, status.error]);

  function handleChange(event) {
    const { name, value } = event.target;
    const service = name === "service_type" ? INQUIRY_SERVICES.find(item => item.label === value) : null;
    if (service) setAudience(service.audience);
    setFormData(previous => ({
      ...previous,
      [name]: value,
      ...(service && (!previous.subject || previous.subject === `${selectedService?.label} inquiry`)
        ? { subject: `${service.label} inquiry` }
        : {}),
      ...(service && service.audience !== audience
        ? service.audience === "personal" ? { business_name: "", website: "" } : { postal_code: "" }
        : {}),
    }));
    if (status.success || status.error) setStatus({ loading: false, success: false, error: "" });
  }

  function changeAudience(nextAudience) {
    if (nextAudience === audience) return;
    setAudience(nextAudience);
    setFormData(previous => ({
      ...previous,
      service_type: "",
      subject: "",
      ...(nextAudience === "personal" ? { business_name: "", website: "" } : { postal_code: "" }),
    }));
    setStatus({ loading: false, success: false, error: "" });
  }

  function inquiryPayload() {
    return {
      ...formData,
      from_email: formData.preferred_contact === "email" ? formData.from_email.trim() : "",
      phone: formData.preferred_contact === "phone" ? formData.phone.trim() : "",
      full_name: formData.full_name.trim(),
      message: formData.message.trim(),
      subject: formData.subject || (productInquiry ? `${productInquiry.name} inquiry` : `${audience === "business" ? "Business" : "Personal"} tech help request`),
      audience: productInquiry ? "product" : audience,
      service_id: selectedService?.id || "",
      product_id: productInquiry?.id || "",
      source: "Bedsun Tech Website",
      page: "Contact",
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending.current) return;
    const payload = inquiryPayload();
    if (!payload.full_name || !payload.message) {
      setStatus({ loading: false, success: false, error: "Please add your name and a short description of what you need." });
      return;
    }
    sending.current = true;
    setStatus({ loading: true, success: false, error: "" });
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(response.status === 400 && result.error ? result.error : "Your request could not be sent. Please try again or contact Matt directly below.");
      }
      trackAnalyticsEvent("generate_lead", {
        lead_source: "contact_form",
        inquiry_type: productInquiry ? "digital_product" : audience,
        service_id: selectedService?.id || "general",
        ...(productInquiry ? { product_id: productInquiry.id } : {}),
      });
      setFormData(previous => ({ ...EMPTY_FORM, service_type: previous.service_type, subject: previous.subject, preferred_contact: previous.preferred_contact }));
      setStatus({ loading: false, success: true, error: "" });
    } catch (error) {
      setStatus({ loading: false, success: false, error: error instanceof Error && error.message ? error.message : "Your request could not be sent. Please try again or contact Matt directly below." });
    } finally {
      sending.current = false;
    }
  }

  return <>
    <SEO title="Contact Bedsun Tech | Request Tech Help in Las Vegas" path="/contact"
      description="Request personal tech help, a business technology review, website work, or automation from Bedsun Tech in Las Vegas. Choose an email or phone reply and tell Matt what you need." />
    <div>
      <header className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">Contact Matt</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let’s get your next step sorted.</h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600">A few details are enough to start. Tell me what you need and choose how you’d like me to reply.</p>
        <div className="mt-5 flex flex-wrap gap-3 lg:hidden">
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="inline-flex min-h-11 items-center rounded-xl border border-indigo-200 bg-white px-4 py-3 text-base font-semibold text-indigo-700">Call Matt</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex min-h-11 items-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-base font-semibold text-gray-800">Email Matt</a>
        </div>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7" aria-label="Request tech help" aria-busy={status.loading}>
            <fieldset disabled={status.loading} className="min-w-0 space-y-5">
              <legend className="sr-only">Your request</legend>
              {productInquiry ? <div className="rounded-2xl bg-indigo-50 p-4">
                <p className="text-sm font-semibold text-indigo-900">Question about {productInquiry.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-indigo-800">The product details are included with your request.</p>
              </div> : <fieldset>
                <legend className="mb-2 text-sm font-semibold text-gray-800">What kind of help do you need?</legend>
                <div className="grid grid-cols-2 gap-2">
                  {[["personal", "For home"], ["business", "For business"]].map(([value, label]) => <button key={value} type="button" aria-pressed={audience === value} onClick={() => changeAudience(value)} className={`min-h-12 rounded-xl border px-4 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${audience === value ? "border-indigo-600 bg-indigo-50 text-indigo-800" : "border-gray-300 bg-white text-gray-600 hover:border-indigo-400"}`}>{label}</button>)}
                </div>
                {selectedService && <p className="mt-3 text-sm text-indigo-800">Selected: <strong>{selectedService.label}</strong>. You can change this in optional details.</p>}
              </fieldset>}

              <Field label="Your name"><Input name="full_name" required maxLength={160} value={formData.full_name} onChange={handleChange} placeholder="Your name" /></Field>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-gray-800">How should Matt reply?</legend>
                <div className="mb-3 flex flex-wrap gap-4">
                  {[["email", "Email me"], ["phone", "Call me"]].map(([value, label]) => <label key={value} className="flex min-h-11 cursor-pointer items-center gap-2 text-base text-gray-800">
                    <input type="radio" name="preferred_contact" value={value} checked={formData.preferred_contact === value} onChange={handleChange} className="h-4 w-4 accent-indigo-600" />{label}
                  </label>)}
                </div>
                {formData.preferred_contact === "email" ? <Field label="Email address"><Input name="from_email" type="email" required maxLength={254} value={formData.from_email} onChange={handleChange} placeholder="you@example.com" /></Field>
                  : <Field label="Phone number"><Input name="phone" type="tel" required maxLength={40} value={formData.phone} onChange={handleChange} placeholder="Your callback number" /></Field>}
              </fieldset>

              <Field label={productInquiry ? "What would you like to know?" : audience === "business" ? "What would you like fixed or improved?" : "What needs fixing or setting up?"}>
                <textarea name="message" required maxLength={5000} rows={5} value={formData.message} onChange={handleChange} className={CONTROL_CLASS}
                  placeholder={productInquiry ? "Tell me your question or what you need help setting up." : audience === "business" ? "For example: our website inquiries get missed, or we spend hours updating the same spreadsheet." : "For example: my printer is offline, or I need help setting up a new phone."} />
              </Field>

              {!productInquiry && (audience === "personal" ? <Field label="ZIP code for an on-site visit (optional)" hint="Las Vegas area support. Matt will confirm whether a visit or remote help fits your request.">
                <Input name="postal_code" inputMode="numeric" maxLength={10} value={formData.postal_code} onChange={handleChange} placeholder="ZIP code" />
              </Field> : <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Business name (optional)"><Input name="business_name" maxLength={160} value={formData.business_name} onChange={handleChange} placeholder="Your business" /></Field>
                <Field label="Website (optional)"><Input name="website" maxLength={500} value={formData.website} onChange={handleChange} placeholder="example.com" inputMode="url" /></Field>
              </div>)}

              <details className="rounded-2xl border border-gray-200 px-4 py-3">
                <summary className="min-h-8 cursor-pointer text-sm font-semibold text-gray-700">Add optional details</summary>
                <div className="mt-4 space-y-4">
                  <Field label="Service">
                    <select name="service_type" value={formData.service_type} onChange={handleChange} className={CONTROL_CLASS}>
                      <option value="">Help me choose</option>
                      {INQUIRY_SERVICES.map(service => <option key={service.id} value={service.label}>{service.label}</option>)}
                      <option value="Custom app or dashboard">Custom app or dashboard</option>
                      <option value="Microsoft 365 or business email">Microsoft 365 or business email</option>
                      <option value="Wi-Fi, cameras, or devices">Wi-Fi, cameras, or devices</option>
                      <option value="Digital product / spreadsheet">Digital product / spreadsheet</option>
                      <option value="Digital product / Power BI dashboard">Digital product / Power BI dashboard</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Preferred help type"><select name="help_type" value={formData.help_type} onChange={handleChange} className={CONTROL_CLASS}>
                      <option value="">Not sure yet</option><option>Remote</option><option>On-site</option><option>Either works</option>
                    </select></Field>
                    <Field label="Preferred timeline"><select name="timeline" value={formData.timeline} onChange={handleChange} className={CONTROL_CLASS}>
                      <option value="">Not sure yet</option><option>This week</option><option>This month</option><option>Flexible</option><option>Planning ahead</option>
                    </select></Field>
                  </div>
                  {audience === "business" && <Field label="Budget range"><select name="budget" value={formData.budget} onChange={handleChange} className={CONTROL_CLASS}>
                    <option value="">Not sure yet</option><option>Under $500</option><option>$500 - $1,500</option><option>$1,500 - $5,000</option><option>$5,000+</option>
                  </select></Field>}
                  <Field label="Subject"><Input name="subject" maxLength={200} value={formData.subject} onChange={handleChange} placeholder="Optional short description" /></Field>
                </div>
              </details>

              <p className="text-sm leading-relaxed text-gray-600">Matt will review your request and confirm the scope, price, and availability with you before work begins. Sending this form requests a reply; it does not book or charge you for an appointment.</p>
              <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-800 disabled:cursor-wait disabled:opacity-60 sm:w-auto">{status.loading ? "Sending request…" : productInquiry ? "Send product question" : "Request help"}</button>
              <p className="text-sm text-gray-500">By sending, you agree to be contacted about this request.</p>
            </fieldset>

            {status.success && <div ref={statusRef} tabIndex={-1} role="status" className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-base leading-relaxed text-green-900 outline-none">
              <p className="font-semibold">Your request has been sent.</p>
              <p className="mt-1">Matt will review the details and reply using your preferred contact method. Any scope, price, and appointment will be confirmed with you first.</p>
            </div>}
            {status.error && <div ref={statusRef} tabIndex={-1} role="alert" className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-base leading-relaxed text-amber-950 outline-none">
              <p>{status.error}</p>
              <p className="mt-2"><a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline underline-offset-2">Open your email app</a> or <a href={`tel:${CONTACT_PHONE_TEL}`} className="font-semibold underline underline-offset-2">call {CONTACT_PHONE_DISPLAY}</a>.</p>
            </div>}
          </form>
        </div>

        <aside className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-6 lg:col-span-4">
          <h2 className="text-lg font-semibold text-gray-900">A clear next step</h2>
          <ul className="mt-4 space-y-4 text-base leading-relaxed text-gray-700">
            <li><strong className="text-gray-900">Share the problem.</strong> A short description is enough to start.</li>
            <li><strong className="text-gray-900">Agree on the plan.</strong> We’ll confirm what is needed, the price, and availability.</li>
            <li><strong className="text-gray-900">Get help that fits.</strong> Remote support or a Las Vegas area visit, depending on the work.</li>
          </ul>
          <div className="mt-6 border-t border-indigo-100 pt-5">
            <h3 className="text-sm font-semibold text-gray-900">Prefer to get in touch directly?</h3>
            <a href={`tel:${CONTACT_PHONE_TEL}`} className="mt-2 flex min-h-11 items-center text-base font-semibold text-indigo-700 underline underline-offset-4">Call {CONTACT_PHONE_DISPLAY}</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex min-h-11 items-center break-all text-base font-semibold text-indigo-700 underline underline-offset-4">{CONTACT_EMAIL}</a>
          </div>
        </aside>
      </div>
    </div>
  </>;
}
