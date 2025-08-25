import { getTranslations } from 'next-intl/server'

import { siteConfig } from '@/config/site'
import { LocaleOptions } from '@/lib/newyolk/types/i18n'

export async function SiteFooter({ params }: { params: { locale: LocaleOptions } }) {
  const t = await getTranslations('site.footer')

  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        {params.locale === 'en' ? (
          <p className="text-muted-foreground text-balance text-center text-sm leading-loose md:text-left">
            {t('created_by')}{' '}
            <a
              href={siteConfig.author.site}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.author.name}
            </a>
          </p>
        ) : (
          <p className="text-muted-foreground text-balance text-center text-sm leading-loose md:text-left">
            <a
              href={siteConfig.author.site}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.author.name}
            </a>
            {' '}{t('created_by')}
          </p>
        )}
      </div>
    </footer>
  )
}
