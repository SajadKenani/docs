import type { IntlMessages as Messages } from './src/lib/newyolk/types/i18n'

declare global {
  interface IntlMessages extends Messages {}

  type AbstractIntlMessages = Messages
}
