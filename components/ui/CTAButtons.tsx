'use client'

import { cn, PHONE_HREF, WHATSAPP_HREF, PHONE } from '@/lib/utils'
import { Phone, MessageCircle } from 'lucide-react'

interface CTAButtonsProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  layout?: 'row' | 'col'
}

export function CTAButtons({ className, size = 'md', layout = 'row' }: CTAButtonsProps) {
  const sizeClasses = {
    sm: 'px-4 py-2.5 text-sm gap-2',
    md: 'px-6 py-3.5 text-base gap-2.5',
    lg: 'px-8 py-4 text-lg gap-3',
  }

  return (
    <div
      className={cn(
        'flex flex-wrap',
        layout === 'col' ? 'flex-col' : 'flex-row',
        'gap-3',
        className,
      )}
    >
      <a
        href={PHONE_HREF}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-xl',
          'bg-brand-orange hover:bg-brand-orange-dark',
          'text-white transition-all duration-200',
          'shadow-orange-glow hover:shadow-[0_0_50px_rgba(249,115,22,0.4)]',
          'active:scale-95',
          sizeClasses[size],
        )}
      >
        <Phone className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
        <span>Позвонить</span>
      </a>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-xl',
          'bg-[#25D366] hover:bg-[#1FB856]',
          'text-white transition-all duration-200',
          'shadow-[0_0_30px_rgba(37,211,102,0.2)] hover:shadow-[0_0_50px_rgba(37,211,102,0.35)]',
          'active:scale-95',
          sizeClasses[size],
        )}
      >
        <MessageCircle className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:hidden">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] active:scale-95 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
      <a
        href={PHONE_HREF}
        className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center shadow-orange-glow active:scale-95 transition-transform"
        aria-label="Позвонить"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  )
}
