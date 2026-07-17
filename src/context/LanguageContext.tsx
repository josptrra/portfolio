import { createContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Lang } from '../data/translations';

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (section: string, key: string) => string;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('julio-lang') as Lang;
    if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('julio-lang', newLang);
  };

  const t = (section: string, key: string): string => {
    try {
      return translations[lang][section][key] || key;
    } catch {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
