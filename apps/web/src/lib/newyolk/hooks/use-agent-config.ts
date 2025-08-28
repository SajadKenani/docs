import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

import type { AgentConfig } from '@/lib/newyolk/types/agent'
import type { LocaleOptions } from '../types/i18n'

import { defaultLocale } from '@/config/i18n'

export function useAgentConfig() {
  const locale = useLocale() as LocaleOptions
  const currentLocale = locale || defaultLocale

  const [agentConfig, setAgentConfig] = useState<{
    currentLocale: LocaleOptions
    agent: AgentConfig
  }>({
    currentLocale,

    agent: {
      mainNav: [],
      sidebarNav: [],
    },
  })

  useEffect(() => {
    import(`@/config/agent`).then(({ agentConfig }) => {
      setAgentConfig({
        currentLocale,
        agent: agentConfig,
      })
    })
  }, [currentLocale])

  return agentConfig
}
