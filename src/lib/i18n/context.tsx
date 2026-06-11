import { createContext, useContext, useState, useEffect } from 'react';
import { translations, languages, type LanguageCode, type TranslationKey } from './translations';

interface I18nContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang') as LanguageCode;
      if (saved && saved in languages) return saved;
    }
    return 'en';
  });

  const setLang = (newLang: LanguageCode) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang);
    }
  };

  const t = (key: TranslationKey): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Missing translation key: ${key}`);
      return key;
    }
    return translation[lang] || translation.en;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
