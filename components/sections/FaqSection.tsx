'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Сколько стоит выезд автоэлектрика?',
    a: 'Стоимость выезда включена в стоимость работы. Отдельно за вызов я не беру. Минимальная стоимость работ — от 3 000 ₸. Цену на конкретную услугу сообщу по телефону или WhatsApp.',
  },
  {
    q: 'Как быстро вы приедете?',
    a: 'В среднем — 20–30 минут по Алматы. В час пик или при выезде в отдалённые районы может занять до 45 минут. Всегда называю точное время до выезда.',
  },
  {
    q: 'Работаете ли вы ночью и в выходные?',
    a: 'Да, работаю круглосуточно, 7 дней в неделю, включая праздники. Автомобиль ломается не по расписанию — я это понимаю.',
  },
  {
    q: 'Можете ли вы починить автомобиль прямо на месте?',
    a: 'В 90% случаев — да. Большинство неисправностей электрики (стартер, генератор, проводка, аккумулятор, сигнализация) устраняются на выезде. Если нужна разборка в стационарных условиях — честно об этом скажу.',
  },
  {
    q: 'Даёте ли вы гарантию на работу?',
    a: 'Да. Даю гарантию на все виды работ — от 3 до 6 месяцев в зависимости от типа ремонта. Если после моего ремонта возникнет та же проблема — устраняю бесплатно.',
  },
  {
    q: 'С какими марками авто вы работаете?',
    a: 'Работаю со всеми марками: Toyota, BMW, Mercedes, Hyundai, Kia, Lexus, Volkswagen, Audi, Honda, Nissan, Land Rover, Volvo и другими — японскими, корейскими, европейскими и американскими.',
  },
  {
    q: 'Как оплатить ваши услуги?',
    a: 'Принимаю наличные и переводы на Kaspi. Оплата только после того, как убедились, что проблема решена.',
  },
  {
    q: 'Выезжаете ли вы за пределы Алматы?',
    a: 'Да, выезжаю по области — Талгар, Каскелен, Капшагай, Иле-Алатауский парк, трассы. Стоимость выезда за город обговаривается индивидуально.',
  },
]

function FaqItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-sm sm:text-base">{item.q}</span>
        <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${open ? 'bg-brand-orange text-white' : 'bg-white/5 text-white/50'}`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 text-white/55 text-sm leading-relaxed border-t border-white/6 pt-4">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Вопросы и ответы</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">Часто спрашивают</h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} item={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
