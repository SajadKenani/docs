import type { Locales, LocalizedRecord } from '@/lib/newyolk/types/i18n'

export const defaultLocale = 'en' as const

export const locale = {
  en: defaultLocale,
  ar: 'ar',
} as const

export const labels = {
  [defaultLocale]: 'English',
  [locale.ar]: 'Arabic',
} as const

export const dateLocales: LocalizedRecord = {
  en: 'en-US',
  ar: 'ar-IQ',
} as const

export const locales = Object.values(locale) as Locales
