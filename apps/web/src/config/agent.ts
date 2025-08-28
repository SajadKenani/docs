/**
 * This file contains the configuration for the documentation
 * to be used by files like:
 * - src/components/command-menu.tsx
 * - src/components/mobile-nav.tsx
 * - src/app/[locale]/agent/layout.tsx
 * - src/lib/newyolk/components/agent/pager.tsx
 */

import type { AgentConfig } from '@/lib/newyolk/types/agent'

export const agentConfig: AgentConfig = {
  mainNav: [
    {
      href: '/agent',

      title: {
        en: 'Agent',
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
          href: '/agent',

          title: {
            en: 'Introduction',
            ar: 'مقدمة',
          },

          items: [],
        },

        {
          href: '/agent/adding-new-agent',

          title: {
            en: 'Adding new agent',
            ar: 'إضافة مستندات جديدة',
          },

          items: [],
        },

        {
          href: '/agent/customizing',

          title: {
            en: 'Customizing',
            ar: 'تخصيص',
          },

          items: [],
        },
        {
          href: '/agent/test',

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
              href: '/agent/mdx/frontmatter',

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
              href: '/agent/mdx/code',

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
              href: '/agent/mdx/components',

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
          href: '/agent/changelog',

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
