'use client'

import { ArrowUpRight, Quote } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './reveal'
import { useT, type Localized } from '@/lib/i18n'

const cases: { tag: Localized; title: Localized; metric: Localized }[] = [
  {
    tag: { tr: 'Bankacılık', en: 'Banking' },
    title: {
      tr: 'Bir bireysel banka müşteri kazanım süresini 3 günden bir dakikanın altına indirdi',
      en: 'A retail bank cut onboarding time from 3 days to under a minute',
    },
    metric: { tr: '−%92 terk', en: '−92% drop-off' },
  },
  {
    tag: { tr: 'Kripto', en: 'Crypto' },
    title: {
      tr: 'Bir borsa, ekip büyütmeden KYC’yi yeni pazarlara ölçekledi',
      en: 'An exchange scaled KYC to new markets without adding headcount',
    },
    metric: { tr: '5 yeni bölge', en: '5 new regions' },
  },
  {
    tag: { tr: 'Telekom', en: 'Telecom' },
    title: {
      tr: 'Uzaktan SIM aktivasyonu tümüyle uyumlu doğrulamayla devreye alındı',
      en: 'Remote SIM activation rolled out with fully compliant verification',
    },
    metric: { tr: '%96 onay', en: '96% approval' },
  },
]

export function Resources() {
  const t = useT()
  return (
    <section id="resources" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              {t({ tr: 'Örnek çalışmalar', en: 'Case studies' })}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              {t({ tr: 'Kurumların ölçebileceği sonuçlar', en: 'Outcomes institutions can measure' })}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {t({
                tr: 'Yavaş ve manuel doğrulamayı SmartID platformuyla değiştiren ekiplerden gerçek sonuçlar.',
                en: 'Real results from teams that replaced slow, manual verification with the SmartID platform.',
              })}
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {cases.map((c) => (
            <StaggerItem
              key={c.title.en}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                    {t(c.tag)}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground text-pretty">
                  {t(c.title)}
                </h3>
              </div>
              <p className="mt-6 font-display text-2xl font-extrabold text-accent-foreground">
                <span className="text-accent">{t(c.metric)}</span>
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <figure className="mt-6 rounded-3xl border border-border bg-brand p-8 text-brand-foreground sm:p-12">
            <Quote className="h-8 w-8 text-brand-foreground/40" />
            <blockquote className="mt-4 max-w-3xl font-display text-xl font-bold leading-snug text-pretty sm:text-2xl">
              {t({
                tr: '“Smartvist bize müşterilerimizin gerçekten keyifle kullandığı banka düzeyinde bir doğrulama sundu. Müşteri kazanımı, insanların kaydı yarıda bırakma nedeni olmaktan çıktı.”',
                en: '“Smartvist gave us bank-grade verification our customers actually enjoy using. Onboarding stopped being the reason people abandoned sign-up.”',
              })}
            </blockquote>
            <figcaption className="mt-6 text-sm text-brand-foreground/70">
              {t({
                tr: 'Dijital Müşteri Kazanımı Direktörü · Düzenlemeye tabi finans kurumu',
                en: 'Head of Digital Onboarding · Regulated financial institution',
              })}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
