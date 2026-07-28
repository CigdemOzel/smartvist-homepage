'use client'

import { Cpu, Zap, Lock, Globe } from 'lucide-react'
import { type Localized, useT } from '@/lib/i18n'
import { Reveal } from './reveal'

const reasons: { icon: typeof Cpu; title: Localized; body: Localized }[] = [
  {
    icon: Cpu,
    title: { tr: 'Uçta AI', en: 'AI on the edge' },
    body: { tr: 'Modeller doğrudan cihazda çalışarak doğrulamayı daha hızlı, yumuşak ve özel bir deneyime dönüştürür.', en: 'Models run directly on the device, turning verification into a faster, smoother and more private experience.' },
  },
  {
    icon: Zap,
    title: { tr: 'Daha yüksek dönüşüm', en: 'Higher conversion' },
    body: { tr: 'Rafine edilmiş UX ve esnek otomasyon, kazanım oranlarını yükseltirken müşteri kazanımı sırasında bırakmaları azaltır.', en: 'A refined UX and flexible automation lift acquisition rates while cutting drop-off during onboarding.' },
  },
  {
    icon: Lock,
    title: { tr: 'Tasarımdan itibaren uyumlu', en: 'Compliant by design' },
    body: { tr: 'Güvenli, ölçeklenebilir ve yüksek doğruluk KYC, özellikle düzenlemeye tabi finansal kuruluşlar için inşa edilmiş.', en: 'Secure, scalable and high-accuracy KYC built specifically for regulated financial institutions.' },
  },
  {
    icon: Globe,
    title: { tr: 'Bir teknoloji ortağı', en: 'A technology partner' },
    body: { tr: 'Sadece yazılım satıcısından daha fazlası — kurumlara dijital kazanımda rekabet avantajı veren bir ortak.', en: 'More than a software vendor — a partner giving institutions a competitive edge in digital acquisition.' },
  },
]

export function WhySmartvist() {
  const t = useT()
  return (
    <section id="why" className="relative border-y border-border bg-brand-ink py-20 text-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                {t({ tr: 'Neden Smartvist', en: 'Why Smartvist' })}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
                {t({ tr: 'Yapay zeka ve bilgisayar vizyonunun yılları, güvene uygulanmış', en: 'Years of AI and computer vision, applied to trust' })}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70 text-pretty">
                {t({
                  tr: 'Smartvist, yapay zeka, bilgisayar vizyonu ve kurumsal yazılımda derin tecrübeyi dijital kimlik doğrulaması ve uzaktan müşteri kazanımına getiriyor — kurumların güvenli şekilde büyümesine yardımcı oluyor.',
                  en: 'Smartvist brings deep experience in artificial intelligence, computer vision and enterprise software to digital identity verification and remote customer acquisition — helping institutions grow securely.',
                })}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-0.5"
              >
                {t({ tr: 'Smartvist ile ortak olun', en: 'Partner with Smartvist' })}
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title.en} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{t(r.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{t(r.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
