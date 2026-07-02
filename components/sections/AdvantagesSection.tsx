'use client'

import { motion } from 'framer-motion'
import { Award, Car, MapPin, ShieldCheck, Timer, Wrench } from 'lucide-react'

const advantages = [
  {
    icon: Award,
    title: 'Опыт 10+ лет',
    desc: 'Работал в официальных дилерских центрах. Знаю особенности всех современных авто.',
    color: 'from-yellow-500/20 to-orange-500/10',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Car,
    title: 'Все марки авто',
    desc: 'Toyota, BMW, Mercedes, Hyundai, Kia, Lexus, Land Rover — работаю с любыми марками и моделями.',
    color: 'from-blue-500/20 to-cyan-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: MapPin,
    title: 'Выезд по всему Алматы',
    desc: 'Приеду в любой район города и области. Без офиса — сразу к вам на место поломки.',
    color: 'from-brand-orange/20 to-red-500/10',
    iconColor: 'text-brand-orange',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия на работы',
    desc: 'Даю письменную гарантию на все выполненные работы. Уверен в качестве своей работы.',
    color: 'from-green-500/20 to-emerald-500/10',
    iconColor: 'text-green-400',
  },
  {
    icon: Timer,
    title: 'Выезд за 30 минут',
    desc: 'Всегда в готовности. Выезжаю сразу после вашего звонка — машина с оборудованием наготове.',
    color: 'from-purple-500/20 to-violet-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: Wrench,
    title: 'Проф. оборудование',
    desc: 'Работаю с профессиональными сканерами Launch и Autel. Мультиметры, осциллографы, стенды.',
    color: 'from-pink-500/20 to-rose-500/10',
    iconColor: 'text-pink-400',
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-24 sm:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Почему выбирают меня</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            Преимущества, которые<br />важны вам
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((adv, i) => {
            const Icon = adv.icon
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="relative glass-card rounded-2xl p-7 overflow-hidden group hover:border-white/10 transition-all duration-300"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${adv.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${adv.iconColor}`} />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">{adv.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
