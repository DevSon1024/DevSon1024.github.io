"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="markdown-h1 text-xl font-bold mt-4 mb-2 text-zinc-100">{children}</h1>,
        h2: ({ children }) => <h2 className="markdown-h2 text-lg font-semibold mt-3 mb-1.5 text-zinc-200">{children}</h2>,
        h3: ({ children }) => <h3 className="markdown-h3 text-base font-semibold mt-2 mb-1 text-zinc-300">{children}</h3>,
        p: ({ children }) => <p className="markdown-p text-sm text-zinc-300 mb-2 leading-relaxed">{children}</p>,
        ul: ({ children }) => <ul className="markdown-ul list-disc list-inside space-y-1 mb-2 pl-1 text-zinc-300">{children}</ul>,
        ol: ({ children }) => <ol className="markdown-ol list-decimal list-inside space-y-1 mb-2 pl-1 text-zinc-300">{children}</ol>,
        li: ({ children }) => <li className="markdown-li text-sm text-zinc-300">{children}</li>,
        code: ({ children, className }) => {
          const isBlock = className?.includes("language-");
          return isBlock
            ? <code className="markdown-code-block block bg-zinc-950 text-green-400 text-xs rounded-lg p-3 overflow-x-auto my-2 font-mono">{children}</code>
            : <code className="markdown-code bg-zinc-800 text-pink-400 text-xs rounded px-1.5 py-0.5 font-mono">{children}</code>;
        },
        blockquote: ({ children }) => <blockquote className="markdown-blockquote border-l-4 border-zinc-700 pl-4 my-2 text-zinc-400 italic text-sm">{children}</blockquote>,
        a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer" className="markdown-a text-blue-400 underline underline-offset-2 hover:text-blue-300">{children}</a>,
        strong: ({ children }) => <strong className="markdown-strong font-semibold text-zinc-100">{children}</strong>,
        hr: () => <hr className="markdown-hr my-3 border-zinc-700" />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
