import { defaultLocale } from '@/config/i18n'

import type { LocaleOptions } from '../types/i18n'

interface ServerITConfig {
  locale: LocaleOptions
}

export async function getServerITConfig({ locale }: ServerITConfig) {
  const { itConfig } = await import(`@/config/it`)

  return {
    it: itConfig,
    currentLocale: locale || defaultLocale,
  }
}
