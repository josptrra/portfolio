import { TerminalWindow } from './components/layout/TerminalWindow';
import { TypeWriter } from './components/ui/TypeWriter';
import { CommandLine } from './components/ui/CommandLine';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-glow text-accent font-display text-4xl mb-8">System Initialized</h1>
      
      <TerminalWindow title="julio@test:~" className="max-w-2xl">
        <CommandLine command="echo 'Phase 3 Verification'" typed={true} delay={500} />
        <div className="mt-4 text-muted">
          <TypeWriter text="All core UI components and hooks loaded successfully..." delay={1500} />
        </div>
      </TerminalWindow>
    </div>
  )
}

export default App
