'use client'

import { Cpu, Zap, Lock, Globe } from 'lucide-react'
import { Reveal } from './reveal'

const reasons = [
  {
    icon: Cpu,
    title: 'AI on the edge',
    body: 'Models run directly on the device, turning verification into a faster, smoother and more private experience.',
  },
  {
    icon: Zap,
    title: 'Higher conversion',
    body: 'A refined UX and flexible automation lift acquisition rates while cutting drop-off during onboarding.',
  },
  {
    icon: Lock,
    title: 'Compliant by design',
    body: 'Secure, scalable and high-accuracy KYC built specifically for regulated financial institutions.',
  },
  {
    icon: Globe,
    title: 'A technology partner',
    body: 'More than a software vendor — a partner giving institutions a competitive edge in digital acquisition.',
  },
]

export function WhySmartvist() {
  return (
    <section id="why" className="relative border-y border-border bg-brand-ink py-20 text-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why Smartvist</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
                Years of AI and computer vision, applied to trust
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70 text-pretty">
                Smartvist brings deep experience in artificial intelligence, computer vision and enterprise software to
                digital identity verification and remote customer acquisition — helping institutions grow securely.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-0.5"
              >
                Partner with Smartvist
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
