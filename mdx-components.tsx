import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-mono text-2xl md:text-3xl font-bold mt-10 mb-4" style={{ color: "#eaf1f8" }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-mono text-xl md:text-2xl font-bold mt-8 mb-3" style={{ color: "#eaf1f8" }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-mono text-lg font-bold mt-6 mb-2" style={{ color: "#d7e4ee" }}>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="leading-relaxed mb-4" style={{ color: "#c9d9e6" }}>
      {children}
    </p>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline transition-colors hover:text-[#eaf1f8]"
      style={{ color: "#7c97b0" }}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1" style={{ color: "#c9d9e6" }}>{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1" style={{ color: "#c9d9e6" }}>{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote
      className="pl-4 italic my-4"
      style={{ borderLeft: "2px solid #4d6f8a", color: "#8da6bc" }}
    >
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code
      className="font-mono text-sm px-1.5 py-0.5 rounded-sm"
      style={{ backgroundColor: "#11161b", color: "#7c97b0" }}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre
      className="font-mono text-sm p-4 rounded-md overflow-x-auto mb-4"
      style={{ backgroundColor: "#11161b", border: "1px solid #1a2129" }}
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
      style={{ borderColor: "#1a2129" }}
    />
  ),
  hr: () => <hr className="my-8" style={{ borderColor: "#1a2129" }} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
