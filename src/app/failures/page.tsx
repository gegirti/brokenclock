import Link from "next/link";

const failures = [
  ["Overspeed", "Time races at 2×–4×, then settles toward the canonical timeline.", "↠"],
  ["Drag", "Time advances at a reduced rate before recovering.", "≈"],
  ["Stopped", "The display freezes while the canonical timeline continues underneath.", "Ⅱ"],
  ["Sync jump", "A simulated synchronization correction jumps forward or backward by up to five minutes.", "↯"],
  ["Gear jitter", "Small irregular forward and backward moves imitate backlash in a worn mechanism.", "⌁"],
  ["Skipped seconds", "The seconds hand advances in three-second chunks while the clock itself keeps flowing.", "···"],
  ["Hand desync", "Minute and seconds hands receive independent temporary offsets.", "⊘"],
  ["Stutter", "Alternating pause-and-burst motion suggests a weak movement or power fault.", "▯▮"],
  ["Time smear", "The displayed clock deliberately eases toward the canonical time rather than snapping.", "⌇"],
  ["Ghost echo", "A trailing seconds-hand echo briefly remains after the live hand.", "◌"],
  ["Display blackout", "The face fades almost completely while time continues to progress internally.", "◐"],
];

function Diagram({ symbol }: { symbol: string }) {
  return <svg viewBox="0 0 120 70" aria-hidden="true" className="h-16 w-full text-rose-500"><circle cx="60" cy="35" r="25" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" /><path d="M60 35 60 16M60 35 76 42" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" /><text x="60" y="40" textAnchor="middle" fill="currentColor" fontFamily="monospace" fontSize="16">{symbol}</text></svg>;
}

export default function FailuresPage() {
  return <main className="min-h-screen bg-[#0b0b10] px-5 py-12 text-zinc-100"><div className="mx-auto max-w-5xl"><Link href="/" className="text-xs font-mono tracking-[0.25em] text-zinc-500 underline underline-offset-4 hover:text-white">← WATCHFACE GALLERY</Link><header className="mt-12 max-w-2xl"><p className="font-mono text-[10px] tracking-[0.4em] text-rose-400">FIELD GUIDE / 01</p><h1 className="mt-4 text-4xl font-light tracking-tight sm:text-6xl">Failure mechanics</h1><p className="mt-5 leading-7 text-zinc-400">Every fault alters only the displayed clock. The canonical time remains real local time plus the random initial offset, so a fault can be observed, corrected, and repeated without corrupting the underlying timeline.</p></header><section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{failures.map(([name, description, symbol], index) => <article key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="flex items-center justify-between"><p className="font-mono text-[10px] tracking-[0.22em] text-zinc-500">{String(index + 1).padStart(2, "0")}</p><span className="h-2 w-2 rounded-full bg-rose-500" /></div><Diagram symbol={symbol} /><h2 className="text-lg font-medium">{name}</h2><p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p></article>)}</section></div></main>;
}
