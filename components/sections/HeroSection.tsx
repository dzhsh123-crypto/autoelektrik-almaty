'use client'

import { motion } from 'framer-motion'
import { CTAButtons } from '@/components/ui/CTAButtons'
import { Clock, Star, Shield, Zap } from 'lucide-react'

const stats = [
  { value: '30', unit: 'мин', label: 'Время выезда' },
  { value: '7+', unit: 'лет', label: 'Опыта работы' },
  { value: '24/7', unit: '', label: 'Круглосуточно' },
  { value: '184', unit: '+', label: 'Довольных клиентов' },
]

const badges = [
  { icon: Star, label: 'Рейтинг 4.9/5' },
  { icon: Shield, label: 'Гарантия на работы' },
  { icon: Clock, label: 'Выезд 30 минут' },
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      aria-label="Главный баннер"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-hero-glow" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Large blurred orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 mb-8"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-brand-orange/20 text-white/70 text-sm"
              >
                <Icon className="w-3.5 h-3.5 text-brand-orange" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
          >
            Авто{' '}
            <span className="relative">
              <span className="text-brand-orange text-glow">не заводится</span>
            </span>
            ?{' '}
            <br className="hidden sm:block" />
            <span className="text-white/85">Приеду за</span>{' '}
            <span className="text-brand-orange text-glow">30 минут</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/55 max-w-2xl mb-10 leading-relaxed"
          >
            Профессиональный автоэлектрик с выездом по всему Алматы. Диагностика, ремонт стартера, генератора, электропроводки прямо у вас на месте. Без эвакуатора.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CTAButtons size="lg" />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/8"
          >
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white leading-none mb-1">
                  {s.value}
                  <span className="text-brand-orange">{s.unit}</span>
                </div>
                <div className="text-white/45 text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-white/25 text-xs tracking-widest uppercase">Прокрутите вниз</div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-brand-orange" />
        </motion.div>
      </motion.div>
    </section>
  )
}
