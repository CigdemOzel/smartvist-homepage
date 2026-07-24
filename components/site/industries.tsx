'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { industries } from '@/lib/site-data'
import { useT } from '@/lib/i18n'

export function Industries() {
  const reduce = useReducedMotion()
  const t = useT()

  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              {t({ tr: 'Sektörler', en: 'Industries' })}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              {t({ tr: 'Düzenlemeye tabi, yüksek riskli müşteri kazanımı için', en: 'Built for regulated, high-stakes onboarding' })}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {t({
                tr: 'Bankalardan kripto platformlarına kadar Smartvist, hizmet verdiği her sektörün uyum ve deneyim gereksinimlerine uyum sağlar.',
                en: 'From banks to crypto platforms, Smartvist adapts to the compliance and experience demands of every sector it serves.',
              })}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.a
              key={industry.name.en}
              href="#contact"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <industry.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-foreground">{t(industry.name)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(industry.description)}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
