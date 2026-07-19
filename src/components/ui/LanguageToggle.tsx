import { useLanguage } from '../../hooks/useLanguage';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1 font-sans text-[13px] text-muted">
      <span>🌐</span>
      <button 
        className={`bg-transparent border-none cursor-pointer p-0 transition-colors duration-200 hover:text-text ${lang === 'en' ? 'text-accent font-medium' : 'text-muted'}`} 
        onClick={() => setLang('en')}
        aria-label="EN - Switch to English"
      >
        EN
      </button>
      <span className="select-none opacity-50">|</span>
      <button 
        className={`bg-transparent border-none cursor-pointer p-0 transition-colors duration-200 hover:text-text ${lang === 'id' ? 'text-accent font-medium' : 'text-muted'}`} 
        onClick={() => setLang('id')}
        aria-label="ID - Switch to Indonesian"
      >
        ID
      </button>
    </div>
  );
}
