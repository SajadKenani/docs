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
    name: 'Dalton Menezes',
    site: 'https://daltonmenezes.com',
  },

  links: {
    twitter: {
      label: 'Twitter',
      username: '@daltonmenezes',
      url: 'https://twitter.com/daltonmenezes',
    },

    github: {
      label: 'GitHub',
      url: 'https://github.com/daltonmenezes/newyolk',
    },
  },
} as const

export type SiteConfig = typeof siteConfig
