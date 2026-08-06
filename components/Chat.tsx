"use client";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";

export function Chat() {
  const { messages, sendMessage, status, stop } = useChat();
  const [input, setInput] = useState("");

  // --- Auto-scroll that respects the user scrolling up (mentor tip #1) ---
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(true);

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    // Pinned only while the user is within 40px of the bottom.
    setPinned(el.scrollHeight - el.scrollTop - el.clientHeight < 40);
  }

  useEffect(() => {
    if (pinned) scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, pinned]);

  const busy = status === "submitted" || status === "streaming";

  return (
    <div className="mx-auto flex h-[80dvh] max-w-2xl flex-col p-4">
      <div ref={scrollRef} onScroll={onScroll} className="relative flex-1 space-y-3 overflow-y-auto pb-4">
        {messages.length === 0 && (
          <p className="text-sm text-[#5A6172]">
            Ask me anything about Mehak's work — the farmer app, her role, results.
          </p>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-4 py-2 text-sm ${
              m.role === "user"
                ? "ml-auto bg-[#1C2A44] text-white"
                : "bg-white text-[#1C2433] shadow-sm"
            }`}
          >
            {m.parts.map((part, i) => (part.type === "text" ? <span key={i}>{part.text}</span> : null))}
            {/* Indicator→token handoff (mentor tip #3): the dots live INSIDE the
                assistant bubble and render only while this last message is empty. */}
            {m.role === "assistant" &&
              m === messages[messages.length - 1] &&
              busy &&
              m.parts.every((p) => p.type !== "text" || p.text === "") && (
                <span className="animate-pulse">●●●</span>
              )}
          </div>
        ))}
        {/* Thinking indicator BEFORE the assistant message exists */}
        {status === "submitted" && (
          <div className="max-w-[85%] rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
            <span className="animate-pulse">●●●</span>
          </div>
        )}
      </div>

      {!pinned && (
        <button
          onClick={() => {
            scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
            setPinned(true);
          }}
          className="mx-auto -mt-2 mb-2 rounded-full border bg-white px-3 py-1 text-xs shadow"
        >
          ↓ Jump to latest
        </button>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim() || busy) return;
          sendMessage({ text: input });
          setInput("");
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Mehak's work…"
          aria-label="Chat message"
          className="min-w-0 flex-1 rounded border bg-white px-3 py-2 text-sm"
        />
        {busy ? (
          <button type="button" onClick={stop} className="rounded bg-[#A3263B] px-4 py-2 text-sm text-white">
            Stop
          </button>
        ) : (
          <button type="submit" className="rounded bg-[#1C2A44] px-4 py-2 text-sm text-white">
            Send
          </button>
        )}
      </form>
    </div>
  );
}