/**
 * This file contains the configuration for the documentation
 * to be used by files like:
 * - src/components/command-menu.tsx
 * - src/components/mobile-nav.tsx
 * - src/app/[locale]/docs/layout.tsx
 * - src/lib/newyolk/components/docs/pager.tsx
 */

import type { DocsConfig } from '@/lib/newyolk/types/docs'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      href: '/docs',

      title: {
        en: 'Documentation',
        ar: 'التوثيق',
      },
    },
  ],

  sidebarNav: [
    {
      title: {
        en: 'Getting Started',
        ar: 'البدء',
      },

      items: [
        {
          href: '/docs',

          title: {
            en: 'Introduction',
            ar: 'مقدمة',
          },

          items: [],
        },

        {
          href: '/docs/adding-new-docs',

          title: {
            en: 'Adding new docs',
            ar: 'إضافة مستندات جديدة',
          },

          items: [],
        },

        {
          href: '/docs/customizing',

          title: {
            en: 'Customizing',
            ar: 'تخصيص',
          },

          items: [],
        },
        {
          href: '/docs/test',

          title: {
            en: 'Testing',
            ar: 'اختبار',
          },

          items: [],
        },

        {
          title: {
            en: 'MDX',
          },

          label: {
            en: 'New',
            ar: 'Novo',
          },

          items: [
            {
              href: '/docs/mdx/frontmatter',

              title: {
                en: 'Frontmatter',
                ar: 'رأس البيانات',
              },

              label: {
                en: 'New',
                ar: 'جديد',
              },

              items: [],
            },

            {
              href: '/docs/mdx/code',

              title: {
                en: 'Code',
                ar: 'رمز',
              },

              label: {
                en: 'New',
                ar: 'جديد',
              },

              items: [],
            },

            {
              href: '/docs/mdx/components',

              title: {
                en: 'Components',
                ar: 'المكونات',
              },

              label: {
                en: 'New',
                ar: 'جديد',
              },

              items: [],
            },
          ],
        },

        {
          href: '/docs/changelog',

          title: {
            en: 'Changelog',
            ar: 'سجل التغييرات',
          },

          items: [],
        },
      ],
    },
  ],
} as const
