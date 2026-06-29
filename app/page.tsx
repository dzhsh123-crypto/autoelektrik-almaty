import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AdvantagesSection } from '@/components/sections/AdvantagesSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { BrandsSection } from '@/components/sections/BrandsSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CTASection } from '@/components/sections/CTASection'
import { ContactsSection } from '@/components/sections/ContactsSection'
import { FloatingCTA } from '@/components/ui/CTAButtons'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AdvantagesSection />
        <HowItWorksSection />
        <BrandsSection />
        <ReviewsSection />
        <FaqSection />
        <CTASection />
        <ContactsSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
