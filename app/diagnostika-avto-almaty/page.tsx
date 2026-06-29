import type { Metadata } from 'next'
import { InnerPageLayout } from '@/components/layout/InnerPageLayout'
import { CheckCircle, AlertTriangle, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Компьютерная диагностика авто в Алматы — Выезд к вам',
  description:
    'Компьютерная диагностика автомобиля в Алматы с выездом. Профессиональные сканеры Launch и Autel. Считываю коды ошибок, определяю причину неисправности. От 5 000 ₸.',
  alternates: { canonical: 'https://avtoelektrik-almaty.kz/diagnostika-avto-almaty' },
  openGraph: {
    title: 'Диагностика авто Алматы с выездом | от 5 000 ₸',
    description: 'Компьютерная диагностика всех систем автомобиля. Выезд по Алматы 30 минут. Сканеры Launch X431, Autel MaxiSys.',
  },
}

const symptoms = [
  'Горит лампочка Check Engine',
  'Двигатель троит или работает нестабильно',
  'Повышенный расход топлива',
  'Ошибки на приборной панели',
  'Проблемы с АКПП — дёргается, буксует',
  'Неработающий кондиционер или климат-контроль',
  'Проблемы с ABS, ESP, TCS',
  'Подушки безопасности (SRS) не сбрасываются',
]

const systems = [
  { name: 'Двигатель (EMS)', desc: 'Датчики, форсунки, дроссель, катушки' },
  { name: 'АКПП / DSG', desc: 'Режимы, адаптации, фрикционы, соленоиды' },
  { name: 'ABS / ESP / TCS', desc: 'Датчики скорости, гидроблок, ЭБУ' },
  { name: 'SRS (подушки)', desc: 'Блок управления, пиропатроны, ремни' },
  { name: 'Климат-контроль', desc: 'Компрессор, датчики температуры, заслонки' },
  { name: 'Электрооборудование', desc: 'Предохранители, реле, блоки управления' },
]

export default function DiagnostikaPage() {
  return (
    <InnerPageLayout
      eyebrow="Диагностика авто Алматы"
      title="Компьютерная диагностика с выездом к вам"
      subtitle="Профессиональная диагностика всех систем автомобиля с выездом по Алматы. Сканеры Launch X431 и Autel MaxiSys. Точно нахожу причину — не меняю детали наугад. От 5 000 ₸."
      breadcrumb="Диагностика авто"
    >
      {/* When needed */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Когда нужна диагностика?
          </h2>
          <p className="text-white/50 text-sm mb-8">Если заметили хотя бы один из этих симптомов — звоните</p>
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

      {/* Systems */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Какие системы диагностирую
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {systems.map(sys => (
              <div key={sys.name} className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="font-semibold text-white mb-1">{sys.name}</h3>
                <p className="text-white/45 text-sm">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Как проходит диагностика</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Подключаю сканер', text: 'Подключаю Launch X431 или Autel MaxiSys к диагностическому разъёму (OBD-II) вашего авто.' },
              { step: '2', title: 'Считываю ошибки', text: 'Сканирую все блоки управления — не только двигатель, но и АКПП, ABS, SRS, климат.' },
              { step: '3', title: 'Анализирую данные', text: 'Смотрю живые данные с датчиков, сравниваю с нормой. Определяю точную причину неисправности.' },
              { step: '4', title: 'Объясняю и ремонтирую', text: 'Рассказываю, что найдено и что нужно сделать. После согласования — устраняю прямо на месте.' },
            ].map(item => (
              <div key={item.step} className="flex gap-5 glass-card rounded-xl p-6">
                <div className="font-display text-3xl font-bold text-brand-orange/25 shrink-0 leading-none">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 border border-brand-orange/15">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Стоимость диагностики</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-brand-orange/5 rounded-xl p-5">
                <div className="text-white/50 text-sm mb-1">Базовая диагностика</div>
                <div className="font-display text-3xl font-bold text-brand-orange">от 5 000 ₸</div>
                <div className="text-white/35 text-xs mt-1">Считывание ошибок</div>
              </div>
              <div className="bg-white/3 rounded-xl p-5">
                <div className="text-white/50 text-sm mb-1">Полная диагностика</div>
                <div className="font-display text-3xl font-bold text-white">от 10 000 ₸</div>
                <div className="text-white/35 text-xs mt-1">Все системы + анализ</div>
              </div>
            </div>
            <p className="text-white/35 text-xs mt-4">* При выполнении ремонта стоимость диагностики засчитывается в счёт работ</p>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}
