import {
  AppActions,
  AppActionTypes
} from './actionTypes'

export interface RApp {
  ready: boolean
}

export const initialApp = (): RApp => ({
  ready: false
})

const appReducer = (state =  initialApp(), action: AppActions): RApp => {
  switch (action.type) {
    case AppActionTypes.APP_READY:
      return { ...state, ready: true }
    default:
      return state
  }

}

export default appReducer
