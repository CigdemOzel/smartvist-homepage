'use client'

import { useT } from '@/lib/i18n'
import { Reveal } from './reveal'

export function WhySmartvist() {
  const t = useT()
  return (
    <section id="why" className="relative border-y border-border bg-brand-ink py-20 text-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t({ tr: 'Neden Smartvist', en: 'Why Smartvist' })}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
              {t({ tr: 'Yapay zeka ve bilgisayar vizyonunun yılları, güvene uygulanmış', en: 'Years of AI and computer vision, applied to trust' })}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75 text-pretty">
              {t({
                tr: 'Smartvist, yapay zeka, bilgisayar vizyonu ve kurumsal yazılımda derin tecrübeyi dijital kimlik doğrulaması ve uzaktan müşteri kazanımına getiriyor — kurumların güvenli şekilde büyümesine yardımcı oluyor.',
                en: 'Smartvist brings deep experience in artificial intelligence, computer vision and enterprise software to digital identity verification and remote customer acquisition — helping institutions grow securely.',
              })}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-brand-ink transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1"
            >
              {t({ tr: 'Smartvist ile ortak olun', en: 'Partner with Smartvist' })}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
