import type { Metadata } from 'next'
import { InnerPageLayout } from '@/components/layout/InnerPageLayout'
import { CheckCircle, AlertTriangle, BatteryCharging } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Прикурить авто в Алматы — Выезд за 30 минут, 24/7',
  description:
    'Прикурить авто в Алматы — выездной автоэлектрик за 30 минут. Безопасный запуск с разряженным аккумулятором. Проверим состояние АКБ и генератора. От 3 000 ₸.',
  alternates: { canonical: 'https://avtoelektrik-almaty.kz/prikurit-avto' },
  openGraph: {
    title: 'Прикурить авто Алматы — 24/7, выезд 30 мин',
    description: 'Безопасный запуск разряженного авто в Алматы. Выезд за 30 минут, от 3 000 ₸.',
  },
}

const steps = [
  {
    title: 'Проверяю аккумулятор',
    desc: 'Перед подключением замеряю напряжение АКБ. Если аккумулятор «мёртвый» — предупрежу, что прикуривание не поможет.',
  },
  {
    title: 'Правильное подключение',
    desc: 'Подключаю профессиональный пусковой прибор. Соблюдаю полярность — ничего не спалю в электронике вашего авто.',
  },
  {
    title: 'Запуск двигателя',
    desc: 'После запуска даю двигателю поработать несколько минут для начальной зарядки аккумулятора.',
  },
  {
    title: 'Диагностика зарядки',
    desc: 'Проверяю генератор — даёт ли он зарядку. Если нет — скажу об этом честно, чтобы вы не снова не оказались на улице.',
  },
]

const tips = [
  'Если свет фар потускнел — аккумулятор начинает садиться',
  'Двигатель стал запускаться медленнее — проверьте АКБ',
  'Зимой заряжайте аккумулятор раз в месяц при редком использовании',
  'Средний срок службы аккумулятора — 3–5 лет',
  'Если АКБ садится часто — виноват генератор или утечка тока',
]

export default function PrikuritAvtoPage() {
  return (
    <InnerPageLayout
      eyebrow="Прикурить авто Алматы"
      title="Прикурить авто в Алматы — выезд за 30 минут"
      subtitle="Разрядился аккумулятор? Приеду и запущу автомобиль безопасно, с профессиональным пусковым устройством. Не спалю электронику. Работаю 24/7 по всему Алматы."
      breadcrumb="Прикурить авто"
    >
      {/* Price block */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-card rounded-2xl p-6 border border-brand-orange/20 text-center">
              <BatteryCharging className="w-8 h-8 text-brand-orange mx-auto mb-3" />
              <div className="text-white/50 text-sm mb-1">Прикурить авто</div>
              <div className="font-display text-3xl font-bold text-brand-orange">от 3 000 ₸</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-8 h-8 rounded-lg bg-blue-400/10 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-white/50 text-sm mb-1">Проверка АКБ и генератора</div>
              <div className="font-display text-3xl font-bold text-white">Бесплатно</div>
              <div className="text-white/30 text-xs mt-1">при вызове</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-8 h-8 rounded-lg bg-green-400/10 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-white/50 text-sm mb-1">Замена аккумулятора</div>
              <div className="font-display text-3xl font-bold text-white">от 5 000 ₸</div>
              <div className="text-white/30 text-xs mt-1">работа + подбор АКБ</div>
            </div>
          </div>
        </div>
      </section>

      {/* How */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Как я прикуриваю авто</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5 glass-card rounded-xl p-6">
                <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-white/50 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why not DIY */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Почему нельзя прикуривать от другой машины самому
          </h2>
          <p className="text-white/50 text-sm mb-8 max-w-2xl">
            Современные автомобили оснащены сложной электроникой. Неправильное подключение проводов-«крокодилов» может вызвать:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              'Сгоревший блок управления (ЭБУ)',
              'Выход из строя генератора донора',
              'Повреждение системы зарядки',
              'Короткое замыкание в бортовой сети',
              'Срабатывание подушек безопасности',
              'Потеря данных климата, магнитолы, АКПП',
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-3 glass-card rounded-xl px-5 py-3.5">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-white/65 text-sm">{r}</span>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-xl p-6 border border-green-400/15">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <p className="text-white/65 text-sm">
                Я использую профессиональный пусковой прибор с защитой от переполюсовки и перенапряжения. Никакого риска для электроники вашего автомобиля.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Полезные советы по аккумулятору
          </h2>
          <div className="space-y-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 glass-card rounded-xl px-5 py-4">
                <div className="w-5 h-5 rounded-full bg-brand-orange/15 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                </div>
                <span className="text-white/60 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}
