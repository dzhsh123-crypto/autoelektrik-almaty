'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Алибек Д.',
    car: 'Toyota Camry 2019',
    rating: 5,
    text: 'Машина не завелась утром перед важной встречей. Позвонил, приехал за 25 минут. Оказался дохлый стартер — поменял прямо во дворе. Работает идеально. Цена адекватная, мастер объяснил всё понятно.',
    district: 'Бостандыкский р-н',
    date: 'Март 2025',
  },
  {
    name: 'Сауле К.',
    car: 'Hyundai Tucson 2021',
    rating: 5,
    text: 'Загорелся чек, машина начала дёргаться. Другие сервисы звали к ним — а тут приехали сами. Диагностика показала проблему с датчиком. Заменили за 40 минут. Чек пропал, всё в порядке!',
    district: 'Алмалинский р-н',
    date: 'Февраль 2025',
  },
  {
    name: 'Дмитрий Р.',
    car: 'BMW 5-Series 2017',
    rating: 5,
    text: 'Генератор умер прямо в дороге. Приехал на трассу Алматы-Капшагай — нашёл и починил. Заменил диодный мост, проверил ремень. Дал гарантию 6 месяцев. Очень профессиональный мастер.',
    district: 'Выезд за город',
    date: 'Январь 2025',
  },
  {
    name: 'Нуржан А.',
    car: 'Kia Sportage 2020',
    rating: 5,
    text: 'Сигнализация заблокировала двигатель ночью — не мог никуда уехать. Приехал за 20 минут, разобрался с проблемой за полчаса. Ни одного лишнего вопроса, всё чётко и по делу.',
    district: 'Ауэзовский р-н',
    date: 'Декабрь 2024',
  },
  {
    name: 'Асель М.',
    car: 'Lexus RX 2018',
    rating: 5,
    text: 'Разрядился аккумулятор — помог прикурить и протестировал всю систему. Выяснилось, что была утечка тока. Нашёл и устранил причину. Теперь аккумулятор держит заряд отлично.',
    district: 'Медеуский р-н',
    date: 'Ноябрь 2024',
  },
  {
    name: 'Ернар С.',
    car: 'Mercedes C-Class 2016',
    rating: 5,
    text: 'Рекомендую! Не першый раз обращаюсь. Всегда приезжает быстро, объясняет что и почему, не завышает цены. На Мерседесах разбирается отлично — даже дилер не смог найти утечку, а этот мастер нашёл.',
    district: 'Турксибский р-н',
    date: 'Октябрь 2024',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Отзывы клиентов</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Что говорят<br />мои клиенты
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-white">4.9</div>
              <Stars count={5} />
              <div className="text-white/40 text-xs mt-1">184 отзыва</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4"
            >
              <Quote className="w-7 h-7 text-brand-orange/30" />
              <p className="text-white/65 text-sm leading-relaxed flex-1">{review.text}</p>
              <div className="pt-3 border-t border-white/6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-white/35 text-xs mt-0.5">{review.car}</div>
                  </div>
                  <div className="text-right">
                    <Stars count={review.rating} />
                    <div className="text-white/30 text-xs mt-1">{review.date}</div>
                  </div>
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/30">
                  <span>📍</span>
                  {review.district}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
