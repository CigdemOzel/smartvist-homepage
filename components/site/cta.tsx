'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { useT, type Localized } from '@/lib/i18n'

const points: Localized[] = [
  { tr: 'Canlı ürün demosu', en: 'Live product walkthrough' },
  { tr: 'Uyum ihtiyaçlarınıza uyarlanmış', en: 'Tailored to your compliance needs' },
  { tr: 'Değerlendirmek için mühendislik çabası gerekli değil', en: 'No engineering effort to evaluate' },
]

export function CTA() {
  const reduce = useReducedMotion()
  const t = useT()

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-brand p-8 text-brand-foreground sm:p-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 grid-lines opacity-[0.12]" />
            <motion.div
              className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
              animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
                {t({ tr: 'Smartvist\'i gerçek zamanlı kimlik doğrulamasında görmek', en: 'See Smartvist verify an identity in real time' })}
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-foreground/80 text-pretty">
                {t({
                  tr: 'Demo kayıt olun ve tam bir müşteri kazanımı izleyin — belge, yüz, canlılık, NFC ve karar — kendi akışınızda saniyeler içinde tamamlanır.',
                  en: 'Book a demo and watch a full onboarding — document, face, liveness, NFC and decision — complete in seconds on your own flow.',
                })}
              </p>
              <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {points.map((p) => (
                  <li key={t(p)} className="flex items-center gap-2 text-sm font-medium text-brand-foreground/90">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-brand-ink">
                      <Check className="h-3 w-3" />
                    </span>
                    {t(p)}
                  </li>
                ))}
              </ul>
            </div>

            <form
              className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block text-sm font-medium text-brand-foreground/90" htmlFor="work-email">
                {t({ tr: 'İş e-postası', en: 'Work email' })}
              </label>
              <input
                id="work-email"
                type="email"
                required
                placeholder="you@company.com"
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-sm text-brand-ink outline-none ring-accent placeholder:text-brand-ink/50 focus:ring-2"
              />
              <button
                type="submit"
                className="group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
              >
                {t({ tr: 'Demo planla', en: 'Book a demo' })}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-center text-xs text-brand-foreground/60">
                {t({ tr: 'Bir iş günü içinde dönüş yapacağız.', en: "We'll get back to you within one business day." })}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
