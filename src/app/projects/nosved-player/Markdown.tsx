"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-xl font-bold mt-4 mb-2 text-zinc-900 dark:text-zinc-100">{children}</h1>,
        h2: ({ children }) => <h2 className="text-lg font-semibold mt-3 mb-1.5 text-zinc-800 dark:text-zinc-200">{children}</h2>,
        h3: ({ children }) => <h3 className="text-base font-semibold mt-2 mb-1 text-zinc-700 dark:text-zinc-300">{children}</h3>,
        p: ({ children }) => <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2 leading-relaxed">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside space-y-1 mb-2 pl-1">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 mb-2 pl-1">{children}</ol>,
        li: ({ children }) => <li className="text-sm text-zinc-700 dark:text-zinc-300">{children}</li>,
        code: ({ children, className }) => {
          const isBlock = className?.includes("language-");
          return isBlock
            ? <code className="block bg-zinc-900 dark:bg-black text-green-400 text-xs rounded-lg p-3 overflow-x-auto my-2 font-mono">{children}</code>
            : <code className="bg-zinc-100 dark:bg-zinc-800 text-pink-600 dark:text-pink-400 text-xs rounded px-1.5 py-0.5 font-mono">{children}</code>;
        },
        blockquote: ({ children }) => <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 my-2 text-zinc-500 dark:text-zinc-400 italic text-sm">{children}</blockquote>,
        a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300">{children}</a>,
        strong: ({ children }) => <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{children}</strong>,
        hr: () => <hr className="my-3 border-zinc-200 dark:border-zinc-700" />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
