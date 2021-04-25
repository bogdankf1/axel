import { Epic } from 'redux-observable'
import { LanguageActionTypes } from './actionTypes'
import StorageService from '../app/StorageService'
import { setLanguage } from 'redux-polyglot'
import translations from './translations/languages'
import { changeLanguageSuccess, changeLanguageFail } from './actions'
import { mergeMap } from 'rxjs/operators'

export const changeLanguage: Epic = action$ => {
  return action$.ofType(LanguageActionTypes.CHANGE_LANGUAGE).pipe(
    mergeMap(async action => {
      try {
        StorageService.persist('language', action.payload.language)
        return changeLanguageSuccess(action.payload.language)
      } catch (e) {
        return changeLanguageFail()
      }
    }),
  )
}

export const changeLanguageSuccessEpic: Epic = action$ => {
  return action$.ofType(LanguageActionTypes.CHANGE_LANGUAGE_SUCCESS).pipe(
    mergeMap(async action => {
      return setLanguage(action.payload.language, translations[action.payload.language])
    }),
  )
}

export default [changeLanguage, changeLanguageSuccessEpic]
