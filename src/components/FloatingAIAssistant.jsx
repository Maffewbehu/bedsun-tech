import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const launcher = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        launcher.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="assistant-launcher fixed right-4 z-40 flex flex-col items-end">
      {isOpen && (
        <section id="assistant-greeting" aria-label="Bedsun Tech AI Assistant" className="mb-3 max-h-[calc(100dvh-12rem)] w-[min(calc(100vw-2rem),22rem)] overflow-y-auto rounded-2xl border border-indigo-100 bg-white shadow-2xl">
          <div className="flex items-center justify-between gap-3 bg-gradient-to-br from-indigo-600 to-slate-900 p-4 text-white">
            <h2 className="font-bold">Not sure where to start?</h2>
            <button type="button" onClick={() => { setIsOpen(false); launcher.current?.focus(); }} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-2xl hover:bg-white/10" aria-label="Close AI Assistant greeting">×</button>
          </div>
          <div className="p-4">
            <p className="text-sm leading-relaxed text-gray-700">Describe what you’re trying to fix or build. The assistant will help you find the right service.</p>
            <Link to="/ai-consultant" className="mt-4 flex min-h-11 items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white">Ask the AI Assistant</Link>
            <Link to="/contact" className="mt-2 flex min-h-11 items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-800">Contact Matt</Link>
          </div>
        </section>
      )}
      <button ref={launcher} type="button" onClick={() => setIsOpen(open => !open)} aria-label={isOpen ? "Close Bedsun Tech AI Assistant" : "Open Bedsun Tech AI Assistant"} aria-expanded={isOpen} aria-controls="assistant-greeting" className="flex min-h-12 items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-3 font-semibold text-indigo-800 shadow-lg">
        <span aria-hidden="true" className="text-2xl">🤖</span><span>AI help</span>
      </button>
    </div>
  );
}
