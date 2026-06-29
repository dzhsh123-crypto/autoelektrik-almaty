import type { Metadata } from 'next'
import { InnerPageLayout } from '@/components/layout/InnerPageLayout'
import { CheckCircle, Star, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Автоэлектрик Алматы с выездом — Профессиональный ремонт электрики авто',
  description:
    'Автоэлектрик Алматы — выездной специалист с опытом 7+ лет. Компьютерная диагностика, ремонт стартера, генератора, электропроводки. Выезд 30 минут, гарантия на работы.',
  alternates: { canonical: 'https://avtoelektrik-almaty.kz/avtoelektrik-almaty' },
  openGraph: {
    title: 'Автоэлектрик Алматы с выездом',
    description: 'Профессиональный выездной автоэлектрик. Диагностика, ремонт стартера, генератора. Выезд за 30 минут.',
  },
}

const services = [
  'Компьютерная диагностика всех систем',
  'Ремонт и замена стартера',
  'Ремонт и замена генератора',
  'Замена и проверка аккумулятора',
  'Ремонт электропроводки и жгутов',
  'Устранение утечки тока',
  'Ремонт системы зажигания',
  'Диагностика и ремонт сигнализации',
  'Прикурить авто — запуск с разряженным АКБ',
  'Ремонт системы освещения',
  'Подключение и диагностика ЭБУ',
  'Экстренная помощь на дороге',
]

const faqs = [
  {
    q: 'Как вызвать автоэлектрика в Алматы?',
    a: 'Позвоните или напишите в WhatsApp. Назовите адрес и опишите проблему. Приеду за 30 минут.',
  },
  {
    q: 'Сколько стоят услуги автоэлектрика?',
    a: 'Стоимость зависит от вида работы. Прикурить авто — от 3 000 ₸, диагностика — от 5 000 ₸, ремонт стартера/генератора — от 15 000 ₸.',
  },
  {
    q: 'Работаете ли вы ночью?',
    a: 'Да, работаю круглосуточно. Поломка не выбирает время — я всегда готов выехать.',
  },
]

export default function AvtoelektrikAlmatyPage() {
  return (
    <InnerPageLayout
      eyebrow="Автоэлектрик Алматы"
      title="Выездной автоэлектрик в Алматы — 7 лет опыта"
      subtitle="Приеду к вам домой, в офис, на парковку или на трассу. Диагностика и ремонт электрики любых автомобилей прямо на месте — без эвакуатора и очередей."
      breadcrumb="Автоэлектрик Алматы"
    >
      {/* Services */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Что я делаю
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map(s => (
              <div key={s} className="flex items-center gap-3 glass-card rounded-xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-white/75 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Почему клиенты выбирают меня
              </h2>
              <div className="space-y-5 text-white/60 text-sm leading-relaxed">
                <p>
                  Я частный автоэлектрик без офиса — это значит, что вы платите только за работу, без накруток за аренду помещения и зарплату менеджеров.
                </p>
                <p>
                  За 7 лет работы я починил сотни автомобилей. Toyota, BMW, Mercedes, Hyundai, Kia, Lexus, Land Rover — знаю особенности каждой марки.
                </p>
                <p>
                  Работаю с профессиональными сканерами Launch X431 и Autel MaxiSys. Это позволяет точно диагностировать проблему, не меняя детали наугад.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '7+', label: 'лет опыта', icon: Zap },
                { n: '184', label: 'клиента', icon: Star },
                { n: '4.9', label: 'рейтинг', icon: Star },
                { n: '30', label: 'мин. выезд', icon: Zap },
              ].map(item => (
                <div key={item.label} className="glass-card rounded-2xl p-6 text-center">
                  <div className="font-display text-4xl font-bold text-brand-orange mb-1">{item.n}</div>
                  <div className="text-white/40 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Вопросы и ответы</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/50 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}
