import { User } from '../../interfaces'

export enum UserActionTypes {
  GET_USER = 'GET_USER',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_FAIL = 'GET_USER_FAIL'
}

export interface GetUserAction {
  type: UserActionTypes.GET_USER
  payload: {
    accessToken: string
  }
}
export interface GetUserSuccessAction {
  type: UserActionTypes.GET_USER_SUCCESS
  payload: {
    user: User
  }
}
export interface GetUserFailAction {
  type: UserActionTypes.GET_USER_FAIL
  payload: {
    message: string
  }
}
