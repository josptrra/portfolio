export function BlinkingCursor({ className = '' }: { className?: string }) {
  return <span className={`text-accent font-mono animate-blink ${className}`}>█</span>;
}
