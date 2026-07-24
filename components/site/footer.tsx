import { Logo } from './logo'
import { MapPin, Phone } from 'lucide-react'

const columns = [
  {
    title: 'Platform',
    links: ['SmartID SDK', 'SmartID Studio', 'SmartID Agent', 'Verification journey'],
  },
  {
    title: 'Solutions',
    links: ['Customer acquisition', 'KYC & KYB automation', 'Fraud prevention', 'Banking & fintech'],
  },
  {
    title: 'Technology',
    links: ['OCR & documents', 'NFC & chip', 'Face & liveness', 'AI & risk analysis'],
  },
  {
    title: 'Company',
    links: ['About Smartvist', 'Case studies', 'Information security', 'Contact'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI-powered identity verification and remote customer onboarding for regulated institutions.
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
              <div key={col.title}>
                <h3 className="font-display text-sm font-bold text-foreground">{col.title}</h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-brand"
                      >
                        {link}
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
            © {new Date().getFullYear()} Smartvist Teknoloji. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#top" className="transition-colors hover:text-brand">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-brand">
              Information Security (ISMS)
            </a>
            <a href="#top" className="transition-colors hover:text-brand">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
