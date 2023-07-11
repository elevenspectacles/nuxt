import en from './en'
import bg from './bg'

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    ...en,
    ...bg
  },
}))