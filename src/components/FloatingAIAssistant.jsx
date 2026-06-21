import { useState } from "react";
import { Link } from "react-router-dom";

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-indigo-200 bg-white text-3xl shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
        aria-label="Open Bedsun Tech AI Assistant"
      >
        🤖
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[min(calc(100vw-2rem),22rem)]">
      <div className="overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-2xl">
        <div className="flex items-start gap-3 bg-gradient-to-br from-indigo-600 to-slate-900 p-4 text-white">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl">
            🤖
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold">Bedsun Tech AI Assistant</div>
            <p className="mt-1 text-xs leading-relaxed text-indigo-100">
              Not sure where to start?
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full px-2 text-lg leading-none text-white/80 hover:bg-white/10 hover:text-white"
            aria-label="Close AI Assistant greeting"
          >
            ×
          </button>
        </div>

        <div className="p-4">
          <p className="text-sm leading-relaxed text-gray-700">
            Tell the assistant what you’re trying to fix, build, or improve. It will ask a few quick questions and help point you toward the right Bedsun Tech service.
          </p>

          <div className="mt-4 flex gap-2">
            <Link
              to="/ai-consultant"
              className="inline-flex flex-1 justify-center rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Ask the AI Assistant
            </Link>

            <Link
              to="/contact"
              className="inline-flex justify-center rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}