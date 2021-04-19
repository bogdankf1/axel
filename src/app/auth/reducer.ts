import {
  AuthActionTypes,
  LoginAction,
  LoginSuccessAction,
  LoginFailAction,
  LogoutAction,
  LogoutSuccessAction,
  LoginTokenRetrievedAction,
  SignUpAction,
  SignUpFailAction,
  SignUpSuccessAction
} from './actionTypes'
// import userReducer from './user/reducer'

export interface RAuth {
  loggedIn: boolean
  loading: boolean
  accessToken: string
  refreshToken: string
  loginError: string
  registerError: string
}

type AuthActions =
  LoginAction |
  LoginSuccessAction |
  LoginFailAction |
  LogoutAction |
  LogoutSuccessAction |
  LoginTokenRetrievedAction |
  SignUpAction |
  SignUpSuccessAction |
  SignUpFailAction

export const initialAuth = (): RAuth => ({
  loggedIn: false,
  loading: false,
  accessToken: '',
  refreshToken: '',
  loginError: '',
  registerError: ''
})

const authReducer = (state =  initialAuth(), action: AuthActions): RAuth => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.SIGN_UP:
      return { ...state, loading: true }
    case AuthActionTypes.LOGIN_TOKEN_RETRIEVED:
      return { ...state, ...action.payload, loggedIn: true }
    case AuthActionTypes.LOGIN_FAIL:
      return { ...state, loading: false, loginError: action.payload.message }
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        loginError: '',
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      }
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return { ...state, loading: false, registerError: '' }
    case AuthActionTypes.SIGN_UP_FAIL:
      return { ...state, loading: false, registerError: action.payload.message }
    case AuthActionTypes.LOGOUT_SUCCESS:
      return initialAuth()
    default:
      return state
  }
}

// const rootAuthReducer = (state, action) => {
//   return userReducer(
//     authReducer(state, action), action
//   )
// }

export default authReducer
