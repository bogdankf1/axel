import AsyncStorage from '@react-native-community/async-storage'

export type StorageKeys = 'token' | 'language'

type AnySet<Type_> = Type_ extends undefined ? never : Type_

/**
 *
 * @param key
 * @param data any defined value. not undefiend
 */
export const persist = <T>(key: StorageKeys, data: AnySet<T>): Promise<void> => {
  return AsyncStorage.setItem(key, JSON.stringify(data))
}

export const read = <T extends any = any>(key: StorageKeys): Promise<T | undefined> => {
  return AsyncStorage.getItem(key)
    .then((data) => data ? JSON.parse(data) : undefined)
    .catch((e) => {
      throw e
    })
}

export const remove = (key: StorageKeys): Promise<void> => AsyncStorage.removeItem(key)

export default {
  persist,
  read,
  remove
}
