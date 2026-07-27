import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) {
        toast.error(`ACCESS DENIED: ${error.message}`);
        setLoading(false);
        return;
      }

      if (data.session) {
        toast.success('SUPABASE AUTH SUCCESS: Welcome to Portfolio CMS Admin Panel!');
        navigate('/admin/dashboard');
      }
    } catch (err: any) {
      toast.error(`Authentication error: ${err?.message || 'Unknown error'}`);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center p-4 font-mono">
      <div className="bg-surface/90 border border-border/80 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent pointer-events-none" />

        {/* Header Bar */}
        <div className="flex items-center justify-between text-xs border-b border-border/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className="text-muted text-[11px] ml-2 font-mono">ssh admin@supabase.auth</span>
          </div>
          <span className="text-accent text-[10px] font-bold tracking-wider animate-pulse">
            AUTHENTICATING
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h1 className="font-display text-xl font-bold text-accent text-glow">
            PORTFOLIO CMS ADMIN
          </h1>
          <p className="text-xs text-muted">
            Sign in with your official Supabase Admin credentials.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs text-muted block">$ admin_email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
              className="w-full bg-background border border-border/80 focus:border-accent text-text px-4 py-2.5 rounded-xl font-mono text-sm outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-muted block">$ admin_password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              className="w-full bg-background border border-border/80 focus:border-accent text-text px-4 py-2.5 rounded-xl font-mono text-sm outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent/10 hover:bg-accent/20 border border-accent text-accent font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,102,0.1)] disabled:opacity-50"
          >
            <span>{loading ? 'VERIFYING...' : '[ Login ]'}</span>
            <span>→</span>
          </button>
        </form>

        <div className="border-t border-border/60 pt-4 text-[11px] text-muted/60 text-center font-mono">
          PROTECTED TERMINAL // SUPABASE AUTH SECURED
        </div>

      </div>
    </div>
  );
}
