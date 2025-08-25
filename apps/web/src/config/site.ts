import { absoluteUrl } from '@/lib/utils'
import en from '@/i18n/locales/en.json'
import ar from '@/i18n/locales/ar.json'

export const siteConfig = {
  name: 'newyolk',

  description: {
    en: en.site.description,
    ar: ar.site.description,
  },

  url: process.env.NEXT_PUBLIC_APP_URL,

  og: {
    image: absoluteUrl('/og.jpg'),

    size: {
      width: 1200,
      height: 630,
    },
  },

  app: {
    latestVersion: '3.0.8',
  },

  author: {
    name: 'NewYolk',
    site: 'https://farm.newyolk.io/',
  },
} as const

export type SiteConfig = typeof siteConfig
