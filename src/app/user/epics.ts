import { Epic } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { UserActionTypes } from './actionTypes'
import { getUserSuccess, getUserFail } from './actions'
import userApi from '../../api/user'

export const getUserEpic: Epic = action$ => {
  return action$.ofType(UserActionTypes.GET_USER).pipe(
    mergeMap(async () => {
      try {
        const response = await userApi.getUser()
        return getUserSuccess(response.data.data)
      } catch (e) {
        return getUserFail(e)
      }
    }),
  )
}

export default [getUserEpic]
