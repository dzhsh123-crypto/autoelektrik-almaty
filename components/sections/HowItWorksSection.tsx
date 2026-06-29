'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Wrench, CheckCircle } from 'lucide-react'
import { CTAButtons } from '@/components/ui/CTAButtons'

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Звоните или пишите',
    desc: 'Расскажите о проблеме с автомобилем по телефону или в WhatsApp. Сразу скажу примерную стоимость.',
  },
  {
    num: '02',
    icon: MapPin,
    title: 'Выезжаю к вам',
    desc: 'Называете адрес — приезжаю в течение 30 минут. На месте: парковка, гараж, трасса, двор.',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Диагностика и ремонт',
    desc: 'Провожу полную диагностику, называю точную стоимость. После согласования — ремонт прямо на месте.',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Гарантия и оплата',
    desc: 'Проверяем работу вместе. Оплата только после результата. Выдаю гарантию на работы.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-orange-glow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Как это работает</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            Просто позвоните —<br />остальное сделаю я
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+2px)] w-full h-px bg-gradient-to-r from-brand-orange/30 to-transparent z-10" />
                )}

                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="font-display text-5xl font-bold text-brand-orange/15 leading-none select-none">
                      {step.num}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mt-1 shrink-0">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-14"
        >
          <CTAButtons size="lg" />
        </motion.div>
      </div>
    </section>
  )
}
