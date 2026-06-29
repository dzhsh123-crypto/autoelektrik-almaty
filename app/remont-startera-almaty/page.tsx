import type { Metadata } from 'next'
import { InnerPageLayout } from '@/components/layout/InnerPageLayout'
import { AlertTriangle, CheckCircle, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ремонт стартера Алматы с выездом — Замена щёток, втягивающего реле',
  description:
    'Ремонт стартера в Алматы с выездом к вам. Замена щёток, втягивающего реле, бендикса, обмоток. Диагностика проблемы с запуском двигателя. Выезд 30 минут, гарантия.',
  alternates: { canonical: 'https://avtoelektrik-almaty.kz/remont-startera-almaty' },
}

const symptoms = [
  'Щелчок при повороте ключа, но двигатель не крутит',
  'Стартер крутит медленно или с пробуксовкой',
  'Скрежет при запуске двигателя',
  'Стартер не выключается после запуска',
  'Двигатель вращается медленно даже с заряженным АКБ',
  'Щелчок втягивающего реле без вращения',
]

const works = [
  { title: 'Замена щёток стартера', price: 'от 5 000 ₸' },
  { title: 'Замена втягивающего реле', price: 'от 8 000 ₸' },
  { title: 'Замена бендикса (муфты)', price: 'от 8 000 ₸' },
  { title: 'Перемотка обмотки', price: 'от 12 000 ₸' },
  { title: 'Замена коллектора', price: 'от 7 000 ₸' },
  { title: 'Полный ремонт стартера', price: 'от 15 000 ₸' },
]

export default function RemontStarteraPage() {
  return (
    <InnerPageLayout
      eyebrow="Ремонт стартера Алматы"
      title="Ремонт стартера с выездом в Алматы"
      subtitle="Стартер щёлкает, но не крутит? Двигатель запускается медленно? Приеду к вам и устраню проблему прямо на месте. Гарантия 6 месяцев. Все марки авто."
      breadcrumb="Ремонт стартера"
    >
      <section className="py-20 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Признаки неисправности стартера
          </h2>
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

      <section className="py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Почему стартер ломается</h2>
          <div className="space-y-4">
            {[
              { t: 'Износ щёток', d: 'Наиболее частая причина. Щётки истираются со временем и перестают обеспечивать контакт с коллектором.' },
              { t: 'Неисправное втягивающее реле', d: 'Реле не подаёт питание на стартер или не выдвигает бендикс. Слышен щелчок без вращения.' },
              { t: 'Износ бендикса', d: 'Муфта пробуксовывает, двигатель не заводится или слышен скрежет при запуске.' },
              { t: 'Разрушение обмоток', d: 'Из-за перегрева или влаги межвитковое замыкание — стартер потребляет ток, но не вращается.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 glass-card rounded-xl p-6">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Settings className="w-4 h-4 text-brand-orange" />
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
