import type { NavItem, SidebarNavItem } from '../types/nav'
import type { ClientPageProps } from '../types/client'
import { allClients } from 'contentlayer/generated'
import { getSlugWithoutLocale } from './locale'
import { defaultLocale } from '@/config/i18n'
import { clientConfig } from '@/config/client'

export function makeLocalizedSlug({ locale, slug }: ClientPageProps['params']) {
  const _slug = slug?.join('/')
  const _locale = locale || defaultLocale

  const localizedSlug = [_locale, _slug].filter(Boolean).join('/')

  return localizedSlug
}

export async function getClientFromParams({
  params,
}: ClientPageProps): Promise<
  ((typeof allClients)[0] & { notAvailable: boolean }) | null
> {
  let localizedSlug = makeLocalizedSlug(params)
  let doc = allClients.find((doc) => doc.slugAsParams === localizedSlug)

  if (!doc) {
    localizedSlug = makeLocalizedSlug({
      ...params,
      locale: defaultLocale,
    })

    doc = allClients.find((doc) => doc.slugAsParams === localizedSlug)

    return doc ? { ...doc, notAvailable: true } : null
  }

  return { ...doc, notAvailable: false }
}

export function getBreadcrumb(docSlug: string) {
  const slug = getSlugWithoutLocale(docSlug, 'docs')

  const findBreadcrumbPath = (
    items: SidebarNavItem[],
    slug: string,
    path: SidebarNavItem[] = []
  ): NavItem[] | null => {
    for (const item of items) {
      const newPath = [...path, item]

      if (item.href === slug) {
        return newPath
      }

      if (item.items) {
        const foundPath = findBreadcrumbPath(item.items, slug, newPath)

        if (foundPath) {
          return foundPath
        }
      }
    }

    return null
  }

  const makeBreadcrumb = (slug: string, config: any): NavItem[] | null => {
    for (const nav of config.sidebarNav) {
      const path = findBreadcrumbPath([nav], slug)

      if (path) {
        return path
      }
    }

    return null
  }

  const breadcrumbs = makeBreadcrumb(slug, clientConfig)

  return breadcrumbs || []
}
