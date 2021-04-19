import {
    ChangeLanguageAction,
    LanguageActionTypes,
    ChangeLanguageSuccessAction,
    ChangeLanguageFailAction
} from './actionTypes'

export const changeLanguage = (): ChangeLanguageAction => ({
    type: LanguageActionTypes.CHANGE_LANGUAGE
})

export const changeLanguageSuccess = (): ChangeLanguageSuccessAction => ({
    type: LanguageActionTypes.CHANGE_LANGUAGE_SUCCESS
})

export const changeLanguageFail = (): ChangeLanguageFailAction => ({
    type: LanguageActionTypes.CHANGE_LANGUAGE_FAIL
})
