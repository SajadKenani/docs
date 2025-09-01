/**
 * This file contains the configuration for the documentation
 * to be used by files like:
 * - src/components/command-menu.tsx
 * - src/components/mobile-nav.tsx
 * - src/app/[locale]/it/layout.tsx
 * - src/lib/newyolk/components/it/pager.tsx
 */

import type { ITConfig } from '@/lib/newyolk/types/IT'

export const itConfig: ITConfig = {
  mainNav: [
    {
      href: '/it',

      title: {
        en: 'IT',
        ar: 'تكنولوجيا المعلومات',
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
          href: '/it',

          title: {
            en: 'Introduction',
            ar: 'مقدمة',
          },

          items: [],
        },

        {
          href: '/it/adding-new-it',

          title: {
            en: 'Adding new it',
            ar: 'إضافة مستندات جديدة',
          },

          items: [],
        },

        {
          href: '/it/customizing',

          title: {
            en: 'Customizing',
            ar: 'تخصيص',
          },

          items: [],
        },
        {
          href: '/it/test',

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
              href: '/it/mdx/frontmatter',

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
              href: '/it/mdx/code',

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
              href: '/it/mdx/components',

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
          href: '/it/changelog',

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
