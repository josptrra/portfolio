import { useEffect } from 'react';
import { useTypeWriter } from '../../hooks/useTypeWriter';
import { BlinkingCursor } from './BlinkingCursor';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function TypeWriter({
  text,
  speed = 50,
  delay = 0,
  className = '',
  onComplete,
  showCursor = true,
}: TypeWriterProps) {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const { displayedText, isComplete } = useTypeWriter({
    text,
    speed,
    delay,
    enabled: !isReducedMotion,
  });

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <span className={`inline-block whitespace-pre-wrap ${className}`}>
      <span>{displayedText}</span>
      {(!isComplete || showCursor) && <BlinkingCursor />}
    </span>
  );
}
