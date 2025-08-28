import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'

import { ThemeModeToggle } from '@/components/theme-mode-toggle'
import { Separator } from '@/components/ui/separator'
import { VersionDropdown } from './version-dropdown'
import { MainNav } from '@/components/main-nav'
import { I18nToggle } from './i18n-toggle'

const CommandMenu = dynamic(() =>
  import('@/components/command-menu').then((mod) => mod.CommandMenu)
)

export async function SiteHeader() {
  const t = await getTranslations('site')

  return (
    <header className={'sticky top-0 z-50 w-full backdrop-blur'}>
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav
          messages={{
            client: t('words.client'),
            agent: t('words.agent'),
            IT: t('words.IT'),
          }}
        />

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu
              messages={{
                client: t('words.client'),
                agent: t('words.agent'),
                IT: t('words.IT'),
                search: t('search.search'),
                noResultsFound: t('search.no_results_found'),
                typeCommandOrSearch: t('search.type_command_or_search'),
                searchDocumentation: t('search.search_documentation'),

                themes: {
                  dark: t('themes.dark'),
                  theme: t('themes.theme'),
                  light: t('themes.light'),
                  system: t('themes.system'),
                },
              }}
            />
          </div>

          <nav className="flex items-center">
            <VersionDropdown
              messages={{
                changelog: t('changelog'),
              }}
            />

            <I18nToggle
              messages={{
                toggleLanguage: t('buttons.toggle_language'),
              }}
            />

            <ThemeModeToggle
              messages={{
                dark: t('themes.dark'),
                light: t('themes.light'),
                system: t('themes.system'),
              }}
            />

            <div className="phone:flex hidden items-center">
              <Separator orientation="vertical" className="mx-1 h-5" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

