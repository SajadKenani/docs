import type { CodeThemeConfig } from '@/lib/newyolk/types/code-theme'

export const localCodeThemes = ['Aura Theme'] as const

export const codeThemeConfig: CodeThemeConfig = {
  theme: localCodeThemes[0],
  localThemes: localCodeThemes,

  languages: ['txt', 'json', 'bash', 'diff', 'markdown', 'typescript'],
} as const
