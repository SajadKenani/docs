import type { NavItem, SidebarNavItem } from './nav'
import type { LocaleOptions } from './i18n'

export interface ClientConfig {
  mainNav: NavItem[]
  sidebarNav: SidebarNavItem[]
}

export interface ClientPageProps {
  params: {
    slug: string[]
    locale: LocaleOptions
  }
}
