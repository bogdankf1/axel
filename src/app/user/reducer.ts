import {
  UserActionTypes,
  GetUserAction,
  GetUserSuccessAction,
  GetUserFailAction,
} from './actionTypes'
import { User } from '../../interfaces'
import { LogoutSuccessAction, AuthActionTypes } from '../auth/actionTypes'

export interface RUser {
  loading: boolean
  error: string
  userData: User
}

type UserActions = GetUserAction | GetUserSuccessAction | GetUserFailAction | LogoutSuccessAction

export const initialUser = (): RUser => ({
  loading: false,
  error: '',
  userData: {
    firstname: '',
    lastname: '',
    likedPostsIds: [],
    username: '',
  },
})

const userReducer = (state = initialUser(), action: UserActions): RUser => {
  switch (action.type) {
    case UserActionTypes.GET_USER:
      return { ...state, loading: true }
    case UserActionTypes.GET_USER_SUCCESS:
      return { ...state, loading: false, userData: action.payload.user }
    case UserActionTypes.GET_USER_FAIL:
      return { ...state, loading: false, error: action.payload.message }
    case AuthActionTypes.LOGOUT_SUCCESS:
      return initialUser()
    default:
      return state
  }
}

export default userReducer
