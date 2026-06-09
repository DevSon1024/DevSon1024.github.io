import Link from "next/link";
import Image from "next/image";
import Markdown from "../Markdown";

type Asset = { name: string; browser_download_url: string; size: number };
type Release = {
  id: number;
  name: string;
  tag_name: string;
  published_at: string;
  body: string;
  html_url: string;
  assets: Asset[];
};

async function getReleases(): Promise<Release[]> {
  const res = await fetch(
    "https://api.github.com/repos/DevSon1024/ragadl-app/releases",
    {
      headers: {
        "User-Agent": "DevSon1024-Portfolio",
      },
      next: { revalidate: 3600 },
    },
  );
  return res.ok ? res.json() : [];
}

const getAsset = (assets: Asset[], kw: string) =>
  assets.find((a) => a.name.toLowerCase().includes(kw.toLowerCase())) ?? null;

const fmtSize = (b: number) => `${(b / 1_048_576).toFixed(1)} MB`;
const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const DownloadIcon = () => (
  <svg
    className="w-5 h-5 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

type Variant = {
  keyword: string;
  label: string;
  sub: string;
  color: "blue" | "violet" | "amber" | "zinc";
};

const VARIANTS: Variant[] = [
  {
    keyword: "arm64-v8a",
    label: "arm64-v8a",
    sub: "Recommended (Android 5.0+)",
    color: "blue",
  },
  {
    keyword: "armeabi-v7a",
    label: "armeabi-v7a",
    sub: "Android 10 - 12",
    color: "violet",
  },
  {
    keyword: "x86_64",
    label: "x86_64",
    sub: "Android 12 and Up",
    color: "amber",
  },
  {
    keyword: "universal",
    label: "Universal APK",
    sub: "All architectures",
    color: "zinc",
  },
];

const colorMap = {
  blue: {
    card: "bg-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)]",
    label: "text-blue-300",
    sub: "text-blue-400/60",
    icon: "text-blue-400",
  },
  violet: {
    card: "bg-violet-500/5 border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/10 shadow-[0_0_15px_rgba(168,85,247,0.1)]",
    label: "text-violet-300",
    sub: "text-violet-400/60",
    icon: "text-violet-400",
  },
  amber: {
    card: "bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/40 hover:bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    label: "text-amber-300",
    sub: "text-amber-400/60",
    icon: "text-amber-400",
  },
  zinc: {
    card: "bg-slate-900/45 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-900/60 shadow-md",
    label: "text-slate-200",
    sub: "text-slate-400",
    icon: "text-slate-400",
  },
};

export default async function RagaDLPage() {
  const releases = await getReleases();

  if (!releases.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <p className="text-slate-400 font-mono text-sm">
          No releases found or API limit reached.
        </p>
      </div>
    );
  }

  const [latest, ...older] = releases;

  return (
    <div className="min-h-screen text-slate-200 py-6">
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Header Block */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 glass-card glow-card-indigo p-6 sm:p-8">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-xl shrink-0">
            <Image
              src="/assets/ragalahari_downloader_icon.png"
              alt="RagaDL icon"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1.5">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">RagaDL (Ragalahari Downloader)</h1>
            <p className="text-slate-400 font-mono text-xs">
              TAG: {latest.tag_name} &bull; RELEASED: {fmtDate(latest.published_at)}
            </p>
            <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 animate-pulse">
              Latest Release
            </span>
          </div>
        </div>

        {/* Download Latest Variants */}
        <section className="glass-card glow-card-indigo p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-100">Download Latest Release</h2>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Select the appropriate APK architecture for your device.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VARIANTS.map(({ keyword, label, sub, color }) => {
              const asset = getAsset(latest.assets, keyword);
              if (!asset) return null;
              const c = colorMap[color];
              return (
                <a
                  key={keyword}
                  href={asset.browser_download_url}
                  className={`group flex items-center justify-between gap-4 p-5 rounded-2xl transition-all duration-300 cursor-pointer variant-card-${color} ${c.card}`}
                >
                  <div className="space-y-0.5">
                    <div className={`font-bold text-sm variant-label-${color} ${c.label}`}>
                      {label}
                    </div>
                    <div className={`text-xs font-mono variant-sub-${color} ${c.sub}`}>
                      {sub} &bull; {fmtSize(asset.size)}
                    </div>
                  </div>
                  <span
                    className={`group-hover:translate-y-0.5 transition-transform duration-300 variant-icon-${color} ${c.icon}`}
                  >
                    <DownloadIcon />
                  </span>
                </a>
              );
            })}
            
            {/* Fallback if no assets matched */}
            {VARIANTS.every(
              ({ keyword }) => !getAsset(latest.assets, keyword),
            ) && (
              <a
                href={latest.html_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-white/5 hover:border-indigo-500/30 transition-all col-span-2 text-slate-300"
              >
                <span className="font-semibold text-sm">View Source & Download on GitHub</span>
                <DownloadIcon />
              </a>
            )}
          </div>
        </section>

        {/* Changelog section */}
        <section className="glass-card glow-card-indigo p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-100">What&apos;s Changed</h2>
          <div className="bg-slate-950/40 rounded-2xl border border-white/5 p-6 max-h-[30rem] overflow-y-auto font-mono text-sm leading-relaxed text-slate-300">
            {latest.body?.trim() ? (
              <Markdown>{latest.body}</Markdown>
            ) : (
              <p className="text-xs text-slate-500">
                No release log notes provided.
              </p>
            )}
          </div>
        </section>

        {/* Older Versions */}
        {older.length > 0 && (
          <section className="glass-card glow-card-indigo overflow-hidden">
            <div className="px-6 sm:px-8 py-4 sm:py-5 border-b border-white/5">
              <h2 className="text-lg font-bold text-slate-100">Older Releases</h2>
            </div>
            <ul className="divide-y divide-white/5">
              {older.map((r) => {
                const link =
                  getAsset(r.assets, "arm64-v8a")?.browser_download_url ??
                  getAsset(r.assets, "armeabi-v7a")?.browser_download_url ??
                  getAsset(r.assets, "universal")?.browser_download_url ??
                  r.html_url;
                return (
                  <li
                    key={r.id}
                    className="flex items-center justify-between px-6 sm:px-8 py-3.5 sm:py-4.5 hover:bg-white/5 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <div className="font-mono text-sm font-bold text-slate-200">
                        {r.tag_name}
                      </div>
                      <div className="text-xs font-mono text-slate-500">
                        Released: {fmtDate(r.published_at)}
                      </div>
                    </div>
                    <a
                      href={link}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold hover:border-indigo-500/30 text-indigo-400 hover:text-indigo-300 transition-all"
                    >
                      <DownloadIcon /> Download
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
