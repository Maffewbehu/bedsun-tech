const { Resend } = require("resend");

const TO_EMAIL = "bedsun.tech@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Bedsun Tech <onboarding@resend.dev>";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";
const MAX_MESSAGES = 12;
const MAX_MESSAGE_CHARS = 1200;

function sanitize(value, fallback = "Not provided") {
  if (value === undefined || value === null) return fallback;
  const clean = String(value).replace(/[<>]/g, "").trim();
  return clean || fallback;
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) return [];

  return messages
    .filter((message) => message && ["user", "assistant"].includes(message.role))
    .slice(-MAX_MESSAGES)
    .map((message) => ({
      role: message.role,
      content: sanitize(message.content, "").slice(0, MAX_MESSAGE_CHARS),
    }))
    .filter((message) => message.content);
}

function extractOutputText(data) {
  if (typeof data?.output_text === "string") return data.output_text;

  const chunks = [];
  for (const item of data?.output || []) {
    for (const content of item?.content || []) {
      if (typeof content?.text === "string") chunks.push(content.text);
    }
  }

  return chunks.join("\n").trim();
}

function parseAssistantPayload(text) {
  const fallback = {
    reply:
      text ||
      "I can help point you in the right direction. Tell me what you are trying to fix, build, automate, or improve.",
    serviceCategory: "Unknown",
    leadReady: false,
    lead: {},
    internalSummary: "",
  };

  try {
    const cleaned = text
      .replace(/^```json/i, "")
      .replace(/^```/i, "")
      .replace(/```$/i, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    return {
      reply: sanitize(parsed.reply, fallback.reply),
      serviceCategory: sanitize(parsed.serviceCategory, "Unknown"),
      leadReady: Boolean(parsed.leadReady),
      lead: parsed.lead && typeof parsed.lead === "object" ? parsed.lead : {},
      internalSummary: sanitize(parsed.internalSummary, ""),
    };
  } catch (error) {
    return fallback;
  }
}

function hasContactDetails(lead) {
  const email = sanitize(lead.email, "");
  const phone = sanitize(lead.phone, "");
  const name = sanitize(lead.name, "");
  return name && (email || phone);
}

function buildEmailHtml({ payload }) {
  const lead = payload.lead || {};
  const rows = [
    ["Service Category", payload.serviceCategory],
    ["Name", lead.name],
    ["Business Name", lead.businessName],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Preferred Contact", lead.preferredContact],
    ["City / Service Area", lead.city],
    ["Timeline / Urgency", lead.timeline],
    ["Budget", lead.budget],
  ];

  const rowHtml = rows
    .map(
      ([label, value]) =>
        `<p><strong>${sanitize(label)}:</strong> ${sanitize(value)}</p>`
    )
    .join("\n");

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2>New Bedsun Tech AI Lead</h2>
      ${rowHtml}
      <hr />
      <p><strong>AI Project Summary:</strong></p>
      <p>${sanitize(payload.internalSummary).replace(/\n/g, "<br />")}</p>
      <hr />
      <p><strong>Visitor-facing final message:</strong></p>
      <p>${sanitize(payload.reply).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

function buildEmailText({ payload }) {
  const lead = payload.lead || {};

  return `New Bedsun Tech AI Lead

Service Category: ${sanitize(payload.serviceCategory)}
Name: ${sanitize(lead.name)}
Business Name: ${sanitize(lead.businessName)}
Email: ${sanitize(lead.email)}
Phone: ${sanitize(lead.phone)}
Preferred Contact: ${sanitize(lead.preferredContact)}
City / Service Area: ${sanitize(lead.city)}
Timeline / Urgency: ${sanitize(lead.timeline)}
Budget: ${sanitize(lead.budget)}

AI Project Summary:
${sanitize(payload.internalSummary)}

Visitor-facing final message:
${sanitize(payload.reply)}
`;
}

async function sendLeadEmail({ context, payload }) {
  if (!process.env.RESEND_API_KEY) {
    context.log("RESEND_API_KEY missing. Skipping AI lead email send.");
    return { sent: false, reason: "Email service is not configured." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const lead = payload.lead || {};
  const serviceCategory = sanitize(payload.serviceCategory, "AI Website Lead");
  const replyTo = sanitize(lead.email, "");

  const result = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    reply_to: replyTo || undefined,
    subject: `New Bedsun Tech AI Lead — ${serviceCategory}`,
    text: buildEmailText({ payload }),
    html: buildEmailHtml({ payload }),
  });

  if (result.error) {
    context.log("Resend AI lead error:", result.error);
    return {
      sent: false,
      reason: result.error.message || "Email provider rejected the message.",
    };
  }

  return { sent: true, id: result?.data?.id || null };
}

const SYSTEM_PROMPT = `You are the Bedsun Tech AI Consultant.

Your job is to help visitors understand which Bedsun Tech service fits their need and collect clean project details for Bedsun Tech.

Bedsun Tech helps with:
- Small business websites and SEO basics
- Google Business Profile setup
- Business email and Microsoft 365
- AI automation
- Custom dashboards and internal tools
- Wi-Fi, cameras, and cabling
- Small business IT support
- Personal tech help

Primary service categories:
1. Small Business Websites & SEO
2. AI Automation
3. Business IT Support
4. Cameras, Cabling & Network Installs
5. Personal Tech Help

Rules:
- Keep responses friendly, simple, professional, and short.
- Ask one to three useful follow-up questions at a time.
- Do not guarantee pricing.
- Do not claim Bedsun Tech is immediately available.
- Do not pretend to schedule appointments.
- Do not give legal, medical, or financial advice.
- Do not help with unsafe, illegal, or unrelated requests.
- If the visitor is ready, ask for name, phone or email, preferred contact method, business name if applicable, city/service area, timeline, and budget range if they have one.
- Mark leadReady true only when you have the visitor's name plus either phone or email and enough project detail for Bedsun Tech to follow up.

Return ONLY valid JSON with this exact shape:
{
  "reply": "visitor-facing response",
  "serviceCategory": "one primary service category or Unknown",
  "leadReady": false,
  "lead": {
    "name": "",
    "businessName": "",
    "email": "",
    "phone": "",
    "preferredContact": "",
    "city": "",
    "timeline": "",
    "budget": ""
  },
  "internalSummary": "clear summary for Bedsun Tech when leadReady is true, otherwise a brief progress note"
}`;

module.exports = async function (context, req) {
  try {
    const method = (req.method || "").toUpperCase();

    if (method === "OPTIONS") {
      context.res = {
        status: 204,
        headers: { Allow: "GET, POST, OPTIONS" },
      };
      return;
    }

    if (method === "GET") {
      context.res = {
        status: 200,
        body: {
          success: true,
          message: "Bedsun Tech AI Consultant API is online.",
          model: OPENAI_MODEL,
        },
      };
      return;
    }

    if (method !== "POST") {
      context.res = {
        status: 405,
        headers: { Allow: "GET, POST, OPTIONS" },
        body: { error: "Method not allowed", method },
      };
      return;
    }

    if (!process.env.OPENAI_API_KEY) {
      context.res = {
        status: 500,
        body: { error: "AI service is not configured." },
      };
      return;
    }

    const messages = normalizeMessages(req.body?.messages);

    if (!messages.length) {
      context.res = {
        status: 400,
        body: { error: "At least one message is required." },
      };
      return;
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        input: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        ],
        max_output_tokens: 900,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      context.log("OpenAI API error:", data);
      context.res = {
        status: response.status,
        body: {
          error: "AI service returned an error.",
          details: data?.error?.message || "Unknown OpenAI API error.",
        },
      };
      return;
    }

    const outputText = extractOutputText(data);
    const payload = parseAssistantPayload(outputText);

    let emailResult = { sent: false };
    if (payload.leadReady && hasContactDetails(payload.lead)) {
      emailResult = await sendLeadEmail({ context, payload });
    }

    context.res = {
      status: 200,
      body: {
        success: true,
        reply: payload.reply,
        serviceCategory: payload.serviceCategory,
        leadReady: payload.leadReady,
        leadEmailSent: Boolean(emailResult.sent),
        emailStatus: emailResult.reason || null,
      },
    };
  } catch (error) {
    context.log("AI consultant API error:", error);
    context.res = {
      status: 500,
      body: {
        error: "Failed to process AI consultant request.",
        details: error.message || "Unknown error",
      },
    };
  }
};