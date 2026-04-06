import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Problem from '@/components/sections/Problem'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import QuoteCTA from '@/components/sections/QuoteCTA'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import SectionDivider from '@/components/ui/SectionDivider'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <SocialProof />
        <SectionDivider />
        <Problem />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <QuoteCTA />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
