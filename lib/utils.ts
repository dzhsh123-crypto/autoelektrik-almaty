import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PHONE = '+7 (777) 123-45-67'
export const PHONE_HREF = 'tel:+77771234567'
export const WHATSAPP_HREF = 'https://wa.me/77771234567?text=Здравствуйте!%20Мне%20нужна%20помощь%20автоэлектрика.'
export const WHATSAPP_NUMBER = '77771234567'
