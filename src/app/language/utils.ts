import translations from './translations/languages'
import DeviceInfo from 'react-native-device-info'
import StorageService from '../app/StorageService'

export async function getLanguage() {
  const storeLanguage = await StorageService.read('language')
  const language = storeLanguage || DeviceInfo.getDeviceLocale().slice(0, 2)
  return translations[language] ? language : 'ar'
}