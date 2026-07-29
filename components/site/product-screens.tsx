'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'motion/react'
import { Check, Nfc, ScanFace, ScanLine, Video, Mic, Circle, Activity } from 'lucide-react'

/* ---------------- SDK: mobile flow ---------------- */
export function SdkScreen() {
  const [currentStep, setCurrentStep] = useState(0)
  const reduce = useReducedMotion()

  // Auto-advance through steps
  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentStep(1), 3000),
      setTimeout(() => setCurrentStep(2), 6500),
      setTimeout(() => setCurrentStep(3), 10000),
      setTimeout(() => setCurrentStep(0), 12500), // loop back
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const steps = [
    { icon: ScanLine, label: 'Belge taranıyor', labelEn: 'Document scan', done: false, active: true, preview: '/verification-step-1-scan.png' },
    { icon: Nfc, label: 'NFC çipi okunuyor', labelEn: 'NFC chip read', done: false, active: false, preview: '/verification-step-2-nfc.png' },
    { icon: ScanFace, label: 'Canlılık kontrolü', labelEn: 'Liveness check', done: false, active: false, preview: '/verification-step-3-liveness.png' },
    { icon: Check, label: 'Kimlik doğrulandı', labelEn: 'Verified', done: true, active: false },
  ]

  const displayLabel = (step: typeof steps[0]) => {
    // Display Turkish label, fallback to English
    return step.label || step.labelEn
  }

  const isVerified = currentStep === 3

  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="rounded-[2rem] border border-border bg-card p-3 shadow-xl">
        <div className="overflow-hidden rounded-[1.4rem] bg-brand-ink p-5">
          <div className="flex items-center justify-between text-[11px] text-white/60">
            <span>SmartID SDK</span>
            <span>On-device</span>
          </div>

          {/* Preview Area - Shows step-specific content */}
          <div className="mt-4 overflow-hidden rounded-xl bg-black">
            <AnimatePresence mode="crossFade">
              {!isVerified ? (
                <motion.div
                  key={`preview-${currentStep}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-48 w-full bg-black"
                >
                  <img
                    src={steps[currentStep].preview}
                    alt={displayLabel(steps[currentStep])}
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="verified"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-brand to-brand-ink/50"
                >
                  <div className="flex flex-col items-center gap-3">
                    <motion.div
                      initial={reduce ? undefined : { scale: 0 }}
                      animate={reduce ? undefined : { scale: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-brand-ink"
                    >
                      <Check className="h-6 w-6" />
                    </motion.div>
                    <p className="text-center text-sm font-semibold text-white">Identity verified</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Status Text */}
          <div className="mt-4 rounded-xl bg-white/[0.06] p-4">
            <p className="text-xs text-white/60">
              {isVerified ? 'Verification complete' : 'Verifying identity'}
            </p>
            <p className="mt-1 font-display text-lg font-bold text-white">
              {isVerified ? 'Approved' : 'Almost there…'}
            </p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-accent"
                animate={{ width: `${((currentStep + 1) / 4) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Steps Indicators */}
          <div className="mt-4 space-y-2">
            {steps.map((s, i) => {
              const isDone = i < currentStep
              const isActive = i === currentStep
              return (
                <motion.div
                  key={s.label}
                  initial={reduce ? undefined : { opacity: 0, x: -10 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i }}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${
                    isActive ? 'bg-brand/30 ring-1 ring-brand/50' : 'bg-white/[0.04]'
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-md ${
                      isDone || (isActive && isVerified) ? 'bg-accent text-brand-ink' : 'bg-brand text-white'
                    }`}
                  >
                    {isDone || (isActive && isVerified) ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
                  </span>
                  <span className="text-sm font-medium text-white">{displayLabel(s)}</span>
                  {isActive && !isVerified && !reduce && (
                    <motion.span
                      className="ml-auto h-1.5 w-1.5 rounded-full bg-accent"
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Studio: operations dashboard ---------------- */
export function StudioScreen() {
  const reduce = useReducedMotion()
  const rows = [
    { id: '#VF-8842', name: 'A. Yılmaz', status: 'Approved', tone: 'ok' },
    { id: '#VF-8841', name: 'M. Demir', status: 'In review', tone: 'warn' },
    { id: '#VF-8840', name: 'S. Kaya', status: 'Approved', tone: 'ok' },
    { id: '#VF-8839', name: 'E. Çelik', status: 'Escalated', tone: 'info' },
  ]
  const toneClass: Record<string, string> = {
    ok: 'bg-brand/10 text-brand',
    warn: 'bg-accent/15 text-accent-foreground',
    info: 'bg-foreground/10 text-foreground',
  }
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-5 py-3">
          <span className="font-display text-sm font-bold text-foreground">Live sessions</span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> 12 active now
          </span>
        </div>
        <div className="grid grid-cols-3 gap-px bg-border">
          {[
            { k: 'Today', v: '1,284' },
            { k: 'Approval rate', v: '96.4%' },
            { k: 'Avg. time', v: '4.2s' },
          ].map((s) => (
            <div key={s.k} className="bg-card px-4 py-3">
              <p className="text-[11px] text-muted-foreground">{s.k}</p>
              <p className="font-display text-lg font-extrabold text-foreground">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="divide-y divide-border">
          {rows.map((r, i) => (
            <motion.div
              key={r.id}
              initial={reduce ? undefined : { opacity: 0, y: 8 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
              className="flex items-center justify-between px-5 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft font-display text-xs font-bold text-brand">
                  {r.name.split('.')[0]}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                  <p className="text-[11px] text-muted-foreground">{r.id}</p>
                </div>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${toneClass[r.tone]}`}>{r.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------------- Agent: video-call avatar ---------------- */
export function AgentScreen() {
  const reduce = useReducedMotion()
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-2xl border border-border bg-brand-ink shadow-xl">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-brand to-brand-ink">
          <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-10" />
          {/* avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-brand-ink">
                <ScanFace className="h-8 w-8" />
              </span>
              {!reduce &&
                [0, 1, 2].map((r) => (
                  <motion.span
                    key={r}
                    className="absolute inset-0 rounded-full ring-2 ring-white/20"
                    animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: r * 0.6, ease: 'easeOut' }}
                  />
                ))}
            </div>
          </div>
          {/* self view */}
          <div className="absolute bottom-3 right-3 h-16 w-20 rounded-lg border border-white/20 bg-white/10 backdrop-blur">
            <div className="flex h-full items-center justify-center">
              <Circle className="h-6 w-6 text-white/40" />
            </div>
          </div>
          {/* live tag */}
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> LIVE
          </div>
          {/* waveform */}
          <div className="absolute bottom-3 left-3 flex items-end gap-0.5">
            {[6, 12, 8, 16, 10, 14, 7].map((h, i) => (
              <motion.span
                key={i}
                className="w-1 rounded-full bg-accent"
                style={{ height: h }}
                animate={reduce ? undefined : { scaleY: [1, 1.8, 0.6, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <p className="text-sm font-medium text-white">
            <span className="text-white/60">Agent:</span> “Please hold up your ID.”
          </p>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
              <Mic className="h-4 w-4" />
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
              <Video className="h-4 w-4" />
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
              <Activity className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
