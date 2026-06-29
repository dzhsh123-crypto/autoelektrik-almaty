'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X, Zap } from 'lucide-react'
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/lib/utils'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Как работаем', href: '#how-it-works' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-xl border-b border-glass-border'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center shadow-orange-sm group-hover:shadow-orange-glow transition-all">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="leading-none">
              <div className="font-display font-700 text-white text-base tracking-tight">АвтоЭлектрик</div>
              <div className="text-brand-orange text-xs font-500 tracking-widest uppercase">Алматы</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/25 transition-all"
            >
              WhatsApp
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange-dark transition-all shadow-orange-sm hover:shadow-orange-glow"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white"
            aria-label="Меню"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-b border-glass-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-white/10">
              <a href={PHONE_HREF} className="flex-1 py-3 rounded-xl bg-brand-orange text-white text-center font-semibold text-sm">
                Позвонить
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-xl bg-[#25D366] text-white text-center font-semibold text-sm">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
