export function TerminalLoader() {
  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center p-4 font-mono text-xs">
      <div className="flex items-center gap-3 bg-surface/90 border border-border/80 px-4 py-2.5 rounded-xl shadow-lg">
        <span className="w-4 h-4 border-2 border-border border-t-accent rounded-full animate-spin shrink-0" />
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-accent font-bold">$</span>
          <span>loading project_spec...</span>
          <span className="text-accent font-bold animate-pulse">▋</span>
        </div>
      </div>
    </div>
  );
}
