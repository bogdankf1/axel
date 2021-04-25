export enum LanguageActionTypes {
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
  CHANGE_LANGUAGE_SUCCESS = 'CHANGE_LANGUAGE_SUCCESS',
  CHANGE_LANGUAGE_FAIL = 'CHANGE_LANGUAGE_FAIL',
}

export interface ChangeLanguageAction {
  type: LanguageActionTypes.CHANGE_LANGUAGE
  payload: {
    language: string
  }
}

export interface ChangeLanguageSuccessAction {
  type: LanguageActionTypes.CHANGE_LANGUAGE_SUCCESS
  payload: {
    language: string
  }
}

export interface ChangeLanguageFailAction {
  type: LanguageActionTypes.CHANGE_LANGUAGE_FAIL
}
