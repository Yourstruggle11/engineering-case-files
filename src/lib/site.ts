function normalizeSiteUrl(value?: string) {
  if (!value) {
    return "http://localhost:3000";
  }

  const withProtocol = value.startsWith("http") ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

export const siteUrl = normalizeSiteUrl(
  process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL
);

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
