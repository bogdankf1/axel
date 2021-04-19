export enum AppActionTypes {
  STARTUP = 'STARTUP',
  APP_READY = 'APP_READY'
}

export interface AppReadyAction {
  type: AppActionTypes.APP_READY
}

export interface AppStartupAction {
  type: AppActionTypes.STARTUP
}

export type AppActions =
  AppReadyAction |
  AppStartupAction
