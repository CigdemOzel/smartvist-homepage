'use client'

import { Reveal, Stagger, StaggerItem } from './reveal'
import { technologies } from '@/lib/site-data'
import { useT } from '@/lib/i18n'
import { Check } from 'lucide-react'

export function Technologies() {
  const t = useT()
  return (
    <section id="technology" className="relative border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {t({ tr: 'Teknoloji', en: 'Technology' })}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {t({ tr: 'Her doğrulamanın arkasındaki motor', en: 'The engine behind every verification' })}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t({
              tr: 'SmartID; kimlik doğrulamayı, biyometrik güvenliği ve dolandırıcılık önlemeyi gelişmiş AI ile birleştirir — hız ve gizlilik için uçta çalışır.',
              en: 'SmartID combines identity verification, biometric security and fraud prevention with advanced AI — running on the edge for speed and privacy.',
            })}
          </p>
        </Reveal>

        {/* Verification Pipeline Visualization */}
        <Reveal className="mt-16 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card/80 to-background/50 p-8 sm:p-12">
          <img
            src="/verification-pipeline.png"
            alt="Verification Pipeline Flow"
            className="w-full h-auto"
          />
        </Reveal>

        {/* Technology Details Grid */}
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <StaggerItem
              key={tech.name.en}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
            >
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-soft opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <tech.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold text-foreground">{t(tech.name)}</h3>
              <ul className="relative mt-4 space-y-2">
                {t(tech.points).map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
