import { StoreEnhancer } from 'redux'
import {
  logout,
  loginTokenRetrieved,
  AuthTokenParams
} from './actions'
import AuthService from './AuthService'

const storeAuthEnhancer: StoreEnhancer =  (createStore)  => {
  return (...args) => {
    const store = createStore(...args)
    AuthService.onTokenRevoke(() => {
      store.dispatch(logout() as any)
    })
    AuthService.onTokenRefreshed((authData) => {
      const tokens = {
        accessToken:  authData.access_token,
        refreshToken: authData.refresh_token
      } as AuthTokenParams
      store.dispatch(loginTokenRetrieved(tokens) as any)
    })
    return store
  }
}

export default storeAuthEnhancer
