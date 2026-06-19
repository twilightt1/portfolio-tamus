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
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={`Change language, current: ${currentLang.name}`}
        aria-expanded={open}
        className="touch-target tap-highlight-none inline-flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-2xl border border-border/60 bg-background/80 px-2.5 text-sm shadow-sm backdrop-blur-sm transition-all hover:bg-accent hover:shadow-sm active:scale-95 sm:px-3"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden min-[420px]:inline sm:inline">{currentLang.flag}</span>
        <ChevronDown
          className="h-3 w-3 transition-transform"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close language menu"
            className="fixed inset-0 z-[55] cursor-default"
            onClick={() => setOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full z-[60] mt-2 w-48 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-xl shadow-foreground/10 backdrop-blur-xl">
            {(Object.keys(languages) as LanguageCode[]).map((code) => {
              const langInfo = languages[code];
              const isActive = code === lang;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                  }}
                  className={`touch-target flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-accent'
                  }`}
                >
                  <span className="text-base">{langInfo.flag}</span>
                  <span>{langInfo.name}</span>
                  {isActive && <span className="ml-auto text-xs text-primary">✓</span>}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
