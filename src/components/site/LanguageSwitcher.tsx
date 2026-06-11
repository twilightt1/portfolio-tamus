import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useI18n, languages, type LanguageCode } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const currentLang = languages[lang];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-md border border-border/60 bg-background/50 px-3 py-2 text-sm backdrop-blur-sm transition-all hover:bg-accent hover:shadow-sm"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLang.flag}</span>
        <ChevronDown className="h-3 w-3 transition-transform" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-lg border border-border/60 bg-background shadow-lg">
            {(Object.keys(languages) as LanguageCode[]).map((code) => {
              const langInfo = languages[code];
              const isActive = code === lang;
              return (
                <button
                  key={code}
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  <span className="text-base">{langInfo.flag}</span>
                  <span>{langInfo.name}</span>
                  {isActive && (
                    <span className="ml-auto text-xs text-primary">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
