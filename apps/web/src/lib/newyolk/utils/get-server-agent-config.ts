import { defaultLocale } from '@/config/i18n'

import type { LocaleOptions } from '../types/i18n'

interface ServerAgentConfig {
  locale: LocaleOptions
}

export async function getServerAgentConfig({ locale }: ServerAgentConfig) {
  const { agentConfig } = await import(`@/config/agent`)

  return {
    agent: agentConfig,
    currentLocale: locale || defaultLocale,
  }
}
