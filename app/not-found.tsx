import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTAButtons } from '@/components/ui/CTAButtons'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-950 flex items-center justify-center pt-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="font-display text-9xl font-bold text-brand-orange/15 mb-4">404</div>
          <h1 className="font-display text-3xl font-bold text-white mb-4">Страница не найдена</h1>
          <p className="text-white/50 mb-8">Такой страницы нет. Но если у вас проблема с машиной — я готов помочь!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="px-6 py-3 rounded-xl glass-card text-white font-semibold text-sm hover:border-white/15 transition-all">
              На главную
            </Link>
            <CTAButtons size="sm" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
