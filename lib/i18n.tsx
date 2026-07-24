'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type Locale = 'tr' | 'en'

export type Localized<T = string> = { tr: T; en: T }

const STORAGE_KEY = 'smartvist-locale'
const DEFAULT_LOCALE: Locale = 'tr'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggle: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Always start from the default so server and first client render match,
  // then hydrate the stored preference after mount.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'tr' || stored === 'en') {
      setLocaleState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore write failures (e.g. private mode)
    }
  }, [])

  const toggle = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === 'tr' ? 'en' : 'tr'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // ignore
      }
      return next
    })
  }, [])

  return <LocaleContext.Provider value={{ locale, setLocale, toggle }}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return ctx
}

function isLocalized(value: unknown): value is Localized<unknown> {
  return typeof value === 'object' && value !== null && 'tr' in value && 'en' in value
}

/**
 * Returns a translator bound to the current locale.
 * Accepts a Localized value (picks the current language) or a plain
 * value (returned as-is), so it is safe to use on mixed content.
 */
export function useT() {
  const { locale } = useLocale()
  return useCallback(
    <T,>(value: Localized<T> | T): T => {
      if (isLocalized(value)) {
        return value[locale] as T
      }
      return value as T
    },
    [locale],
  )
}

/**
 * Renders a Localized string in the current language.
 * Useful inside Server Components (like blog pages) that hold Localized
 * data but need a Client boundary to react to language changes.
 */
export function LocalizedText({ value }: { value: Localized }) {
  const { locale } = useLocale()
  return <>{value[locale]}</>
}
