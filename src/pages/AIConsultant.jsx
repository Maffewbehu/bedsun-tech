import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const API_ENDPOINT =
  import.meta.env.VITE_AI_CONSULTANT_ENDPOINT || "/api/ai-consultant";

const STARTER_MESSAGES = [
  {
    role: "assistant",
    content:
      "Hey — I’m the Bedsun Tech AI Assistant. Tell me what you’re trying to fix, build, automate, or improve, and I’ll help point you in the right direction.",
  },
];

const QUICK_PROMPTS = [
  "I need a website for my business",
  "I want to automate something at work",
  "My business Wi-Fi is bad",
  "I need cameras or cabling",
  "I need help with email or Microsoft 365",
  "I need personal tech help at home",
];

const SERVICE_CARDS = [
  {
    title: "Websites & SEO",
    desc: "New websites, redesigns, Google Business Profile, contact forms, QR codes, and Search Console basics.",
  },
  {
    title: "AI Automation",
    desc: "AI intake, customer follow-up, document summaries, dashboards, reporting, and workflow cleanup.",
  },
  {
    title: "Business IT Support",
    desc: "Microsoft 365, business email, user setup, Wi-Fi, printers, devices, backups, and everyday office tech.",
  },
  {
    title: "Cameras, Cabling & Networks",
    desc: "Security cameras, network drops, access points, routers, firewalls, and small office connectivity planning.",
  },
  {
    title: "Personal Tech Help",
    desc: "Home Wi-Fi, computers, phones, printers, smart TVs, tablets, scam safety, and patient troubleshooting.",
  },
];

function ChatBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
          isUser
            ? "bg-indigo-600 text-white"
            : "border border-gray-200 bg-white text-gray-700",
        ].join(" ")}
      >
        {content}
      </div>
    </div>
  );
}

function StatusPill({ children }) {
  return (
    <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
      {children}
    </span>
  );
}

export default function AIConsultant() {
  const [messages, setMessages] = useState(STARTER_MESSAGES);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [leadSent, setLeadSent] = useState(false);
  const [lastCategory, setLastCategory] = useState("Not sure yet");

  const chatScrollRef = useRef(null);

  const userMessageCount = useMemo(
    () => messages.filter((message) => message.role === "user").length,
    [messages]
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (userMessageCount === 0) return;

    const chatBox = chatScrollRef.current;
    if (!chatBox) return;

    chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages, isSending, userMessageCount]);

  async function sendMessage(messageText) {
    const cleanMessage = messageText.trim();
    if (!cleanMessage || isSending) return;

    const nextMessages = [...messages, { role: "user", content: cleanMessage }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsSending(true);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.details ||
            data?.error ||
            "The AI assistant had trouble responding."
        );
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            data.reply ||
            "I can help with that. Can you share a little more detail about what you need?",
        },
      ]);

      if (data.serviceCategory) setLastCategory(data.serviceCategory);
      if (data.leadEmailSent) setLeadSent(true);
    } catch (err) {
      setError(
        err.message ||
          "The assistant is having trouble right now. You can still contact Bedsun Tech directly."
      );
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  function handleTextareaKeyDown(event) {
    if (event.key !== "Enter") return;

    if (event.shiftKey) {
      return;
    }

    event.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <SEO
        title="AI Consultant | Bedsun Tech Website Assistant"
        description="Ask the Bedsun Tech AI Assistant what kind of website, automation, AI workflow, IT support, Wi-Fi, camera, cabling, or personal tech help you may need."
        path="/ai-consultant"
      />

      <div>
        <section className="mx-auto mb-6 max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="bg-[radial-gradient(40rem_24rem_at_20%_0%,rgba(79,70,229,0.22),transparent_65%),linear-gradient(135deg,#111827,#1e1b4b)] p-5 text-white sm:p-6 lg:col-span-5 lg:p-7">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-100">
                Bedsun Tech AI Consultant
              </div>

              <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Not sure what tech help you need? Ask the assistant.
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-indigo-100">
                Describe what you are trying to fix, build, automate, or
                improve. The assistant will ask a few questions, recommend a
                starting direction, and create a clean project summary for
                Bedsun Tech.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <StatusPill>Websites</StatusPill>
                <StatusPill>AI automation</StatusPill>
                <StatusPill>Business IT</StatusPill>
                <StatusPill>Wi-Fi & cameras</StatusPill>
                <StatusPill>Personal tech</StatusPill>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-relaxed text-indigo-50">
                <strong className="text-white">How it works:</strong> answer a
                few quick questions, share your contact info when ready, and
                Bedsun Tech receives the project summary by email.
              </div>

              <p className="mt-4 text-xs leading-relaxed text-indigo-200">
                This assistant helps collect project details and recommend a
                starting direction. Final pricing, scope, and availability are
                confirmed by Bedsun Tech after review.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      AI Assistant Chat
                    </div>
                    <div className="text-xs text-gray-500">
                      Current direction: {lastCategory}
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-gray-500">
                    {userMessageCount} message
                    {userMessageCount === 1 ? "" : "s"} sent
                  </div>
                </div>
              </div>

              <div
                ref={chatScrollRef}
                className="h-[24rem] overflow-y-auto bg-gray-50/60 px-4 py-4 sm:h-[28rem] sm:px-5"
              >
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <ChatBubble
                      key={`${message.role}-${index}`}
                      role={message.role}
                      content={message.content}
                    />
                  ))}

                  {isSending ? (
                    <div className="flex justify-start">
                      <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
                        Thinking through the best next question…
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="border-t border-gray-200 bg-white p-3 sm:p-4">
                {leadSent ? (
                  <div className="mb-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                    Your project summary was sent to Bedsun Tech. You can keep
                    chatting if you want to add more detail.
                  </div>
                ) : null}

                {error ? (
                  <div className="mb-3 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    {error}
                  </div>
                ) : null}

                <div className="mb-3 flex flex-wrap gap-2">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      disabled={isSending}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleTextareaKeyDown}
                    rows={2}
                    className="min-h-[3rem] flex-1 resize-none rounded-2xl border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    placeholder="Example: I need a website and I want customers to be able to request quotes…"
                    disabled={isSending}
                  />

                  <button
                    type="submit"
                    disabled={isSending || !input.trim()}
                    className="inline-flex min-h-[3rem] touch-manipulation items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                  >
                    Send
                  </button>
                </form>

                <p className="mt-2 hidden text-xs text-gray-400 sm:block">
                  Press Enter to send. Use Shift + Enter for a new line.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-8 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-5">
          {SERVICE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <h2 className="text-sm font-semibold text-gray-900">
                {card.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                {card.desc}
              </p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-5 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                This is also a live example of what Bedsun Tech can build.
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                An AI website assistant can greet visitors, route them to the
                right service, collect project details, and send a clean lead
                summary instead of relying on a plain contact form.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right">
              <Link
                to="/ai-integration-small-business"
                className="inline-flex justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
              >
                View AI Integration Services →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}