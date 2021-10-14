import { Epic } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import {
  CategoriesActionTypes,
  GetCategoriesAction,
  AddCategoryAction,
  AddCategorySuccessAction,
  GetTopCategoriesAction,
} from './actionTypes'
import {
  getCategoriesSuccess,
  getCategoriesFail,
  addCategorySuccess,
  addCategoryFail,
  getCategories,
  getTopCategoriesSuccess,
  getTopCategoriesFail,
} from './actions'
import categoriesApi from '../../api/categories'
import { SCREEN_NAMES } from '../../navigation/AppNavigator.constants'
import * as NavigationService from '../../navigation/NavigationService'
// import { AppScreens } from '../../navigation/routes'

export const getCategoriesEpic: Epic = action$ => {
  return action$.ofType(CategoriesActionTypes.GET_CATEGORIES).pipe(
    mergeMap(async (action: GetCategoriesAction) => {
      try {
        const response = await categoriesApi.getCategories()
        return getCategoriesSuccess(response.data.data)
      } catch (e) {
        return getCategoriesFail(e.response.data.message)
      }
    }),
  )
}

export const getTopCategoriesEpic: Epic = action$ => {
  return action$.ofType(CategoriesActionTypes.GET_TOP_CATEGORIES).pipe(
    mergeMap(async (action: GetTopCategoriesAction) => {
      try {
        const response = await categoriesApi.getTopCategories()
        return getTopCategoriesSuccess(response.data.data)
      } catch (e) {
        return getTopCategoriesFail(e.response.data.message)
      }
    }),
  )
}

export const addCategoryEpic: Epic = action$ => {
  return action$.ofType(CategoriesActionTypes.ADD_CATEGORY).pipe(
    mergeMap(async (action: AddCategoryAction) => {
      try {
        const response = await categoriesApi.addCategory(action.payload.title)
        return addCategorySuccess(response.data.message)
      } catch (e) {
        return addCategoryFail(e.response.data.message)
      }
    }),
  )
}

export const addCategorySuccessEpic: Epic = action$ => {
  return action$.ofType(CategoriesActionTypes.ADD_CATEGORY_SUCCESS).pipe(
    mergeMap(async (action: AddCategorySuccessAction) => {
      NavigationService.navigate(SCREEN_NAMES.SELECT_CATEGORY)
      return getCategories()
    }),
  )
}

export default [getCategoriesEpic, getTopCategoriesEpic, addCategoryEpic, addCategorySuccessEpic]
