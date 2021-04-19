import axios from 'axios'
import qs from 'qs'
import client from '../../api/client'
import { Store } from 'redux'
import AppEnvConfig from '../../utils/env'
import { AuthData } from '../../interfaces'

let _store: Store

export const setStore = (store: Store) => {
  _store = store
}

const BASE_URL = AppEnvConfig.apiBaseUrl
const CLIENT_ID = ''
const CLIENT_SECRET = ''

const oauthCredentials = () => ({
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET
})

export type EnginatoOauthTokenType = 'bearer'

export interface OauthResponse {
  access_token: string
  scope: string
  expires_in: number
  refresh_token: string
  token_type: EnginatoOauthTokenType
}

let _refreshToken: string
let _accessToken: string

export const setRefreshToken = (refreshToken: string) => {
  _refreshToken = refreshToken
}

export const setAccessToken = (accessToken: string) => {
  _accessToken = accessToken
  client.defaults.headers.Authorization = `bearer ${_accessToken}`
}

export const revoke = () => {
  _accessToken = ''
  _refreshToken = ''

  if (client.defaults.headers.Authorization) {
    client.defaults.headers.Authorization = undefined
  }
}

export const obtainAccessToken = (authData: AuthData) => {
  const data = {
    ...oauthCredentials(),
    grant_type: 'password',
    ...authData
  }

  const query = qs.stringify(data)

  return axios.post<OauthResponse>(
    `${BASE_URL}signIn`,
    query,
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }
  )
}

export const refreshAccessToken = (refreshToken: string) => {
  const data = {
    ...oauthCredentials(),
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  }

  const query = qs.stringify(data)

  return axios({
    method: 'POST',
    data: query,
    url: `${BASE_URL}/oauth/token`,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
}

let isRefreshing = false
let refreshSubscribers: Array<(error: any, token: string) => void> = []

const revokeListeners: Array<() => void> = []
const tokenRevoke = () => {
  revokeListeners.forEach((fn) => fn())
}

const tokenRefreshedListeners: Array<(refreshData: OauthResponse) => void> = []
const tokenRefreshed = (authData: OauthResponse) => tokenRefreshedListeners.forEach((fn) => fn(authData))

const subscribeTokenRefresh = (cb: (error: any, token: string) => void) => {
  refreshSubscribers.push(cb)
}

const onRefreshed = (error: any, token: string) => {
  refreshSubscribers.map((cb) => cb(error, token))
}

export const onTokenRevoke = (listener: () => void) => {
  revokeListeners.push(listener)
}

export const onTokenRefreshed = (listener: (authData: OauthResponse) => void) => {
  tokenRefreshedListeners.push(listener)
}

client.interceptors.response.use(undefined, (err: any) => {
  const { config, response: { status } } = err
  const originalRequest = config

  if (status !== 401) {
    return Promise.reject(err)
  }

  if (!_refreshToken) {
    tokenRevoke()
    return Promise.reject(err)
  }

  if (!isRefreshing) {
    isRefreshing = true
    refreshAccessToken(_refreshToken).then((response) => {
      const { data } = response
      isRefreshing = false
      onRefreshed(undefined, data.access_token)
      setAccessToken(data.access_token)
      setRefreshToken(data.refresh_token)
      tokenRefreshed(data)
      refreshSubscribers = []
    }).catch((e: any) => {
      isRefreshing = false
      onRefreshed(e, '')
      tokenRevoke()
    })
  }
  const requestSubscribers = new Promise((resolve, reject) => {
    subscribeTokenRefresh((error, token) => {
      if (error) {
        reject(error)
      } else {
        originalRequest.headers.Authorization = `bearer ${token}`
        resolve(axios(originalRequest))
      }
    })
  })
  return requestSubscribers
})

export const loginWithSocials = (loginCredentials) => {
  const data = {
    ...oauthCredentials(),
    grant_type: 'password',
    ...loginCredentials
  }
  const query = qs.stringify(data)

  return axios.post<OauthResponse>(
    `${BASE_URL}oauth/token`,
    query,
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }
  )
}

export default {
  obtainAccessToken,
  refreshAccessToken,
  revoke,
  onTokenRevoke,
  onTokenRefreshed,
  loginWithSocials
}
