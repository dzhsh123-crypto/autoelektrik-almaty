'use client'

import { motion } from 'framer-motion'
import { CTAButtons } from '@/components/ui/CTAButtons'
import { Clock, Phone } from 'lucide-react'
import { PHONE } from '@/lib/utils'

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-dark-900 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-orange/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-10 sm:p-16 border border-brand-orange/10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            Доступен прямо сейчас
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Сломалась машина?<br />
            <span className="text-brand-orange">Звоните сейчас</span>
          </h2>

          <p className="text-white/50 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Выеду к вам за 30 минут в любой район Алматы. Работаю 24/7, без выходных и праздников.
          </p>

          <CTAButtons size="lg" className="justify-center" />

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/35 text-sm">
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              {PHONE}
            </div>
            <span className="hidden sm:inline">·</span>
            <span>Выезд по всему Алматы и области</span>
            <span className="hidden sm:inline">·</span>
            <span>Работаем 24/7</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
