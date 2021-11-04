import { Epic } from 'redux-observable'
import { LanguageActionTypes } from './actionTypes'
import StorageService from '../app/StorageService'
import { getLanguage } from './utils'
import { setLanguage } from 'redux-polyglot'
import translations from './translations/languages'
import { changeLanguageSuccess, changeLanguageFail } from './actions'
// import { asyncConcat } from '../../utils/epicHelpers'
import { mergeMap } from 'rxjs/operators'

export const changeLanguage: Epic = action$ => {
  return action$.ofType(LanguageActionTypes.CHANGE_LANGUAGE).pipe(
    mergeMap(async () => {
      const lang = await getLanguage()
      const newLanguage = lang === 'ua' ? 'en' : 'ua'

      try {
        StorageService.persist('language', newLanguage)
        return changeLanguageSuccess()
      } catch (e) {
        return changeLanguageFail()
      }
    }),
  )
}

export const changeLanguageSuccessEpic: Epic = action$ => {
  return action$.ofType(LanguageActionTypes.CHANGE_LANGUAGE_SUCCESS).pipe(
    mergeMap(async () => {
      const lang = await getLanguage()
      const newLanguage = lang === 'ua' ? 'en' : 'ua'
      return setLanguage(newLanguage, translations[newLanguage])
    }),
  )
}

export default [changeLanguage, changeLanguageSuccessEpic]
