import {
  GetUserAction,
  UserActionTypes,
  GetUserSuccessAction,
  GetUserFailAction
} from './actionTypes'
import { User } from '../../interfaces'

export const getUser = (accessToken: string): GetUserAction => ({
  type: UserActionTypes.GET_USER,
  payload: {
    accessToken
  }
})
export const getUserSuccess = (user: User): GetUserSuccessAction => ({
  type: UserActionTypes.GET_USER_SUCCESS,
  payload: {
    user
  }
})
export const getUserFail = (message: string): GetUserFailAction => ({
  type: UserActionTypes.GET_USER_FAIL,
  payload: {
    message
  }
})
