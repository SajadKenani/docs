import { getTranslations, setRequestLocale } from 'next-intl/server'
import { FeaturedCard } from '@/components/featured-card'
import type { LocaleOptions } from '@/lib/newyolk/types/i18n'
import { PageHeaderHeading } from '@/components/page-header'
import { FlipWords } from '@/components/ui/flip-words'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

export default async function IndexPage({
  params,
}: {
  params: { locale: LocaleOptions }
}) {
  setRequestLocale(params.locale)
  const t = await getTranslations()
  return (
    <div className="container relative mt-20">
      <PageHeaderHeading>
        <FlipWords
          words={['Client', 'Agent', 'IT']}
          className="text-9xl -z-10"
        />
        <TextGenerateEffect words={t('site.heading')} />
      </PageHeaderHeading>
      <section className="flex flex-col gap-4 mt-20">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
          <FeaturedCard
            icon="🧬"
            title="Next.js"
            description={t('site.featured_cards.nextjs.description')}
          />
          <FeaturedCard
            icon="⚡️"
            title="Shadcn"
            description={t('site.featured_cards.shadcn.description')}
          />
          <FeaturedCard
            icon="🚀"
            title="Tailwind"
            description={t('site.featured_cards.tailwind.description')}
          />
          <FeaturedCard
            icon="🌍"
            title="i18n"
            description={t('site.featured_cards.i18n.description')}
          />
        </div>
        <FeaturedCard
          icon="+"
          orientation="horizontal"
          title={t('site.featured_cards.more.title')}
          description={t('site.featured_cards.more.description')}
        />
      </section>
    </div>
  )
}