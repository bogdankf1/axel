import { createGetP } from 'redux-polyglot'
import { RootState, translateFunction } from '../../interfaces'

export const translateFunctionSelector = (state: RootState): translateFunction =>
  createGetP({})(state).t

export const currentLanguageSelector = (state: RootState): string => state.polyglot.locale || 'en'
