import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { Reveal } from '@/components/site/reveal'
import { ArticleContent } from '@/components/blog/article-content'
import { ArticleMeta, CategoryPill } from '@/components/blog/article-meta'
import { RelatedArticles } from '@/components/blog/related-articles'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { articles, getArticle, categoryLabel } from '@/lib/blog-data'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Article not found — Smartvist' }

  return {
    title: `${article.title} — Smartvist Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: [{ url: article.cover }],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <main className="min-h-dvh bg-background">
      <ReadingProgress />
      <Navbar />

      <article>
        {/* Header */}
        <header className="mx-auto max-w-3xl px-4 pt-28 sm:px-6 sm:pt-36">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-6">
              <CategoryPill label={categoryLabel(article.category)} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground text-balance sm:text-5xl">
              {article.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-7 flex items-center justify-between gap-4 border-y border-border py-5">
              <ArticleMeta
                author={article.author}
                date={article.date}
                readingMinutes={article.readingMinutes}
                size="lg"
              />
              <div className="hidden flex-wrap gap-2 sm:flex">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </header>

        {/* Cover */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted shadow-xl shadow-brand/5 sm:rounded-3xl">
              <Image
                src={article.cover || '/placeholder.svg'}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <ArticleContent blocks={article.content} />

          {/* Author bio */}
          <Reveal>
            <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
              <ArticleMeta
                author={article.author}
                date={article.date}
                readingMinutes={article.readingMinutes}
                size="lg"
                className="flex-1"
              />
              <Link
                href="/#contact"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90"
              >
                Talk to our team
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <RelatedArticles slug={article.slug} />
      <Footer />
    </main>
  )
}
