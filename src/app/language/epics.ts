import { Epic } from 'redux-observable'
import {
  LanguageActionTypes
} from './actionTypes'
import StorageService from '../app/StorageService'
import { getLanguage } from './utils'
import { setLanguage } from 'redux-polyglot'
import translations from './translations/languages'
import { changeLanguageSuccess, changeLanguageFail } from './actions'
import { asyncConcat } from '../../utils/epicHelpers'

// export const changeLanguage: Epic = (action$) => {
//   return action$.ofType(LanguageActionTypes.CHANGE_LANGUAGE)
//     .mergeMap(async () => {
//       const lang = await getLanguage()
//       const newLanguage = lang === 'ar' ? 'en' : 'ar'

//       try {
//         StorageService.persist('language', newLanguage)
//         return [setLanguage(newLanguage, translations[newLanguage]), changeLanguageSuccess()]
//       } catch (e) {
//         return [changeLanguageFail()]
//       }
//     })
//     .mergeMap(asyncConcat)
// }

export default [
  // changeLanguage
]
