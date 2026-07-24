'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ScanLine, ScanFace, Nfc, ShieldCheck, Check } from 'lucide-react'
import { useT } from '@/lib/i18n'

export function HeroVisual() {
  const reduce = useReducedMotion()
  const t = useT()
  const [stage, setStage] = useState(0)

  const stages = [
    { id: 'scan', label: t({ tr: 'Belge taranıyor', en: 'Scanning document' }), icon: ScanLine },
    { id: 'face', label: t({ tr: 'Yüz eşleştiriliyor', en: 'Matching face' }), icon: ScanFace },
    { id: 'nfc', label: t({ tr: 'NFC çipi okunuyor', en: 'Reading NFC chip' }), icon: Nfc },
    { id: 'done', label: t({ tr: 'Kimlik doğrulandı', en: 'Identity verified' }), icon: ShieldCheck },
  ] as const

  const checklist = [
    t({ tr: 'Belge orijinal', en: 'Document authentic' }),
    t({ tr: 'Yüz eşleşmesi %99,2', en: 'Face match 99.2%' }),
    t({ tr: 'Canlılık başarılı', en: 'Liveness passed' }),
    t({ tr: 'NFC çipi geçerli', en: 'NFC chip valid' }),
  ]

  useEffect(() => {
    if (reduce) {
      setStage(3)
      return
    }
    const t = setInterval(() => setStage((s) => (s + 1) % stages.length), 2200)
    return () => clearInterval(t)
  }, [reduce])

  const active = stages[stage]
  const done = stage === stages.length - 1

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Ambient rings */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[112%] w-[112%] rounded-[2.5rem] bg-brand-soft/60 blur-2xl" />
      </div>

      {/* Phone */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 30, rotateX: 8 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2.25rem] border border-border bg-card p-3 shadow-2xl shadow-brand/10"
      >
        <div className="relative overflow-hidden rounded-[1.65rem] bg-brand-ink">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-medium text-white/70">
            <span>SmartID</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t({ tr: 'Güvenli oturum', en: 'Secure session' })}
            </span>
          </div>

          {/* ID card + face scene */}
          <div className="relative mx-4 my-5 aspect-[1.58/1] overflow-hidden rounded-xl bg-gradient-to-br from-white to-brand-soft shadow-lg">
            <div className="absolute inset-0 grid-lines opacity-40" />
            <div className="absolute left-3 top-3 flex items-center gap-2">
              <div className="h-9 w-8 rounded-md bg-brand/15" />
              <div className="space-y-1">
                <div className="h-1.5 w-16 rounded bg-brand/30" />
                <div className="h-1.5 w-10 rounded bg-brand/20" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 space-y-1">
              <div className="h-1.5 w-24 rounded bg-foreground/15" />
              <div className="h-1.5 w-16 rounded bg-foreground/10" />
            </div>
            <div className="absolute bottom-3 right-3 h-8 w-8 rounded-md border border-brand/30 bg-brand/10" />

            {/* scanning laser */}
            {!reduce && !done && (
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-accent/40 to-transparent"
                initial={{ top: '-10%' }}
                animate={{ top: ['-10%', '100%'] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </div>

          {/* live status */}
          <div className="mx-4 mb-4 rounded-xl bg-white/10 p-4 backdrop-blur">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-3"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    done ? 'bg-accent text-brand-ink' : 'bg-brand text-white'
                  }`}
                >
                  <active.icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{active.label}</p>
                  <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/15">
                    <motion.div
                      key={`${active.id}-bar`}
                      className={`h-full rounded-full ${done ? 'bg-accent' : 'bg-brand-foreground'}`}
                      initial={{ width: reduce ? '100%' : '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: reduce ? 0 : 2, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* floating verified checklist */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, x: 24, y: 10 }}
        animate={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute -right-4 bottom-8 w-52 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur sm:-right-10"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {t({ tr: 'Kontroller', en: 'Checks' })}
        </p>
        <ul className="space-y-2">
          {checklist.map((item, i) => (
            <motion.li
              key={item}
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.15 }}
              className="flex items-center gap-2 text-xs font-medium text-foreground"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand/12 text-brand">
                <Check className="h-3 w-3" />
              </span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* floating decision badge */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, x: -24, y: -10 }}
        animate={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="absolute -left-4 top-10 flex items-center gap-2 rounded-full border border-border bg-background/95 py-2 pl-2 pr-3 shadow-xl backdrop-blur sm:-left-8"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-brand-ink">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <span className="text-xs font-semibold text-foreground">
          {t({ tr: 'Onaylandı · 4,2sn', en: 'Approved · 4.2s' })}
        </span>
      </motion.div>
    </div>
  )
}
