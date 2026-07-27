import { Logo } from './logo'
import { MapPin, Phone } from 'lucide-react'
import { useT, type Localized } from '@/lib/i18n'

const columns: { title: Localized; links: Localized[] }[] = [
  {
    title: { tr: 'Platform', en: 'Platform' },
    links: [
      { tr: 'SmartID SDK', en: 'SmartID SDK' },
      { tr: 'SmartID Studio', en: 'SmartID Studio' },
      { tr: 'SmartID Agent', en: 'SmartID Agent' },
      { tr: 'Doğrulama yolculuğu', en: 'Verification journey' },
    ],
  },
  {
    title: { tr: 'Çözümler', en: 'Solutions' },
    links: [
      { tr: 'Müşteri kazanımı', en: 'Customer acquisition' },
      { tr: 'KYC ve KYB otomasyonu', en: 'KYC & KYB automation' },
      { tr: 'Dolandırıcılık önleme', en: 'Fraud prevention' },
      { tr: 'Bankacılık ve fintek', en: 'Banking & fintech' },
    ],
  },
  {
    title: { tr: 'Teknoloji', en: 'Technology' },
    links: [
      { tr: 'OCR ve belgeler', en: 'OCR & documents' },
      { tr: 'NFC ve çip', en: 'NFC & chip' },
      { tr: 'Yüz ve canlılık', en: 'Face & liveness' },
      { tr: 'AI ve risk analizi', en: 'AI & risk analysis' },
    ],
  },
  {
    title: { tr: 'Şirket', en: 'Company' },
    links: [
      { tr: 'Smartvist hakkında', en: 'About Smartvist' },
      { tr: 'Vaka çalışmaları', en: 'Case studies' },
      { tr: 'Bilgi güvenliği', en: 'Information security' },
      { tr: 'İletişim', en: 'Contact' },
    ],
  },
]

export function Footer() {
  const t = useT()
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t({
                tr: 'Düzenlemeye tabi kurumlar için AI destekli kimlik doğrulaması ve uzaktan müşteri kazanımı.',
                en: 'AI-powered identity verification and remote customer onboarding for regulated institutions.',
              })}
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Dijitalpark Teknokent, Çekmeköy / İstanbul
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                +90 (532) 665 40 38
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={t(col.title)}>
                <h3 className="font-display text-sm font-bold text-foreground">{t(col.title)}</h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={t(link)}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-brand"
                      >
                        {t(link)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Smartvist Teknoloji. {t({ tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' })}
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#top" className="transition-colors hover:text-brand">
              {t({ tr: 'Gizlilik', en: 'Privacy' })}
            </a>
            <a href="#top" className="transition-colors hover:text-brand">
              {t({ tr: 'Bilgi Güvenliği (ISMS)', en: 'Information Security (ISMS)' })}
            </a>
            <a href="#top" className="transition-colors hover:text-brand">
              {t({ tr: 'Şartlar', en: 'Terms' })}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
