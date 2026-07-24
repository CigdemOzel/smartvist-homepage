'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ArrowRight, Globe } from 'lucide-react'
import { Logo } from './logo'
import { navLinks } from '@/lib/site-data'
import { useLocale, useT } from '@/lib/i18n'
import { cn } from '@/lib/utils'

function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale()
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-lg border border-border bg-background/60 p-0.5 text-xs font-semibold',
        className,
      )}
      role="group"
      aria-label="Dil / Language"
    >
      <Globe className="ml-1.5 mr-0.5 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      {(['tr', 'en'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            'rounded-md px-2 py-1 uppercase transition-colors',
            locale === code ? 'bg-brand text-brand-foreground' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const t = useT()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4',
          scrolled
            ? 'border-border bg-background/80 shadow-lg shadow-brand/5 backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <Link href="/" className="shrink-0" aria-label="Smartvist home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = link.href.startsWith('/blog') && pathname.startsWith('/blog')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-brand-soft text-brand'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                {t(link.label)}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <Link
            href="/#contact"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted lg:inline-flex"
          >
            {t({ tr: 'Satışla görüşün', en: 'Talk to sales' })}
          </Link>
          <Link
            href="/#contact"
            className="group hidden items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition-all hover:shadow-md hover:shadow-brand/20 sm:inline-flex"
          >
            {t({ tr: 'Demo planla', en: 'Book a demo' })}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-[72px] rounded-2xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {t(link.label)}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-between px-3">
                <span className="text-xs font-medium text-muted-foreground">
                  {t({ tr: 'Dil', en: 'Language' })}
                </span>
                <LanguageToggle />
              </div>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground"
              >
                {t({ tr: 'Demo planla', en: 'Book a demo' })}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
