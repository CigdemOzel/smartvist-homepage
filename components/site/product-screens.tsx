'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Check, Nfc, ScanFace, ScanLine, Video, Mic, Circle, Activity } from 'lucide-react'

/* ---------------- SDK: mobile flow ---------------- */
export function SdkScreen() {
  const reduce = useReducedMotion()
  const steps = [
    { icon: ScanLine, label: 'Document scan', done: true },
    { icon: ScanFace, label: 'Face match', done: true },
    { icon: Nfc, label: 'NFC chip read', done: false, active: true },
  ]
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="rounded-[2rem] border border-border bg-card p-3 shadow-xl">
        <div className="overflow-hidden rounded-[1.4rem] bg-brand-ink p-5">
          <div className="flex items-center justify-between text-[11px] text-white/60">
            <span>SmartID SDK</span>
            <span>On-device</span>
          </div>
          <div className="mt-4 rounded-xl bg-white/[0.06] p-4">
            <p className="text-xs text-white/60">Verifying identity</p>
            <p className="mt-1 font-display text-lg font-bold text-white">Almost there…</p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: reduce ? '70%' : '10%' }}
                whileInView={{ width: '70%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {steps.map((s, i) => (
              <motion.div
                key={s.label}
                initial={reduce ? undefined : { opacity: 0, x: -10 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${
                  s.active ? 'bg-brand/30 ring-1 ring-brand/50' : 'bg-white/[0.04]'
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-md ${
                    s.done ? 'bg-accent text-brand-ink' : 'bg-brand text-white'
                  }`}
                >
                  {s.done ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
                </span>
                <span className="text-sm font-medium text-white">{s.label}</span>
                {s.active && !reduce && (
                  <motion.span
                    className="ml-auto h-1.5 w-1.5 rounded-full bg-accent"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
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
