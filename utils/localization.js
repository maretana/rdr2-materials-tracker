import { Localization } from 'expo-localization'
import i18n from 'i18n-js'

// Locales
import * as en from '../locales/en-US.json'
// import * as es from '../locales/es-MX.json'

i18n.fallbacks = true
i18n.translations = { en }
i18n.locale = Localization.locale // TODO: Ckeck if user has already another locale saved.

/**
 * Gets the localized string according to the configured locale
 * @param  {String} key    route of the string in the locale file.
 * @param  {Object} params Params of the i18n-js library. @see {@link https://github.com/fnando/i18n-js}
 * @return {String}        The localized string
 */
export function getString (key, params) {
  return i18n.t(key, params)
}

export function sortMaterialsList (materialsList) {
  return materialsList.sort((a, b) => {
    return getString(a.name).localeCompare(getString(b.name), i18n.locale)
  })
}
