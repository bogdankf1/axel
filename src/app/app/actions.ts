import {
  AppActionTypes,
  AppReadyAction,
  AppStartupAction
} from './actionTypes'

export const startup = (): AppStartupAction => ({ type: AppActionTypes.STARTUP })

export const ready = (): AppReadyAction => ({ type: AppActionTypes.APP_READY })
