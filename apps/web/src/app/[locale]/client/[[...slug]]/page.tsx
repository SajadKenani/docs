import { getTranslations, setRequestLocale } from 'next-intl/server'

import type { LocaleOptions } from '@/lib/newyolk/types/i18n'
import type { Metadata } from 'next'

import '@/styles/mdx.css'

import { DashboardTableOfContents } from '@/components/client/toc'
import { DocumentNotFound } from '@/components/client/not-found'
import { getTableOfContents } from '@/lib/newyolk/utils/toc'
import { DocBreadcrumb } from '@/components/client/breadcrumb'
import { getClientFromParams } from '@/lib/newyolk/utils/client'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ClientPageProps } from '@/lib/newyolk/types/client'
import { DocHeading } from '@/components/client/heading'
import { DocsPager } from '@/components/client/pager'
import { DocLinks } from '@/components/client/links'
import { defaultLocale } from '@/config/i18n'
import { Mdx } from '@/components/client/mdx'
import { siteConfig } from '@/config/site'
import { absoluteUrl } from '@/lib/utils'

export const dynamicParams = true

export async function generateMetadata({
  params,
}: ClientPageProps): Promise<Metadata> {
  const locale = params.locale

  setRequestLocale(locale || defaultLocale)

  const doc = await getClientFromParams({ params })

  if (!doc) {
    return {}
  }

  const [, ...docSlugList] = doc.slugAsParams.split('/')
  const docSlug = docSlugList.join('/') || ''

  return {
    title: doc.title,
    description: doc.description,

    openGraph: {
      type: 'article',
      title: doc.title,
      url: absoluteUrl(`/${locale}/docs/${docSlug}`),
      description: doc.description,

      images: [
        {
          ...siteConfig.og.size,
          url: siteConfig.og.image,
          alt: siteConfig.name,
        },
      ],
    },
  }
}



export default async function DocPage({ params }: ClientPageProps) {
  setRequestLocale(params.locale || defaultLocale)

  const doc = await getClientFromParams({ params })
  const t = await getTranslations('docs')

  if (!doc) {
    return (
      <DocumentNotFound
        messages={{
          title: t('not_found.title'),
          description: t('not_found.description'),
        }}
      />
    )
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocBreadcrumb
          doc={doc}
          messages={{
            docs: t('docs'),
          }}
        />

        <DocHeading doc={doc} locale={params.locale} />
        <DocLinks doc={doc} />

        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>

        <DocsPager doc={doc} locale={params.locale} />
      </div>

      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-fit py-12">
                <DashboardTableOfContents
                  toc={toc}
                  sourceFilePath={doc._raw.sourceFilePath}
                  messages={{
                    onThisPage: t('on_this_page'),
                    editPageOnGitHub: t('edit_page_on_github'),
                    startDiscussionOnGitHub: t('start_discussion_on_github'),
                  }}
                />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
