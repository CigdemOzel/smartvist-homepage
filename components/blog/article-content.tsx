import { Quote } from 'lucide-react'
import type { ContentBlock } from '@/lib/blog-data'
import { Reveal } from '@/components/site/reveal'

export function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => (
        <Reveal key={i} delay={0} y={16}>
          <Block block={block} />
        </Reveal>
      ))}
    </div>
  )
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'lead':
      return (
        <p className="text-pretty text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
          {block.text}
        </p>
      )

    case 'heading':
      return (
        <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">
          {block.text}
        </h2>
      )

    case 'paragraph':
      return <p className="text-pretty text-[1.05rem] leading-[1.8] text-muted-foreground">{block.text}</p>

    case 'list':
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[1.02rem] leading-relaxed text-muted-foreground">
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'callout': {
      const Icon = block.icon
      return (
        <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-brand-soft/50 p-6">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-sm">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-base font-bold text-brand-ink">{block.title}</h3>
              <p className="mt-1.5 text-[1rem] leading-relaxed text-foreground/80">{block.text}</p>
            </div>
          </div>
        </div>
      )
    }

    case 'quote':
      return (
        <blockquote className="relative my-2 rounded-2xl border-l-4 border-brand bg-muted/40 py-6 pl-12 pr-6">
          <Quote className="absolute left-4 top-5 h-6 w-6 text-brand/40" aria-hidden="true" />
          <p className="text-pretty font-display text-xl font-semibold leading-snug text-foreground">
            {block.text}
          </p>
          <cite className="mt-3 block text-sm font-medium not-italic text-muted-foreground">
            — {block.cite}
          </cite>
        </blockquote>
      )

    case 'stats':
      return (
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
          {block.items.map((s, i) => (
            <div key={i} className="text-center sm:text-left">
              <p className="font-display text-3xl font-extrabold tracking-tight text-brand">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      )

    case 'steps':
      return (
        <div className="rounded-2xl border border-border bg-card p-6">
          {block.title && (
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
              {block.title}
            </h3>
          )}
          <ol className="relative flex flex-col gap-6 border-l border-border pl-8">
            {block.items.map((step, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-brand font-display text-xs font-bold text-brand-foreground ring-4 ring-card">
                  {i + 1}
                </span>
                <h4 className="font-display text-base font-bold text-foreground">{step.title}</h4>
                <p className="mt-1 text-[1rem] leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      )

    default:
      return null
  }
}
