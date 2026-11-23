const TO_EMAIL = "bedsun.tech@gmail.com";
const FIELD_LIMITS = {
  full_name: 160, first_name: 160, last_name: 160, from_email: 254, phone: 40,
  service_type: 160, service_id: 80, help_type: 80, timeline: 80, budget: 80,
  subject: 200, message: 5000, business_name: 160, website: 500, postal_code: 10,
  preferred_contact: 10, audience: 20, product_id: 80,
};

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
}

function createContactHandler({ env = process.env, sendEmail } = {}) {
  return async function contact(context, req) {
    const method = (req.method || "").toUpperCase();
    const headers = { "Cache-Control": "no-store" };
    function respond(status, body, extraHeaders = {}) {
      context.res = { status, headers: { ...headers, ...extraHeaders }, ...(body ? { body } : {}) };
    }

    if (method === "OPTIONS") return respond(204, null, { Allow: "GET, POST, OPTIONS" });
    if (method === "GET") return respond(200, { success: true, message: "Bedsun Tech contact API is online." });
    if (method !== "POST") return respond(405, { error: "Method not allowed" }, { Allow: "GET, POST, OPTIONS" });

    const body = req.body;
    if (!body || typeof body !== "object" || Array.isArray(body)) return respond(400, { error: "Please send a valid contact request." });
    for (const [field, maximum] of Object.entries(FIELD_LIMITS)) {
      if (body[field] != null && (typeof body[field] !== "string" || body[field].length > maximum)) {
        return respond(400, { error: "One of the request details is invalid or too long. Please shorten it and try again." });
      }
    }

    const fullName = text(body.full_name) || [text(body.first_name), text(body.last_name)].filter(Boolean).join(" ");
    const fromEmail = text(body.from_email);
    const phone = text(body.phone);
    const message = text(body.message);
    const preferredContact = text(body.preferred_contact) || (fromEmail ? "email" : "phone");
    const validEmail = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fromEmail);
    const digits = phone.replace(/\D/g, "");
    const validPhone = /^[+()\d\s.\-]+$/.test(phone) && digits.length >= 7 && digits.length <= 15;

    if (!message) return respond(400, { error: "Please describe what you need help with." });
    if (!["email", "phone"].includes(preferredContact)) return respond(400, { error: "Choose an email or phone reply." });
    if ((fromEmail && !validEmail) || (preferredContact === "email" && !validEmail)) return respond(400, { error: "Please enter a valid email address for your reply." });
    if ((phone && !validPhone) || (preferredContact === "phone" && !validPhone)) return respond(400, { error: "Please enter a valid callback phone number." });
    if (!env.RESEND_API_KEY && !sendEmail) {
      context.log("Contact email service is not configured.");
      return respond(503, { error: "The contact form is temporarily unavailable. Please call or email Matt directly." });
    }

    const subject = (text(body.subject) || "New Bedsun Tech website inquiry").replace(/[\r\n]/g, " ");
    const details = [
      ["Name", fullName], ["Preferred reply", preferredContact === "phone" ? "Phone call" : "Email"],
      ["Email", fromEmail], ["Phone", phone], ["Inquiry type", text(body.audience)],
      ["Service", text(body.service_type)], ["Business", text(body.business_name)], ["Website", text(body.website)],
      ["ZIP code", text(body.postal_code)], ["Help type", text(body.help_type)],
      ["Timeline", text(body.timeline)], ["Budget", text(body.budget)], ["Product", text(body.product_id)],
    ];
    const payload = {
      from: env.RESEND_FROM_EMAIL || "Bedsun Tech <onboarding@resend.dev>",
      to: TO_EMAIL,
      ...(fromEmail ? { replyTo: fromEmail } : {}),
      subject: `Bedsun Tech Website Inquiry: ${subject}`,
      text: ["New Bedsun Tech website inquiry", "", ...details.map(([label, value]) => `${label}: ${value || "Not provided"}`), "", "Message:", message].join("\n"),
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;"><h2>New Bedsun Tech Website Inquiry</h2>${details.map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value || "Not provided")}</p>`).join("")}<hr /><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p></div>`,
    };

    try {
      const send = sendEmail || (email => {
        const { Resend } = require("resend");
        return new Resend(env.RESEND_API_KEY).emails.send(email);
      });
      const result = await send(payload);
      if (result?.error || !result?.data?.id) {
        context.log("Contact email provider did not confirm acceptance.");
        return respond(502, { error: "Your request could not be sent. Please try again or contact Matt directly." });
      }
      return respond(200, { success: true, id: result.data.id });
    } catch {
      context.log("Contact email provider request failed.");
      return respond(502, { error: "Your request could not be sent. Please try again or contact Matt directly." });
    }
  };
}

module.exports = createContactHandler();
module.exports.createContactHandler = createContactHandler;
