import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PHONE = '+7 (701) 113-36-65'
export const PHONE_HREF = 'tel:+77011133665'
export const WHATSAPP_HREF = 'https://wa.me/77071112530?text=Здравствуйте!%20Мне%20нужна%20помощь%20автоэлектрика.'
export const WHATSAPP_NUMBER = '+7 (707) 111-25-30'
