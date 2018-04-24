import { AsyncStorage } from 'react-native'

export const KEY_USER_TOKEN = 'KEYUSERTOKEN'

export function save({key, value}) {
  return AsyncStorage.setItem(key, value)
}

export function get({key}) {
  return AsyncStorage.getItem(key)
}

export function remove({key}) {
  return AsyncStorage.removeItem(key)
}
