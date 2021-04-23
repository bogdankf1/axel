import translations from './translations/languages'
import StorageService from '../app/StorageService'

export async function getLanguage() {
  const storeLanguage = await StorageService.read('language')
  const language = storeLanguage || 'en'
  return translations[language] ? language : 'en'
}
