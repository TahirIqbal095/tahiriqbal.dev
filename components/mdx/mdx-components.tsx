import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CodeCopyButton } from "@/components/code-copy-button";
import { cn } from "@/lib/utils";

export const BlogComponents = {
  img: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    <div className="bg-muted my-8 overflow-hidden rounded-xl border shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
        {...props}
      />
      {alt && (
        <p className="text-muted-foreground px-4 py-2 text-center text-sm italic">
          {alt}
        </p>
      )}
    </div>
  ),
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-t pt-8 pb-2 text-3xl font-semibold tracking-tight underline underline-offset-4 first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn(
        "font-semibold text-zinc-900 dark:text-zinc-100",
        className
      )}
      {...props}
    />
  ),
  a: ({
    className,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href?.startsWith("/");
    const classes = cn(
      "font-medium decoration-blue-600 transition-colors hover:text-blue-500",
      className
    );

    if (isInternal) {
      return <Link href={href as string} className={classes} {...props} />;
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("text-blue-600", classes)}
        {...props}
      />
    );
  },
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "text-zinc-700 not-first:mt-3 dark:text-zinc-300",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "marker:text-primary/70 my-6 ml-6 list-disc [&>li]:mt-2",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "marker:text-primary/70 my-6 ml-6 list-decimal [&>li]:mt-2",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn("leading-7 text-zinc-700 dark:text-zinc-300", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "border-primary/50 text-muted-foreground bg-muted/20 mt-6 rounded-r-lg border-l-4 py-2 pr-4 pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="border-border my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg border shadow-sm">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("even:bg-muted/50 m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "bg-muted border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === "string") {
        return node;
      }
      if (typeof node === "number") {
        return String(node);
      }
      if (
        React.isValidElement(node) &&
        node.props &&
        typeof node.props === "object"
      ) {
        return getTextContent(
          (node.props as { children?: React.ReactNode }).children
        );
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join("");
      }
      return "";
    };

    const codeText = getTextContent(children);

    return (
      <div className="group relative my-6 max-h-[650px] overflow-x-auto rounded-xl border bg-zinc-950 shadow-md dark:bg-zinc-900">
        <div className="absolute top-3 right-3 z-20 opacity-0 transition-opacity group-hover:opacity-100">
          <CodeCopyButton code={codeText} />
        </div>
        <pre
          className="overflow-x-auto p-4 py-5 text-sm leading-6 dark:text-zinc-50 [&>code]:bg-transparent [&>code]:p-0"
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  },
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
  }) => {
    if (className?.includes("language-")) {
      return (
        <code className={cn("", className)} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className={cn(
          "bg-primary/10 rounded px-1.5 py-0.5 font-mono text-sm text-red-400",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
};
