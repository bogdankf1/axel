// import { AppScreens } from './../../navigation/routes'
import { Epic } from 'redux-observable'
import {
  AuthActionTypes,
  LoginAction,
  LoginTokenRetrievedAction,
  SignUpAction,
  SignUpSuccessAction,
  LoginSuccessAction,
} from './actionTypes'
import {
  loginSuccess,
  loginFail,
  logoutSuccess,
  loginTokenRetrieved,
  signUpSuccess,
  signUpFail,
  login,
} from './actions'

import { setAccessToken, setRefreshToken, revoke } from './AuthService'
import * as NavigationService from '../../navigation/NavigationService'
import registerApi from '../../api/register'
import loginApi from '../../api/login'
import { mergeMap } from 'rxjs/operators'
import StorageService from '../app/StorageService'
import { getUser } from '../user/actions'
import client from '../../api/client'
import { SCREEN_NAMES } from '../../navigation/AppNavigator.constants'

export const loginEpic: Epic = action$ => {
  return action$.ofType(AuthActionTypes.LOGIN).pipe(
    mergeMap(async (action: LoginAction) => {
      try {
        const { authData } = action.payload
        // const response = await obtainAccessToken(action.payload.authData)
        const response = await loginApi.signIn(authData.username, authData.password)
        const tokenParams = {
          accessToken: response.data.data,
          refreshToken: response.data.data,
        }
        StorageService.persist('token', tokenParams)
        setAccessToken(tokenParams.accessToken)
        setRefreshToken(tokenParams.refreshToken)
        NavigationService.navigate(SCREEN_NAMES.HOME)
        return loginSuccess(tokenParams.accessToken, tokenParams.refreshToken)
      } catch (e) {
        return loginFail(e.response.data.message)
      }
    }),
  )
}

export const loginSuccessEpic: Epic = action$ => {
  return action$.ofType(AuthActionTypes.LOGIN_SUCCESS).pipe(
    mergeMap(async (action: LoginSuccessAction) => {
      const { accessToken, refreshToken } = action.payload
      return loginTokenRetrieved({ accessToken, refreshToken })
    }),
  )
}

export const loadUserOnLoginSuccessEpic: Epic = action$ => {
  return action$.ofType(AuthActionTypes.LOGIN_SUCCESS).pipe(
    mergeMap(async (action: LoginSuccessAction) => {
      const { accessToken } = action.payload
      return getUser(accessToken)
    }),
  )
}

export const authTokenRetrieved: Epic = action$ => {
  return action$.ofType(AuthActionTypes.LOGIN_TOKEN_RETRIEVED).pipe(
    mergeMap(async (action: LoginTokenRetrievedAction) => {
      const { accessToken } = action.payload
      client.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${accessToken}`

        return config
      })
      return getUser(accessToken)
    }),
  )
}

export const logout: Epic = action$ => {
  return action$.ofType(AuthActionTypes.LOGOUT).pipe(
    mergeMap(async () => {
      revoke()
      NavigationService.navigate(SCREEN_NAMES.LOGIN)
      return logoutSuccess()
    }),
  )
}

// export const onLogin: Epic = (action$) => {
//   return action$.ofType(AuthActionTypes.LOGIN_SUCCESS)
//   .pipe(flatMap(action =>
//     Observable.concat(
//       // Observable.of(getUser())
//     )
//   ))
// }

export const onSignUp: Epic = action$ => {
  return action$.ofType(AuthActionTypes.SIGN_UP).pipe(
    mergeMap(async (action: SignUpAction) => {
      try {
        const { firstName, lastName, password, username } = action.payload
        await registerApi.signUp(username, firstName, lastName, password)
        return signUpSuccess(username, password)
      } catch (e) {
        return signUpFail(e.response.data.message)
      }
    }),
  )
  // .mergeMap(asyncConcat)
}

export const onSuccessSignUp: Epic = action$ => {
  return action$.ofType(AuthActionTypes.SIGN_UP_SUCCESS).pipe(
    mergeMap(async (action: SignUpSuccessAction) => {
      const { username, password } = action.payload

      return login({ username, password })
    }),
  )
  // .mergeMap(asyncConcat)
}

export default [
  loginEpic,
  authTokenRetrieved,
  logout,
  // onLogin,
  onSignUp,
  onSuccessSignUp,
  loadUserOnLoginSuccessEpic,
]
