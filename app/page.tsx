import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Problem from '@/components/sections/Problem'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <div className="border-t border-[var(--color-border)]">
          <SocialProof />
        </div>

        <Problem />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
