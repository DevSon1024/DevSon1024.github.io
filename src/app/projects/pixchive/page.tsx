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
    "https://api.github.com/repos/DevSon1024/pixchive/releases",
    { next: { revalidate: 3600 } },
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
    className="w-4 h-4 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
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
    card: "bg-blue-50 dark:bg-blue-950/50 ring-blue-200 dark:ring-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60",
    label: "text-blue-700 dark:text-blue-300",
    sub: "text-blue-600/70 dark:text-blue-400/70",
    icon: "text-blue-600 dark:text-blue-400",
  },
  violet: {
    card: "bg-violet-50 dark:bg-violet-950/50 ring-violet-200 dark:ring-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/60",
    label: "text-violet-700 dark:text-violet-300",
    sub: "text-violet-600/70 dark:text-violet-400/70",
    icon: "text-violet-600 dark:text-violet-400",
  },
  amber: {
    card: "bg-amber-50 dark:bg-amber-950/50 ring-amber-200 dark:ring-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/60",
    label: "text-amber-700 dark:text-amber-300",
    sub: "text-amber-600/70 dark:text-amber-400/70",
    icon: "text-amber-600 dark:text-amber-400",
  },
  zinc: {
    card: "bg-zinc-100 dark:bg-zinc-800/60 ring-zinc-200 dark:ring-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700/60",
    label: "text-zinc-800 dark:text-zinc-200",
    sub: "text-zinc-500 dark:text-zinc-400",
    icon: "text-zinc-500 dark:text-zinc-400",
  },
};

export default async function NosvedPlayerPage() {
  const releases = await getReleases();

  if (!releases.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
        <p className="text-zinc-500 dark:text-zinc-400">
          No releases found or API limit reached.
        </p>
      </div>
    );
  }

  const [latest, ...older] = releases;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
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
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Projects
        </Link>

        {/* Header */}
        <div className="flex items-center gap-5">
          <Image
            src="/assets/pixchive_icon.png"
            alt="pixchive icon"
            width={88}
            height={88}
            className="rounded-[22px] shadow-lg ring-1 ring-black/10 dark:ring-white/10 shrink-0"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">PixChive</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-0.5 text-sm">
              {latest.tag_name} &bull; {fmtDate(latest.published_at)}
            </p>
            <span className="mt-2 inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 ring-1 ring-green-200 dark:ring-green-800">
              Latest Release
            </span>
          </div>
        </div>

        {/* Download Latest */}
        <section className="rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-sm overflow-hidden">
          <div className="px-6 pt-5 pb-2">
            <h2 className="text-lg font-semibold">Download Latest</h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Choose the variant for your device
            </p>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {VARIANTS.map(({ keyword, label, sub, color }) => {
              const asset = getAsset(latest.assets, keyword);
              if (!asset) return null;
              const c = colorMap[color];
              return (
                <a
                  key={keyword}
                  href={asset.browser_download_url}
                  className={`group flex items-center justify-between gap-3 p-4 rounded-xl ring-1 transition-all ${c.card}`}
                >
                  <div>
                    <div className={`font-semibold text-sm ${c.label}`}>
                      {label}
                    </div>
                    <div className={`text-xs mt-0.5 ${c.sub}`}>
                      {sub} &bull; {fmtSize(asset.size)}
                    </div>
                  </div>
                  <span
                    className={`group-hover:translate-y-0.5 transition-transform ${c.icon}`}
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
                className="flex items-center justify-between gap-3 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700 col-span-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
              >
                <span className="font-medium text-sm">View on GitHub</span>
                <DownloadIcon />
              </a>
            )}
          </div>
        </section>

        {/* Changelog */}
        <section className="rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-3">What&apos;s Changed</h2>
          <div className="bg-zinc-50 dark:bg-zinc-950/60 rounded-xl ring-1 ring-zinc-100 dark:ring-zinc-800 p-4 max-h-[28rem] overflow-y-auto">
            {latest.body?.trim() ? (
              <Markdown>{latest.body}</Markdown>
            ) : (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                No release notes provided.
              </p>
            )}
          </div>
        </section>

        {/* Older Versions */}
        {older.length > 0 && (
          <section className="rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-sm overflow-hidden">
            <div className="px-6 pt-5 pb-3">
              <h2 className="text-lg font-semibold">Older Versions</h2>
            </div>
            <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {older.map((r) => {
                const link =
                  getAsset(r.assets, "arm64-v8a")?.browser_download_url ??
                  getAsset(r.assets, "armeabi-v7a")?.browser_download_url ??
                  getAsset(r.assets, "universal")?.browser_download_url ??
                  r.html_url;
                return (
                  <li
                    key={r.id}
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                  >
                    <div>
                      <div className="font-mono text-sm font-medium">
                        {r.tag_name}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {fmtDate(r.published_at)}
                      </div>
                    </div>
                    <a
                      href={link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 ring-1 ring-zinc-200 dark:ring-zinc-700 transition-colors"
                    >
                      <DownloadIcon />
                      Download
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
