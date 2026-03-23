import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExternalLink({
  href,
  children,
  className = "link-inline"
}: ExternalLinkProps) {
  const shouldOpenNewTab = href.startsWith("http");

  return (
    <a
      href={href}
      className={className}
      target={shouldOpenNewTab ? "_blank" : undefined}
      rel={shouldOpenNewTab ? "noreferrer" : undefined}
    >
      {children}
      <span aria-hidden="true">{"->"}</span>
    </a>
  );
}
