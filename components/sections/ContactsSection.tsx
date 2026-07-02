'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Clock, MapPin, Zap } from 'lucide-react'
import { PHONE, PHONE_HREF, WHATSAPP_NUMBER, WHATSAPP_HREF } from '@/lib/utils'

const districts = [
  'Алмалинский', 'Бостандыкский', 'Медеуский',
  'Ауэзовский', 'Алатауский', 'Жетысуский', 'Турксибский',
]

export function ContactsSection() {
  return (
    <section id="contacts" className="py-24 sm:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Контакты</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">Свяжитесь со мной</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact cards */}
          <div className="space-y-4">
            <motion.a
              href={PHONE_HREF}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-5 glass-card rounded-2xl p-6 group hover:border-brand-orange/25 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 transition-all">
                <Phone className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <div className="text-white/50 text-sm mb-1">Телефон / SMS</div>
                <div className="font-display font-bold text-white text-2xl">{PHONE}</div>
                <div className="text-white/30 text-xs mt-1">Нажмите для звонка</div>
              </div>
            </motion.a>

            <motion.a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex items-center gap-5 glass-card rounded-2xl p-6 group hover:border-[#25D366]/25 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-all">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <div className="text-white/50 text-sm mb-1">WhatsApp</div>
                <div className="font-display font-bold text-white text-2xl">{WHATSAPP_NUMBER}</div>
                <div className="text-white/30 text-xs mt-1">Напишите — отвечу быстро</div>
              </div>
            </motion.a>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-2xl p-5"
              >
                <Clock className="w-6 h-6 text-brand-orange mb-3" />
                <div className="text-white font-semibold mb-1">Режим работы</div>
                <div className="text-white/50 text-sm">Круглосуточно<br />7 дней в неделю</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="glass-card rounded-2xl p-5"
              >
                <Zap className="w-6 h-6 text-brand-orange mb-3" />
                <div className="text-white font-semibold mb-1">Выезд</div>
                <div className="text-white/50 text-sm">30 минут<br />по Алматы</div>
              </motion.div>
            </div>
          </div>

          {/* Coverage area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <h3 className="font-display font-bold text-white text-xl">Зона выезда</h3>
            </div>

            <p className="text-white/50 text-sm mb-6">
              Выезжаю по всем районам Алматы и ближайшей области. Нет офиса — работаю мобильно, значит экономлю ваше время.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {districts.map(d => (
                <div key={d} className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  {d} р-н
                </div>
              ))}
            </div>

            <div className="border-t border-white/8 pt-5">
              <p className="text-white/35 text-xs leading-relaxed">
                Также выезжаю за город: Талгар, Каскелен, Капшагай, Узынагаш, трассы Алматы–Бишкек и Алматы–Астана.
              </p>
            </div>

            {/* Stylized map hint */}
            <div className="mt-5 rounded-xl bg-dark-800 border border-white/5 h-32 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-2 animate-bounce" />
                <p className="text-white/30 text-xs">Алматы, Казахстан</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
