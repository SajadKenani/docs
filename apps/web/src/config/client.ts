/**
 * This file contains the configuration for the documentation
 * to be used by files like:
 * - src/components/command-menu.tsx
 * - src/components/mobile-nav.tsx
 * - src/app/[locale]/Client/layout.tsx
 * - src/lib/newyolk/components/Client/pager.tsx
 */

import type { ClientConfig } from '@/lib/newyolk/types/client'

export const clientConfig: ClientConfig = {
  mainNav: [
    {
      href: '/client',

      title: {
        en: 'Client',
        ar: 'العميل',
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
          href: '/Client',

          title: {
            en: 'Introduction',
            ar: 'مقدمة',
          },

          items: [],
        },

        {
          href: '/Client/adding-new-Client',

          title: {
            en: 'Adding new Client',
            ar: 'إضافة مستندات جديدة',
          },

          items: [],
        },

        {
          href: '/Client/customizing',

          title: {
            en: 'Customizing',
            ar: 'تخصيص',
          },

          items: [],
        },
        {
          href: '/Client/test',

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
              href: '/Client/mdx/frontmatter',

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
              href: '/Client/mdx/code',

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
              href: '/Client/mdx/components',

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
          href: '/Client/changelog',

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
