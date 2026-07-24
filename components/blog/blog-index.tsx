'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Search, X, FileQuestion } from 'lucide-react'
import { type Article, categories } from '@/lib/blog-data'
import { useLocale, useT, type Localized } from '@/lib/i18n'
import { BlogCard } from './blog-card'
import { cn } from '@/lib/utils'

type Filter = 'all' | string

export function BlogIndex({ articles }: { articles: Article[] }) {
  const reduce = useReducedMotion()
  const translate = useT()
  const { locale } = useLocale()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<Filter>('all')

  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const a of articles) map[a.category] = (map[a.category] ?? 0) + 1
    return map
  }, [articles])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((a) => {
      const matchCategory = active === 'all' || a.category === active
      if (!matchCategory) return false
      if (!q) return true
      return (
        a.title[locale].toLowerCase().includes(q) ||
        a.excerpt[locale].toLowerCase().includes(q) ||
        a.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    })
  }, [articles, query, active, locale])

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {/* Controls */}
      <div className="flex flex-col gap-5 border-b border-border pb-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            {translate({ tr: 'Son yazılar', en: 'Latest articles' })}
          </h2>
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={translate({ tr: 'Yazılarda ara…', en: 'Search articles…' })}
              aria-label={translate({ tr: 'Yazılarda ara', en: 'Search articles' })}
              className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-9 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label={translate({ tr: 'Aramayı temizle', en: 'Clear search' })}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category filters */}
        <div className="-mx-1 flex flex-wrap gap-2">
          <FilterChip
            label={translate({ tr: 'Tümü', en: 'All' })}
            count={articles.length}
            active={active === 'all'}
            onClick={() => setActive('all')}
          />
          {categories.map((c) => (
            <FilterChip
              key={c.id}
              label={translate(c.label)}
              count={counts[c.id] ?? 0}
              active={active === c.id}
              onClick={() => setActive(c.id)}
            />
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mt-8">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout={!reduce}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((a, i) => (
                <BlogCard key={a.slug} article={a} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <FileQuestion className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display text-lg font-semibold text-foreground">
                {translate({ tr: 'Yazı bulunamadı', en: 'No articles found' })}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {translate({ tr: 'Farklı bir arama terimi veya kategori deneyin.', en: 'Try a different search term or category.' })}
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setActive('all')
                }}
                className="mt-5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90"
              >
                {translate({ tr: 'Filtreleri sıfırla', en: 'Reset filters' })}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all',
        active
          ? 'border-brand bg-brand text-brand-foreground shadow-sm shadow-brand/20'
          : 'border-border bg-background text-muted-foreground hover:border-brand/40 hover:text-foreground',
      )}
    >
      {label}
      <span
        className={cn(
          'rounded-full px-1.5 text-[11px] font-semibold tabular-nums',
          active ? 'bg-white/20 text-brand-foreground' : 'bg-muted text-muted-foreground',
        )}
      >
        {count}
      </span>
    </button>
  )
}
