import Link from "next/link";
import Image from "next/image";
import Markdown from "../Markdown";
import releasesData from "@/data/releases.json";

const { title, versions } = releasesData.nosved_player;
const [latest, ...past] = versions;

const COLOR: Record<string, { card: string; label: string; sub: string; icon: string; hint: string }> = {
  "arm64-v8a":   { card: "bg-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)]",   label: "text-blue-300",   sub: "text-blue-400/60",   icon: "text-blue-400",   hint: "Recommended (Android 5.0+)" },
  "armeabi-v7a": { card: "bg-violet-500/5 border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/10 shadow-[0_0_15px_rgba(168,85,247,0.1)]", label: "text-violet-300", sub: "text-violet-400/60", icon: "text-violet-400", hint: "Android 10 – 12" },
  "x86_64":      { card: "bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/40 hover:bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.1)]",  label: "text-amber-300",  sub: "text-amber-400/60",  icon: "text-amber-400",  hint: "Android 12 and Up" },
  "universal":   { card: "bg-slate-900/45 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-900/60 shadow-md", label: "text-slate-200", sub: "text-slate-400", icon: "text-slate-400", hint: "All architectures" },
};

const DownloadIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export default function NosvedPlayerPage() {
  return (
    <div className="min-h-screen text-slate-200 py-6">
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">

        <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 glass-card glow-card-indigo p-6 sm:p-8">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-xl shrink-0">
            <Image src="/assets/NosvedPlayer_icon.png" alt="Nosved Player icon" fill className="object-cover" />
          </div>
          <div className="space-y-1.5">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">{title}</h1>
            <p className="text-slate-400 font-mono text-xs">LATEST: {latest.version}</p>
            <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 animate-pulse">
              Latest Release
            </span>
          </div>
        </div>

        <section className="glass-card glow-card-indigo p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-100">Download Latest Release</h2>
            <p className="text-xs font-mono text-slate-400 mt-1">Select the appropriate APK architecture for your device.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {latest.releases.map(({ abi, url, size }) => {
              const c = COLOR[abi] ?? COLOR["universal"];
              return (
                <a key={abi} href={url}
                  className={`group flex items-center justify-between gap-4 p-5 rounded-2xl transition-all duration-300 cursor-pointer ${c.card}`}>
                  <div className="space-y-0.5">
                    <div className={`font-bold text-sm ${c.label}`}>{abi}</div>
                    <div className={`text-xs font-mono ${c.sub}`}>{c.hint} &bull; {size}</div>
                  </div>
                  <span className={`group-hover:translate-y-0.5 transition-transform duration-300 ${c.icon}`}>
                    <DownloadIcon />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="glass-card glow-card-indigo p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-100">What&apos;s Changed</h2>
          <div className="bg-slate-950/40 rounded-2xl border border-white/5 p-6 max-h-[30rem] overflow-y-auto font-mono text-sm leading-relaxed text-slate-300">
            {latest.markdown?.trim()
              ? <Markdown>{latest.markdown}</Markdown>
              : <p className="text-xs text-slate-500">No release notes provided.</p>}
          </div>
        </section>

        {past.length > 0 && (
          <section className="glass-card glow-card-indigo overflow-hidden">
            <div className="px-6 sm:px-8 py-4 sm:py-5 border-b border-white/5">
              <h2 className="text-lg font-bold text-slate-100">Past Releases</h2>
            </div>
            <ul className="divide-y divide-white/5">
              {past.map((v) => (
                <li key={v.version}>
                  <details className="group">
                    <summary className="flex items-center justify-between px-6 sm:px-8 py-4 cursor-pointer hover:bg-white/5 transition-colors list-none">
                      <div className="space-y-0.5">
                        <div className="font-mono text-sm font-bold text-slate-200">{v.version}</div>
                        <div className="text-xs font-mono text-slate-500">{v.releases.length} APK variant{v.releases.length !== 1 ? "s" : ""}</div>
                      </div>
                      <svg className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 sm:px-8 pb-5 space-y-3">
                      <div className="flex flex-wrap gap-2 pt-1">
                        {v.releases.map(({ abi, url, size }) => (
                          <a key={abi} href={url}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold hover:border-indigo-500/30 text-indigo-400 hover:text-indigo-300 transition-all">
                            <DownloadIcon />
                            {abi} &middot; {size}
                          </a>
                        ))}
                      </div>
                      {v.markdown?.trim() && (
                        <div className="bg-slate-950/40 rounded-xl border border-white/5 p-4 text-xs font-mono leading-relaxed text-slate-400 max-h-48 overflow-y-auto">
                          <Markdown>{v.markdown}</Markdown>
                        </div>
                      )}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </section>
        )}

      </div>
    </div>
  );
}
