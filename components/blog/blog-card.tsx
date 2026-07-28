'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { type Article, categoryLabel, icons } from '@/lib/blog-data'
import { ArticleMeta } from './article-meta'

export function BlogCard({ article, index = 0 }: { article: Article; index?: number }) {
  const reduce = useReducedMotion()
  const Icon = icons[article.icon]

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
    >
      <Link href={`/blog/${article.slug}`} className="flex h-full flex-col" aria-label={article.title}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.cover || '/placeholder.svg'}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent" />
          <div className="absolute left-4 top-4">
            <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {categoryLabel(article.category)}
            </span>
          </div>
          <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
            <Icon className="h-4 w-4" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold leading-snug text-foreground text-balance transition-colors group-hover:text-brand">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <ArticleMeta
              author={article.author}
              date={article.date}
              readingMinutes={article.readingMinutes}
            />
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all group-hover:bg-brand group-hover:text-brand-foreground">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
