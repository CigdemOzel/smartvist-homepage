import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { TrustBar } from '@/components/site/trust-bar'
import { Ecosystem } from '@/components/site/ecosystem'
import { Journey } from '@/components/site/journey'
import { Products } from '@/components/site/products'
import { Technologies } from '@/components/site/technologies'
import { Industries } from '@/components/site/industries'
import { WhySmartvist } from '@/components/site/why-smartvist'
import { Resources } from '@/components/site/resources'
import { CTA } from '@/components/site/cta'
import { PolicySection } from '@/components/site/policy-section'
import { ContactSection } from '@/components/site/contact-section'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Ecosystem />
        <Journey />
        <Products />
        <Technologies />
        <Industries />
        <WhySmartvist />
        <Resources />
        <CTA />
        <PolicySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
