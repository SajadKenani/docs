import { defaultLocale } from '@/config/i18n'

import type { LocaleOptions } from '../types/i18n'

interface ServerClientConfig {
  locale: LocaleOptions
}

export async function getServerClientConfig({ locale }: ServerClientConfig) {
  const { clientConfig } = await import(`@/config/client`)

  return {
    client: clientConfig,
    currentLocale: locale || defaultLocale,
  }
}
