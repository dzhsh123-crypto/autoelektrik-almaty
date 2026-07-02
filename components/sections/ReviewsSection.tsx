'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Ержан Д.',
    rating: 5,
    text: 'Обращаюсь к этому мастеру уже на протяжении 10 лет. Всегда быстро и грамотно решает проблему с авто.',
    district: 'Бостандыкский р-н',
    date: 'Март 2025',
  },
  {
    name: 'Сергей К.',
    rating: 5,
    text: 'Сломался ночью на трассе Алматы-Кордай. Приехал быстро. Нашел проблему и устранил за минут 40. Спасибо.',
    district: 'Выезд за город',
    date: 'Февраль 2025',
  },
  {
    name: 'Абай Р.',
    rating: 5,
    text: 'Машина стояла больше месяца. Не смогли разобраться. Давид разобрался за один день.',
    district: 'Алмалинский район',
    date: 'Январь 2025',
  },
  {
    name: 'Серик А.',
    rating: 5,
    text: 'Встала машина прям в пробке. Приехал. Помог подвинуть на обочину. Решил проблему и я поехал дальше',
    district: 'Ауэзовский р-н',
    date: 'Декабрь 2024',
  },
  {
    name: 'Андрей М.',
    rating: 5,
    text: 'Полностью поменял проводку. Сделал как с завода. Работает качественно и на совесть ',
    district: 'Медеуский р-н',
    date: 'Ноябрь 2024',
  },
  {
    name: 'Нурлан С.',
    rating: 5,
    text: 'Сломался в горном пансионате. Многие отказались ехать туда из-за плохой дороги. Давид приехал. Оказалось слетел иммобилайзер. Снял то что нужно. Поехал прописал и обратно вернулся. Поставил все на место. Завёл машину.',
    district: 'Выезд за город',
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
