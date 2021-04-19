import { AuthData } from '../../interfaces'

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGOUT = 'LOGOUT',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGIN_TOKEN_RETRIEVED = 'TOKEN_RETRIEVED',
  SIGN_UP = 'SIGN_UP',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = 'SIGN_UP_FAIL'
}

export interface LoginAction {
  type: AuthActionTypes.LOGIN
  payload: {
    authData: AuthData
  }
}


export interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS
  payload: {
    accessToken: string
    refreshToken: string
  }
}

export interface LoginFailAction {
  type: AuthActionTypes.LOGIN_FAIL
  payload: {
    message: string
  }
}

export interface LoginTokenRetrievedAction {
  type: AuthActionTypes.LOGIN_TOKEN_RETRIEVED
  payload: {
    accessToken: string
    refreshToken: string
  }
}

export interface LogoutAction {
  type: AuthActionTypes.LOGOUT
}

export interface LogoutSuccessAction {
  type: AuthActionTypes.LOGOUT_SUCCESS
}

export interface SignUpAction {
  type: AuthActionTypes.SIGN_UP
  payload: {
    username: string
    firstName: string
    lastName: string
    password: string
  }
}

export interface SignUpSuccessAction {
  type: AuthActionTypes.SIGN_UP_SUCCESS
  payload: {
    username: string
    password: string
  }
}

export interface SignUpFailAction {
  type: AuthActionTypes.SIGN_UP_FAIL
  payload: {
    message: string
  }
}
