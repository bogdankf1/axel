import { CategoryItem } from '../../interfaces'

export enum CategoriesActionTypes {
  GET_CATEGORIES = 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL',
  ADD_CATEGORY = 'ADD_CATEGORY',
  ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS',
  ADD_CATEGORY_FAIL = 'ADD_CATEGORY_FAIL',
  SELECT_CATEGORY = 'SELECT_CATEGORY'
}

export interface GetCategoriesAction {
  type: CategoriesActionTypes.GET_CATEGORIES
}
export interface GetCategoriesSuccessAction {
  type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS
  payload: {
    list: CategoryItem[]
  }
}
export interface GetCategoriesFailAction {
  type: CategoriesActionTypes.GET_CATEGORIES_FAIL
  payload: {
    message: string
  }
}

export interface AddCategoryAction {
  type: CategoriesActionTypes.ADD_CATEGORY
  payload: {
    title: string
  }
}
export interface AddCategorySuccessAction {
  type: CategoriesActionTypes.ADD_CATEGORY_SUCCESS
  payload: {
    message: string
  }
}
export interface AddCategoryFailAction {
  type: CategoriesActionTypes.ADD_CATEGORY_FAIL
  payload: {
    message: string
  }
}

export interface SelectCategoryAction {
  type: CategoriesActionTypes.SELECT_CATEGORY
  payload: {
    category: CategoryItem
  }
}