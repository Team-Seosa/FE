import type { ReactNode } from "react";

type TokenKind = "string-key" | "string-value" | "boolean" | "null" | "number";

interface Token {
  kind: "color" | "plain";
  text: string;
  color?: string;
}

const COLORS: Record<TokenKind, string> = {
  "string-key": "var(--color-accent-cyan)",
  "string-value": "#C3E88D",
  boolean: "#FF5370",
  null: "var(--color-text-tertiary)",
  number: "var(--color-accent-indigo)",
};

const TOKEN_RE =
  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(\.\d+)?([eE][+-]?\d+)?)/g;

const classify = (match: string): TokenKind => {
  if (/^"/.test(match)) {
    return /:$/.test(match) ? "string-key" : "string-value";
  }
  if (/true|false/.test(match)) return "boolean";
  if (/null/.test(match)) return "null";
  return "number";
};

const tokenize = (json: string): Token[] => {
  const tokens: Token[] = [];
  let last = 0;
  for (const m of json.matchAll(TOKEN_RE)) {
    const start = m.index ?? 0;
    if (start > last) tokens.push({ kind: "plain", text: json.slice(last, start) });
    const kind = classify(m[0]);
    tokens.push({ kind: "color", text: m[0], color: COLORS[kind] });
    last = start + m[0].length;
  }
  if (last < json.length) tokens.push({ kind: "plain", text: json.slice(last) });
  return tokens;
};

/**
 * Renders a JSON value as a syntax-highlighted React fragment. Safe — emits
 * only text nodes inside `<span>` elements, no HTML parsing.
 */
export const renderHighlightedJson = (value: unknown): ReactNode => {
  const json = JSON.stringify(value, null, 2);
  return tokenize(json).map((t, i) =>
    t.kind === "color" ? (
      <span key={i} style={{ color: t.color }}>
        {t.text}
      </span>
    ) : (
      <span key={i}>{t.text}</span>
    ),
  );
};
