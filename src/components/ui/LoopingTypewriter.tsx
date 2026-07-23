import { useState, useEffect } from 'react';

interface LoopingTypewriterProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function LoopingTypewriter({
  strings,
  typingSpeed = 45,
  deletingSpeed = 25,
  pauseDuration = 2200,
}: LoopingTypewriterProps) {
  const [stringIdx, setStringIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = strings[stringIdx % strings.length];

    if (!isDeleting && displayText === currentFullText) {
      // Pause when full string is typed
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      // Move to next string after deletion
      setIsDeleting(false);
      setStringIdx((prev) => (prev + 1) % strings.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, stringIdx, strings, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span className="text-text font-mono">{displayText}</span>
      <span className="w-2 h-4 bg-accent animate-pulse inline-block ml-1 shrink-0" />
    </span>
  );
}
