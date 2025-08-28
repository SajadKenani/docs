import type { NavItem, SidebarNavItem } from './nav'
import type { LocaleOptions } from './i18n'

export interface AgentConfig {
  mainNav: NavItem[]
  sidebarNav: SidebarNavItem[]
}

export interface AgentPageProps {
  params: {
    slug: string[]
    locale: LocaleOptions
  }
}
