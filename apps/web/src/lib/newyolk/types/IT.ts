import type { NavItem, SidebarNavItem } from './nav'
import type { LocaleOptions } from './i18n'

export interface ITConfig {
  mainNav: NavItem[]
  sidebarNav: SidebarNavItem[]
}

export interface ITPageProps {
  params: {
    slug: string[]
    locale: LocaleOptions
  }
}
