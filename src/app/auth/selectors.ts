import { RootState } from '../../interfaces'

export const isLoggedInSelector = (state: RootState) => state.auth.loggedIn

export const loginErrorSelector = (state: RootState) => state.auth.loginError

export const registerErrorSelector = (state: RootState) => state.auth.registerError

export const accessTokenSelector = (state: RootState) => state.auth.accessToken
