'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Check } from 'lucide-react'
import { journeySteps } from '@/lib/site-data'
import { Reveal } from './reveal'

export function Journey() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const ActiveIcon = journeySteps[active].icon
  const progress = (active / (journeySteps.length - 1)) * 100

  return (
    <section id="journey" className="relative border-y border-border bg-brand-ink py-20 text-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">The verification journey</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            Follow an identity from photo to verified
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70 text-pretty">
            Every check runs in sequence, in seconds. Scroll to walk through exactly what happens under the hood.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* sticky visual */}
          <div className="lg:sticky lg:top-24 lg:h-[70vh] lg:self-start">
            <div className="flex h-full flex-col justify-center">
              <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03]">
                {/* progress ring */}
                <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90 p-6">
                  <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="88"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 88}
                    animate={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - progress / 100) }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </svg>

                <motion.div
                  key={journeySteps[active].id}
                  initial={reduce ? undefined : { opacity: 0, scale: 0.85 }}
                  animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand text-white shadow-lg">
                    <ActiveIcon className="h-9 w-9" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      Step {active + 1} / {journeySteps.length}
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-white">{journeySteps[active].label}</p>
                  </div>
                </motion.div>
              </div>

              {/* step dots */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {journeySteps.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to ${s.label}`}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? 'w-8 bg-accent' : 'w-2 bg-white/25 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* scrollable steps */}
          <ol className="relative space-y-4 border-l border-white/10 pl-6">
            {journeySteps.map((step, i) => (
              <motion.li
                key={step.id}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: '-45% 0px -45% 0px' }}
                className="relative"
              >
                <span
                  className={`absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors ${
                    i <= active ? 'border-accent bg-accent' : 'border-white/25 bg-brand-ink'
                  }`}
                >
                  {i < active && <Check className="h-2.5 w-2.5 text-brand-ink" />}
                </span>
                <div
                  className={`rounded-2xl border p-5 transition-all duration-300 ${
                    i === active
                      ? 'border-white/20 bg-white/[0.06]'
                      : 'border-transparent bg-transparent opacity-55'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                        i === active ? 'bg-brand text-white' : 'bg-white/10 text-white/70'
                      }`}
                    >
                      <step.icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
