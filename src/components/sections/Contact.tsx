import { useState } from 'react';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [hoveredSocialIdx, setHoveredSocialIdx] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = 'juliosp2107@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 md:px-8 max-w-6xl mx-auto flex flex-col justify-center space-y-12">
      
      {/* 1. TOP COMMAND LINE HEADER BAR */}
      <div className="flex items-center justify-between font-mono text-xs md:text-sm border-b border-border/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-glow-sm" />
          <span className="text-accent font-bold tracking-wider text-glow-sm">
            $ ./connect.sh --channel=direct
          </span>
        </div>
        <span className="text-muted tracking-wider text-[11px] font-mono">
          // COMMUNICATION_LINK :: ONLINE
        </span>
      </div>

      {/* 2. MAIN CONTACT HUD CARD */}
      <div className="bg-surface/90 border border-border/80 rounded-2xl p-6 md:p-8 shadow-2xl hover:border-accent/40 transition-all duration-500 relative overflow-hidden group space-y-8">
        
        {/* Window Header Bar */}
        <div className="flex items-center justify-between text-xs font-mono border-b border-border/60 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className="text-muted text-[11px] ml-2 tracking-wider">COMM.HUD // DISPATCH_CENTER</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping inline-block" />
            <span className="text-accent font-mono text-[10px] tracking-wider uppercase font-semibold">
              STATUS: READY
            </span>
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels & Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Chip */}
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent font-mono text-xs px-3 py-1 rounded-full font-medium shadow-[0_0_10px_rgba(0,255,102,0.1)]">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                AVAILABLE FOR NEW OPPORTUNITIES
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text tracking-wide">
                Initiate Communication
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Have a project in mind, a freelance inquiry, or an engineering role? Reach out directly via email or social links below.
              </p>
            </div>

            {/* Interactive Email Card */}
            <div className="bg-background/80 border border-border/80 rounded-2xl p-4 space-y-2 font-mono">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>DIRECT_EMAIL</span>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <span className="text-xs sm:text-sm text-accent font-bold truncate">
                  {email}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="bg-accent/10 hover:bg-accent/20 border border-accent/40 text-accent font-mono text-xs px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 shrink-0 active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <span className="text-accent font-bold">✓ Copied!</span>
                  ) : (
                    <>
                      <span>Copy</span>
                      <span>📋</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Connect Icon Buttons */}
            <div className="space-y-3 font-mono text-xs">
              <span className="text-muted text-[11px] block uppercase tracking-wider">// SOCIAL_NETWORKS</span>
              
              <div className="flex items-center gap-3">
                {[
                  {
                    name: 'GitHub',
                    url: 'https://github.com/josptrra',
                    icon: SiGithub,
                    color: '#F0F6FC',
                  },
                  {
                    name: 'LinkedIn',
                    url: 'https://linkedin.com/in/josptrra',
                    icon: FaLinkedin,
                    color: '#0A66C2',
                  },
                  {
                    name: 'Instagram',
                    url: 'https://instagram.com/josptrra',
                    icon: SiInstagram,
                    color: '#E4405F',
                  },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  const isHovered = hoveredSocialIdx === idx;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      title={social.name}
                      aria-label={`${social.name} Profile`}
                      onMouseEnter={() => setHoveredSocialIdx(idx)}
                      onMouseLeave={() => setHoveredSocialIdx(null)}
                      style={{
                        borderColor: isHovered ? social.color : undefined,
                        backgroundColor: isHovered ? `${social.color}18` : undefined,
                        color: isHovered ? social.color : undefined,
                        boxShadow: isHovered ? `0 4px 20px ${social.color}35` : undefined,
                      }}
                      className="w-11 h-11 rounded-xl bg-background/80 border border-border/80 text-text flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1 group cursor-pointer"
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location & Timezone Info */}
            <div className="pt-2 font-mono text-xs text-muted flex items-center gap-2">
              <span>Palembang, Indonesia</span>
              <span>•</span>
              <span className="text-accent">WIB (UTC+7)</span>
            </div>

          </div>

          {/* Right Column: Terminal Contact Form */}
          <div className="lg:col-span-7 bg-background/60 border border-border/80 rounded-2xl p-5 sm:p-6 space-y-5 font-mono">
            <div className="flex items-center justify-between text-xs border-b border-border/60 pb-3">
              <span className="text-text font-bold">// TERMINAL_FORM_INPUT</span>
            </div>

            {submitted && (
              <div className="bg-accent/10 border border-accent/40 text-accent p-3.5 rounded-xl text-xs flex items-center gap-2 animate-fade-in">
                <span>✓</span>
                <span>Message transmitted successfully! I will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-muted text-[11px] block">NAME</label>
                <input
                  type="text"
                  required
                  placeholder="[YOUR_FULL_NAME]"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-surface border border-border/80 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2.5 text-text placeholder:text-muted/60 outline-none transition-all font-mono"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-muted text-[11px] block">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  placeholder="[YOUR_EMAIL_ADDRESS]"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-surface border border-border/80 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2.5 text-text placeholder:text-muted/60 outline-none transition-all font-mono"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label className="text-muted text-[11px] block">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-surface border border-border/80 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2.5 text-text placeholder:text-muted/60 outline-none transition-all font-mono resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent/10 hover:bg-accent/20 border border-accent/40 hover:border-accent text-accent hover:text-white font-mono text-xs font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(0,255,102,0.1)] flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span>[ TRANSMIT_MESSAGE ]</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

    </section>
  );
}
