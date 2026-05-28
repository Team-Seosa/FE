import { useEffect, useState } from "react";

interface TypewriterOptions {
  startDelay?: number;
  charDelay?: number;
}

/**
 * Returns the substring of `text` currently typed out. Resets and re-types
 * whenever `text` changes.
 */
export function useTypewriter(
  text: string,
  { startDelay = 120, charDelay = 70 }: TypewriterOptions = {},
): string {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTyped("");
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i < text.length) timer = setTimeout(tick, charDelay);
    };

    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [text, startDelay, charDelay]);

  return typed;
}
