"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // Calculate rotations
  const secondsDeg = (seconds / 60) * 360;
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] font-sans selection:bg-zinc-800">
      <main className="relative flex flex-col items-center gap-12 text-center">
        {/* Analog Clock Container */}
        <div className="relative h-80 w-80 flex items-center justify-center rounded-full border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-[0_0_80px_rgba(0,0,0,0.8)] sm:h-[480px] sm:w-[480px]">
          {/* Inner Glossy Layer */}
          <div className="absolute inset-2 rounded-full border border-white/[0.02] bg-[#0a0a0a]" />

          {/* Clock Markers (Minutes/Seconds) */}
          <div className="absolute inset-0">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 flex justify-center py-4"
                style={{ transform: `rotate(${i * 6}deg)` }}
              >
                <div
                  className={`w-px rounded-full ${i % 5 === 0 ? "h-3 bg-white/30" : "h-1 bg-white/10"
                    }`}
                />
              </div>
            ))}
          </div>

          {/* Hour Numbers - Correctly spaced */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => {
              const hour = i === 0 ? 12 : i;
              const rotation = i * 30;
              return (
                <div
                  key={i}
                  className="absolute inset-0 flex justify-center"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="pt-7">
                    <span
                      className="block text-xl font-extralight tracking-tighter text-white/50 sm:text-3xl"
                      style={{ transform: `rotate(-${rotation}deg)` }}
                    >
                      {hour}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hour Hand */}
          <div
            className="absolute inset-0 flex justify-center"
            style={{
              transform: `rotate(${hoursDeg}deg)`,
              transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <div className="mt-[105px] h-20 w-2 rounded-full bg-white shadow-lg sm:mt-[155px] sm:h-32" />
          </div>

          {/* Minute Hand */}
          <div
            className="absolute inset-0 flex justify-center"
            style={{
              transform: `rotate(${minutesDeg}deg)`,
              transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <div className="mt-16 h-32 w-1.5 rounded-full bg-zinc-300 shadow-md sm:mt-24 sm:h-44" />
          </div>

          {/* Second Hand */}
          <div
            className="absolute inset-0 flex justify-center"
            style={{
              transform: `rotate(${secondsDeg}deg)`,
              transition: "transform 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95)",
            }}
          >
            <div className="mt-8 h-40 w-0.5 rounded-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)] sm:mt-12 sm:h-56" />
          </div>

          {/* Center Pin */}
          <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black border-2 border-white shadow-2xl z-20" />
        </div>

        {/* Digital Time & Project Name */}
        <div className="mt-4 space-y-4">
          <h1 className="text-5xl font-extralight tracking-[0.3em] text-white sm:text-7xl uppercase">
            Broken Clock
          </h1>
          <p className="text-xl font-mono tracking-[0.25em] text-zinc-600 tabular-nums">
            {time.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </p>
        </div>

        {/* Cinematic Backdrop Glow */}
        <div className="absolute -bottom-80 -left-80 h-[500px] w-[500px] rounded-full bg-rose-500/[0.02] blur-[150px]" />
        <div className="absolute -top-80 -right-80 h-[500px] w-[500px] rounded-full bg-blue-500/[0.02] blur-[150px]" />
      </main>

      {/* Footer Navigation */}
      <footer className="mt-20 flex gap-12 text-[11px] tracking-[0.4em] font-light text-zinc-700 uppercase sm:absolute sm:bottom-12">
        <a href="/admin" className="transition-colors hover:text-white">Admin</a>
        <a href="/about" className="transition-colors hover:text-white">About</a>
        <a href="https://github.com" className="transition-colors hover:text-white">Repo</a>
      </footer>
    </div>
  );
}

