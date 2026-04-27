import { useState } from "react";

// We define an 'interface' to tell TypeScript what settings this component accepts
interface Props {
  limit?: number; // The '?' means it's optional
}

export function EventsCounter({ limit }: Props) {
  const [count, setCount] = useState(0);
  const [title] = useState("GMC Events");

  const buttonBase = "px-5 py-2.5 rounded-xl font-bold transition-all duration-200 transform active:scale-90 shadow-sm";

  // Logic: Check if we are at the limit
  const isAtLimit = limit !== undefined && count >= limit;

  return (
    <div className="relative bg-white/40 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-2xl max-w-sm flex flex-col items-start min-h-[280px]">
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />

      <p className="text-[#0D6DB3] text-xs font-black uppercase tracking-[0.2em] mb-2 relative z-10">
        {title} {limit ? `(Limit: ${limit})` : ""}
      </p>

      <h2 className="text-[#101828] text-2xl font-black mb-2 relative z-10 leading-tight">
        Scheduled this weel: <span className="text-blue-700">{count}</span>
      </h2>

      {/* NEW: Only show this message if we have a limit AND we hit it */}
      {isAtLimit && (
        <p className="text-red-600 font-bold text-sm mb-4 animate-bounce relative z-10">
          ⚠️ Your week is full!
        </p>
      )}

      <div className="flex gap-3 mt-auto relative z-10">
        <button 
          // Disable the button if we hit the limit
          disabled={isAtLimit}
          className={`${buttonBase} bg-blue-500 text-white disabled:opacity-30 disabled:grayscale hover:scale-110`}
          onClick={() => setCount(count + 1)}
        >
          + Add
        </button>

        <button 
          disabled={count === 0}
          className={`${buttonBase} bg-white/60 text-gray-800 border border-gray-300 disabled:opacity-30 hover:scale-110`}
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          − Remove
        </button>

        <button 
          className={`${buttonBase} bg-white/60 text-gray-800 border border-gray-300 hover:scale-110`}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}