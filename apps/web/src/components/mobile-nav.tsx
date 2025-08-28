'use client'

import { useState } from 'react'

import {
  Sheet,
  SheetTitle,
  SheetTrigger,
  SheetContent,
} from '@/components/ui/sheet'

import { getObjectValueByLocale } from '@/lib/newyolk/utils/locale'
import { useClientConfig } from '@/lib/newyolk/hooks/use-client-config'
import { AgentSidebarNav } from './agent/sidebar-nav'
import { ScrollArea } from './ui/scroll-area'
import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { MobileLink } from './mobile-link'
import { clientConfig } from '@/config/client'
import { usePathname } from '@/navigation'
import { Button } from './ui/button'

interface MobileNavProps {
  menuLinks: JSX.Element

  messages: {
    menu: string
    toggleMenu: string
  }
}

export function MobileNav({ messages, menuLinks }: MobileNavProps) {
  const pathname = usePathname()
  const clientConfig = useClientConfig()
  const [open, setOpen] = useState(false)

  const shouldDisplayDocsSidebarContent = pathname.startsWith('/docs')

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.menu className="size-5" />
          <span className="sr-only">${messages.toggleMenu}</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="pr-0">
        <SheetTitle className="sr-only">{messages.menu}</SheetTitle>

        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.logo className="mr-2 size-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>

        {menuLinks && (
          <div className="flex phone:hidden flex-col space-y-2 items-end pr-2">
            {menuLinks}
          </div>
        )}

        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {clientConfig.client.mainNav?.map((item) => (
              <MobileLink key={item.href} href="/blog" onOpenChange={setOpen}>
                {getObjectValueByLocale(item.title, clientConfig.currentLocale)}
              </MobileLink>
            ))}

            {clientConfig.client.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {getObjectValueByLocale(
                      item.title,
                      clientConfig.currentLocale
                    )}
                  </MobileLink>
                )
            )}
          </div>

          <div className="flex flex-col space-y-2">
            {shouldDisplayDocsSidebarContent && (
              <AgentSidebarNav
                isMobile
                locale={clientConfig.currentLocale}
                items={clientConfig.client.sidebarNav}
                handleMobileSidebar={setOpen}
              />
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
