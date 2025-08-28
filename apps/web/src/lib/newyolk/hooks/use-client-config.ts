import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

import type { ClientConfig } from '@/lib/newyolk/types/client'
import type { LocaleOptions } from '../types/i18n'

import { defaultLocale } from '@/config/i18n'

export function useClientConfig() {
  const locale = useLocale() as LocaleOptions
  const currentLocale = locale || defaultLocale

  const [clientConfig, setClientConfig] = useState<{
    currentLocale: LocaleOptions
    client: ClientConfig
  }>({
    currentLocale,

    client: {
      mainNav: [],
      sidebarNav: [],
    },
  })

  useEffect(() => {
    import(`@/config/client`).then(({ clientConfig }) => {
      setClientConfig({
        currentLocale,
        client: clientConfig,
      })
    })
  }, [currentLocale])

  return clientConfig
}
