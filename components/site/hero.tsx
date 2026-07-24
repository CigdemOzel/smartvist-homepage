'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { HeroVisual } from './hero-visual'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <motion.div
          className="absolute -top-24 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-soft/70 blur-3xl"
          animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-ember-soft/60 blur-3xl"
          animate={reduce ? undefined : { x: [0, -20, 0], y: [0, -24, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <motion.a
            href="#products"
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 py-1.5 pl-1.5 pr-3 text-sm font-medium text-foreground shadow-sm backdrop-blur"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-brand-foreground">
              <Sparkles className="h-3 w-3" /> New
            </span>
            Meet the SmartID platform
          </motion.a>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Build trust with your customers in{' '}
            <span className="relative whitespace-nowrap text-brand">
              seconds
              <svg
                aria-hidden="true"
                viewBox="0 0 220 12"
                className="absolute -bottom-1 left-0 w-full text-accent"
                fill="none"
              >
                <path d="M2 9C60 3 160 3 218 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            , not weeks.
          </motion.h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0"
          >
            Smartvist verifies identities and onboards customers remotely with AI-powered OCR, NFC, face match and
            liveness — while keeping you compliant with the regulations that matter.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:shadow-xl hover:shadow-brand/30 sm:w-auto"
            >
              Book a live demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#journey"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Play className="h-3 w-3 fill-current" />
              </span>
              See how it works
            </a>
          </motion.div>

          <motion.p
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Trusted by <span className="font-semibold text-foreground">35+ regulated institutions</span> — banks,
            brokers, crypto & e-money.
          </motion.p>
        </div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
