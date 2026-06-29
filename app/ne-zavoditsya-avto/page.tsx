import type { Metadata } from 'next'
import { InnerPageLayout } from '@/components/layout/InnerPageLayout'
import { AlertTriangle, CheckCircle, Zap, Phone } from 'lucide-react'
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Не заводится авто в Алматы — Выезд автоэлектрика за 30 минут',
  description:
    'Не заводится автомобиль в Алматы? Выездной автоэлектрик приедет за 30 минут. Диагностика на месте, ремонт стартера, генератора, прикурим, найдём причину. 24/7.',
  alternates: { canonical: 'https://avtoelektrik-almaty.kz/ne-zavoditsya-avto' },
  openGraph: {
    title: 'Не заводится авто в Алматы — помощь 24/7',
    description: 'Автоэлектрик с выездом за 30 минут. Найдём и устраним причину на месте.',
  },
}

const causes = [
  {
    title: 'Разряжен аккумулятор',
    desc: 'Самая частая причина. Щелчок реле, но стартер не крутит. Прикурим или заменим АКБ.',
    fix: 'Прикурить или замена АКБ',
  },
  {
    title: 'Неисправен стартер',
    desc: 'Тихий щелчок без вращения или скрип при попытке завести. Нужен ремонт стартера.',
    fix: 'Ремонт или замена стартера',
  },
  {
    title: 'Не заряжает генератор',
    desc: 'Аккумулятор садится после каждой поездки — генератор не даёт зарядку.',
    fix: 'Ремонт генератора',
  },
  {
    title: 'Проблема с иммобилайзером / сигнализацией',
    desc: 'Двигатель запускается и сразу глохнет — заблокирован электронной системой.',
    fix: 'Диагностика и отключение блокировки',
  },
  {
    title: 'Неисправность ЭБУ или датчиков',
    desc: 'Двигатель крутит, но не заводится. Компьютерная диагностика покажет причину.',
    fix: 'Диагностика и ремонт электроники',
  },
  {
    title: 'Проблемы с проводкой',
    desc: 'Обрыв или КЗ в цепи питания. Нахожу мультиметром и осциллографом.',
    fix: 'Поиск и устранение обрыва',
  },
]

const steps = [
  'Позвоните или напишите в WhatsApp — расскажите симптомы',
  'Назовите адрес — выеду в течение 30 минут',
  'Проведу диагностику — найду причину за 15–30 минут',
  'Устраню неисправность прямо на месте',
  'Проверим запуск вместе — вы убедитесь в результате',
]

export default function NeZavoditsyaPage() {
  return (
    <InnerPageLayout
      eyebrow="Не заводится авто Алматы"
      title="Не заводится машина? Приеду за 30 минут"
      subtitle="Не паникуйте — звоните. Выездной автоэлектрик найдёт причину и устранит её прямо на месте. Без эвакуатора, без ожидания в очереди. Работаю 24/7."
      breadcrumb="Не заводится авто"
    >
      {/* Emergency block */}
      <section className="py-10 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-7 border border-brand-orange/20 flex flex-col sm:flex-row gap-5 items-center">
            <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
              <Zap className="w-7 h-7 text-brand-orange" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <div className="text-brand-orange font-bold text-sm tracking-wide uppercase mb-1">Срочный вызов</div>
              <div className="font-display text-2xl font-bold text-white mb-1">Застряли прямо сейчас?</div>
              <p className="text-white/50 text-sm">Звоните — выеду немедленно в любой район Алматы</p>
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <a href={PHONE_HREF} className="px-6 py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm text-center hover:bg-brand-orange-dark transition-all flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm text-center hover:bg-[#25D366]/25 transition-all">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Почему не заводится машина
          </h2>
          <p className="text-white/50 text-sm mb-8">Определю причину на месте по симптомам и диагностике</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {causes.map((c, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">{c.desc}</p>
                <div className="flex items-center gap-2 text-xs text-brand-orange font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {c.fix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Что делать если не завелась машина</h2>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 glass-card rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-white/70 text-sm leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Что делать если не заводится машина зимой?',
                a: 'Зимой чаще всего виноват аккумулятор — на морозе он теряет ёмкость. Позвоните, приеду, прикурю или заменю АКБ. Также проверю стартер и генератор.',
              },
              {
                q: 'Можете приехать ночью?',
                a: 'Да, работаю 24/7 без выходных. Поломка не выбирает время суток — я готов выехать в любое время.',
              },
              {
                q: 'Сколько стоит вызов, если машина не заводится?',
                a: 'Стоимость зависит от причины неисправности. Прикурить — от 3 000 ₸, диагностика — от 5 000 ₸, ремонт стартера/генератора — от 15 000 ₸. Цену скажу по телефону после описания симптомов.',
              },
            ].map((faq, i) => (
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
