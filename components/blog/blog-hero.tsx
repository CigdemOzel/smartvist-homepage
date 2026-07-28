'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { type Article, categoryLabel } from '@/lib/blog-data'
import { ArticleMeta, CategoryPill } from './article-meta'

export function BlogHero({ article }: { article: Article }) {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-36">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-[0.4]" />
        <motion.div
          aria-hidden="true"
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
          animate={reduce ? undefined : { y: [0, 24, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-ember/10 blur-3xl"
          animate={reduce ? undefined : { y: [0, -28, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Smartvist Journal
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
            Ideas on the future of digital trust
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Deep dives on identity verification, AI, biometrics and compliance — from the team building next-generation onboarding.
          </p>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="group mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-brand/5"
        >
          <Link
            href={`/blog/${article.slug}`}
            className="grid items-stretch lg:grid-cols-2"
            aria-label={article.title}
          >
            <div className="relative min-h-[240px] overflow-hidden lg:min-h-[420px]">
              <Image
                src={article.cover || '/placeholder.svg'}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-brand-ink/10 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute left-5 top-5 flex items-center gap-2">
                <CategoryPill label={categoryLabel(article.category)} tone="inverted" />
                <CategoryPill label="Featured" tone="ember" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-5 p-6 sm:p-9">
              <h2 className="font-display text-2xl font-bold leading-tight text-foreground text-balance transition-colors group-hover:text-brand sm:text-3xl">
                {article.title}
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">{article.excerpt}</p>
              <ArticleMeta
                author={article.author}
                date={article.date}
                readingMinutes={article.readingMinutes}
                size="lg"
              />
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Read the story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
