import Link from 'next/link'
import { Phone, MessageCircle, Zap, Clock, MapPin } from 'lucide-react'
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/lib/utils'

const services = [
  { label: 'Компьютерная диагностика', href: '/diagnostika-avto-almaty' },
  { label: 'Ремонт генератора', href: '/remont-generatora-almaty' },
  { label: 'Ремонт стартера', href: '/remont-startera-almaty' },
  { label: 'Не заводится авто', href: '/ne-zavoditsya-avto' },
  { label: 'Прикурить авто', href: '/prikurit-avto' },
  { label: 'Автоэлектрик Алматы', href: '/avtoelektrik-almaty' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">АвтоЭлектрик</div>
                <div className="text-brand-orange text-xs font-medium tracking-widest uppercase">Алматы</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Профессиональный выездной автоэлектрик. Диагностика и ремонт электрики любых автомобилей.
            </p>
            <div className="flex gap-3">
              <a
                href={PHONE_HREF}
                className="w-10 h-10 rounded-lg bg-brand-orange/15 border border-brand-orange/25 flex items-center justify-center text-brand-orange hover:bg-brand-orange/25 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#25D366]/15 border border-[#25D366]/25 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Услуги</h3>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/50 hover:text-brand-orange text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <a href={PHONE_HREF} className="text-white font-semibold hover:text-brand-orange transition-colors">{PHONE}</a>
                  <p className="text-white/40 text-xs mt-0.5">Звонки и SMS</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MessageCircle className="w-4 h-4 text-[#25D366] mt-0.5 shrink-0" />
                <div>
                  <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#25D366] transition-colors">WhatsApp</a>
                  <p className="text-white/40 text-xs mt-0.5">Быстрый ответ</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Алматы и область</p>
                  <p className="text-white/40 text-xs mt-0.5">Выезд по всему городу</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">24 часа в сутки</p>
                  <p className="text-white/40 text-xs mt-0.5">7 дней в неделю</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Срочный вызов</h3>
            <div className="glass-card rounded-xl p-5 border border-brand-orange/15">
              <p className="text-white/60 text-sm mb-4">Сломалась машина? Выедем в течение 30 минут в любой район Алматы.</p>
              <a
                href={PHONE_HREF}
                className="block w-full py-3 rounded-xl bg-brand-orange text-white text-center font-semibold text-sm hover:bg-brand-orange-dark transition-all mb-2"
              >
                Позвонить сейчас
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] text-center font-semibold text-sm hover:bg-[#25D366]/25 transition-all"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>© {year} Автоэлектрик Алматы. Все права защищены.</p>
          <p>Выездной автоэлектрик — работаем 24/7 по Алматы</p>
        </div>
      </div>
    </footer>
  )
}
