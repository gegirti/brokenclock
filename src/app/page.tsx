"use client";

import { useEffect, useState } from "react";

type FaceId = "noir" | "paper" | "pixel" | "orbit" | "chrono";

const faces: { id: FaceId; name: string; detail: string }[] = [
  { id: "noir", name: "Noir", detail: "Minimal analog" },
  { id: "paper", name: "Paper", detail: "Editorial dial" },
  { id: "pixel", name: "Pixel", detail: "Retro digital" },
  { id: "orbit", name: "Orbit", detail: "Data rings" },
  { id: "chrono", name: "Chrono", detail: "Instrument panel" },
];

function Hand({ angle, className }: { angle: number; className: string }) {
  return <div className="absolute inset-0 flex justify-center" style={{ transform: `rotate(${angle}deg)` }}><div className={className} /></div>;
}

function AnalogFace({ hoursDeg, minutesDeg, secondsDeg, paper = false }: { hoursDeg: number; minutesDeg: number; secondsDeg: number; paper?: boolean }) {
  const numbers = paper ? [12, 3, 6, 9] : Array.from({ length: 12 }, (_, index) => (index === 0 ? 12 : index));
  return (
    <div className={`relative h-80 w-80 overflow-hidden rounded-full sm:h-[480px] sm:w-[480px] ${paper ? "border-[10px] border-[#cebfa8] bg-[#f4eddf] text-[#24211d] shadow-[0_20px_65px_rgba(53,42,26,0.28)]" : "border border-white/10 bg-gradient-to-br from-zinc-800 to-[#090909] text-white shadow-[0_0_90px_rgba(0,0,0,0.8)]"}`}>
      <div className={`absolute inset-2 rounded-full border ${paper ? "border-[#dfd1bc]" : "border-white/5"}`} />
      {Array.from({ length: 60 }, (_, index) => <div key={index} className="absolute inset-0 flex justify-center pt-3 sm:pt-5" style={{ transform: `rotate(${index * 6}deg)` }}><div className={`${index % 5 === 0 ? "h-3 w-px sm:h-4" : "h-1.5 w-px"} ${paper ? index % 5 === 0 ? "bg-[#554c42]" : "bg-[#b7aa98]" : index % 5 === 0 ? "bg-white/45" : "bg-white/12"}`} /></div>)}
      {numbers.map((number, index) => {
        const rotation = paper ? index * 90 : index * 30;
        return <div key={number} className="absolute inset-0 flex justify-center" style={{ transform: `rotate(${rotation}deg)` }}><span className={`pt-7 text-lg font-medium sm:pt-10 sm:text-2xl ${paper ? "font-serif tracking-wide" : "font-mono font-light text-white/65"}`} style={{ transform: `rotate(-${rotation}deg)` }}>{number}</span></div>;
      })}
      {paper && <span className="absolute left-1/2 top-[31%] -translate-x-1/2 text-[9px] tracking-[0.35em] text-[#746958]">LOCAL TIME</span>}
      <Hand angle={hoursDeg} className={`mt-[104px] h-20 w-2 rounded-full sm:mt-[154px] sm:h-32 ${paper ? "bg-[#2d2923]" : "bg-white"}`} />
      <Hand angle={minutesDeg} className={`mt-16 h-32 w-1.5 rounded-full sm:mt-24 sm:h-44 ${paper ? "bg-[#665b4e]" : "bg-zinc-300"}`} />
      <Hand angle={secondsDeg} className={`mt-8 h-40 w-px rounded-full sm:mt-12 sm:h-56 ${paper ? "bg-[#b54435]" : "bg-rose-500"}`} />
      <div className={`absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${paper ? "border-[#f4eddf] bg-[#2d2923]" : "border-white bg-black"}`} />
    </div>
  );
}

function ChronoFace({ hoursDeg, minutesDeg, secondsDeg, seconds }: { hoursDeg: number; minutesDeg: number; secondsDeg: number; seconds: number }) {
  return <div className="relative h-80 w-80 rounded-full border-[10px] border-zinc-500 bg-zinc-100 text-zinc-900 shadow-[0_20px_70px_rgba(0,0,0,0.55)] sm:h-[480px] sm:w-[480px]">
    <div className="absolute inset-2 rounded-full border border-zinc-300" />
    {Array.from({ length: 12 }, (_, index) => <div key={index} className="absolute inset-0 flex justify-center pt-6 sm:pt-9" style={{ transform: `rotate(${index * 30}deg)` }}><div className="h-3 w-1 rounded-full bg-zinc-800 sm:h-5" /></div>)}
    <span className="absolute left-1/2 top-[24%] -translate-x-1/2 text-[9px] font-bold tracking-[0.3em] sm:text-[11px]">CHRONO / 01</span>
    {[{ left: "25%", top: "55%", label: "SEC", value: String(seconds).padStart(2, "0") }, { left: "75%", top: "55%", label: "24H", value: "LOCAL" }].map((dial) => <div key={dial.label} className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-400 bg-zinc-200 text-center sm:h-20 sm:w-20" style={{ left: dial.left, top: dial.top }}><span className="block pt-3 text-[8px] font-bold tracking-wider sm:pt-4">{dial.label}</span><span className="font-mono text-[10px] sm:text-xs">{dial.value}</span></div>)}
    <Hand angle={hoursDeg} className="mt-[105px] h-20 w-2 rounded-full bg-zinc-900 sm:mt-[155px] sm:h-32" />
    <Hand angle={minutesDeg} className="mt-16 h-32 w-1.5 rounded-full bg-zinc-700 sm:mt-24 sm:h-44" />
    <Hand angle={secondsDeg} className="mt-8 h-40 w-px bg-orange-600 sm:mt-12 sm:h-56" />
    <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600" />
  </div>;
}

function DigitalFace({ timeString, dateLabel }: { timeString: string; dateLabel: string }) {
  return <div className="flex h-80 w-80 flex-col justify-between border-8 border-[#64735b] bg-[#162015] p-7 font-mono text-[#d9ff8b] shadow-[0_0_70px_rgba(154,219,86,0.18)] sm:h-[480px] sm:w-[480px] sm:p-10"><div className="flex justify-between text-[10px] tracking-[0.25em]"><span>SYS/01</span><span>LOCAL</span></div><div className="text-center text-5xl font-bold tracking-tighter [text-shadow:0_0_16px_rgba(190,255,110,0.55)] sm:text-7xl">{timeString}</div><div className="border-t border-[#d9ff8b]/30 pt-3 text-center text-[10px] tracking-[0.2em]">{dateLabel.toUpperCase()}</div></div>;
}

function OrbitFace({ hoursDeg, minutesDeg, secondsDeg, timeString }: { hoursDeg: number; minutesDeg: number; secondsDeg: number; timeString: string }) {
  const rings = [{ angle: hoursDeg, size: "inset-5", color: "border-fuchsia-400", label: "H" }, { angle: minutesDeg, size: "inset-12", color: "border-cyan-300", label: "M" }, { angle: secondsDeg, size: "inset-20", color: "border-amber-300", label: "S" }];
  return <div className="relative h-80 w-80 overflow-hidden rounded-full bg-[#101021] shadow-[0_0_80px_rgba(124,58,237,0.32)] sm:h-[480px] sm:w-[480px]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2c1b4b_0,_#101021_60%)]" />{rings.map((ring) => <div key={ring.label} className={`absolute ${ring.size} rounded-full border border-white/10`}><div className="absolute inset-0" style={{ transform: `rotate(${ring.angle}deg)` }}><div className={`absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 ${ring.color} bg-[#101021] shadow-[0_0_14px_currentColor]`} /></div><span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-bold text-white/30">{ring.label}</span></div>)}<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono text-xl tracking-[0.12em] text-white sm:text-2xl">{timeString}</div></div>;
}

export default function Home() {
  const [time, setTime] = useState<Date | null>(null);
  const [face, setFace] = useState<FaceId>("noir");
  useEffect(() => { const clockTimer = setInterval(() => setTime(new Date()), 50); return () => clearInterval(clockTimer); }, []);
  const hoursDeg = time ? ((time.getHours() % 12) + time.getMinutes() / 60) * 30 : 0;
  const minutesDeg = time ? (time.getMinutes() + time.getSeconds() / 60) * 6 : 0;
  const secondsDeg = time ? (time.getSeconds() + time.getMilliseconds() / 1000) * 6 : 0;
  const timeString = time ? time.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--";
  const dateLabel = time ? time.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" }) : "---";
  const theme = face === "paper" || face === "chrono" ? "bg-[#e9e4db] text-zinc-900" : face === "pixel" ? "bg-[#0d150d] text-[#d9ff8b]" : "bg-[#09090d] text-white";
  return <div className={`min-h-screen px-5 py-10 font-sans transition-colors duration-500 ${theme}`}><main className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center"><div><p className="text-[10px] font-mono tracking-[0.4em] opacity-50">WATCHFACE GALLERY</p><h1 className="mt-3 text-3xl font-light tracking-[0.18em] sm:text-5xl">BROKEN CLOCK</h1></div><div className="flex max-w-full flex-wrap justify-center gap-2" aria-label="Watchface selector">{faces.map((item) => <button key={item.id} type="button" onClick={() => setFace(item.id)} className={`rounded-full border px-4 py-2 text-left transition ${face === item.id ? "border-current bg-current/10" : "border-current/20 opacity-55 hover:opacity-100"}`}><span className="block text-xs font-medium">{item.name}</span><span className="block text-[9px] opacity-60">{item.detail}</span></button>)}</div><div className="pt-2">{face === "noir" && <AnalogFace hoursDeg={hoursDeg} minutesDeg={minutesDeg} secondsDeg={secondsDeg} />}{face === "paper" && <AnalogFace hoursDeg={hoursDeg} minutesDeg={minutesDeg} secondsDeg={secondsDeg} paper />}{face === "pixel" && <DigitalFace timeString={timeString} dateLabel={dateLabel} />}{face === "orbit" && <OrbitFace hoursDeg={hoursDeg} minutesDeg={minutesDeg} secondsDeg={secondsDeg} timeString={timeString} />}{face === "chrono" && <ChronoFace hoursDeg={hoursDeg} minutesDeg={minutesDeg} secondsDeg={secondsDeg} seconds={time?.getSeconds() ?? 0} />}</div><p className="font-mono text-xs tracking-[0.2em] opacity-50">{dateLabel.toUpperCase()} · {timeString}</p><footer className="mt-5 max-w-xl border-t border-current/15 pt-5 text-[10px] leading-relaxed opacity-55"><p className="mb-2 font-mono tracking-[0.25em]">DESIGN REFERENCES · ORIGINAL IMPLEMENTATION</p><p>Open-source watchface projects that informed the gallery&apos;s broad design directions: <a className="underline underline-offset-4 hover:opacity-70" href="https://github.com/google/watchface" target="_blank" rel="noreferrer">Google Watch Face Format (Apache-2.0)</a>, <a className="underline underline-offset-4 hover:opacity-70" href="https://github.com/rdnt/m8" target="_blank" rel="noreferrer">M8 (MIT)</a>, <a className="underline underline-offset-4 hover:opacity-70" href="https://github.com/markusressel/Watchface-No.-1" target="_blank" rel="noreferrer">Watchface No. 1 (MIT)</a>, and <a className="underline underline-offset-4 hover:opacity-70" href="https://github.com/stefanheule/obsidian" target="_blank" rel="noreferrer">Obsidian (Apache-2.0)</a>. No third-party code, artwork, or fonts are included.</p></footer></main></div>;
}
