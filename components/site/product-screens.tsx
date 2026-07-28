'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Check, Nfc, ScanFace, ScanLine, Video, Mic, Circle, Activity } from 'lucide-react'

/* ---------------- SDK: mobile flow with premium demo UI ---------------- */
export function SdkScreen() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(0)

  const steps = [
    {
      icon: ScanLine,
      label: 'Document scan',
      done: step > 0,
      active: step === 0,
    },
    {
      icon: ScanFace,
      label: 'Face match',
      done: step > 1,
      active: step === 1,
    },
    {
      icon: Check,
      label: 'Liveness check',
      done: step > 2,
      active: step === 2,
    },
  ]

  // Auto-advance through steps
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3000),
      setTimeout(() => setStep(2), 5500),
      setTimeout(() => setStep(0), 8500), // loop back
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-xs font-medium text-white/70">Document detection</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="relative h-12 w-20 overflow-hidden rounded bg-white/10">
                  <motion.div
                    className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={reduce ? undefined : { x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <img
                    src="/demo-id.png"
                    alt="Demo ID"
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                  />
                </div>
                <div className="flex-1 text-xs text-white/70">
                  <p className="font-medium">Identity Card Detected</p>
                  <p className="text-white/50">EU Standard Format</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/50">Scanning document details…</p>
          </motion.div>
        )
      case 1:
        return (
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-xs font-medium text-white/70">Face authentication</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <img
                    src="/demo-face.png"
                    alt="Demo face"
                    className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  />
                  {!reduce && (
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-accent"
                      animate={{ scale: [0.95, 1.05, 0.95] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                </div>
                <div className="flex-1 text-xs text-white/70">
                  <p className="font-medium">Matching face</p>
                  <motion.p
                    className="text-white/50"
                    animate={reduce ? undefined : { opacity: [0.5, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    Confidence: 98.7%
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 2:
      default:
        return (
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 p-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-brand-ink">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-semibold text-accent">Verification complete</span>
              </div>
              <p className="mt-2 text-xs text-white/70">All security checks passed</p>
            </div>
          </motion.div>
        )
    }
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-[2.5rem] border-8 border-foreground bg-foreground p-3 shadow-2xl">
        {/* Phone frame */}
        <div className="overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-brand-ink to-brand-ink/95 p-4">
          {/* Premium Status bar */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-accent" />
              SmartID Secure
            </span>
            <span className="text-[10px] font-medium text-white/50">
              {step === 2 ? '✓ Complete' : `${Math.round((step + 1) / 3 * 100)}%`}
            </span>
          </div>

          {/* Main content */}
          <div className="mt-5 space-y-5">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-white">
                  {steps[step].label}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand/20 px-2 py-1 text-[10px] font-semibold text-brand">
                  {step === 0 && '🔍'}
                  {step === 1 && '👤'}
                  {step === 2 && '✓'}
                  <span>Step {step + 1}/3</span>
                </span>
              </div>
            </div>

            {/* Advanced progress bar */}
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent via-brand to-accent shadow-lg"
                animate={reduce ? undefined : { width: `${((step + 1) / 3) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>

            {/* Step content */}
            <div className="min-h-24">{renderStepContent()}</div>

            {/* Advanced Step indicators */}
            <div className="flex gap-2">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  className="relative flex-1"
                  animate={
                    reduce
                      ? undefined
                      : i === step
                        ? { scale: 1.05 }
                        : { scale: 1 }
                  }
                >
                  <div className={`h-2 rounded-full transition-all ${
                    i < step ? 'bg-accent' : i === step ? 'bg-brand' : 'bg-white/10'
                  }`} />
                  {i === step && !reduce && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-brand"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Enhanced Footer */}
            <div className="space-y-2 rounded-lg bg-white/5 px-3 py-2.5">
              <p className="flex items-center gap-1.5 text-[11px] font-medium text-white/80">
                {step === 2 ? (
                  <>
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-brand-ink">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    All security checks passed
                  </>
                ) : (
                  <>
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    Verifying your identity
                  </>
                )}
              </p>
              {step === 2 && (
                <motion.p
                  initial={reduce ? undefined : { opacity: 0, y: 4 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  className="text-[10px] text-accent/80"
                >
                  Verification timestamp: {new Date().toLocaleTimeString()}
                </motion.p>
              )}
            </div>
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
