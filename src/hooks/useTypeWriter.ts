import { useState, useEffect } from 'react';

export function useTypeWriter(options: {
  text: string;
  speed?: number;
  delay?: number;
  enabled?: boolean;
}) {
  const { text, speed = 50, delay = 0, enabled = true } = options;
  const [displayedText, setDisplayedText] = useState(enabled ? '' : text);
  const [isComplete, setIsComplete] = useState(!enabled);

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;
    let currentIndex = 0;

    // Reset state for when effect re-runs (e.g. Strict Mode)
    setDisplayedText('');
    setIsComplete(false);

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay, enabled]);

  return { displayedText, isComplete };
}
