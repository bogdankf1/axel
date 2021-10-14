import {
  GetCategoriesAction,
  CategoriesActionTypes,
  GetCategoriesSuccessAction,
  GetCategoriesFailAction,
  AddCategoryAction,
  AddCategorySuccessAction,
  AddCategoryFailAction,
  SelectCategoryAction,
  GetTopCategoriesAction,
  GetTopCategoriesFailAction,
  GetTopCategoriesSuccessAction,
} from './actionTypes'
import { CategoryItem } from '../../interfaces'

export const getCategories = (): GetCategoriesAction => ({
  type: CategoriesActionTypes.GET_CATEGORIES,
})
export const getCategoriesSuccess = (list: CategoryItem[]): GetCategoriesSuccessAction => ({
  type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS,
  payload: {
    list,
  },
})
export const getCategoriesFail = (message: string): GetCategoriesFailAction => ({
  type: CategoriesActionTypes.GET_CATEGORIES_FAIL,
  payload: {
    message,
  },
})

export const getTopCategories = (): GetTopCategoriesAction => ({
  type: CategoriesActionTypes.GET_TOP_CATEGORIES,
})
export const getTopCategoriesSuccess = (list: CategoryItem[]): GetTopCategoriesSuccessAction => ({
  type: CategoriesActionTypes.GET_TOP_CATEGORIES_SUCCESS,
  payload: {
    list,
  },
})
export const getTopCategoriesFail = (message: string): GetTopCategoriesFailAction => ({
  type: CategoriesActionTypes.GET_TOP_CATEGORIES_FAIL,
  payload: {
    message,
  },
})

export const addCategory = (title: string): AddCategoryAction => ({
  type: CategoriesActionTypes.ADD_CATEGORY,
  payload: {
    title,
  },
})
export const addCategorySuccess = (message: string): AddCategorySuccessAction => ({
  type: CategoriesActionTypes.ADD_CATEGORY_SUCCESS,
  payload: {
    message,
  },
})
export const addCategoryFail = (message: string): AddCategoryFailAction => ({
  type: CategoriesActionTypes.ADD_CATEGORY_FAIL,
  payload: {
    message,
  },
})

export const selectCategory = (category: CategoryItem): SelectCategoryAction => ({
  type: CategoriesActionTypes.SELECT_CATEGORY,
  payload: {
    category,
  },
})
