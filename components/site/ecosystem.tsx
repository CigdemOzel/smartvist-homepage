'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Smartphone, MonitorPlay, Bot } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './reveal'
import { solutions, stats } from '@/lib/site-data'
import { useT, type Localized } from '@/lib/i18n'

const nodes: { name: string; desc: Localized; icon: typeof Smartphone }[] = [
  { name: 'SmartID SDK', desc: { tr: 'Cihaz üzerinde yakalama', en: 'On-device capture' }, icon: Smartphone },
  { name: 'SmartID Studio', desc: { tr: 'Operasyon ve denetim', en: 'Operations & audit' }, icon: MonitorPlay },
  { name: 'SmartID Agent', desc: { tr: 'Özerk rehberlik', en: 'Autonomous guidance' }, icon: Bot },
]

export function Ecosystem() {
  const reduce = useReducedMotion()
  const t = useT()

  return (
    <section id="ecosystem" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {t({ tr: 'SmartID platformu', en: 'The SmartID platform' })}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {t({
              tr: 'Kimliğin tüm yaşam döngüsü için tek platform',
              en: 'One platform for the entire identity lifecycle',
            })}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t({
              tr: 'SmartID; belge ve çip doğrulamayı, yüz eşleştirmeyi, canlılığı, dolandırıcılık önlemeyi ve uzman görüntülü incelemeyi tek bir üründe birleştirir — düzenlemeye tabi kurumlar için tasarlandı.',
              en: 'SmartID unifies document and chip verification, face match, liveness, fraud prevention and expert video review into a single product — built for regulated institutions.',
            })}
          </p>
        </Reveal>

        {/* ecosystem diagram */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="relative flex flex-col items-center">
            {/* core */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-brand/20 bg-brand text-brand-foreground shadow-xl shadow-brand/20"
            >
              <span className="font-display text-lg font-extrabold">SmartID</span>
              <span className="text-xs text-brand-foreground/70">{t({ tr: 'Çekirdek motor', en: 'Core engine' })}</span>
              {!reduce && (
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl ring-2 ring-brand/40"
                  animate={{ scale: [1, 1.25], opacity: [0.5, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
            </motion.div>

            <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
              {nodes.map((n, i) => (
                <motion.div
                  key={n.name}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <n.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold text-foreground">{n.name}</span>
                  <span className="text-xs text-muted-foreground">{t(n.desc)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* solutions */}
        <Stagger className="mt-16 grid gap-4 sm:grid-cols-3">
          {solutions.map((s) => (
            <StaggerItem
              key={s.name.en}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-soft text-accent-foreground">
                <s.icon className="h-5 w-5 text-accent" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{t(s.name)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(s.description)}</p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label.en} className="bg-card p-6 text-center">
              <p className="font-display text-3xl font-extrabold text-brand sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t(s.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
