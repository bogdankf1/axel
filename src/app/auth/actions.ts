import {
  AuthActionTypes,
  LoginAction,
  LoginTokenRetrievedAction,
  LoginSuccessAction,
  LoginFailAction,
  LogoutAction,
  LogoutSuccessAction,
  SignUpAction,
  SignUpSuccessAction,
  SignUpFailAction
} from './actionTypes'
import { AuthData } from '../../interfaces'

export interface AuthTokenParams {
  accessToken: string
  refreshToken: string
}

export const login = (authData: AuthData): LoginAction => ({
  type: AuthActionTypes.LOGIN,
  payload: {
    authData
  }
})


export const loginSuccess = (accessToken: string, refreshToken: string): LoginSuccessAction => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: {
    accessToken,
    refreshToken
  }
})

export const loginFail = (message: string): LoginFailAction => ({
  type: AuthActionTypes.LOGIN_FAIL,
  payload: {
    message
  }
})

export const loginTokenRetrieved = (params: AuthTokenParams): LoginTokenRetrievedAction => ({
  type: AuthActionTypes.LOGIN_TOKEN_RETRIEVED,
  payload: {
    ...params
  }
})

export const logout = (): LogoutAction => ({type: AuthActionTypes.LOGOUT})

export const logoutSuccess = (): LogoutSuccessAction => ({type: AuthActionTypes.LOGOUT_SUCCESS})

export const signUp = (
  firstName: string,
  lastName: string,
  password: string,
  username: string
): SignUpAction => ({
  type: AuthActionTypes.SIGN_UP,
  payload: {
    firstName,
    lastName,
    password,
    username
  }
})

export const signUpSuccess = (username: string, password: string): SignUpSuccessAction => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  payload: {
    username,
    password
  }
})

export const signUpFail = (message: string): SignUpFailAction => ({
  type: AuthActionTypes.SIGN_UP_FAIL,
  payload: {
    message
  }
})
