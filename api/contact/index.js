const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "bedsun.tech@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Bedsun Tech <onboarding@resend.dev>";

function sanitize(value) {
  if (!value) return "Not provided";
  return String(value).replace(/[<>]/g, "").trim();
}

module.exports = async function (context, req) {
  try {
    if (req.method !== "POST") {
      context.res = {
        status: 405,
        body: { error: "Method not allowed" },
      };
      return;
    }

    if (!process.env.RESEND_API_KEY) {
      context.log("Missing RESEND_API_KEY environment variable.");

      context.res = {
        status: 500,
        body: { error: "Email service is not configured." },
      };
      return;
    }

    const body = req.body || {};

    const firstName = sanitize(body.first_name);
    const lastName = sanitize(body.last_name);
    const fullName = sanitize(body.full_name || `${firstName} ${lastName}`);
    const fromEmail = sanitize(body.from_email);
    const phone = sanitize(body.phone);
    const serviceType = sanitize(body.service_type);
    const helpType = sanitize(body.help_type);
    const timeline = sanitize(body.timeline);
    const budget = sanitize(body.budget);
    const subject = sanitize(body.subject || "New Bedsun Tech website inquiry");
    const message = sanitize(body.message);

    if (
      !fromEmail ||
      fromEmail === "Not provided" ||
      !message ||
      message === "Not provided"
    ) {
      context.res = {
        status: 400,
        body: { error: "Email and message are required." },
      };
      return;
    }

    const emailSubject = `Bedsun Tech Website Inquiry: ${subject}`;

    const textBody = `
New Bedsun Tech website inquiry

Name: ${fullName}
Email: ${fromEmail}
Phone: ${phone}
Service Type: ${serviceType}
Help Type: ${helpType}
Timeline: ${timeline}
Budget: ${budget}

Message:
${message}
`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2>New Bedsun Tech Website Inquiry</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${fromEmail}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Help Type:</strong> ${helpType}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: fromEmail,
      subject: emailSubject,
      text: textBody,
      html: htmlBody,
    });

    if (result.error) {
      context.log("Resend send error:", result.error);

      context.res = {
        status: 500,
        body: {
          error: "Email provider rejected the message.",
          details: result.error.message || result.error,
        },
      };
      return;
    }

    context.res = {
      status: 200,
      body: {
        success: true,
        id: result?.data?.id || null,
      },
    };
  } catch (error) {
    context.log("Resend contact error:", error);

    context.res = {
      status: 500,
      body: {
        error: "Failed to send message.",
      },
    };
  }
};