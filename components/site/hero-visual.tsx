'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ScanLine, ScanFace, Nfc, ShieldCheck } from 'lucide-react'

const stages = [
  { id: 'scan', label: 'Scanning document', icon: ScanLine },
  { id: 'face', label: 'Matching face', icon: ScanFace },
  { id: 'nfc', label: 'Reading NFC chip', icon: Nfc },
  { id: 'done', label: 'Identity verified', icon: ShieldCheck },
] as const

export function HeroVisual() {
  const reduce = useReducedMotion()
  const [stage, setStage] = useState(0)

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
      {/* Animated gradient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand/40 via-accent/20 to-brand-soft/30 blur-3xl"
          animate={
            reduce
              ? undefined
              : {
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  opacity: [0.5, 0.8, 0.5],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Phone Frame */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 40, rotateX: 12 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2.25rem] border border-border/50 bg-card p-3 shadow-2xl shadow-brand/15"
      >
        <div className="relative overflow-hidden rounded-[1.65rem] bg-brand-ink">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-medium text-white/60">
            <span>SmartID</span>
            <span className="flex items-center gap-1.5">
              <motion.span
                className="h-2 w-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Verifying
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

            {/* Scanning laser */}
            {!reduce && !done && (
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-accent/50 to-transparent"
                initial={{ top: '-10%' }}
                animate={{ top: ['-10%', '100%'] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </div>

          {/* Live status */}
          <div className="mx-4 mb-4 rounded-xl bg-white/5 backdrop-blur">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-3 p-4"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    done ? 'bg-accent text-brand-ink' : 'bg-brand/90 text-white'
                  }`}
                >
                  <active.icon className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">{active.label}</p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
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

      {/* Floating accent orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-accent/10 blur-3xl"
        animate={reduce ? undefined : { y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-brand/5 blur-3xl"
        animate={reduce ? undefined : { y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </div>
  )
}
