import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-mono text-2xl md:text-3xl font-bold mt-10 mb-4" style={{ color: "#e8ffe8" }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-mono text-xl md:text-2xl font-bold mt-8 mb-3" style={{ color: "#e8ffe8" }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-mono text-lg font-bold mt-6 mb-2" style={{ color: "#cdeecd" }}>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="leading-relaxed mb-4" style={{ color: "#c2e6c2" }}>
      {children}
    </p>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline transition-colors hover:text-[#e8ffe8]"
      style={{ color: "#5a9a5a" }}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1" style={{ color: "#c2e6c2" }}>{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1" style={{ color: "#c2e6c2" }}>{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote
      className="pl-4 italic my-4"
      style={{ borderLeft: "2px solid #1a6b1a", color: "#8fbf8f" }}
    >
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code
      className="font-mono text-sm px-1.5 py-0.5 rounded-sm"
      style={{ backgroundColor: "#0a1a0a", color: "#5a9a5a" }}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre
      className="font-mono text-sm p-4 rounded-md overflow-x-auto mb-4"
      style={{ backgroundColor: "#0a1a0a", border: "1px solid #1a3a1a" }}
    >
      {children}
    </pre>
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={props.alt ?? ""}
      className="w-full rounded-md my-6 border"
      style={{ borderColor: "#1a3a1a" }}
    />
  ),
  hr: () => <hr className="my-8" style={{ borderColor: "#1a3a1a" }} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
