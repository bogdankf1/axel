import {
  LanguageActionTypes,
  ChangeLanguageAction,
  ChangeLanguageSuccessAction,
  ChangeLanguageFailAction,
} from './actionTypes'

export const changeLanguage = (language: string): ChangeLanguageAction => ({
  type: LanguageActionTypes.CHANGE_LANGUAGE,
  payload: {
    language,
  },
})

export const changeLanguageSuccess = (language: string): ChangeLanguageSuccessAction => ({
  type: LanguageActionTypes.CHANGE_LANGUAGE_SUCCESS,
  payload: {
    language,
  },
})

export const changeLanguageFail = (): ChangeLanguageFailAction => ({
  type: LanguageActionTypes.CHANGE_LANGUAGE_FAIL,
})
