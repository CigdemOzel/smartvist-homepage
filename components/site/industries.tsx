'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { industries } from '@/lib/site-data'
import { useT } from '@/lib/i18n'

const industryScenarios = [
  { name: { en: 'Banking', tr: 'Bankacılık' }, image: '/scenario-banking.png' },
  { name: { en: 'Telecom', tr: 'Telekomünikasyon' }, image: '/scenario-telecom.png' },
  { name: { en: 'Insurance', tr: 'Sigorta' }, image: '/scenario-insurance.png' },
  { name: { en: 'Car Rental', tr: 'Araç Kiralama' }, image: '/scenario-car-rental.png' },
  { name: { en: 'Healthcare', tr: 'Sağlık' }, image: '/scenario-healthcare.png' },
  { name: { en: 'Fintech', tr: 'Fintek' }, image: '/scenario-fintech.png' },
]

export function Industries() {
  const reduce = useReducedMotion()
  const t = useT()

  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              {t({ tr: 'Sektörler', en: 'Industries' })}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              {t({ tr: 'Düzenlemeye tabi, yüksek riskli müşteri kazanımı için tasarlandı', en: 'Built for regulated, high-stakes onboarding' })}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {t({
                tr: 'Bankalardan kripto platformlarına, Smartvist her sektörün uyum ve deneyim taleplerinden uyum sağlar.',
                en: 'From banks to crypto platforms, Smartvist adapts to the compliance and experience demands of every sector it serves.',
              })}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industryScenarios.map((scenario, i) => {
            const industry = industries.find(ind => t(ind.name) === t(scenario.name))
            return (
              <motion.a
                key={scenario.name.en}
                href="#contact"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-brand/40 hover:shadow-lg"
              >
                {/* Scenario Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={scenario.image}
                    alt={t(scenario.name)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{t(scenario.name)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {industry ? t(industry.description) : t(scenario.name)}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-0.5 ml-3 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
