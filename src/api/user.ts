import client from './client'
import { User } from '../interfaces'

interface GetUserResponse {
  data: User
}

export const getUser = () => client.get<GetUserResponse>(`user`)

export default {
  getUser,
}
