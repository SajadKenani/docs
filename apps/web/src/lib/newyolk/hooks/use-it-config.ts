import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

import type { ITConfig } from '@/lib/newyolk/types/IT'
import type { LocaleOptions } from '../types/i18n'

import { defaultLocale } from '@/config/i18n'

export function useITConfig() {
  const locale = useLocale() as LocaleOptions
  const currentLocale = locale || defaultLocale

  const [ITConfig, setITConfig] = useState<{
    currentLocale: LocaleOptions
    IT: ITConfig
  }>({
    currentLocale,

    IT: {
      mainNav: [],
      sidebarNav: [],
    },
  })

  useEffect(() => {
    import(`@/config/it`).then(({ itConfig }) => {
      setITConfig({
        currentLocale,
        IT: itConfig,
      })
    })
  }, [currentLocale])

  return ITConfig
}
