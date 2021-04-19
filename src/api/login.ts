import client from './client'
interface SignInResponse {
  message: string
  data: string
}

export const signIn = (username: string, password: string) =>
  client.post<SignInResponse>('signIn', {
    username,
    password,
  })

export default {
  signIn,
}
