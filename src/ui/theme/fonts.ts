import { Platform } from 'react-native'

const PLATFORM_NAMES = {
  IOS: 'ios',
  ANDROID: 'android',
}

const DEFAULT_FONTS = {
  [PLATFORM_NAMES.IOS]: 'System',
  [PLATFORM_NAMES.ANDROID]: 'Roboto-Regular',
}

const fonts = {
  main: DEFAULT_FONTS[Platform.OS],
}

export default fonts
