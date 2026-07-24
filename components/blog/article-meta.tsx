'use client'

import { Clock } from 'lucide-react'
import { type Author, formatDate } from '@/lib/blog-data'
import { useLocale, useT, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function AuthorAvatar({
  author,
  size = 'md',
  tone = 'default',
}: {
  author: Author
  size?: 'sm' | 'md' | 'lg'
  tone?: 'default' | 'inverted'
}) {
  const dims = size === 'lg' ? 'h-11 w-11 text-sm' : size === 'sm' ? 'h-7 w-7 text-[10px]' : 'h-9 w-9 text-xs'
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-display font-bold',
        dims,
        tone === 'inverted'
          ? 'bg-white/15 text-white ring-1 ring-white/25'
          : 'bg-brand-soft text-brand ring-1 ring-brand/15',
      )}
      aria-hidden="true"
    >
      {author.initials}
    </span>
  )
}

export function ArticleMeta({
  author,
  date,
  readingMinutes,
  tone = 'default',
  size = 'md',
  showAvatar = true,
  className,
}: {
  author: Author
  date: string
  readingMinutes: number
  tone?: 'default' | 'inverted'
  size?: 'sm' | 'md' | 'lg'
  showAvatar?: boolean
  className?: string
}) {
  const muted = tone === 'inverted' ? 'text-white/70' : 'text-muted-foreground'
  const strong = tone === 'inverted' ? 'text-white' : 'text-foreground'
  const { locale } = useLocale()
  const t = useT()

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {showAvatar && <AuthorAvatar author={author} size={size} tone={tone} />}
      <div className="min-w-0">
        <p className={cn('truncate text-sm font-semibold', strong)}>{author.name}</p>
        <p className={cn('flex items-center gap-2 text-xs', muted)}>
          <span className="truncate">{formatDate(date, locale)}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readingMinutes} {t({ tr: 'dk okuma', en: 'min read' })}
          </span>
        </p>
      </div>
    </div>
  )
}

export function CategoryPill({
  label,
  tone = 'default',
  className,
}: {
  label: Localized | string
  tone?: 'default' | 'inverted' | 'ember'
  className?: string
}) {
  const t = useT()
  const styles =
    tone === 'inverted'
      ? 'bg-white/15 text-white ring-white/25'
      : tone === 'ember'
        ? 'bg-ember-soft text-ember-foreground ring-ember/25'
        : 'bg-brand-soft text-brand ring-brand/20'
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1',
        styles,
        className,
      )}
    >
      {typeof label === 'string' ? label : t(label)}
    </span>
  )
}
