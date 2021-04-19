import { createGetP } from 'redux-polyglot'
import { RootState, translateFunction } from '../../interfaces'

export const translateFunctionSelector = (state: RootState): translateFunction => createGetP({})(state).t

export const isArabicSelector = (state: RootState): boolean => state.polyglot.locale === 'ar'
