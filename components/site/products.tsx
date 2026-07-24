'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Check, ArrowRight } from 'lucide-react'
import { products } from '@/lib/site-data'
import { useT } from '@/lib/i18n'
import { Reveal } from './reveal'
import { SdkScreen, StudioScreen, AgentScreen } from './product-screens'

const screens = {
  sdk: SdkScreen,
  studio: StudioScreen,
  agent: AgentScreen,
} as const

export function Products() {
  const reduce = useReducedMotion()
  const t = useT()
  const [active, setActive] = useState(0)
  const product = products[active]
  const Screen = screens[product.surface]

  return (
    <section id="products" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {t({ tr: 'Ürünler', en: 'Products' })}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {t({ tr: 'Üç ürün, tek doğrulanmış sonuç', en: 'Three products, one verified outcome' })}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t({
              tr: 'Doğrulamayı uygulamanıza gömün, operasyonları tek bir konsoldan yönetin ya da bir AI avatarın müşterilere rehberlik etmesine izin verin — akışınıza uyacak şekilde birleştirin.',
              en: 'Embed verification in your app, run operations from a single console, or let an AI avatar guide customers through it — mix and match to fit your flow.',
            })}
          </p>
        </Reveal>

        {/* tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {products.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                i === active ? 'text-brand-foreground' : 'text-foreground hover:bg-muted'
              }`}
            >
              {i === active && (
                <motion.span
                  layoutId="product-tab"
                  className="absolute inset-0 rounded-xl bg-brand"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{p.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-10 rounded-3xl border border-border bg-muted/30 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-sm font-semibold text-accent-foreground">
                <span className="rounded-full bg-ember-soft px-2.5 py-1 text-accent">{t(product.tagline)}</span>
              </p>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground sm:text-3xl">{product.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t(product.description)}</p>
              <ul className="mt-6 space-y-3">
                {t(product.bullets).map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm font-medium text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/12 text-brand">
                      <Check className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand"
              >
                {t({ tr: `${product.name}'ı keşfedin`, en: `Explore ${product.name}` })}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <Screen />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
