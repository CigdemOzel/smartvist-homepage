import type { Metadata } from 'next'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { BlogHero } from '@/components/blog/blog-hero'
import { BlogIndex } from '@/components/blog/blog-index'
import { articles, getFeatured } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog — Smartvist | Identity Verification, AI & Compliance',
  description:
    'Insights on identity verification, on-device AI, OCR, NFC, biometrics, KYC and AML from the Smartvist team. A technology publication for builders of digital trust.',
  openGraph: {
    title: 'Smartvist Blog',
    description:
      'Insights on identity verification, on-device AI, OCR, NFC, biometrics, KYC and AML from the Smartvist team.',
    type: 'website',
  },
}

export default function BlogPage() {
  const featured = getFeatured()
  const rest = articles.filter((a) => a.slug !== featured.slug)

  return (
    <main className="min-h-dvh bg-background">
      <Navbar />
      <BlogHero article={featured} />
      <BlogIndex articles={rest} />
      <Footer />
    </main>
  )
}
