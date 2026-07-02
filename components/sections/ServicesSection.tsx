'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Cpu, Battery, BatteryCharging, Settings, Zap, Cable, AlertTriangle, Shield, Truck
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Cpu,
    title: 'Компьютерная диагностика',
    desc: 'Считываю коды ошибок профессиональным сканером. Точно определю причину неисправности.',
    href: '/diagnostika-avto-almaty',
    price: 'от 10 000 ₸',
    highlight: false,
  },
  {
    icon: BatteryCharging,
    title: 'Прикурить авто',
    desc: 'Запущу автомобиль с разряженным аккумулятором. Выезд по Алматы — быстро и безопасно.',
    href: '/prikurit-avto',
    price: 'от 10 000 ₸',
    highlight: false,
  },
  {
    icon: Battery,
    title: 'Замена аккумулятора',
    desc: 'Подберу и установлю аккумулятор под вашу машину. Проверка генератора в подарок.',
    href: '#contacts',
    price: 'от 5 000 ₸',
    highlight: false,
  },
  {
    icon: Settings,
    title: 'Ремонт стартера',
    desc: 'Диагностика и ремонт стартера прямо на месте. Замена щёток, втягивающего реле.',
    href: '/remont-startera-almaty',
    price: 'от 15 000 ₸',
    highlight: true,
  },
  {
    icon: Zap,
    title: 'Ремонт генератора',
    desc: 'Восстановлю заряд аккумулятора — замена диодного моста, регулятора, подшипников.',
    href: '/remont-generatora-almaty',
    price: 'от 15 000 ₸',
    highlight: false,
  },
  {
    icon: Cable,
    title: 'Ремонт электропроводки',
    desc: 'Нахожу и устраняю обрывы, КЗ, восстанавливаю жгуты. Работаю с любыми авто.',
    href: '#contacts',
    price: 'от 8 000 ₸',
    highlight: false,
  },
  {
    icon: AlertTriangle,
    title: 'Диагностика электрики',
    desc: 'Проверю всё электрооборудование: предохранители, реле, датчики, блоки управления.',
    href: '#contacts',
    price: 'от 10 000 ₸',
    highlight: false,
  },
  {
    icon: Shield,
    title: 'Устранение сигнализации',
    desc: 'Ложные срабатывания, не открывается, заблокировало двигатель — разберусь на месте.',
    href: '#contacts',
    price: 'от 5 000 ₸',
    highlight: false,
  },
  {
    icon: Truck,
    title: 'Экстренный выезд',
    desc: 'Застряли на трассе или в незнакомом месте? Выеду в любой район Алматы и области.',
    href: '/ne-zavoditsya-avto',
    price: 'от 10 000 ₸',
    highlight: false,
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`relative glass-card glass-card-hover rounded-2xl p-6 flex flex-col ${
        service.highlight ? 'border-brand-orange/30 shadow-orange-sm' : ''
      }`}
    >
      {service.highlight && (
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold tracking-wide">
          Популярно
        </div>
      )}
      <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-brand-orange" />
      </div>
      <h3 className="font-display font-semibold text-white text-lg mb-2 leading-snug">{service.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">{service.desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-brand-orange font-bold text-base">{service.price}</span>
        <Link
          href={service.href}
          className="text-sm text-white/40 hover:text-brand-orange transition-colors font-medium"
        >
          Подробнее →
        </Link>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Услуги</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Решу любую проблему с электрикой автомобиля
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
