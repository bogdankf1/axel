import translations from './translations/languages'
import StorageService from '../app/StorageService'

export async function getLanguage() {
  const storeLanguage = await StorageService.read('language')
  const language = storeLanguage || 'ua'
  return translations[language] ? language : 'ua'
}
