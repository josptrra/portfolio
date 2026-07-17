import { TypeWriter } from './TypeWriter';

interface CommandLineProps {
  command: string;
  typed?: boolean;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export function CommandLine({
  command,
  typed = false,
  delay = 0,
  speed = 50,
  onComplete,
  className = '',
}: CommandLineProps) {
  return (
    <div className={`flex gap-2 items-center font-mono ${className}`}>
      <span className="text-accent text-glow-sm">$</span>
      <span className="text-text">
        {typed ? (
          <TypeWriter text={command} delay={delay} speed={speed} onComplete={onComplete} showCursor={false} />
        ) : (
          command
        )}
      </span>
    </div>
  );
}
