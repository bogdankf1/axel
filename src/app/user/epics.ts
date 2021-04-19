import { Epic } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import {
  UserActionTypes,
  GetUserAction
} from './actionTypes'
import {
  getUserSuccess,
  getUserFail
} from './actions'
import userApi from '../../api/user'

export const getUserEpic: Epic = (action$) => {
  return action$.ofType(UserActionTypes.GET_USER)
    .pipe(mergeMap(async (action: GetUserAction) => {
      try {
        const response = await userApi.getUser(action.payload.accessToken)
        return getUserSuccess(response.data.data)
      } catch (e) {
        return getUserFail(e)
      }
    }))
}

export default [
  getUserEpic
]
