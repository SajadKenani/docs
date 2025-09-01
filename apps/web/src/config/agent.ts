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
        ar: 'بدأ الان',
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
          href: '/agent/getting-started',

          title: {
            en: 'Getting Started',
            ar: 'هيا نبدأ',
          },

          items: [],
        },

        {
          href: '/agent/dashboard-overview',

          title: {
            en: 'Dashboard Overview',
            ar: 'تخصيص',
          },

          items: [],
        },
        {
          href: '/agent/features-for-agents',

          title: {
            en: 'Features For Agents',
            ar: 'خصائص للعملاء',
          },

          items: [],
        },
        {
          href: '/agent/daily-overflow',

          title: {
            en: 'Daily Overflow',
            ar: 'المهام اليومية',
          },

          items: [],
        },
        {
          href: '/agent/troubleshooting',

          title: {
            en: 'Troubleshooting',
            ar: 'مشاكل',
          },

          items: [],
        },
        {
          href: '/agent/faq',

          title: {
            en: 'FAQ',
            ar: 'الاسئلة المتكررة',
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
