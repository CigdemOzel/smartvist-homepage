'use client'

import { getRelated } from '@/lib/blog-data'
import { useT } from '@/lib/i18n'
import { BlogCard } from './blog-card'
import { Reveal } from '@/components/site/reveal'

export function RelatedArticles({ slug }: { slug: string }) {
  const t = useT()
  const related = getRelated(slug, 3)
  if (related.length === 0) return null

  return (
    <section className="border-t border-border bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                {t({ tr: 'Okumaya devam et', en: 'Keep reading' })}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {t({ tr: 'İlgili yazılar', en: 'Related articles' })}
              </h2>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <BlogCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
