import type { Metadata } from 'next'
import { InnerPageLayout } from '@/components/layout/InnerPageLayout'
import { AlertTriangle, CheckCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ремонт генератора Алматы с выездом — Замена диодного моста, щёток',
  description:
    'Ремонт генератора в Алматы с выездом. Замена диодного моста, регулятора напряжения, щёток, подшипников. Диагностика зарядки аккумулятора. Выезд 30 минут. От 15 000 ₸.',
  alternates: { canonical: 'https://avtoelektrik-almaty.kz/remont-generatora-almaty' },
  openGraph: {
    title: 'Ремонт генератора Алматы — выезд, гарантия',
    description: 'Ремонт генератора на месте: диодный мост, регулятор, щётки, подшипники. Выезд по Алматы от 30 мин.',
  },
}

const symptoms = [
  'Аккумулятор садится после каждой поездки',
  'Горит лампочка аккумулятора на панели',
  'Напряжение бортовой сети ниже 13В',
  'Писк или скрип со стороны генератора',
  'Тусклый свет фар при работающем двигателе',
  'Разряженный аккумулятор после стоянки',
]

const works = [
  { title: 'Замена диодного моста', price: 'от 8 000 ₸' },
  { title: 'Замена регулятора напряжения', price: 'от 5 000 ₸' },
  { title: 'Замена щёток генератора', price: 'от 4 000 ₸' },
  { title: 'Замена подшипников', price: 'от 7 000 ₸' },
  { title: 'Перемотка обмотки ротора/статора', price: 'от 15 000 ₸' },
  { title: 'Полный ремонт генератора', price: 'от 15 000 ₸' },
]

export default function RemontGeneratoraPage() {
  return (
    <InnerPageLayout
      eyebrow="Ремонт генератора Алматы"
      title="Ремонт генератора с выездом в Алматы"
      subtitle="Диагностирую и ремонтирую генераторы прямо на месте. Замена диодного моста, регулятора напряжения, щёток, подшипников. Все марки авто. Гарантия 6 месяцев."
      breadcrumb="Ремонт генератора"
    >
      {/* Symptoms */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Симптомы неисправного генератора
          </h2>
          <p className="text-white/50 text-sm mb-8">Не игнорируйте эти признаки — разряженный аккумулятор оставит вас без машины</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {symptoms.map(s => (
              <div key={s} className="flex items-center gap-3 glass-card rounded-xl px-5 py-4">
                <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="text-white/70 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works & prices */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Виды работ и цены</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {works.map(w => (
              <div key={w.title} className="glass-card rounded-xl p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-white/80 text-sm">{w.title}</span>
                </div>
                <span className="text-brand-orange font-bold text-sm shrink-0">{w.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it's done */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Как я ремонтирую генератор</h2>
          <div className="space-y-4">
            {[
              { t: 'Диагностика зарядки', d: 'Замеряю напряжение бортовой сети, ток зарядки, проверяю ремень привода и состояние контактов.' },
              { t: 'Снятие генератора', d: 'Аккуратно снимаю генератор с двигателя, разбираю, определяю конкретную неисправность.' },
              { t: 'Замена деталей', d: 'Меняю только то, что действительно вышло из строя. Использую качественные запчасти.' },
              { t: 'Установка и проверка', d: 'Устанавливаю генератор, проверяю зарядку под нагрузкой. Напряжение в норме — работа принята.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 glass-card rounded-xl p-6">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.t}</h3>
                  <p className="text-white/50 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}
