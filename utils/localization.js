import { Localization } from 'expo-localization'
import i18n from 'i18n-js'

// Locales
import * as en from '../locales/en-US.json'
// import * as es from '../locales/es-MX.json'

i18n.fallbacks = true
i18n.translations = { en }
i18n.locale = Localization.locale // TODO: Ckeck if user has already another locale saved.

export function getString (key, params) {
  return i18n.t(key, params)
}
