'use client'

import { Link, usePathname } from '@/navigation'
import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

interface MainNavProps {
  messages: {
    IT: string
    agent: string
    client: string
  }
}

export function MainNav({ messages }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="size-4" />

        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/client"
          className={cn(
            'hover:text-foreground/80 transition-colors',
            pathname.includes('/client')
              ? 'dark:text-primary-active'
              : 'text-foreground/60'
          )}
        >
          {messages.client}
        </Link>

        <Link
          href="/agent"
          className={cn(
            'hover:text-foreground/80 transition-colors',
            pathname.includes('/agent')
              ? 'dark:text-primary-active'
              : 'text-foreground/60'
          )}
        >
          {messages.agent}
        </Link>

                <Link
          href="/it"
          className={cn(
            'hover:text-foreground/80 transition-colors',
            pathname.includes('/it')
              ? 'dark:text-primary-active'
              : 'text-foreground/60'
          )}
        >
          {messages.IT}
        </Link>
      </nav>
    </div>
  )
}
