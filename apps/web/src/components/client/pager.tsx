import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

import type { NavItem, NavItemWithChildren } from '@/lib/newyolk/types/nav'
import type { LocaleOptions } from '@/lib/newyolk/types/i18n'
import type { allClients } from 'contentlayer/generated'

import {
  getSlugWithoutLocale,
  getObjectValueByLocale,
} from '@/lib/newyolk/utils/locale'

import { getServerClientConfig } from '@/lib/newyolk/utils/get-server-client-config'
import { buttonVariants } from '../ui/button'
import { Link } from '@/navigation'
import { cn } from '@/lib/utils'

interface DocsPagerProps {
  doc: typeof allClients[0]
  locale: LocaleOptions
}

export async function DocsPager({ doc, locale }: DocsPagerProps) {
  const pager = await getPagerForCurrentDoc({
    doc,
    locale,
  })

  if (!pager) {
    return null
  }

  if (locale === "en") {
    return (
      <div className="flex flex-row items-center justify-between">
        {pager?.prev?.href && (
          <Link
            href={pager.prev.href}
            className={buttonVariants({ variant: 'outline' })}
          >
            <ChevronLeftIcon className="mr-2 size-4" />
            {getObjectValueByLocale(pager.prev.title, pager.currentLocale)}
          </Link>
        )}
        {pager?.next?.href && (
          <Link
            href={pager.next.href}
            className={cn(buttonVariants({ variant: 'outline' }), 'ml-auto')}
          >
            {getObjectValueByLocale(pager.next.title, pager.currentLocale)}
            <ChevronRightIcon className="ml-2 size-4" />
          </Link>
        )}
      </div>
    )
  } else {
    return (
      <div className="flex flex-row items-center justify-between">
        {pager?.next?.href && (
          <Link
            href={pager.next.href}
            className={cn(buttonVariants({ variant: 'outline' }), 'ml-auto')}
          >
            <ChevronRightIcon className="ml-2 size-4" />
            {getObjectValueByLocale(pager.next.title, pager.currentLocale)}
          </Link>
        )}
        {pager?.prev?.href && (
          <Link
            href={pager.prev.href}
            className={buttonVariants({ variant: 'outline' })}
          >
            {getObjectValueByLocale(pager.prev.title, pager.currentLocale)}
            <ChevronLeftIcon className="mr-2 size-4" />
          </Link>
        )}
      </div>
    )
  }
}

export async function getPagerForCurrentDoc({
  doc,
  locale,
}: {
  doc: typeof allClients[0]
  locale: LocaleOptions
}) {
  const clientConfig = await getServerClientConfig({ locale })
  const flattenedLinks = [null, ...flatten(clientConfig.client.sidebarNav), null]

  const slugWithoutLocaleFolder = getSlugWithoutLocale(doc.slug, 'client')

  const activeIndex = flattenedLinks.findIndex(
    (link) => slugWithoutLocaleFolder === link?.href
  )

  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null

  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null

  return {
    prev,
    next,
    currentLocale: clientConfig.currentLocale,
  }
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return [
        ...flat,
        ...(link.href ? [link] : []),
        ...(link.items?.length > 0 ? flatten(link.items) : []),
      ]
    }, [])
    .filter((link) => !link?.disabled)
}
