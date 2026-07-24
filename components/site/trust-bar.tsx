'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ShieldCheck, Fingerprint, Lock, Globe, ScanLine } from 'lucide-react'

const sectors = [
  'Global Bank',
  'NeoPay',
  'CryptoVault',
  'MetaBroker',
  'Telco One',
  'FinReady',
  'PayLink',
  'InsureNow',
]

const standards = [
  { icon: ScanLine, label: 'ICAO 9303' },
  { icon: Fingerprint, label: 'NIST biometrics' },
  { icon: Lock, label: 'ISO 27001 ISMS' },
  { icon: Globe, label: 'WebRTC secure' },
  { icon: ShieldCheck, label: 'GDPR / KVKK ready' },
]

export function TrustBar() {
  const reduce = useReducedMotion()

  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Powering compliant onboarding for 35+ regulated institutions
        </p>

        {/* marquee */}
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <motion.div
            className="flex w-max gap-10"
            animate={reduce ? undefined : { x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {[...sectors, ...sectors].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-xl font-bold tracking-tight text-foreground/35"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {standards.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <s.icon className="h-4 w-4 text-brand" />
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
