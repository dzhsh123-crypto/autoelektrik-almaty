import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/ui/CTAButtons'
import { CTAButtons } from '@/components/ui/CTAButtons'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface InnerPageProps {
  eyebrow: string
  title: string
  subtitle: string
  children: React.ReactNode
  breadcrumb?: string
}

export function InnerPageLayout({ eyebrow, title, subtitle, children, breadcrumb }: InnerPageProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-dark-950 overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/35 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/60">{breadcrumb || eyebrow}</span>
            </nav>

            <div className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">{eyebrow}</div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/55 max-w-2xl mb-10 leading-relaxed">{subtitle}</p>
            <CTAButtons size="lg" />
          </div>
        </section>

        {children}

        {/* Bottom CTA */}
        <section className="py-20 bg-dark-900 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-orange/6 blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
              Нужна помощь прямо сейчас?
            </h2>
            <p className="text-white/50 mb-8">Выеду к вам в течение 30 минут по Алматы. Работаю 24/7.</p>
            <CTAButtons size="lg" className="justify-center" />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
