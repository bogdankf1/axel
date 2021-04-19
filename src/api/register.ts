import client from './client'

interface SignUpResponse {
  message: string
}

export const signUp = (
  username: string,
  firstname: string,
  lastname: string,
  password: string
) =>  client.post<SignUpResponse>('registration', {
  username,
  firstname,
  lastname,
  password
})

export default {
  signUp
}
