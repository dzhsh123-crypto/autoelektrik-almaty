'use client'

import { motion } from 'framer-motion'

const brands = [
  'Toyota', 'BMW', 'Mercedes-Benz', 'Lexus', 'Hyundai', 'Kia',
  'Volkswagen', 'Audi', 'Honda', 'Nissan', 'Land Rover', 'Volvo',
  'Chevrolet', 'Ford', 'Mazda', 'Subaru', 'Mitsubishi', 'Infiniti',
]

export function BrandsSection() {
  const doubled = [...brands, ...brands]

  return (
    <section className="py-16 bg-dark-900 border-y border-glass-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-sm font-medium tracking-widest uppercase"
        >
          Работаю со всеми марками автомобилей
        </motion.p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="flex gap-4 w-max"
        >
          {doubled.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 px-6 py-3 glass-card rounded-xl border border-glass-border"
            >
              <span className="text-white/40 font-semibold text-sm tracking-wide whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
